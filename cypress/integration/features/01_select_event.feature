Feature: Select Events
  As a user I would like to connect to the system

  # ------------------------------------------------------------------
  Scenario: See events related to the selected date
  # ------------------------------------------------------------------
    Given the user can open the website url
    And the user selects a specific date '23.11.2021' from the calendar on the homepage
    Then the user can only see events that happen on the given date '23.11.2021' on the homepage
    And the user see only '2' event happening on that date on the homepage