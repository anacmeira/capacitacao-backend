import prismaClient from '../../prisma/index';

interface ListProductByCategoryIdRequest{
    category_id: string;
}

class ListProductByCategoryService{
    async execute({category_id}: ListProductByCategoryIdRequest){
        const finfProductByCategoryId = await prismaClient.product.findMany({
            where: {
                category_id: category_id
            }
        });

        return finfProductByCategoryId;
    }
}

export {ListProductByCategoryService};