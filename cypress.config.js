module.exports = {
  screenshotOnRunFailure: false,
  video: false,
  reporter: 'CypressReporter.js',
  e2e: {
    setupNodeEvents(on, config) {},
    specPattern: './**/*.cy.{js,jsx,ts,tsx}',
    supportFile: false, 
  },
  component: {
    specPattern: './**/*.spec.{js,jsx,ts,tsx}',
    supportFile: false, 
  }
};
