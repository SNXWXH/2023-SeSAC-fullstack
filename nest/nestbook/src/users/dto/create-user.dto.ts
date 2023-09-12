import { BadRequestException, Param } from '@nestjs/common';
import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { NotIn } from '../utils/decorators/not-in';

export class CreateUserDto {
  // readonly name: string;
  // readonly email: string;
  // readonly password: string;
  //* 기본
  // @Transform((params) =>
  //   // console.log(params);
  //   // return params.value;
  //   params.value.trim(),
  // )
  //* passwd와 name이 동일한 문자열 포함 x
  // @Transform(({ value, obj }) => {
  //   if (obj.password.includes(obj.name.trim()))
  //     throw new BadRequestException(
  //       'password는 name과 같은 문자열을 포함할 수 없습니다',
  //     );
  //   return value.trim();
  // })

  @Transform((params) => params.value.trim())
  @NotIn('password', {
    message: 'password는 name과 같은 문자열을 포함할 수 없습니다',
  })
  @IsString()
  @MinLength(1)
  @MaxLength(20)
  name: string;
  // readonly name: string;

  @IsString()
  @IsEmail()
  @MaxLength(60)
  readonly email: string;

  @IsString()
  //해당 메세지를 나눠서 작성
  //match 두개 짜서 하기
  @Matches(/^[A-z\d!@#$%^&*()]{8,30}$/, {
    message: '최소 8자리 이상 30자리 이하, 특수문자를 포함해주세요',
  })
  // @Matches(/^[A-z\d!@#$%^&*()]$/, {
  //   message: '특수문자를 포함해주세요',
  // })
  // @Matches(/^[A-z\d!@#$%^&*()]{8,30}$/, {
  //   message: '최소 8자리 이상 30자리 이하입니다',
  // })
  readonly password: string;
}
