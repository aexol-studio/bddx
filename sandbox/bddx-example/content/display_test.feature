Feature: Display .feature file
    User should be able to see test scenario after selecting a tests path.
    For example, there is a userHandling directory with login.feature, register.feature, and forgotPassword.feature.
    If user selects /userHandling path in config file all tests should be displayed sequentially one after another

  Scenario: User wants to run "login.feature" tests from "/userHandling" path
    Given "/userHandling" path exists
    And login.feature exists
    And There is a tool to display test content
    When User interacts with this tool
    Then Test login.feature should be displayed
    And After passing or failing, next test from selected path should be displayed
    And If this is last or single test in path, program should quit
    But If path not exists or there is a typo, then proper error message should be displayed

  Scenario: Scenario 2
    Given "/userHandling" path exists Scenario 2
    And login.feature exists Scenario 2
    And There is a tool to display test content Scenario 2
    When User interacts with this tool Scenario 2
    Then Test login.feature should be displayed Scenario 2
    And After passing or failing, next test from selected path should be displayed Scenario 2
    And If this is last or single test in path, program should quit Scenario 2
    But If path not exists or there is a typo, then proper error message should be displayed Scenario 2
