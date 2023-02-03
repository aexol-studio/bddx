Feature: Recursive Tests Feature

    Description: This feature allows users to re-run failed tests until they all pass,
    by either inputting the report ID or selecting a test run from a list of runs with failed tests.
    The test results will be uploaded to the cloud app after each run.

    Scenario: User knows the failed report ID and re-runs the tests
        Given the user has run the command "npx bddx failedTest"
        And the user has been asked about the method for running the failed tests

        When the user chooses the option "I know the failed report ID"
        And inputs the report ID
        And the failed tests from that run are re-run

        Then the results of the re-run tests will be uploaded to the cloud app
        And the user will be notified if there are still failed tests

    Scenario: User selects a test run from the list of runs with failed tests and re-runs the tests
        Given the user has run the command "npx bddx failedTest"
        And the user has been asked about the method for running the failed tests

        When the user chooses the option "List of failed tests on the bddx project key"
        And selects a test run from the list
        And the selected test run is re-run with only the failed tests from that run

        Then the results of the re-run tests will be uploaded to the cloud app
        And the user will be notified if there are still failed tests

    Scenario: User inputs an invalid report ID and cannot re-run the tests
        Given the user has run the command "npx bddx failedTest"
        And the user has been asked about the method for running the failed tests

        When the user chooses the option "I know the failed report ID"
        And inputs an invalid report ID

        Then an error message should be displayed stating that the report ID is invalid and the tests cannot be re-run.