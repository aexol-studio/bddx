Feature: Login

  I want to login on page

  Background:
    Given I go to '/login'
    And the field 'email' is empty
    And the field 'password' is empty

  Scenario: Error on empty fields
    When I click on 'enter'
    Then field 'email' should be with error
    And field 'password' should be with error

  Scenario: Wrong password
    When I type 'marcin@aexol.com' in 'email'
    And I type '123456' in 'password'
    And I click on 'enter'
    Then I should see 'E-mail or password is incorrect'

  Scenario: Login successfully
    Given I have user:
      | name           | email             | password |
      | Marcin Dadura  | marcin@aexol.com  | abc123   |
    When I type 'marcin@aexol.com' in 'email'
    And I type 'abc123' in 'password'
    And I click on 'enter'
    Then I shouldn't see 'Access your account'