import { Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { cidadesController } from '../controllers';


const router = Router();

router.get('/', (req: Request, res: Response) => {
  return res.status(StatusCodes.CREATED).json('Ola dev');
});

router.post('/cidades', cidadesController.create);


export { router };