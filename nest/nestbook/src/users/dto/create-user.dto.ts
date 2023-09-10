import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  // readonly name: string;
  // readonly email: string;
  // readonly password: string;

  @IsString()
  @MinLength(1)
  @MaxLength(20)
  readonly name: string;

  @IsString()
  @IsEmail()
  @MaxLength(60)
  email: string;

  @IsString()
  //해당 메세지를 나눠서 작성
  //match 두개 짜서 하기
  // @Matches(/^[A-z\d!@#$%^&*()]{8,30}$/, {
  //   message: '최소 8자리 이상 30자리 이하, 특수문자를 포함해주세요',
  // })
  @Matches(/^[A-z\d!@#$%^&*()]$/, {
    message: '특수문자를 포함해주세요',
  })
  @Matches(/^[A-z\d!@#$%^&*()]{8,30}$/, {
    message: '최소 8자리 이상 30자리 이하입니다',
  })
  readonly password: string;
}
