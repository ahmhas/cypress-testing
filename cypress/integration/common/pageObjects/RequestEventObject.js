class RequestEventObject {

    /**
     * Select event type from the dropdown menu
     * @param  {eventType} - type of event to be selected (Speaker, Alumni Event)
     */
    selectEventType(eventType) {
        cy.get('#requestEventTypeSelect').select(eventType)
        cy.get('.mb-6 > .flex', { timeout: 90000 }).should('be.visible');
    }
}

export default RequestEventObject;