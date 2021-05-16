// webpack.mix.js

let mix = require('laravel-mix');

mix.js('src/js/scripts.js', 'js')
    .sass('src/scss/styles.scss', 'css')
    .setPublicPath('public');