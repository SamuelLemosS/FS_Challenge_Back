import { Product } from "../../domain/entities/Product";
import { ProductRepository } from "../../infrastructre/repository/ProductRepository";

export class ProductService{
    constructor(
        private productRepository : ProductRepository
    ){}

    async findAll(){
        return await this.productRepository.findAll()
    }

    async createProduct(produtc: Product){
        return await this.productRepository.createProduct(produtc)
    }

    async updateProduct(produtc: Product, productId:any){
        return await this.productRepository.updateProduct(produtc, productId)
    }

    async deleteProduct(productId: any){
        return await this.productRepository.deleteProduct(productId)
    }
}