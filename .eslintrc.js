'use strict';

/* eslint-env commonjs */

// The list of all Eslint's rules can be found here:
//    http://eslint.org/docs/rules/

module.exports = {
    'env': {
        'es6': true,
        'browser': true,
        'commonjs': true
    },

    'plugins': ['react'],

    // The "false" value specifies that these global variables should never
    // be written to (only read).
    //
    'globals': {
        'process': false,
        '__dirname': false
    },

    'parser': 'babel-eslint',
    'parserOptions': {
        'sourceType': 'module'
    },

    // Uncomment this to add a lot of React validation rules.
    // "extends": ["eslint:recommended", "plugin:react/recommended"],

    'rules': {
        // Possible Errors
        // ---------------
        // Disallow assignment operators in conditional expressions.
        'no-cond-assign': 'error',
        // Disallow the use of console.
        'no-console': 'warn',
        // Disallow constant expressions in conditions.
        'no-constant-condition': 'off',
        // Disallow control characters in regular expressions.
        'no-control-regex': 'error',
        // Disallow the use of debugger.
        'no-debugger': 'warn',
        // Disallow duplicate arguments in function definitions.
        'no-dupe-args': 'error',
        // Disallow duplicate keys in object literals.
        'no-dupe-keys': 'error',
        // Disallow duplicate case labels.
        'no-duplicate-case': 'error',
        // Disallow empty character classes in regular expressions.
        'no-empty-character-class': 'error',
        // Disallow empty block statements.
        'no-empty': 'warn',
        // Disallow reassigning exceptions in catch clauses.
        'no-ex-assign': 'error',
        // Disallow unnecessary boolean casts.
        'no-extra-boolean-cast': 'error',
        // Disallow unnecessary parentheses.
        'no-extra-parens': 'off',
        // Disallow unnecessary semicolons.
        'no-extra-semi': 'error',
        // Disallow reassigning function declarations.
        'no-func-assign': 'error',
        // Disallow function or var declarations in nested blocks.
        'no-inner-declarations': 'error',
        // Disallow invalid regular expression strings in RegExp constructors.
        'no-invalid-regexp': 'error',
        // Disallow irregular whitespace outside of strings and comments.
        'no-irregular-whitespace': 'error',
        // Disallow calling global object properties as functions.
        'no-obj-calls': 'error',
        // Disallow use of Object.prototypes builtins directly.
        'no-prototype-builtins': 'error',
        // Disallow multiple spaces in regular expression literals.
        'no-regex-spaces': 'error',
        // Disallow sparse arrays
        'no-sparse-arrays': 'error',
        // Disallow template literal placeholder syntax in regular strings.
        'no-template-curly-in-string': 'off',
        // Disallow confusing multiline expressions.
        'no-unexpected-multiline': 'error',
        // Disallow unreachable code after return, throw, continue, and break
        // statements.
        'no-unreachable': 'warn',
        // Disallow control flow statements in finally blocks.
        'no-unsafe-finally': 'error',
        // Disallow negating the left operand of relational operators.
        'no-unsafe-negation': 'error',
        // Require calls to isNaN() when checking for NaN.
        'use-isnan': 'error',
        // enforce valid JSDoc comments.
        'valid-jsdoc': 'off',
        // Enforce comparing typeof expressions against valid strings.
        'valid-typeof': 'error',

        // Best Practices
        // --------------
        // Enforce consistent brace style for all control statements.
        'curly': 'error',
        // Enforce dot notation whenever possible.
        'dot-notation': 'warn',
        // Disallow the use of alert, confirm, and prompt.
        'no-alert': 'warn',
        // Disallow lexical declarations in case clauses.
        'no-case-declarations': 'off',
        // Disallow empty functions.
        'no-empty-function': 'warn',
        // Disallow fallthrough of case statements.
        'no-fallthrough': 'error',
        // Disallow leading or trailing decimal points in numeric literals.
        'no-floating-decimal': 'warn',
        // Disallow assignments to native objects or read-only global
        // variables.
        'no-global-assign': 'error',
        // Disallow function declarations and expressions inside loop
        // statements.
        'no-loop-func': 'error',
        // Disallow multiple spaces.
        'no-multi-spaces': 'warn',
        // Disallow multiline strings.
        'no-multi-str': 'error',
        // Disallow variable redeclaration.
        'no-redeclare': 'warn',
        // Disallow assignment operators in return statements.
        'no-return-assign': 'error',
        // Disallow unmodified loop conditions.
        'no-unmodified-loop-condition': 'error',
        // Disallow assignments where both sides are exactly the same.
        'no-self-assign': 'error',
        // Require or disallow "Yoda" conditions.
        'yoda': 'error',
        // Warn about FIXME markers in code.
        'no-warning-comments': ['warn', {'terms': ['fixme'], 'location': 'anywhere'}],

        // Strict Mode
        // -----------
        'strict': ['error', 'global'],

        // Variables
        // ---------
        // Disallow catch clause parameters from shadowing variables in the
        // outer scope.
        'no-catch-shadow': 'error',
        // Disallow deleting variables.
        'no-delete-var': 'error',
        // Disallow labels that share a name with a variable.
        'no-label-var': 'error',
        // Disallow identifiers from shadowing restricted names.
        'no-shadow-restricted-names': 'error',
        // Disallow var declarations from shadowing variables in the outer
        // scope.
        'no-shadow': ['error', {'allow': ['error']}],
        // Disallow initializing variables to undefined.
        'no-undef-init': 'error',
        // Disallow the use of undeclared variables unless mentioned in
        // globals.
        'no-undef': 'error',
        // Disallow the use of undefined as an identifier.
        'no-undefined': 'off',
        // Disallow unused variables.
        'no-unused-vars': 'warn',
        // Disallow the use of variables before they are defined.
        'no-use-before-define': 'error',

        // Stylistic Issues
        // ----------------
        // Enforce consistent spacing inside single-line blocks.
        'block-spacing': 'warn',
        // Enforce consistent brace style for blocks.
        'brace-style': ['error', '1tbs', {'allowSingleLine': true}],
        // Warn about camelCase.
        'camelcase': ['warn', {'properties': 'never'}],
        // Require or disallow trailing commas.
        'comma-dangle': ['warn', 'never'],
        // Enforce consistent spacing before and after commas.
        'comma-spacing': ['error', {'before': false, 'after': true}],
        // Enforce consistent comma style.
        'comma-style': ['error', 'last'],
        // Enforce consistent spacing inside computed property brackets.
        'computed-property-spacing': ['error', 'never'],
        // Enforce at least one newline at the end of files.
        'eol-last': 'error',
        // Disallow spacing between function identifiers and their invocations.
        'func-call-spacing': ['error', 'never'],
        // Enforce the consistent use of either function declarations or
        // expressions.
        'func-style': ['error', 'expression'],
        // Enforce consistent indentation.
        'indent': ['warn', 4, {'SwitchCase': 1}],
        // Enforce consistent spacing between keys and values in object literal
        // properties.
        'key-spacing': 'warn',
        // Enforce consistent spacing before and after keywords.
        'keyword-spacing': 'error',
        // Require empty lines around comments.
        'lines-around-comment': 'warn',
        // Enforce a maximum line length
        'max-len': ['warn', 79],
        // Require or disallow an empty line after var declarations.
        'newline-after-var': ['warn', 'always'],
        // Require an empty line before return statements.
        'newline-before-return': 'warn',
        // Disallow mixed spaces and tabs for indentation.
        'no-mixed-spaces-and-tabs': 'error',
        // Disallow multiple empty lines.
        'no-multiple-empty-lines': 'warn',
        // Disallow trailing whitespace at the end of lines.
        'no-trailing-spaces': 'warn',
        // Disallow whitespace before properties.
        'no-whitespace-before-property': 'error',
        // Enforce the consistent use of single quotes.
        'quotes': ['warn', 'single'],
        // Enforce consistent spacing before and after semicolons.
        'semi-spacing': 'error',
        // Enforce consistent spacing before blocks.
        'space-before-blocks': 'error',
        // Enforce consistent spacing before function definition opening
        // parenthesis.
        'space-before-function-paren': ['error', 'never'],
        // Enforce consistent spacing inside parentheses.
        'space-in-parens': ['warn', 'never'],
        // Require spacing around operators.
        'space-infix-ops': 'warn',
        // Enforce consistent spacing after the // or /* in a comment.
        'spaced-comment': ['warn', 'always'],

        // ECMAScript 6
        // ------------
        // Require parentheses around arrow function arguments.
        'arrow-parens': ['warn', 'as-needed'],
        // Enforce consistent spacing before and after the arrow in arrow
        // functions.
        'arrow-spacing': 'warn',
        // Require super() calls in constructors.
        'constructor-super': "error",
        // Enforce consistent spacing around * operators in generator
        // functions.
        'generator-star-spacing': ['error', {'before': false, 'after': true}],
        // Disallow arrow functions where they could be confused with
        // comparisons.
        'no-confusing-arrow': ['error', {'allowParens': true}],
        // Disallow reassigning const variables.
        'no-const-assign': 'error',
        // Disallow duplicate class members.
        'no-dupe-class-members': 'error',
        // Disallow duplicate module imports.
        'no-duplicate-imports': 'off',
        // Disallow new operators with the Symbol object.
        'no-new-symbol': "error",
        // Disallow this/super before calling super() in constructors.
        'no-this-before-super': 'error',
        // Disallow unnecessary constructors.
        'no-useless-constructor': 'error',
        // Disallow renaming import, export, and destructured assignments to
        // the same name.
        'no-useless-rename': 'error',
        // Require let or const instead of var.
        'no-var': 'error',
        // Require arrow functions as callbacks.
        'prefer-arrow-callback': 'warn',
        // Require generator functions to contain yield.
        'require-yield': 'error',
        // Enforce spacing between rest and spread operators and their
        // expressions.
        'rest-spread-spacing': ['error', 'never'],
        // Require or disallow spacing around embedded expressions of template
        // strings.
        'template-curly-spacing': 'error',
        // Require or disallow spacing around the * in yield* expressions.
        'yield-star-spacing': ['error', 'after'],

        // React Plugin
        // ------------
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error'
    }
}
