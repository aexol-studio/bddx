Feature: Operation on team members

  Operations allow users to manage and maintain the data related to team members. 
  This includes creating new team members, viewing the details of individual team members, editing the details of existing team members, and removing team members as needed

  Scenario: Add a new team member
    Given the user is on the "Team Members" page
    
    When the user clicks the "Add member" button
    And fills out the form with the member's name, email, and role
    And clicks the "Save" button
    
    Then a new team member should be added to the list of team members on the "Team Members" page
    And the user should be taken back to the "Team Members" page

  Scenario: View team member details
    Given the user is on the "Team Members" page
    
    When the user clicks on a team member in the list of team members
    
    Then the user should be taken to the team member's details page
    And the page should display the team member's name, email, and role

  Scenario: Edit a team member
    Given the user is on the "Team Members" page
    
    When the user clicks on a team member in the list of team members
    And clicks the "Edit" button
    And makes changes to the team member's name, email, or role
    And clicks the "Save" button
    
    Then the changes should be saved and reflected on the team member's details page

  Scenario: Remove a team member
    Given the user is on the "Team Members" page
    
    When the user clicks on a team member in the list of team members
    And clicks the "Remove" button
    
    Then the team member should be removed from the list of team members on the "Team Members" page
    And a confirmation message should be displayed to the user