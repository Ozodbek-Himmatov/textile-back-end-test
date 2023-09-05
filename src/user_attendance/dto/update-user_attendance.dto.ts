import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserAttendanceDto {
  @ApiProperty({ example: "" })
	user_id?: number;

	@ApiProperty({ example: "" })
	entrance_time_id?: number;

	@ApiProperty({ example: "" })
	exit_time_id?: number;

	@ApiProperty({ example: "12.12.2023" })
	date?: Date;
}
