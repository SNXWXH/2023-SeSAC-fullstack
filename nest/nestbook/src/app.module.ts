import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { UsersController } from './users/users.controller';
import { BaseService } from './services/base-service';
import { ServiceA } from './services/a.service';
import { ServiceB } from './services/b.service';
@Module({
  controllers: [AppController],
  providers: [AppService, BaseService, ServiceA, ServiceB],
  imports: [],
})
export class AppModule {}
