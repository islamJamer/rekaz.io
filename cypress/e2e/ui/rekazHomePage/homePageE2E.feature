Feature: "Rekaz.io" webapp - home page E2E tests

    Background:
        Given I visit the "Rekaz.io" home page

    # @ignore
    Scenario: check the "Login" page is opened when clicking on the "login" button in the "Rekaz.io" home page
        When I click on the "login" button in the "Rekaz.io" home page
        Then The "Login" page is opened
