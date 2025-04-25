import { Router, Request, Response, NextFunction } from "express";
import { productController } from ".";


export const routes = Router();

routes.get(
  "/",
  (req: Request, res: Response, next: NextFunction) => {
    res.send("Test");
  }
);

routes.get(
  "/product",
  (req: Request, res: Response, next: NextFunction) => {
    return productController.handleAllProducts(req, res)
  }
);

routes.post(
  "/produt",
  (req: Request, res: Response, next: NextFunction) => {
    return productController.handleCreateProduct(req, res)
  }
);

routes.put(
  "/product/:id",
  (req: Request, res: Response, next: NextFunction) => {
    return productController.handleEditProduct(req, res)
  }
);

routes.delete(
  "/product/:id",
  (req: Request, res: Response, next: NextFunction) => {
    return productController.handleDeleteProduct(req, res)
  }
);