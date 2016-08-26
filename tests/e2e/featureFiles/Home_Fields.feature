@home-page @home @fields
Feature: Fields in Home page
  As a user on hitting the url
  I should see Login page
  I should be able to see Email, Full Name, Username, Password fields.

  @homepage @home @field
  Scenario: Verify the Email field present on Home page
    Given Instagram application is loaded
    When Home page appears
    Then Email field present

  @homepage @home @field
  Scenario: Verify Full Name field present on Home page
    Given Instagram application is loaded
    When Home page appears
    Then Full Name field present

  @homepage @home @field
  Scenario: Verify the Username field present on Home page
    Given Instagram application is loaded
    When Home page appears
    Then Username field present

  @homepage @home @field
  Scenario: Verify Password field present on Home page
    Given Instagram application is loaded
    When Home page appears
    Then Password field present
