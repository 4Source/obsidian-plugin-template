import eslintConfig from './eslint.config.mjs';

eslintConfig.push({
	'rules': {
		'no-console': [
			'error',
			{
				'allow': [
					'warn',
					'error',
					'debug',
				],
			},
		],
		'multiline-comment-style': [
			'error',
			'starred-block',
		],
	},
});

export default eslintConfig;