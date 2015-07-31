module.exports = {
    entry: {
        'keymirror': ['./index.js']
    },
    output: {
        path: './dist',
        filename: '[name].js',
        libraryTarget: 'umd'
    }
};
