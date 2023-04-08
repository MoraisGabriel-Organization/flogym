import { PrismaUserRepository } from '@/repositories/prisma/prisma-users-repository';
import { UserAlreadyExistsError } from '@/use-cases/errors/user-already-exist-error';
import { RegisterUseCase } from '@/use-cases/register-use-case';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

export async function registerController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6)
  });

  const { name, email, password } = registerBodySchema.parse(request.body);

  try {
    const userRepository = new PrismaUserRepository(); 
    const registerUseCase = new RegisterUseCase(userRepository);
    
    await registerUseCase.execute({ name, email, password });
    
  } catch (error) {
    if(error instanceof UserAlreadyExistsError){
      return reply.status(409).send({message: error.message});
    }
    
    return reply.status(500).send(); //TODO: Fix me, for new strategy
  }

  return reply.status(201).send();
}
