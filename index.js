const express = require('express');
const app = express();
const GeoPosition = require('./models/GeoPosition');
const highlights = require('./services/highlights');


app.get('/', (req,res)=>{

	const welcomeMessage = "Hello there, welcome!!! Please use this path --> /api/highlights/:latS/:longS/:latE/:longE to GET the list of highlights.";
	res.send(welcomeMessage);
});

app.get('/api/highlights/:latS/:longS/:latE/:longE', (req,res)=>{

	const startingPoint= new GeoPosition(req.params.latS,req.params.longS);
	const endPoint= new GeoPosition(req.params.latE,req.params.longE);
	
	const listOfHighlights= highlights(startingPoint,endPoint);
	res.send(listOfHighlights);

});


// app.get('/api/highlights/closest/:lat/:long', (req,res)=>{
// 	res.send();
// });


app.listen(5000);
