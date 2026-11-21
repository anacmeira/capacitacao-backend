import { Request, Response } from "express";
import { CreatProductService } from "../../services/product/CreatProductService";

class CreatProductController {
  async handle(request: Request, response: Response) {
    const { name, price, description, category_id, amount, supplier_id } = request.body;
    const user_id = request.user_id;

    const creatProductService = new CreatProductService();

    if (!request.file) {
      throw new Error("Error sending image");
    } else {
      const { filename: banner } = request.file;
      const product = await creatProductService.execute({
        name,
        price,
        description,
        banner,
        category_id,
        amount,
        supplier_id,
        user_id,
      });

      return response.json(product);
    }
  }
}

export { CreatProductController };