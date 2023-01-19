Feature: Payment

  As a user, I want to be able to make payments on the website so that I can purchase items.

  Scenario: Successful payment
    Given I am a logged-in user
    And I have added items to my cart
    And I have entered my payment information
   
    When I submit the payment form
    
    Then the payment should be processed successfully
    And I should receive a confirmation message

  Scenario: Payment fails due to invalid card information
    Given I am a logged-in user
    And I have added items to my cart
    And I have entered invalid payment information
    
    When I submit the payment form
    
    Then the payment should be declined
    And I should receive an error message stating that my card was declined

  Scenario: Payment fails due to insufficient funds
    Given I am a logged-in user
    And I have added items to my cart
    And I have entered valid payment information with insufficient funds
    
    When I submit the payment form
    
    Then the payment should be declined
    And I should receive an error message stating that there are insufficient funds to complete the payment

  Scenario: Payment fails due to expired card
    Given I am a logged-in user
    And I have added items to my cart
    And I have entered a valid payment method that has expired
    
    When I submit the payment form
    
    hen the payment should be declined
    And I should receive an error message stating that my card has expired