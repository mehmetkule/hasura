import { IsNotEmpty, IsString } from 'class-validator';

export class Login {
  readonly token: string;
}
