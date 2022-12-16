Feature: Forgot password

  As a user who has forgotten my password
  I want to be able to reset my password
  So that I can regain access to my account

  Scenario: Successfully reset password
	Given the user is on the login page
	
	When the user clicks on the "Forgot password" link
	And the user enters their registered email address
	And clicks the "Send reset link" button
	
	Then the user should receive an email with a password reset link
	And the user should be able to click the password reset link and reset their password
	And the user should be able to login with their new password

  Scenario: Enter invalid email
	Given the user is on the login page
	
	When the user clicks on the "Forgot password" link
	And the user enters an email that is not registered
	And clicks the "Send reset link" button
	
	Then the user should see an error message stating that the email is not registered

  Scenario: Try to reset password with expired link
	Given the user has requested a password reset and received a reset link
	
	When the user clicks the password reset link
	And the link has expired
	
	Then the user should see an error message stating that the link has expired
	And the user should be prompted to request a new password reset link