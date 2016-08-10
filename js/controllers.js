//Configure Controllers Here
angular.module('app')
.controller('Main', function($scope, $http, $routeParams,dlsService) {
  //Grab Page Links

$scope.submitForm = function () {
  
  $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
  var url = frontEndLocalized.frontEndSubmit + 'schools-insert-front-end.php';

  var data = {
      'id': '',
      'fname': $scope.fname, 
      'email':$scope.email, 
      'message':$scope.message
  };
        
 

  $http.post(url, data)
      .then(function (response) {
        console.log(response.url);
        console.log(response.data);
 });


}

dlsService.wpPages().success(function(res){
		$scope.pages = res;
});

$scope.menuOpen = false;

})
.controller('homeController', function($rootScope,$http,$scope,$routeParams,dlsService) {

  dlsService.acfFieldPgs().success(function(res){
		$scope.pages = res;
	}); 

	dlsService.wpPosts().success(function(res){
		$scope.posts = res;
	});

	$scope.animateRubberBand = function($el) {
    	$el.removeClass('hidden');
    	$el.addClass('animated rubberBand'); // this example leverages animate.css classes
  	};
    
	$scope.animateRollIn = function($el) {
    	$el.removeClass('hidden');
    	$el.addClass('animated rubberBand'); // this example leverages animate.css classes
  	};

  	$scope.animateRollOut = function($el) {
    	$el.addClass('hidden');
    	$el.removeClass('animated flipOutX'); // this example leverages animate.css classes
  	};

  	$scope.animatePulseIn = function($el) {
    	$el.removeClass('hidden');
    	$el.addClass('animated zoomIn'); // this example leverages animate.css classes
  	};

  	$scope.animatePulseOut = function($el) {
    	$el.addClass('hidden');
    	$el.removeClass('animated zoomIn'); // this example leverages animate.css classes
  	};

	$scope.animateElementIn = function($el) {
    	$el.removeClass('hidden');
    	$el.addClass('animated fadeIn'); // this example leverages animate.css classes
  	};

  	$scope.animateElementOut = function($el) {
    	$el.addClass('hidden');
    	$el.removeClass('animated fadeIn'); // this example leverages animate.css classes
  	};

	$rootScope.pageClass = 'lightblue';
	$rootScope.logoClass = '#ffffff';

})
.controller('blogController', function($rootScope,$scope, $http, $routeParams,dlsService) {
    // Grab Blog Pages
	dlsService.wpPages().success(function(res){
		$scope.pages = res;
	});

	dlsService.wpPosts().success(function(res){
		$scope.posts = res;
	});

	$scope.animateElementIn = function($el) {
    	$el.removeClass('hidden');
    	$el.addClass('animated fadeIn'); 
  	};

  	$scope.animateElementOut = function($el) {
    	$el.addClass('hidden');
    	$el.removeClass('animated fadeIn'); 
  	};

	$rootScope.pageClass = 'white-bg';
	$rootScope.logoClass = '#3399ff';
	$scope.pageH1 = 'pageH1';
})
.controller('contentController', function($rootScope,$scope, $http, $routeParams,dlsService) {
    // Grab Blog Pages
  console.log($routeParams.id);
  // Pass route param as an arguement
	dlsService.wpSinglePost($routeParams.id).success(function(res){
		$scope.post = res;
	});

	$rootScope.pageClass = 'white-bg';
	$rootScope.logoClass = '#3399ff';

})