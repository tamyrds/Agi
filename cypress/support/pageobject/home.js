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

    apagarTexto(){
        cy.get(elem.lupa)
        .click()
    cy.get(elem.pesquisar)
        .click()
        .type('Black Friday')
        .clear()
        .should('have.value', '')
    }

}

export default new home