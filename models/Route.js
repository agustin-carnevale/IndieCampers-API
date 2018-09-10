
class Route{

	constructor(pointsOfInterest,highlights){
		this.interestingPoints=pointsOfInterest;
		this.highlights=highlights;
	}

	getInterestingPoints(){ return this.interestingPoints;}
	getHighlights(){ return this.highlights;}
}

module.exports= Route;