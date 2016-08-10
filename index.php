<!DOCTYPE html>
<html ng-app="app">
    <head>
    <!-- Base route set for Angular -->
        <base href="/wordpress/">
        <title>Angular 2 Demo Theme</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <?php wp_head(); ?>
        <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" />
    </head>
<body>

   <header>
        <nav>
        </nav>
    </header>
    <div ng-view>
        <!-- NG View shows here -->
    </div>
</body>
</html>