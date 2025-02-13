// import { interceptDecideRequest } from "./interceptRequestUtils";

export const visitPage = (url = "/") => {
    // interceptDecideRequest();
    cy.visit(url);
    // cy.wait("decide");
}