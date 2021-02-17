module.exports = {
    async rewrites() {
        return [
            {
                source: '/login',
                destination: '/auth/login'
            },
            {
                source: '/register',
                destination: '/auth/register'
            }
        ]
    }
}
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const path = require('path');

module.exports = withCSS(withSass({
	webpack (config) {
		config.resolve.alias['~'] = path.join(__dirname)
		return config;
	}
}));
