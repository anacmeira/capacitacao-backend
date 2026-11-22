import prismaClient from "../../prisma";

class RemoveSupplierService {
  async execute(supplier_id: string) {
    if (!supplier_id) {
      throw new Error("ID do fornecedor não informado!");
    }

    const removeSupplier = await prismaClient.supplier.delete({
      where: {
        id: supplier_id,
      },
    });

    return removeSupplier;
  }
}

export { RemoveSupplierService };