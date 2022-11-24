Feature: Forget password
	
    In order to gain access to assets stored within a system as any user
	I would like to be able to get a new password if I forget my password
	
	Scenario: Forgot password and email is found
		Given I am not authenticated
		And all email has been delivered
		And a user exists with email: "someuser@someuser.com", password: "somePassword"
		And I go to the forgot password page
		
        When I fill in "user_email" with "someuser@someuser.com"
		
        And I press "Send me reset password instructions"
		Then I should see "You will receive an email with instructions about how to reset your password in a few minutes."
		And 1 email should be delivered to someuser@someuser.com
		And the email should contain "Hello someuser@someuser.com!"
		And show me the emails

		When I click the first link in the email
		Then I should see "Change your password"
		And I should see "Sign in"
		And I should not see "Sign up"
		
		When I fill in "user_password" with "some_new_password"
		And I fill in "user_password_confirmation" with "some_new_password"
		And I press "Change my password"
		Then I should not see "Reset password token is invalid"
		
		Given I am not authenticated
		When I go to the sign in page
		And I fill in "user_email" with "someuser@someuser.com"
		And I fill in "user_password" with "some_new_password"
		And I press "Sign in"
		Then I should see "Signed in as someuser@someuser.com."