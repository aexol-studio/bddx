Feature: Verification of the functionality through a test
    User can decide if functionality will pass the test or not, by asking if everything is ok.
    First version can be based on the switch/if instuction, when question is displayed and everything is ok then press 1, but if something is wrong then press 2 and write what's wrong.

  Scenario: User wants to test register functionality via "register.feature" test which is in "/userHandling" path, but one of register inputs is broken
    Given register functionality exists
    And register.feature file exists in path "/userHandling" which also exists selectss
    And There is a tool to approve or reject the functionality
    And This tool has functionality to ask if everything is ok?
    And This tool has functionality to ask for rejection reason and save it to the selected output file if something is wrong
    And Test content will be displayed correctly
    When User interacts with this tool by testing the functionality with error
    Then User should be able to reject this test
    And There should be a place to write why test is rejected.
    And Rejection reason should be saved in output file
    But If functionality is ok, then user can pass this test
    And Information about passed test should be saved in output file
