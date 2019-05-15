window.onload = function () {

var options = {
	animationEnabled: true,
	title: {
		text: "NAACL paper publications 2000 - 2018"
	},
	axisY: {
		title: "Number of Papers Published",
		suffix: "%",
		includeZero: false
	},
	axisX: {
		title: "Year"
	},
	data: [{
		type: "column",
		
		dataPoints: [
		
		
							
			{ label: '2000', y: 89 },
			{ label: '2001', y: 31 },
			{ label: '2003', y: 75 },	
			{ label: '2004', y: 43 },	
			{ label: '2006', y: 63 },	
			{ label: '2007', y: 72 },
			{ label: '2009', y: 75 },
			{ label: '2010', y: 147 },
			{ label: '2012', y: 97 },
			{ label: '2013', y: 140 },
			{ label: '2015', y: 186 },	
			{ label: '2016', y: 181 },
			{ label: '2018', y: 324 },
			
			
			
		]
	}]
};
$("#chartContainer").CanvasJSChart(options);

}