# prettier-plugin-delete-eslint-disable

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


Также работает сортировка импортов.   
Просто включите в своем файле настроек prettier `sortingImports`.
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
