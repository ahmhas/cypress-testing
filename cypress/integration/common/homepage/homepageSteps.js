/// reference types= "cypress"
import HomepagePage from './homepagePage'

const homepagePage = new HomepagePage()

// Steps definitions
Given('the user can open the website url', () => {
    homepagePage.openURL()
});

Then('the user selects a specific date {string} from the calendar on the homepage', (date) => {
    homepagePage.selectFromCalendar(date)
});

Then('the user can only see events that happen on the given date {string} on the homepage', (date) => {
    homepagePage.checkEventOnDate(date)
});

Then('the user see only {string} event happening on that date on the homepage', (eventNumber) => {
    homepagePage.checkEventNumber(eventNumber)
});

Then('the use the search input in the navigation bar and type in {string} and confirm on the homepage', (searchTerm) => {
    homepagePage.searchAndConfirm(searchTerm)
});

Then('the user clicks on {string} link on the homepage', (link) => {
    homepagePage.clickLink(link)
});

Then('the user sees event card with title {string} and organized by {string} on the homepage', (cardTitle, organizedBy) => {
    homepagePage.checkEventCard(cardTitle, organizedBy)
});

Then('the user opens the event card with title {string} on homepage', (cardTitle) => {
    homepagePage.openEventCardWithTitle(cardTitle)
});

Then('the user selects {string} within request an event menu on the homepage', (eventType) => {
    homepagePage.selectEventType(eventType)
});

/** Step use to demonstrate Issue# 2. Please refer to Coursedog_Issues.pdf for more details */
Then('the user selects a specific date {string} from the calendar without clicking away on the homepage', (date) => {
    homepagePage.selectFromCalendarWithoutClickingAway(date)
});