const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

// Helper for combining webpack config objects
const { merge } = require('webpack-merge');

module.exports = (config, context) => {
    return merge(config, {
        plugins: [new MonacoWebpackPlugin()],
        /*
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
                },
            ],
        }, */
    });
};