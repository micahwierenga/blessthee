var express = require( 'express' );
var router = express.Router();
var playersController = require( '../controllers/players.js' );
var schemesController = require( '../controllers/schemes.js' );

// Player routes

router.get( '/api/players/:id', playersController.show );

router.get( '/api/players', playersController.index );

router.post( '/api/players', playersController.create );

router.put( '/api/players/:id', playersController.score );

router.delete( '/api/players/:id', playersController.destroy );

// Scheme routes

router.get( '/api/schemes/:id', schemesController.show );

router.get( '/api/schemes', schemesController.index );

router.post( '/api/schemes', schemesController.create );

router.put( '/api/schemes/:id', schemesController.update );

router.delete( '/api/schemes/:id', schemesController.destroy );

module.exports = router;