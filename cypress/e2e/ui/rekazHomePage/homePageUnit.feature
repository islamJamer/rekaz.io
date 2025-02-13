Feature: "Rekaz.io" webapp - home page Unit tests

    Background:
        Given I visit the "Rekaz.io" home page
 
        Scenario: check "Rekaz.io" page logo
            Then "Rekaz.io" page logo exists

        Scenario: check the "navbar" contains the expected items in the "Rekaz.io" page
            Then The "navbar" contains the expected items in the "Rekaz.io" page

        # Scenario: check the "login" button is enabled in the "Rekaz.io" page
        #     Then The the "login" button is enabled in the "Rekaz.io" page

        # Scenario: check the "login" button is enabled in the "Rekaz.io" page
        #     Then The the "login" button is enabled in the "Rekaz.io" page