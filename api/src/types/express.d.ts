import { Request } from 'express';
import { Multer } from 'multer';

declare namespace Express {
  interface Request {
    file?: any;
  }
}