# WordCamp Tokyo 2016 Theme Development

vccw + gulp + Foundation

## 必要なもの

- Virtual Box: v5.0.x
- Vagrant: v1.8.x
- Node.js
- npm

## セットアップ

1. [Virtual Box](https://www.virtualbox.org/wiki/Downloads) をインストールします。
1. [Vagtant](https://www.vagrantup.com/downloads.html) をインストールします。
1. このリポジトリをクローンします。

        $ git clone git@github.com:wct2016/wct2016.git wct2016

1. `wct2016/` にディレクトリを移動して、vccw を立ち上げます。

        $ cd wct2016; vagrant up

1. [Homebrew](http://brew.sh/) から Node.js と npm をインストールします。
1. テーマディレクトリ ( `../themes/wordcamp-base-v2/` ) に移動します。 

        $ cd www/wordpress/wp-content/themes/wordcamp-base-v2/

1. 必要な node_modules をインストールします。

        $ npm install

1. gulp を実行します。

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
