const { parsers: babelParsers } = require("prettier/parser-babel");
const { parsers: htmlParsers } = require("prettier/parser-html");
const { parsers: typescriptParsers } = require("prettier/parser-typescript");

const {
  organize,
} = require("../../learning/Дичь/prettier-plugin-organize-imports/lib/organize");

/**
 * Organize the code's imports using the `organizeImports` feature of the TypeScript language service API.
 *
 * @param {string} code
 * @param {import('../../learning/Дичь/prettier-plugin-organize-imports/prettier').ParserOptions} options
 */
const organizeImports = (code, options) => {
  if (
    code.includes("// organize-imports-ignore") ||
    code.includes("// tslint:disable:ordered-imports")
  ) {
    return code;
  }

  try {
    return organize(code.replaceAll("/* eslint-disable */", ""), options);
  } catch (error) {
    if (process.env.DEBUG) {
      console.error(error);
    }

    return code;
  }
};

/**
 * Set `organizeImports` as the given parser's `preprocess` hook, or merge it with the existing one.
 *
 * @param {import('../../learning/Дичь/prettier-plugin-organize-imports/prettier').Parser} parser prettier parser
 */
const withOrganizeImportsPreprocess = (parser) => {
  return {
    ...parser,
    /**
     * @param {string} code
     * @param {import('../../learning/Дичь/prettier-plugin-organize-imports/prettier').ParserOptions} options
     */
    preprocess: (code, options) =>
      organizeImports(
        parser.preprocess ? parser.preprocess(code, options) : code,
        options
      ),
  };
};

/**
 * @type {import('../../learning/Дичь/prettier-plugin-organize-imports/prettier').Plugin}
 */
const plugin = {
  options: {
    organizeImportsSkipDestructiveCodeActions: {
      type: "boolean",
      default: false,
      category: "OrganizeImports",
      description:
        "Skip destructive code actions like removing unused imports.",
      since: "2.0.0",
    },
  },
  parsers: {
    babel: withOrganizeImportsPreprocess(babelParsers.babel),
    "babel-ts": withOrganizeImportsPreprocess(babelParsers["babel-ts"]),
    typescript: withOrganizeImportsPreprocess(typescriptParsers.typescript),
    vue: withOrganizeImportsPreprocess(htmlParsers.vue),
  },
};

module.exports = plugin;
