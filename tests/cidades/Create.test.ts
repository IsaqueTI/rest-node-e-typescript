import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';



describe('cidades - Create', () => {

  it('Cria registro', async () => {

    const res1 = await testServer
      .post('/cidades')
      .send({
        nome: 'Prudente de Morais '
      });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof res1.body).toEqual('number');
  });

  it('Tenta crair registro com nome curto -3 caracter', async () => {

    const res1 = await testServer
      .post('/cidades')
      .send({
        nome: 'Pr'
      });

    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty('errors.body.nome');
  });


});