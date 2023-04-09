import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository';
import { compare } from 'bcryptjs';
import { describe, expect, it } from 'vitest';
import { UserAlreadyExistsError } from './errors/user-already-exist-error';
import { RegisterUseCase } from './register-use-case';

describe('Register User', () => {

  it('should be able to register', async () => {
    const prismUserRepository = new InMemoryUsersRepository();
    const registerUseCase = new RegisterUseCase(prismUserRepository);

    const { user } = await registerUseCase.execute({
      name: 'John Doe',
      email: 'jhondoe@exemple.com',
      password: '123456'
    });

    //Espero que o id retornado seja qualquer string
    expect(user.id).toEqual(expect.any(String));

  });

  it('should hash user password upon registration', async () => {
    const prismUserRepository = new InMemoryUsersRepository();
    const registerUseCase = new RegisterUseCase(prismUserRepository);

    const { user } = await registerUseCase.execute({
      name: 'John Doe',
      email: 'jhondoe@exemple.com',
      password: '123456'
    });

    const isPasswordCorrectlyHashed = await compare(
      '123456',
      user.password_hash
    );
    expect(isPasswordCorrectlyHashed).toBe(true);

  });

  it('should not be able to register with same email twice ', async () => {
    const prismUserRepository = new InMemoryUsersRepository();
    const registerUseCase = new RegisterUseCase(prismUserRepository);

    const email = 'johndoe@exemple.com';

    await registerUseCase.execute({
      name: 'John Doe',
      email,
      password: '123456'
    });

    
    //Toda vez que eu tiver uma promise dentro do expect deve ser utilizado o "await"
    await expect( () => 
      registerUseCase.execute({
        name: 'John Doe',
        email,
        password: '123456'
      }),
    ).rejects.toBeInstanceOf(UserAlreadyExistsError);

  });

});


