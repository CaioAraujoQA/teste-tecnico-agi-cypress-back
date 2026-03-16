import dogApi from './dogApi';

describe('Dog API - Breeds', () => {

  afterEach(() => {
    cy.screenshot();
  });

  it('CT001 - Deve listar todas as raças de cães Sucesso', () => {

    dogApi.todasAsRaçasSucesso().then((response) => {

      expect(response.status).to.eq(200);
      expect(response.body.status).to.eq('success');
      expect(response.body.message).to.be.an('object');
      expect(response.body.message).to.have.property('hound');

    });

  });

  it('CT002 - Deve listar imagens de uma raça específica', () => {

    dogApi.imagensPorRaca('hound').then((response) => {

      expect(response.status).to.eq(200);
      expect(response.body.status).to.eq('success');
      expect(response.body.message).to.be.an('array');
      expect(response.body.message.length).to.be.greaterThan(0);
      expect(response.body.message[0]).to.include('hound');

    });

  });

  it('CT003 - Não deve retornar imagens para raça inválida', () => {

    dogApi.imagensPorRacaInexistente('racaInexistente')
    .then((response) => {

      expect(response.status).to.eq(404);

      });

  });

  it('CT004 - Deve retornar uma imagem aleatória de cachorro', () => {

    dogApi.imagemAleatoria().then((response) => {

      expect(response.status).to.eq(200);
      expect(response.body.status).to.eq('success');
      expect(response.body.message).to.be.a('string');
      expect(response.body.message).to.include('images.dog.ceo');

    });

  });

  it('CT005 - Deve validar o contrato da resposta da API', () => {
   
    dogApi.imagemAleatoria().then((response) => {
      
      expect(response.status).to.eq(200);
      expect(response.body).to.have.all.keys(
        'message',
        'status'
      );
      expect(response.body.message).to.be.a('string');
      expect(response.body.status).to.eq('success');

    });

  });

});