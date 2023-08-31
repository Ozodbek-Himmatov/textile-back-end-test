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
import { GroupsService } from './groups.service';
import { CreateGroupsDto } from './dto/create-groups.dto';
import { UpdateGroupsDto } from './dto/update-groups.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
// import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { HttpCode } from '@nestjs/common';

@ApiTags('Groups')
@Controller('groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @HttpCode(200)
  @ApiOperation({ summary: 'Create groups' })
  // @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createGroupsDto: CreateGroupsDto) {
    return this.groupsService.create(createGroupsDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Find all groups' })
  // @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Query() query: any) {
    return this.groupsService.findAll(query);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Get one groups' })
  // @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.groupsService.findOne(id);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Update groups by id' })
  // @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateGroupsDto: UpdateGroupsDto) {
    return this.groupsService.update(id, updateGroupsDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Delete groups by id' })
  // @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.groupsService.remove(id);
  }
}
