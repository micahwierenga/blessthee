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
	vm.saveScheme = saveScheme;
	vm.changeSchemes = changeSchemes;
	vm.deleteScheme = deleteScheme;

	function getAllPlayers() {
		$http.get( '/api/players' )
			 .then( function ( response ) {
			 	vm.allPlayers = response.data;
			 	getAllSchemes();
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
			 	$('#player-name-input').val('');
			 	$('#player-score-input').val('');
			 })
	}

	function blessPlayer( player ) {
		var halloweenTheme = new Audio( '../../media/halloween_theme.mp3' );
		var blessedPlayer = {
			score: player.score + 1
		}
		var id = player.id;
		$http.put( '/api/players/' + id, blessedPlayer )
			 .then( function( response ) {
			 	var player = response.data;
			 	for( var i = 0; i < vm.allPlayers.length; i++ ) {
			 		if( player.id != vm.allPlayers[0].id && vm.allPlayers[i].id == player.id && ( vm.allPlayers[i - 1].score - player.score <= 5 && vm.allPlayers[i - 1].score - player.score >= 0 ) ) {
			 			halloweenTheme.play();
			 		}
			 	}
			 	getAllPlayers();
			 	getAllSchemes();
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
			 	getAllSchemes();
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
			 			vm.radioId = schemes[i].id;
			 			$('body').css({
					 		'background-color': schemes[i].body_background,
					 		'color': schemes[i].body_text
					 	});
					 	$('#scoreTable').css({
					 		'background-color': schemes[i].table_background,
					 		'color': schemes[i].table_text
					 	});
					 	$('table.table-bordered').css({
					 		'border': '3px solid ' + schemes[i].body_background
					 	});
					 	$('table.table-bordered > thead > tr > th').css({
					 		'border': '3px solid ' + schemes[i].body_background
					 	});
					 	$('table.table-bordered > tbody > tr > td').css({
					 		'border': '3px solid ' + schemes[i].body_background
					 	});
					 	$('.button-add').css({
					 		'background': schemes[i].add_button_background,
					 		'color': schemes[i].add_button_text
					 	});
					 	$('.button-minus').css({
					 		'background': schemes[i].minus_button_background,
					 		'color': schemes[i].minus_button_text
					 	});
					 	$('.add-player-button').css({
					 		'background': schemes[i].add_player_button_background,
					 		'color': schemes[i].add_player_button_text
					 	});
					 	$('.add-scheme-button').css({
					 		'background': schemes[i].add_scheme_button_background,
					 		'color': schemes[i].add_scheme_button_text
					 	});
					 	$('.change-scheme-button').css({
					 		'background': schemes[i].change_scheme_button_background,
					 		'color': schemes[i].change_scheme_button_text
					 	});
			 		}
			 	}
			 })
	}

	getAllSchemes();

	function saveScheme() {
		$http.post( '/api/schemes/', vm.newColorScheme )
			 .then( function( response ) {
			 	var scheme = response.data;
			 	getAllSchemes();
			 	$('#scheme-name-input').val('');
			 	$('#body-background-input').val('');
			 	$('#body-text-input').val('');
			 	$('#table-background-input').val('');
			 	$('#table-text-input').val('');
			 })
	}

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

	function deleteScheme( scheme ) {
		if( scheme.id == vm.defaultScheme.id ) {
			console.log( 'Cannot delete active scheme' );
			return 'Cannot delete active scheme';
		}
		$http.delete( '/api/schemes/' + scheme.id )
			 .then(function( response ) {
				var schemeIndex = vm.allSchemes.indexOf( scheme );
				vm.allSchemes.splice( schemeIndex, 1 );
			});
	}
}