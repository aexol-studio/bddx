Feature: Check Jira Token 

    User should be able to check Jira token straight from the bddx

    Scenario: User wants to check his token
        Given User has integration with Jira
        And There is a tool for checking Jira token

        When User interacts with this tool

        Then Jira token status should be displayed
        And if Jira token is invalid, then  link to create new token should be displayed