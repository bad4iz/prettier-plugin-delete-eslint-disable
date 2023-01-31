const { format } = require('prettier')

/**
 * @param {string} code
 * @param {prettier.Options} [options]
 */
const prettify = (code, options) =>
    format(code, { plugins: ['.'], filepath: 'file.ts' })

describe('file main.spec', () => {
    it('should ', () => {
        expect.hasAssertions()
        // Arrange (всякие моки)

        // Act
        const res = prettify(`
        /* eslint-disable */
        lodash ( )`)
        // Assert
        expect(res).toMatchSnapshot()
    })
})
