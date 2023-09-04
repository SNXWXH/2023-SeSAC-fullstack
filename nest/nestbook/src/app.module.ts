import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BaseService } from './services/base-service';
import { ServiceA } from './services/a.service';
import { ServiceB } from './services/b.service';

import { ApiController } from './api/api.controller';
import { UsersModule } from './users/users.module';
@Module({
  controllers: [ApiController, AppController],
  providers: [ApiController, AppService, BaseService, ServiceA, ServiceB],
  imports: [UsersModule],
})
export class AppModule {}
