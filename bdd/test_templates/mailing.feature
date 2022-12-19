Feature: Mailing

  As a user, I want to be able to send emails through the website so that I can communicate with others.

  Scenario: Successful email send
    Given I am logged in
    And I am on the email compose page
    And I have entered a valid recipient email address
    And I have entered a subject and message
    
    When I click the send button
    
    Then the email should be sent successfully
    And I should receive a confirmation message

  Scenario: Email send fails due to invalid recipient address
    Given I am logged in
    And I am on the email compose page
    And I have entered an invalid recipient email address
    And I have entered a subject and message
    
    When I click the send button
    
    Then the email should not be sent
    And I should receive an error message stating that the recipient email address is invalid

  Scenario: Email send fails due to missing subject or message
    Given I am logged in
    And I am on the email compose page
    And I have entered a valid recipient email address
    And I have not entered a subject or message
    
    When I click the send button
    
    Then the email should not be sent
    And I should receive an error message stating that the subject or message is missing

  Scenario: Email send fails due to blocked email address
    Given I am logged in
    And I am on the email compose page
    And I have entered a valid recipient email address that is blocked by the system
    And I have entered a subject and message
    
    When I click the send button
    
    Then the email should not be sent
    And I should receive an error message stating that the recipient email address is blocked