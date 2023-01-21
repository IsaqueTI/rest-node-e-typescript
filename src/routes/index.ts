import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';


const router = Router();

router.get('/teste', (_, res) => {
  return res.status(StatusCodes.CREATED).json('Ola dev');
});


export { router };