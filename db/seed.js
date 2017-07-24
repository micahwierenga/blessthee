var db = require("../models").models;

var playerList = [
	{
		name: 'Jargo',
		score: 131
	},
	{
		name: 'Steve',
		score: 122
	},
	{
		name: 'Larry',
		score: 151
	},
	{
		name: 'Micah',
		score: 142
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
	},
	{
		name: 'Earth',
		body_background: '#659DBD',
		body_text: '#FFFFFF',
		table_background: '#FBEEC1',
		table_text: '#659DBD',
		table_border: '#659DBD',
		active: 0
	},
	{
		name: 'Forest',
		body_background: '#5CDB95',
		body_text: '#EDF5E1',
		table_background: '#05386B',
		table_text: '#5CDB95',
		table_border: '#5CDB95',
		active: 0
	},
	{
		name: 'Lime Green on Black',
		body_background: '#000000',
		body_text: '#8EE4AF',
		table_background: '#5CDB95',
		table_text: '#000000',
		table_border: '#000000',
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