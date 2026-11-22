import prismaClient from "../../prisma";

class ListSuppliersService {
  async execute() {
    const suppliers = await prismaClient.supplier.findMany({
      select: {
        id: true,
        name: true,
        user_id: true,
      },
    });

    return suppliers;
  }
}

export { ListSuppliersService };