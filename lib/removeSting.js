/**
 * Removing an unnecessary string from the code.
 *
 * @param {string} code
 * @param {import('prettier').ParserOptions} options
 * @param {boolean} options.deleteEslintDisable
 * @returns {string}
 */
const removeSting = (code, { deleteEslintDisable }) => {
    if (!deleteEslintDisable) {
        return code
    }
    if (code.includes('// eslint-disable-remove-ignore')) {
        return code
    }
    return code.replaceAll('/* eslint-disable */', '')
}

module.exports = removeSting
