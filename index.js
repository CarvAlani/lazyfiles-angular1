#!/usr/bin/env node

var program = require('commander');
var fs      = require('fs');
var path    = require('path');
var templater = require('./templater.js');

program
  .version('0.0.1')
  .option('-n, --new', 'New project')
  .option('-m, --module [name]', 'Module name', 'app')
  .option('-M, --new-module <name>', 'New module') // TODO
  .option('-s, --service <name>', 'New Service')
  .option('-f, --factory <name>', 'New Factory') // TODO
  .option('-fi, --filter <name>', 'New Filter') // TODO
  .option('-c, --controller <name>', 'New Controller') // TODO
  .option('-d, --directive <name>', 'New Directive') // TODO
  .option('-r, --router <name>', 'New Route') // TODO
  .option('-cp, --component <name>', 'New Component') // TODO
  .option('-p, --partial <name>', 'New Partial') // TODO
  .parse(process.argv);

if (program.new) {
  console.log('Creating New Project');
  console.log('Creating files structure');

  if (!fs.existsSync('scripts')){
    fs.mkdirSync('scripts');
  }

  if (!fs.existsSync('app')){
    fs.mkdirSync('app');
  }

  if (!fs.existsSync(path.join('app', 'content'))){
    fs.mkdirSync(path.join('app', 'content'));
  }

  if (!fs.existsSync(path.join('app', 'content', 'css'))){
    fs.mkdirSync(path.join('app', 'content', 'css'));
  }

  if (!fs.existsSync(path.join('app', 'content', 'img'))){
    fs.mkdirSync(path.join('app', 'content', 'img'));
  }

  if (!fs.existsSync(path.join('app', 'content', 'fonts'))){
    fs.mkdirSync(path.join('app', 'content', 'fonts'));
  }

  fs.writeFile('index.html', templater.html(), function (err) {
    if (err) return console.log(err);
    console.log('Created index.html');
  });

  fs.writeFile('gulpfile.js', templater.gulpfile(), function (err) {
    if (err) return console.log(err);
    console.log('Created gulpfile.js');
  });

  fs.writeFile(path.join('app','app.module.js'), templater.module('app', 'app'), function (err) {
    if (err) return console.log(err);
    console.log('Created app.module.js');
  });

  fs.writeFile(path.join('app','app.config.js'), templater.config('app', 'app'), function (err) {
    if (err) return console.log(err);
    console.log('Created app.config.js');
  });
}

if (program.service) {
  console.log('Adding new service ');
  var fname = program.service + '.service.js';
  fs.writeFile(path.join(program.module, fname), templater.service(program.service, program.module), function (err) {
    if (err) return console.log(err);
    console.log('Created ' + fname);
  });
}

// TODO: group in folders by prefix
