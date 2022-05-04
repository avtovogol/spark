module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{css,png,svg,js,json}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};