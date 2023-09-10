import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BaseService } from './services/base-service';
import { ServiceA } from './services/a.service';
import { ServiceB } from './services/b.service';

import { ApiController } from './api/api.controller';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import emailConfig from './config/emailConfig';
import { validationSchema } from './config/validationSchema';
@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({
      //이거 하면 package.json에서 NODE_ENV 작성 안해줘도 됨
      //우선 순위대로 두기 => 뒤에 있는 애를 앞에 애가 덮어씀
      // envFilePath:[.local.env, .dev.env, .env]
      envFilePath: [`${__dirname}/config/env/.${process.env.NODE_ENV}.env`],
      load: [emailConfig],
      isGlobal: true,
      validationSchema,
    }),
  ],
  controllers: [ApiController, AppController],
  providers: [ApiController, AppService, BaseService, ServiceA, ServiceB],
})
export class AppModule {}
