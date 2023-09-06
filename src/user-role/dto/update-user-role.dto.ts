import { ApiProperty } from "@nestjs/swagger";

export class UpdateUserRoleDto {
  @ApiProperty({ example: '' })
  user_id?: number;

  @ApiProperty({ example: '' })
  role_id?: number;
}
