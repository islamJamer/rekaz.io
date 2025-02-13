import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import { getHomePageSelectors } from "../../../selectors/homePageSelectors";

const homePage = getHomePageSelectors();

Then('"Rekaz.io" page logo exists', () => {
  homePage.header.logo.should("exist");
});

Then('The "navbar" contains the expected items in the "Rekaz.io" page', () => {
  const expectedItems = ["الرئيسية", "المدونة", "الأسعار", "تواصل معنا"];
  homePage.header.getNaveBarItemsTitles().should("deep.equal", expectedItems);
});
