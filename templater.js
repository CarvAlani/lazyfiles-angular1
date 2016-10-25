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

templater.module = function (prefix, mod) {
  var name = prefix + '.module.js';

  return '// ' + name + '\n' +
    '(function() {\n' +
    '\'use strict\';\n' +
    'angular\n' +
    '  .module(\'' + prefix + '\', []);' +
    '})();';
};

templater.config = function (prefix, mod) {
  var name = prefix + '.config.js';

  return '// ' + name + '\n' +
    '(function() {\n' +
    '\'use strict\';\n' +
    'angular\n' +
    '  .module(\'' + mod + '\')' +
    '  .config(config);\n\n' +
    'function config() {};\n' +
    '})();';
};

templater.service = function (prefix, mod) {
  var name = prefix + '.service.js';

  return '// ' + name + '\n' +
    '(function() {\n' +
    '\'use strict\';\n' +
    'angular\n' +
    '  .module(\'' + mod + '\')' +
    '  .service(\''+ prefix +'\', ' + prefix + ');\n\n' +
    'function ' + prefix + '() {};\n' +
    '})();';
};

module.exports = templater;
