import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BaseService } from './services/base-service';
import { ServiceA } from './services/a.service';
import { ServiceB } from './services/b.service';

import { ApiController } from './api/api.controller';
// import { UsersModule } from './users/users.module';
import { EmailService } from './email/email.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
@Module({
  controllers: [ApiController, AppController, UsersController],
  providers: [
    ApiController,
    AppService,
    BaseService,
    ServiceA,
    ServiceB,
    EmailService,
    UsersService,
  ],
  imports: [],
})
export class AppModule {}
