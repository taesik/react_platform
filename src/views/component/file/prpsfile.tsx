// PD File Format

export class PrpsFile
{
	public samplingSize = 128;
	public cycleSize = 60;
	public unitSize = this.samplingSize * this.cycleSize;
	private pdData : any;
	public hasData : boolean = false;			// 사용법이 이게 맞을까?

	constructor( samplingSize : number = 128, cycleSize : number = 60 )
	{
		this.samplingSize = samplingSize;
		this.cycleSize = cycleSize;
		this.unitSize = samplingSize * cycleSize;

		// console.log("samplingSize : "+this.samplingSize);
		// console.log("cycleSize : "+this.cycleSize);
	}

	// sampling , seconds 모두 0 부터
	getPointData( sampling : number, cycle : number, seconds : number)
	{
		if( !this.pdData )
			return 0;
		
		return this.pdData[ this.samplingSize * cycle * seconds + this.cycleSize * cycle + sampling];
	}

	getData( seconds : number = 0) : any []
	{
		if( !this.pdData)
			return [];
			
		return this.pdData.slice( this.unitSize * seconds, this.unitSize * (seconds + 1) );
	}

	getPdData()
	{
		return this.pdData;
	}

	// getData()
	// {
	// 	return this.pdData;
	// }

	setData( data : any )
	{
		this.pdData = data;
		this.hasData = true;
	}

	clearData()
	{
		this.pdData = undefined;
		this.hasData = false;
	}

}