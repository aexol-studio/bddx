Feature: Continue selected session

    User should be able to continue selected session optionally he should be able to run the session with jira.

    Scenario: User wants to continue his last session from 2022-11-23 without jira
        Given Session from 2022-11-23 exists
        And There is a tool for selecting session to continue
        And There is a tool for saving current state of session
        And There is a tool for attaching jira integration for this session

        When User interacts with these tools with given data

        Then Saved state of session from 202022-11-23 should be displayed
        But If something goes wrong then proper error message should be displayed
        And user should be able to run selected session with jira integration if he wants to