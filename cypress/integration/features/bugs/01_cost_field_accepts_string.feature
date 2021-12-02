Feature: Issues found
  Issues found on the website
  Please refer to the attached Coursedog_Issues.pdf for more details and screenshot

# =============================================================================
  Scenario: The „Cost“ field accepts any string not only numbers
  # ---------------------------------------------------------------------------
  #  Steps:
  #  (1) User opens the website (https://damian-events.coursedog.com)
  #  (2) User clicks on „Request an event“ within the bottom-right side section
  #  (3) User selects „Speaker“ from the dropdown menu.
  #  (4) User fills in the cost section with the following value „costString“
  #  (5) User clicks on „Submit“ button.
  #
  #  Expected:
  #  (1) No string should be accepted within the cost field
  #  (2) User should be notified that only number are allowed within the cost field.
  #
  #  Actual:
  #  „Cost“ field accepts any value even string one.
# =============================================================================
    Given the user can open the website url
    Then the user selects "Speaker" within request an event menu on the homepage
    And the user input text '@TD:Random Email' within input field 'Email Address' on the events page
    And the user input text 'Event Name text input' within input field 'Event Name' on the events page
    And the user input text 'Event Description text input' within input field 'Event Description' on the events page
    And the user input text 'Model UN' within input field 'Organization' on the events page
    And the user input text 'Cost input as string' within input field 'Cost' on the events page
    And the user input text 'Yes' within input field 'Featured Event' on the events page
    And the user input text 'No' within input field 'Private Event' on the events page
    And the user input text 'Notes text input' within input field 'Notes' on the events page
    Then the user clicks 'Submit' button on the event page
    And the user checks that the 'We have sent confirmation to the email you provided' on the event page