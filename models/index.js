var Sequelize = require( 'sequelize' );

var sequelize = new Sequelize( process.env.DATABASE_URL || 'postgres://micahwierenga@localhost:5432/bless_thee' );

var Player = sequelize.import( './player' );

module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;
module.exports.models = {
	Player: Player
}