import { ApiProperty } from '@nestjs/swagger';

export class UpdateRoleDto {
  @ApiProperty({ example: 'employee' })
  name?: string;

  @ApiProperty({ example: '' })
  description?: string;
}
