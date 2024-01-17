import { IsString } from 'class-validator';

export class ZoomUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  displayName: string;
  password: string;
  type: number;
}
