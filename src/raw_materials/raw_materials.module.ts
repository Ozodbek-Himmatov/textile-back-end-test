import { Module } from '@nestjs/common';
import { RawMaterialsService } from './raw_materials.service';
import { RawMaterialsController } from './raw_materials.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RawMaterials, RawMaterialsSchema } from './schemas/raw_materials.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: RawMaterials.name, schema: RawMaterialsSchema }]),
    JwtModule,
  ],
  controllers: [RawMaterialsController],
  providers: [RawMaterialsService],
})
export class RawMaterialsModule {}
