/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateCoffeeDto } from './dto/create-coffee-dto';
import { UpdateCoffeeDto } from './dto/update-coffee-dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService:ProductsService){}

  @Get()
  // findAll(@Query() paginationQuery) {
  //   // const { limit, offset } = paginationQuery;
  //   return this.productsService.findAll();
  // }

  findAll() {
    // const { limit, offset } = paginationQuery;
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string ){
    return this.productsService.findOne(id);
  }

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto){
    return this.productsService.create(createCoffeeDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto){
    return this.productsService.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string){
    this.productsService.remove(id);
  }
}
