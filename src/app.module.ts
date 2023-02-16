import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppResolver } from './app.resolver';
import { dataSourceOptions } from './db/data.source';
import { BookModule } from './book/book.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [ 
    ConfigModule.forRoot({isGlobal: true}),
    GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    playground:true,
    autoSchemaFile:join(process.cwd(),'src/schema.graphql'),
    definitions:{path:join(process.cwd(),'src/graphql.ts')},
    }),TypeOrmModule.forRoot(dataSourceOptions), BookModule,
    BookModule
  ],

  controllers: [],
  providers: [AppResolver],
})
export class AppModule {}
