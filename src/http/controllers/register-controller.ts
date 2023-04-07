import { registerUseCase } from "@/use-cases/register-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function registerController(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6)
  });
  
  const {name, email, password} = registerBodySchema.parse(request.body);
  
  try {
   await registerUseCase({name, email,password});

  } 
  catch (error) {
    return reply.status(409).send({message: "User already exists"});
  }

  return reply.status(201).send();
}
