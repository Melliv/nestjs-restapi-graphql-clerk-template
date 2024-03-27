import { Transform } from 'class-transformer';
import { IsLongitude, IsLatitude } from 'class-validator';

export class CreateStopDto {
  @Transform(({ value }) => parseFloat(value))
  @IsLongitude()
  lng: number;

  @Transform(({ value }) => parseFloat(value))
  @IsLatitude()
  lat: number;
}
