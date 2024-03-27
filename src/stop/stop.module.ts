import { Module } from '@nestjs/common';
import { StopController } from './stop.controller';
import { StopService } from './stop.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [StopController],
  providers: [StopService, PrismaService],
})
export class StopModule {}
