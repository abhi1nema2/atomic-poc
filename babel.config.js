module.exports = {
    presets: [
      ['@babel/preset-env', {
        targets: {
          browsers: ['last 2 versions', 'explorer 11', 'ios 9']
        },
        useBuiltIns: 'usage',
        debug: false,
        corejs: '3.6.5'
      }],
      '@babel/preset-react'
    ],
    plugins: [
      ['@babel/plugin-proposal-decorators', {
        legacy: true
      }],
      '@babel/plugin-proposal-export-default-from',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-transform-react-constant-elements',
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-transform-react-jsx',
      '@babel/plugin-transform-runtime',
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-transform-modules-commonjs',
      '@babel/plugin-proposal-object-rest-spread'
    ]
  };
  