import { Test, TestingModule } from '@nestjs/testing';
import { GraphqlStopResolver } from './graphql-stop.resolver';
import { StopService } from '../stop/stop.service';
import { PrismaService } from '../prisma.service';
import { User } from '../authentication/user.entity';

describe('GraphqlStopResolver', () => {
  let resolver: GraphqlStopResolver;
  let prisma: PrismaService;
  const user: User = { id: 'user_1', name: 'somename' };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GraphqlStopResolver, StopService, PrismaService],
    }).compile();

    resolver = module.get<GraphqlStopResolver>(GraphqlStopResolver);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('getStop', async () => {
    const stop = { id: 1, lng: 53.43534534, lat: 43.43534534 };
    prisma.stop.findUnique = jest.fn().mockReturnValueOnce(stop);

    const res_stop = await resolver.getStop(stop.id);

    expect(res_stop).toBe(stop);
  });

  it('createStop', async () => {
    const stop = { lng: 53.43534534, lat: 43.43534534 };
    prisma.stop.create = jest.fn().mockReturnValueOnce({ id: 1, ...stop });

    const res_stop = await resolver.createStop(stop, user);

    expect(res_stop.id).toBe(1);
    expect(res_stop.lng).toBe(stop.lng);
    expect(res_stop.lat).toBe(stop.lat);
  });

  it('updateStop', async () => {
    const stop = { id: 2, lng: 53.43534534, lat: 43.43534534 };
    prisma.stop.update = jest.fn().mockReturnValueOnce(stop);

    const res_stop = await resolver.updateStop(stop);

    expect(res_stop).toBe(stop);
  });

  it('removeStop', async () => {
    const stop = { id: 2, lng: 53.43534534, lat: 43.43534534 };
    prisma.stop.delete = jest.fn().mockReturnValueOnce(stop);

    const res_stop = await resolver.removeStop(stop.id);

    expect(res_stop).toBe(stop);
  });
});
