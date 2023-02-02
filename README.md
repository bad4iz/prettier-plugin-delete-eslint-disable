# prettier-plugin-delete-eslint-disable
Plugin for prettier. Which removes the eslint-disable rules when editing a file and many other useful things


![](https://travis-ci.com/bad4iz/prettier-plugin-delete-eslint-disable.svg?branch=main)
![](https://img.shields.io/npm/v/prettier-plugin-delete-eslint-disable.svg)
![](https://img.shields.io/npm/dt/prettier-plugin-delete-eslint-disable.svg)

![](https://img.shields.io/github/commit-activity/m/bad4iz/prettier-plugin-delete-eslint-disable.svg)
![](https://img.shields.io/github/last-commit/bad4iz/prettier-plugin-delete-eslint-disable.svg)


[![Wallaby.js](https://img.shields.io/badge/wallaby.js-powered-blue.svg?style=for-the-badge&logo=github)](https://wallabyjs.com/oss/)

[npm prettier-plugin-delete-eslint-disable](https://www.npmjs.com/package/prettier-plugin-delete-eslint-disable)



[npm package](https://www.npmjs.com/package/prettier-plugin-delete-eslint-disable) 

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


Import sorting also works.
Just include prettier in your settings file prettier `sortingImports`.  
`.prettierrc`
```json
{
   //...,
  "sortingImports": true
}
```
not sorting ours imports with comment in ours file `// eslint-sorting-imports-ignore`


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
