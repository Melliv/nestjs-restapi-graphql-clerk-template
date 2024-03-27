import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StopModule } from './stop/stop.module';
import { APP_PIPE } from '@nestjs/core';
import { AuthenticationModule } from './authentication/authentication.module';
import { ConfigModule } from '@nestjs/config';
import { GraphqlStopModule } from './graphql-stop/graphql-stop.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env`],
      isGlobal: true,
    }),
    StopModule,
    AuthenticationModule,
    GraphqlStopModule,
    GraphQLModule.forRoot({ autoSchemaFile: true, driver: ApolloDriver }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // Only for rest api
    // {
    //   provide: APP_PIPE,
    //   useValue: new ValidationPipe({
    //     whitelist: true,
    //   }),
    // },
  ],
})
export class AppModule {}
