const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js', // точка вхождения
    output: { // куда помещать обработанные файлы
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')  // указание абсолютного пути, __dirname - путь к текущей директории,
                                                // public - название папки
    },

    devServer: {
        port: 8080
    },

    devtool: 'source-map', // карты js
    module: {
        rules: [
            {
                test: /\.m?js$/, // фильтрует файлы для обработки
                exclude: /(node_modules|bower_components)/, // исключаем переработку данной папки
                use: {
                    loader: 'babel-loader', // какой загрузчик необходимо использовать
                    options: {
                        presets: ['@babel/preset-env'] //указываем, какой презет использовать
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader'], // сначала работает sass-loader,
                                                        // потом css-loader
                    fallback: 'style-loader' // если не сработает первый загрузчик, бэкап план
                })
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[ext]', // маска, по которой будут именоваться картинки
                            limit: 8192 // лимит на размер изображения
                        }
                    }
                ]
            }
        ]
    },

    plugins: [ // настройка плагинов
        new ExtractTextPlugin('styles.css'), // создаем новый экземпляр плагина.
                                            // Указываем файл, в который будут вынесен текст
        new HtmlWebpackPlugin({
            template: './src/index.html' // указание для шаблона html-файла
        })
    ]
};