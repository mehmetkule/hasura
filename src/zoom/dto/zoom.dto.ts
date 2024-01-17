import { IsNotEmpty, IsString } from 'class-validator';

export class ZoomDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;
  @IsString()
  @IsNotEmpty()
  readonly description: string;
  @IsString()
  @IsNotEmpty()
  readonly link: string;
  @IsString()
  @IsNotEmpty()
  readonly password: string;
}
