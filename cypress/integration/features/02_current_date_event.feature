Feature: Select Events

  # ------------------------------------------------------------------
  Scenario: See events related to current date
  # ------------------------------------------------------------------
    # (1) Given that current date is November 20th, 2021
    Given the user can open the website url
    And the user selects a specific date '20.11.2021' from the calendar on the homepage

    # (2) When I click on Today’s Events
    # (3) I can see all events happening today
    # (*) Note: There is 1 event happening on that date.
    Then the user can only see events that happen on the given date '20.11.2021' on the homepage
    And the user see only '1' event happening on that date on the homepage

    # (4) Search input in the navigation bar
    # (5) Find all events matching the phrase "Tokyo"
    # (*) Note: There’s 1 event matching the "Tokyo" phrase
    When the use the search input in the navigation bar and type in 'Tokyo' and confirm on the homepage
    Then the user finds all events matching the phrase 'Tokyo' on the search page

  # ------------------------------------------------------------------
  Scenario: See filtered search results by organization name
  # ------------------------------------------------------------------
    # (6) Select "Model UN" from the filter by organization dropdown
    # (7) I see all events organized by that organization
    # (*) Note: There are upcoming 4 events that match this search
    Given the user can open the website url
    And the user selects a specific date '20.11.2021' from the calendar on the homepage
    When the user selects the 'Model UN' organization from the filter by organization dropdown on the search page
    Then the user sees all events organized by organization 'Model UN' on the search page
    And the user see only '4' events that match the filter by organization on the search page