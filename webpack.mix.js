const mix = require('laravel-mix');

const prod = (ext) => (
  (process.env.NODE_ENV == 'production' ? '.min' : '') + ext
);

mix.js('src/picker.js', 'dist/picker' + prod('.js'))
  .sass('src/resources/picker.scss', 'dist/picker' + prod('.css'));
