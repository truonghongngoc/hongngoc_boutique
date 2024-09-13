import { Request } from 'express';
import { JwtPayLoad } from './jwt';

export interface UserAuthRequest extends Request {
  user: JwtPayLoad;
}
