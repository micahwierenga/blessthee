angular.module( 'blessTheeApp' )
	.controller( 'PlayerIndexController', PlayerIndexController );

PlayerIndexController.$inject = ['$http'];
function PlayerIndexController( $http ) {
	var vm = this;
	vm.getOnePlayer = getOnePlayer;
	vm.savePlayer = savePlayer;
	vm.blessPlayer = blessPlayer;
	vm.cursePlayer = cursePlayer;
	vm.deletePlayer = deletePlayer;
	vm.changeSchemes = changeSchemes;

	function getAllPlayers() {
		$http.get( '/api/players' )
			 .then( function ( response ) {
			 	vm.allPlayers = response.data;
			 });
	}

	getAllPlayers();

	function getOnePlayer( player ) {
		var id = player.id;
		$http.get( '/api/players/' + id )
			 .then( function( response ) {
			 	vm.onePlayer = response.data;
			 })
	}

	function savePlayer() {
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

	function getAllSchemes() {
		$http.get( '/api/schemes' )
			 .then( function( response ) {
			 	vm.allSchemes = response.data;
			 	var schemes = vm.allSchemes;
			 	console.log( schemes );
			 	for( var i = 0; i < schemes.length; i++ ) {
			 		if( schemes[i].active == 1 ) {
			 			vm.defaultScheme = schemes[i];
			 			$('body').css({
					 		'background-color': schemes[i].body_background,
					 		'color': schemes[i].body_text
					 	});
					 	$('#scoreTable').css({
					 		'background-color': schemes[i].table_background,
					 		'color': schemes[i].table_text
					 	});
					 	$('table.table-bordered').css({
					 		'border': '3px solid ' + schemes[i].table_border
					 	});
					 	$('table.table-bordered > thead > tr > th').css({
					 		'border': '3px solid ' + schemes[i].table_border
					 	});
					 	$('table.table-bordered > tbody > tr > td').css({
					 		'border': '3px solid ' + schemes[i].table_border
					 	});
			 		}
			 	}
			 })
	}

	getAllSchemes();

	function updateDefaultScheme() {
		var defaultScheme = vm.defaultScheme;
		var id = defaultScheme.id;
		defaultScheme = {
			active: 0
		}
		$http.put( '/api/schemes/' + id, defaultScheme )
			 .then( function( response ) {
			 })
	}

	function changeSchemes( scheme ) {
		console.log( scheme );
		updateDefaultScheme();
		var changedScheme = {
			active: 1
		}
		var id = scheme.id;
		$http.put( '/api/schemes/' + id, changedScheme )
			 .then( function( response ) {
			 	getAllSchemes();
			 })
	}
}