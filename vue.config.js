module.exports = {
  // ...other vue-cli plugin options...
 pwa: {

    name: 'Tawakkalna',
    manifestOptions: {
      name: "Tawakkalna",
      short_name: "Tawakkalna",
      start_url: "./",
      display: "standalone",
      theme_color: "#101218"
    },
    themeColor: '#101218',
    msTileColor: '#101218',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    iconPaths: {
      appleTouchIcon: 'appstore.png',
    },
      
  }
}