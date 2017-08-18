var db = require("../models").models;

var playerList = [
	{
		name: 'Jargo',
		score: 164
	},
	{
		name: 'Steve',
		score: 166
	},
	{
		name: 'Larry',
		score: 193
	},
	{
		name: 'Micah',
		score: 177
	}
];

var schemeList = [
	{
		name: 'Original',
		body_background: '#333333',
		body_text: '#CCCCCC',
		body_font: '',
		table_background: '#CCCCCC',
		table_text: '#333333',
		table_border: '#333333',
		add_button_background: '#5cb85c',
		add_button_text: '#FFFFFF',
		minus_button_background: '#337ab7',
		minus_button_text: '#FFFFFF',
		generic_button_background: '#337ab7',
		generic_button_text: '#FFFFFF',
		add_player_button_background: '#337ab7',
		add_player_button_text: '#FFFFFF',
		add_scheme_button_background: '#337ab7',
		add_scheme_button_text: '#FFFFFF',
		change_scheme_button_background: '#337ab7',
		change_scheme_button_text: '#FFFFFF',
		active: 1
	},
	{
		name: 'Warm',
		body_background: '#D7CEC7',
		body_text: '#76323F',
		body_font: '',
		table_background: '#565656',
		table_text: '#D7CEC7',
		table_border: '#D7CEC7',
		add_button_background: '#D7CEC7',
		add_button_text: '#76323F',
		minus_button_background: '#D7CEC7',
		minus_button_text: '#76323F',
		generic_button_background: '#76323F',
		generic_button_text: '#D7CEC7',
		add_player_button_background: '#76323F',
		add_player_button_text: '#D7CEC7',
		add_scheme_button_background: '#76323F',
		add_scheme_button_text: '#D7CEC7',
		change_scheme_button_background: '#76323F',
		change_scheme_button_text: '#D7CEC7',
		active: 0
	},
	{
		name: 'Earth',
		body_background: '#659DBD',
		body_text: '#FFFFFF',
		body_font: '',
		table_background: '#FBEEC1',
		table_text: '#659DBD',
		table_border: '#659DBD',
		add_button_background: '#659DBD',
		add_button_text: '#FBEEC1',
		minus_button_background: '#659DBD',
		minus_button_text: '#FBEEC1',
		generic_button_background: '#FBEEC1',
		generic_button_text: '#659DBD',
		add_player_button_background: '#FFFFFF',
		add_player_button_text: '#659DBD',
		add_scheme_button_background: '#FFFFFF',
		add_scheme_button_text: '#659DBD',
		change_scheme_button_background: '#FFFFFF',
		change_scheme_button_text: '#659DBD',
		active: 0
	},
	{
		name: 'Forest',
		body_background: '#5CDB95',
		body_text: '#EDF5E1',
		body_font: '',
		table_background: '#05386B',
		table_text: '#5CDB95',
		table_border: '#5CDB95',
		add_button_background: '#5CDB95',
		add_button_text: '#05386B',
		minus_button_background: '#5CDB95',
		minus_button_text: '#05386B',
		generic_button_background: '#EDF5E1',
		generic_button_text: '#05386B',
		add_player_button_background: '#EDF5E1',
		add_player_button_text: '#05386B',
		add_scheme_button_background: '#EDF5E1',
		add_scheme_button_text: '#05386B',
		change_scheme_button_background: '#EDF5E1',
		change_scheme_button_text: '#05386B',
		active: 0
	},
	{
		name: 'Lime Green on Black',
		body_background: '#000000',
		body_text: '#8EE4AF',
		body_font: '',
		table_background: '#5CDB95',
		table_text: '#000000',
		table_border: '#000000',
		add_button_background: '#000000',
		add_button_text: '#5CDB95',
		minus_button_background: '#000000',
		minus_button_text: '#5CDB95',
		generic_button_background: '#5CDB95',
		generic_button_text: '#000000',
		add_player_button_background: '#5CDB95',
		add_player_button_text: '#000000',
		add_scheme_button_background: '#5CDB95',
		add_scheme_button_text: '#000000',
		change_scheme_button_background: '#5CDB95',
		change_scheme_button_text: '#000000',
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