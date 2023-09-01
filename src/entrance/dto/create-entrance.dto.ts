import { ApiProperty } from '@nestjs/swagger';

export class CreateEntranceDto {
  @ApiProperty({ example: "" })
	entrance_time: Date;

	
} 