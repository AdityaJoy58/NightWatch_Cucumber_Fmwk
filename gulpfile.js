'use strict';

const gulp = require('gulp');
const nightwatch = require('nightwatch');
const cucumber = require('cucumber');
const child_process = require('child_process');
const path = require('path');

//-------------------------------------
// Tests
//-------------------------------------
//Nightwatch as Runner
gulp.task('nightwatch', function (cb) {
  child_process.spawn(path.resolve('./node_modules/.bin/nightwatch.cmd'),[],{
    stdio: 'inherit'
  }).once('close',cb);
})

//Cucumber as Runner
gulp.task('cucumber', function (cb) {
  child_process.spawn(path.resolve('./node_modules/.bin/cucumber.js.cmd'),['./'],{
    stdio: 'inherit'
  }).once('close',cb);
})
gulp.task('e2e-nightwatch', ['nightwatch'])

gulp.task('e2e-cucumber', ['cucumber'])

gulp.on('stop', () => {
  process.nextTick(() => {
    process.exit(0);
  });
});
