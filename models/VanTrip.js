const fetchRoutes = require('../services/routes');

class VanTrip{

	constructor(startingPoint,endPoint){
		this.startingPoint=startingPoint;
		this.endPoint=endPoint;

		this.posibleRoutes = fetchRoutes(startingPoint,endPoint);
	}

	getStartingPoint(){ return this.startingPoint;}
	getEndPoint(){ return this.endPoint;}
	getPosibleRoutes(){return this.posibleRoutes}
}

module.exports= VanTrip;