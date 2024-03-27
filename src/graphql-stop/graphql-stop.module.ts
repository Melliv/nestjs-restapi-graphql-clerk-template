import { Module } from '@nestjs/common';
import { GraphqlStopResolver } from './graphql-stop.resolver';
import { StopService } from 'src/stop/stop.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [GraphqlStopResolver, StopService, PrismaService],
})
export class GraphqlStopModule {}
