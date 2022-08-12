const esbuild = require("esbuild")
const CleanCSS = require("clean-css")
const htmlmin = require("html-minifier")

module.exports = (config) => {

	config.setQuietMode(true)
	config.setUseGitIgnore(false)
	config.addPassthroughCopy({ "assets": "assets" })

	// Minify HTML, CSS
	config.addFilter("cssmin", (code) => new CleanCSS({ level: 2 }).minify(code).styles)
	config.addTransform("htmlmin", function (content) {
		if (this.outputPath.endsWith(".html")) {
			let minifiedHtml = htmlmin.minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true,
				continueOnParseError: true,
				minifyJS: true
			})
			return minifiedHtml
		}
		return content
	});

	// Esbuild Config
	config.on('eleventy.after', () => esbuild.buildSync({
		sourcemap: process.env.ELEVENTY_ENV !== "production",
		entryPoints: ["_includes/js/main.js"],
		outdir: "_site/assets",
		bundle: true,
		minify: true
	}))
}