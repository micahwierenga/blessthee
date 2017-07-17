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

var playerCreate = function() {
	return db.Player.bulkCreate( playerList );
}

playerCreate()
.then( function() {
	process.exit();
});