import { When, Then } from "cypress-cucumber-preprocessor/steps";
import { getLoginPageSelectors } from "../../../selectors/loginPageSelectors";

const loginPage = getLoginPageSelectors();

Then('The "username" input field exists in the "login" page', () => {
    loginPage.userNameInputField.should("exist");
});

Then('The "password" input field exists in the "login" page', () => {
    loginPage.passwordInputField.should("exist");
});

Then('The "Login" button exists in the "login" page', () => {
    loginPage.loginButton.should("exist");
});

When('I click on the "Login" button', () => {
    loginPage.loginButton.click();
});

Then('The error message appears under both input fields', () => {
    loginPage.userNameInputFieldErrorMessage.should("contain", "الحقل اسم المستخدم أو البريد الإلكتروني إجباري");
    loginPage.passwordInputFieldErrorMessage.should("contain", "الحقل كلمة المرور إجباري");
});

