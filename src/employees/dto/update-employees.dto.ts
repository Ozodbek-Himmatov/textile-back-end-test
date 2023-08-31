import { ApiProperty } from '@nestjs/swagger';

export class UpdateEmployeesDto {
  @ApiProperty({ example: "Ozodbek Khimmatov" })
	full_name?: string;

	@ApiProperty({ example: "https://picsum.photos/1001/1000" })
	image?: string;

	@ApiProperty({ example: "false" })
	is_active?: boolean;

	@ApiProperty({ example: "887038006" })
	phone?: string;

	@ApiProperty({ example: "email@gmail.com" })
	email?: string;

	@ApiProperty({ example: "123login" })
	login?: string;

	@ApiProperty({ example: "123password" })
	password?: string;

	@ApiProperty({ example: "" })
	token?: string;

	
}
