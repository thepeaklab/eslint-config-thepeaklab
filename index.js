module.exports = {
  extends: ["plugin:jest/recommended", "airbnb-prettier"],
  globals: { window: true, document: true },
  plugins: ["jest"],
  parser: "babel-eslint",
  env: {
    "jest/globals": true
  },
  rules: {
    "react/jsx-filename-extension": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false
      }
    ]
  }
};
