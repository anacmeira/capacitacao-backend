import { Router, Request, Response } from "express";
import { CreatUserController } from "./controllers/user/CreatUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
const router = Router();
router.get("/test",(request: Request, response: Response) => {
    return response.json({ok: true});
});

// Rotas de Usuário:
router.post('/user', new CreatUserController().handle);
router.post('/session', new AuthUserController().handle);

export { router };