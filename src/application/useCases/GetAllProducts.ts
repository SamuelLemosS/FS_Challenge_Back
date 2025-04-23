import { ProductService } from "../services/ProductService";

export class GetAllProducts{
    constructor(private productService: ProductService) {}

    async execute(){
        
        const produtcs = await this.productService.findAll()
        return produtcs
    }
    
}