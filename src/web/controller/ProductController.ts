import { CreateNewProduct } from "../../application/useCases/CreateNewProduct";
import { DeleteProduct } from "../../application/useCases/DeleteProduct";
import { EditProduct } from "../../application/useCases/EditProduct";
import { GetAllProducts } from "../../application/useCases/GetAllProducts";
import { Request, Response } from "express";
import { Product } from "../../domain/entities/Product";
import { z } from 'zod';

export class ProductController{
    constructor(
        private  getAllProducts : GetAllProducts,
        private  createNewProduct : CreateNewProduct,
        private  editProduct : EditProduct,
        private  deleteProduct:DeleteProduct,
    ){}

    async handleAllProducts(req: Request, res: Response){
       const produtcs = await this.getAllProducts.execute()

       return res.status(200).json(produtcs)
    }

    async handleCreateProduct(req: Request, res: Response) {
        try {

            const productSchema = z.object({
                name: z.string(),
                price: z.number(),
                description: z.string(),
              });

              const newProduct:Product = productSchema.parse(req.body)
            const message = await this.createNewProduct.execute(newProduct);
            return res.status(201).json(message);
          } catch (error) {
            console.log(error);
      
            if (error instanceof Error) {
              return res.status(400).json({
                error: "missing required fields",
              });
            }
      
            return res.status(400).json({
              error: "unexpected error",
            });
          }

    }

    async handleEditProduct(req: Request, res: Response){
        try {
            const productSchema = z.object({
                name: z.string(),
                price: z.number(),
                description: z.string(),
              });

              const newProduct:Product = productSchema.parse(req.body)
            const idProduct: any  = req.params.id
            const message = await this.editProduct.execute(newProduct, idProduct);
            return res.status(201).json(message);
          } catch (error) {
            console.log(error);
      
            if (error instanceof Error) {
              return res.status(400).json({
                error: error.message,
              });
            }
      
            return res.status(400).json({
              error: "unexpected error",
            });
          }
    }

    async handleDeleteProduct(req: Request, res: Response){
        try {
            const idProduct: any  = req.params.id
            const message = await this.deleteProduct.execute(idProduct);
            return res.status(201).json(message);
          } catch (error) {
            console.log(error);
      
            if (error instanceof Error) {
              return res.status(400).json({
                error: error.message,
              });
            }
      
            return res.status(400).json({
              error: "unexpected error",
            });
          }
    }

}