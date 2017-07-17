var express = require( 'express' );
var router = express.Router();
var playersController = require( '../controllers/players.js' );

router.get( '/api/players', playersController.index );

router.get( '/api/players/:id', playersController.show );

router.put( '/api/players/:id', playersController.bless );

module.exports = router;