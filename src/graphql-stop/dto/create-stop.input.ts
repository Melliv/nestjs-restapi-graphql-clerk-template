import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateStopInput {
  @Field(() => Float, { description: 'Longitude' })
  lng: number;

  @Field(() => Float, { description: 'Latitute' })
  lat: number;
}
