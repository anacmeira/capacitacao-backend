import { Router, Request, Response } from "express";
import { CreatUserController } from "./controllers/user/CreatUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { isAutheticated } from "./middlewares/isAuthenticated";
import { DetailUserController } from "./controllers/user/DetailController";
import { RemoveUserController } from "./controllers/user/RemoveUserController";
import { CreatCategoryController } from "./controllers/category/CreatCategoryController";
import { EditCategoryController } from "./controllers/category/EditCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";

const router = Router();
router.get("/test",(request: Request, response: Response) => {
    return response.json({ok: true});
});

// Rotas de Usuário:
router.post('/user', new CreatUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', isAutheticated, new DetailUserController().handle)
router.delete('/user/remove', new RemoveUserController().handle);

//Rotas de Categoria:
router.post("/category", isAutheticated, new CreatCategoryController().handle);
router.put("/category/edit", isAutheticated, new EditCategoryController().handle);
router.get("/category/all", isAutheticated, new ListCategoryController().handle);

export { router };