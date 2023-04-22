const { defineConfig } = require('cypress')
// https://github.com/bahmutov/cypress-split
const cypressSplit = require('cypress-split')

module.exports = defineConfig({
  e2e: {
    // baseUrl, etc
    fixturesFolder: false,
    video: false,
    env: { grepFilterSpecs: true, grepOmitFiltered: true },
    setupNodeEvents(on, config) {
      // https://github.com/bahmutov/cy-grep
      require('@bahmutov/cy-grep/src/plugin')(config)
      // after filtering by tags, split the remaining specs
      cypressSplit(on, config)

      // IMPORTANT: return the config object
      return config
    },
  },
})
