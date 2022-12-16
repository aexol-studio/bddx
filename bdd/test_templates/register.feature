Feature: Registration
  
  As a new user
  I want to be able to create an account
  So that I can access the service

  Scenario: Successfully register
    Given the user is on the registration page
    
    When the user enters their email, password, and other required information
    And clicks the "Create account" button
    
    Then the user's account should be created
    And the user should be logged in to their account

  Scenario: Try to register with an already-registered email
    Given the user is on the registration page
    
    When the user enters an email that is already registered
    And clicks the "Create account" button
    
    Then the user should see an error message stating that the email is already registered

  Scenario: Try to register with an invalid email
    Given the user is on the registration page
    
    When the user enters an invalid email
    And clicks the "Create account" button
    
    Then the user should see an error message stating that the email is invalid

    Examples:
    | name | password | password2 |     email    |         msg      |
    | Joe1 | 12345    | 12345     | joe@mail.com |      Welcome     |
    |      | abcd     | abcd      | joe@mail.com | Specify user name|
    | Joe3 | 12345    | 67890     | joe@mail.com | Passwords differ |
    | Joe4 | abcd     | abcd      |              | Specify email    |