import {Request, Response} from 'express';
import {ListProductService} from '../../services/product/ListProductService';

class ListProductController{
    async handle(request: Request, response:Response){
        const listCategoryService = new ListProductService();
        const products = await listCategoryService.execute();

        return response.json(products);
    }
}

export {ListProductController};