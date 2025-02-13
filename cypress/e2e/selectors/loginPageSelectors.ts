export const getLoginPageSelectors = () => {
  const getLoginForm = () => cy.get("form");
  return {
    url: "https://platform.rekaz.io/Account/Login",

    get userName() {
      return getLoginForm().find("#LoginInput_UserNameOrEmailAddress");
    },

    get password() {
      return getLoginForm().find("#LoginInput_Password");
    },

    get loginButton() {
      return getLoginForm().find('[value="Login"]');
    },
  };
};
