import { Request, Response } from "express";
import { RemoveSupplierService } from "../../services/supplier/RemoveSupplierService";

class RemoveSupplierController {
  async handle(request: Request, response: Response) {
    const supplier_id =
      request.params.id ||
      (request.query.supplier_id as string) ||
      request.body.supplier_id;

    const removeSupplierService = new RemoveSupplierService();
    const supplier = await removeSupplierService.execute(supplier_id);

    return response.json(supplier);
  }
}

export { RemoveSupplierController };