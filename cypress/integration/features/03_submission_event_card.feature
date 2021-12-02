Feature: Submission event card

 # -----------------------------------------------------------------------
  Scenario: See events related to current date
 # -----------------------------------------------------------------------
    # (1) Given that current date is September 2nd, 2021
    Given the user can open the website url
    And the user selects a specific date '02.09.2021' from the calendar on the homepage

    # (2) When I click on Today’s Events
    # (3) I can see there are no events.
    Then the user clicks on 'Today’s events' link on the homepage
    And the user see only '0' event happening on that date on the homepage

    # (4) When I click on Featured Events
    # (5) I can see all upcoming featured events
    # (*) Note: There are 3 upcoming featured meetings for that week. => Correction: There is no featured events on Sept. 2nd, 2021
    When the user clicks on 'Featured Events' link on the homepage
    And the user see only '0' event happening on that date on the homepage

 # -----------------------------------------------------------------------
  Scenario: Check the details of the event card
  # Note:
  # The scenario has been changed to show the date Nov. 18th, 2021
  # as the the card "QA Task Submission" doesn't exist on Sept. 2nd, 2021
 # -----------------------------------------------------------------------
    # (6) When I click on the QA Task Submission event card
    # (7) I can see more details about the event:
    # |-- Add to calendar link, Add to Google calendar link, Event Type, Organization, Contacts, Event description
    Given the user can open the website url
    And the user selects a specific date '18.11.2021' from the calendar on the homepage
    Then the user sees event card with title 'QA Task Submission' and organized by 'Anderson Collection at Stanford University' on the homepage
    When the user opens the event card with title 'QA Task Submission' on homepage

    Then the user sees 'Add to calender link' on the events page
    Then the user sees 'Add to Google calendar link' on the events page
    Then the user sees 'Event Type' on the events page
    Then the user sees 'Organization' on the events page
    Then the user sees 'Contacts' on the events page
    Then the user sees 'Event description' on the events page
