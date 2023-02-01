const { sep, posix } = require('path')
const { applyTextChanges } = require('./apply-text-changes')
const { getLanguageService } = require('./get-language-service')

/**
 * Organize the given code's imports.
 *
 * @param {string} code
 * @param {import('prettier').ParserOptions} options
 */
module.exports.organize = (
    code,
    { filepath = 'file.ts', sortingImports, parentParser, parser }
) => {
    if (code.includes('// sorting-imports-ignore')) {
        return code
    }

    if (sep !== posix.sep) {
        filepath = filepath.split(sep).join(posix.sep)
    }

    const languageService = getLanguageService(parser, filepath, code)

    const fileChanges = languageService.organizeImports(
        {
            type: 'file',
            fileName: filepath,
            skipDestructiveCodeActions: sortingImports,
        },
        {},
        {}
    )[0]

    return fileChanges ? applyTextChanges(code, fileChanges.textChanges) : code
}
