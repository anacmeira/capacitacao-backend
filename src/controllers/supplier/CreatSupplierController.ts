import { Request, Response } from "express";
import { CreateSupplierService } from "../../services/supplier/CreatSupplierService";

class CreateSupplierController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;
    const user_id = request.user_id;

    const createSupplierService = new CreateSupplierService();
    const supplier = await createSupplierService.execute({ name, user_id });

    return response.json(supplier);
  }
}

export { CreateSupplierController };