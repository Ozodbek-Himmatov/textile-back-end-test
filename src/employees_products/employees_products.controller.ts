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
import { EmployeesProductsService } from './employees_products.service';
import { CreateEmployeesProductsDto } from './dto/create-employees_products.dto';
import { UpdateEmployeesProductsDto } from './dto/update-employees_products.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
// import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { HttpCode } from '@nestjs/common';

@ApiTags('EmployeesProducts')
@Controller('employeesProducts')
export class EmployeesProductsController {
  constructor(private readonly employeesProductsService: EmployeesProductsService) {}

  @HttpCode(200)
  @ApiOperation({ summary: 'Create employeesProducts' })
  // @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createEmployeesProductsDto: CreateEmployeesProductsDto) {
    return this.employeesProductsService.create(createEmployeesProductsDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Find all employeesProducts' })
  // @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Query() query: any) {
    return this.employeesProductsService.findAll(query);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Get one employeesProducts' })
  // @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeesProductsService.findOne(id);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Update employeesProducts by id' })
  // @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateEmployeesProductsDto: UpdateEmployeesProductsDto) {
    return this.employeesProductsService.update(id, updateEmployeesProductsDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Delete employeesProducts by id' })
  // @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeesProductsService.remove(id);
  }
}
