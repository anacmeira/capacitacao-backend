import prismaClient from "../../prisma";
import {hash} from "bcryptjs";
import { UserRequest } from "../../models/interfaces/user/UserRequest";

class CreatUserService{
    async execute({name,email, password}: UserRequest){
        if(!email){
            throw new Error("Email incorrect!");
        }
        
        const userAlredyExist = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if(userAlredyExist){
            throw new Error("Email alredy exists!");
        }

        //Encripitando a senha do usuário:
        const passwordHash = await hash(password,8);

        //Criando novo usuário:
        const user = prismaClient.user.creat({
            data: {
                name: name,
                email: email,
                password: passwordHash
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        })

        return user;
    }

}

export {CreatUserService}