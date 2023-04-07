import { prisma } from "@/lib/prisma";
import { PrismaUserRepository } from "@/repositories/prisma-users-repository";
import { hash } from "bcryptjs";

interface RegisterUseRequest {
  name: string;
  email: string;
  password: string;
}

export async  function registerUseCase({name,email,password}: RegisterUseRequest) {
  
  const userWithSameEmail = await prisma.user.findUnique({
    where: {
      email
    }
  });

  if(userWithSameEmail){
    throw new Error("Email already exists")
   
  }
  
  const password_hash = await hash(password, 6)//6 == a number of rounds

  const prismaUserRepository = new PrismaUserRepository();

  await prismaUserRepository.create({
    name,
    email,
    password_hash
  });
 
}
