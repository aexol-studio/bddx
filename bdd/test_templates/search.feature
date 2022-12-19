Feature: Search something

    User can search something

    Scenario: User wants to search for a item named "Book"
        Given Item "Book" exists
        And The user has permissions to use the search tool
        And There is a tool for searching and displaying searched content
        
        When The user enters some letters that are at the beginning of the name of the item he is looking for 
        
        Then Book should be displayed
        But If the user enters other letters, then other items should be displayed


