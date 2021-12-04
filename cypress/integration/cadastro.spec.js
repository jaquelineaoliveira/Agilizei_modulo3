/// <reference types="cypress" />


var Chance = require('chance')
var chance = new Chance()



describe('Cadastro', () => {
    it('Quando eu informar os dados e finalizar, então o cadastro deve ser efetuado', () => {

        cy.visit("/")
        // Input 
        cy.get('input[name=firstName]').type(chance.first())
        cy.get('input[name=lastName]').type(chance.last())
        cy.get('textarea[name=adress]').type(chance.address())
        cy.get('input[name=emailAdress]').type(chance.email())


        // ChechBox e RadioButton 
        // cy.get('input[value=f]').check() --> Opção de fazer 
        cy.get('input[name=radioGender]').check('f')
        cy.get('input[type=checkbox]').check('Netflix')
        cy.get('input[type=checkbox]').check('Dormir')


        // Combobox 

        cy.get('select#countries').select('Nova Zelandia', {force:true})
        cy.get('select#years').select('1997', {force:true})
        cy.get('select#months').select('Janeiro', {force:true})
        cy.get('select#days').select('16', {force:true})

  
        cy.get('input#firstpassword').type('Teste@123')
        cy.get('input#secondpassword').type('Teste@123')

        cy.get('button#submitbtn').click()

       //  cy.contains('Finalizar Cadastro') --> Outra forma 

        cy.url().should('contain','listagem')


    });
});