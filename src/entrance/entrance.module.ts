import { Module } from '@nestjs/common';
import { EntranceService } from './entrance.service';
import { EntranceController } from './entrance.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Entrance, EntranceSchema } from './schemas/entrance.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Entrance.name, schema: EntranceSchema }]),
    JwtModule,
  ],
  controllers: [EntranceController],
  providers: [EntranceService],
})
export class EntranceModule {}
