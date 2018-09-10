
class PointOfInterest{

	constructor(position,details){
		this.position=position;
		this.details=details;
	}

	getPosition(){ return this.position;}
	getDetails(){ return this.details;}
}

module.exports= PointOfInterest;