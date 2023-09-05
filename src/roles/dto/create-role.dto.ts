import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({ example: 'employer' })
  name: string;

  @ApiProperty({ example: '' })
  description: string;
}
