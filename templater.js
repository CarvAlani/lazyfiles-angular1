var templater = {};

templater.html = function (title) {
  title = title || '';
  return '<!doctype html>\n'+
  '<html>\n'+
  '<head>\n'+
  '  <meta charset="utf-8">\n'+
  '  <title>'+title+'</title>\n'+
  '  <meta name="" content="">\n'+
  '  <meta name="" content="">\n'+
  '  <link rel="stylesheet" href="">\n'+
  '  <!--[if lt IE 9]>\n'+
  '    <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>\n'+
  '  <![endif]-->\n'+
  '</head>\n'+
  '<body>\n'+
  '  <script src=""></script>\n'+
  '</body>\n'+
  '</html>\n';
};

templater.gulpfile = function () {

  return '';
};

templater.module = function (prefix) {
  var name = prefix + '.module.js';

  return '// ' + name + '\n' +
    '(function() {\n' +
    '\'use strict\';\n' +
    'angular\n' +
    '  .module(\'' + prefix + '\', []);\n' +
    '})();';
};

templater.generic = function (prefix, mod, type) {
  var name = prefix + '.' + type + '.js';
  if (type === 'controller') {
    var cname = prefix[0].toUpperCase() + prefix.substr(1) + 'Controller';
  } else if (type === 'directive' || type === 'component') {
    var cname = toCamelCase(prefix);
  } else {
    var cname = prefix;
  }

  return '// ' + name + '\n' +
    '(function() {\n' +
    '\'use strict\';\n' +
    'angular\n' +
    '  .module(\'' + mod + '\')\n' +
    '  .'+ type +'(\''+ cname +'\', ' + cname + ');\n\n' +
    'function ' + cname + '() {};\n' +
    '})();';
}

function toCamelCase(word) {
  var name = '';
  var splited = word.split('-');
  name += splited[0];
  for (var i = 1; i < splited.length; i++) {
    name += splited[i][0].toUpperCase() + splited[i].substr(1);
  }

  return name;
}

module.exports = templater;
