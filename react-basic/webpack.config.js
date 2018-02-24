module.exports = {
    entry: './src/index.js',

    // entry로 부터 읽어온 모든 모듈을 bundle.js로 합친 후 저장
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },

    // 개발용 서버 (production은 별도 웹서버 연동)
    devServer: {
        inline: true,
        port: 7777,
        contentBase: __dirname + '/public'
    },

    // ES6 문법으로 작성된 코드를 ES5 형태로 변환
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
