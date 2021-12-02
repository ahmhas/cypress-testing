/// reference types= "cypress"
import EventsPage from './eventsPage'

const eventsPage = new EventsPage()

// Steps definitions
Then('the user sees {string} on the events page', (detail) => {
    eventsPage.isDetailExist(detail)
});

Then('the user input text {string} within input field {string} on the events page', (inputText, inputField) => {
    eventsPage.fillinEventRequest(inputText,inputField )
});

Then('the user clicks {string} button on the event page', (button) => {
    eventsPage.clickObject(button)
});

Then('the user checks that the {string} on the event page', (text) => {
    eventsPage.checkTextExist(text)
});
