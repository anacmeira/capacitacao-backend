import prismaClient from "../../prisma";
import { CategoryRequest } from "../../models/interfaces/category/CategoryRequest";

class CreatCategoryService{
    async execute({name,user_id}: CategoryRequest){
        if(name === "" || name === null || !name){
            throw new Error("Invalid name");
        }

        const category = await prismaClient.category.create({
            data: {
                name:name,
                user_id: user_id,
            },
            select:{
                id: true,
                name: true
            },
        })
        return category;
    }
}

export {CreatCategoryService};