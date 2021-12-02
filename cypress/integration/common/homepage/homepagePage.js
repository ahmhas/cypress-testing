import DatePickerObject from '../pageObjects/DatePickerObject';
import RequestEventObject from "../pageObjects/RequestEventObject";
const datePickerPage = new DatePickerObject()
const requestEventObject = new RequestEventObject()

class HomepagePage {

    /**
     * Navigate to the defined URL within the testing data files under 'Fixture' directory
     */
    openURL(){
        // TODO: Switch for different environment if needed
        let targetEnv = 'coursedog_dev';
        cy.fixture(targetEnv).then(data =>{
            this.data = data;
            cy.visit(this.data.url)
        })

        // Log the environment url
        cy.url().then(value => {
            cy.log('The current URL is: ', value)
        })
    }

    /**
     * Select specific date from the events calendar
     *
     * @param {date} desired date in format: DD.MM.YYYY (e.g. 17.01.1991)
     */
    selectFromCalendar(date){
        let {day, month, year} = datePickerPage.extractDayMonthYear(date)
        datePickerPage.setYear(year)
        datePickerPage.setMonth(month)
        cy.get(':nth-child(3) > .container').click() // Used to fix the Bug#2 by clicking away in the page before selecting the day
        datePickerPage.setDay(day)
    }

    /**
     * Select specific date from the events calendar without clicking away
     * THIS METHOD USED ONLY TO DEMONSTRATE ISSUE#2
     * Please refer to Coursedog_Issues.pdf for more details
     * @param {date} desired date in format: DD.MM.YYYY (e.g. 17.01.1991)
     */
    selectFromCalendarWithoutClickingAway(date){
        let {day, month, year} = datePickerPage.extractDayMonthYear(date)
        datePickerPage.setYear(year)
        datePickerPage.setMonth(month)
        datePickerPage.setDay(day)
    }

    /**
     * Check that all events shown are related to the given date
     *
     * @param {date} desired date in format: DD.MM.YYYY (e.g. 17.01.1991)
     */
    checkEventOnDate(date){
        let {day, month, year} = datePickerPage.extractDayMonthYear(date)
        let targetLabel = "Event date is " + datePickerPage.getWeekdayNameForDate(date) + " " + datePickerPage.convertMonthNumberToName(month) + ' ' +  day + ' ' + year
        cy.get('[aria-label="' + targetLabel + '"]').should("contain.text", (datePickerPage.convertMonthNumberToName(month) + ' ' +  day + ' ' + year))
    }

    /**
     * Check number of events on a given date
     *
     * @param {eventNumber} event number to be checked
     */
    checkEventNumber(eventNumber){
        if(eventNumber > 0) {
            cy.get('section > div > div').find('div').should('have.length', eventNumber * 5)
        }else if (eventNumber == 0) {
            cy.get('.mt-16 > .mt-8').should('contain.text', 'No events today' || 'There are no upcoming featured events')
        } else {
            cy.log('Please provide a proper number of events, negative is not accepted')
        }
    }

    /**
     * Type in search field and confirm search
     *
     * @param {searchTerm} search term
     */
    searchAndConfirm(searchTerm){
        cy.get('.search__input').focus().clear().type(searchTerm).click()
        cy.get('.search__button > .svg-inline--fa').click()
    }

    /**
     * Click on the given link
     *
     * @param {link} link to click on it
     */
    clickLink(link){
        switch(link.toString().toLowerCase()) {
            case "featured events":
                cy.get('[href="/featured"]').click()
                break;
            case "today’s events":
                cy.get('[href="/today"]').click()
                break;
            default:
                cy.log('Please correct your link name')
        }
    }

    /**
     * Check events card title and organization
     *
     * @param {cardTitle} events card title to check
     * @param {organizedBy} events organized by to check
     */
    checkEventCard(cardTitle, organizedBy){
        cy.get('#y7eDlgRuPTl2X3dkrSpP').should('contain.text', cardTitle)
        cy.get('[data-test="organisation"] > .font-semibold').should('contain.text', organizedBy)
    }

    /**
     * Open Event card with given title
     *
     * @param {cardTitle} event card title to open
     */
    openEventCardWithTitle(cardTitle){
        cy.get('#y7eDlgRuPTl2X3dkrSpP').should('contain.text', cardTitle).click()
    }

    /**
     * Select event type form Request an Event menu
     *
     * @param {eventType} - type of event to be selected (Speaker, Alumni Event)
     */
    selectEventType(eventType){
        requestEventObject.selectEventType(eventType)
    }
}
export default HomepagePage;