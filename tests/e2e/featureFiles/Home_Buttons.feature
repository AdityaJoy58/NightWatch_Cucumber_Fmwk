@home-page @home @buttons
Feature: Buttons in Home page
  As a user on hitting the url
  I should see Login page
  I should be able to see and verify Facebook, Signup buttons.

  @homepage @home @button
  Scenario: Verify the Login with Facebook button present on Home page
    Given Instagram application is loaded
    When Home page appears
    Then Login with Facebook button present

  @homepage @home @button
  Scenario: Verify SignUp button present on Home page
    Given Instagram application is loaded
    When Home page appears
    Then SignUp button present


