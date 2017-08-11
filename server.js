var express = require( 'express' );
var app = express();
var http = require( 'http' ).Server( app );
var io = require( 'socket.io' )( http );
var blessTheeRouter = require( './config/routes.js' );

var bodyParser = require( 'body-parser' );
app.use( bodyParser.json() );

app.use( blessTheeRouter );
app.use( express.static( 'public' ) );
app.use( function( req, res ) {
	res.sendFile( __dirname + '/public/index.html' );
});

io.on( 'connection', ( socket ) => {
	console.log( 'USER CONNECTED' );

	socket.on( 'disconnect', function() {
		console.log( 'USER DISCONNECTED' );
	});

	socket.on( 'add-message', ( message ) => {
		io.emit( 'message', {type: 'new-message', text: message} );
	});
});

http.listen( process.env.PORT || 3000, function() {
	console.log( 'Bless Thee App listening on localhost:3000' );
})