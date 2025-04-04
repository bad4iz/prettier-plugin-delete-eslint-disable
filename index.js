const removeSting = require('./lib/removeSting')

/**
 * @type {import('prettier').Plugin<import('prettier').ParserOptions>}
 */
const plugin = {
    options: {
        deleteEslintDisable: {
            type: 'boolean',
            default: false,
            category: 'Eslint',
            description: 'Remove eslint-disable comments',
            since: '1.0.0',
        },
    },
    parsers: {
        babel: {
            parse: (text, parsers, options) => {
                const code = removeSting(text, options)
                return require('prettier/parser-babel').parsers.babel.parse(
                    code,
                    parsers,
                    options
                )
            },
            astFormat: 'babel',
        },
        'babel-ts': {
            parse: (text, parsers, options) => {
                const code = removeSting(text, options)
                return require('prettier/parser-babel').parsers[
                    'babel-ts'
                ].parse(code, parsers, options)
            },
            astFormat: 'babel-ts',
        },
        typescript: {
            parse: (text, parsers, options) => {
                const code = removeSting(text, options)
                return require('prettier/parser-typescript').parsers.typescript.parse(
                    code,
                    parsers,
                    options
                )
            },
            astFormat: 'typescript',
        },
    },
}

module.exports = plugin
