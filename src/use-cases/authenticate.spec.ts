import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository';
import { hash } from 'bcryptjs';
import { describe, expect, it } from 'vitest';
import { AuthenticateUseCase } from './authenticate-use-case';
import { InvalidCredentialsError } from './errors/invalid-credentials-error';

/* sut => System Under Test
  Sistema em teste (SUT) refere-se a um sistema que está sendo testado para 
  operação correta. De acordo com o ISTQB, é o objeto de teste.
*/

describe('Authenticate Use Case', () => {

  it('should be able to authenticate', async () => {
    const userRepository = new InMemoryUsersRepository();
    //sut => é o objeto de teste
    const sut = new AuthenticateUseCase(userRepository);

    await userRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password_hash: await hash('123456', 6)//6 => Number of rounds
    });


    const { user } = await sut.execute({
      email: 'johndoe@example.com',
      password: '123456'
    });

    expect(user.id).toEqual(expect.any(String));

  });

  it('should not be able to authenticate with wrong email', async () => {
    const userRepository = new InMemoryUsersRepository();
    //sut => é o objeto de teste
    const sut = new AuthenticateUseCase(userRepository);

    expect(() => 
      sut.execute({
        email: 'johndo@example.com',
        password: '123456'
      })
    ).rejects.toBeInstanceOf(InvalidCredentialsError);
  });

  it('should not be able to authenticate with wrong password', async () => {
    const userRepository = new InMemoryUsersRepository();
    //sut => é o objeto de teste
    const sut = new AuthenticateUseCase(userRepository);

    await userRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password_hash: await hash('123456', 6)//6 => Number of rounds
    });

    expect(() => 
      sut.execute({
        email: 'johndo@example.com',
        password: '1234567'
      })
    ).rejects.toBeInstanceOf(InvalidCredentialsError);
  });

});


