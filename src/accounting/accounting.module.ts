import { Module } from '@nestjs/common';
import { AccountingService } from './accounting.service';
import { AccountingController } from './accounting.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Accounting, AccountingSchema } from './schemas/accounting.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Accounting.name, schema: AccountingSchema }]),
    JwtModule,
  ],
  controllers: [AccountingController],
  providers: [AccountingService],
})
export class AccountingModule {}
