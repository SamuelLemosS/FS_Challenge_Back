import { ProductService } from "../services/ProductService"
import { Product } from "../../domain/entities/Product";

export class DeleteProduct{
    constructor(private productService: ProductService) {}

    async execute(idProduct:any){
        
        const produtcs = await this.productService.deleteProduct(idProduct)
        return produtcs
    }
}