window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
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
			
			
			{ y: 28, x: new Date(1979,0) },
			{ y: 44, x: new Date(1980,0) },
			{ y: 36, x: new Date(1981,0) },
			{ y: 39, x: new Date(1982,0) },
			{ y: 25, x: new Date(1983,0) },
			{ y: 116, x: new Date(1984,0) },
			{ y: 40, x: new Date(1985,0) },
			{ y: 41, x: new Date(1986,0) },
			{ y: 34, x: new Date(1987,0) },
			{ y: 35, x: new Date(1988,0) },
			{ y: 34, x: new Date(1989,0) },
			{ y: 39, x: new Date(1990,0) },
			{ y: 56, x: new Date(1991,0) },
			{ y: 54, x: new Date(1992,0) },
			{ y: 47, x: new Date(1993,0) },
			{ y: 52, x: new Date(1994,0) },
			{ y: 56, x: new Date(1995,0) },
			{ y: 58, x: new Date(1996,0) },
			{ y: 73, x: new Date(1997,0) },
			{ y: 122, x: new Date(1998,0) },
			{ y: 84, x: new Date(1999,0) },
			{ y: 119, x: new Date(2000,0) },
			{ y: 70, x: new Date(2001,0) },
			{ y: 65, x: new Date(2002,0) },
			{ y: 71, x: new Date(2003,0) },
			{ y: 88, x: new Date(2004,0) },
			{ y: 76, x: new Date(2005,0) },
			{ y: 147, x: new Date(2006,0) },
			{ y: 131, x: new Date(2007,0) },
			{ y: 120, x: new Date(2008,0) },
			{ y: 122, x: new Date(2009,0) },
			{ y: 161, x: new Date(2010,0) },
			{ y: 292, x: new Date(2011,0) },
			{ y: 112, x: new Date(2012,0) },
			{ y: 175, x: new Date(2013,0) },
			{ y: 148, x: new Date(2014,0) },
			{ y: 175, x: new Date(2015,0) },
			{ y: 232, x: new Date(2016,0) },
			{ y: 196, x: new Date(2017,0) },
			{ y: 257, x: new Date(2018,0) }
		]
		},


		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Short Papers",
			color: "#e3f702",
			dataPoints: [
			
			
			
			
			{ y: 0, x: new Date(1979,0) },
			{ y: 0, x: new Date(1980,0) },
			{ y: 0, x: new Date(1981,0) },
			{ y: 0, x: new Date(1982,0) },
			{ y: 0, x: new Date(1983,0) },
			{ y: 0, x: new Date(1984,0) },
			{ y: 0, x: new Date(1985,0) },
			{ y: 0, x: new Date(1986,0) },
			{ y: 0, x: new Date(1987,0) },
			{ y: 0, x: new Date(1988,0) },
			{ y: 0, x: new Date(1989,0) },
			{ y: 0, x: new Date(1990,0) },
			{ y: 0, x: new Date(1991,0) },
			{ y: 0 , x: new Date(1992,0) },
			{ y: 0, x: new Date(1993,0) },
			{ y: 0, x: new Date(1994,0) },
			{ y: 0, x: new Date(1995,0) },
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
			{ y: 69, x: new Date(2008,0) },
			{ y: 94, x: new Date(2009,0) },
			{ y: 71, x: new Date(2010,0) },
			{ y: 0, x: new Date(2011,0) },
			{ y: 77, x: new Date(2012,0) },
			{ y: 155, x: new Date(2013,0) },
			{ y: 140, x: new Date(2014,0) },
			{ y: 145, x: new Date(2015,0) },
			{ y: 98, x: new Date(2016,0) },
			{ y: 108, x: new Date(2017,0) },
			{ y: 126, x: new Date(2018,0) }
			
			
			
			
			]
	},
	{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Demo Papers",
			color: "#f70202",
			dataPoints: [
			
			
			
			
			{ y: 0, x: new Date(1979,0) },
			{ y: 0, x: new Date(1980,0) },
			{ y: 0, x: new Date(1981,0) },
			{ y: 0, x: new Date(1982,0) },
			{ y: 0, x: new Date(1983,0) },
			{ y: 0, x: new Date(1984,0) },
			{ y: 0, x: new Date(1985,0) },
			{ y: 0, x: new Date(1986,0) },
			{ y: 0, x: new Date(1987,0) },
			{ y: 0, x: new Date(1988,0) },
			{ y: 0, x: new Date(1989,0) },
			{ y: 0, x: new Date(1990,0) },
			{ y: 0, x: new Date(1991,0) },
			{ y: 0 , x: new Date(1992,0) },
			{ y: 0, x: new Date(1993,0) },
			{ y: 0, x: new Date(1994,0) },
			{ y: 0, x: new Date(1995,0) },
			{ y: 0, x: new Date(1996,0) },
			{ y: 0, x: new Date(1997,0) },
			{ y: 0, x: new Date(1998,0) },
			{ y: 0, x: new Date(1999,0) },
			{ y: 0, x: new Date(2000,0) },
			{ y: 0, x: new Date(2001,0) },
			{ y: 0, x: new Date(2002,0) },
			{ y: 0, x: new Date(2003,0) },
			{ y: 35, x: new Date(2004,0) },
			{ y: 32, x: new Date(2005,0) },
			{ y: 0, x: new Date(2006,0) },
			{ y: 58, x: new Date(2007,0) },
			{ y: 10, x: new Date(2008,0) },
			{ y: 12, x: new Date(2009,0) },
			{ y: 15, x: new Date(2010,0) },
			{ y: 25, x: new Date(2011,0) },
			{ y: 30, x: new Date(2012,0) },
			{ y: 35, x: new Date(2013,0) },
			{ y: 22, x: new Date(2014,0) },
			{ y: 26, x: new Date(2015,0) },
			{ y: 29, x: new Date(2016,0) },
			{ y: 22, x: new Date(2017,0) },
			{ y: 25, x: new Date(2018,0) }
			
			
			
			
			]
	}
	
	
	
	
	]
});
chart.render();
















var chart = new CanvasJS.Chart("chartContainer2", {
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
		name: "Old Authors",
		dataPoints: [
			
			
			{ y: 0, x: new Date(1979,0) },
			{ y: 0.034, x: new Date(1980,0) },
			{ y: 0.282, x: new Date(1981,0) },
			{ y: 0.245, x: new Date(1982,0) },
			{ y: 0.411, x: new Date(1983,0) },
			{ y: 0.165, x: new Date(1984,0) },
			{ y: 0.35, x: new Date(1985,0) },
			{ y: 0.271, x: new Date(1986,0) },
			{ y: 0.4310, x: new Date(1987,0) },
			{ y: 0.4262, x: new Date(1988,0) },
			{ y: 0.333, x: new Date(1989,0) },
			{ y: 0.333, x: new Date(1990,0) },
			{ y: 0.29, x: new Date(1991,0) },
			{ y: 0.222, x: new Date(1992,0) },
			{ y: 0.279, x: new Date(1993,0) },
			{ y: 0.3855, x: new Date(1994,0) },
			{ y: 0.3095, x: new Date(1995,0) },
			{ y: 0.444, x: new Date(1996,0) },
			{ y: 0.38805, x: new Date(1997,0) },
			{ y: 0.218, x: new Date(1998,0) },
			{ y: 0.3529, x: new Date(1999,0) },
			{ y: 0.3096, x: new Date(2000,0) },
			{ y: 0.363, x: new Date(2001,0) },
			{ y: 0.4246, x: new Date(2002,0) },
			{ y: 0.421, x: new Date(2003,0) },
			{ y: 0.405, x: new Date(2004,0) },
			{ y: 0.416, x: new Date(2005,0) },
			{ y: 0.418, x: new Date(2006,0) },
			{ y: 0.371, x: new Date(2007,0) },
			{ y: 0.434, x: new Date(2008,0) },
			{ y: 0.406, x: new Date(2009,0) },
			{ y: 0.4784, x: new Date(2010,0) },
			{ y: 0.4598, x: new Date(2011,0) },
			{ y: 0.509, x: new Date(2012,0) },
			{ y: 0.4649, x: new Date(2013,0) },
			{ y: 0.545, x: new Date(2014,0) },
			{ y: 0.4388, x: new Date(2015,0) },
			{ y: 0.479, x: new Date(2016,0) },
			{ y: 0.469, x: new Date(2017,0) },
			{ y: 0.407, x: new Date(2018,0) }
		]
		},


		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "New Authors",
			color: "#e83407",
			dataPoints: [
			
			
			
			
			{ y: 1, x: new Date(1979,0) },
			{ y: 0.965, x: new Date(1980,0) },
			{ y: 0.7179, x: new Date(1981,0) },
			{ y: 0.754, x: new Date(1982,0) },
			{ y: 0.588, x: new Date(1983,0) },
			{ y: 0.834, x: new Date(1984,0) },
			{ y: 0.65, x: new Date(1985,0) },
			{ y: 0.728, x: new Date(1986,0) },
			{ y: 0.568, x: new Date(1987,0) },
			{ y: 0.573, x: new Date(1988,0) },
			{ y: 0.666, x: new Date(1989,0) },
			{ y: 0.666, x: new Date(1990,0) },
			{ y: 0.709, x: new Date(1991,0) },
			{ y: 0.77778 , x: new Date(1992,0) },
			{ y: 0.72, x: new Date(1993,0) },
			{ y: 0.614, x: new Date(1994,0) },
			{ y: 0.6904, x: new Date(1995,0) },
			{ y: 0.555, x: new Date(1996,0) },
			{ y: 0.611, x: new Date(1997,0) },
			{ y: 0.781, x: new Date(1998,0) },
			{ y: 0.647, x: new Date(1999,0) },
			{ y: 0.69, x: new Date(2000,0) },
			{ y: 0.63, x: new Date(2001,0) },
			{ y: 0.57, x: new Date(2002,0) },
			{ y: 0.578, x: new Date(2003,0) },
			{ y: 0.594, x: new Date(2004,0) },
			{ y: 0.583, x: new Date(2005,0) },
			{ y: 0.581, x: new Date(2006,0) },
			{ y: 0.628, x: new Date(2007,0) },
			{ y: 0.565, x: new Date(2008,0) },
			{ y: 0.593, x: new Date(2009,0) },
			{ y: 0.521, x: new Date(2010,0) },
			{ y: 0.5401, x: new Date(2011,0) },
			{ y: 0.490, x: new Date(2012,0) },
			{ y: 0.535, x: new Date(2013,0) },
			{ y: 0.454, x: new Date(2014,0) },
			{ y: 0.561, x: new Date(2015,0) },
			{ y: 0.5209, x: new Date(2016,0) },
			{ y: 0.53, x: new Date(2017,0) },
			{ y: 0.592, x: new Date(2018,0) }
			
			
			
			
			]
	}]
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
			
			
			{ y: 0.8235294117647058, x: new Date(1979,0) },
			{ y: 0.721, x: new Date(1980,0) },
			{ y: 0.857, x: new Date(1981,0) },
			{ y: 0.709, x: new Date(1982,0) },
			{ y: 0.657, x: new Date(1983,0) },
			{ y: 0.662, x: new Date(1984,0) },
			{ y: 0.634, x: new Date(1985,0) },
			{ y: 0.5694, x: new Date(1986,0) },
			{ y: 0.539, x: new Date(1987,0) },
			{ y: 0.55, x: new Date(1988,0) },
			{ y: 0.607, x: new Date(1989,0) },
			{ y: 0.66, x: new Date(1990,0) },
			{ y: 0.62, x: new Date(1991,0) },
			{ y: 0.6279, x: new Date(1992,0) },
			{ y: 0.534, x: new Date(1993,0) },
			{ y: 0.590, x: new Date(1994,0) },
			{ y: 0.636, x: new Date(1995,0) },
			{ y: 0.682, x: new Date(1996,0) },
			{ y: 0.532, x: new Date(1997,0) },
			{ y: 0.417, x: new Date(1998,0) },
			{ y: 0.509, x: new Date(1999,0) },
			{ y: 0.438, x: new Date(2000,0) },
			{ y: 0.388, x: new Date(2001,0) },
			{ y: 0.403, x: new Date(2002,0) },
			{ y: 0.37765, x: new Date(2003,0) },
			{ y: 0.403, x: new Date(2004,0) },
			{ y: 0.373, x: new Date(2005,0) },
			{ y: 0.3611, x: new Date(2006,0) },
			{ y: 0.375, x: new Date(2007,0) },
			{ y: 0.370, x: new Date(2008,0) },
			{ y: 0.325, x: new Date(2009,0) },
			{ y: 0.364, x: new Date(2010,0) },
			{ y: 0.341, x: new Date(2011,0) },
			{ y: 0.320, x: new Date(2012,0) },
			{ y: 0.299, x: new Date(2013,0) },
			{ y: 0.295, x: new Date(2014,0) },
			{ y: 0.274, x: new Date(2015,0) },
			{ y: 0.280, x: new Date(2016,0) },
			{ y: 0.25, x: new Date(2017,0) },
			{ y: 0.252, x: new Date(2018,0) }
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
		name: "Avg number of Authors per Paper",
		dataPoints: [
			
			
			{ y: 1.21, x: new Date(1979,0) },
			{ y: 1.3863, x: new Date(1980,0) },
			{ y: 1.166, x: new Date(1981,0) },
			{ y: 1.410, x: new Date(1982,0) },
			{ y: 1.52, x: new Date(1983,0) },
			{ y: 1.508, x: new Date(1984,0) },
			{ y: 1.575, x: new Date(1985,0) },
			{ y: 1.756, x: new Date(1986,0) },
			{ y: 1.85, x: new Date(1987,0) },
			{ y: 1.8, x: new Date(1988,0) },
			{ y: 1.647, x: new Date(1989,0) },
			{ y: 1.512, x: new Date(1990,0) },
			{ y: 1.607, x: new Date(1991,0) },
			{ y: 1.592, x: new Date(1992,0) },
			{ y: 1.872, x: new Date(1993,0) },
			{ y: 1.69, x: new Date(1994,0) },
			{ y: 1.57, x: new Date(1995,0) },
			{ y: 1.4655, x: new Date(1996,0) },
			{ y: 1.876, x: new Date(1997,0) },
			{ y: 2.393, x: new Date(1998,0) },
			{ y: 1.963, x: new Date(1999,0) },
			{ y: 2.278, x: new Date(2000,0) },
			{ y: 2.571, x: new Date(2001,0) },
			{ y: 2.476, x: new Date(2002,0) },
			{ y: 2.647, x: new Date(2003,0) },
			{ y: 2.475, x: new Date(2004,0) },
			{ y: 2.678, x: new Date(2005,0) },
			{ y: 2.7687, x: new Date(2006,0) },
			{ y: 2.661, x: new Date(2007,0) },
			{ y: 2.70, x: new Date(2008,0) },
			{ y: 3.07, x: new Date(2009,0) },
			{ y: 2.74, x: new Date(2010,0) },
			{ y: 2.924, x: new Date(2011,0) },
			{ y: 3.12, x: new Date(2012,0) },
			{ y: 3.341, x: new Date(2013,0) },
			{ y: 3.389, x: new Date(2014,0) },
			{ y: 3.639, x: new Date(2015,0) },
			{ y: 3.56, x: new Date(2016,0) },
			{ y: 4.0, x: new Date(2017,0) },
			{ y: 3.958, x: new Date(2018,0) }
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
			
			
			{ y: 1.53, x: new Date(1979,0) },
			{ y: 3.43, x: new Date(1980,0) },
			{ y: 2.33, x: new Date(1981,0) },
			{ y: 5.32, x: new Date(1982,0) },
			{ y: 3.99, x: new Date(1983,0) },
			{ y: 5.57, x: new Date(1984,0) },
			{ y: 5.92, x: new Date(1985,0) },
			{ y: 5.35, x: new Date(1986,0) },
			{ y: 7.0, x: new Date(1987,0) },
			{ y: 6.0, x: new Date(1988,0) },
			{ y: 7.85, x: new Date(1989,0) },
			{ y: 14.564, x: new Date(1990,0) },
			{ y: 10.55, x: new Date(1991,0) },
			{ y: 6.944, x: new Date(1992,0) },
			{ y: 8.574, x: new Date(1993,0) },
			{ y: 5.076, x: new Date(1994,0) },
			{ y: 9.58, x: new Date(1995,0) },
			{ y: 7.0, x: new Date(1996,0) },
			{ y: 8.63, x: new Date(1997,0) },
			{ y: 8.47, x: new Date(1998,0) },
			{ y: 10.89, x: new Date(1999,0) },
			{ y: 8.443, x: new Date(2000,0) },
			{ y: 15.45, x: new Date(2001,0) },
			{ y: 13.53, x: new Date(2002,0) },
			{ y: 14.338, x: new Date(2003,0) },
			{ y: 19.87, x: new Date(2004,0) },
			{ y: 19.06, x: new Date(2005,0) },
			{ y: 19.068, x: new Date(2006,0) },
			{ y: 17.90, x: new Date(2007,0) },
			{ y: 23.05, x: new Date(2008,0) },
			{ y: 25.71, x: new Date(2009,0) },
			{ y: 27.775, x: new Date(2010,0) },
			{ y: 27.4, x: new Date(2011,0) },
			{ y: 29.17, x: new Date(2012,0) },
			{ y: 33.28, x: new Date(2013,0) },
			{ y: 33.6938, x: new Date(2014,0) },
			{ y: 35.01, x: new Date(2015,0) },
			{ y: 34.24, x: new Date(2016,0) },
			{ y: 41.31, x: new Date(2017,0) },
			{ y: 43.22, x: new Date(2018,0) }
		]
		},


		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Short Papers",
			color: "#C00C0C",
			dataPoints: [
			
			
			
			
			{ y: 0, x: new Date(1979,0) },
			{ y: 0, x: new Date(1980,0) },
			{ y: 0, x: new Date(1981,0) },
			{ y: 0, x: new Date(1982,0) },
			{ y: 0, x: new Date(1983,0) },
			{ y: 0, x: new Date(1984,0) },
			{ y: 0, x: new Date(1985,0) },
			{ y: 0, x: new Date(1986,0) },
			{ y: 0, x: new Date(1987,0) },
			{ y: 0, x: new Date(1988,0) },
			{ y: 0, x: new Date(1989,0) },
			{ y: 0, x: new Date(1990,0) },
			{ y: 0, x: new Date(1991,0) },
			{ y: 0 , x: new Date(1992,0) },
			{ y: 0, x: new Date(1993,0) },
			{ y: 0, x: new Date(1994,0) },
			{ y: 0, x: new Date(1995,0) },
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
			{ y: 10.67, x: new Date(2008,0) },
			{ y: 9.66, x: new Date(2009,0) },
			{ y: 15.78, x: new Date(2010,0) },
			{ y: 17.82, x: new Date(2011,0) },
			{ y: 17.96, x: new Date(2012,0) },
			{ y: 20.35, x: new Date(2013,0) },
			{ y: 21.19, x: new Date(2014,0) },
			{ y: 22.94, x: new Date(2015,0) },
			{ y: 23.47, x: new Date(2016,0) },
			{ y: 26.5, x: new Date(2017,0) },
			{ y: 27.368, x: new Date(2018,0) }
			
			
			
			
			]
	},
	{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Demo Papers",
			color: "#309000",
			dataPoints: [
			
			
			
			
			{ y: 0, x: new Date(1979,0) },
			{ y: 0, x: new Date(1980,0) },
			{ y: 0, x: new Date(1981,0) },
			{ y: 0, x: new Date(1982,0) },
			{ y: 0, x: new Date(1983,0) },
			{ y: 0, x: new Date(1984,0) },
			{ y: 0, x: new Date(1985,0) },
			{ y: 0, x: new Date(1986,0) },
			{ y: 0, x: new Date(1987,0) },
			{ y: 0, x: new Date(1988,0) },
			{ y: 0, x: new Date(1989,0) },
			{ y: 0, x: new Date(1990,0) },
			{ y: 0, x: new Date(1991,0) },
			{ y: 0 , x: new Date(1992,0) },
			{ y: 0, x: new Date(1993,0) },
			{ y: 0, x: new Date(1994,0) },
			{ y: 0, x: new Date(1995,0) },
			{ y: 0, x: new Date(1996,0) },
			{ y: 0, x: new Date(1997,0) },
			{ y: 0, x: new Date(1998,0) },
			{ y: 0, x: new Date(1999,0) },
			{ y: 0, x: new Date(2000,0) },
			{ y: 0, x: new Date(2001,0) },
			{ y: 0, x: new Date(2002,0) },
			{ y: 0, x: new Date(2003,0) },
			{ y: 8.05, x: new Date(2004,0) },
			{ y: 8.25, x: new Date(2005,0) },
			{ y: 0, x: new Date(2006,0) },
			{ y: 9.25, x: new Date(2007,0) },
			{ y: 7.5, x: new Date(2008,0) },
			{ y: 6.41, x: new Date(2009,0) },
			{ y: 20.8, x: new Date(2010,0) },
			{ y: 12.04, x: new Date(2011,0) },
			{ y: 15.1, x: new Date(2012,0) },
			{ y: 16.7, x: new Date(2013,0) },
			{ y: 13.22, x: new Date(2014,0) },
			{ y: 17.5, x: new Date(2015,0) },
			{ y: 21.93, x: new Date(2016,0) },
			{ y: 19.63, x: new Date(2017,0) },
			{ y: 17.84, x: new Date(2018,0) }
			
			
			
			
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
		name: "ACL URLs per Paper 1979-2018",
		dataPoints: [
			
			
			{ y: 0, x: new Date(1979,0) },
			{ y: 0, x: new Date(1980,0) },
			{ y: 0, x: new Date(1981,0) },
			{ y: 0, x: new Date(1982,0) },
			{ y: 0, x: new Date(1983,0) },
			{ y: 0, x: new Date(1984,0) },
			{ y: 0, x: new Date(1985,0) },
			{ y: 0, x: new Date(1986,0) },
			{ y: 0, x: new Date(1987,0) },
			{ y: 0, x: new Date(1988,0) },
			{ y: 0, x: new Date(1989,0) },
			{ y: 0, x: new Date(1990,0) },
			{ y: 0, x: new Date(1991,0) },
			{ y: 0, x: new Date(1992,0) },
			{ y: 0, x: new Date(1993,0) },
			{ y: 0, x: new Date(1994,0) },
			{ y: 0, x: new Date(1995,0) },
			{ y: 0.0517, x: new Date(1996,0) },
			{ y: 0.150, x: new Date(1997,0) },
			{ y: 0.3114, x: new Date(1998,0) },
			{ y: 0.2619, x: new Date(1999,0) },
			{ y: 0.3116, x: new Date(2000,0) },
			{ y: 0.942, x: new Date(2001,0) },
			{ y: 0.676, x: new Date(2002,0) },
			{ y: 0.845, x: new Date(2003,0) },
			{ y: 1.147, x: new Date(2004,0) },
			{ y: 1.1018, x: new Date(2005,0) },
			{ y: 1.1917, x: new Date(2006,0) },
			{ y: 1.174, x: new Date(2007,0) },
			{ y: 1.204, x: new Date(2008,0) },
			{ y: 1.513, x: new Date(2009,0) },
			{ y: 1.70, x: new Date(2010,0) },
			{ y: 1.6158, x: new Date(2011,0) },
			{ y: 1.744, x: new Date(2012,0) },
			{ y: 2.072, x: new Date(2013,0) },
			{ y: 2.344, x: new Date(2014,0) },
			{ y: 2.2287, x: new Date(2015,0) },
			{ y: 2.41, x: new Date(2016,0) },
			{ y: 11.59, x: new Date(2017,0) },
			{ y: 4.4617, x: new Date(2018,0) }
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
		name: "ACL : Avg. number of URLs in footnote per Paper per Year",
		dataPoints: [
			
			
			{ y: 0, x: new Date(1979,0) },
			{ y: 0, x: new Date(1980,0) },
			{ y: 0, x: new Date(1981,0) },
			{ y: 0, x: new Date(1982,0) },
			{ y: 0, x: new Date(1983,0) },
			{ y: 0, x: new Date(1984,0) },
			{ y: 0, x: new Date(1985,0) },
			{ y: 0, x: new Date(1986,0) },
			{ y: 0, x: new Date(1987,0) },
			{ y: 0, x: new Date(1988,0) },
			{ y: 0, x: new Date(1989,0) },
			{ y: 0, x: new Date(1990,0) },
			{ y: 0, x: new Date(1991,0) },
			{ y: 0, x: new Date(1992,0) },
			{ y: 0, x: new Date(1993,0) },
			{ y: 0, x: new Date(1994,0) },
			{ y: 0, x: new Date(1995,0) },
			{ y: 0, x: new Date(1996,0) },
			{ y: 0, x: new Date(1997,0) },
			{ y: 0, x: new Date(1998,0) },
			{ y: 0, x: new Date(1999,0) },
			{ y: 0.0129, x: new Date(2000,0) },
			{ y: 0.285, x: new Date(2001,0) },
			{ y: 0.230, x: new Date(2002,0) },
			{ y: 0.338, x: new Date(2003,0) },
			{ y: 0.494, x: new Date(2004,0) },
			{ y: 0.473, x: new Date(2005,0) },
			{ y: 0.609, x: new Date(2006,0) },
			{ y: 0.595, x: new Date(2007,0) },
			{ y: 0.6702, x: new Date(2008,0) },
			{ y: 0.75117, x: new Date(2009,0) },
			{ y: 0.9126, x: new Date(2010,0) },
			{ y: 0.9068, x: new Date(2011,0) },
			{ y: 0.8846, x: new Date(2012,0) },
			{ y: 1.171, x: new Date(2013,0) },
			{ y: 1.166, x: new Date(2014,0) },
			{ y: 1.193, x: new Date(2015,0) },
			{ y: 1.348, x: new Date(2016,0) },
			{ y: 1.405, x: new Date(2017,0) },
			{ y: 1.3578, x: new Date(2018,0) }
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
		name: "ACL : Avg. number of Tables per Paper per Year",
		dataPoints: [
			
			
			{ y: 0, x: new Date(1979,0) },
			{ y: 0.295, x: new Date(1980,0) },
			{ y: 0.361, x: new Date(1981,0) },
			{ y: 0.179, x: new Date(1982,0) },
			{ y: 0.48, x: new Date(1983,0) },
			{ y: 0.189, x: new Date(1984,0) },
			{ y: 0.285, x: new Date(1985,0) },
			{ y: 0.390, x: new Date(1986,0) },
			{ y: 0.382, x: new Date(1987,0) },
			{ y: 0.1714, x: new Date(1988,0) },
			{ y: 0.2352, x: new Date(1989,0) },
			{ y: 0.4102, x: new Date(1990,0) },
			{ y: 0.964, x: new Date(1991,0) },
			{ y: 0.7407, x: new Date(1992,0) },
			{ y: 1.191, x: new Date(1993,0) },
			{ y: 1.384, x: new Date(1994,0) },
			{ y: 0.80357, x: new Date(1995,0) },
			{ y: 1.431, x: new Date(1996,0) },
			{ y: 2.5205, x: new Date(1997,0) },
			{ y: 1.8, x: new Date(1998,0) },
			{ y: 2.1309, x: new Date(1999,0) },
			{ y: 1.1038, x: new Date(2000,0) },
			{ y: 1.914, x: new Date(2001,0) },
			{ y: 2.215, x: new Date(2002,0) },
			{ y: 3.0, x: new Date(2003,0) },
			{ y: 3.402, x: new Date(2004,0) },
			{ y: 4.0657, x: new Date(2005,0) },
			{ y: 3.8219, x: new Date(2006,0) },
			{ y: 3.3816, x: new Date(2007,0) },
			{ y: 3.481, x: new Date(2008,0) },
			{ y: 3.244, x: new Date(2009,0) },
			{ y: 3.554, x: new Date(2010,0) },
			{ y: 3.586, x: new Date(2011,0) },
			{ y: 3.7032, x: new Date(2012,0) },
			{ y: 3.699, x: new Date(2013,0) },
			{ y: 3.667, x: new Date(2014,0) },
			{ y: 3.9082, x: new Date(2015,0) },
			{ y: 4.55045, x: new Date(2016,0) },
			{ y: 4.242, x: new Date(2017,0) },
			{ y: 4.428, x: new Date(2018,0) }
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
		name: "ACL : Avg. number of Figures per Paper per Year",
		dataPoints: [
			
			
			{ y: 0.666, x: new Date(1979,0) },
			{ y: 0.4772, x: new Date(1980,0) },
			{ y: 1.111, x: new Date(1981,0) },
			{ y: 0.7948, x: new Date(1982,0) },
			{ y: 0.88, x: new Date(1983,0) },
			{ y: 1.344, x: new Date(1984,0) },
			{ y: 2.542, x: new Date(1985,0) },
			{ y: 2.073, x: new Date(1986,0) },
			{ y: 3.676, x: new Date(1987,0) },
			{ y: 3.085, x: new Date(1988,0) },
			{ y: 2.617, x: new Date(1989,0) },
			{ y: 3.333, x: new Date(1990,0) },
			{ y: 2.5178, x: new Date(1991,0) },
			{ y: 2.0370, x: new Date(1992,0) },
			{ y: 3.57, x: new Date(1993,0) },
			{ y: 2.576, x: new Date(1994,0) },
			{ y: 3.5714, x: new Date(1995,0) },
			{ y: 3.0344, x: new Date(1996,0) },
			{ y: 3.4794, x: new Date(1997,0) },
			{ y: 2.54, x: new Date(1998,0) },
			{ y: 3.0476, x: new Date(1999,0) },
			{ y: 1.922, x: new Date(2000,0) },
			{ y: 3.442, x: new Date(2001,0) },
			{ y: 3.3692, x: new Date(2002,0) },
			{ y: 3.25, x: new Date(2003,0) },
			{ y: 2.827, x: new Date(2004,0) },
			{ y: 3.052, x: new Date(2005,0) },
			{ y: 3.123, x: new Date(2006,0) },
			{ y: 2.778, x: new Date(2007,0) },
			{ y: 2.237, x: new Date(2008,0) },
			{ y: 2.704, x: new Date(2009,0) },
			{ y: 2.98, x: new Date(2010,0) },
			{ y: 2.465, x: new Date(2011,0) },
			{ y: 2.346, x: new Date(2012,0) },
			{ y: 2.65, x: new Date(2013,0) },
			{ y: 2.85, x: new Date(2014,0) },
			{ y: 2.924, x: new Date(2015,0) },
			{ y: 3.256, x: new Date(2016,0) },
			{ y: 3.169, x: new Date(2017,0) },
			{ y: 3.073, x: new Date(2018,0) }
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
		name: "ACL : Most Popular primary URL domains & their Frequencies",
		legendText: "",
		dataPoints: [      
			{ y: 1529, label: 'www.aclweb.org' },
			{ y: 685,  label: 'github.com' },
			{ y: 368,  label: 'arxiv.org' },
			{ y: 195,  label: 'nlp.stanford.edu' },
			{ y: 191,  label: 'code.google.com' },
			{ y: 146, label: 'dl.acm.org' },
			{ y: 112,  label: 'en.wikipedia.org' },
			{ y: 89, label: 'www.statmt.org' },
			{ y: 85,  label: 'www.nist.gov' },
			{ y: 92,  label: 'papers.nips.cc' },
			{ y: 52,  label: 'www.cs.cmu.edu' },
			{ y: 51,  label: 'mallet.cs.umass.edu' },
			{ y: 48, label: 'www.csie.ntu.edu.tw' },
			{ y: 116,  label: 'upenn.edu' },
			{ y: 40,  label: 'sourceforge.net' },
			{ y: 36, label: 'www.isi.edu' },
			{ y: 35,  label: 'dx.doi.org' },
			{ y: 33,  label: 'homepages.inf.ed.ac.uk' },
			{ y: 29,  label: 'nlp.cs.nyu.edu' },
			{ y: 28,  label: 'svmlight.joachims.org' }
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
		name: "ACL : Top Unique GitHub Pages",
		legendText: "",
		dataPoints: [      
			{ y: 8, label: 'UKPLab/' },
			{ y: 10,label: 'facebookresearch/' },
			{ y: 5,  label: 'fxsjy/jieba' },
			{ y: 5,  label: 'tensorflow/models/' },
			{ y: 3,  label: 'redpony/cdec' },
			{ y: 3, label: 'percyliang/brown-cluster' },
			{ y: 3,  label: 'moses-smt/' },
			{ y: 3, label: 'rajarshd/Gaussian' },
			{ y: 3,  label: 'clab/cnn' },
			{ y: 3,  label: 'miso-belica/sumy' },
			{ y: 3,  label: 'nyu-dl/' },
			{ y: 3,  label: 'milangritta/Minimalist-Location-' },
			{ y: 3, label: 'lisa-groundhog/' },
			{ y: 3,  label: 'brmson/' },
			{ y: 3,  label: 'cocoxu/' },
			{ y: 3, label: 'gabrielStanovsky/' },
			{ y: 3,  label: 'dav/word2vec' },
			{ y: 2,  label: 'jhclark/multeval' },
			{ y: 2,  label: 'antske/ ' },
			{ y: 2,  label: 'jiyfeng/DPLP' }
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
		name: "ACL : Top University Pages",
		legendText: "",
		dataPoints: [                                         
			{ y: 79, label: 'Penn Museum' },
			{ y: 73,label: 'Stanford University' },
			{ y: 45,  label: 'University of Edinburgh' },
			{ y: 44,  label: 'UC Berkeley' },
			{ y: 42,  label: 'Microsoft Research Asia' },
			{ y: 39, label: 'Columbia University' },
			{ y: 31,  label: 'University of Washington' },
			{ y: 30, label: 'Johns Hopkins Hospital' },
			{ y: 29,  label: 'Carnegie Mellon University Silicon Valley' },
			{ y: 28,  label: 'MIT' },
			{ y: 26,  label: 'Brown University' },
			{ y: 25,  label: 'Institutt for datateknikk og informasjonsvitenskap' },
			{ y: 24, label: 'Harvard University' },
			{ y: 23,  label: 'Cornell University' },
			{ y: 22,  label: 'Institute for Logic' },
			{ y: 21, label: 'University of Trento' },
			{ y: 20,  label: 'The Grand Garage' },
			{ y: 20,  label: 'Microsoft Research' },
			{ y: 20,  label: 'Harbin Institute of Technology' },
			{ y: 19,  label: 'University of Maryland' }
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
			
			
			{ y: 5, x: new Date(1979,0) },
			{ y: 12, x: new Date(1980,0) },
			{ y: 9, x: new Date(1981,0) },
			{ y: 1, x: new Date(1982,0) },
			{ y: 1, x: new Date(1983,0) },
			{ y: 20, x: new Date(1984,0) },
			{ y: 7, x: new Date(1985,0) },
			{ y: 5, x: new Date(1986,0) },
			{ y: 7, x: new Date(1987,0) },
			{ y: 6, x: new Date(1988,0) },
			{ y: 24, x: new Date(1989,0) },
			{ y: 24, x: new Date(1990,0) },
			{ y: 24, x: new Date(1991,0) },
			{ y: 35, x: new Date(1992,0) },
			{ y: 29, x: new Date(1993,0) },
			{ y: 34, x: new Date(1994,0) },
			{ y: 29, x: new Date(1995,0) },
			{ y: 32, x: new Date(1996,0) },
			{ y: 46, x: new Date(1997,0) },
			{ y: 13, x: new Date(1998,0) },
			{ y: 21, x: new Date(1999,0) },
			{ y: 10, x: new Date(2000,0) },
			{ y: 9, x: new Date(2001,0) },
			{ y: 6, x: new Date(2002,0) },
			{ y: 9, x: new Date(2003,0) },
			{ y: 17, x: new Date(2004,0) },
			{ y: 16, x: new Date(2005,0) },
			{ y: 21, x: new Date(2006,0) },
			{ y: 18, x: new Date(2007,0) },
			{ y: 33, x: new Date(2008,0) },
			{ y: 36, x: new Date(2009,0) },
			{ y: 50, x: new Date(2010,0) },
			{ y: 57, x: new Date(2011,0) },
			{ y: 33, x: new Date(2012,0) },
			{ y: 60, x: new Date(2013,0) },
			{ y: 69, x: new Date(2014,0) },
			{ y: 59, x: new Date(2015,0) },
			{ y: 70, x: new Date(2016,0) },
			{ y: 72, x: new Date(2017,0) },
			{ y: 98, x: new Date(2018,0) }
		]
		},


		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "UK",
			color: "#e3f702",
			dataPoints: [
			
			
			
			
			{ y: 1, x: new Date(1979,0) },
			{ y: 0, x: new Date(1980,0) },
			{ y: 0, x: new Date(1981,0) },
			{ y: 0, x: new Date(1982,0) },
			{ y: 0, x: new Date(1983,0) },
			{ y: 2, x: new Date(1984,0) },
			{ y: 0, x: new Date(1985,0) },
			{ y: 0, x: new Date(1986,0) },
			{ y: 1, x: new Date(1987,0) },
			{ y: 2, x: new Date(1988,0) },
			{ y: 0, x: new Date(1989,0) },
			{ y: 0, x: new Date(1990,0) },
			{ y: 4, x: new Date(1991,0) },
			{ y: 6 , x: new Date(1992,0) },
			{ y: 1, x: new Date(1993,0) },
			{ y: 5, x: new Date(1994,0) },
			{ y: 7, x: new Date(1995,0) },
			{ y: 8, x: new Date(1996,0) },
			{ y: 10, x: new Date(1997,0) },
			{ y: 1, x: new Date(1998,0) },
			{ y: 4, x: new Date(1999,0) },
			{ y: 4, x: new Date(2000,0) },
			{ y: 7, x: new Date(2001,0) },
			{ y: 4, x: new Date(2002,0) },
			{ y: 1, x: new Date(2003,0) },
			{ y: 2, x: new Date(2004,0) },
			{ y: 8, x: new Date(2005,0) },
			{ y: 4, x: new Date(2006,0) },
			{ y: 4, x: new Date(2007,0) },
			{ y: 5, x: new Date(2008,0) },
			{ y: 4, x: new Date(2009,0) },
			{ y: 23, x: new Date(2010,0) },
			{ y: 4, x: new Date(2011,0) },
			{ y: 2, x: new Date(2012,0) },
			{ y: 10, x: new Date(2013,0) },
			{ y: 5, x: new Date(2014,0) },
			{ y: 10, x: new Date(2015,0) },
			{ y: 13, x: new Date(2016,0) },
			{ y: 5, x: new Date(2017,0) },
			{ y: 16, x: new Date(2018,0) }
			
			
			
			
			]
	},
	
		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Australia",
			color: "#157539",
			dataPoints: [
			
			
			
			
			{ y: 0, x: new Date(1979,0) },
			{ y: 1, x: new Date(1980,0) },
			{ y: 1, x: new Date(1981,0) },
			{ y: 0, x: new Date(1982,0) },
			{ y: 0, x: new Date(1983,0) },
			{ y: 1, x: new Date(1984,0) },
			{ y: 0, x: new Date(1985,0) },
			{ y: 0, x: new Date(1986,0) },
			{ y: 1, x: new Date(1987,0) },
			{ y: 0, x: new Date(1988,0) },
			{ y: 0, x: new Date(1989,0) },
			{ y: 0, x: new Date(1990,0) },
			{ y: 0, x: new Date(1991,0) },
			{ y: 1 , x: new Date(1992,0) },
			{ y: 1, x: new Date(1993,0) },
			{ y: 2, x: new Date(1994,0) },
			{ y: 1, x: new Date(1995,0) },
			{ y: 0, x: new Date(1996,0) },
			{ y: 2, x: new Date(1997,0) },
			{ y: 0, x: new Date(1998,0) },
			{ y: 0, x: new Date(1999,0) },
			{ y: 0, x: new Date(2000,0) },
			{ y: 0, x: new Date(2001,0) },
			{ y: 0, x: new Date(2002,0) },
			{ y: 0, x: new Date(2003,0) },
			{ y: 0, x: new Date(2004,0) },
			{ y: 3, x: new Date(2005,0) },
			{ y: 0, x: new Date(2006,0) },
			{ y: 1, x: new Date(2007,0) },
			{ y: 2, x: new Date(2008,0) },
			{ y: 3, x: new Date(2009,0) },
			{ y: 1, x: new Date(2010,0) },
			{ y: 1, x: new Date(2011,0) },
			{ y: 1, x: new Date(2012,0) },
			{ y: 6, x: new Date(2013,0) },
			{ y: 0, x: new Date(2014,0) },
			{ y: 4, x: new Date(2015,0) },
			{ y: 1, x: new Date(2016,0) },
			{ y: 3, x: new Date(2017,0) },
			{ y: 7, x: new Date(2018,0) }
			
			
			
			
			]
	},
	{        
			type: "stackedColumn",
			showInLegend: true,
			name: "India",
			color: "#f70202",
			dataPoints: [
			
			
			
			
			{ y: 0, x: new Date(1979,0) },
			{ y: 0, x: new Date(1980,0) },
			{ y: 0, x: new Date(1981,0) },
			{ y: 0, x: new Date(1982,0) },
			{ y: 0, x: new Date(1983,0) },
			{ y: 0, x: new Date(1984,0) },
			{ y: 0, x: new Date(1985,0) },
			{ y: 1, x: new Date(1986,0) },
			{ y: 1, x: new Date(1987,0) },
			{ y: 0, x: new Date(1988,0) },
			{ y: 1, x: new Date(1989,0) },
			{ y: 3, x: new Date(1990,0) },
			{ y: 0, x: new Date(1991,0) },
			{ y: 10 , x: new Date(1992,0) },
			{ y: 1, x: new Date(1993,0) },
			{ y: 5, x: new Date(1994,0) },
			{ y: 1, x: new Date(1995,0) },
			{ y: 5, x: new Date(1996,0) },
			{ y: 2, x: new Date(1997,0) },
			{ y: 1, x: new Date(1998,0) },
			{ y: 0, x: new Date(1999,0) },
			{ y: 0, x: new Date(2000,0) },
			{ y: 2, x: new Date(2001,0) },
			{ y: 0, x: new Date(2002,0) },
			{ y: 1, x: new Date(2003,0) },
			{ y: 2, x: new Date(2004,0) },
			{ y: 0, x: new Date(2005,0) },
			{ y: 0, x: new Date(2006,0) },
			{ y: 0, x: new Date(2007,0) },
			{ y: 1, x: new Date(2008,0) },
			{ y: 4, x: new Date(2009,0) },
			{ y: 2, x: new Date(2010,0) },
			{ y: 5, x: new Date(2011,0) },
			{ y: 0, x: new Date(2012,0) },
			{ y: 5, x: new Date(2013,0) },
			{ y: 7, x: new Date(2014,0) },
			{ y: 0, x: new Date(2015,0) },
			{ y: 3, x: new Date(2016,0) },
			{ y: 1, x: new Date(2017,0) },
			{ y: 8, x: new Date(2018,0) }
			
			
			
			
			]
	}
	
	
	
	
	]
});
chart.render();




}












