# WordCamp Tokyo 2016 Theme Development

vccw + gulp + Foundation

## Requires

- Virtual Box: v5.0.x
- Vagrant: v5.8.x
- Node.js
- npm

## Setup

1. Install [Virtual Box](https://www.virtualbox.org/wiki/Downloads).
1. Install [Vagtant](https://www.vagrantup.com/downloads.html).
1. Clone this repository.

        $ git clone git@github.com:wct2016/wct2016.git wct2016

1. Start vccw.

        $ cd wct2016; vagrant up

1. Install Node.js and npm. Recommend [Homebrew](http://brew.sh/).
1. Change the directory to `../themes/wordcamp-base-v2/`.

        $ cd www/wordpress/wp-content/themes/wordcamp-base-v2/

1. Install some dependencies.

        $ npm install

1. Run gulp.

        $ npm run gulp


## Third Party Recourses

### vccw
```
provision/
spec/
www/
Gemfile
LICENSE
Rakefile
site.yml
Vgrantfile
```

- License: MIT
- Source: [http://vccw.cc](http://vccw.cc)

### Foudnation
```
src/scss/core/foundation/
src/scss/core/_settings.scss
src/scss/core/_global.scss
src/scss/core/_foundation.scss
```

- License: MIT
- Source: http://foundation.zurb.com/

## License
GNU GENERAL PUBLIC LICENSE Version 2
