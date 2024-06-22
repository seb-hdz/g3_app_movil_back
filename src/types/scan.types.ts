import { User } from './user.types';

export interface Scan {
  id: string;
  userId: User['id'];
  url: string;
  createdAt: Date;
}
