var express = require( 'express' );
var app = express();
var blessTheeRouter = require( './config/routes.js' );

var bodyParser = require( 'body-parser' );
app.use( bodyParser.json() );

app.use( blessTheeRouter );
app.use( express.static( 'public' ) );
app.use( function( req, res ) {
	res.sendFile( __dirname + '/public/index.html' );
});

app.listen( 3000, function() {
	console.log( 'Bless Thee App listening on localhost:3000' );
})


// // Serves static files from public folder
// app.use( express.static( __dirname + '/public' ) );

// var bodyParser = require( 'body-parser' );
// app.use( bodyParser.urlencoded( { extended: true } ) );
// app.use( bodyParser.json() );


// // Database
// var db = require( './models' );


// // HTML Endpoint
// app.get( '/', function homepage( req, res ) {
// 	res.sendFile( __dirname + '/views/index.html' );
// });


// // Endpoints
// app.get( '/api', function apiIndex ( req, res ) {
// 	res.json({
// 		message: 'Welcome to Bless Thee',
// 		base_url: 'http://bless-thee.herokuapp.com',
// 		endpoints: [
// 			{ 
// 				method: 'GET', 
// 				path: '/api',
// 				description: 'Describes available endpoints'
// 			}
// 		]
// 	});
// });

// app.get( '/api/players', function getPlayers( req, res ) {
// 	db.Player.find( {}, function( err, players ) {
// 		if( err ) { return console.log( 'getPlayers error: ' + err ); }
// 		res.json( players );
// 	});
// });

// app.post( '/api/players', function createPlayer( req, res ) {
// 	db.Player.create( req.body, function( err, player ) {
// 		res.json( player );
// 	});
// });


// // Server
// app.listen( process.env.PORT || 3000, function() {
// 	console.log( 'Bless Thee server is running on http://localhost:3000/' );
// });