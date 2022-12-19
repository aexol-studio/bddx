Feature: Teams operations

    Operations might be used to manage the teams and team members within the app.


  Scenario: Create a new team
    Given the user is on the "Teams" page
    
    When the user clicks the "Create team" button
    And fills out the form with the team name, description, and member list
    And clicks the "Save" button
    
    Then a new team should be created and added to the list of teams on the "Teams" page
    And the user should be taken back to the "Teams" page

  Scenario: View team details
    Given the user is on the "Teams" page
    
    When the user clicks on a team in the list of teams
    
    Then the user should be taken to the team's details page
    And the page should display the team's name, description, and member list

  Scenario: Edit a team
    Given the user is on the "Teams" page
    
    When the user clicks on a team in the list of teams
    And clicks the "Edit" button
    And makes changes to the team's name, description, or member list
    And clicks the "Save" button
    
    Then the changes should be saved and reflected on the team's details page


  Scenario: Delete a team
    Given the user is on the "Teams" page
    
    When the user clicks on a team in the list of teams
    And clicks the "Delete" button
    
    Then the team should be deleted from the list of teams on the "Teams" page
    And a confirmation message should be displayed to the user