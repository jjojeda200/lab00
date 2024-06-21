const path = require('path');

module.exports = function override(config, env) {
  //config.entry = path.resolve(__dirname, './src/Pildoras/App.js');
  //return config;

  const entryPath = process.env.REACT_APP_ENTRY || 'src/index.js';
  config.entry = path.resolve(__dirname, entryPath);
  return config;
};