import { RequestOptions } from "./types";

const interceptRequest = ({method, url, response = {}}: RequestOptions, alias: string) => {
    return cy.intercept(method, url, response).as(alias);
}

export const interceptDecideRequest = () => {
    return interceptRequest(
        {
            method: 'POST',
            url: 'https://us.i.posthog.com/decide/?v=3&ip=1&_=1739440797577&ver=1.217.2&compression=base64',
        },
        "decide"
    );
}
