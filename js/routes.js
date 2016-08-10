// Configure Routes Here
angular.module('app')
.config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);

	$routeProvider
	.when('/', {
		templateUrl: ngLocalized.partials + 'home.php',
		controller:'homeController'
		

	})
	.when('/blog', {

		templateUrl:ngLocalized.partials + 'blog.html',
		controller:'blogController'
		
		

	})
	.when('/:id', {

		templateUrl:ngLocalized.partials + 'content.html',
		controller:'contentController'
		
		

	});
});