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
        sortingImports: true,
    })

describe('file odh.spec', () => {
    it.only('should ', () => {
        expect.hasAssertions()
        // Arrange (всякие моки)

        // Act
        const res = prettify(`
import {
  CREATE_TYPE_NAME,
  CreateTypeRF,
  IsDiffHeightMarkRF,
  NumberFieldRF,
} from 'core/form/reduxForm/fields';
`)
        // Assert
        expect(res).toMatchSnapshot()
        expect(res).toBe(
            'import {\n' +
                '  CREATE_TYPE_NAME,\n' +
                '  CreateTypeRF,\n' +
                '  IsDiffHeightMarkRF,\n' +
                '  NumberFieldRF,\n' +
                '} from "core/form/reduxForm/fields";\n'
        )
    })
})
