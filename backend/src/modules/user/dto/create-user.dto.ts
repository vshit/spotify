import { IsNotEmpty, IsObject, IsString } from 'class-validator';

export class CreateNameDto {
  @IsString()
  firstname: string;

  @IsString()
  middlename: string;

  @IsString()
  lastname: string;
}

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsObject()
  name: CreateNameDto;
}
