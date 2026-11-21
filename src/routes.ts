import { Router, Request, Response } from "express";
import multer from "multer";
import uploadConfig from "../src/config/multer"
import { CreatUserController } from "./controllers/user/CreatUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { isAutheticated } from "./middlewares/isAuthenticated";
import { DetailUserController } from "./controllers/user/DetailController";
import { RemoveUserController } from "./controllers/user/RemoveUserController";
import { CreatCategoryController } from "./controllers/category/CreatCategoryController";
import { EditCategoryController } from "./controllers/category/EditCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { RemoveCategoryController } from "./controllers/category/RemoveCategoryController";
import { CreatProductController } from "./controllers/product/CreatProductController";

const router = Router();
router.get("/test",(request: Request, response: Response) => {
    return response.json({ok: true});
});

const upload = multer(uploadConfig.upload("./tmp"));

// Rotas de Usuário:
router.post('/user', new CreatUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', isAutheticated, new DetailUserController().handle)
router.delete('/user/remove', new RemoveUserController().handle);

//Rotas de Categoria:
router.post("/category", isAutheticated, new CreatCategoryController().handle);
router.put("/category/edit", isAutheticated, new EditCategoryController().handle);
router.get("/category/all", isAutheticated, new ListCategoryController().handle);
router.delete("/category/remove", isAutheticated, new RemoveCategoryController().handle);

//Rotas de Produto:
router.post("/product", isAutheticated as any, upload.single("file") as any, new CreatProductController().handle as any)
export { router };