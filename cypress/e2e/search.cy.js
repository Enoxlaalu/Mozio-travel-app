describe('The Home Page', () => {
    it('successfully loads', () => {
        cy.visit('/')
    })
    it('should load a form with 2 fields', () => {
        const fields = cy.get('[data-testid="cityAutocomplete"]')
        fields.should('have.length', '2')
        fields.should('have.value', '')
    })
    it('should fill first text field', () => {
        const fields = cy.get('[data-testid="cityAutocomplete"]')
        const first = fields.first()

        first.click()
        first.get('#autocompletePaper').should('exist')
        first.get('#autocompletePaper div').should('have.text', 'No options')

        first.type('Paris')
        first.get('#autocompleteListbox').should('exist')
        first.get('#autocompleteListbox li').should('have.text', 'Paris')

        first.get('#autocompleteListbox li').click()
        first.get('[data-testid="autocompleteInput"]').should('have.value', 'Paris')
    })
})
