import { Product } from "../../domain/entities/Product";
import { ProductService } from "../services/ProductService";

export class CreateNewProduct {
    
    constructor(private productService: ProductService) {}

    async execute(newProduct: Product){
        
        const produtcs = await this.productService.createProduct(newProduct)
        return produtcs
    }
    
}