import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';


interface ICidade {
  nome: string;
  estado: string;
}

const bodyValidation: yup.SchemaOf<ICidade> = yup.object().shape({
  nome: yup.string().required().min(3),
  estado: yup.string().required().min(3)

});


export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
  let validateData: ICidade | undefined = undefined;
  try {
    validateData = await bodyValidation.validate(req.body, { abortEarly: false });
  } catch (err) {
    const yupeError = err as yup.ValidationError;

    const errors: Record<string, string> = {};

    yupeError.inner.forEach(error => {
      if (error.path === undefined) return;
      errors[error.path] = error.message;
    });


    return res.status(StatusCodes.BAD_REQUEST).json({ errors });
  }

  console.log(validateData);

};