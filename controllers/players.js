var db = require( '../models' );
var Player = db.models.Player;

function index( req, res ) {
	Player.findAll( {order: '"score" DESC'} ).then( function( players ) {
		res.json( players );
	});
}

function create( req, res ) {
	console.log( req.body );
	Player.create( req.body )
	.then( function( player ) {
		if( !player ) return error( res, 'not saved by create function')
		res.json( player );
	})
	.catch( function( err ) {
		console.log( err, req.body );
	})
}

function score( req, res ) {
	Player.findById( req.params.id )
	.then( function( player ) {
		if( !player ) return error( res, 'not found by score function' );
		return player.updateAttributes( req.body );
	})
	.then( function( player ) {
		res.json( player );
	});
}

function destroy( req, res ) {
  Player.findById( req.params.id )
  .then( function( player ){
    if( !player ) return error( res, 'not found by destroy function');
    return player.destroy();
  })
  .then( function(){
    res.redirect( '/' );
  });  
}

module.exports.index = index;
module.exports.create = create;
module.exports.score = score;
module.exports.destroy = destroy;