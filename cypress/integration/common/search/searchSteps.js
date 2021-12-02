/// reference types= "cypress"
import SearchPage from './searchPage'

const searchPage = new SearchPage()

// Steps definitions
Then('the user finds all events matching the phrase {string} on the search page', (searchTerm) => {
    searchPage.checkSearchResults(searchTerm)
});

Then('the user selects the {string} organization from the filter by organization dropdown on the search page', (organizationName) => {
    searchPage.filterByOrganizationName(organizationName)
});

Then('the user sees all events organized by organization {string} on the search page', (organizationName) => {
    searchPage.checkFilterResultsByOrganizationName(organizationName)
});

Then('the user see only {string} events that match the filter by organization on the search page', (eventNumber) => {
    searchPage.checkFilterResultsNumberByOrganizationName(eventNumber)
});
