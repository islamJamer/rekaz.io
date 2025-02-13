import { Given } from "cypress-cucumber-preprocessor/steps";
import { visitPage } from "../utils/testUtils";

Given('I visit the "Rekaz.io" home page', () => {
    visitPage();
});

Given('I visit the "Rekaz.io" login page', () => {
    cy.visit('https://platform.rekaz.io/Account/Login');
});