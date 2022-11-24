Feature: Jira configuration

    User should be able to configure type of tickets and select desired project

    Scenario: User wants to set bddx to create tasks in a "test" project
        Given User has integration with Jira
        And There is a tool for selecting ticket type
        And There is a tool for selecting jira project

        When User interacts with these tools with given data

        Then jira config should be saved in configuration file
        And user should be able to create tasks in the "test" project
        But If something goes wrong then proper error message should be displayed
        And user should be able to reconfigure jira config by using bddx init command