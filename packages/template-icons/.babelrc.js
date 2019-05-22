module.exports = {
  plugins: [
    require(`@babel/plugin-proposal-class-properties`),
    require(`@babel/plugin-proposal-object-rest-spread`)
  ],
  presets: [require("@babel/preset-react"), require("@babel/preset-typescript")]
}
