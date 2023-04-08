export class UserAlreadyExistsError extends Error {
  constructor(){
    super('Já existe uma conta com esse e-mail');
  }
}
