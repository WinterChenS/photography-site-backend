'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  VUE_APP_BASE_API: '"http://localhost:8080"',
  NODE_ENV: '"development"'
})
