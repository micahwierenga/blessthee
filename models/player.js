module.exports = function( sequelize, Sequelize ) {
	var model = sequelize.define( 'player', {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		name: Sequelize.STRING,
		score: Sequelize.INTEGER
	})
	return model;
}