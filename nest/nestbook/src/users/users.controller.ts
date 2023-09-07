// import {
//   Controller,
//   Get,
//   Post,
//   Body,
//   Patch,
//   Param,
//   Delete,
//   Res,
//   HttpCode,
//   BadRequestException,
//   Redirect,
// } from '@nestjs/common';
// import { UsersService } from './users.service';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';

// @Controller('users')
// export class UsersController {
//   constructor(private readonly usersService: UsersService) {}

//   @Post()
//   create(@Body() createUserDto: CreateUserDto) {
//     return this.usersService.create(createUserDto);
//   }

//   @Get()
//   findAll(@Res() res) {
//     // return this.usersService.findAll();
//     const users = this.usersService.findAll();

//     return res.status(200).send(users);
//   }

//   // @Headers('Custom', 'Test Header')
//   @Redirect('https://nestjs.com', 301)
//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     if (+id < 1) {
//       throw new BadRequestException('id는 0보다 큰 값이어야 합니다.');
//     }
//     return this.usersService.findOne(+id);
//   }

//   @HttpCode(202)
//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
//     return this.usersService.update(+id, updateUserDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.usersService.remove(+id);
//   }
// }

// import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { Body, Controller, Post } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
// import { UserLoginDto } from './dto/user-login.dto';
// import { VerifyEmailDto } from './dto/verify-email.dto';
// import { UserInfo } from './UserInfo';
import { UsersService } from './users.service';

/*
실제 프로젝트에서는 이렇게 사용됨
api부분은 namespace임 (auth가 올 수도 있음)
원래는 :namespace로 작성해야 함
@Controller('/api/:version/users')
*/
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async createUser(@Body() dto: CreateUserDto): Promise<void> {
    const { name, email, password } = dto;
    await this.usersService.createUser(name, email, password);
  }

  // @Post('/email-verify')
  // async verifyEmail(@Query() dto: VerifyEmailDto): Promise<string> {
  //   const { signupVerifyToken } = dto;

  //   return await this.usersService.verifyEmail(signupVerifyToken);
  // }

  // @Post('/login')
  // async login(@Body() dto: UserLoginDto): Promise<string> {
  //   const { email, password } = dto;

  //   return await this.usersService.login(email, password);
  // }

  // @Get('/:id')
  // async getUserInfo(@Param('id') userId: string): Promise<UserInfo> {
  //   return await this.usersService.getUserInfo(userId);
  // }
}
