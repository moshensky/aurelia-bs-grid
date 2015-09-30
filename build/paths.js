var path = require('path');

var appRoot = 'src/';

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  css: appRoot + '**/*.css',
  less: appRoot + '**/*.less',
  jade: appRoot + '**/*.jade',
  style: appRoot + '**/*.css',
  output: 'dist/',
  doc:'./doc',
  e2eSpecsSrc: 'test/e2e/src/*.js',
  e2eSpecsDist: 'test/e2e/dist/',
  demo: '../aurelia-grid/jspm_packages/github/charlespockert/aurelia-bs-grid@master/',
  bsGridPath: '../global_test/src/frontend/jspm_packages/github/moshensky/aurelia-bs-grid@0.2.0'
};
