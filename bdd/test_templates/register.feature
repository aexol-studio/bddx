Scenario: Test Registration form
    
    Given The Registration form is open
    When I enter "<name>", "<password>", "<password2>", "<email>"
    Then I should see the "<msg>" message on screen

    Examples:
    | name | password | password2 |     email    |         msg      |
    | Joe1 | 12345    | 12345     | joe@mail.com |      Welcome     |
    |      | abcd     | abcd      | joe@mail.com | Specify user name|
    | Joe3 | 12345    | 67890     | joe@mail.com | Passwords differ |
    | Joe4 | abcd     | abcd      |              | Specify email    |