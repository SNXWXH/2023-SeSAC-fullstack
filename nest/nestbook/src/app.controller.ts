import { Controller, Get, Post, Query, Redirect, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { ServiceB } from './services/b.service';
import { Request } from 'express';
// import { CreateUserDto } from './users/dto/create-user.dto';
// import { log } from 'console';

//안에 내부적으로 injectable이 들어가있음
@Controller()
export class AppController {
  greet: string;
  constructor(
    private readonly appService: AppService,
    private readonly serviceB: ServiceB,
  ) {}

  @Get('/serviceB')
  getHelloC(): string {
    return this.serviceB.getHello();
  }

  // @Get('/sayHello')
  // sayHello(@Query('nickname') nickname: string): string {
  //   return this.appService.sayHello(nickname);
  // }

  // // @Get('/sayHello')
  // // @Redirect('/sayHello')
  // @Redirect()
  // @Get('redirect-hello')
  // redirectHello(@Req() req: Request) {
  //   console.log('reirectHello.req>>', req.query);
  //   const { nickname } = req.query;
  //   return {
  //     url: '/sayHello?nickname=' + nickname,
  //   };
  // }

  @Get('/sayHello')
  sayHello(@Query('nickname') nickname: string): string {
    return this.appService.sayHello(nickname);
  }

  @Get('/sayHelloR')
  sayHelloR(@Req() req: Request): string {
    return this.appService.sayHello(JSON.stringify(req.query));
  }

  // @Get('/sayHello')
  // @Redirect('/sayHello')
  @Redirect()
  @Get('redirect-hello')
  redirectHello(@Req() req: Request) {
    console.log('reirectHello.req>>', req.query);
    // const { query } = req.query;
    return {
      url:
        '/sayHelloR?' + Object.entries(req.query).map(([k, v]) => `${k}=${v}`),
    };
  }

  // @Post()
  // createUser(@Body() createUserDto: CreateUserDto) {
  //   console.log('🚀  createUserDto:', createUserDto);
  // }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  setHello() {
    this.greet = 'xxx';
    return `Hello ${this.greet}`;
  }
}
