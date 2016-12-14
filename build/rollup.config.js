const typescript = require('rollup-plugin-typescript')

const version = process.env.VERSION || require('../package.json').version

module.exports = {
    entry: 'src/index.ts',
    dest: 'dist/mathmate-templates.js',
    format: 'umd',
    moduleName: 'MathMateTemplates',
    plugins: [typescript()],
    banner:
    `/**
 * MathMateTemplates v${version}
 * (c) ${new Date().getFullYear()} Prashant S Khodade
 * @license MIT
 */`
}