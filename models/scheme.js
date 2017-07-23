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
		active: Sequelize.INTEGER
	})
	return model;
}