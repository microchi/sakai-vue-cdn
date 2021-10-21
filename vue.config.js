module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/sakai-vue-cdn' : '/',
	configureWebpack: (config) => {
		config.externals = {
			vue: 'Vue',
			'vue-router': 'VueRouter',
			axios: 'axios',			
			primevue: 'primevue',
		};
	},
}
