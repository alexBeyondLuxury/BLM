<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix test 10 Cmon
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'boutiqueluxury');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'O-XB6E|+6D}j;9`CEHPq=.Tjn.tY9([F9`*8g6SM/mnXk+h6Y+4B+<5#6nX^X*(_');
define('SECURE_AUTH_KEY',  ':o7!cBRp]Cb#@*4]*~cn;:n:>,1v11FY48{/8(_%0r?x_g;_tqY!MuB$]l]eP3tI');
define('LOGGED_IN_KEY',    '/AflNc,g:;_@edHIddhTR2WDXE8lp5.O]::w umPUU?t3Qm~BtJ0]k*%jN*eQy(i');
define('NONCE_KEY',        'l8N9E=I8O]]amlI/<c|l[$Ag$r%<vu>$vEJa(<vU{0DhDC,&}mJ5m^i>v*nF2O++');
define('AUTH_SALT',        'EycFB2sga-k~s6HO.)Q floMq1^sYw`67B~79BYRojA|lA[-)7)26ziy)o7cgwf6');
define('SECURE_AUTH_SALT', 'E2MhL+Xy4Z+)Fu9SANa3L&R ],F^*j;a<nvf^Dr]2(m1f?;#]|4d!I9tGh`a$9@e');
define('LOGGED_IN_SALT',   'tX^MrBT:4}f(T^S(pY..Qzg`o)C*<ZzB]hnCgn4@pbHI~4:&@ul;Gx*B{hgn`d6T');
define('NONCE_SALT',       'GD9b%S]xI1S3s:xwir.{Lza@0m,M0Wc?d^!zc!1>-ww9Z{+rv8j@XX`usc)GL?w2');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
