const { plugins } = require('@newhighsco/release-config')

module.exports = {
  branches,
  plugins: [
    ...plugins,
    [
      'semantic-release-circleci-orb',
      {
        orbName: 'newhighsco/orb',
        orbPath: 'dist/orb.yml'
      }
    ]
  ]
}
