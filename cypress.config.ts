import { defineConfig } from 'cypress'
// declare function require(name:string);

const browserify = require('@cypress/browserify-preprocessor');
const cucumber = require('cypress-cucumber-preprocessor').default;

const baseUrl = "https://rekaz.io/";

/**
 * In case I want to add the response data inside the fixtures folder and use localhost instead of a real server
 * For now I will use the real server to add the unit tests because it needs lots of preparing data
 */
const devConfig: Partial<Cypress.PluginConfigOptions> = {
  baseUrl: baseUrl,
  env: {
    intercept: true,
  },
  specPattern: '**/*Unit.{feature,features}',
  excludeSpecPattern: ['*.ts', '**/*E2E.{feature,features}', '**/*Api.{feature,features}']
}

/**
 * Use a real server to cover the E2E testcases
 */
const getE2ETestsConfig = (hostUrl = baseUrl): Partial<Cypress.PluginConfigOptions> => ({
  baseUrl: `${hostUrl}`,
  env: {
    intercept: false,
    TAGS: 'not @ignore'
  },
  specPattern: '**/*E2E.{feature,features}',
  excludeSpecPattern: ['*.ts', '**/*Unit.{feature,features}', '**/*Api.{feature,features}']
})

/**
 * Use a real server to cover the APIs testcases
 */
const getApiTestsConfig = (hostUrl = baseUrl): Partial<Cypress.PluginConfigOptions> => ({
  baseUrl: `${hostUrl}`,
  env: {
    intercept: false,
    TAGS: 'not @ignore'
  },
  specPattern: '**/*Api.{feature,features}',
  excludeSpecPattern: ['*.ts', '**/*E2E.{feature,features}', '**/*Unit.{feature,features}']
})

export const setupNodeEvents = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      const options = {
        ...browserify.defaultOptions,
        typescript: require('resolve').sync('typescript', { baseDir: config.projectRoot }),
      };

      on('file:preprocessor', cucumber(options));
      if(config.env.testType === 'e2e') getApiTestsConfig() as Cypress.PluginConfigOptions;
      if(config.env.testType === 'e2e') getE2ETestsConfig() as Cypress.PluginConfigOptions;
      return devConfig as Cypress.PluginConfigOptions;;
    },
  },
}).e2e?.setupNodeEvents;

const config = defineConfig({
  video: false,
  e2e:{
    setupNodeEvents,
  },
  viewportHeight: 1080,
  viewportWidth: 1900
})

export default config;
