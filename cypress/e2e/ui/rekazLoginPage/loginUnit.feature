Feature: "Rekaz.io" webapp - login page Unit tests

    Background:
        Given I visit the "Rekaz.io" login page

        Scenario: check the "Username" input field exists in the "login" page
            Then The "username" input field exists in the "login" page

        Scenario: check the "Password" input field exists in the "login" page
            Then The "password" input field exists in the "login" page

        Scenario: check the "Login" button exists in the "login" page
            Then The "Login" button exists in the "login" page

        Scenario: check that the error message appears when clicking on the "login" button without filling the input fields
            When I click on the "Login" button
            Then The error message appears under both input fields
