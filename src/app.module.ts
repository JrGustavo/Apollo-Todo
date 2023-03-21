import { join } from 'path';
import { Module } from '@nestjs/common';
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo";
import { HelloworldModule } from './helloworld/helloworld.module';
import { HelloWorldResolver } from './hello-world/hello-world.resolver';

@Module({
  imports: [
      GraphQLModule.forRoot<ApolloDriverConfig>({
        driver: ApolloDriver,
        autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      }),
      HelloworldModule,
  ],
  controllers: [],
  providers: [HelloWorldResolver],
})
export class AppModule {}
