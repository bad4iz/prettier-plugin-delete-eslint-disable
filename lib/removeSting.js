/**
 * Removing an unnecessary string from the code.
 *
 * @param {string} code
 * @param {import('prettier').ParserOptions} options
 * @returns {string}
 */
const removeSting = (code, { deleteEslintDisable }) => {
    if (!deleteEslintDisable) {
        return code
    }
    if (code.includes('// eslint-disable-remove-ignore')) {
        return code
    }

    return code.replaceAll(/\s*\/\*\s*eslint-disable\s*\*\/\s*/g, '')
}

module.exports = removeSting
