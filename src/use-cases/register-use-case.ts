import { IUserRepository } from '@/repositories/users-repository';
import { hash } from 'bcryptjs';
import { UserAlreadyExistsError } from './errors/user-already-exist-error';

interface RegisterUseRequest {
  name: string;
  email: string;
  password: string;
}

export class RegisterUseCase {
  constructor(private usersRepository: IUserRepository){}

  async execute ({
    name,
    email,
    password
  }: RegisterUseRequest) {
   
    const userWithSameEmail = await this.usersRepository.findByEmail(email);
  
    if (userWithSameEmail) {
      throw new UserAlreadyExistsError();
    }
  
    const password_hash = await hash(password, 6); // 6 == a number of rounds
  
    await this.usersRepository.create({
      name,
      email,
      password_hash,
    });
  }
  
}
