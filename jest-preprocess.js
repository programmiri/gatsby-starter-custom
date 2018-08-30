const babelOptions = {
  presets: ['env', 'react'],
}

module.exports = require('babel-jest').createTransformer(babelOptions)
