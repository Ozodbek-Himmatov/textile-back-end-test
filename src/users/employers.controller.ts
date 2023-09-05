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
import { EmployersService } from './employers.service';
import { CreateEmployersDto } from './dto/create-user.dto';
import { UpdateEmployersDto } from './dto/update-user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
// import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { HttpCode } from '@nestjs/common';

@ApiTags('Employers')
@Controller('employers')
export class EmployersController {
  constructor(private readonly employersService: EmployersService) {}

  @HttpCode(200)
  @ApiOperation({ summary: 'Create employers' })
  // @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createEmployersDto: CreateEmployersDto) {
    return this.employersService.create(createEmployersDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Find all employers' })
  // @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Query() query: any) {
    return this.employersService.findAll(query);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Get one employers' })
  // @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employersService.findOne(id);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Update employers by id' })
  // @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmployersDto: UpdateEmployersDto,
  ) {
    return this.employersService.update(id, updateEmployersDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Delete employers by id' })
  // @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employersService.remove(id);
  }
}
