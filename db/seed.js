var db = require("../models").models;

var playerList = [
	{
		name: 'Jason',
		score: 121
	},
	{
		name: 'Steve',
		score: 116
	},
	{
		name: 'Larry',
		score: 141
	},
	{
		name: 'Micah',
		score: 131
	}
];

var schemeList = [
	{
		name: 'Original',
		body_background: '#333333',
		body_text: '#CCCCCC',
		table_background: '#CCCCCC',
		table_text: '#333333',
		table_border: '#333333',
		active: 1
	},
	{
		name: 'Warm',
		body_background: '#D7CEC7',
		body_text: '#76323F',
		table_background: '#565656',
		table_text: '#D7CEC7',
		table_border: '#D7CEC7',
		active: 0
	}
];

var playerCreate = function() {
	return db.Player.bulkCreate( playerList );
}

var schemeCreate = function() {
	return db.Scheme.bulkCreate( schemeList );
}

playerCreate()
.then( schemeCreate )
.then( function() {
	process.exit();
});