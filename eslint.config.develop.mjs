import eslintConfig from './eslint.config.mjs';

eslintConfig.push({
	'rules': {
		'no-console': 'off',
	},
});

export default eslintConfig;