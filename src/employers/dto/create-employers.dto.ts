import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployersDto {
  @ApiProperty({ example: "Ozodbek Khimmatov" })
	first_name: string;

	@ApiProperty({ example: "123" })
	login: string;

	@ApiProperty({ example: "123" })
	password: string;

	@ApiProperty({ example: "" })
	token: string;

	@ApiProperty({ example: "true" })
	is_active: boolean;

	@ApiProperty({ example: "false" })
	is_owner: boolean;

	
} 