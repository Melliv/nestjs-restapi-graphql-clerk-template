import { Injectable } from '@nestjs/common';
import { CreateStopDto } from './dtos/create-stop.dto';
import { PrismaService } from '../prisma.service';
import { User } from 'src/authentication/user.entity';
import { StopEntity } from 'src/graphql-stop/entities/stop.entity';

@Injectable()
export class StopService {
  constructor(private prisma: PrismaService) {}

  async findOne(id: number): Promise<StopEntity> {
    return await this.prisma.stop.findUnique({ where: { id } });
  }

  async findAll(): Promise<StopEntity[]> {
    return await this.prisma.stop.findMany();
  }

  async create(data: CreateStopDto, user: User): Promise<StopEntity> {
    return await this.prisma.stop.create({
      data: { ...data, userId: user.id },
    });
  }

  async update(id: number, data: CreateStopDto): Promise<StopEntity> {
    return await this.prisma.stop.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<StopEntity> {
    return await this.prisma.stop.delete({
      where: { id },
    });
  }
}
