import { Module } from '@nestjs/common';
import { EmployeesProductsService } from './employees_products.service';
import { EmployeesProductsController } from './employees_products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeesProducts, EmployeesProductsSchema } from './schemas/employees_products.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: EmployeesProducts.name, schema: EmployeesProductsSchema }]),
    JwtModule,
  ],
  controllers: [EmployeesProductsController],
  providers: [EmployeesProductsService],
})
export class EmployeesProductsModule {}
