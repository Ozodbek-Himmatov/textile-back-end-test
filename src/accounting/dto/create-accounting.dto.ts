import { ApiProperty } from '@nestjs/swagger';

export class CreateAccountingDto {
  @ApiProperty({ example: "" })
	product_id: number;

	@ApiProperty({ example: "0" })
	quantity: number;

	
} 