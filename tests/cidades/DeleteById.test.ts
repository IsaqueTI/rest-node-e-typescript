import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('cidades - Delete By Id', () => {

  it('Tenta deletar registro existente', async () => {

    const res1 = await testServer.delete('/cidades/1');
    expect(res1.statusCode).toEqual(StatusCodes.NO_CONTENT);
  });

  it('Tenta deletar registro Nao existente', async () => {

    const res1 = await testServer.delete('/cidades/9999');
    expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res1.body).toHaveProperty('errors.default');
  });

});