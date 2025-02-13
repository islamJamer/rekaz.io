import { Given } from "cypress-cucumber-preprocessor/steps";
import { visitPage } from "../utils/testUtils";

Given('I visit the "Rekaz.io" home page', () => {
    visitPage();
});