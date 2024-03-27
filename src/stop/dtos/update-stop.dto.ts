import { Transform } from 'class-transformer';
import { IsLongitude, IsLatitude, IsNumber } from 'class-validator';

export class UpdateStopDto {
  @IsNumber()
  id: number;

  @Transform(({ value }) => parseFloat(value))
  @IsLongitude()
  lng: number;

  @Transform(({ value }) => parseFloat(value))
  @IsLatitude()
  lat: number;
}
