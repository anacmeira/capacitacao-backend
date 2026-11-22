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
import { EditProductController } from "./controllers/product/EditProductController";
import { ListProductByCategoryController } from "./controllers/product/ListProductByCategoryController";
import { ListProductController } from "./controllers/product/ListProductController";
import { RemoveProductController } from "./controllers/product/RemoveProductController";
import { CreateSupplierController } from "./controllers/supplier/CreatSupplierController";
import { ListSuppliersController } from "./controllers/supplier/ListSuppliersController";
import { EditSupplierController } from "./controllers/supplier/EditSupplierController";
import { RemoveSupplierController } from "./controllers/supplier/RemoveSupplierController";



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
router.post("/product", isAutheticated as any, upload.single("file") as any, new CreatProductController().handle as any);
router.put("/product/edit", isAutheticated as any, upload.single("file") as any, new EditProductController().handle as any)
router.get("/product", isAutheticated, new ListProductByCategoryController().handle);
router.get("/products", isAutheticated, new ListProductController().handle);
router.delete("/product/delete", isAutheticated, new RemoveProductController().handle);

//Rotas de Fornecedor:
router.post("/supplier", isAutheticated, new CreateSupplierController().handle);
router.get("/suppliers", isAutheticated, new ListSuppliersController().handle);
router.put("/supplier/edit", isAutheticated, new EditSupplierController().handle);
router.delete("/supplier/delete", isAutheticated, new RemoveSupplierController().handle);

export { router };