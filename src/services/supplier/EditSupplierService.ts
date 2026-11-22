import prismaClient from "../../prisma";
import { EditSupplierRequest } from "../../models/interfaces/supplier/EditSupplierRequest";

class EditSupplierService {
  async execute({ name, supplier_id }: EditSupplierRequest) {
    if (!supplier_id || !name) {
      throw new Error("Dados inválidos para editar o fornecedor!");
    }

    const supplierEdited = await prismaClient.supplier.update({
      where: {
        id: supplier_id,
      },
      data: {
        name: name,
      },
    });

    return supplierEdited;
  }
}

export { EditSupplierService };