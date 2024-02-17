///<reference types="cypress"/>
describe('Alosafer websit', () => {
    it.skip('Assertion', () => {
        cy.visit('https://www.almosafer.com/en')
        cy.get('.cta__saudi').click()

        //check if the language is en
        cy.get('a[data-testid="Header__LanguageSwitch"]').invoke("text").should('eql', "العربية")
        //currancy check
        cy.get('button[data-testid="Header__CurrencySelector"]').invoke("text").should('contain', 'SAR')
        //contact check
        cy.get('.sc-hUfwpO').should('contain', +966554400000)
        cy.get('.sc-dEfkYy').find('.sc-fihHvN').should('be.visible')
    });
    it.skip('check qitaf logo s visiable', () => {
        cy.visit('https://www.almosafer.com/en')
        cy.get('.cta__saudi').click()
        cy.get('.sc-dEfkYy').find('.sc-fihHvN').should('be.visible')
    });
    it.skip('check if the hotel tab not selected', () => {
        cy.visit('https://www.almosafer.com/en')
        cy.get('.cta__saudi').click()
        cy.get('#uncontrolled-tab-example-tab-hotels').should('have.attr', 'aria-selected').and('equal', 'false')


    });
    it.skip('departure date and reture date', () => {
        cy.visit('https://www.almosafer.com/en')
        cy.get('.cta__saudi').click()
        const currentDate = new Date();
        const day=currentDate.getDate()
        cy.log("date="+day)
     console.log(currentDate); 
     const expectetedDeparture=day+1
     const expectedRetur=day+2
     cy.get('[data-testid="FlightSearchBox__FromDateButton"] > .sc-cPuPxo').should('contain',expectetedDeparture)
     cy.get('[data-testid="FlightSearchBox__ToDateButton"] > .sc-cPuPxo').should('contain',expectedRetur)
       });


       it('choose random language', () => {
        //const language=['English','العربية']
        const website=['https://www.almosafer.com/en','https://www.almosafer.com/ar']
        let randomindexLanguage=Math.floor(Math.random()*website.length)
        
        cy.visit(website[randomindexLanguage])
        cy.get('.cta__saudi').click()
        // console.log(language[randomindexLanguage])
       cy.get('a[data-testid="Header__LanguageSwitch"]').invoke('text').then((text)=>{
       
         if (text.includes('العربية')) {
            expect(text).to.include('العربية')

            
         } 
         if (text.includes('English')) {
            expect(text).to.include('English')        } 

       
        
       })

    

        
       });
});