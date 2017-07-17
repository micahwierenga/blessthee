// $( document ).ready( function() {
// 	$.ajax({
// 		type: 'GET',
// 		url: '/api/players',
// 		dataType: 'json',
// 		success: function( players ) {
// 			players.forEach( function( player ) {
// 				renderPlayer( player );
// 			})
// 		}
// 	});

// 	function renderPlayer( player ) {

// 		var player = 
// 	}
// })

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