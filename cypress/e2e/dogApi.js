// cypress/pages/dogapi.js

class dogApi {

    todasAsRaçasSucesso() {
        return cy.request({
            method: 'GET',
            url: 'https://dog.ceo/api/breeds/list/all',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }


    todasAsRacasFalha() {
        return cy.request({
            method: 'GET',
            url: 'https://dog.ceo/api/breeds/list/all1',
            failOnStatusCode: false
        });
    }



    imagensPorRaca(breed) {
        return cy.request({
            method: 'GET',
            url: `https://dog.ceo/api/breed/${breed}/images`
        });
    }

    imagensPorRacaInexistente(breed) {
        return cy.request({
            method: 'GET',
            url: `https://dog.ceo/api/breed/${breed}/images`
        });
    }


    imagemAleatoria() {
        return cy.request({
            method: 'GET',
            url: 'https://dog.ceo/api/breeds/image/random'
        });
    }

    imagensPorRacaInexistente(breed) {
  return cy.request({
    method: 'GET',
    url: `https://dog.ceo/api/breed/${breed}/images`,
    failOnStatusCode: false
  });
}
    

}



export default new dogApi();