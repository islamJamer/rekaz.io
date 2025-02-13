import { Then, When } from "cypress-cucumber-preprocessor/steps";
import { getHomePageSelectors } from "../../../selectors/homePageSelectors";

const homePage = getHomePageSelectors();

When('I click on the "login" button in the "Rekaz.io" home page', () => {
  homePage.header.loginButton.invoke("removeAttr", "target").click();
  cy.wait(5000); // TODO: will be changed to the interceptRequest...
});

Then('The "Login" page is opened', () => {
  cy.origin("https://platform.rekaz.io", () => {
    cy.url().should("include", "Account/Login");
  });
});
