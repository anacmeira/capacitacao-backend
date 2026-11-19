import { Request, Response } from "express";
import { CategoryRequest } from "../../models/interfaces/category/CategoryRequest";
import { CreatCategoryService } from "../../services/category/CreatCategoryService";

class CreatCategoryController {
    async handle(request: Request, response: Response){
        const {name}: CategoryRequest = request.body;
        const user_id = request.user_id;
        const creatCategoryService = new CreatCategoryService();
        const category = await creatCategoryService.execute({name, user_id});
        return response.json(category);
        }
}

export {CreatCategoryController}