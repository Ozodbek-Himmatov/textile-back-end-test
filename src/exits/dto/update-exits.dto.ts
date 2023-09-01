import { ApiProperty } from '@nestjs/swagger';

export class UpdateExitsDto {
  @ApiProperty({ example: "" })
	exits_time?: Date;

	
}
