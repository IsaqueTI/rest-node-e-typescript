import { Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { cidadesController } from '../controllers';


const router = Router();

router.get('/', (req: Request, res: Response) => {
  return res.status(StatusCodes.CREATED).json('Ola dev');
});

router.post('/cidades', cidadesController.createValidation, cidadesController.create);
router.get('/cidades', cidadesController.getAllValidation, cidadesController.getAll);
router.get('/cidades/:id', cidadesController.getByIdValidation, cidadesController.getById);
router.put('/cidades/:id', cidadesController.updateByIdValidation, cidadesController.updateById);
router.delete('/cidades/:id', cidadesController.deleteByIdValidation, cidadesController.deleteById);



export { router };