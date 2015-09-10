module.exports = {
    entry: {
        'keymirror': ['./index.js']
    },
    output: {
        path: './dist',
        filename: '[name].min.js',
        libraryTarget: 'umd'
    }
};
