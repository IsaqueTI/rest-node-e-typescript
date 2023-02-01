import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('cidades - Get All', () => {

  it('busca todos os registros', async () => {

    const res1 = await testServer.get('/cidades/');

    expect(Number(res1.header['x-total-count'])).toBeGreaterThan(0);
    expect(res1.statusCode).toEqual(StatusCodes.OK);
    expect(res1.body.length).toBeGreaterThan(0);
  });

});