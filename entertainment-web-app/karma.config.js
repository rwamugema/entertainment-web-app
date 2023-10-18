module.exports = function(config) {
    config.set({
      frameworks: ['jasmine'],
      browsers: ['Chrome'],
      files: [
        // Add your test files here
      ],
      preprocessors: {
        // Include the tests for coverage
        '**/*.ts': ['coverage'],
      },
      plugins: [
        'karma-jasmine',
        'karma-chrome-launcher',
        'karma-coverage',
      ],
      reporters: ['progress', 'coverage'],
      coverageReporter: {
        dir: require('path').join(__dirname, 'coverage'),
        reports: ['html', 'lcovonly', 'text-summary'],
      },
    });
  };
  