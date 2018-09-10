
class GeoPosition{

	constructor(latitude,longitude){
		this.lat=latitude;
		this.long=longitude;
	}

	getLatitude(){ return this.lat;}
	getLongitude(){ return this.long;}
}

module.exports= GeoPosition;