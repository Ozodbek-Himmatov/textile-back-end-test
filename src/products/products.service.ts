import { Injectable } from '@nestjs/common';
import { CreateProductsDto } from './dto/create-products.dto';
import { UpdateProductsDto } from './dto/update-products.dto';
import { Products, ProductsDocument } from './schemas/products.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Products.name)
    private productsModel: Model<ProductsDocument>,
  ) {}

  async create(createProductsDto: CreateProductsDto) {
    const res = await new this.productsModel(createProductsDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.productsModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.productsModel.findById(id).exec();
  }

  async update(id: string, updateProductsDto: UpdateProductsDto) {
    return this.productsModel
      .findByIdAndUpdate(id, updateProductsDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.productsModel.findByIdAndDelete(id).exec();
  }
}
