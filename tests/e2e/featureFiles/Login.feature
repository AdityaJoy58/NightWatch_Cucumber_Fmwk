@home-page @home @logins
Feature: Login Functionality
  As a user on hitting the url
  I should see Login page
  I should be able to login through login page.

  @homepage @home @login
  Scenario: Verify the Login with Log in link present on Home page
    Given Instagram Application is opened with Sign Up page
    When User Click on Log in link
    Then Enter Username and Password
    And Click on Log In button
    Then Verify Login Successfully into the Instagram Application

