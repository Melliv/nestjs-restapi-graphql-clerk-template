import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StopEntity } from './entities/stop.entity';
import { StopService } from '../stop/stop.service';
import { JwtAuthGuard } from '../authentication/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from '../stop/decorations/current-user.decorator';
import { User } from '../authentication/user.entity';
import { CreateStopInput } from './dto/create-stop.input';
import { UpdateStopInput } from './dto/update-stop.input';

@UseGuards(JwtAuthGuard)
@Resolver(() => StopEntity)
export class GraphqlStopResolver {
  constructor(private readonly stopService: StopService) {}

  @Mutation(() => StopEntity)
  createStop(
    @Args('createStopInput')
    createStopInput: CreateStopInput,
    @CurrentUser() user: User,
  ) {
    return this.stopService.create(createStopInput, user);
  }

  @Query(() => [StopEntity], { name: 'graphqlStops' })
  async getStops(): Promise<StopEntity[]> {
    return this.stopService.findAll();
  }

  @Query(() => StopEntity, { name: 'graphqlStop' })
  getStop(@Args('id', { type: () => Int }) id: number): Promise<StopEntity> {
    return this.stopService.findOne(id);
  }

  @Mutation(() => StopEntity)
  updateStop(
    @Args('updateStopDto')
    stopDto: UpdateStopInput,
  ): Promise<StopEntity> {
    return this.stopService.update(stopDto.id, stopDto);
  }

  @Mutation(() => StopEntity)
  removeStop(@Args('id', { type: () => Int }) id: number): Promise<StopEntity> {
    return this.stopService.remove(id);
  }
}
