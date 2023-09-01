import { ApiProperty } from '@nestjs/swagger';

export class CreateExitsDto {
  @ApiProperty({ example: "" })
	exits_time: Date;

	
} 