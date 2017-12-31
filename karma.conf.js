// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular/cli/plugins/karma'),
      require('karma-phantomjs-launcher'),
      require('karma-spec-reporter')
    ],
    files: [
      "./node_modules/babel-polyfill/dist/polyfill.js",
      "./node_modules/jquery/dist/jquery.min.js",
      "./node_modules/web-animations-js/web-animations.min.js",
      { pattern: './src/test.ts', watched: false },
    ],
    preprocessors: {
      './src/test.ts': ['@angular/cli']
    },
    mime: {
      'text/x-typescript': ['ts','tsx']
    },
    coverageIstanbulReporter: {
      reports: {
        html: 'coverage',
        lcovonly: './coverage/coverage.lcov'
      }
    },
    angularCli: {
      config: './angular-cli.json',
      environment: 'dev'
    },
    reporters: config.angularCli && config.angularCli.codeCoverage
              ? ['spec', 'coverage-istanbul']
              : ['spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false
  });
};
