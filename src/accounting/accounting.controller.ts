import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { AccountingService } from './accounting.service';
import { CreateAccountingDto } from './dto/create-accounting.dto';
import { UpdateAccountingDto } from './dto/update-accounting.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
// import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { HttpCode } from '@nestjs/common';

@ApiTags('Accounting')
@Controller('accounting')
export class AccountingController {
  constructor(private readonly accountingService: AccountingService) {}

  @HttpCode(200)
  @ApiOperation({ summary: 'Create accounting' })
  // @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createAccountingDto: CreateAccountingDto) {
    return this.accountingService.create(createAccountingDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Find all accounting' })
  // @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Query() query: any) {
    return this.accountingService.findAll(query);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Get one accounting' })
  // @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountingService.findOne(id);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Update accounting by id' })
  // @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateAccountingDto: UpdateAccountingDto) {
    return this.accountingService.update(id, updateAccountingDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Delete accounting by id' })
  // @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountingService.remove(id);
  }
}
