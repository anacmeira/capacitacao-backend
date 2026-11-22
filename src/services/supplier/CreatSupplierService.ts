import prismaClient from "../../prisma";
import { SupplierRequest } from "../../models/interfaces/supplier/SupplierRequest";

class CreateSupplierService {
  async execute({ name, user_id }: SupplierRequest) {
    if (!name) {
      throw new Error("Nome do fornecedor inválido!");
    }

    const supplier = await prismaClient.supplier.create({
      data: {
        name: name,
        user_id: user_id,
      },
      select: {
        id: true,
        name: true,
        user_id: true,
      },
    });

    return supplier;
  }
}

export { CreateSupplierService };