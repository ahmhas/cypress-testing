Feature: Issues found
  Issues found on the website
  Please refer to the attached Coursedog_Issues.pdf for more details and screenshot

# =============================================================================
  Scenario: Clicking on the month name to select the current month doesn’t work.
  # ---------------------------------------------------------------------------
  #  Steps:
  #  (1) Click on the month name within the date picker
  #  (2) Click on the current month (e.g. Dec)
  #
  #  Expected:
  #  Clicked month is selected successfully
  #
  #  Actual:
  #  Clicking on the current month to select it, do no action
# =============================================================================
    Given the user can open the website url
    Then the user selects a specific date '23.12.2021' from the calendar without clicking away on the homepage