import prismaClient from "../../prisma";
import { ProductRequest } from "../../models/interfaces/product/ProductRequest";

class CreatProductService{

    async execute({name, price, description, banner, category_id,amount,supplier_id,
      user_id,}: ProductRequest){
        const product = await prismaClient.product.create({
            data: {
                name: name,
                price: price,
                description: description,
                banner: banner,
                category_id: category_id,
                amount: +amount,
                supplier_id: supplier_id,
                user_id: user_id
            },

        });
        return product;
    }

}

export {CreatProductService};