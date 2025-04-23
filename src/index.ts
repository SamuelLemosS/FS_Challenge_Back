import { ProductService } from "./application/services/ProductService";
import { CreateNewProduct } from "./application/useCases/CreateNewProduct";
import { DeleteProduct } from "./application/useCases/DeleteProduct";
import { EditProduct } from "./application/useCases/EditProduct";
import { GetAllProducts } from "./application/useCases/GetAllProducts";
import { ProductRepository } from "./infrastructre/repository/ProductRepository";
import { ProductController } from "./web/controller/ProductController";



const productService = new ProductService(new ProductRepository());

const getAllProducts = new GetAllProducts(productService);
const createNewProduct = new CreateNewProduct(productService);
const editProduct = new EditProduct(productService);
const deleteProduct = new DeleteProduct(productService);

const productController = new ProductController(
    getAllProducts,
    createNewProduct,
    editProduct,
    deleteProduct,
);

export {productController}