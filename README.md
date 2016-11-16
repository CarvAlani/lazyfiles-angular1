# lazyfiles-angular1

Generates Angular 1 files following Jhon Papa [styleguide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md "Jhon Papa styleguide"). Group by prefix if it is repeated more than 3 times.

## Install

``` npm install -g angular1-gen ```

## Usage:

``` a1gen <option1> <value1> ... <optionN> <valueN> ```

## Options

**New app:** -n, --new

**Module name:** -m, --module \[name\] (default name is 'app')

**New module:** -M, --new-module <name>

**New Service:** -s, --service <name>

**New Factory:** -F, --factory <name>

**New Filter:** -f, --filter <name>

**New Controller:** -c, --controller <name>

**New Directive:** -d, --directive <name>

**New Route file:** -R, --route-file <name>

**New Component:** -C, --component <name>

**New Provider:** -p, --provider <name>

## STRUCTURE
#### \[EXTRA SMALL APP\]
- index.html
- scripts
- app
  - app.module.js
  - app.config.js
  - data.service.js
  - content
    - css
    - fonts
    - images

#### \[OTHER APPS - more than 7 files\]
- index.html
- app
  - app.module.js
  - app.config.js
  - services
    - data.service.js
    - another.service.js
  - drawer1
    - drawer1.routes.js
    - drawer1.controller.js
    - drawer1.whatever.js
  - .
  - .
  - .
  - drawern
    - drawern.routes.js
    - drawern.controller.js
    - drawern.whatever.js
  - content
    - css
    - fonts
    - images

### CONVENTIONS
- 1 feature per file
- every file has its feature in its extention, i.e. posts.controller.js
