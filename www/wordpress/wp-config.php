<?php


// ** MySQL settings ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'wordpress');

/** MySQL database password */
define('DB_PASSWORD', 'wordpress');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

define('AUTH_KEY',         'yCX=a!!2u|{L?8:.x.}S`Z.*h4on|M[1ZJ1l,?3d_duG[ e2{t|VBLg#8:A-`tUV');
define('SECURE_AUTH_KEY',  '^-Z-FhF`<+8j5Tb/r/yRL_1e_%||M7d[eN+Qus>HyE1DNV%bLi)o~w+<:UQ<3|E*');
define('LOGGED_IN_KEY',    '@J=a;v+R;fdw&i#!l]&},0h7bq=oU%e:HN3;!WJ|@V)2cbU=)#(C-%m*@Gg)szZl');
define('NONCE_KEY',        '6wEP?Nl*&|%coUhk}@IS9*9VD7RQO~QVnwwp8mQ+^iJl{+*+@/BB+vZo.N{b6#c=');
define('AUTH_SALT',        'Q^Pc5o+jIUg>85?e{oN}%J@0l_.n!j7[pq<ow.-7I.s<h:FaQd;dEN|xhmu_l_2.');
define('SECURE_AUTH_SALT', 'tNBK{-AP;wi`-_h>npn>+wxSO)_Q_g:^..]0)];3EWAJz`Z|>nn,R/2cr80#n=+|');
define('LOGGED_IN_SALT',   'R+F7]~_Jra`v3Dhz*O!!Q H=$T;I7G{YOw+iswHw},.r?hhBa}z2n ?8dF?q9>vY');
define('NONCE_SALT',       'x+n;P|NoR:3,>o%,<p{-W#/Xc(w$)G W;WTyowb +O~+R Vh6nlS1s&~Gw`S&sF&');


$table_prefix = 'wp_';


define( 'WP_HOME', 'http://wct2016.dev' );
define( 'WP_SITEURL', 'http://wct2016.dev' );
define( 'JETPACK_DEV_DEBUG', true );
define( 'WP_DEBUG', true );
define( 'FORCE_SSL_ADMIN', false );
define( 'SAVEQUERIES', false );



/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
