import { PrismaUserRepository } from '@/repositories/prisma/prisma-users-repository';
import { User } from '@prisma/client';
import { compare } from 'bcryptjs';
import { InvalidCredentialsError } from './errors/invalid-credentials-error';

interface AuthenticateUseCaseRequest {
  email: string;
  password: string;
}

interface AuthenticateUseCaseResponse {
  user: User
}

export class AuthenticateUseCase {
  constructor(private userRepository: PrismaUserRepository){}

  async execute({ email, password }:AuthenticateUseCaseRequest): Promise<AuthenticateUseCaseResponse>{
    //auth

    const user = await this.userRepository.findByEmail(email);

    if(!user) {
      throw new InvalidCredentialsError();
    }

    const doesPasswordsMatch = await compare(password, user.password_hash);

    if(!doesPasswordsMatch){
      throw new InvalidCredentialsError();
    }

    return {user};
  }
}
