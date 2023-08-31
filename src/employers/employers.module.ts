import { Module } from '@nestjs/common';
import { EmployersService } from './employers.service';
import { EmployersController } from './employers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Employers, EmployersSchema } from './schemas/employers.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Employers.name, schema: EmployersSchema }]),
    JwtModule,
  ],
  controllers: [EmployersController],
  providers: [EmployersService],
})
export class EmployersModule {}
