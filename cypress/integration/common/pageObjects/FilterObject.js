class FilterObject {

    /**
     * Select desired organization name from the filter dropdown menu
     * @param  organizationName organization name to select
     */
    selectOrganizationName(organizationName) {
        cy.get('.card > :nth-child(5)').should('exist').should('contain', 'Filter by organization')
        cy.get('.card > #orgSelect').select(organizationName)
    }
}

export default FilterObject;