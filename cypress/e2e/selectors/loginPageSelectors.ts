export const getLoginPageSelectors = () => {
  const getLoginForm = () => cy.get("form");
  return {
    url: "https://platform.rekaz.io/Account/Login",

    get userNameInputField() {
      return getLoginForm().find("#LoginInput_UserNameOrEmailAddress");
    },

    get userNameInputFieldErrorMessage() {
      return getLoginForm().find("#LoginInput_UserNameOrEmailAddress-error");
    },

    get passwordInputField() {
      return getLoginForm().find("#LoginInput_Password");
    },

    get passwordInputFieldErrorMessage() {
      return getLoginForm().find("#LoginInput_Password-error");
    },


    get loginButton() {
      return getLoginForm().find('[value="Login"]');
    },
  };
};
