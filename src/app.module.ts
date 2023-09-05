import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { join, resolve } from 'path';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AccountingModule } from './accounting/accounting.module';
import { EmployeesModule } from './employees/employees.module';
import { EmployersModule } from './users/employers.module';
import { EntranceModule } from './entrance/entrance.module';
import { ExitsModule } from './exits/exits.module';
import { ProductsModule } from './products/products.module';
import { RawMaterialsModule } from './raw_materials/raw_materials.module';
import { EmployeesProductsModule } from './employees_products/employees_products.module';
import { EmployeeAttendanceModule } from './user_attendance/user_attendance.module';
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: resolve(__dirname, 'static'),
    }),
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    AccountingModule,
    EmployeesModule,
    EmployersModule,
    EntranceModule,
    ExitsModule,
    ProductsModule,
    EmployeesProductsModule,
    RawMaterialsModule,
    EmployeeAttendanceModule,
    AuthModule,
    RolesModule,
  ],
})
export class AppModule {}
