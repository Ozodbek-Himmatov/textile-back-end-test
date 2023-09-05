import { ApiProperty } from '@nestjs/swagger';

export class CreateProductsDto {
  @ApiProperty({ example: 'suit' })
  name: string;

  @ApiProperty({ example: '' })
  raw_materials_id: number;

  @ApiProperty({ example: '30.07' })
  worth: number;

  @ApiProperty({ example: 'United States Dollar' })
  currency: string;	
}
