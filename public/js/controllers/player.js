angular.module( 'blessTheeApp' )
	.controller( 'PlayerIndexController', PlayerIndexController );

PlayerIndexController.$inject = ['$http'];
function PlayerIndexController( $http ) {
	var vm = this;
	vm.blessPlayer = blessPlayer;
	vm.cursePlayer = cursePlayer;

	function getAllPlayers() {
		$http.get( '/api/players' )
			 .then( function ( response ) {
			 	vm.allPlayers = response.data;
			 });
	}

	getAllPlayers();

	function blessPlayer( player ) {
		var blessedPlayer = {
			score: player.score + 1
		}
		var id = player.id;
		$http.put( '/api/players/' + id, blessedPlayer )
			 .then( function( response ) {
			 	var player = response.data;
			 	getAllPlayers();
			 })
	}

	function cursePlayer( player ) {
		var cursedPlayer = {
			score: player.score - 1
		}
		var id = player.id;
		$http.put( '/api/players/' + id, cursedPlayer )
			 .then( function( response ) {
			 	var player = response.data;
			 	getAllPlayers();
			 })
	}
}