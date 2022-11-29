// export class CreateUserDto {
//   readonly name: string;
//   readonly email: string;
//   readonly password: string;

import { IsString, IsEmail, MaxLength, MinLength } from 'class-validator';

// }
export class CreateUserDto {
  @IsString()
  @MinLength(1)
  @MaxLength(20)
  name: string;

  @IsEmail()
  email: string;

  password: string;
}
export class GetUserDto {
  offset: number;
  limit: number;
}
export class VerifyEmailDto {
  signupVerifyToken: string;
}

export class UserLoginDto {
  email: string;
  password: string;
}
