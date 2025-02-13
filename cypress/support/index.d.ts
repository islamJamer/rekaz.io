declare namespace Cypress {
    interface Chainable {
        getByDataElementorType(elementorType: string): Chainable<Element>,
    }
}