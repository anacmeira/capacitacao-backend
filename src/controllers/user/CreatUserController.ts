import { Request, Response } from "express";
import { CreatUserService } from "../../services/user/CreatUserService";
import { UserRequest } from "../../models/interfaces/user/UserRequest";

class CreatUserController {
    async handle(request: Request, response: Response){
        const { name, email, password}: UserRequest = request.body;
        const creatUserService = new CreatUserService();
        const user = await creatUserService.execute({
            name, email, password
        });
        return response.json(user);
    }
}

export { CreatUserController }