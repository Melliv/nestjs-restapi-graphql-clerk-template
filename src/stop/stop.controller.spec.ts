import { Test, TestingModule } from '@nestjs/testing';
import { StopController } from './stop.controller';
import { StopService } from './stop.service';
import { PrismaService } from '../prisma.service';
import { User } from 'src/authentication/user.entity';

describe('StopController', () => {
  let controller: StopController;
  let prisma: PrismaService;
  const user: User = { id: 'user_1', name: 'somename' };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StopController],
      providers: [StopService, PrismaService],
    }).compile();

    controller = module.get<StopController>(StopController);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('getStop', async () => {
    const stop = { id: 1, lng: 53.43534534, lat: 43.43534534 };
    prisma.stop.findUnique = jest.fn().mockReturnValueOnce(stop);

    const res_stop = await controller.getStop(stop.id.toString());

    expect(res_stop).toBe(stop);
  });

  it('getStops', async () => {
    const stops = [
      { id: 1, lng: 53.43534534, lat: 43.43534534 },
      { id: 2, lng: 53.43534534, lat: 43.43534534 },
    ];
    prisma.stop.findMany = jest.fn().mockReturnValueOnce(stops);

    const res_stop = await controller.getStops();

    expect(res_stop).toBe(stops);
  });

  it('createStop', async () => {
    const stop = { lng: 53.43534534, lat: 43.43534534 };
    prisma.stop.create = jest.fn().mockReturnValueOnce({ id: 1, ...stop });

    const res_stop = await controller.createStop(stop, user);

    expect(res_stop.id).toBe(1);
    expect(res_stop.lng).toBe(stop.lng);
    expect(res_stop.lat).toBe(stop.lat);
  });

  it('updateStop', async () => {
    const stop = { id: '2', lng: 53.43534534, lat: 43.43534534 };
    prisma.stop.update = jest.fn().mockReturnValueOnce(stop);

    const res_stop = await controller.updateStop(stop.id, stop);

    expect(res_stop).toBe(stop);
  });

  it('removeStop', async () => {
    const stop = { id: '2', lng: 53.43534534, lat: 43.43534534 };
    prisma.stop.delete = jest.fn().mockReturnValueOnce(stop);

    const res_stop = await controller.removeStop(stop.id);

    expect(res_stop).toBe(stop);
  });
});
