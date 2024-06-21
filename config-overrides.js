const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = function override(config, env) {
  // Configuración para cambiar la entrada
  //config.entry = path.resolve(__dirname, './src/Pildoras/App.js');
  //return config;

  const entryPath = process.env.REACT_APP_ENTRY || "src/index.js";
  config.entry = path.resolve(__dirname, entryPath);

  // Modificar la configuración de HtmlWebpackPlugin para usar main.html
  // const htmlWebpackPluginIndex = config.plugins.findIndex(
  //   (plugin) => plugin.constructor.name === "HtmlWebpackPlugin"
  // );

  // if (htmlWebpackPluginIndex !== -1) {
  //   config.plugins[htmlWebpackPluginIndex] = new HtmlWebpackPlugin({
  //     inject: true,
  //     template: "public/index.html",
  //   });
  // }

  // Configuración para cambiar el archivo HTML de entrada
  const htmlTemplate = process.env.REACT_APP_HTML || "public/index.html";
  const htmlWebpackPluginIndex = config.plugins.findIndex(
    (plugin) => plugin.constructor.name === "HtmlWebpackPlugin"
  );

  if (htmlWebpackPluginIndex !== -1) {
    config.plugins[htmlWebpackPluginIndex] = new HtmlWebpackPlugin({
      inject: true,
      template: htmlTemplate,
    });
  }

  return config;
};
