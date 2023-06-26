import Button from 'src/components/Button/Button'

describe('<Button>', () => {
  it('mounts', () => {
    cy.mount(<Button />)
  })
  it('shows text', () => {
    cy.mount(<Button text="Submit" />)
    cy.get('button').should('have.text', 'Submit')
  })
  it('is disabled', () => {
    cy.mount(<Button text="Submit" disabled />)
    cy.get('button').should('have.attr', 'disabled')
  })
})