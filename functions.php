<?php

remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'feed_links', 2);
remove_action('wp_head', 'index_rel_link');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'feed_links_extra', 3);
remove_action('wp_head', 'start_post_rel_link', 10, 0);
remove_action('wp_head', 'parent_post_rel_link', 10, 0);
remove_action('wp_head', 'adjacent_posts_rel_link', 10, 0);
// Strip <html> from post content
remove_filter( 'the_content', 'wpautop' );
remove_filter( 'the_excerpt', 'wpautop' );

// LOAD SOME CSS

function load_css(){
   if(!is_admin()){
      wp_enqueue_style('foundation', get_template_directory_uri() . '/css/foundation.css?'. time());
      wp_enqueue_style('fonts', "https://fonts.googleapis.com/css?family=Open+Sans|Oswald");
      wp_enqueue_style('animate-css', get_template_directory_uri() . '/css/animatecss/animate.min.css');
      wp_enqueue_style('font-awesome', get_template_directory_uri() . '/css/font-awesome/css/font-awesome.min.css');

   }
}

// LOAD SOME JAVASCRIPT

function load_js(){
    
    // Register Angular Modules
    wp_register_script('angularjs', get_stylesheet_directory_uri() . '/js/angular.min.js');
    wp_register_script('angular-route', get_stylesheet_directory_uri() . '/js/modules/angular-route.min.js');
    wp_register_script('angular-animate', get_stylesheet_directory_uri() . '/js/modules/angular-animate.min.js');
    wp_register_script('angular-scroll-animate', get_stylesheet_directory_uri() . '/js/angular-scroll-animate.js');

    wp_enqueue_script('ng-jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js');

    wp_enqueue_script('my-scripts', get_stylesheet_directory_uri() . '/js/scripts.js', array('angularjs', 'angular-route','angular-animate','angular-scroll-animate'));
    wp_enqueue_script('routes', get_stylesheet_directory_uri() . '/js/routes.js', array('angularjs', 'angular-route','angular-animate','angular-scroll-animate'));
    wp_enqueue_script('services', get_stylesheet_directory_uri() . '/js/services.js', array('angularjs', 'angular-route','angular-animate','angular-scroll-animate'));
    wp_enqueue_script('controllers', get_stylesheet_directory_uri() . '/js/controllers.js', array('angularjs', 'angular-route','angular-animate','angular-scroll-animate'));

    // Localize scripts for routing
    wp_localize_script(
        'routes',
        'ngLocalized',
        array('partials' => trailingslashit(get_template_directory_uri().'/partials/'))
    );

   
 

add_action('wp_enqueue_scripts','load_js');
add_action('wp_enqueue_scripts','load_css');

// Enamble svg uploads
function allow_svgimg_types($mimes) {
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}

add_filter('upload_mimes', 'allow_svgimg_types');

?>