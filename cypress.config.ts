/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
const { defineConfig } = require('cypress');

module.exports = defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		baseUrl: 'https://www.demoblaze.com',
		viewportHeight: 1080,
		viewportWidth: 1920,
		testIsolation: false,
		watchForFileChanges: false,
	},
});
