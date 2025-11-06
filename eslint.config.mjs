import { defineConfig, globalIgnores } from 'eslint/config';
import stylisticEslintPlugin from '@stylistic/eslint-plugin';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default defineConfig([
	globalIgnores([
		'node_modules/',
		'main.js',
	]),
	{
		extends: compat.extends(
			'eslint:recommended',
			'plugin:@typescript-eslint/eslint-recommended',
			'plugin:@typescript-eslint/recommended',
		),

		plugins: {
			'@stylistic': stylisticEslintPlugin,
		},

		languageOptions: {
			globals: {
				...globals.node,
			},

			parser: tsParser,
			ecmaVersion: 5,
			sourceType: 'module',
		},

		rules: {
			'@stylistic/indent': ['error', 'tab'],
			'@stylistic/indent-binary-ops': ['error', 'tab'],
			'@stylistic/quotes': ['error', 'single'],
			'@stylistic/semi': ['error', 'always'],

			'@stylistic/brace-style': ['error', 'stroustrup', {
				allowSingleLine: true,
			}],

			'@stylistic/comma-dangle': ['error', 'always-multiline'],

			'comma-spacing': ['error', {
				before: false,
				after: true,
			}],

			'@stylistic/dot-location': ['error', 'property'],
			'@stylistic/function-call-argument-newline': ['error', 'consistent'],
			'@stylistic/function-call-spacing': 'error',
			'@stylistic/implicit-arrow-linebreak': 'error',
			'@stylistic/key-spacing': 'error',

			'@stylistic/lines-around-comment': ['error', {
				beforeBlockComment: true,
				afterBlockComment: false,
				beforeLineComment: true,
				afterLineComment: false,
				allowBlockStart: true,
				allowBlockEnd: false,
				allowClassStart: true,
				allowClassEnd: false,
				allowObjectStart: true,
				allowObjectEnd: false,
				allowArrayStart: true,
				allowArrayEnd: false,
				ignorePattern: 'TODO|HACK|BUG|TEST',
				applyDefaultIgnorePatterns: false,
			}],

			'@stylistic/new-parens': 'error',
			'@stylistic/no-confusing-arrow': 'error',
			'@stylistic/no-extra-semi': 'error',
			'@stylistic/no-floating-decimal': 'error',
			'@stylistic/no-mixed-operators': 'error',
			'@stylistic/no-mixed-spaces-and-tabs': 'error',
			'@stylistic/no-multi-spaces': 'error',

			'@stylistic/no-multiple-empty-lines': ['error', {
				max: 1,
				maxEOF: 0,
				maxBOF: 0,
			}],

			'@stylistic/no-trailing-spaces': ['error', {
				skipBlankLines: false,
				ignoreComments: false,
			}],

			'@stylistic/nonblock-statement-body-position': 'error',
			'@stylistic/operator-linebreak': ['error', 'after'],
			'@stylistic/padded-blocks': ['error', 'never'],
			'@stylistic/padding-line-between-statements': 'error',
			'@stylistic/rest-spread-spacing': 'error',
			'@stylistic/semi-spacing': 'error',
			'@stylistic/semi-style': 'error',
			'@stylistic/space-before-blocks': 'error',

			'@stylistic/space-before-function-paren': ['error', {
				anonymous: 'always',
				named: 'never',
				asyncArrow: 'always',
			}],

			'@stylistic/arrow-spacing': 'error',
			'@stylistic/space-in-parens': 'error',
			'@stylistic/space-infix-ops': 'error',
			'@stylistic/space-unary-ops': 'error',
			'@stylistic/spaced-comment': ['error', 'always'],
			'@stylistic/switch-colon-spacing': 'error',
			'@stylistic/template-curly-spacing': 'error',
			'@stylistic/type-generic-spacing': 'error',
			'@stylistic/type-named-tuple-spacing': 'error',

			'no-fallthrough': ['error', {
				allowEmptyCase: true,
			}],

			'line-comment-position': ['error', {
				position: 'above',
				ignorePattern: 'TODO|HACK|BUG|TEST',
				applyDefaultIgnorePatterns: false,
			}],

			'@typescript-eslint/no-explicit-any': 'error',
			'@typescript-eslint/array-type': ['error', {
				default: 'generic'
			}],
			'@typescript-eslint/ban-ts-comment': ['error', {
			    minimumDescriptionLength: 10,
			    'ts-check': false,
			    'ts-expect-error': 'allow-with-description',
			    'ts-ignore': false,
			    'ts-nocheck': false,
  			}],
		},
	},
]);
