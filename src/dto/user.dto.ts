import { IsEmail, IsNotEmpty, IsNumber, IsUUID } from 'class-validator';
import { IsOptional, IsString, Max, Min } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @IsOptional()
  name: string;

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export class UpdateUserDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @Min(18)
  @Max(99)
  age: number;
}

export class AuthUserDTO {
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
