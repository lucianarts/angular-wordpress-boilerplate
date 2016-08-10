//Define some services here
angular.module('app')
.factory('dlsService', function($http,$routeParams) {
// Create Empty Object 
var factory = {};
// Define Methods        
factory.acfFieldPgs = function () {
    return $http.get('wp-json/acf/v2/page/42');
}

factory.wpPosts = function () {
    return $http.get('wp-json/wp/v2/posts/');
}

factory.wpSinglePost = function (routeParams) {
	// Pass routeparam as arguement
    return $http.get('wp-json/wp/v2/posts/' + routeParams);
}

factory.wpPages = function () {
    return $http.get('wp-json/wp/v2/pages/');
}


//Return the factory object
return factory;
      
});