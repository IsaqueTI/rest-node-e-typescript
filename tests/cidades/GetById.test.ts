import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('cidades - Get All', () => {

  it('Retornar cidade pelo id', async () => {
    const res1 = await testServer.get('/cidades/1');
    expect(res1.statusCode).toEqual(StatusCodes.OK);
    expect(res1.body).toHaveProperty('nome');
  });

  it('Retornar cidade pelo id que nao existe', async () => {

    const res1 = await testServer.get('/cidades/9999');
    expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res1.body).toHaveProperty('errors.default');
  });
});