var db = require( '../models' );
var Scheme = db.models.Scheme;

function index( req, res ) {
	Scheme.findAll().then( function( schemes ) {
		res.json( schemes );
	});
}

function show( req, res ) {
	Scheme.findById( req.params.id )
	.then( function( scheme ) {
		if( !scheme ) return error( res, 'not found by show function' )
		res.json( scheme );
	})
}

function create( req, res ) {
	Scheme.create( req.body )
	.then( function( scheme ) {
		if( !scheme ) return error( res, 'not saved by create function')
		res.json( scheme );
	})
	.catch( function( err ) {
		console.log( err, req.body );
	})
}

function update( req, res ) {
	Scheme.findById( req.params.id )
	.then( function( scheme ) {
		if( !scheme ) return error( res, 'not found by update function' );
		return scheme.updateAttributes( req.body );
	})
	.then( function( scheme ) {
		res.json( scheme );
	});
}

function destroy( req, res ) {
  Scheme.findById( req.params.id )
  .then( function( scheme ){
    if( !scheme ) return error( res, 'not found by destroy function');
    return scheme.destroy();
  })
  .then( function(){
    res.redirect( '/' );
  });  
}

module.exports.index = index;
module.exports.show = show;
module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;