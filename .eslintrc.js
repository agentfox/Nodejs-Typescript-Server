module.exports = {
	'env': {
		'browser': true,
		'es6': true
	},
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},
	'parser': '@typescript-eslint/parser',
	'plugins': ['@typescript-eslint'],
	'extends': ['plugin:@typescript-eslint/recommended'],
	'parserOptions': {
		'ecmaVersion': 2018,
		'sourceType': 'module'
	},
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'windows'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		]
	}
}