var express = require( 'express' );
var router = express.Router();
var playersController = require( '../controllers/players.js' );

router.get( '/api/players', playersController.index );

router.post( '/api/players', playersController.create );

// router.get( '/api/players/:id', playersController.show );

router.put( '/api/players/:id', playersController.score );

router.delete( '/api/players/:id', playersController.destroy );

module.exports = router;