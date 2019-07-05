window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	title:{
		text: "",
		fontFamily: "arial black",
		fontColor: "#695A42"
	},
	axisX: {
		interval: 1,
		intervalType: "year"
	},
	axisY:{
		valueFormatString:"",
		gridColor: "#B6B1A8",
		tickColor: "#B6B1A8"
	},
	toolTip: {
		shared: true,
		content: toolTipContent
	},
	data: [{
		type: "stackedColumn",
		showInLegend: true,
		color: "#0303AC",
		name: "Long Papers",
		dataPoints: [
		
		
				{ y: 14, x: new Date(1996,0) },
				{ y: 23, x: new Date(1997,0) },
				{ y: 12, x: new Date(1998,0) },            
				{ y: 35, x: new Date(1999,0) }, 
				{ y: 27, x: new Date(2000,0) },
				{ y: 21, x: new Date(2001,0) },
				{ y: 41, x: new Date(2002,0) },            
				{ y: 28, x: new Date(2003,0) },
				{ y: 56, x: new Date(2004,0) },
				{ y: 127, x: new Date(2005,0) },
				{ y: 73, x: new Date(2006,0) },
				{ y: 131, x: new Date(2007,0) },
				{ y: 114, x: new Date(2008,0) },
				{ y: 163, x: new Date(2009,0) },
				{ y: 125, x: new Date(2010,0) },
				{ y: 149, x: new Date(2011,0) },
				{ y: 139, x: new Date(2012,0) },
				{ y: 205, x: new Date(2013,0) },
				{ y: 226, x: new Date(2014,0) },
				{ y: 312, x: new Date(2015,0) },
				{ y: 264, x: new Date(2016,0) },
				{ y: 323, x: new Date(2017,0) },
				{ y: 549, x: new Date(2018,0) }
				
				
		]
		},
		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Short Papers",
			color: "#e3f702",
			dataPoints: [
			
			
			
				{ y: 0, x: new Date(1996,0) },
				{ y: 0, x: new Date(1997,0) },
				{ y: 0, x: new Date(1998,0) },            
				{ y: 0, x: new Date(1999,0) }, 
				{ y: 0, x: new Date(2000,0) },
				{ y: 0, x: new Date(2001,0) },
				{ y: 0, x: new Date(2002,0) },            
				{ y: 0, x: new Date(2003,0) },
				{ y: 0, x: new Date(2004,0) },
				{ y: 0, x: new Date(2005,0) },
				{ y: 0, x: new Date(2006,0) },
				{ y: 0, x: new Date(2007,0) },
				{ y: 0, x: new Date(2008,0) },
				{ y: 0, x: new Date(2009,0) },
				{ y: 0, x: new Date(2010,0) },
				{ y: 0, x: new Date(2011,0) },
				{ y: 0, x: new Date(2012,0) },
				{ y: 0, x: new Date(2013,0) },
				{ y: 0, x: new Date(2014,0) },
				{ y: 0, x: new Date(2015,0) },
				{ y: 0, x: new Date(2016,0) },
				{ y: 0, x: new Date(2017,0) },
				{ y: 0, x: new Date(2018,0) }
			]
		},

		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Demo Paper",
			color: "#f70202",
			dataPoints: [
			
			
			{ y: 0, x: new Date(1996,0) },
				{ y: 0, x: new Date(1997,0) },
				{ y: 0, x: new Date(1998,0) },            
				{ y: 0, x: new Date(1999,0) }, 
				{ y: 0, x: new Date(2000,0) },
				{ y: 0, x: new Date(2001,0) },
				{ y: 0, x: new Date(2002,0) },            
				{ y: 0, x: new Date(2003,0) },
				{ y: 0, x: new Date(2004,0) },
				{ y: 0, x: new Date(2005,0) },
				{ y: 0, x: new Date(2006,0) },
				{ y: 0, x: new Date(2007,0) },
				{ y: 0, x: new Date(2008,0) },
				{ y: 0, x: new Date(2009,0) },
				{ y: 0, x: new Date(2010,0) },
				{ y: 0, x: new Date(2011,0) },
				{ y: 0, x: new Date(2012,0) },
				{ y: 0, x: new Date(2013,0) },
				{ y: 0, x: new Date(2014,0) },
				{ y: 0, x: new Date(2015,0) },
				{ y: 0, x: new Date(2016,0) },
				{ y: 22, x: new Date(2017,0) },
				{ y: 30, x: new Date(2018,0) }
			]
	}]
});
chart.render();







































var chart = new CanvasJS.Chart("chartContainer2", {
	animationEnabled: true,
	title:{
		text: "",
		fontFamily: "arial black",
		fontColor: "#695A42"
	},
	axisX: {
		interval: 1,
		intervalType: "year"
	},
	axisY:{
		valueFormatString:"",
		gridColor: "#B6B1A8",
		tickColor: "#B6B1A8"
	},
	toolTip: {
		shared: true,
		content: toolTipContent2
	},
	data: [{
		type: "stackedColumn",
		showInLegend: true,
		color: "#0303AC",
		name: "Old Authors",
		dataPoints: [
		
		
				{ y: 0, x: new Date(1996,0) },            
				{ y: 0.162, x: new Date(1997,0) },            
				{ y: 0.107, x: new Date(1998,0) },            
				{ y: 0.103, x: new Date(1999,0) }, 
				{ y: 0.122, x: new Date(2000,0) },
				{ y: 0.176, x: new Date(2001,0) },
				{ y: 0.282, x: new Date(2002,0) },            
				{ y: 0.333, x: new Date(2003,0) },
				{ y: 0.0241, x: new Date(2004,0) },
				{ y: 0.194, x: new Date(2005,0) },
				{ y: 0.288, x: new Date(2006,0) },
				{ y: 0.304, x: new Date(2007,0) },
				{ y: 0.378, x: new Date(2008,0) },
				{ y: 0.427, x: new Date(2009,0) },
				{ y: 0.443, x: new Date(2010,0) },
				{ y: 0.435, x: new Date(2011,0) },
				{ y: 0.485, x: new Date(2012,0) },
				{ y: 0.408, x: new Date(2013,0) },
				{ y: 0.433, x: new Date(2014,0) },
				{ y: 0.386, x: new Date(2015,0) },
				{ y: 0.420, x: new Date(2016,0) },
				{ y: 0.397,   x: new Date(2017,0) },
				{ y: 0.346, x: new Date(2018,0) }
				
				
		]
		},
		
		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "New Authors",
			color: "#f70202",
			dataPoints: [
			
			
			
				{ y: 1, x: new Date(1996,0) },              
				{ y: 0.837, x: new Date(1997,0) },                
				{ y: 0.892, x: new Date(1998,0) }, 
				{ y: 0.896, x: new Date(1999,0) },
				{ y: 0.877, x: new Date(2000,0) },
				{ y: 0.823, x: new Date(2001,0) },            
				{ y: 0.717, x: new Date(2002,0) },
				{ y: 0.666, x: new Date(2003,0) },
				{ y: 0.975, x: new Date(2004,0) },
				{ y: 0.805, x: new Date(2005,0) },
				{ y: 0.711, x: new Date(2006,0) },
				{ y: 0.695, x: new Date(2007,0) },
				{ y: 0.621, x: new Date(2008,0) },
				{ y: 0.572, x: new Date(2009,0) },
				{ y: 0.556, x: new Date(2010,0) },
				{ y: 0.564, x: new Date(2011,0) },
				{ y: 0.514, x: new Date(2012,0) },
				{ y: 0.591, x: new Date(2013,0) },
				{ y: 0.566, x: new Date(2014,0) },
				{ y: 0.613, x: new Date(2015,0) },
				{ y: 0.580, x: new Date(2016,0) },
				{ y: 0.603, x: new Date(2017,0) },
				{ y: 0.653, x: new Date(2018,0) }
			]
	}]
});
chart.render();
































var chart = new CanvasJS.Chart("chartContainer3", {
	animationEnabled: true,
	title:{
		text: "",
		fontFamily: "arial black",
		fontColor: "#0a040d"
	},
	axisX: {
		interval: 1,
		intervalType: "year"
	},
	axisY:{
		valueFormatString:"",
		gridColor: "#B6B1A8",
		tickColor: "#B6B1A8"
	},
	toolTip: {
		shared: true,
		content: toolTipContent
	},
	data: [{
		type: "stackedColumn",
		showInLegend: true,
		color: "#0303AC",
		name: "Avg. number of Papers per Author",
		dataPoints: [
			
			
			
			{ y: 0.583, x: new Date(1996,0) },
			{ y: 0.534, x: new Date(1997,0) },         
			{ y: 0.428, x: new Date(1998,0) },
			{ y: 0.432, x: new Date(1999,0) },
			{ y: 0.442, x: new Date(2000,0) },
			{ y: 0.411, x: new Date(2001,0) },
			{ y: 0.45, x: new Date(2002,0) },
			{ y: 0.451, x: new Date(2003,0) },
			{ y: 0.4, x: new Date(2004,0) },
			{ y: 0.389, x: new Date(2005,0) },
			{ y: 0.378, x: new Date(2006,0) },
			{ y: 0.367, x: new Date(2007,0) },
			{ y: 0.378, x: new Date(2008,0) },
			{ y: 0.357, x: new Date(2009,0) },
			{ y: 0.331, x: new Date(2010,0) },
			{ y: 0.299, x: new Date(2011,0) },
			{ y: 0.315, x: new Date(2012,0) },
			{ y: 0.307, x: new Date(2013,0) },
			{ y: 0.298, x: new Date(2014,0) },
			{ y: 0.293, x: new Date(2015,0) },
			{ y: 0.266, x: new Date(2016,0) },
			{ y: 0.2609, x: new Date(2017,0) },
			{ y: 0.235, x: new Date(2018,0) }
		]
		},
		]
});
chart.render();






































var chart = new CanvasJS.Chart("chartContainer4", {
	animationEnabled: true,
	title:{
		text: "",
		fontFamily: "arial black",
		fontColor: "#0a040d"
	},
	axisX: {
		interval: 1,
		intervalType: "year"
	},
	axisY:{
		valueFormatString:"",
		gridColor: "#B6B1A8",
		tickColor: "#B6B1A8"
	},
	toolTip: {
		shared: true,
		content: toolTipContent
	},
	data: [{
		type: "stackedColumn",
		showInLegend: true,
		color: "#0303AC",
		name: "Avg. number of Authors per Paper per Year",
		dataPoints: [
			
			
			
			{ y: 1.714, x: new Date(1996,0) },
			{ y: 1.869, x: new Date(1997,0) },       
			{ y: 2.333, x: new Date(1998,0) },
			{ y: 2.314, x: new Date(1999,0) },
			{ y: 2.259, x: new Date(2000,0) },
			{ y: 2.428, x: new Date(2001,0) },
			{ y: 2.219, x: new Date(2002,0) },
			{ y: 2.214, x: new Date(2003,0) },
			{ y: 2.5, x: new Date(2004,0) },
			{ y: 2.566, x: new Date(2005,0) },
			{ y: 2.643, x: new Date(2006,0) },
			{ y: 2.717, x: new Date(2007,0) },
			{ y: 2.6403, x: new Date(2008,0) },
			{ y: 2.797, x: new Date(2009,0) },
			{ y: 3.016, x: new Date(2010,0) },
			{ y: 3.335, x: new Date(2011,0) },
			{ y: 3.165, x: new Date(2012,0) },
			{ y: 3.25, x: new Date(2013,0) },
			{ y: 3.345, x: new Date(2014,0) },
			{ y: 3.4102, x: new Date(2015,0) },
			{ y: 3.74, x: new Date(2016,0) },
			{ y: 3.83, x: new Date(2017,0) },
			{ y: 4.24, x: new Date(2018,0) }
		]
		},
		]
});
chart.render();






































var chart = new CanvasJS.Chart("chartContainer5", {
	animationEnabled: true,
	title:{
		text: "",
		fontFamily: "arial black",
		fontColor: "#0a040d"
	},
	axisX: {
		interval: 1,
		intervalType: "year"
	},
	
	axisY:{
		valueFormatString:"",
		gridColor: "#B6B1A8",
		tickColor: "#B6B1A8"
	},
	toolTip: {
		shared: true,
		content: toolTipContent
	},
	data: [{
		type: "stackedColumn",
		showInLegend: true,
		color: "#0303AC",
		name: "Long Papers",
		dataPoints: [
			
			
			
			{ y: 8.214, x: new Date(1996,0) },
			{ y: 10.56, x: new Date(1997,0) },            
			{ y: 4.08, x: new Date(1998,0) },
			{ y: 8.85, x: new Date(1999,0) },
			{ y: 6.888, x: new Date(2000,0) },
			{ y: 8.619, x: new Date(2001,0) },
			{ y: 13.43, x: new Date(2002,0) },
			{ y: 15.32, x: new Date(2003,0) },
			{ y: 17.125, x: new Date(2004,0) },
			{ y: 22.93, x: new Date(2005,0) },
			{ y: 10.0, x: new Date(2006,0) },
			{ y: 23.39, x: new Date(2007,0) },
			{ y: 23.008, x: new Date(2008,0) },
			{ y: 24.319, x: new Date(2009,0) },
			{ y: 27.704, x: new Date(2010,0) },
			{ y: 33.939, x: new Date(2011,0) },
			{ y: 32.115, x: new Date(2012,0) },
			{ y: 30.317, x: new Date(2013,0) },
			{ y: 30.013, x: new Date(2014,0) },
			{ y: 27.701, x: new Date(2015,0) },
			{ y: 31.97, x: new Date(2016,0) },
			{ y: 36.29, x: new Date(2017,0) },
			{ y: 33.664, x: new Date(2018,0) }
		]
		},


		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Short Papers",
			color: "#C00C0C",
			dataPoints: [
			
			
			
			
			
			{ y: 0, x: new Date(1996,0) },
			{ y: 0, x: new Date(1997,0) },
			{ y: 0, x: new Date(1998,0) },
			{ y: 0, x: new Date(1999,0) },
			{ y: 0, x: new Date(2000,0) },
			{ y: 0, x: new Date(2001,0) },
			{ y: 0, x: new Date(2002,0) },
			{ y: 0, x: new Date(2003,0) },
			{ y: 0, x: new Date(2004,0) },
			{ y: 0, x: new Date(2005,0) },
			{ y: 0, x: new Date(2006,0) },
			{ y: 0, x: new Date(2007,0) },
			{ y: 0, x: new Date(2008,0) },
			{ y: 0, x: new Date(2009,0) },
			{ y: 0, x: new Date(2010,0) },
			{ y: 0, x: new Date(2011,0) },
			{ y: 0, x: new Date(2012,0) },
			{ y: 0, x: new Date(2013,0) },
			{ y: 0, x: new Date(2014,0) },
			{ y: 0, x: new Date(2015,0) },
			{ y: 0, x: new Date(2016,0) },
			{ y: 0, x: new Date(2017,0) },
			{ y: 0, x: new Date(2018,0) }
			
			
			
			
			]
	},
	{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Demo Papers",
			color: "#309000",
			dataPoints: [
			
			
			
			
			
			{ y: 0, x: new Date(1996,0) },
			{ y: 0, x: new Date(1997,0) },
			{ y: 0, x: new Date(1998,0) },
			{ y: 0, x: new Date(1999,0) },
			{ y: 0, x: new Date(2000,0) },
			{ y: 0, x: new Date(2001,0) },
			{ y: 0, x: new Date(2002,0) },
			{ y: 0, x: new Date(2003,0) },
			{ y: 0, x: new Date(2004,0) },
			{ y: 0, x: new Date(2005,0) },
			{ y: 0, x: new Date(2006,0) },
			{ y: 0, x: new Date(2007,0) },
			{ y: 0, x: new Date(2008,0) },
			{ y: 0, x: new Date(2009,0) },
			{ y: 0, x: new Date(2010,0) },
			{ y: 0, x: new Date(2011,0) },
			{ y: 0, x: new Date(2012,0) },
			{ y: 0, x: new Date(2013,0) },
			{ y: 0, x: new Date(2014,0) },
			{ y: 0, x: new Date(2015,0) },
			{ y: 0, x: new Date(2016,0) },
			{ y: 17.09, x: new Date(2017,0) },
			{ y: 15.63, x: new Date(2018,0) }
			
			
			
			]
	}
	
	
	
	
	]
});
chart.render();






























var chart = new CanvasJS.Chart("chartContainer6", {
	animationEnabled: true,
	title:{
		text: "",
		fontFamily: "arial black",
		fontColor: "#0a040d"
	},
	axisX: {
		interval: 1,
		intervalType: "year"
	},
	axisY:{
		valueFormatString:"",
		gridColor: "#B6B1A8",
		tickColor: "#B6B1A8"
	},
	toolTip: {
		shared: true,
		content: toolTipContent
	},
	data: [{
		type: "stackedColumn",
		showInLegend: true,
		color: "#0303AC",
		name: "EMNLP URLs per Paper 1996-2018",
		dataPoints: [
			
			
			
			{ y: 0.142, x: new Date(1996,0) },                    
			{ y: 0.043, x: new Date(1997,0) },
			{ y: 0,     x: new Date(1998,0) },
			{ y: 0.285, x: new Date(1999,0) },
			{ y: 0.321, x: new Date(2000,0) },
			{ y: 0.333, x: new Date(2001,0) },
			{ y: 0.536, x: new Date(2002,0) },
			{ y: 1.074, x: new Date(2003,0) },
			{ y: 1.173, x: new Date(2004,0) },
			{ y: 1.349, x: new Date(2005,0) },
			{ y: 1.315, x: new Date(2006,0) },
			{ y: 1.709, x: new Date(2007,0) },
			{ y: 1.681, x: new Date(2008,0) },
			{ y: 1.4907, x: new Date(2009,0) },
			{ y: 1.674, x: new Date(2010,0) },
			{ y: 1.616, x: new Date(2011,0) },
			{ y: 1.834, x: new Date(2012,0) },
			{ y: 1.906, x: new Date(2013,0) },
			{ y: 1.969, x: new Date(2014,0) },
			{ y: 2.151, x: new Date(2015,0) },
			{ y: 2.114, x: new Date(2016,0) },
			{ y: 3.0319, x: new Date(2017,0) },
			{ y: 2.143, x: new Date(2018,0) }
		]
		},
		]
});
chart.render();











































var chart = new CanvasJS.Chart("chartContainer7", {
	animationEnabled: true,
	title:{
		text: "",
		fontFamily: "arial black",
		fontColor: "#0a040d"
	},
	axisX: {
		interval: 1,
		intervalType: "year"
	},
	axisY:{
		valueFormatString:"",
		gridColor: "#B6B1A8",
		tickColor: "#B6B1A8"
	},
	toolTip: {
		shared: true,
		content: toolTipContent
	},
	data: [{
		type: "stackedColumn",
		showInLegend: true,
		color: "#0303AC",
		name: "EMNLP : Avg. number of URLs in footnote per Paper per Year",
		dataPoints: [
			
			
			
			{ y: 0, x: new Date(1996,0) },         
			{ y: 0, x: new Date(1997,0) },
			{ y: 0, x: new Date(1998,0) },
			{ y: 0, x: new Date(1999,0) },
			{ y: 0.0, x: new Date(2000,0) },
			{ y: 0.0, x: new Date(2001,0) },
			{ y: 0.365, x: new Date(2002,0) },
			{ y: 0.592, x: new Date(2003,0) },
			{ y: 0.478, x: new Date(2004,0) },
			{ y: 0.658, x: new Date(2005,0) },
			{ y: 0.616, x: new Date(2006,0) },
			{ y: 0.854, x: new Date(2007,0) },
			{ y: 0.991, x: new Date(2008,0) },
			{ y: 0.889, x: new Date(2009,0) },
			{ y: 1.0, x: new Date(2010,0) },
			{ y: 0.958, x: new Date(2011,0) },
			{ y: 1.071, x: new Date(2012,0) },
			{ y: 1.097, x: new Date(2013,0) },
			{ y: 1.181, x: new Date(2014,0) },
			{ y: 1.254, x: new Date(2015,0) },
			{ y: 1.239, x: new Date(2016,0) },
			{ y: 1.368, x: new Date(2017,0) },
			{ y: 1.226, x: new Date(2018,0) }
		]
		},
		]
});
chart.render();




























var chart = new CanvasJS.Chart("chartContainer8", {
	animationEnabled: true,
	title:{
		text: "",
		fontFamily: "arial black",
		fontColor: "#0a040d"
	},
	axisX: {
		interval: 1,
		intervalType: "year"
	},
	axisY:{
		valueFormatString:"",
		gridColor: "#B6B1A8",
		tickColor: "#B6B1A8"
	},
	toolTip: {
		shared: true,
		content: toolTipContent
	},
	data: [{
		type: "stackedColumn",
		showInLegend: true,
		color: "#0303AC",
		name: "EMNLP : Avg. number of Tables per Paper per Year",
		dataPoints: [
			
			
			
			{ y: 5.28, x: new Date(1996,0) },
			{ y: 3.0, x: new Date(1997,0) },
			{ y: 3.307, x: new Date(1998,0) },
			{ y: 4.514, x: new Date(1999,0) },
			{ y: 4.14, x: new Date(2000,0) },                 
			{ y: 1.52, x: new Date(2001,0) },
			{ y: 2.82, x: new Date(2002,0) },
			{ y: 3.518, x: new Date(2003,0) },
			{ y: 4.043, x: new Date(2004,0) },
			{ y: 3.468, x: new Date(2005,0) },
			{ y: 4.369, x: new Date(2006,0) },
			{ y: 4.152, x: new Date(2007,0) },
			{ y: 4.132, x: new Date(2008,0) },
			{ y: 4.687, x: new Date(2009,0) },
			{ y: 4.951, x: new Date(2010,0) },
			{ y: 4.575, x: new Date(2011,0) },
			{ y: 4.884, x: new Date(2012,0) },
			{ y: 4.485, x: new Date(2013,0) },
			{ y: 4.438, x: new Date(2014,0) },
			{ y: 3.871, x: new Date(2015,0) },
			{ y: 3.231, x: new Date(2016,0) },
			{ y: 4.504, x: new Date(2017,0) },
			{ y: 4.569, x: new Date(2018,0) }
		]
		},
		]
});
chart.render();










































var chart = new CanvasJS.Chart("chartContainer9", {
	animationEnabled: true,
	title:{
		text: "",
		fontFamily: "arial black",
		fontColor: "#0a040d"
	},
	axisX: {
		interval: 1,
		intervalType: "year"
	},
	axisY:{
		valueFormatString:"",
		gridColor: "#B6B1A8",
		tickColor: "#B6B1A8"
	},
	toolTip: {
		shared: true,
		content: toolTipContent
	},
	data: [{
		type: "stackedColumn",
		showInLegend: true,
		color: "#0303AC",
		name: "EMNLP : Avg. number of Figures per Paper per Year",
		dataPoints: [
			
			
			
			{ y: 4.35, x: new Date(1996,0) },
			{ y: 4.043, x: new Date(1997,0) },                
			{ y: 2.46, x: new Date(1998,0) },
			{ y: 2.714, x: new Date(1999,0) },
			{ y: 3.821, x: new Date(2000,0) },                 
			{ y: 0.761, x: new Date(2001,0) },
			{ y: 2.78, x: new Date(2002,0) },
			{ y: 3.148, x: new Date(2003,0) },
			{ y: 2.0, x: new Date(2004,0) },
			{ y: 2.817, x: new Date(2005,0) },
			{ y: 3.068, x: new Date(2006,0) },
			{ y: 3.015, x: new Date(2007,0) },
			{ y: 3.858, x: new Date(2008,0) },
			{ y: 3.42, x: new Date(2009,0) },
			{ y: 3.68, x: new Date(2010,0) },
			{ y: 3.56, x: new Date(2011,0) },
			{ y: 3.309, x: new Date(2012,0) },
			{ y: 3.053, x: new Date(2013,0) },
			{ y: 3.163, x: new Date(2014,0) },
			{ y: 2.585, x: new Date(2015,0) },
			{ y: 2.52, x: new Date(2016,0) },
			{ y: 3.018, x: new Date(2017,0) },
			{ y: 3.076, x: new Date(2018,0) }
		]
		},
		]
});
chart.render();


































var chart = new CanvasJS.Chart("chartContainer10", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	title:{
		text: ""
	},
	axisY: {
		title: ""
	},
	data: [{        
		type: "column",  
      	color: "#0303AC",                                              
		showInLegend: true, 
		legendMarkerColor: "grey",
		name: "EMNLP : Most Popular primary URL domains & their Frequencies",
		legendText: "",
		dataPoints: [      
			{ y: 825, label: 'github.com' },                           
			{ y: 315,  label: 'www.aclweb.org' },
			{ y: 193,  label: 'nlp.stanford.edu' },    
			{ y: 221,  label: 'google.com' },            
			{ y: 118,  label: 'en.wikipedia.org' },
			{ y: 101, label: 'www.statmt.org' },
			{ y: 96,  label: 'arxiv.org' },
			{ y: 101, label: 'www.nist.gov' },
			{ y: 42,  label: 'mallet.cs.umass.edu' },
			{ y: 42,  label: 'www.cs.cmu.edu' },
			{ y: 104,  label: 'upenn.edu' },
			{ y: 36,  label: 'www.csie.ntu.edu.tw' },
			{ y: 36, label: 'sourceforge.net' },
			{ y: 29,  label: 'svmlight.joachims.org' },
			{ y: 28,  label: 'sourceforge.net' },
			{ y: 26, label: 'www.cs.cornell.edu' },
			{ y: 25,  label: 'cogcomp.cs.illinois.edu' },
			{ y: 23,  label: 'www.mturk.com' },
			{ y: 23,  label: 'lucene.apache.org' },
			{ y: 23,  label: 'www.lsi.upc.edu' },
			{ y: 23,  label: 'homepages.inf.ed.ac.uk' }
		]
	}]
});
chart.render();





























var chart = new CanvasJS.Chart("chartContainer11", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	title:{
		text: ""
	},
	axisY: {
		title: ""
	},
	data: [{        
		type: "column",  
      	color: "#0303AC",                                              
		showInLegend: true, 
		legendMarkerColor: "grey",
		name: "EMNLP : Top Unique GitHub Pages",
		legendText: "",
		dataPoints: [      
			{ y: 7, label: 'UKPLab/' },
			{ y: 11,label: 'facebookresearch/' },          
			{ y: 5,  label: 'facebook/NAMAS' },
			{ y: 5,  label: 'OpenNMT/OpenNMT-py' },
			{ y: 4,  label: 'edx/ease' },
			{ y: 4, label: 'mynlp/ccg2lambda' },
			{ y: 4,  label: 'fxsjy/jieba' },
			{ y: 4, label: 'nmrksic/' },
			{ y: 4,  label: 'tensorflow/nmt' },
			{ y: 4,  label: 'gabrielStanovsky/' },
			{ y: 3,  label: 'saffsd/langid.py' },
			{ y: 3,  label: 'moses-smt/mosesdecoder/' },
			{ y: 3, label: 'glorotxa/SME' },
			{ y: 3,  label: 'piskvorky/gensim/' },
			{ y: 3,  label: 'mfaruqui/' },
			{ y: 3, label: 'douwekiela/mmfeat' },
			{ y: 3,  label: 'knowitall/openie ' },
			{ y: 2,  label: 'Leonard-Xu/CWE ' },
			{ y: 3,  label: 'isi-nlp/Zoph' },
			{ y: 3,  label: 'clab/cnn' }
		]
	}]
});
chart.render();
























var chart = new CanvasJS.Chart("chartContainer12", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	title:{
		text: ""
	},
	axisY: {
		title: ""
	},
	data: [{        
		type: "column",  
      	color: "#0303AC",                                              
		showInLegend: true, 
		legendMarkerColor: "grey",
		name: "EMNLP : Top University Pages",
		legendText: "",
		dataPoints: [                                         
			{ y: 79, label: 'University of Washington' },                         
			{ y: 73,label: 'Carnegie Mellon University Silicon Valley' },
			{ y: 45,  label: 'Stanford University' },
			{ y: 44,  label: 'Penn Museum' },
			{ y: 42,  label: 'Microsoft Research Asia' },
			{ y: 39, label: 'Johns Hopkins Hospital' },
			{ y: 31,  label: 'University of Maryland' },
			{ y: 30, label: 'Microsoft Research' },
			{ y: 29,  label: 'UC Berkeley' },
			{ y: 28,  label: 'Columbia University' },
			{ y: 26,  label: 'Singapore University of Technology and Design' },
			{ y: 25,  label: 'IISc' },
			{ y: 24, label: 'Cornell University' },
			{ y: 23,  label: 'IBM' },
			{ y: 22,  label: 'University of Michigan' },
			{ y: 21, label: 'Brown University' },
			{ y: 20,  label: 'Institute for Logic' },
			{ y: 20,  label: 'Harbin Institute of Technology' },
			{ y: 20,  label: 'University of Edinburgh' },
			{ y: 19,  label: 'MIT' }
		]
	}]
});
chart.render();












































var chart = new CanvasJS.Chart("chartContainer13", {
	animationEnabled: true,
	title:{
		text: "",
		fontFamily: "arial black",
		fontColor: "#0a040d"
	},
	axisX: {
		interval: 1,
		intervalType: "year"
	},
	
	axisY:{
		valueFormatString:"",
		gridColor: "#B6B1A8",
		tickColor: "#B6B1A8"
	},
	toolTip: {
		shared: true,
		content: toolTipContent
	},
	data: [{
		type: "stackedColumn",
		showInLegend: true,
		color: "#0303AC",
		name: "US",
		dataPoints: [
			
			
			
			{ y: 11, x: new Date(1996,0) },
			{ y: 13, x: new Date(1997,0) },                       
			{ y: 5, x: new Date(1998,0) },
			{ y: 11, x: new Date(1999,0) },
			{ y: 6, x: new Date(2000,0) },
			{ y: 4, x: new Date(2001,0) },
			{ y: 11, x: new Date(2002,0) },
			{ y: 12, x: new Date(2003,0) },
			{ y: 3, x: new Date(2004,0) },
			{ y: 31, x: new Date(2005,0) },
			{ y: 2, x: new Date(2006,0) },
			{ y: 23, x: new Date(2007,0) },
			{ y: 22, x: new Date(2008,0) },
			{ y: 21, x: new Date(2009,0) },
			{ y: 30, x: new Date(2010,0) },
			{ y: 32, x: new Date(2011,0) },
			{ y: 35, x: new Date(2012,0) },
			{ y: 35, x: new Date(2013,0) },
			{ y: 50, x: new Date(2014,0) },
			{ y: 76, x: new Date(2015,0) },
			{ y: 75, x: new Date(2016,0) },
			{ y: 73, x: new Date(2017,0) },
			{ y: 159, x: new Date(2018,0) }
		]
		},


		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "UK",
			color: "#e3f702",
			dataPoints: [
			
			
			
			
			
			{ y: 0, x: new Date(1996,0) },
			{ y: 2, x: new Date(1997,0) },                    
			{ y: 0, x: new Date(1998,0) },
			{ y: 2, x: new Date(1999,0) },
			{ y: 3, x: new Date(2000,0) },
			{ y: 0, x: new Date(2001,0) },
			{ y: 1, x: new Date(2002,0) },
			{ y: 1, x: new Date(2003,0) },
			{ y: 0, x: new Date(2004,0) },
			{ y: 9, x: new Date(2005,0) },
			{ y: 1, x: new Date(2006,0) },
			{ y: 0, x: new Date(2007,0) },
			{ y: 1, x: new Date(2008,0) },
			{ y: 6, x: new Date(2009,0) },
			{ y: 0, x: new Date(2010,0) },
			{ y: 8, x: new Date(2011,0) },
			{ y: 2, x: new Date(2012,0) },
			{ y: 4, x: new Date(2013,0) },
			{ y: 3, x: new Date(2014,0) },
			{ y: 9, x: new Date(2015,0) },
			{ y: 13, x: new Date(2016,0) },
			{ y: 19, x: new Date(2017,0) },
			{ y: 1, x: new Date(2018,0) }
			
			
			
			
			]
	},
	
		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Australia",
			color: "#157539",
			dataPoints: [
			
			
			
			
			
			{ y: 0, x: new Date(1996,0) },
			{ y: 0, x: new Date(1997,0) },                            
			{ y: 0, x: new Date(1998,0) },
			{ y: 1, x: new Date(1999,0) },
			{ y: 0, x: new Date(2000,0) },
			{ y: 0, x: new Date(2001,0) },
			{ y: 0, x: new Date(2002,0) },
			{ y: 0, x: new Date(2003,0) },
			{ y: 0, x: new Date(2004,0) },
			{ y: 0, x: new Date(2005,0) },
			{ y: 1, x: new Date(2006,0) },
			{ y: 1, x: new Date(2007,0) },
			{ y: 0, x: new Date(2008,0) },
			{ y: 0, x: new Date(2009,0) },
			{ y: 0, x: new Date(2010,0) },
			{ y: 1, x: new Date(2011,0) },
			{ y: 2, x: new Date(2012,0) },
			{ y: 2, x: new Date(2013,0) },
			{ y: 4, x: new Date(2014,0) },
			{ y: 0, x: new Date(2015,0) },
			{ y: 4, x: new Date(2016,0) },
			{ y: 6, x: new Date(2017,0) },
			{ y: 5, x: new Date(2018,0) }
			
			
			
			
			]
	},
	{        
			type: "stackedColumn",
			showInLegend: true,
			name: "India",
			color: "#f70202",
			dataPoints: [
			
			
			
			
			
			{ y: 1, x: new Date(1996,0) },       
			{ y: 1, x: new Date(1997,0) },
			{ y: 1, x: new Date(1998,0) },
			{ y: 2, x: new Date(1999,0) },
			{ y: 1, x: new Date(2000,0) },
			{ y: 1, x: new Date(2001,0) },
			{ y: 0, x: new Date(2002,0) },
			{ y: 0, x: new Date(2003,0) },
			{ y: 0, x: new Date(2004,0) },
			{ y: 1, x: new Date(2005,0) },
			{ y: 0, x: new Date(2006,0) },
			{ y: 3, x: new Date(2007,0) },
			{ y: 0, x: new Date(2008,0) },
			{ y: 0, x: new Date(2009,0) },
			{ y: 0, x: new Date(2010,0) },
			{ y: 0, x: new Date(2011,0) },
			{ y: 1, x: new Date(2012,0) },
			{ y: 0, x: new Date(2013,0) },
			{ y: 4, x: new Date(2014,0) },
			{ y: 6, x: new Date(2015,0) },
			{ y: 3, x: new Date(2016,0) },
			{ y: 10, x: new Date(2017,0) },
			{ y: 6, x: new Date(2018,0) }
			
			
			
			
			]
	}
	
	
	
	
	]
});
chart.render();


















































function toolTipContent(e) {
	var str = "";
	var total = 0;
	var str2, str3;
	for (var i = 0; i < e.entries.length; i++){
		var  str1 = "<span style= \"color:"+e.entries[i].dataSeries.color + "\"> "+e.entries[i].dataSeries.name+"</span>: <strong>"+e.entries[i].dataPoint.y+"</strong><br/>";
		total = e.entries[i].dataPoint.y + total;
		str = str.concat(str1);
	}
	str2 = "<span style = \"color:DodgerBlue;\"><strong>"+(e.entries[0].dataPoint.x).getFullYear()+"</strong></span><br/>";
	total = Math.round(total * 100) / 100;
	str3 = "<span style = \"color:Tomato\">Total:</span><strong> "+total+"</strong><br/>";
	return (str2.concat(str)).concat(str3);
}






function toolTipContent2(e) {
	var str = "";
	var total = 0;
	var str2, str3;
	for (var i = 0; i < e.entries.length; i++){
		var  str1 = "<span style= \"color:"+e.entries[i].dataSeries.color + "\"> "+e.entries[i].dataSeries.name+"</span>: <strong>"+e.entries[i].dataPoint.y+"</strong><br/>";
		total = e.entries[i].dataPoint.y + total;
		str = str.concat(str1);
	}
	str2 = "<span style = \"color:DodgerBlue;\"><strong>"+(e.entries[0].dataPoint.x).getFullYear()+"</strong></span><br/>";
	total = Math.round(total * 100) / 100;
	str3 = "<span style = \"color:Tomato\">Total %:</span><strong> "+total+"</strong><br/>";
	return (str2.concat(str)).concat(str3);
}

}