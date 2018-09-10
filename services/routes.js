const Route = require('../models/Route');
const PointOfInterest = require('../models/PointOfInterest');
const GeoPosition = require('../models/GeoPosition');


//This module is just faking out the real process of calculating the 
//posible routes between to given Points. It should contain the real logic, 
//fetching of real data, etc..

module.exports = function (startingPoint,endPoint){
		
	//To pretend asincronism of a real Fetch
	//await setTimeout(()=>{},2000); 

	//Dummy data to fill content as example
	const posibleRoutes = [ 

 		new Route([
			new PointOfInterest(new GeoPosition('-21.892084','-48.719458'),'Details of Point 1'),
			new PointOfInterest(new GeoPosition('-21.892084','-48.719458'),'Details of Point 2'),
			new PointOfInterest(new GeoPosition('-21.892084','-48.719458'),'Details of Point 3'),
			new PointOfInterest(new GeoPosition('-34.646731','-58.458747'),'Details of Point 4')
		], 'Highlights of Route 1'),

		new Route([
			new PointOfInterest(new GeoPosition('-21.892084','-48.719458'),'Details of Point 5'),
			new PointOfInterest(new GeoPosition('-30.646731','-13.458747'),'Details of Point 6'),
			new PointOfInterest(new GeoPosition('-44.892084','-10.719458'),'Details of Point 7')
		], 'Highlights of Route 2'),

		new Route([
			new PointOfInterest(new GeoPosition('-44.892084','-10.719458'),'Details of Point 8'),
			new PointOfInterest(new GeoPosition('34.646731','52.453497'),'Details of Point 9')		
		], 'Highlights of Route 3'),

		new Route([
			new PointOfInterest(new GeoPosition('-21.892084','-48.719458'),'Details of Point 10'),
			new PointOfInterest(new GeoPosition('-21.892084','-48.719458'),'Details of Point 11')
		], 'Highlights of Route 4')

	]

	return posibleRoutes;
}
