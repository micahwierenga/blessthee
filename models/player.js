// var mongoose = require( 'mongoose' );
// var Schema = mongoose.Schema;

// var PlayerSchema = new Schema ({
// 	playerName: String,
// 	score: Number
// })

// var Player = mongoose.model( 'Player', PlayerSchema );

// module.exports = Player;

module.exports = function( sequelize, Sequelize ) {
	var model = sequelize.define( 'player', {
		name: Sequelize.STRING,
		score: Sequelize.INTEGER
	})
	return model;
}