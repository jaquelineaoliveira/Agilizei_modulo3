/// <reference types="cypress" />


describe('Listagem', () => {
    it('Quando não gouver cadastros, então a listagem deve estar vazia', () => {

        cy.fixture('listagem-vazia').then(data =>{ 
            window.localStorage.setItem('data', JSON.stringify(data))
        })
        
        cy.visit("/listagem.html")

        cy.get('table tbody tr').should('have.length',0)
    });

    it('Quando houver um ou mais cadastros, então a listagem deve exibir cada registro', () => {

        
        cy.fixture('listagem-com-itens').then(data =>{ 
            window.localStorage.setItem('data', JSON.stringify(data))
        })

        cy.visit("/listagem.html")

        cy.get('table tbody tr').should('have.length',2)
        
    });
});