/// <reference types="cypress" />

import { elem } from "../support/pageobject/elements";
import home from "../support/pageobject/home";



  describe('Validar site Agi', () => {
    beforeEach(() => { 
      cy.visit(Cypress.env('URL'))
      cy.viewport(1536, 960)
      cy.title('Blog do Agi')
  
      
    })

  it('Deve clicar na lupa', () => {
      home.clicaLupa()
  });

  it('Deve realizar uma pesquisa por black friday', () => {
      home.pesquisarLupa()
  });

  it('Deve escrever no campo busca e depois apagar', () => {
      home.apagarTexto()
  });

  it.only('Deve clicar em seus investimentos e depois clicar na lupa', () => {
      home.clicarInvestimentos()
  });
});