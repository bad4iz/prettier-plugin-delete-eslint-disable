const { parsers: babelParsers } = require('prettier/parser-babel')
const { parsers: htmlParsers } = require('prettier/parser-html')
const { parsers: typescriptParsers } = require('prettier/parser-typescript')

const { organize } = require('./lib/organize')
const removeSting = require('./lib/removeSting')

/**
 * Organize the code's imports using the `wrapper` feature of the TypeScript language service API.
 *
 * @param {string} code
 * @param {import('prettier').ParserOptions} options
 */
const wrapperPreprocessHook = (code, options) => {
    try {
        return organize(removeSting(code, options), options)
    } catch (error) {
        if (process.env.DEBUG) {
            console.error(error)
        }

        return code
    }
}

/**
 * wrapperPreprocessHook as the given parser's `preprocess` hook.
 *
 * @param {import('prettier').Parser} parser prettier parser
 */
const withOrganizeImportsPreprocess = (parser) => {
    return {
        ...parser,
        /**
         * @param {string} code
         * @param {import('prettier').ParserOptions} options
         */
        preprocess: (code, options) =>
            wrapperPreprocessHook(
                parser.preprocess ? parser.preprocess(code, options) : code,
                options
            ),
    }
}

/**
 * @type {import('prettier').Plugin}
 */
const plugin = {
    options: {
        sortingImports: {
            type: 'boolean',
            default: false,
            category: 'OrganizeImports',
            description: '',
            since: '1.0.0',
        },
        deleteEslintDisable: {
            type: 'boolean',
            default: false,
            category: 'OrganizeImports',
            description: '',
            since: '1.0.0',
        },
    },
    parsers: {
        babel: withOrganizeImportsPreprocess(babelParsers.babel),
        'babel-ts': withOrganizeImportsPreprocess(babelParsers['babel-ts']),
        typescript: withOrganizeImportsPreprocess(typescriptParsers.typescript),
        vue: withOrganizeImportsPreprocess(htmlParsers.vue),
    },
}

module.exports = plugin
