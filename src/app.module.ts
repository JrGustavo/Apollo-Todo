import { join } from 'path';
import { Module } from '@nestjs/common';
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo";
import { HelloworldModule } from './helloworld/helloworld.module';
import { HelloWorldResolver } from './hello-world/hello-world.resolver';

import {ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { TodoModule } from './todo/todo.module';
import { TodoResolver } from './todo/todo.resolver';
import { TodoService } from './todo/todo.service';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
            playground: true,
            //plugins: [ApolloServerPluginLandingPageLocalDefault()],
        }),
        HelloworldModule,
        TodoModule,
    ],
    providers: [HelloWorldResolver, TodoResolver, TodoService],
})
export class AppModule {}
