const { getTypeScriptLanguageServiceHost } = require('./service-host')

/**
 * Get the correct language service for the given parser.
 *
 * @param {import('prettier').ParserOptions['parser']} parser
 * @param {string} filepath
 * @param {string} code
 *
 * @returns {ts.LanguageService}
 */
const getLanguageService = (parser, filepath, code) => {
    return require('typescript').createLanguageService(
        getTypeScriptLanguageServiceHost(filepath, code)
    )
}

module.exports = { getLanguageService }
