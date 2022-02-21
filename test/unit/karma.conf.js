module.exports = function(config) {
  const configuration = {
    browsers: ['ChromeHeadless'],
    frameworks: ['mocha', 'sinon-chai'],
    reporters: ['spec'],
    files: ['./index.js'],
    preprocessors: {
      './index.js': ['webpack', 'sourcemap']
    },
    webpackMiddleware: {
      noInfo: true
    },
    client: {
      mocha: {
        timeout: 4000
      }
    }
  };

  config.set(configuration);
};
