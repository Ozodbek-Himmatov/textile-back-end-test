import { ApiProperty } from '@nestjs/swagger';

export class UpdateEntranceDto {
  @ApiProperty({ example: "" })
	entrance_time?: timestamp;

	
}
