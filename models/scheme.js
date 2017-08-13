module.exports = function( sequelize, Sequelize ) {
	var model = sequelize.define( 'scheme', {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		name: Sequelize.STRING,
		body_background: Sequelize.STRING,
		body_text: Sequelize.STRING,
		table_background: Sequelize.STRING,
		table_text: Sequelize.STRING,
		table_border: Sequelize.STRING,
		add_button_background: Sequelize.STRING,
		add_button_text: Sequelize.STRING,
		minus_button_background: Sequelize.STRING,
		minus_button_text: Sequelize.STRING,
		generic_button_background: Sequelize.STRING,
		generic_button_text: Sequelize.STRING,
		add_player_button_background: Sequelize.STRING,
		add_player_button_text: Sequelize.STRING,
		add_scheme_button_background: Sequelize.STRING,
		add_scheme_button_text: Sequelize.STRING,
		change_scheme_button_background: Sequelize.STRING,
		change_scheme_button_text: Sequelize.STRING,
		active: Sequelize.INTEGER
	})
	return model;
}