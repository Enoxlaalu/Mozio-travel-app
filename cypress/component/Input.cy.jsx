import Input from 'src/components/Input/Input'

describe('<Input>', () => {
  it('mounts', () => {
    cy.mount(<Input />)
  })
  it('should apply params correctly', () => {
    const params = {
        value: 'Value',
        placeholder: 'Placeholder'
    }
    cy.mount(<Input params={params} />)

    const input = '[data-testid="inputWrapper"] input'

    cy.get(input).should('have.value', 'Value')
    cy.get(input).should('have.attr', 'placeholder', 'Placeholder')
  })
  it('should have label', () => {
    cy.mount(<Input label="Label" />)

    cy.get('[data-testid="inputWrapper"] label').should('have.text', 'Label')
  })
  it('should show error', () => {
    cy.mount(<Input error="Error" />)

    cy.get('[data-testid="inputWrapper"] input').should('have.css', 'border-color', 'rgb(255, 0, 0)')
    cy.get('[data-testid="inputWrapper"] p').should('have.text', 'Error')
  })
})