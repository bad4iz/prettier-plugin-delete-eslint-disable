const { parsers: babelParsers } = require('prettier/parser-babel')
const { parsers: htmlParsers } = require('prettier/parser-html')
const { parsers: typescriptParsers } = require('prettier/parser-typescript')

/**
 * Organize the code's imports using the `organizeImports` feature of the TypeScript language service API.
 *
 * @param {string} code
 * @param {import('prettier').ParserOptions} options
 */
const organizeImports = (code, options) => {
    if (
        code.includes('// organize-imports-ignore') ||
        code.includes('// tslint:disable:ordered-imports')
    ) {
    }
    const newCode = code.replaceAll('/* eslint-disable */\n', '')
    console.log('------------\n')
    console.log(newCode)
    console.log('--------\n\n')
    return newCode
    // try {
    //     return organize(code, options);
    // } catch (error) {
    //     if (process.env.DEBUG) {
    //         console.error(error);
    //     }
    //
    //     return code;
    // }
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
            organizeImports(
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
        organizeImportsSkipDestructiveCodeActions: {
            type: 'boolean',
            default: true,
            category: 'OrganizeImports',
            description:
                'Skip destructive code actions like removing unused imports.',
            since: '2.0.0',
        },
    },
    parsers: {
        babel: withOrganizeImportsPreprocess(babelParsers.babel),
        // 'babel-ts': withOrganizeImportsPreprocess(babelParsers['babel-ts']),
        // typescript: withOrganizeImportsPreprocess(typescriptParsers.typescript),
        // vue: withOrganizeImportsPreprocess(htmlParsers.vue),
    },
    languages: [
        {
            // The language name
            name: 'removeEslintDisable',
            // Parsers that can parse this language.
            // This can be built-in parsers, or parsers you have contributed via this plugin.
            parsers: ['removeEslintDisable-parse'],
        },
    ],
}

module.exports = plugin
