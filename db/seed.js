var db = require("../models").models;

var playerList = [
	{
		id: 1,
		name: 'Jason',
		score: 108
	},
	{
		id: 2,
		name: 'Steve',
		score: 116
	},
	{
		id: 3,
		name: 'Larry',
		score: 135
	},
	{
		id: 4,
		name: 'Micah',
		score: 125
	}
];

// db.Player.remove( {}, function( err, players ) {
// 	db.Player.create( playerList, function( err, players ) {
// 		if( err ) { return console.log( 'ERROR: ', err ); }
// 		console.log( 'ALL PLAYERS: ', players );
// 		console.log( 'CREATED: ', players.length, 'players' );
// 		process.exit();
// 	});
// });

var playerCreate = function() {
	return db.Player.bulkCreate( playerList );
}

playerCreate()
.then( function() {
	process.exit();
});