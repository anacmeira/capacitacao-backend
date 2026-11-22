import { Request, Response } from "express";
import { EditSupplierService } from "../../services/supplier/EditSupplierService";

class EditSupplierController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;
    const supplier_id =
      request.params.id ||
      (request.query.supplier_id as string) ||
      request.body.supplier_id;

    const editSupplierService = new EditSupplierService();
    const supplierEdited = await editSupplierService.execute({
      name,
      supplier_id,
    });

    return response.json(supplierEdited);
  }
}

export { EditSupplierController };