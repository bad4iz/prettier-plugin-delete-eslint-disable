const { parsers: babelParsers } = require('prettier/parser-babel')
const { parsers: htmlParsers } = require('prettier/parser-html')
const { parsers: typescriptParsers } = require('prettier/parser-typescript')

/**
 * Organize the code's imports using the `organizeImports` feature of the TypeScript language service API.
 *
 * @param {string} code
 * @param {import('prettier').ParserOptions} options
 */
const deleteEslintDisable = (code, options) => {



    try {
        return code.replaceAll('/* eslint-disable */\n', '')
    } catch (error) {
        if (process.env.DEBUG) {
            console.error(error);
        }

        return code;
    }
}

/**
 * Set `organizeImports` as the given parser's `preprocess` hook, or merge it with the existing one.
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
          deleteEslintDisable(
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
        deleteEslintDisable: {
            type: 'boolean',
            default: false,
            category: 'Comments',
            description:
                'Skip destructive code actions like removing unused imports.',
            since: '2.0.0',
        },
    },
    parsers: {
        babel: withOrganizeImportsPreprocess(babelParsers.babel),
        'babel-ts': withOrganizeImportsPreprocess(babelParsers['babel-ts']),
        typescript: withOrganizeImportsPreprocess(typescriptParsers.typescript),
        // vue: withOrganizeImportsPreprocess(htmlParsers.vue),
    },

}

module.exports = plugin
