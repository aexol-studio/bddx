# Test Scenarios

----------

## Display test

<span style="color:#cf222e ">Feature</span>: Display .feature file

 -   User should be able to see the test scenario after selecting the test path.
    For example, there is a `userHandling` directory with `login.feature`, `register.feature`, and `forgotPassword.feature` files.
    If user selects the `/userHandling` path in the config file all tests should be displayed sequentially one after another.

-  <span style="color:#cf222e ">Scenario</span>: User wants to run `login.feature` tests from the `/userHandling` path
    
    - <span style="color:#cf222e ">Given</span> `/userHandling` path exists
    - <span style="color:#cf222e ">And</span> `login.feature` exists
    - <span style="color:#cf222e ">And</span> there is a tool to display test content
    - <span style="color:#cf222e ">When</span> user interacts with this tool
    - <span style="color:#cf222e ">Then</span> test `login.feature` should be displayed
    - <span style="color:#cf222e ">And</span> after passing or failing, the next test from the selected path should be displayed
    - <span style="color:#cf222e ">And</span> if this is the last test or there was only a single test in the path, program should quit
    - <span style="color:#cf222e ">But</span> If path does not exist or there is a typo, then the proper error message should be displayed

## Pass or fail test

<span style="color:#cf222e ">Feature</span>: Verification of a functionality through a test
 - User can decide if the functionality passed the test or not, by asking if everything is ok.
 - The first version can be based on the switch/if instruction, when the question is displayed and everything is ok user presses 1, but if something is wrong then user presses 2 and write what's wrong.

 - <span style="color:#cf222e ">Scenario</span>: User wants to test the register functionality via the `register.feature` test which is in the `/userHandling` path, but one of the register inputs is broken
    
    - <span style="color:#cf222e ">Given</span> register functionality exists
    - <span style="color:#cf222e ">And</span> `register.feature` file exists in the selected path `/userHandling` which also exists
    - <span style="color:#cf222e ">And</span> there is a tool to approve or reject the functionality test results
    - <span style="color:#cf222e ">And</span> this tool has the functionality to ask if everything is ok
    - <span style="color:#cf222e ">And</span> this tool has the functionality to ask for the rejection reason and save it to the selected output file if something is wrong
    - <span style="color:#cf222e ">And</span> the contents of the test can be displayed correctly
    - <span style="color:#cf222e ">When</span> user interacts with this tool by testing the functionality for errors
    - <span style="color:#cf222e ">Then</span> user should be able to reject this test's result
    - <span style="color:#cf222e ">And</span> there should be a place to write why the test result is rejected
    - <span style="color:#cf222e ">And</span> the rejection reason should be saved in the output file
    - <span style="color:#cf222e ">But</span> if the functionality is ok, then user can decide the test was passed
    - <span style="color:#cf222e ">And</span> information about the passed test should be saved in theoutput file

## More scenarios coming soon!