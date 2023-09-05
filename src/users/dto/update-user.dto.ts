import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({ example: "Ozodbek Khimmatov" })
	full_name?: string;

	@ApiProperty({ example: "" })
	image?: string;

	@ApiProperty({ example: "123" })
	login?: string;

	@ApiProperty({ example: "+998901204363"})
	phone_number?: string;

	@ApiProperty({ example: "email@gmail.com" })
	email?: string;

	@ApiProperty({ example: "123" })
	password?: string;

	@ApiProperty({ example: "" })
	token?: string;

	@ApiProperty({ example: "true" })
	is_active?: boolean;
} 