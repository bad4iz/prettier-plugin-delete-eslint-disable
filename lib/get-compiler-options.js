const { dirname } = require('path')
const ts = require('typescript')
const { findTsconfig } = require('./find-tsconfig')
const { memoize } = require('./memoize')

/**
 * Get the compiler options from the path to a tsconfig.
 *
 * @param {string | undefined} tsconfig path to tsconfig
 */
function getCompilerOptions(tsconfig) {
    const compilerOptions = tsconfig
        ? ts.parseJsonConfigFileContent(
              ts.readConfigFile(tsconfig, ts.sys.readFile).config,
              ts.sys,
              dirname(tsconfig)
          ).options
        : ts.getDefaultCompilerOptions()

    compilerOptions.allowJs = true // for automatic JS support

    return compilerOptions
}

module.exports.getCompilerOptions = memoize(getCompilerOptions)
