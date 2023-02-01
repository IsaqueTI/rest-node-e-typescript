import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('cidades - Update By Id', () => {

  it('Atualiza de acordo com id', async () => {

    const res1 = await testServer.put('/cidades/1').send(
      {
        nome: 'Prudente'
      }
    );
    expect(res1.statusCode).toEqual(StatusCodes.NO_CONTENT);
  });

  it('Atualiza com id inexistente', async () => {

    const res1 = await testServer.put('/cidades/9999')
      .send(
        {
          nome: 'Prudente'
        }
      );

    expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res1.body).toHaveProperty('errors.default');
  });

});