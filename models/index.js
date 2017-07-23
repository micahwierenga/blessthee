var Sequelize = require( 'sequelize' );

var sequelize = new Sequelize( process.env.DATABASE_URL || 'postgres://micahwierenga@localhost:5432/bless_thee' );

var Player = sequelize.import( './player' );
var Scheme = sequelize.import( './scheme' );

module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;
module.exports.models = {
	Player: Player,
	Scheme: Scheme
}