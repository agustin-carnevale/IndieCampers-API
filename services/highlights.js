const VanTrip = require('../models/VanTrip');

module.exports = (startingPoint, endPoint)=>{

	const vanTrip = new VanTrip(startingPoint, endPoint);
	const posibleRoutes = vanTrip.getPosibleRoutes();

	return posibleRoutes.map(route => route.getHighlights());

}