import { ApiProperty } from '@nestjs/swagger';

export class UpdateRawMaterialsDto {
  @ApiProperty({ example: "button" })
	name?: string;

	@ApiProperty({ example: "white" })
	color?: string;

	@ApiProperty({ example: "cotton" })
	type_of_cloth?: string;

	@ApiProperty({ example: "1000.23" })
	worth?: number;

	@ApiProperty({ example: "dollar" })
	currency?: string;

	
}
