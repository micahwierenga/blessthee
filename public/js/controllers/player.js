angular.module( 'blessTheeApp' )
	.controller( 'PlayerIndexController', PlayerIndexController );

PlayerIndexController.$inject = ['$http'];
function PlayerIndexController( $http ) {
	var vm = this;
	vm.savePlayer = savePlayer;
	vm.blessPlayer = blessPlayer;
	vm.cursePlayer = cursePlayer;
	vm.deletePlayer = deletePlayer;

	function getAllPlayers() {
		$http.get( '/api/players' )
			 .then( function ( response ) {
			 	vm.allPlayers = response.data;
			 });
	}

	getAllPlayers();

	function savePlayer() {
		console.log( 'hitting savePlayer' );
		console.log( vm.newPlayer );
		$http.post( '/api/players/', vm.newPlayer )
			 .then( function( response ) {
			 	var player = response.data;
			 	getAllPlayers();
			 })
	}

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

	function deletePlayer( player ) {
		$http.delete( '/api/players/' + player.id )
			 .then(function( response ) {
				var playerIndex = vm.allPlayers.indexOf( player );
				vm.allPlayers.splice( playerIndex, 1 );
			});
	}
}