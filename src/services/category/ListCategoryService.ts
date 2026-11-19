import prismaClient from "../../prisma/index";

class ListCategoryService{
    async execute(){
        //buscar todas as categorias presentes no banco:

        const categories = await prismaClient.category.findMany({
            select: {
                id: true,
                name: true
            },
        });
        return categories;
    }
}

export {ListCategoryService}