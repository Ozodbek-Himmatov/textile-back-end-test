import { ApiProperty } from '@nestjs/swagger';

export class UpdateAccountingDto {
  @ApiProperty({ example: "" })
	product_id?: number;

	@ApiProperty({ example: "0" })
	quantity?: number;

	
}
