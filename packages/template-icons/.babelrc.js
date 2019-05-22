module.exports = {
  plugins: [
    require(`@babel/plugin-proposal-class-properties`),
    require(`@babel/plugin-proposal-object-rest-spread`)
  ],
  presets: [
    require("@babel/preset-react"),
    require("@babel/preset-typescript")
  ],
  env: {
    test: {
      sourceMaps: `inline`,
      presets: [
        [
          require(`@babel/preset-env`),
          {
            modules: `commonjs`,
            useBuiltIns: `usage`,
            corejs: 3
          }
        ]
      ]
    }
  }
};
