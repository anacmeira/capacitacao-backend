import { Request, Response } from "express";
import { ListSuppliersService } from "../../services/supplier/ListSuppliersService";

class ListSuppliersController {
  async handle(request: Request, response: Response) {
    const listSuppliersService = new ListSuppliersService();
    const suppliers = await listSuppliersService.execute();

    return response.json(suppliers);
  }
}

export { ListSuppliersController };