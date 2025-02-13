export const getLoginPageSelectors = () => {
    const loginForm = cy.get("form");
    return {
        url: "https://platform.rekaz.io/Account/Login",

        get userName() {
            return loginForm.find("#LoginInput_UserNameOrEmailAddress");
        },

        get password(){
            return loginForm.find("#LoginInput_Password");
        },

        get loginButton() {
            return loginForm.find('[value="Login"]');
        }
    }
}