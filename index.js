#!/usr/bin/env node

var program = require('commander');
var fs      = require('fs');
var path    = require('path');
var templater = require('./templater.js');

// TODO: change commander, maybe even improve it
program
  .version('0.0.1')
  .option('-n, --new', 'New app')
  .option('-m, --module [name]', 'Module name', 'app')
  .option('-M, --new-module <name>', 'New module')
  .option('-s, --service <name>', 'New Service')
  .option('-F, --factory <name>', 'New Factory')
  .option('-f, --filter <name>', 'New Filter')
  .option('-c, --controller <name>', 'New Controller')
  .option('-d, --directive <name>', 'New Directive')
  .option('-r, --route <state> [templateUrl] [url] [controller]', 'New Route') // TODO
  .option('-R, --route-file <name>', 'New Route file')
  .option('-C, --component <name>', 'New Component')
  .option('-p, --provider <name>', 'New Provider')
  .parse(process.argv);

// New app
if (program.new) {
  console.log('Creating new app');
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

  fs.writeFile(path.join('app','app.module.js'), templater.module('app'), function (err) {
    if (err) return console.log(err);
    console.log('Created app.module.js');
  });

  fs.writeFile(path.join('app','app.config.js'), templater.generic('config', 'app', 'config'), function (err) {
    if (err) return console.log(err);
    console.log('Created app.config.js');
  });
}

// New Provider
if (program.provider) {
  console.log('Adding new provider ');
  var fname = program.provider + '.provider.js';
  fs.writeFile(path.join(program.module, fname), templater.generic(program.provider, program.module, 'provider'), function (err) {
    if (err) return console.log(err);
    console.log('Created ' + fname);
  });
}

// New Service
if (program.service) {
  console.log('Adding new service ');
  var fname = program.service + '.service.js';
  fs.writeFile(path.join(program.module, fname), templater.generic(program.service, program.module, 'service'), function (err) {
    if (err) return console.log(err);
    console.log('Created ' + fname);
  });
}

// New Factory
if (program.factory) {
  console.log('Adding new factory ');
  var fname = program.factory + '.factory.js';
  fs.writeFile(path.join(program.module, fname), templater.generic(program.factory, program.module, 'factory'), function (err) {
    if (err) return console.log(err);
    console.log('Created ' + fname);
  });
}

// New Filter
if (program.filter) {
  console.log('Adding new filter ');
  var fname = program.filter + '.filter.js';
  fs.writeFile(path.join(program.module, fname), templater.generic(program.filter, program.module, 'filter'), function (err) {
    if (err) return console.log(err);
    console.log('Created ' + fname);
  });
}

// New Controller
if (program.controller) {
  console.log('Adding new controller ');
  var fname = program.controller + '.controller.js';
  fs.writeFile(path.join(program.module, fname), templater.generic(program.controller, program.module, 'controller'), function (err) {
    if (err) return console.log(err);
    console.log('Created ' + fname);
  });
}

// New Directive
if (program.directive) {
  console.log('Adding new directive ');
  var fname = program.directive + '.directive.js';
  var tname = program.directive + '.directive.html';
  fs.writeFile(path.join(program.module, fname), templater.generic(program.directive, program.module, 'directive'), function (err) {
    if (err) return console.log(err);
    console.log('Created ' + fname);
  });

  fs.writeFile(path.join(program.module, tname), '', function (err) {
    if (err) return console.log(err);
    console.log('Created ' + tname);
  });
}

// New Component
if (program.component) {
  console.log('Adding new component ');
  var fname = program.component + '.component.js';
  var tname = program.directive + '.component.html';
  fs.writeFile(path.join(program.module, fname), templater.generic(program.component, program.module, 'component'), function (err) {
    if (err) return console.log(err);
    console.log('Created ' + fname);
  });

  fs.writeFile(path.join(program.module, tname), '', function (err) {
    if (err) return console.log(err);
    console.log('Created ' + tname);
  });
}

// New Routes file
if (program.routeFile) {
  console.log('Adding new route file ');
  var fname = program.routeFile + '.route.js';
  fs.writeFile(path.join(program.module, fname), templater.generic(program.routeFile, program.module, 'route'), function (err) {
    if (err) return console.log(err);
    console.log('Created ' + fname);
  });
}

// New Module
if (program.newModule) {
  console.log('Adding new module ');
  var fname = program.newModule + '.module.js';
  fs.writeFile(path.join(program.module, fname), templater.module(program.newModule), function (err) {
    if (err) return console.log(err);
    console.log('Created ' + fname);
  });
}

// TODO: New Route
if (program.route) {
  // console.log('state: ', program.route);
  // console.log(program.args);
}

// TODO: group in folders by prefix
// TODO: check if exists first and ask if user wants to overwrite
