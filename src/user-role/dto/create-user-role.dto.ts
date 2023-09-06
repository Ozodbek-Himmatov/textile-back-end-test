import { ApiProperty } from "@nestjs/swagger";

export class CreateUserRoleDto {
  @ApiProperty({ example: '' })
  user_id: number;

  @ApiProperty({ example: '' })
  role_id: number;
}
