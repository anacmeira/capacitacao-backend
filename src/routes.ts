import { Router, Request, Response } from "express";
import { CreatUserController } from "./controllers/user/CreatUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { isAutheticated } from "./middlewares/isAuthenticated";
import { DetailUserController } from "./controllers/user/DetailController";

const router = Router();
router.get("/test",(request: Request, response: Response) => {
    return response.json({ok: true});
});

// Rotas de Usuário:
router.post('/user', new CreatUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', isAutheticated, new DetailUserController().handle)

export { router };