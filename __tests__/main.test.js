const { format } = require('prettier')

/**
 * @param {string} code
 * @param {prettier.Options} [options]
 */
const prettify = (code, options) =>
    format(code, {
        plugins: ['.'],
        filepath: 'file.ts',
        deleteEslintDisable: true,
    })

describe('file main.spec', () => {
    it('should ', () => {
        expect.hasAssertions()
        // Arrange (всякие моки)

        // Act
        const res = prettify(`
        /* eslint-disable */
       function
        lodash ( )    {const a = 9}`)
        // Assert
        expect(res).toMatchSnapshot()
    })
    it('несколько пробелов', () => {
        expect.hasAssertions()
        // Arrange (всякие моки)

        // Act
        const res = prettify(`
        /*  eslint-disable  */
       function
        lodash ( )    {const a = 9}`)

        // Assert
        expect(res).toBe(`function lodash() {
  const a = 9;
}
`)
    })
})
