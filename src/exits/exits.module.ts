import { Module } from '@nestjs/common';
import { ExitsService } from './exits.service';
import { ExitsController } from './exits.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Exits, ExitsSchema } from './schemas/exits.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Exits.name, schema: ExitsSchema }]),
    JwtModule,
  ],
  controllers: [ExitsController],
  providers: [ExitsService],
})
export class ExitsModule {}
