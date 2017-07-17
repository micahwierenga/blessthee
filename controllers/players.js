var db = require( '../models' );
var Player = db.models.Player;

function index( req, res ) {
	Player.findAll( {order: '"score" DESC'} ).then( function( players ) {
		res.json( players );
	});
}

function show( req, res ) {
	console.log( req.params.id );
	Player.findById( req.params.id )
		.then( function( player ) {
			if( !player ) return error( res, 'not found by show' )
			res.json( player );
		})
}

function bless( req, res ) {
	Player.findById( req.params.id )
	.then( function( player ) {
		if( !player ) return error( res, 'not found by bless' );
		return player.updateAttributes( req.body );
	})
	.then( function( player ) {
		res.json( player );
	});
}

module.exports.index = index;
module.exports.show = show;
module.exports.bless = bless;