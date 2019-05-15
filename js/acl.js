window.onload = function () {

var options = {
	animationEnabled: true,
	title: {
		text: "ACL paper publications 1979 - 2018"
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
		
		
			{ label: '1979', y: 28 },	
			{ label: '1980', y: 44 },	
			{ label: '1981', y: 36 },
			{ label: '1982', y: 39 },	
			{ label: '1983', y: 25 },
			{ label: '1984', y: 116},
			{ label: '1985', y: 40 },
			{ label: '1986', y: 41 },
			{ label: '1987', y: 34 },
			{ label: '1988', y: 35 },	
			{ label: '1989', y: 34 },
			{ label: '1990', y: 39 },
			{ label: '1991', y: 56 },
			{ label: '1992', y: 54 },
			{ label: '1993', y: 47 },
			{ label: '1994', y: 52 },
			{ label: '1995', y: 56 },
			{ label: '1996', y: 58 },	
			{ label: '1997', y: 73 },
			{ label: '1998', y: 122 },	
			{ label: '2000', y: 119 },
			{ label: '2001', y: 70 },
			{ label: '2002', y: 65 },
			{ label: '2003', y: 71 },	
			{ label: '2004', y: 88 },	
			{ label: '2005', y: 76 },
			{ label: '2006', y: 147 },	
			{ label: '2007', y: 131 },
			{ label: '2008', y: 187 },
			{ label: '2009', y: 214 },
			{ label: '2010', y: 230 },
			{ label: '2011', y: 292 },
			{ label: '2012', y: 183 },
			{ label: '2013', y: 328 },
			{ label: '2014', y: 286 },	
			{ label: '2015', y: 316 },	
			{ label: '2016', y: 328 },
			{ label: '2017', y: 302 },	
			{ label: '2018', y: 381 },
			
			
			
		]
	}]
};
$("#chartContainer").CanvasJSChart(options);

}