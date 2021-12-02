import FilterObject from "../pageObjects/FilterObject";
const filterObject = new FilterObject()

class SearchPage {

    /**
     * Check search results match the given search term
     *
     * @param {searchTerm} search term to check result against it
     */
    checkSearchResults(searchTerm){
        cy.get("#\\36 1w5wfhCtxaJ6zYlebWA").should('contain', searchTerm)
    }

    /**
     * Filter the results by organization name
     *
     * @param {organizationName} organization name to filter results according to it
     */
    filterByOrganizationName(organizationName){
        filterObject.selectOrganizationName(organizationName)
    }

    /**
     * Check filtered results by organization name
     *
     * @param {organizationName} organization name to filter results according to it
     */
    checkFilterResultsByOrganizationName(organizationName){
        cy.xpath('//*[@id="search-results"]').should('contain.text', organizationName)
    }

    /**
     * Check filtered results by organization name
     *
     * @param {organizationName} organization name to filter results according to it
     */
    checkFilterResultsNumberByOrganizationName(eventNumber){
        cy.get('[aria-label] > .card-content').should('have.length', parseInt(eventNumber))
    }
}
export default SearchPage;