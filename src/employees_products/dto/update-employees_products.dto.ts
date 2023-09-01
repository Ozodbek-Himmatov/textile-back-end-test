import { ApiProperty } from '@nestjs/swagger';

export class UpdateEmployeesProductsDto {
  @ApiProperty({ example: "" })
	employee_id?: number;

	@ApiProperty({ example: "" })
	product_id?: number;

	@ApiProperty({ example: "2005" })
	start_year?: string;

	
}
