import { IUserRepository } from '@/repositories/contracts/users-repository';
import { User } from '@prisma/client';
import { hash } from 'bcryptjs';
import { UserAlreadyExistsError } from './errors/user-already-exist-error';

interface RegisterUseCaseRequest {
  name: string;
  email: string;
  password: string;
}

interface RegisterUseCaseResponse {
  user: User;
}

export class RegisterUseCase {
  constructor(private usersRepository: IUserRepository){}

  async execute ({
    name,
    email,
    password
  }: RegisterUseCaseRequest): Promise<RegisterUseCaseResponse> {
   
    const userWithSameEmail = await this.usersRepository.findByEmail(email);
  
    if (userWithSameEmail) {
      throw new UserAlreadyExistsError();
    }
  
    const password_hash = await hash(password, 6); // 6 == a number of rounds
  
    const user = await this.usersRepository.create({
      name,
      email,
      password_hash,
    });

    return { user };
  }
  
}
