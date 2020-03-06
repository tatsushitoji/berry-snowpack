module.exports = {
  presets: [
    '@babel/typescript',
    '@babel/react',
  ],
  plugins: [
    ["snowpack/assets/babel-plugin.js", 
      {
      "optionalExtensions": true
      }
    ],
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
  ],
}
