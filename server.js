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

app.listen( process.env.PORT || 3000, function() {
	console.log( 'Bless Thee App listening on localhost:3000' );
})