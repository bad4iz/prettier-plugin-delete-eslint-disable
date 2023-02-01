const parserBabel = require('prettier/parser-babel.js')

const {
    doc: {
        builders: { concat, hardline, group, indent, line, join, softline },
    },
    format,
} = require('prettier')

const languages = [
    {
        name: 'removeEslintDisable',
        parsers: ['removeEslintDisable-parse'],
    },
]

const parsers = {
    'removeEslintDisable-parse': {
        parse: (text) => {
            console.log(text)
            const ast = parserBabel.parsers.babel.parse(text)
            ast.program.body[0].expression.callee.name = '_'
            return ast
        },
        astFormat: 'removeEslintDisable-ast',
    },
}

function printToml(path, options, print) {
    const node = path.getValue()

    console.log(node.type)
    if (Array.isArray(node)) {
        return concat(path.map(print))
    }
    switch (node.type) {
        case 'Assign':
            return concat([
                node.key,
                ' = ',
                path.call(print, 'value'),
                hardline,
            ])
        case 'String':
            return concat(['"', node.value, '"'])
        case 'Boolean':
            return node.value.toString()
        case 'Integer':
            return node.value.toString()
        case 'Date':
            return node.value.toISOString()
        case 'ObjectPath':
            return concat(['[', node.value.join('.'), ']', hardline])
        case 'Array':
            return group(
                concat([
                    '[',
                    indent(
                        concat([
                            softline,
                            join(concat([',', line]), path.map(print, 'value')),
                        ])
                    ),
                    softline,
                    ']',
                ])
            )
        default:
            return ''
    }
}

const printers = {
    'removeEslintDisable-ast': {
        print: printToml,
    },
}

function printComment(
    // Path to the current comment node
    commentPath,
    // Current options
    options
) {
    console.log(commentPath)
}

function getCommentChildNodes(
    // Path to the current comment node
    node,
    // Current options
    options
) {
    console.log(node)
}
module.exports = {
    languages,
    parsers,
    printers,
    printComment,
    getCommentChildNodes,
}
