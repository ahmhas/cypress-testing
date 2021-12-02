class EventsPage {

    /**
     * Check the existing of the event card detail
     *
     * @param {detail} detail to check its existence
     */
    isDetailExist(detail){
        let detailPath
        switch(detail.toString().toLowerCase()) {
            case "add to calender link":
                detailPath = '.mt-2 > .mr-2'
                break;
            case "add to google calendar link":
                detailPath = 'a > .btn'
                break;
            case "event type":
                detailPath = '[data-test="event-type"] > .font-semibold'
                break;
            case "organization":
                detailPath = '[data-test="organisation"] > .font-semibold'
                break;
            case "contacts":
                detailPath = '.cursor-pointer'
                break;
            case "event description":
                detailPath = '.text-theme-darkest'
                break;
            default:
                cy.log('Please correct your event card detail to check')
        }
        cy.get('[data-test="event-type"] > .font-semibold')
            .should('exist')
            .should('not.be.empty')
    }

    /**
     * Fill in Event Request
     *
     * @param {inputText} - desired input text within
     * @param {inputField} desired input field
     */
    fillinEventRequest(inputText, inputField ){
        let inputFieldPath
        switch(inputField.toString().toLowerCase()) {
            case "email address":
                inputFieldPath = '.mx-2 > input'
                // if(inputText.startsWith("@TD:")){
                //     cy.randomEmailGenerator()
                // }
                break;
            case "event name":
                inputFieldPath = ':nth-child(1) > :nth-child(1) > :nth-child(2) > .m-2 > .md\\:flex > :nth-child(1) > :nth-child(1) > :nth-child(1) > .flex-1 > input'
                break;
            case "event description":
                inputFieldPath = ':nth-child(3) > .m-2 > .md\\:flex > :nth-child(1) > :nth-child(1) > :nth-child(1) > .flex-1 > textarea'
                break;
            case "organization":
                inputFieldPath = ':nth-child(4) > :nth-child(1) > .md\\:flex > :nth-child(1) > :nth-child(1) > :nth-child(1) > .flex-1 > select'
                break;
            case "cost":
                inputFieldPath = ':nth-child(4) > :nth-child(2) > .md\\:flex > :nth-child(1) > :nth-child(1) > :nth-child(1) > .flex-1 > input'
                break;
            case "featured event":
                if(inputText.toString().toLowerCase() === 'yes'){
                    inputFieldPath = ':nth-child(1) > .md\\:flex > :nth-child(1) > :nth-child(1) > :nth-child(1) > .flex-1 > fieldset > .mt-2 > .mr-1 > input'
                }else if (inputText.toString().toLowerCase() === 'no'){
                    inputFieldPath = ':nth-child(1) > .md\\:flex > :nth-child(1) > :nth-child(1) > :nth-child(1) > .flex-1 > fieldset > .mt-2 > .ml-1 > input'
                }else{
                    cy.log('Please correct the input selection for ' + inputField + ' (only yes or no are accepted)')
                }
                break;
            case "private event":
                if(inputText.toString().toLowerCase() === 'yes'){
                    inputFieldPath = ':nth-child(2) > .md\\:flex > :nth-child(1) > :nth-child(1) > :nth-child(1) > .flex-1 > fieldset > .mt-2 > .mr-1 > input'
                }else if (inputText.toString().toLowerCase() === 'no'){
                    inputFieldPath = ':nth-child(2) > .md\\:flex > :nth-child(1) > :nth-child(1) > :nth-child(1) > .flex-1 > fieldset > .mt-2 > .ml-1 > input'
                }else{
                    cy.log('Please correct the input selection for ' + inputField + ' (only yes or no are accepted)')
                }
                break;
            case "notes":
                inputFieldPath = ':nth-child(7) > .m-2 > .md\\:flex > :nth-child(1) > :nth-child(1) > :nth-child(1) > .flex-1 > textarea'
                break;
            default:
                cy.log('Please correct your event card detail to check')
        }
        if(inputText.toString().toLowerCase() === 'yes' || inputText.toString().toLowerCase() === 'no' ) {
            cy.get(inputFieldPath).click()
        } else if (inputField.toString().toLowerCase() === 'organization') {
            cy.get(inputFieldPath).focus().select(inputText)
        } else if (inputText.startsWith("@TD:")){
            cy.randomEmailGenerator()
        } else {
            cy.get(inputFieldPath).focus().clear().type(inputText)
        }
    }

    /**
     * Click on the given object
     *
     * @param {object} - Object to click on it
     */
    clickObject(object){
        let objectPath
        switch(object.toString().toLowerCase()) {
            case "add meeting":
                objectPath = '\':nth-child(2) > fieldset > .justify-start > .m-2 > .md\\:flex > :nth-child(1) > :nth-child(1) > :nth-child(1) > .flex-1 > .btn\''
                break;
            case "add contact":
                objectPath = '\':nth-child(3) > fieldset > .justify-start > .m-2 > .md\\:flex > :nth-child(1) > :nth-child(1) > :nth-child(1) > .flex-1 > .btn\''
                break;
            case "submit":
                objectPath = ':nth-child(2) > .btn'
                break;
            default:
                cy.log('Please correct your desired click object name')
        }
        cy.get(objectPath).click()
    }

    /**
     * Check that text exist
     *
     * @param {text} - Desired text to check for existence
     */
    checkTextExist(text){
        cy.get('.bg-white-lighter > div > p')
            .should('exist')
            .should('contain', text)
    }
}
export default EventsPage;