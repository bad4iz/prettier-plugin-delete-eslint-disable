# prettier-plugin-delete-eslint-disable
Plugin for prettier. Which removes the eslint-disable rules when editing a file and many other useful things


[![](https://img.shields.io/npm/v/prettier-plugin-delete-eslint-disable.svg)](https://www.npmjs.com/package/prettier-plugin-delete-eslint-disable)
![](https://img.shields.io/npm/dt/prettier-plugin-delete-eslint-disable.svg)
![](https://img.shields.io/github/commit-activity/m/bad4iz/prettier-plugin-delete-eslint-disable.svg)
![](https://img.shields.io/github/last-commit/bad4iz/prettier-plugin-delete-eslint-disable.svg)
[![Wallaby.js](https://img.shields.io/badge/wallaby.js-configured-green.svg)](https://wallabyjs.com)

#### main-branch
![master test](https://github.com/bad4iz/prettier-plugin-delete-eslint-disable/actions/workflows/test.yml/badge.svg?branch=main)
#### develop-branch
![develop test](https://github.com/bad4iz/prettier-plugin-delete-eslint-disable/actions/workflows/test.yml/badge.svg?branch=develop)


[npm prettier-plugin-delete-eslint-disable](https://www.npmjs.com/package/prettier-plugin-delete-eslint-disable)


install 
`yarn`
```bash
yarn add -D prettier-plugin-delete-eslint-disable
```
or
`npm`
```bash
npmm install --save-dev prettier-plugin-delete-eslint-disable
```

## Deleting comments `/* eslint-disable */` in ours code
`.prettierrc`
```json
{
  //...,
  "deleteEslintDisable": true
}
```

not remove comment `/* eslint-disable */` with comment in ours file `// eslint-disable-remove-ignore`
```js
// eslint-disable-remove-ignore
/* eslint-disable */
```


## Local development
in prettier-plugin-delete-eslint-disable project
```bash
npm link
```

other project
```bash
npm link prettier-plugin-delete-eslint-disable
```

when ending development
other project
```bash
npm unlink prettier-plugin-delete-eslint-disable
```

## or use `yalc`
install
```bash
npm install -g yalc
```
or
```bash
yarn global add yalc
```

### in package use command
after the package is ready for verification, run...
```npm
npm run local:push
```
or 
```yarn
yarn local:push
```

### in our (target) project
add this script in yours `package.json` file
#### if you use `npm`
```
"link:prettier-plugin-delete-eslint-disable": "yalc add prettier-plugin-delete-eslint-disable && yalc link prettier-plugin-delete-eslint-disable && npm install"
```
and run

```npm 
npm run link:prettier-plugin-delete-eslint-disable
```
#### or if you use `yarn`
```
"link:prettier-plugin-delete-eslint-disable": "yalc add prettier-plugin-delete-eslint-disable && yalc link prettier-plugin-delete-eslint-disable && yarn"
```
```yarn 
yarn link:prettier-plugin-delete-eslint-disable
```

### Updating the .gitignore file
Both the .yalc directory and yalc.lock file that Yalc creates in the root of your Git repo are not intended to be committed to Git.

Therefore it’s probably best to add them to the .gitignore file:

```.gitignore
# Yalc
/.yalc
yalc.lock
```

### Removing Yalc packages (elegant way)
#### if you use `npm`
```
"unlink:prettier-plugin-delete-eslint-disable": "yalc remove prettier-plugin-delete-eslint-disable && npm install",
```

```npm
npm run unlink:prettier-plugin-delete-eslint-disable
```
#### or if you use `yarn`
```
"unlink:prettier-plugin-delete-eslint-disable": "yalc remove prettier-plugin-delete-eslint-disable && yarn"
```

```yarn
yarn unlink:prettier-plugin-delete-eslint-disable

