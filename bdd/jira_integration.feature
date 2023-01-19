Feature: Jira integration

    User should be connect his jira account with bddx, and create tasks in selected boards.

    Scenario: User wants to integrate jira account with bddx
        Given I have user:
        |       email       |         Jira Token       |         organization name      |
        | test@aexol.com    | 9xfZC9Bg43Er932sdffxfZC9 |  my-organization.atlassian.net |
        And There is a tool to select email for integration
        And There is a tool to select jira token for integration
        And There is a tool to select organization name for integration

        When User interacts with these tools with given credentials

        Then credentials should be saved in configuration file
        And mail and token should be saved locally on machine
        And proper message about it should be displayed 
        But If something goes wrong then proper error message should be displayed