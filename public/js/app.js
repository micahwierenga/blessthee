angular.module( 'blessTheeApp', ['ngRoute'] )
	.config( function( $routeProvider, $locationProvider ) {
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});

	$routeProvider
		.when( '/', {
			templateUrl: '/templates/home.html',
			controller: 'PlayerIndexController as playersController'
		})
	});