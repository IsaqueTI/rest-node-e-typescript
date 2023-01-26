import * as  create from './Create'; //importa todas as fruncoes do arquivo create
import * as getAll from './GetAll';
import * as getById from './GetById';
import * as updateById from './UpdateById';
import * as deleteById from './DeleteById';



export const cidadesController = {
  ...create,
  ...getAll,
  ...getById,
  ...updateById,
  ...deleteById
};