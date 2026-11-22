import {Request, Response} from 'express';
import {RemoveProductService} from '../../services/product/RemoveProductServerce';

class RemoveProductController{
    async handle(request:Request, response:Response){
        const product_id = request.query.product_id as string;
        const removeProductService = new RemoveProductService();

        const productDelete = await removeProductService.execute({product_id});
        return response.json(productDelete);
    }
}

export {RemoveProductController};