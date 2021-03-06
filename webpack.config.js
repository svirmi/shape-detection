const path = require('path');

module.exports = {
    entry: './src/js/index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'app.js'
    }
};