import { Product } from "../../domain/entities/Product";
import { ProductService } from "../services/ProductService";

export class EditProduct{

    constructor(private productService: ProductService) {}

    async execute(newProduct: Product, idProduct:any){
        
        const produtcs = await this.productService.updateProduct(newProduct, idProduct)
        return produtcs
    }
    

}