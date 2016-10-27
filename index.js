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
  .option('-f, --factory <name>', 'New Factory')
  .option('-fi, --filter <name>', 'New Filter') // TODO
  .option('-c, --controller <name>', 'New Controller')
  .option('-d, --directive <name>', 'New Directive') // TODO
  .option('-r, --route <state> [templateUrl] [url] [controller]', 'New Route') // TODO
  .option('-rf, --route-file <name>', 'New Route file') // TODO
  .option('-cp, --component <name>', 'New Component') // TODO
  .option('-p, --partial <name>', 'New Partial') // TODO
  .parse(process.argv);

// New project
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

// New Service
if (program.service) {
  console.log('Adding new service ');
  var fname = program.service + '.service.js';
  fs.writeFile(path.join(program.module, fname), templater.service(program.service, program.module), function (err) {
    if (err) return console.log(err);
    console.log('Created ' + fname);
  });
}

// New Factory
if (program.factory) {
  console.log('Adding new factory ');
  var fname = program.factory + '.factory.js';
  fs.writeFile(path.join(program.module, fname), templater.factory(program.factory, program.module), function (err) {
    if (err) return console.log(err);
    console.log('Created ' + fname);
  });
}

// TODO: New Filter

// New Controller
if (program.controller) {
  console.log('Adding new controller ');
  var fname = program.controller + '.controller.js';
  fs.writeFile(path.join(program.module, fname), templater.controller(program.controller, program.module), function (err) {
    if (err) return console.log(err);
    console.log('Created ' + fname);
  });
}

// TODO: New Directive

// TODO: New Component

// TODO: New Partial

// TODO: New Route
if (program.route) {
  // console.log('state: ', program.route);
  // console.log(program.args);
}

// TODO: New Routes file

// TODO: New Module

// TODO: group in folders by prefix
// TODO: check if exists first and ask if user wants to overwrite
