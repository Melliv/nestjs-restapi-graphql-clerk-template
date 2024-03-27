import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class StopEntity {
  @Field(() => Int, { description: 'ID' })
  id: number;

  @Field(() => Int, { description: 'Longitude' })
  lng: number;

  @Field(() => Int, { description: 'Latitute' })
  lat: number;

  @Field(() => String, { description: 'userId' })
  userId: string;
}
