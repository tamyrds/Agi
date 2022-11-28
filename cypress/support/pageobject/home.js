/// <reference types="cypress" />

import { elem } from "./elements"

class home{

clicaLupa(){
    cy.get(elem.lupa)
        .click()
        .should('be.visible', 'Pesquisar …')
}

pesquisarLupa(){
    cy.get(elem.lupa)
        .click()
    cy.get(elem.pesquisar)
        .click()
        .type('Black Friday')
    cy.get('.search-submit')
        .contains('Pesquisar')
        .click()
    cy.should('be.visible', 'Resultados da busca por: Black Friday')
}

}

export default new home