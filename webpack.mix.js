const { mix } = require('laravel-mix');

mix
  .sass('assets/scss/scss.scss', 'public/css')
  .stylus('assets/styl/stylus.styl', 'public/css', {
    use: [
      require('rupture')(),
      require('nib')()
  //     require('axis')()
    ]
  })
  ;


