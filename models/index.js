// var mongoose = require( 'mongoose' );
// mongoose.connect( 'mongodb://localhost/bless-thee' );

// module.exports.Player = require( './player.js' );

var Sequelize = require( 'sequelize' );

var sequelize = new Sequelize( 'postgres://micahwierenga@localhost:5432/bless_thee' );

var Player = sequelize.import( './player' );

module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;
module.exports.models = {
	Player: Player
}