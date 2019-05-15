window.onload = function () {

var options = {
	animationEnabled: true,
	title: {
		text: "EMNLP paper publications 1996 - 2018"
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
		
		
			{ label: '1996', y: 15 },	
			{ label: '1997', y: 23 },
			{ label: '1998', y: 13 },
			{ label: '1999', y: 35 },				
			{ label: '2000', y: 29 },
			{ label: '2001', y: 22 },
			{ label: '2002', y: 41 },
			{ label: '2003', y: 28 },	
			{ label: '2004', y: 24 },	
			{ label: '2005', y: 127 },
			{ label: '2006', y: 73 },	
			{ label: '2007', y: 131 },
			{ label: '2008', y: 114 },
			{ label: '2009', y: 175 },
			{ label: '2010', y: 125 },
			{ label: '2011', y: 149 },
			{ label: '2012', y: 139 },
			{ label: '2013', y: 205 },
			{ label: '2014', y: 226 },	
			{ label: '2015', y: 312 },	
			{ label: '2016', y: 264 },
			{ label: '2017', y: 323 },	
			{ label: '2018', y: 549 },
			
			
			
		]
	}]
};
$("#chartContainer").CanvasJSChart(options);

}