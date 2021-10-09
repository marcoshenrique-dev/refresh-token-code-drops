import {client} from '../../prisma/client';
import {hash} from 'bcryptjs';
interface IUserRequest {
  name: string;
  password: string;
  username: string;
}

class CreateUserUseCase {
  async execute({name, password, username}: IUserRequest) {

    // verificar se o usuário existe
    const userAlreadyExists = await client.user.findFirst({
      where: {
        username
      }
    });

    if(userAlreadyExists) {
      throw new Error("user already exists");
    }
    // cadastra o usuário

    const passwordHash = await hash(password, 8);

    const user = await client.user.create({
      data: {
        name,
        username,
        password: passwordHash,
      }
    });


    return user;
    
  }
}

export {CreateUserUseCase};