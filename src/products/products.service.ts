/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './entities/products.entity';

@Injectable()
export class ProductsService {
    private products: Product[] = [
        {
            id: 1,
            name: "Pizza",
            brand: "This way",
            tags: ["magarita, pepperoni"]
        },
        {
            id: 2,
            name: "Milk",
            brand: "This way",
            tags: ["Fresh"]
        }
    ];

    findAll(): Product[] {
        return this.products;
    }

    findOne(id: string): Product{
        const coffee = this.products.find(item => item.id === +id);
        if(!coffee)
            throw new NotFoundException(`Coffee #${id} not found`);
        return coffee;
    }

    create(product: any){
        this.products.push(product);
    }

    update(id: string, product: any){
        const existingProduct = this.findOne(id);
        if(existingProduct){
            return product;
        }
    }

    remove(id:string){
        const productIndex = this.products.findIndex(item => item.id === +id);
        if(productIndex >= 0){
            this.products.splice(productIndex, 1);
        }
    }
}
