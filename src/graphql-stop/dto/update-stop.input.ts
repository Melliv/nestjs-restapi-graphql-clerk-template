import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class UpdateStopInput {
  @Field(() => Int, { description: 'ID' })
  id: number;

  @Field(() => Int, { description: 'Longitude' })
  lng: number;

  @Field(() => Int, { description: 'Latitute' })
  lat: number;
}
