import { ApiProperty } from '@nestjs/swagger';

export class CreateGroupsDto {
  @ApiProperty({ example: "" })
	employee_id: number;

	@ApiProperty({ example: "" })
	product_id: number;

	@ApiProperty({ example: "2005" })
	start_year: string;

	
} 