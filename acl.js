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
		click: onClick,
		color: "#0303AC",
		name: "ACL URLs per Paper 1979-2018 Click on bar for primary domains",
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


function onClick(e) {
		
		
		
		
		var myNode = document.getElementById("chartContainer6details");
		myNode.innerHTML = '';
		var myNode2 = document.getElementById("chartContainer6details2");
		myNode2.innerHTML = '';
		
		
		var dt= e.dataPoint.x.getFullYear();
		
		var str1= "chartContainer";
		var res = str1.concat(dt);
		//alert(  e.dataSeries.type + ", dataPoint { x:" + res + ", y: "+ e.dataPoint.y + " }" );
		var idiv = document.createElement('div');
		idiv.id = res;
		idiv.className = res;
		var x2 = document.getElementById("chartContainer6details");
		x2.appendChild(idiv);
		
		
		var yr = dt;
		if (dt==1996)
		{
		
		dp = [                                         
			{ y: 1, label: 'www.cs.rochester.edu' },
			{ y: 1,label: 'ufpe.br' },
			{ y: 1,  label: 'nphil.uni-tuebingen' }
			
		]
		}
		else if(dt==1997){
			
			dp = [     
			
			{ y: 1, label: 'att.com' },
			{ y: 1,label: 'www.coling.uni-freiburg.de' },
			{ y: 1,  label: 'hpsg.stanford.edu' },           
			{ y: 2,  label: 'ruccs.rutgers.edu' },
			{ y: 1,  label: 'uni-stuttgart.de' },
			{ y: 2, label: 'uni-sb.de' },
			{ y: 1,  label: 'www.globalink.com' },
			{ y: 1, label: 'www.logos-ca.com' },
			{ y: 1, label: 'systranmt.com' }
			
			
		]
		}
		else if(dt==1998){
			dp = [ 
			{ y: 1, label: 'ijs.si' },
			{ y: 1, label: 'collins.co.uk' },         
			{ y: 1,label: 'www.conexor.fi' },
			{ y: 1,  label: 'nist.gov' },           
			{ y: 1,  label: 'biu.ac.il' },
			{ y: 1,  label: 'www.ims.uni-' },
			{ y: 1, label: 'earth.let.uva.nl' },
			{ y: 1,  label: 'jhu.edu' },
			{ y: 1, label: 'upenn.edu' },
			{ y: 3, label: 'www.gmat.org' },
			{ y: 2,label: 'www.toefl.org' },
			{ y: 1,  label: 'www.gmat.orff' },           
			{ y: 1,  label: 'www.toetl.org' },
			{ y: 1,  label: 'research.microsoft.com' },
			{ y: 1, label: 'www.ee.umd' },
			{ y: 1,  label: 'cs.urnass.edu' },
			{ y: 1,  label: 'www.ids-mannheim.de' },
			{ y: 1, label: 'bton.ac.uk' },
			{ y: 1,  label: 'www.georgetown.edu' },
			{ y: 1, label: 'doc.ic.ac.uk' }
			
			
		]
		}
		else if(dt==1999){
			dp =  [                                         
			{ y: 1, label: 'cmu.edu' },         
			{ y: 1,label: 'mitre.org' },               
			{ y: 2,  label: 'jhu.edu' },           
			{ y: 1,  label: 'umd.edu' },
			{ y: 1,  label: 'www.gcorgetown.edu' },
			{ y: 1, label: 'nmsu.edu' },
			{ y: 1,  label: 'auc.dk' },
			{ y: 1, label: 'www.morphologic.hu' },
			{ y: 1, label: 'umanitoba.ca' },
			{ y: 1,label: 'umanitob&.ca' },
			{ y: 1,  label: 'www.askjeeves.com' },           
			{ y: 1,  label: 'www.electricmonk.com' },
			{ y: 1,  label: 'altavista.com' },
			{ y: 1, label: 'gla.ac.uk' },
			{ y: 1,  label: 'uni-mainz.de' },
			{ y: 1, label: 'cmu.edu' },
			{ y: 1,  label: 'xerox.com' },
			{ y: 1, label: 'xxx.lanl.gov' },
			{ y: 1,  label: 'www.tipster.org' },
			{ y: 1, label: 'www.ltg.ed.ac.uk' }
			
		]
		}
		else if(dt==2000){
			dp =  [                                         
			{ y: 3, label: 'www.iiit.net' },                                   
			{ y: 2, label: 'uni-stuttgart.de' },               
			{ y: 2,  label: 'saic.com' },           
			{ y: 1,  label: 'www.sgi.com' },
			{ y: 1,  label: 'Stanford.EDU' },
			{ y: 1, label: 'upenn.edu' },
			{ y: 1,  label: 'ilk.kub.nl' },
			{ y: 1, label: 'biu.ac.il' },
			{ y: 1, label: 'www.conexor.fi' },
			{ y: 1,label: 'uni-sb.de' },
			{ y: 1,  label: 'www.mpi-sb' },           
			{ y: 1,  label: 'www.hcrc.ed.ac.uk' },
			{ y: 1,  label: 'cornell.edu' },
			{ y: 1, label: 'univie.ac.at' },
			{ y: 1,  label: 'www.cicc.or.jp' },
			{ y: 1, label: 'bppt.go.id' },
			{ y: 1,  label: 'bppt.go.id' },
			{ y: 1, label: 'www.tdil.gov.in' },
			{ y: 1,  label: 'www.cdac.org.in' },
			{ y: 1, label: 'nectec.or.th' }
			
		]
		}
		else if(dt==2001){
			dp =  [                                         
			{ y: 7, label: 'www.w3.org' },                                        
			{ y: 3, label: 'nist.gov' },               
			{ y: 3,  label: 'upenn.edu' },           
			{ y: 2,  label: 'www.inria.fr' },
			{ y: 2,  label: 'www.collocations.de' },
			{ y: 2, label: 'www.loria.fr' },
			{ y: 2,  label: 'portugues.mct.pt' },
			{ y: 2,  label: 'uni-stuttgart.de' },
			{ y: 1, label: 'www.limsi.fr' },
			{ y: 1, label: 'tno.nl' },
			{ y: 1, label: 'www.fb9-' },
			{ y: 1,  label: 'coretex.itc.it' },           
			{ y: 1,  label: 'ntt.co.jp' },
			{ y: 1,  label: 'columbia.edu' },
			{ y: 1, label: 'www.electricknowledge.com' },
			{ y: 1,  label: 'nyu.edu' },
			{ y: 1, label: 'kub.nl' },
			{ y: 1,  label: 'leo.stcloudstate.edu' },
			{ y: 1, label: 'bton.ac.uk' },
			{ y: 1,  label: 'www.pharmweb.net' }
			
			
		]
		}
		else if(dt==2002){
			dp =  [                                         
			{ y: 2, label: 'www.altavista.com' },                                                        
			{ y: 2, label: 'sourceforge.net' },               
			{ y: 2,  label: 'www.google.com' },           
			{ y: 1,  label: 'media.mit.edu' },
			{ y: 1,  label: 'www.mozart-oz' },
			{ y: 3, label: 'research.microsoft.com' },
			{ y: 2,  label: 'stanford.edu' },
			{ y: 2,  label: 'toronto.edu' },
			{ y: 1, label: 'www.epinions.com' },
			{ y: 1, label: 'uni-sb.de' },
			{ y: 1, label: 'mitre.org' },
			{ y: 1,  label: 'nih.gov' },           
			{ y: 1,  label: 'opennlp.sf.net' },
			{ y: 1,  label: 'grok.sf.net' },
			{ y: 1, label: 'www.d.umn.edu' },
			{ y: 1,  label: 'encarta.msn.com' },
			{ y: 1, label: 'www.whlib.ac.cn' },
			{ y: 1,  label: 'waikato.ac.nz' },
			{ y: 1, label: 'tarjim.ajeeb.com'},
			{ y: 1,  label: 'saic.com' }
			
			
			
		]
		}
		else if(dt==2003){
			dp = [                                         
			{ y: 2, label: 'www.rulequest.com' },         
			{ y: 2, label: 'att.com' },
			{ y: 2,  label: 'sourceforge.net' },           
			{ y: 2,  label: 'upenn.edu' },
			{ y: 2,  label: 'cmu.edu' },
			{ y: 2, label: 'www.isi.edu' },
			{ y: 2,  label: 'columbia.edu' },
			{ y: 2,  label: 'www.quiz-zone.co.uk' },
			{ y: 1, label: 'www.greatauk.com' },
			{ y: 1, label: 'ritsumei.ac.jp' },
			{ y: 1, label: 'nyu.edu' },           
			{ y: 1,  label: 'ox.ac.uk' },
			{ y: 1,  label: 'www.cia.gov' },
			{ y: 1,  label: 'www.hcrc.ed.ac.uk' },
			{ y: 1, label: 'www.umiacs.umd.edu' },
			{ y: 1,  label: 'chasen.aist-nara.ac.jp' },
			{ y: 1, label: 'www.iijnet.or.jp' },
			{ y: 1, label: 'monash.edu.au' },
			{ y: 1,  label: 'nist.gov' },
			{ y: 1, label: 'princeton.edu' }
			
			
		]
		}
		else if(dt==2004){
			dp = [                                         
			{ y: 10, label: 'www.nist.gov' },         
			{ y: 5, label: 'www.isi.edu' },
			{ y: 4,  label: 'att.com' },          
			{ y: 4,  label: 'www.senseval.org' },
			{ y: 3,  label: 'nih.gov' },
			{ y: 3, label: 'princeton.edu' },
			{ y: 3,  label: 'mit.edu' },
			{ y: 2,  label: 'arXiv.org' },
			{ y: 2, label: 'waikato.ac.nz' },
			{ y: 2, label:  'monash.edu.au' },
			{ y: 2, label: 'www.census.gov' },           
			{ y: 2,  label: 'research.nii.ac.jp' },
			{ y: 2,  label: 'stanford.edu' },
			{ y: 2, label: 'nyu.edu' },
			{ y: 2,  label: 'upenn.edu' },
			{ y: 2, label: 'davidmlane.com' },
			{ y: 2, label: 'sourceforge.net' },
			{ y: 1,  label: 'roa.rutgers.edu' },
			{ y: 1, label: 'rochester.edu' },
			{ y: 1, label: 'www.dcs.shef.ac' }
			
			
		]
		}
		else if(dt==2005){
			dp = [                                         
			{ y: 10, label: 'www.nist.gov' },        
			{ y: 4, label: 'chasen.org' },
			{ y: 4,  label: 'www.clres.com' },          
			{ y: 3,  label: 'cnts.uia.ac.be' },
			{ y: 3,  label: 'umn.edu' },
			{ y: 3, label: 'www.fjoch.com' },
			{ y: 5,  label: 'upenn.edu' },
			{ y: 3,  label: 'cpan.org' },
			{ y: 2, label: 'umass.edu' },
			{ y: 2, label:  'cornell.edu' },          
			{ y: 2,  label: 'uni-stuttgart.de' },
			{ y: 2,  label: 'ntu.edu.tw' },
			{ y: 2, label: 'svmlight.joachims.org' },
			{ y: 2,  label: 'nces.ed.gov' },
			{ y: 8, label: 'sourceforge.net' },
			{ y: 2,  label: 'ifsm.umbc.edu' },
			{ y: 2, label: 'nih.gov'  },
			{ y: 2, label: 'www.csail' },
			{ y: 1,  label:  'sri.com' },
			{ y: 2, label:  'www.sover.net' }
			
			
		]
		}
		else if(dt==2006){
			dp = [                                         
			{ y: 9, label: 'nyu.edu' },
			{ y: 11, label: 'nist.gov' },
			{ y: 8,  label: 'chasen.org' },          
			{ y: 2,  label: 'aist-nara.ac.jp' },
			{ y: 6,  label: 'www.isi.edu' },
			{ y: 15, label: 'upenn.edu' },
			{ y: 3,  label:  'www-tsujii.is.s.u-tokyo.ac.jp'},
			{ y: 3, label: 'www.pascal-network.org' },
			{ y: 2, label:  'ualberta.ca' },
			{ y: 2, label: 'uni-stuttgart.de' },           
			{ y: 2,  label: 'hcrc.ed.ac.uk' },
			{ y: 2,  label: 'ntu.edu.tw' },
			{ y: 2, label: 'www.keenage.com' },
			{ y: 2,  label: 'www.papillon-dictionary.org' },
			{ y: 2, label: 'www.natcorp.ox.ac.uk' },
			{ y: 2, label: 'homepages.inf.ed.ac.uk' },
			{ y: 2,  label: 'naist.jp' },
			{ y: 2, label: 'technion.ac.il'  },
			{ y: 2, label: 'www.cnts.ua.ac.be'  },
			{ y: 2, label: 'www.bitterlemons.org'  }
			
			
		]
		}
		else if(dt==2007){
			dp = [                                         
			{ y: 6, label: 'chasen.org' }, 
			{ y: 6, label: 'sourceforge.net' },
			{ y: 6,  label: 'www.isi.edu' },          
			{ y: 11,  label: 'upenn.edu' },
			{ y: 4,  label: 'www.statmt.org' },
			{ y: 4, label: 'ntu.edu.tw' },
			{ y: 6,  label:  'www.nist.gov'},
			{ y: 3,  label: 'hal3.name' },
			{ y: 3, label: 'cpan.org' },
			{ y: 3, label:  'apache.org' },
			{ y: 2, label: 'waikato.ac.nz' },           
			{ y: 2,  label: 'svmlight.joachims.org' },
			{ y: 2,  label: 'leeds.ac.uk' },
			{ y: 2,  label: 'homepages.inf.ed.ac.uk' },
			{ y: 2, label: 'www.cnts.ua.ac.be' },
			{ y: 2,  label: 'www.fjoch.com' },
			{ y: 2, label: 'sri.com' },
			{ y: 2, label: 'www.eml-research.de' },
			{ y: 2,  label: 'ualberta.ca' },
			{ y: 2, label: 'dtc.umn.edu'  }
			
			
		]
		}
		else if(dt==2008){
			dp = [                                         
			{ y: 7, label: 'www.statmt.org' },                    
			{ y: 6, label: 'stanford.edu' },
			{ y: 4,  label: 'chasen.org' },          
			{ y: 5,  label: 'cam.ac.uk' },
			{ y: 4,  label: 'cmu.edu' },
			{ y: 20, label: 'sourceforge.net' },
			{ y: 2,  label: 'ualberta.ca'},
			{ y: 4,  label: 'homepages.inf.ed.ac.uk' },
			{ y: 14, label: 'www.nist.gov' },
			{ y: 11, label:  'upenn.edu' },
			{ y: 3, label: 'www.w3.org' },           
			{ y: 3,  label: 'princeton.edu' },
			{ y: 6,  label: 'hal3.name' },
			{ y: 2,  label: 'yahoo.com' },
			{ y: 3, label: 'ntu.edu.tw' },
			{ y: 3,  label: 'www.mturk.com' },
			{ y: 3, label: 'www.summarization.com' },
			{ y: 2, label: 'washington.edu' },
			{ y: 2,  label: 'umass.edu' },
			{ y: 2, label: 'bllip.cs.brown.edu'  }
			
			
		]
		}
		else if(dt==2009){
			dp = [                                         
			{ y: 9, label: 'stanford.edu' },          
			{ y: 8, label: 'www.statmt.org' },
			{ y: 13,  label: 'www.nist.gov' },          
			{ y: 6,  label: 'upenn.edu' },
			{ y: 6,  label: 'wikipedia.org' },
			{ y: 8, label: 'google.com' },
			{ y: 4,  label: 'ualberta.ca' },
			{ y: 14,  label: 'sourceforge.net' },
			{ y: 4, label: 'svmlight.joachims.org' },
			{ y: 4, label:  'apache.org' },
			{ y: 3, label: 'colorado.edu' },           
			{ y: 3,  label: 'ir.hit.edu.cn' },
			{ y: 3,  label: 'kyoto-u.ac.jp' },
			{ y: 3,  label: 'pitt.edu' },
			{ y: 3, label: 'cornell.edu' },
			{ y: 2,  label: 'www.flickr.com' },
			{ y: 3, label: 'ua.ac.be' },
			{ y: 3, label: 'sri.com' },
			{ y: 3,  label: 'umass.edu' },
			{ y: 3, label: 'fbk.eu'  }
			
			
		]
		}
		else if(dt==2010){
			dp = [                                         
			{ y: 14, label: 'www.nist.gov' },
			{ y: 13, label: 'stanford.edu' },
			{ y: 8,  label: 'umass.edu' },          
			{ y: 7,  label: 'ntu.edu.tw' },
			{ y: 23,  label: 'sourceforge.net' },
			{ y: 6, label: 'chalmers.se' },
			{ y: 6,  label: 'homepages.inf.ed.ac.uk' },
			{ y: 12,  label: 'upenn.edu' },
			{ y: 15, label: 'google.com' },
			{ y: 5, label:  'www.isi.edu' },
			{ y: 3, label: 'ualberta.ca' },           
			{ y: 5,  label: 'www.anc.org' },
			{ y: 4,  label: 'washington.edu' },
			{ y: 4,  label: 'www.amazon.com' },
			{ y: 4, label: 'svmlight.joachims.org' },
			{ y: 4,  label: 'pitt.edu' },
			{ y: 4, label: 'princeton.edu' },
			{ y: 3, label: 'www.sil.org' },
			{ y: 3,  label: 'handle.net' },
			{ y: 3, label: 'uniroma1.it'  }
			
			
		]
		}
		else if(dt==2011){
			dp = [                                         
			{ y: 22, label: 'wikipedia.org' },
			{ y: 22, label: 'google.com' },
			{ y: 11,  label: 'www.statmt.org' },          
			{ y: 10,  label: 'stanford.edu' },
			{ y: 32,  label: 'sourceforge.net' },
			{ y: 9, label: 'umass.edu' },
			{ y: 6,  label: 'ntu.edu.tw' },
			{ y: 6,  label: 'github.com' },
			{ y: 13, label:  'cmu.edu' },
			{ y: 5, label:  'svmlight.org' },
			{ y: 11, label: 'upenn.edu' },           
			{ y: 13,  label: 'www.nist.gov' },
			{ y: 4,  label: 'illinois.edu' },
			{ y: 4,  label: 'microsoft.com' },
			{ y: 4, label: 'www.mturk.com' },
			{ y: 3,  label: 'wcornell.edu' },
			{ y: 3, label: 'harvard.edu' },
			{ y: 3, label: 'mit.edu' },
			{ y: 3,  label: 'fjoch.com' },
			{ y: 3, label: 'cmu.edu'  }
			
			
		]
		}
		else if(dt==2012){
			dp = [                                         
			{ y: 28, label: 'google.com' },
			{ y: 15, label: 'stanford.edu' },
			{ y: 10,  label: 'www.aclweb.org' },          
			{ y: 6,  label: 'github.com' },
			{ y: 6,  label: 'statmt.org' },
			{ y: 7, label: 'umass.edu' },
			{ y: 11,  label: 'wikipedia.org' },
			{ y: 4,  label: 'apache.org' },
			{ y: 13, label: 'sourceforge.net'},
			{ y: 7, label:  'nist.gov' },
			{ y: 4, label: 'mit.edu' },           
			{ y: 8,  label: 'upenn.edu' },
			{ y: 4,  label: 'unitn.it' },
			{ y: 3,  label: 'lemurproject.org' },
			{ y: 3, label: 'homepages.inf.ed.ac.uk'},
			{ y: 3,  label: 'www.mturk.com' },
			{ y: 3, label: 'cmu.edu'},
			{ y: 3, label: 'ntu.edu.tw' },
			{ y: 3,  label: 'www.accurat-project.eu' },
			{ y: 2, label: 'phontron.com'  }
			
			
		]
		}
		else if(dt==2013){
			dp = [                                         
			{ y: 33, label: 'stanford.edu' },
			{ y: 36, label: 'google.com' },
			{ y: 27,  label: 'wikipedia.org' },          
			{ y: 20,  label: 'github.com' },
			{ y: 14,  label: 'www.statmt.org' },
			{ y: 15, label: 'umass.edu' },
			{ y: 18,  label: 'sourceforge.net' },
			{ y: 7,  label: 'uniroma1.it' },
			{ y: 12, label: 'cmu.edu'},
			{ y: 8, label:  'wikimedia.org' },
			{ y: 6, label: 'ntu.edu.tw' },           
			{ y: 6,  label: 'twitter.com' },
			{ y: 5,  label: 'homepages.inf.ed.ac.uk' },
			{ y: 14,  label: 'nist.gov' },
			{ y: 5, label: 'tu-darmstadt.de'},
			{ y: 8, label: 'unitn.it' },
			{ y: 5,  label: 'kyoto-u.ac.jp' },
			{ y: 5, label: 'takelab.fer.hr'  },
			{ y: 4,  label: 'cuni.cz' },
			{ y: 10,  label: 'upenn.edu' }
			
			
		]
		}
		else if(dt==2014){
			dp = [                                         
			{ y: 58, label: 'google.com' },
			{ y: 33, label: 'github.com' },
			{ y: 34,  label: 'stanford.edu' },          
			{ y: 20,  label: 'wikipedia.org' },                 
			{ y: 18,  label: 'www.aclweb.org' },
			{ y: 12, label: 'cmu.edu' },
			{ y: 9,  label: 'www.statmt.org' },
			{ y: 16,  label: 'sourceforge.net' },
			{ y: 21, label: 'cmu.edu' },
			{ y: 11, label:  'cuni.cz' },
			{ y: 19, label: 'nist.gov' },           
			{ y: 5,  label: 'homepages.inf.ed.ac.uk' },
			{ y: 6,  label: 'unitn.it' },       
			{ y: 5,  label: 'arxiv.org' },
			{ y: 15, label: 'upenn.edu'},
			{ y: 11, label: 'apache.org' },
			{ y: 9,  label: 'umass.edu' },
			{ y: 4, label: 'qwone.com'  },
			{ y: 4,  label: 'svmlight.joachims.org' },
			{ y: 4, label: 'www.mturk.com' }
			
			
			
			
			
		]
		}
		else if(dt==2015){
			dp = [                                         
			{ y: 73, label: 'github.com' },
			{ y: 61, label: 'google.com' },
			{ y: 40,  label: 'stanford.edu' },              
			{ y: 27,  label: 'wikipedia.org' },                 
			{ y: 10,  label: 'microsoft.com' },
			{ y: 12, label: 'www.statmt.org' },
			{ y: 7,  label: 'scikit-learn.org' },
			{ y: 12,  label: 'sourceforge.net' },
			{ y: 16, label: 'upenn.edu' },
			{ y: 23, label:  'cmu.edu' },
			{ y: 6, label: 'bitbucket.org' },           
			{ y: 7,  label: 'umass.edu' },
			{ y: 6,  label: 'ntu.edu.tw' },       
			{ y: 5,  label: 'arxiv.org' },
			{ y: 4, label: 'illinois.edu'},
			{ y: 11, label: 'apache.org' },
			{ y: 4,  label: 'www.natcorp.ox.ac.uk' },
			{ y: 7, label: 'unitn.it'  },
			{ y: 4,  label: 'pitt.edu' },
			{ y: 4, label: 'priberam.com' }
			
			
			
			
			
		]
		}
		else if(dt==2016){
			dp = [                                         
			{ y: 136, label: 'github.com' },    
			{ y: 47, label: 'google.com' },
			{ y: 22,  label: 'stanford.edu' },              
			{ y: 16,  label: 'upenn.edu' },                 
			{ y: 13,  label: 'www.statmt.org' },
			{ y: 10, label: 'bitbucket.org' },
			{ y: 10,  label: 'arxiv.org' },
			{ y: 8,  label: 'wikipedia.org' },
			{ y: 7, label: 'scikit-learn.org' },
			{ y: 9, label:  'cmu.edu' },
			{ y: 7, label: 'illinois.edu' },           
			{ y: 5,  label: 'collobert.com' },
			{ y: 5,  label: 'ntu.edu.tw' },       
			{ y: 5,  label: 'nih.gov'},
			{ y: 8, label: 'sourceforge.net'},
			{ y: 4, label: 'www.kaggle.com' },
			{ y: 4,  label: 'allenai.org' },
			{ y: 4, label: 'qwone.com'  },
			{ y: 4,  label: 'universaldependencies.org' },
			{ y: 6, label: 'tu-darmstadt.de' }
			
			
			
			
			
		]
		}
		else if(dt==2017){
			dp =[                                         
			{ y: 1137, label: 'www.aclweb.org' },
			{ y: 209, label: 'arxiv.org' },
			{ y: 178,  label: 'github.com' },              
			{ y: 124,  label: 'acm.org' },                 
			{ y: 34,  label: 'nips.cc' },
			{ y: 33, label: 'google.com' },
			{ y: 1257,  label: 'doi.org' },
			{ y: 22,  label: 'stanford.edu' },
			{ y: 17, label: 'aclanthology.info' },
			{ y: 19, label:  'jmlr.org' },
			{ y: 16, label: 'upenn.edu' },           
			{ y: 13,  label: 'wikipedia.org' },
			{ y: 19,  label: 'nih.gov' },       
			{ y: 6,  label: 'radimrehurek.com'},
			{ y: 16, label: 'www.tensorflow.org' },
			{ y: 9, label: 'transacl.org' },
			{ y: 13,  label: 'www.statmt.org' },
			{ y: 6, label: 'bitbucket.org'  },
			{ y: 7,  label: 'jhu.edu' },
			{ y: 6, label: 'handle.net' }
			
			
			
			
			
		]
		}
		else if(dt==2018){
			dp = [                                         
			{ y: 319, label: 'github.com' },
			{ y: 394, label: 'www.aclweb.org' },
			{ y: 152,  label: 'arxiv.org' },              
			{ y: 39,  label: 'acm.org' },                 
			{ y: 32,  label: 'stanford.edu' },
			{ y: 18, label: 'nips.cc' },
			{ y: 15,  label: 'wikipedia.org' },
			{ y: 15,  label: 'upenn.edu' },
			{ y: 10, label: 'openreview.net' },
			{ y: 20, label:  'google.com' },
			{ y: 14, label: 'www.statmt.org' },           
			{ y: 9,  label: 'spacy.io' },
			{ y: 10,  label: 'washington.edu' },       
			{ y: 8,  label: 'www.tensorflow.org'},
			{ y: 193, label: 'doi.org' },
			{ y: 7, label: 'transacl.org' },
			{ y: 11,  label: 'apache.org' },
			{ y: 7, label: 'bitbucket.org'  },
			{ y: 6,  label: 'saifmohammad.com' },
			{ y: 6, label: 'cogcomp.org' },
			{ y: 7, label: 'nltk.org' }
			
			
			
			
			
		]
		}
	else
	{
		dp = 'sayak';
	}
		
		
		
	var chart = new CanvasJS.Chart(res, {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	height: 320,
	width: 900,
	title:{
		text: yr
	},
	axisX: {
		interval: 1,
		
	},
	axisY: {
		title: ""
	},
	data: [{        
		type: "column",  
      	color: "#0303AC", 
		showInLegend: true, 
		legendMarkerColor: "grey",
		click: onClick2,
		name: yr.toString() ,
		legendText: "",
		dataPoints: dp
	}]
});
chart.render();
		
}


function onClick2(e)
{
	//alert(  e.dataSeries.name + ", dataPoint { x:" + e.dataPoint.x + ", y: "+ e.dataPoint.y + " }" );
	
	
	
	
	
	
	
	

	var node = document.getElementById("chartContainer6details2");
	node.innerHTML = '';
	var dt= e.dataSeries.name;
	var dtp = dt.concat(e.dataPoint.x);
	var str1= "chartContainer";
	var res = str1.concat(dtp);
		//alert(  e.dataSeries.type + ", dataPoint { x:" + res + ", y: "+ e.dataPoint.y + " }" );
	//alert(  res + ", dataPoint { x:" + e.dataPoint.x + ", y: "+ e.dataPoint.y + " }" );
	var idiv2 = document.createElement('div');
	idiv2.id = res;
	idiv2.className = res;
	var x3 = document.getElementById("chartContainer6details2");
	x3.appendChild(idiv2);
	
	var n1 = dt.concat('-');
	var n2 = n1.concat(e.dataPoint.x);
	
	
	
	
	if (dtp=='19960')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cs.rochester.edu/research/trains/ACL96' }
			
		]
	}
	else if (dtp=='19961')
	{
		dp =  [                                         
			{ y: 1, label: 'http://www.di.ufpe.br/~jr' }
			
		]
	}
	else if (dtp=='19962')
	{
		dp =  [                                         
			{ y: 1, label: "http://www.sfs.nphil.uni-tuebingen/'minnen" }
			
		]
	}
	else if (dtp=='19970')
	{
		dp =  [                                         
			{ y: 1, label: 'http://www.research.att.com/lewis' }
			
		]
	}
	else if (dtp=='19971')
	{
		dp =  [                                         
			{ y: 1, label: 'http://www.coling.uni-freiburg.de/' }
			
		]
	}
	else if (dtp=='19972')
	{
		dp = [                                         
			{ y: 1, label: 'http://hpsg.stanford.edu/hpsg/sag.html' }
			
		]
	}
	else if (dtp=='19973')
	{
		dp = [                                         
			{ y: 1, label: 'ruccs.rutgers.edu' }
			
		]
	}
	else if (dtp=='19974')
	{
		dp = [                                         
			{ y: 1, label: "http://www.ims.uni-stuttgart.de/'jochen/CBSem" }
			
		]
	}
	else if (dtp=='19975')
	{
		dp = [                                         
			{ y: 2, label: 'www.ps.uni-sb.de' }
			
		]
	}
	else if (dtp=='19976')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.globalink.com/home.html' }
			
		]
	}
	else if (dtp=='19977')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.logos-ca.com/' }
			
		]
	}
	else if (dtp=='19978')
	{
		dp =[                                         
			{ y: 1, label: 'http://systranmt.com/' }
			
		]
	}
	else if (dtp=='19980')
	{
		dp = [                                         
			{ y: 1, label: 'http://titania.cobuild.collins.co.uk/boe_info.html' }
			
		]
	}
	else if (dtp=='19981')
	{
		dp =  [                                         
			{ y: 1, label: 'http://www.conexor.fi/analysers.html' }
			
		]
	}
	else if (dtp=='19982')
	{
		dp =  [                                         
			{ y: 1, label: 'http://www.itl.nist.gov/div894' }
			
		]
	}
	else if (dtp=='19983')
	{
		dp =  [                                         
			{ y: 1, label: 'http://www.cs.biu.ac.il/,-~yuvalk/MBSL' }
			
		]
	}
	else if (dtp=='19984')
	{
		dp =  [                                         
			{ y: 1, label: 'http://www.ims.uni-' }
			
		]
	}
	else if (dtp=='19985')
	{
		dp =   [                                         
			{ y: 1, label: 'http://earth.let.uva.nl/-rens' }
			
		]
	}
	else if (dtp=='19986')
	{
		dp =   [                                         
			{ y: 1, label: 'http://www.cs.jhu.edu/-brill' }
			
		]
	}
	else if (dtp=='19987')
	{
		dp =   [                                         
			{ y: 1, label: 'http://www.cis.upenn.edu/-adwait' }
			
		]
	}
	else if (dtp=='19988')
	{
		dp =    [                                         
			{ y: 3, label: 'www.gmat.org' }
			
		]
	}
	else if (dtp=='19989')
	{
		dp =   [                                         
			{ y: 2, label: 'www.toefl.org' }
			
		]
	}
	else if (dtp=='199810')
	{
		dp =   [                                         
			{ y: 1, label: 'http://www.gmat.orff' }
			
		]
	}
	else if (dtp=='199811')
	{
		dp =   [                                         
			{ y: 1, label: 'http://www.toetl.org/tstprpmt.htm!' }
			
		]
	}
	else if (dtp=='199812')
	{
		dp =   [                                         
			{ y: 1, label: 'http://research.microsoft.com/nlp/' }
			
		]
	}
	else if (dtp=='199813')
	{
		dp =   [                                         
			{ y: 1, label: 'http://www.ee.umd' }
			
		]
	}
	else if (dtp=='199814')
	{
		dp =  [                                         
			{ y: 1, label: 'http://ciir.cs.urnass.edu/info/psfiles/tepubs/tepu' }
			
		]
	}
	else if (dtp=='199815')
	{
		dp = [                                         
			{ y: 1, label: 'http://nl.ijs.si/ME/CD/docs/mte-d' }
			
		]
	}
	else if (dtp=='199816')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.ids-mannheim.de/telril' }
			
		]
	}
	else if (dtp=='199817')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.itri.bton.ac.uk/events/senseval' }
			
		]
	}
	else if (dtp=='199818')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.georgetown.edu/luperfoy/Discourse-' }
			
		]
	}
	else if (dtp=='199819')
	{
		dp = [                                         
			{ y: 1, label: 'http://wombat.doc.ic.ac.uk' }
			
		]
	}
	else if (dtp=='19990')
	{
		dp =[                                         
			{ y: 1, label: 'http://www.link.cs.cmu.edu/lexfn' }
			
		]
	}
	else if (dtp=='19991')
	{
		dp =  [                                         
			{ y: 1, label: 'http://fofoca.mitre.org' }
			
		]
	}
	else if (dtp=='19992')
	{
		dp =  [                                         
			{ y: 2, label: 'nlp.cs.jhu.edu' }
			
		]
	}
	else if (dtp=='19993')
	{
		dp =  [                                         
			{ y: 1, label: 'http://www.ee.umd.edu/medlab/filter/paperslmlir.ps' }
			
		]
	}
	else if (dtp=='19994')
	{
		dp =  [                                         
			{ y: 1, label: 'http://www.gcorgetown.edu/luperfoy/Discourse-' }
			
		]
	}
	else if (dtp=='19995')
	{
		dp =  [                                         
			{ y: 1, label: 'http://www.cs.nmsu.edu/~wiebe/projects' }
			
		]
	}
	else if (dtp=='19996')
	{
		dp =  [                                         
			{ y: 1, label: 'http://web.math.auc.dk/-jhb/CoCo' }
			
		]
	}
	else if (dtp=='19997')
	{
		dp =  [                                         
			{ y: 1, label: 'http://www.morphologic.hu' }
			
		]
	}
	else if (dtp=='19998')
	{
		dp =  [                                         
			{ y: 2, label: 'www.cs.umanitoba.ca' }
			
		]
	}
	else if (dtp=='19999')
	{
		dp =  [                                         
			{ y: 1, label: 'http://www.cs.umanitob&.ca/-lindek/nlldemo.htm/' }
			
		]
	}
	else if (dtp=='199910')
	{
		dp =  [                                         
			{ y: 1, label: 'http://www.askjeeves.com'  }
			
		]
	}
	else if (dtp=='199911')
	{
		dp =  [                                         
			{ y: 1, label: 'http://www.electricmonk.com' }
			
		]
	}
	else if (dtp=='199911')
	{
		dp =  [                                         
			{ y: 1, label: 'http://www.electricmonk.com' }
			
		]
	}
	else if (dtp=='199912')
	{
		dp =  [                                         
			{ y: 1, label: 'http://altavista.com' }
			
		]
	}
	else if (dtp=='199913')
	{
		dp =  [                                         
			{ y: 1, label: 'http://www.dcs.gla.ac.uk/prosper/' }
			
		]
	}
	else if (dtp=='199914')
	{
		dp =  [                                         
			{ y: 1, label: 'http://www.fask.uni-mainz.de/user/rappl' }
			
		]
	}
	else if (dtp=='199915')
	{
		dp =  [                                         
			{ y: 1, label: 'http://www.cs.cmu.edu/' },
			{ y: 1, label: '~dougb/ident.html' }
			
		]
	}
	else if (dtp=='199916')
	{
		dp =  [                                         
			{ y: 1, label: 'http://www.rxrc.xerox.com/research/' }
			
		]
	}
	else if (dtp=='199917')
	{
		dp =  [                                         
			{ y: 1, label: 'http://xxx.lanl.gov/ps/cmp-' }
			
		]
	}
	else if (dtp=='199918')
	{
		dp =  [                                         
			{ y: 1, label: 'http://www.tipster.org' }
			
		]
	}
	else if (dtp=='199919')
	{
		dp =  [                                         
			{ y: 1, label: 'http://www.ltg.ed.ac.uk/software/index.html' }
			
		]
	}
	else if (dtp=='20000')
	{
		dp =  [                                         
			{ y: 3, label: 'www.iiit.net' }
			
		]
	}
	else if (dtp=='20001')
	{
		dp =  [                                         
			{ y: 2, label: 'www.ims.uni-stuttgart.de' }
			
		]
	}
	else if (dtp=='20002')
	{
		dp =  [                                         
			{ y: 2, label: 'www.muc.saic.com' }
			
		]
	}
	else if (dtp=='20003')
	{
		dp =  [                                         
			{ y: 1, label: 'http://www.sgi.com/Technology/mlc' }
			
		]
	}
	else if (dtp=='20004')
	{
		dp =  [                                         
			{ y: 1, label: 'http://www.ksl.Stanford.EDU/ontologies/time/' }
			
		]
	}
	else if (dtp=='20005')
	{
		dp =  [                                         
			{ y: 1, label: 'http://morph.ldc.upenn.edu/Catalog/LDC99T3' }
			
		]
	}
	else if (dtp=='20006')
	{
		dp =  [                                         
			{ y: 1, label: 'http://ilk.kub.nl/' }
			
		]
	}
	else if (dtp=='20007')
	{
		dp =  [                                         
			{ y: 1, label: 'http://www.cs.biu.ac.il/~yuvalk/MBSL' }
			
		]
	}
	else if (dtp=='20008')
	{
		dp =  [                                         
			{ y: 1, label: 'http://www.conexor.fi' }
			
		]
	}
	else if (dtp=='20009')
	{
		dp =  [                                         
			{ y: 1, label: 'http://www.ps.uni-sb.de/Papers/' }
			
		]
	}
	else if (dtp=='200010')
	{
		dp =  [                                         
			{ y: 1, label: 'http://www.mpi-sb' }
			
		]
	}
	else if (dtp=='200011')
	{
		dp =  [                                         
			{ y: 1, label: 'http://www.hcrc.ed.ac.uk/' }
			
		]
	}
	else if (dtp=='200012')
	{
		dp =  [                                         
			{ y: 1, label: 'http://www.people.cornell.edu/pages/cjc26/' }
			
		]
	}
	else if (dtp=='200013')
	{
		dp =  [                                         
			{ y: 1, label: 'http://www.ai.univie.ac.at/~harald/handbook.html' }
			
		]
	}
	else if (dtp=='200014')
	{
		dp =  [                                         
			{ y: 1, label: 'http://www.cicc.or.jp/homepage/english/about/a' }
			
		]
	}
	else if (dtp=='200015')
	{
		dp =  [                                         
			{ y: 1, label: 'http://www.aia.bppt.go.id/mmts' }
			
		]
	}
	else if (dtp=='200016')
	{
		dp =  [                                         
			{ y: 1, label: 'http://nlp.aia.bppt.go.id/' }
			
		]
	}
	else if (dtp=='200017')
	{
		dp =  [                                         
			{ y: 1, label: 'http://www.tdil.gov.in' }
			
		]
	}
	else if (dtp=='200018')
	{
		dp =  [                                         
			{ y: 1, label: 'http://www.cdac.org.in' }
			
		]
	}
	else if (dtp=='200019')
	{
		dp =  [                                         
			{ y: 1, label: 'http://www.links.nectec.or.th' }
			
		]
	}
	else if (dtp=='20010')
	{
		dp =  [                                         
			{ y: 7, label: 'www.w3.org' }
			
		]
	}
	else if (dtp=='20011')
	{
		dp =  [                                         
			{ y: 3, label: 'trec.nist.gov' }
			
		]
	}
	else if (dtp=='20012')
	{
		dp =  [                                         
			{ y: 3, label: 'www.cis.upenn.edu' }
			
		]
	}
	else if (dtp=='20013')
	{
		dp =  [                                         
			{ y: 2, label: 'www.inria.fr' }
			
		]
	}
	else if (dtp=='20014')
	{
		dp =  [                                         
			{ y: 2, label:  'www.collocations.de' }
			
		]
	}
	else if (dtp=='20015')
	{
		dp =  [                                         
			{ y: 2, label:  'www.loria.fr' }
			
		]
	}
	else if (dtp=='20016')
	{
		dp =  [                                         
			{ y: 1, label:  'cgi.portugues.mct.pt' }
			
		]
	}
	else if (dtp=='20017')
	{
		dp =  [                                         
			{ y: 2, label:  'www.ims.uni-stuttgart.de' }
			
		]
	}
	else if (dtp=='20018')
	{
		dp =  [                                         
			{ y: 1, label:  'http://www.limsi.fr/tlp' }
			
		]
	}
	else if (dtp=='20019')
	{
		dp =  [                                         
			{ y: 1, label:  'http://twentyone.tpd.tno.nl/' }
			
		]
	}
	else if (dtp=='200110')
	{
		dp =  [                                         
			{ y: 1, label:  'http://www.fb9-' }
			
		]
	}
	else if (dtp=='200111')
	{
		dp =  [                                         
			{ y: 1, label:  'http://coretex.itc.it/' }
			
		]
	}
	else if (dtp=='200112')
	{
		dp =  [                                         
			{ y: 1, label:  'http://www.kecl.ntt.co.jp/icl/mtg/resources/altjaws.html' }
			
		]
	}
	else if (dtp=='200113')
	{
		dp =  [                                         
			{ y: 1, label:  'http://www.cs.columbia.edu/regina' }
			
		]
	}
	else if (dtp=='200114')
	{
		dp =  [                                         
			{ y: 1, label:  'http://www.electricknowledge.com' }
			
		]
	}
	else if (dtp=='200115')
	{
		dp =  [                                         
			{ y: 1, label:  'http://www.cs.nyu.edu/cs/projects/proteus/evalb/' }
			
		]
	}
	else if (dtp=='200116')
	{
		dp =  [                                         
			{ y: 1, label:  'http://ilk.kub.nl/l' }
			
		]
	}
	else if (dtp=='200117')
	{
		dp =   [                                         
			{ y: 1, label:  'http://leo.stcloudstate.edu' }
			
		]
	}
	else if (dtp=='200118')
	{
		dp =   [                                         
			{ y: 1, label:  'http://www.itri.bton.ac.uk/projects/rags' }
			
		]
	}
	else if (dtp=='200119')
	{
		dp =   [                                         
			{ y: 1, label:  'http://www.pharmweb.net' }
			
		]
	}
	else if (dtp=='20020')
	{
		dp =   [                                         
			{ y: 2, label:  'www.altavista.com' }
			
		]
	}
	else if (dtp=='20021')
	{
		dp =   [                                         
			{ y: 2, label:  'maxent.sourceforge.net' }
			
		]
	}
	else if (dtp=='20022')
	{
		dp =   [                                         
			{ y: 2, label:  'www.google.com' }
			
		]
	}
	else if (dtp=='20023')
	{
		dp =   [                                         
			{ y: 1, label:  'http://www-white.media.mit.edu/' }
			
		]
	}
	else if (dtp=='20024')
	{
		dp =   [                                         
			{ y: 1, label:  'http://www.mozart-oz' }
			
		]
	}
	else if (dtp=='20025')
	{
		dp =   [                                         
			{ y: 3, label:  'http://research.microsoft.com/~dmax/WinMine/Tool' }
			
		]
	}
	else if (dtp=='20026')
	{
		dp =   [                                         
			{ y: 1, label:  'http://lingo.stanford.edu' }
			
		]
	}
	else if (dtp=='20027')
	{
		dp =   [                                         
			{ y: 1, label:  'http://www.cs.toronto.edu/' }
			
		]
	}
	else if (dtp=='20028')
	{
		dp =   [                                         
			{ y: 1, label:  'www.epinions.com' }
			
		]
	}
	else if (dtp=='20029')
	{
		dp =   [                                         
			{ y: 1, label:  'http://www.ps.uni-sb.de/oz/' },
			{ y: 1, label:  'http://www.coli.uni-sb.de/' }
			
		]
	}
	else if (dtp=='200210')
	{
		dp =   [                                         
			{ y: 1, label:  'http://fofoca.mitre.org' }
			
		]
	}
	else if (dtp=='200211')
	{
		dp =   [                                         
			{ y: 1, label:  'http://www.nlm.nih.gov/mesh/meshhome.html;' }
			
		]
	}
	else if (dtp=='200212')
	{
		dp =   [                                         
			{ y: 1, label:  'http://opennlp.sf.net' }
			
		]
	}
	else if (dtp=='200213')
	{
		dp =   [                                         
			{ y: 1, label:  'http://grok.sf.net' }
			
		]
	}
	else if (dtp=='200214')
	{
		dp =   [                                         
			{ y: 1, label:  'http://www.d.umn.edu/~tpederse/data.html' }
			
		]
	}
	else if (dtp=='200215')
	{
		dp =   [                                         
			{ y: 1, label:  'http://encarta.msn.com/default.asp' }
			
		]
	}
	else if (dtp=='200216')
	{
		dp =   [                                         
			{ y: 1, label:  'http://www.whlib.ac.cn/sjk/bkqs.htm' }
			
		]
	}
	else if (dtp=='200217')
	{
		dp =   [                                         
			{ y: 1, label:  'http://www.cs.waikato.ac.nz/e' }
			
		]
	}
	else if (dtp=='200218')
	{
		dp =   [                                         
			{ y: 1, label:  'http://tarjim.ajeeb.com/' }
			
		]
	}
	else if (dtp=='200219')
	{
		dp =   [                                         
			{ y: 1, label:  'http://www.muc.saic.com/' }
			
		]
	}
	else if (dtp=='20030')
	{
		dp =   [                                         
			{ y: 2, label:  'www.rulequest.com' }
			
		]
	}
	else if (dtp=='20031')
	{
		dp =   [                                         
			{ y: 2, label:  'www.research.att.com' }
			
		]
	}
	else if (dtp=='20032')
	{
		dp =   [                                         
			{ y: 2, label:  'maxent.sourceforge.net' }
			
		]
	}
	else if (dtp=='20033')
	{
		dp =   [                                         
			{ y: 2, label: 'www.ldc.upenn.edu' }
			
		]
	}
	else if (dtp=='20034')
	{
		dp =   [                                         
			{ y: 2, label:  'www.cs.cmu.edu' }
			
		]
	}
	else if (dtp=='20035')
	{
		dp =   [                                         
			{ y: 2, label:  'www.isi.edu' }
			
		]
	}
	else if (dtp=='20036')
	{
		dp =   [                                         
			{ y: 2, label:  'www.cs.columbia.edu' }
			
		]
	}
	else if (dtp=='20037')
	{
		dp =   [                                         
			{ y: 1, label:  'http://www.quiz-zone.co.uk' }
			
		]
	}
	else if (dtp=='20038')
	{
		dp =   [                                         
			{ y: 1, label:  'http://www.greatauk.com' }
			
		]
	}
	else if (dtp=='20039')
	{
		dp =   [                                         
			{ y: 1, label:  'http://www.nlp.cs.ritsumei.ac.jp/qac/' }
			
		]
	}
	else if (dtp=='200310')
	{
		dp =   [                                         
			{ y: 1, label:  'http://www.cs.nyu.edu/sekine/PROJECT/CRLQA/' }
			
		]
	}
	else if (dtp=='200311')
	{
		dp =  [                                         
			{ y: 1, label:  'http://info.ox.ac.uk/bnc' }
			
		]
	}
	else if (dtp=='200312')
	{
		dp =  [                                         
			{ y: 1, label:  'http://www.cia.gov/cia/publications/' }
			
		]
	}
	else if (dtp=='200313')
	{
		dp =  [                                         
			{ y: 1, label:  'http://www.hcrc.ed.ac.uk/gnome' }
			
		]
	}
	else if (dtp=='200314')
	{
		dp =  [                                         
			{ y: 1, label:  'http://www.umiacs.umd.edu/bonnie/verbs-English.lcs' }
			
		]
	}
	else if (dtp=='200315')
	{
		dp =  [                                         
			{ y: 1, label:  'http://chasen.aist-nara.ac.jp/' }
			
		]
	}
	else if (dtp=='200316')
	{
		dp =  [                                         
			{ y: 1, label:  'http://www.iijnet.or.jp/edr/' }
			
		]
	}
	else if (dtp=='200317')
	{
		dp =  [                                         
			{ y: 1, label:  'http://www.csse.monash.edu.au/jwb/edict.html' }
			
		]
	}
	else if (dtp=='200318')
	{
		dp =  [                                         
			{ y: 1, label:  'http://trec.nist.gov/' }
			
		]
	}
	else if (dtp=='200319')
	{
		dp =  [                                         
			{ y: 1, label:  'http://www.cogsci.princeton.edu/wn/' }
			
		]
	}
	else if (dtp=='20040')
	{
		dp =  [                                         
			{ y: 5, label:  'www.nist.gov' },
			{ y: 1, label:  'http://www.itl.nist.gov/iad/894.01/' },
			{ y: 2, label:  'trec.nist.gov' },
			{ y: 1, label:  'http://duc.nist.gov' },
			{ y: 1, label:  'tides.nist.gov' }
			
		]
	}
	else if (dtp=='20041')
	{
		dp =  [                                         
			{ y: 5, label:  'www.isi.edu' }
			
		]
	}
	else if (dtp=='20042')
	{
		dp =  [                                         
			{ y: 4, label:  'www.research.att.com' }
			
		]
	}
	else if (dtp=='20043')
	{
		dp =  [                                         
			{ y: 4, label:  'www.senseval.org' }
			
		]
	}
	else if (dtp=='20044')
	{
		dp =  [                                         
			{ y: 3, label:  'www.nlm.nih.gov' }
			
		]
	}
	else if (dtp=='20045')
	{
		dp =  [                                         
			{ y: 3, label:  'www.cogsci.princeton.edu' }
			
		]
	}
	else if (dtp=='20046')
	{
		dp =  [                                         
			{ y: 3, label:  'www.ai.mit.edu' }
			
		]
	}
	else if (dtp=='20047')
	{
		dp =  [                                         
			{ y: 2, label:  'arXiv.org' }
			
		]
	}
	else if (dtp=='20048')
	{
		dp =  [                                         
			{ y: 2, label:  'www.cs.waikato.ac.nz' }
			
		]
	}
	else if (dtp=='20049')
	{
		dp =   [                                         
			{ y: 2, label:  'www.csse.monash.edu.au' }
			
		]
	}
	else if (dtp=='200410')
	{
		dp =[                                         
			{ y: 2, label:  'www.census.gov' }
			
		]
	}
	else if (dtp=='200411')
	{
		dp = [                                         
			{ y: 2, label:  'research.nii.ac.jp' }
			
		]
	}
	else if (dtp=='200412')
	{
		dp = [                                         
			{ y: 2, label:  'lingo.stanford.edu' }
			
		]
	}
	else if (dtp=='200413')
	{
		dp = [                                         
			{ y: 2, label:  'nlp.cs.nyu.edu' }
			
		]
	}
	else if (dtp=='200414')
	{
		dp = [                                         
			{ y: 2, label:   'www.cis.upenn.edu' }
			
		]
	}
	else if (dtp=='200415')
	{
		dp =  [                                         
			{ y: 2, label:  'davidmlane.com' }
			
		]
	}
	else if (dtp=='200416')
	{
		dp =  [                                         
			{ y: 2, label:  'lists.sourceforge.net' },
			{ y: 1, label:  'http://openccg.sourceforge.net' }
			
		]
	}
	else if (dtp=='200417')
	{
		dp =  [                                         
			{ y: 1, label:  'http://roa.rutgers.edu/view.php3?id=845' }
			
		]
	}
	else if (dtp=='200418')
	{
		dp =  [                                         
			{ y: 1, label:  'www.cs.rochester.edu'}
			
			
		]
	}
	else if (dtp=='200419')
	{
		dp =  [                                         
			{ y: 1, label:  'http://www.dcs.shef.ac' },
			{ y: 1, label:  'http://www.dcs.shef.ac.uk' }
			
		]
	}
	else if (dtp=='20050')
	{
		dp =  [                                         
			{ y: 6, label:  'www.nist.gov' },
			{ y: 2, label:  'www.itl.nist.gov' },
			{ y: 2, label:  'trec.nist.gov' },
			{ y: 1, label:  'http://nlpir.nist.gov/projects/duc/pubs.html' },
			{ y: 1, label:  'http://www-nlpir.nist.gov/projects/duc/' }
			
			
		]
	}
	else if (dtp=='20051')
	{
		dp =  [                                         
			{ y: 4, label:  'chasen.org' }
			
		]
	}
	else if (dtp=='20052')
	{
		dp =  [                                         
			{ y: 4, label:   'www.clres.com' }
			
		]
	}
	else if (dtp=='20053')
	{
		dp =  [                                         
			{ y: 3, label:  'cnts.uia.ac.be' }
			
		]
	}
	else if (dtp=='20054')
	{
		dp =  [                                         
			{ y: 3, label:  'http://www.d.umn.edu/f' }
			
		]
	}
	else if (dtp=='20055')
	{
		dp =  [                                         
			{ y: 3, label:  'http://www.fjoch.com/YASMET.html' }
			
		]
	}
	else if (dtp=='20056')
	{
		dp =  [                                         

			{ y: 2, label:  'www.cis.upenn.edu' },
			{ y: 3, label:  'www.ldc.upenn.edu' }
			
		]
	}
	else if (dtp=='20057')
	{
		dp =  [                                         
			{ y: 3, label:  'http://search.cpan.org/' }
			
		]
	}
	else if (dtp=='20058')
	{
		dp =  [                                         
			{ y: 2, label:  'mallet.cs.umass.edu' },
			{ y: 1, label:  'www.cs.umass.edu' }
			
		]
	}
	else if (dtp=='20059')
	{
		dp =  [                                         
			{ y: 2, label:  'http://www.cs.cornell.edu/' }
			
		]
	}
	else if (dtp=='200510')
	{
		dp =  [                                         
			{ y: 2, label:  'www.ims.uni-stuttgart.de' }
			
		]
	}
	else if (dtp=='200511')
	{
		dp =  [                                         
			{ y: 2, label:  'www.csie.ntu.edu.tw' }
			
		]
	}
	else if (dtp=='200512')
	{
		dp =  [                                         
			{ y: 2, label:   'svmlight.joachims.org' }
			
		]
	}
	else if (dtp=='200513')
	{
		dp =  [                                         
			{ y: 2, label:  'nces.ed.gov' }
			
		]
	}
	else if (dtp=='200514')
	{
		dp =  [                                         
			{ y: 2, label:  'sourceforge.net' },
			{ y: 1, label:  'utool.sourceforge.net' },
			{ y: 1, label:  'maxent.sourceforge.net' },
			{ y: 1, label:  'openccg.sourceforge.net' },
			{ y: 1, label:  'agtk.sourceforge.net' },
			{ y: 1, label:  'senserelate.sourceforge.net' },
			{ y: 1, label:  'senseclusters.sourceforge.net' }
			
		]
	}
	else if (dtp=='200515')
	{
		dp =  [                                         
			{ y: 2, label:  'biocreative.ifsm.umbc.edu' }
			
		]
	}
	else if (dtp=='200516')
	{
		dp =  [      
			{ y: 2, label:  'www.nlm.nih.gov' },
			{ y: 2, label:  'www.ncbi.nlm.nih.gov' }
			
		]
	}
	else if (dtp=='200517')
	{
		dp =  [                                         
			{ y: 1, label:  'www.csail' }
			
		]
	}
	else if (dtp=='200518')
	{
		dp =  [                                         
			{ y: 1, label:  'http://www.speech.sri.com/projects/srilm/' }
			
		]
	}
	else if (dtp=='200519')
	{
		dp =  [                                         
			{ y: 1, label:  'http://www.sover.net/ozus/cinema.htm' }
			
		]
	}
	else if (dtp=='20060')
	{
		dp =  [                                         
			{ y: 9, label:  'nlp.cs.nyu.edu' }
			
		]
	}
	else if (dtp=='20061')
	{
		dp =  [                         
			{ y: 5, label:  'trec.nist.gov' },
			{ y: 2, label:  'www-nlpir.nist.gov' },
			{ y: 1, label:  'http://www.nist.gov/speech/tests/mt/resources/scoring.htm' },
			{ y: 1, label:  'http://www.itl.nist.gov/iaui/894.02/' }
			
		]
	}
	else if (dtp=='20062')
	{
		dp =  [                         
			{ y: 5, label:  'www.chasen.org' }
			
		]
	}
	else if (dtp=='20063')
	{
		dp =  [                         
			{ y: 2, label:  'chasen.aist-nara.ac.jp' }
			
		]
	}
	else if (dtp=='20064')
	{
		dp =  [                         
			{ y: 4, label:  'www.isi.edu' },
			{ y: 2, label:  'semantics.isi.edu' }
			
		]
	}
	else if (dtp=='20065')
	{
		dp =  [                         
			{ y: 4, label:  'www.ldc.upenn.edu' },
			{ y: 2, label:  'acl.ldc.upenn.edu' },
			{ y: 3, label:  'projects.ldc.upenn.edu' },
			{ y: 4, label:  'www.cis.upenn.edu' }			
		]
	}
	else if (dtp=='20066')
	{
		dp =  [                         
			{ y: 3, label:  'www-tsujii.is.s.u-tokyo.ac.jp' }			
		]
	}
	else if (dtp=='20067')
	{
		dp =  [                         
			{ y: 2, label:  'www.pascal-network.org' }			
		]
	}
	else if (dtp=='20068')
	{
		dp =  [                         
			{ y: 2, label:  'www.cs.ualberta.ca' }			
		]
	}
	else if (dtp=='20069')
	{
		dp =  [                         
			{ y: 2, label:  'www.ims.uni-stuttgart.de' }			
		]
	}
	else if (dtp=='200610')
	{
		dp =  [                         
			{ y: 2, label:  'www.hcrc.ed.ac.uk' }			
		]
	}
	else if (dtp=='200611')
	{
		dp =  [                         
			{ y: 2, label:  'www.csie.ntu.edu.tw' }			
		]
	}
	else if (dtp=='200612')
	{
		dp =  [                         
			{ y: 2, label:  'www.keenage.com' }			
		]
	}
	else if (dtp=='200613')
	{
		dp =  [                         
			{ y: 2, label:  'www.papillon-dictionary.org' }			
		]
	}
	else if (dtp=='200614')
	{
		dp =  [                         
			{ y: 2, label:  'www.natcorp.ox.ac.uk' }			
		]
	}
	else if (dtp=='200615')
	{
		dp =  [                         
			{ y: 2, label:  'homepages.inf.ed.ac.uk' }			
		]
	}
	else if (dtp=='200616')
	{
		dp =  [                         
			{ y: 2, label:  'chasen.naist.jp' }			
		]
	}
	else if (dtp=='200617')
	{
		dp =  [                         
			{ y: 2, label:  'mila.cs.technion.ac.il' }			
		]
	}
	else if (dtp=='200618')
	{
		dp =  [                         
			{ y: 2, label:  'www.cnts.ua.ac.be' }			
		]
	}
	else if (dtp=='200619')
	{
		dp =  [                         
			{ y: 2, label:  'www.bitterlemons.org' }			
		]
	}
	else if (dtp=='20070')
	{
		dp =  [                         
			{ y: 6, label:  'chasen.org' }			
		]
	}
	else if (dtp=='20071')
	{
		dp =  [                         
			{ y: 6, label:  'opennlp.sourceforge.net' }	,
			{ y: 1, label:  'http://nltk.sourceforge.net' },
			{ y: 1, label:  'http://audacity.sourceforge.net/' },
			{ y: 1, label:  'http://sourceforge.net/projects/mstparser' },
			{ y: 1, label:  'http://oscar3-chem.sourceforge.net/' },
			{ y: 1, label:  'http://poliqarp.sourceforge.net/' },
			{ y: 1, label:  'http://maxent.sourceforge.net' }
		]
	}
	else if (dtp=='20072')
	{
		dp =  [                         
			{ y: 6, label:  'www.isi.edu' }			
		]
	}
	else if (dtp=='20073')
	{
		dp =  [                                         
			{ y: 3, label:  'www.ldc.upenn.edu' },
			{ y: 4, label:  'www.cis.upenn.edu' },
			{ y: 2, label:  'projects.ldc.upenn.edu' },
			{ y: 2, label:  'www.cis.upenn.edu.bikel' }
			
		]
	}
	else if (dtp=='20074')
	{
		dp =  [                         
			{ y: 4, label:  'www.statmt.org' }			
		]
	}
	else if (dtp=='20075')
	{
		dp =  [                         
			{ y: 4, label:  'www.csie.ntu.edu.tw' }			
		]
	}
	else if (dtp=='20076')
	{
		dp =  [                                         
			{ y: 1, label:  'http://trec.nist.gov/data/reuters/' },
			{ y: 2, label:  'www-nlpir.nist.gov' },
			{ y: 4, label:  'www.nist.gov' }
			
		]
	}
	else if (dtp=='20077')
	{
		dp =  [                                         
			{ y: 3, label:  'hal3.name' }
			
		]
	}
	else if (dtp=='20078')
	{
		dp =  [                                         
			{ y: 3, label:  'search.cpan.org' }
			
		]
	}
	else if (dtp=='20079')
	{
		dp =  [                                         
			{ y: 3, label:  'lucene.apache.org' }
			
		]
	}
	else if (dtp=='200710')
	{
		dp =  [                                         
			{ y: 2, label: 'www.cs.waikato.ac.nz' }
			
		]
	}
	else if (dtp=='200711')
	{
		dp =  [                                         
			{ y: 2, label: 'svmlight.joachims.org' }
			
		]
	}
	else if (dtp=='200712')
	{
		dp =  [                                         
			{ y: 2, label: 'corpus.leeds.ac.uk' }
			
		]
	}
	else if (dtp=='200713')
	{
		dp =  [                                         
			{ y: 2, label: 'homepages.inf.ed.ac.uk' }
			
		]
	}
	else if (dtp=='200714')
	{
		dp =  [                                         
			{ y: 2, label: 'www.cnts.ua.ac.be' }
			
		]
	}
	else if (dtp=='200715')
	{
		dp =  [                                         
			{ y: 2, label: 'www.fjoch.com' }
			
		]
	}
	else if (dtp=='200716')
	{
		dp =  [                                         
			{ y: 2, label: 'www.speech.sri.com' }
			
		]
	}
	else if (dtp=='200717')
	{
		dp =  [                                         
			{ y: 2, label: 'www.eml-research.de' }
			
		]
	}
	else if (dtp=='200718')
	{
		dp =  [                                         
			{ y: 2, label: 'www.cs.ualberta.ca' }
			
		]
	}
	else if (dtp=='200719')
	{
		dp =  [                                         
			{ y: 2, label: 'glaros.dtc.umn.edu' }
			
		]
	}
	else if (dtp=='20080')
	{
		dp =  [                                         
			{ y: 7, label: 'www.statmt.org' }
			
		]
	}
	else if (dtp=='20081')
	{
		dp =  [                                         
			{ y: 6, label: 'nlp.stanford.edu' },
			{ y: 1, label: 'infomap.stanford.edu' }
			
		]
	}
	else if (dtp=='20082')
	{
		dp =  [                                         
			{ y: 4, label: 'chasen.org' }
			
		]
	}
	else if (dtp=='20083')
	{
		dp =  [                                         
			{ y: 5, label: 'www.cl.cam.ac.uk' }
			
		]
	}
	else if (dtp=='20084')
	{
		dp =  [                                         
			{ y: 4, label: 'www.cs.cmu.edu' },
			{ y: 1, label: 'ankara.lti.cs.cmu.edu' }
			
		]
	}
	else if (dtp=='20085')
	{
		dp =  [ 
			{ y: 4, label:  'sourceforge.net' },
			{ y: 4, label:  'opennlp.sourceforge.net' },
			{ y: 2, label:  'openccg.sourceforge.net' },
			{ y: 2, label:  'maxent.sourceforge.net' },
			{ y: 2, label:  'mecab.sourceforge.net' },
			{ y: 1, label:  'cmusphinx.sourceforge.net' },
			{ y: 1, label:  'minorthird.sourceforge.net' },
			{ y: 1, label:  'jwordnet.sourceforge.net' },
			{ y: 1, label:  'mstparser.sourceforge.net' },
			{ y: 1, label:  'lpsolve.sourceforge.net' },
			{ y: 1, label:  'riso.sourceforge.net' }
			
		]
	}
	else if (dtp=='20086')
	{
		dp =  [                                         
			{ y: 2, label: 'www.cs.ualberta.ca' }
			
		]
	}
	else if (dtp=='20087')
	{
		dp =  [                                         
			{ y: 4, label: 'homepages.inf.ed.ac.uk' }
			
		]
	}
	else if (dtp=='20088')
	{
		dp =  [                                         
			{ y: 6, label:  'duc.nist.gov' },
			{ y: 4, label:  'www.nist.gov' },
			{ y: 3, label:  'trec.nist.gov' },
			{ y: 1, label:  'math.nist.gov' }
			
		]
	}
	else if (dtp=='20089')
	{
		dp =  [                                         
			{ y: 4, label:  'projects.ldc.upenn.edu' },
			{ y: 3, label:  'www.cis.upenn.edu' },
			{ y: 2, label:  'www.ldc.upenn.edu' },
			{ y: 1, label:  'www.seas.upenn.edu' }
			
		]
	}
	else if (dtp=='200810')
	{
		dp =  [                                         
			{ y: 3, label: 'www.w3.org' }
			
		]
	}
	else if (dtp=='200811')
	{
		dp =  [                                         
			{ y: 3, label: 'wordnet.princeton.edu' }
			
		]
	}
	else if (dtp=='200812')
	{
		dp = [                                         
			{ y: 3, label:  'hal3.name' },
			{ y: 3, label:  'pub.hal3.name' }
			
		]
	}
	else if (dtp=='200813')
	{
		dp =  [                                         
			{ y: 2, label:  'answers.yahoo.com' }
			
		]
	}
	else if (dtp=='200814')
	{
		dp =  [                                         
			{ y: 3, label:  'www.csie.ntu.edu.tw' }
			
		]
	}
	else if (dtp=='200815')
	{
		dp =  [                                         
			{ y: 3, label:  'www.mturk.com' }
			
		]
	}
	else if (dtp=='200816')
	{
		dp =  [                                         
			{ y: 3, label:  'www.summarization.com' }
			
		]
	}
	else if (dtp=='200817')
	{
		dp =  [                                         
			{ y: 1, label:  'alchemy.cs.washington.edu' }
			
		]
	}
	else if (dtp=='200818')
	{
		dp =  [                                         
			{ y: 2, label:  'mallet.cs.umass.edu' }
			
		]
	}
	else if (dtp=='200819')
	{
		dp =  [                                         
			{ y: 2, label:  'bllip.cs.brown.edu' }
			
		]
	}
	else if (dtp=='20090')
	{
		dp =  [                                         
			{ y: 9, label:  'nlp.stanford.edu'  }
			
		]
	}
	else if (dtp=='20091')
	{
		dp =  [                                         
			{ y: 8, label:  'www.statmt.org'  }
			
		]
	}
	else if (dtp=='20092')
	{
		dp =  [                                         
			{ y: 7, label:  'www.nist.gov' },
			{ y: 3, label:  'duc.nist.gov' },
			{ y: 3, label:  'trec.nist.gov' },
			{ y: 1, label:  'http://www.itl.nist.gov/iad/mig/tests/mt/2008/doc/' },
			{ y: 1, label:  'http://www-nlpir.nist.gov/projects/duc/duc2007/' }
			
		]
	}
	else if (dtp=='20093')
	{
		dp =  [                                         
			{ y: 6, label:  'www.cis.upenn.edu' },
			{ y: 2, label:  'http://www.seas.upenn.edu/~mdredze/datasets/sentiment/' },
			{ y: 2, label:  'projects.ldc.upenn.edu' },
			{ y: 1, label:  'www.ldc.upenn.edu' },
			{ y: 1, label:  'bioie.ldc.upenn.edu' }
			
		]
	}
	else if (dtp=='20094')
	{
		dp =  [                                         
			{ y: 1, label:  'http://www.wikipedia.org/'},
			{ y: 1, label:   'download.wikipedia.org' },
			{ y: 6, label:   'en.wikipedia.org' },
			{ y: 6, label:   'ja.wikipedia.org' }
			
			
			
			
		]
	}
	else if (dtp=='20095')
	{
		dp =  [                                         
			{ y: 5, label:  'code.google.com' },
			{ y: 1, label:  'translate.google.com' },
			{ y: 1, label:  'labs.google.com' },
			{ y: 1, label:  'directory.google.com' }
			
		]
	}
	else if (dtp=='20096')
	{
		dp =  [                                         
			{ y: 4, label:  'www.cs.ualberta.ca' }
			
		]
	}
	else if (dtp=='20097')
	{
		dp =  [
			{ y: 3, label: 'sourceforge.net' },
			{ y: 1, label:  'http://stardict.sourceforge.net/' },
			{ y: 1, label:  'http://lpsolve.sourceforge.net/5.5/' },
			{ y: 4, label:  'opennlp.sourceforge.net' },
			{ y: 2, label: 'crfpp.sourceforge.net' },
			{ y: 1, label: 'http://argmax.sourceforge.net/' },
			{ y: 1, label: 'http://maxent.sourceforge.net' },
			{ y: 1, label: 'http://jswarm-pso.sourceforge.net/' },
			{ y: 1, label: 'http://nltk.sourceforge.net/'}
			
		]
	}
	else if (dtp=='20098')
	{
		dp =  [                                         
			{ y: 4, label:  'svmlight.joachims.org' }
			
		]
	}
	else if (dtp=='20099')
	{
		dp =  [                                         
			{ y: 4, label:  'lucene.apache.org' }
			
		]
	}
	else if (dtp=='200910')
	{
		dp =  [                                         
			{ y: 3, label:   'verbs.colorado.edu' }
			
		]
	}
	else if (dtp=='200911')
	{
		dp =  [                                         
			{ y: 3, label:  'ir.hit.edu.cn' }
			
		]
	}
	else if (dtp=='200912')
	{
		dp = [                                         
			{ y: 1, label:  'nlp.kuee.kyoto-u.ac.jp' }
			
		]
	}
	else if (dtp=='200913')
	{
		dp = [                                         
			{ y: 3, label:  'www.cs.pitt.edu' }
			
		]
	}
	else if (dtp=='200914')
	{
		dp = [                                         
			{ y: 3, label:  'www.cs.cornell.edu' }
			
		]
	}
	else if (dtp=='200915')
	{
		dp = [                                         
			{ y: 2, label:  'www.flickr.com' }
			
		]
	}
	else if (dtp=='200916')
	{
		dp = [                                         
			{ y: 3, label:  'www.cnts.ua.ac.be' }
			
		]
	}
	else if (dtp=='200917')
	{
		dp = [                                         
			{ y: 3, label:  'www.speech.sri.com' }
			
		]
	}
	else if (dtp=='200918')
	{
		dp = [                                         
			{ y: 3, label:  'mallet.cs.umass.edu' }
			
		]
	}
	else if (dtp=='200919')
	{
		dp = [                                         
			{ y: 3, label:  'edits.fbk.eu' }
			
		]
	}
	else if (dtp=='20100')
	{
		dp = [                                         
			{ y: 10, label:  'www.nist.gov' },
			{ y: 3, label:  'duc.nist.gov' },
			{ y: 2, label:  'www-nlpir.nist.gov' },
			{ y: 3, label:  'trec.nist.gov' },
			{ y: 4, label:  'www.itl.nist.gov' },
			{ y: 1, label:  'http://nist.gov/speech/tests' }
			
			
		]
	}
	else if (dtp=='20101')
	{
		dp = [                                         
			{ y: 10, label:  'nlp.stanford.edu' },
			{ y: 1, label:  'http://nlp.stanford.edu:8080/parser/' },
			{ y: 1, label:  'cs.stanford.edu' },
			{ y: 1, label:  'protege.stanford.edu' },
			
		]
	}
	else if (dtp=='20102')
	{
		dp = [                                         
			{ y: 8, label:  'mallet.cs.umass.edu' }
			
		]
	}
	else if (dtp=='20103')
	{
		dp = [                                         
			{ y: 7, label:  'www.csie.ntu.edu.tw' }
			
		]
	}
	else if (dtp=='20104')
	{
		dp = [    
			{ y: 2, label:  'sourceforge.net' },
			{ y: 1, label:  'tadm.sourceforge.net' },
			{ y: 1, label:  'http://flexcrfs.sourceforge' },
			{ y: 1, label:  'http://texhyphj.sourceforge.net' },
			{ y: 1, label:  'http://crfpp.sourceforge.net/' },
			{ y: 1, label:  'http://mmax2.sourceforge.net/' },
			{ y: 1, label:  'http://stardict.sourceforge.net/' },
			{ y: 1, label:  'http://chasen-legacy.sourceforge.jp/' },
			{ y: 1, label:  'http://multiparse.sourceforge.net' },
			{ y: 2, label:  'lpsolve.sourceforge.net' },
			{ y: 1, label:  'http://mecab.sourceforge.net' },
			{ y: 7, label:  'http://opennlp.sourceforge' },
			{ y: 1, label:  'http://wn-similarity.sourceforge.net/' },
			{ y: 1, label:  'http://jwordnet.sourceforge.net/' },
			{ y: 1, label:  'http://maxent.sourceforge.net/' }
			
		]
	}
	else if (dtp=='20105')
	{
		dp = [                                         
			{ y: 6, label:   'www.cs.chalmers.se' }
			
		]
	}
	else if (dtp=='20106')
	{
		dp = [                                         
			{ y: 5, label:  'homepages.inf.ed.ac.uk' },
			{ y: 1, label:  'http://homepages.inf' }
			
		]
	}
	else if (dtp=='20107')
	{
		dp = [                                         
			{ y: 5, label:  'www.cis.upenn.edu' },
			{ y: 1, label:  'http://www.seas.upenn.edu/~mdredze/datasets/sentiment/' },
			{ y: 4, label:  'projects.ldc.upenn.edu' },
			{ y: 2, label:  'www.ldc.upenn.edu' }
			
		]
	}
	else if (dtp=='20108')
	{
		dp = [                                         
			{ y: 1, label:   'www.google.com' },
			{ y: 5, label:   'translate.google.com' },
			{ y: 5, label:   'code.google.com' },
			{ y: 2, label:   'news.google.com' }
			
		]
	}
	else if (dtp=='20109')
	{
		dp = [                                         
			{ y: 5, label:  'www.isi.edu' }
			
		]
	}
	else if (dtp=='201010')
	{
		dp = [                                         
			{ y: 3, label:  'webdocs.cs.ualberta.ca' }
			
		]
	}
	else if (dtp=='201011')
	{
		dp = [                                         
			{ y: 5, label:  'www.anc.org' }
			
		]
	}
	else if (dtp=='201012')
	{
		dp = [                                         
			{ y: 4, label:  'www.cs.washington.edu' }
			
		]
	}
	else if (dtp=='201013')
	{
		dp = [                                         
			{ y: 4, label:  'www.amazon.com' }
			
		]
	}
	else if (dtp=='201014')
	{
		dp = [                                         
			{ y: 4, label:  'svmlight.joachims.org' }
			
		]
	}
	else if (dtp=='201015')
	{
		dp = [                                         
			{ y: 4, label:  'www.cs.pitt.edu' }
			
		]
	}
	else if (dtp=='201016')
	{
		dp = [                                         
			{ y: 4, label:  'wordnet.princeton.edu' }
			
		]
	}
	else if (dtp=='201017')
	{
		dp = [                                         
			{ y: 3, label:  'www.sil.org' }
			
		]
	}
	else if (dtp=='201018')
	{
		dp = [                                         
			{ y: 3, label:  'hdl.handle.net' }
			
		]
	}
	else if (dtp=='201019')
	{
		dp = [                                         
			{ y: 3, label:  'lcl.uniroma1.it' }
			
		]
	}
	else if (dtp=='20110')
	{
		dp = [                                         
			{ y: 15, label:  'en.wikipedia.org' },
			{ y: 3, label:  'www.wikipedia.org' },
			{ y: 4, label:  'simple.wikipedia.org' }
			
		]
	}
	else if (dtp=='20111')
	{
		dp = [                                         
			{ y: 3, label:  'www.google.com' },
			{ y: 4, label:  'translate.google.com' },
			{ y: 12, label:  'code.google.com' },
			{ y: 2, label:  'sites.google.com' },
			{ y: 1, label:  'http://news.google.com' }
			
		]
	}
	else if (dtp=='20112')
	{
		dp = [                                         
			{ y: 11, label:  'www.statmt.org' }
			
		]
	}
	else if (dtp=='20113')
	{
		dp = [                                         
			{ y: 10, label:  'nlp.stanford.edu' }
			
		]
	}
	else if (dtp=='20114')
	{
		dp = [                                         
			{ y: 10, label:  'sourceforge.net' },
			{ y: 1, label:  'http://maxent.sourceforge.net' },
			{ y: 2, label:  'crftagger.sourceforge.net' },
			{ y: 4, label:  'crfpp.sourceforge.net' },
			{ y: 4, label:  'opennlp.sourceforge.net' },
			{ y: 1, label:  'http://pocket-crf-1.sourceforge.net/' },
			{ y: 1, label:  'http://Infomap-nlp.sourceforge.net/' },
			{ y: 1, label:  'http://gibbslda.sourceforge.net' },
			{ y: 1, label:  'http://jazzy.sourceforge.net/' },
			{ y: 1, label:  'http://lpsolve.sourceforge.net/' },
			{ y: 1, label:  'http://scopefinder.sourceforge.net/' },
			{ y: 1, label:  'http://aspell.sourceforge.net' },
			{ y: 1, label:  'http://mecab.sourceforge.net' },
			{ y: 1, label:  'http://wikipedia-miner.sourceforge.net' },
			{ y: 1, label:  'http://javaxdelta.sourceforge.net/' },
			{ y: 1, label:  'http://jung.sourceforge.net/' }
			
		]
	}
	else if (dtp=='20115')
	{
		dp = [                                         
			{ y: 7, label:  'mallet.cs.umass.edu' },
			{ y: 1, label:  'ciir.cs.umass.edu' },
			{ y: 1, label:  'www.cs.umass.edu' }
			
		]
	}
	else if (dtp=='20116')
	{
		dp = [                                         
			{ y: 6, label:  'www.csie.ntu.edu.tw' }
			
		]
	}
	else if (dtp=='20117')
	{
		dp = [                                         
			{ y: 6, label:  'github.com' }
			
		]
	}
	else if (dtp=='20118')
	{
		dp = [                                         
			{ y: 5, label:  'www.cs.cmu.edu' },
			{ y: 1, label:  'http://www.speech.cs.cmu.edu/sphinx/tutorial.html' },
			{ y: 3, label:  'www.ark.cs.cmu.edu' },
			{ y: 1, label:  'http://boston.lti.cs.cmu.edu/Data/clueweb09/' },
			{ y: 3, label:  'rtw.ml.cmu.edu' }
			
		]
	}
	else if (dtp=='20119')
	{
		dp = [                                         
			{ y: 5, label:  'svmlight.joachims.org' }
			
		]
	}
	else if (dtp=='201110')
	{
		dp = [
			{ y: 2, label:  'www.ldc.upenn.edu' },
			{ y: 5, label:  'projects.ldc.upenn.edu' },
			{ y: 1, label:  'https://dbappserv.cis.upenn.edu/spell/' },
			{ y: 1, label:  'http://www.cis.upenn.edu/' },
			{ y: 1, label:  'http://ww.ldc.upenn.edu/Project/GALE' },
			{ y: 1, label:  'http://www.seas.upenn.edu/' }
			
		]
	}
	else if (dtp=='201111')
	{
		dp = [                                         
			{ y: 4, label:  'www.itl.nist.gov' },
			{ y: 3, label:  'trec.nist.gov' },
			{ y: 5, label:  'www.nist.gov' },
			{ y: 1, label:  'http://www-nlpir.nist.gov/related_projects/muc/' }
			
		]
	}
	else if (dtp=='201112')
	{
		dp = [                                         
			{ y: 4, label:  'cogcomp.cs.illinois.edu' },
			
			
		]
	}
	else if (dtp=='201113')
	{
		dp = [                                         
			{ y: 4, label:  'research.microsoft.com' }
			
		]
	}
	else if (dtp=='201114')
	{
		dp = [                                         
			{ y: 4, label:  'www.mturk.com' }
			
		]
	}
	else if (dtp=='201115')
	{
		dp = [                                         
			{ y: 3, label:  'www.cs.cornell.edu' }
			
		]
	}
	else if (dtp=='201116')
	{
		dp = [                                         
			{ y: 3, label:  'www.wjh.harvard.edu' }
			
		]
	}
	else if (dtp=='201117')
	{
		dp = [                                         
			{ y: 3, label:  'groups.csail.mit.edu' }
			
		]
	}
	else if (dtp=='201118')
	{
		dp = [                                         
			{ y: 3, label:  'fjoch.com' }
			
		]
	}
	else if (dtp=='201119')
	{
		dp = [                                         
			{ y: 3, label:  'www.ark.cs.cmu.edu' }
			
		]
	}
	else if (dtp=='20120')
	{
		dp = [                                         
			{ y: 3, label:  'sites.google.com' },
			{ y: 19, label:  'code.google.com' },
			{ y: 2, label:  'translate.google.com' },
			{ y: 1, label:  'https://support.google.com/adwords/' },
			{ y: 3, label:  'books.google.com' }
			
		]
	}
	else if (dtp=='20121')
	{
		dp = [                                         
			{ y: 12, label:  'nlp.stanford.edu' },
			{ y: 2, label:  'ai.stanford.edu' },
			{ y: 1, label:  'cs.stanford.edu' }
			
		]
	}
	else if (dtp=='20122')
	{
		dp =[                                         
			{ y: 10, label:  'www.aclweb.org' }
			
		]
	}
	else if (dtp=='20123')
	{
		dp = [                                         
			{ y: 6, label:  'github.com' }
			
		]
	}
	else if (dtp=='20124')
	{
		dp = [                                         
			{ y: 6, label:  'www.statmt.org' }
			
		]
	}
	else if (dtp=='20125')
	{
		dp = [                                         
			{ y: 6, label:  'mallet.cs.umass.edu' },
			{ y: 1, label:  'www.iesl.cs.umass.edu' }
			
		]
	}
	else if (dtp=='20126')
	{
		dp = [                                         
			{ y: 6, label:  'en.wikipedia.org' },
			{ y: 3, label:  'www.wikipedia.org' },
			{ y: 1, label:  'simple.wikipedia.org' },
			{ y: 1, label:  'http://zh.wikipedia.org/wiki' }
			
		]
	}
	else if (dtp=='20127')
	{
		dp = [                                         
			{ y: 4, label:  'lucene.apache.org' }
			
		]
	}
	else if (dtp=='20128')
	{
		dp = [
			{ y: 1, label:  'sourceforge.net' },
			{ y: 2, label:  'opennlp.sourceforge.net' },
			{ y: 4, label:  'crfpp.sourceforge.net' },
			{ y: 1, label:  'http://gibbslda.sourceforge.net/' },
			{ y: 1, label:  'http://wn-similarity.sourceforge.net' },
			{ y: 1, label:  'mecab.sourceforge.net' },
			{ y: 1, label:  'http://sourceforge.net/projects/opennlp/' },
			{ y: 1, label:  'http://inprotk.sourceforge.net' },
			{ y: 1, label:  'http://java-ml.sourceforge.net/' }
			
			
		]
	}
	else if (dtp=='20129')
	{
		dp = [     
			{ y: 4, label:  'www.nist.gov' },
			{ y: 2, label:  'www.itl.nist.gov' },
			{ y: 1, label:  'trec.nist.gov' }
			
			
		]
	}
	else if (dtp=='201210')
	{
		dp = [                                         
			{ y: 3, label:  'groups.csail.mit.edu' }
			
		]
	}
	else if (dtp=='201211')
	{
		dp = [                                         
			{ y: 2, label:  'www.seas.upenn.edu' },
			{ y: 3, label:  'www.cis.upenn.edu' },
			{ y: 1, label:  'projects.ldc.upenn.edu' },
			{ y: 1, label:  'http://projects.ldc.upenn.edu/ace' },
			{ y: 1, label:  'www.ldc.upenn.edu' }
			
		]
	}
	else if (dtp=='201212')
	{
		dp = [                                         
			{ y: 3, label:  'disi.unitn.it' },
			{ y: 1, label:  'clic.cimec.unitn.it' }
			
		]
	}
	else if (dtp=='201213')
	{
		dp = [                                         
			{ y: 3, label:  'www.lemurproject.org' }
			
		]
	}
	else if (dtp=='201214')
	{
		dp = [                                         
			{ y: 3, label:  'homepages.inf.ed.ac.uk' }
			
		]
	}
	else if (dtp=='201215')
	{
		dp = [                                         
			{ y: 3, label:  'http://mturk.com' }
			
		]
	}
	else if (dtp=='201216')
	{
		dp = [                                         
			{ y: 3, label:  'www.speech.cs.cmu.edu' }
			
		]
	}
	else if (dtp=='201217')
	{
		dp = [                                         
			{ y: 3, label:  'www.csie.ntu.edu.tw' }
			
		]
	}
	else if (dtp=='201218')
	{
		dp = [                                         
			{ y: 3, label:  'www.accurat-project.eu' }
			
		]
	}
	else if (dtp=='201219')
	{
		dp = [                                         
			{ y: 2, label:  'http://phontron.com/pialign/' }
			
		]
	}
	else if (dtp=='20130')
	{
		dp = [                                         
			{ y: 32, label:  'nlp.stanford.edu' },
			{ y: 1, label:  'www.stanford.edu' },
			

			
		]
	}
	else if (dtp=='20131')
	{
		dp = [      
			{ y: 26, label:  'http://code.google' },
			{ y: 4, label:  'translate.google.com' },
			{ y: 1, label:  'https://sites.google.com/site/sancl2012/home/shared-' },
			{ y: 1, label:  'https://support.google.com/adwords/' },
			{ y: 1, label:  'https://play.google.com/store' },
			{ y: 3, label:  'books.google.com' }
			
		]
	}
	else if (dtp=='20132')
	{
		dp = [
	
				{ y: 24, label:  'en.wikipedia.org' },
				{ y: 1, label:  'http://de.wikipedia.org/wiki/' },
				{ y: 1, label:  'http://zh.wikipedia.org/wiki/' },
				{ y: 1, label:  'http://www.wikipedia.org/' }
			
		]
	}
	else if (dtp=='20133')
	{
		dp = [                                         
			{ y: 20, label:  'github.com' }
		]
	}
	else if (dtp=='20134')
	{
		dp = [                                         
			{ y: 12, label:   'www.statmt.org' },
			{ y: 2, label:   'http://www.statmt.or/wmt12' }
		]
	}
	else if (dtp=='20135')
	{
		dp = [                                         
			{ y: 11, label:  'mallet.cs.umass.edu' },
			{ y: 1, label:  'http://ciir.cs.umass.edu/pubfiles/' },
			{ y: 1, label:  'http://www.cs.umass.edu/' },
			{ y: 1, label:  'http://people.cs.umass.edu/' },
			{ y: 1, label:  'http://factorie.cs.umass.edu' }
			
		]
	}
	else if (dtp=='20136')
	{
		dp = [                                         
			{ y: 7, label:  'sourceforge.net' },
			{ y: 1, label:  'http://mecab.sourceforge.net/' },
			{ y: 1, label:  'http://stardict.sourceforge.net/' },
			{ y: 1, label:  'http://crftagger.sourceforge.net/'},
			{ y: 1, label:  'http://wordlist.sourceforge.net/' },
			{ y: 1, label:  'http://lpsolve.sourceforge.net/5.5/' },
			{ y: 1, label:  'http://crfpp.sourceforge' },
			{ y: 1, label:  'http://openccg.sourceforge.net/' },
			{ y: 1, label:  'http://pdftohtml.sourceforge.net/' },
			{ y: 1, label:  'http://opennlp.sourceforge.net/projects.html' },
			{ y: 1, label:  'http://jpf.sourceforge.net/' },
			{ y: 1, label:  'http://java-ml.sourceforge.net/api/0.1.7/' }
			
		]
	}
	else if (dtp=='20137')
	{
		dp = [                                         
			{ y: 7, label:  'lcl.uniroma1.it' }
			
		]
	}
	else if (dtp=='20138')
	{
		dp = [                                         
			{ y: 6, label:  'www.ark.cs.cmu.edu' },
			{ y: 3, label:  'www.cs.cmu.edu' },
			{ y: 3, label:  'www.speech.cs.cmu.edu' }
			
		]
	}
	else if (dtp=='20139')
	{
		dp = [                                         
			{ y: 6, label:  'dumps.wikimedia.org' },
			{ y: 1, label:  'download.wikimedia.org' },
			{ y: 1, label:  'meta.wikimedia.org' }
			
		]
	}
	else if (dtp=='201310')
	{
		dp = [                                         
			{ y: 6, label:  'www.csie.ntu.edu.tw' }
			
		]
	}
	else if (dtp=='201311')
	{
		dp = [                                         
			{ y: 6, label:  'dev.twitter.com' }
			
		]
	}
	else if (dtp=='201312')
	{
		dp = [                                         
			{ y: 5, label:  'homepages.inf.ed.ac.uk' }
			
		]
	}
	else if (dtp=='201313')
	{
		dp = [   
			{ y: 4, label:  'www.nist.gov' },
			{ y: 3, label:  'www.itl.nist.gov' },
			{ y: 5, label:  'trec.nist.gov' },
			{ y: 2, label:  'duc.nist.gov' }
			
			
		]
	}
	else if (dtp=='201314')
	{
		dp = [                                         
			{ y: 5, label:  'http://www.ukp.tu-darmstadt' }
			
		]
	}
	else if (dtp=='201315')
	{
		dp = [                                         
			{ y: 5, label:  'disi.unitn.it' },
			{ y: 3, label:  'clic.cimec.unitn.it' }
			
		]
	}
	else if (dtp=='201316')
	{
		dp = [                                         
			{ y: 5, label:  'nlp.ist.i.kyoto-u.ac.jp' }
			
		]
	}
	else if (dtp=='201317')
	{
		dp =  [                                         
			{ y: 5, label:  'takelab.fer.hr' }
			
		]
	}
	else if (dtp=='201318')
	{
		dp = [                                         
			{ y: 4, label:  'ufal.mff.cuni.cz' }
			
		]
	}
	else if (dtp=='201319')
	{
		dp = [                                         
			{ y: 4, label:   'www.ldc.upenn.edu' },
			{ y: 3, label:  'projects.ldc.upenn.edu' },
			{ y: 1, label:  'http://www.cis.upenn.edu/dbikel/software.html#comparator' },
			{ y: 1, label:  'http://www.ircs.upenn.edu/arabic/Jan03release/' },
			{ y: 1, label:  'http://www.seas.upenn.edu/strctlrn/BioTagger/BioTagger.html' }
			
		]
	}
	else if (dtp=='20140')
	{
		dp = [                                         
			{ y: 37, label:   'code.google.com' },
			{ y: 1, label:   'https://plus.google.com/' },
			{ y: 6, label:   'developers.google.com' },
			{ y: 4, label:   'sites.google.com' },
			{ y: 5, label:   'books.google.com' },
			{ y: 2, label:   'www.google.com' },
			{ y: 3, label:   'translate.google.com' }
			
		]
	}
	else if (dtp=='20141')
	{
		dp = [                                         
			{ y: 33, label:   'www.github.com' },
		]
	}
	else if (dtp=='20142')
	{
		dp = [                                         
			{ y: 29, label:   'nlp.stanford.edu' },
			{ y: 4, label:   'www-nlp.stanford.edu' },
			{ y: 1, label:   'ai.stanford.edu' }
			
		]
	}
	else if (dtp=='20143')
	{
		dp = [                                         
			{ y: 18, label:   'en.wikipedia.org' },
			{ y: 1, label:  'http://simple.wikipedia.org' },
			{ y: 1, label:  'http://www.wikipedia.org' }
			
		]
	}
	else if (dtp=='20144')
	{
		dp = [                                         
			{ y: 18, label:   'aclweb.org' }
			
		]
	}
	else if (dtp=='20145')
	{
		dp =[                                         
			{ y: 12, label:   'www.cs.cmu.edu' }
			
		]
	}
	else if (dtp=='20146')
	{
		dp = [                                         
			{ y: 9, label:   'www.statmt.org' }
			
		]
	}
	else if (dtp=='20147')
	{
		dp = [                                         
			{ y: 7, label:   'sourceforge.net' },
			{ y: 3, label:  'gibbslda.sourceforge.net' },
			{ y: 1, label:  'http://lpsolve.sourceforge.net/5.5/' },
			{ y: 1, label:  'http://chasen-legacy.sourceforge.jp/' },
			{ y: 1, label:  'http://mstparser.sourceforge.net' },
			{ y: 1, label:  'http://pmd.sourceforge.net' },
			{ y: 1, label:  'http://meka.sourceforge.net' },
			{ y: 1, label:  'http://libots.sourceforge.net/' }
			
		]
	}
	else if (dtp=='20148')
	{
		dp = [                                         
			{ y: 12, label:   'www.cs.cmu.edu' },
			{ y: 7, label:   'http://www.ark.cs.cmu.edu' },
			{ y: 1, label:   'www.link.cs.cmu.edu' },
			{ y: 1, label:   'www.speech.cs.cmu.edu' }
			
		]
	}
	else if (dtp=='20149')
	{
		dp = [                                         
			{ y: 7, label:   'ufal.mff.cuni.cz' },
			{ y: 4, label:   'lindat.mff.cuni.cz' }
			
		]
	}
	else if (dtp=='201410')
	{
		dp = [                                         
			{ y: 5, label:   'www.nist.gov' },
			{ y: 7, label:  'www.itl.nist.gov' },
			{ y: 2, label:  'duc.nist.gov' },
			{ y: 2, label:  'trec.nist.gov' },
			{ y: 2, label:  'www-nlpir.nist.gov' },
			{ y: 1, label:  'http://ww.itl.nist.gov/iad/mig/tools' }
			
			
		]
	}
	else if (dtp=='201411')
	{
		dp = [                                         
			{ y: 5, label:   'http://homepages.inf.ed.ac.uk' },
			
		]
	}
	else if (dtp=='201412')
	{
		dp = [                                         
			{ y: 5, label:   'clic.cimec.unitn.it' },
			{ y: 1, label:   'disi.unitn.it' }
			
		]
	}
	else if (dtp=='201413')
	{
		dp = [                                         
			{ y: 5, label:   'arxiv.org' }
			
		]
	}
	else if (dtp=='201414')
	{
		dp = [                                         
			{ y: 4, label:   'www.cis.upenn.edu' },
			{ y: 4, label:  'www.ldc.upenn.edu' },
			{ y: 5, label:  'catalog.ldc.upenn.edu' },
			{ y: 1, label:  'http://www.ling.upenn.edu/' },
			{ y: 1, label:  'http://projects.ldc.upenn.edu/kbp/data' }
			
		]
	}
	else if (dtp=='201415')
	{
		dp = [
			{ y: 1, label:   'http://maven.apache.org/' },
			{ y: 5, label:   'opennlp.apache.org' },
			{ y: 3, label:   'lucene.apache.org' },,
			{ y: 1, label:   'http://storm.incubator.apache.org/' },
			{ y: 1, label:   'http://uima.apache.org/' }
			
			
		]
	}
	else if (dtp=='201416')
	{
		dp = [
			{ y: 2, label:   'www.cs.umass.edu' },
			{ y: 4, label:   'mallet.cs.umass.edu' },
			{ y: 2, label:   'iesl.cs.umass.edu' },
			{ y: 1, label:   'http://people.cs.umass.edu/' }
			
		]
	}
	else if (dtp=='201417')
	{
		dp = [                                         
			{ y: 4, label:   'qwone.com' }
			
		]
	}
	else if (dtp=='201418')
	{
		dp = [                                         
			{ y: 4, label:   'svmlight.joachims.org' }
			
		]
	}
	else if (dtp=='201419')
	{
		dp = [                                         
			{ y: 4, label:   'www.mturk.com' }
			
		]
	}
	else if (dtp=='20150')
	{
		dp = [                                         
			{ y: 70, label:   'github.com' },
			{ y: 1, label:   'http://www.github.com/jmielens/gpc-acl-2015' },
			{ y: 1, label:   'https://github.comw/yoonkim/CNN_sentence' }
			
		]
	}
	else if (dtp=='20151')
	{
		dp = [                                         
			{ y: 48, label:   'code.google.com' },
			{ y: 1, label:   'http://translate.google.com' },
			{ y: 1, label:   'http://books.google.com/ngrams/datasets' },
			{ y: 1, label:   'http://www.google.com' },
			{ y: 6, label:   'sites.google.com' },
			{ y: 1, label:   'https://drive.google.com/file/d/0B7XkCwpI5KDYNl' },
			{ y: 1, label:   'https://developers.google.com/' },
			{ y: 1, label:   'https://play.google.com/store/apps/details?id=com.oopsapp' },
			{ y: 1, label:   'https://groups.google.com/d/' }
			
		]
	}
	else if (dtp=='20152')
	{
		dp = [                                         
			{ y: 40, label:   'nlp.stanford.edu' },
			{ y: 3, label:   'www-nlp.stanford.edu' },
			{ y: 1, label:   'http://nlp.stanford.edu:8080/parser/' },
			{ y: 1, label:   'http://ai.stanford.edu/amaas/data/sentiment' },
			{ y: 1, label:   'http://snap.stanford.edu/' }
			
		]
	}
	else if (dtp=='20153')
	{
		dp = [                                         
			{ y: 24, label:   'en.wikipedia.org' },
			{ y: 1, label:   'http://en.Wikipedia.org/wiki/' },
			{ y: 1, label:   'https://simple.wikipedia.org' },
			{ y: 1, label:   'http://zh.wikipedia.org/wiki/Template:CGroup' }
			
		]
	}
	else if (dtp=='20154')
	{
		dp = [                                         
			{ y: 9, label:   'research.microsoft.com' },
			{ y: 1, label:   'http://academic.research.microsoft.com' }
			
		]
	}
	else if (dtp=='20155')
	{
		dp = [                                         
			{ y: 9, label:   'www.statmt.org' },
			{ y: 3, label:   'matrix.statmt.org' }
			
		]
	}
	else if (dtp=='20156')
	{
		dp = [                                         
			{ y: 7, label:   'scikit-learn.org' }
			
		]
	}
	else if (dtp=='20157')
	{
		dp = [                                         
			{ y: 7, label:   'sourceforge.net' },
			{ y: 1, label:   'http://jgibblda.sourceforge.net/' },
			{ y: 1, label:   'http://pyke.sourceforge.net/' },
			{ y: 1, label:   'http://kaldi.sourceforge.net/' },
			{ y: 1, label:   'http://htmlunit.sourceforge.net/' },
			{ y: 1, label:   'http://opennlp.sourceforge.net' }
			
		]
	}
	else if (dtp=='20158')
	{
		dp = [                                         
			{ y: 1, label:   'projects.ldc.upenn.edu' },
			{ y: 5, label:   'catalog.ldc.upenn.edu' },
			{ y: 4, label:   'www.cis.upenn.edu' },
			{ y: 1, label:   'http://www.sas.upenn.edu/' },
			{ y: 4, label:   'www.ldc.upenn.edu' },
			{ y: 1, label:   'http://bioie.ldc.upenn.edu' }
			
		]
	}
	else if (dtp=='20159')
	{
		dp = [                                         
			
			{ y: 7, label:   'www.ark.cs.cmu.edu' },
			{ y: 2, label:   'http://rtw.ml.cmu.edu/resources/ppa' },
			{ y: 1, label:   'http://www.speech.cs.cmu.edu/cgi-bin/cmudict' },
			{ y: 12, label:   'http://cs.cmu.edu/' },
			{ y: 1, label:   'www.link.cs.cmu.edu' }
			
		]
	}
	else if (dtp=='201510')
	{
		dp = [                                         
			{ y: 6, label:   'bitbucket.org' }
			
		]
	}
	else if (dtp=='201511')
	{
		dp = [                                       
			{ y: 6, label:   'mallet.cs.umass.edu' },
			{ y: 1, label:   'http://people.umass.edu/scable/PNWSeminar/' }
			
		]
	}
	else if (dtp=='201512')
	{
		dp = [                                         
			{ y: 6, label:   'www.csie.ntu.edu.tw' }
			
		]
	}
	else if (dtp=='201513')
	{
		dp = [                                         
			{ y: 5, label:   'arxiv.org' }
			
		]
	}
	else if (dtp=='201514')
	{
		dp = [                                         
			{ y: 4, label:   'cogcomp.cs.illinois.edu' }
			
		]
	}
	else if (dtp=='201515')
	{
		dp = [                                         
			{ y: 4, label:   'lucene.apache.org' },
			{ y: 1, label:   'https://tika.apache.org/' },
			{ y: 2, label:   'opennlp.apache.org' },
			{ y: 1, label:   'http://camel.apache.org/' },
			{ y: 1, label:   'https://uima.apache.org/ruta.html' },
			{ y: 1, label:   'http://activemq.apache.org/' },
			{ y: 1, label:   'http://cassandra.apache.org' }
			
		]
	}
	else if (dtp=='201516')
	{
		dp = [                                         
			{ y: 4, label:   'www.natcorp.ox.ac.uk' }
			
		]
	}
	else if (dtp=='201517')
	{
		dp = [                                         
			{ y: 4, label:   'clic.cimec.unitn.it' },
			{ y: 3, label:   'disi.unitn.it' },
			{ y: 1, label:   'http://ikernels-portal.disi.unitn.it/' }
			
			
		]
	}
	else if (dtp=='201518')
	{
		dp = [                                         
			{ y: 4, label:   'mpqa.cs.pitt.edu' }
			
		]
	}
	else if (dtp=='201519')
	{
		dp = [                                         
			{ y: 4, label:   'labs.priberam.com' }
			
		]
	}
	else if (dtp=='20160')
	{
		dp = [                                         
			{ y: 136, label:   'www.github.com' }
			
		]
	}
	else if (dtp=='20161')
	{
		dp = [                                         
			{ y: 38, label:   'code.google.com' },
			{ y: 2, label:   'translate.google.com' },
			{ y: 4, label:   'sites.google.com' },
			{ y: 4, label:   'images.google.com' },
			{ y: 1, label:   'https://news.google.com/' }
			
			
		]
	}
	else if (dtp=='20162')
	{
		dp = [                                         
			{ y: 20, label:   'nlp.stanford.edu' },
			{ y: 1, label:   'http://web.stanford.edu/%7ejurafsky/ws97/' },
			{ y: 1, label:   'http://ai.stanford.edu/' }
			
		]
	}
	else if (dtp=='20163')
	{
		dp = [                                         
			{ y: 3, label:   'www.seas.upenn.edu' },
			{ y: 1, label:   'https://www.ling.upenn.edu/courses/Fall_' },
			{ y: 12, label:   'catalog.ldc.upenn.edu' }
			
		]
	}
	else if (dtp=='20164')
	{
		dp = [                                         
			{ y: 12, label:   'www.statmt.org' },
			{ y: 1, label:   'http://matrix.statmt.org/matrix/systems' }
			
		]
	}
	else if (dtp=='20165')
	{
		dp = [                                         
			{ y: 10, label:   'bitbucket.org' }
			
		]
	}
	else if (dtp=='20166')
	{
		dp = [                                         
			{ y: 10, label:   'arxiv.org' }
			
		]
	}
	else if (dtp=='20167')
	{
		dp = [                                         
			{ y: 7, label:   'en.wikipedia.org' },
			{ y: 1, label:   'https://zh.wikipedia.org' }
			
		]
	}
	else if (dtp=='20168')
	{
		dp = [                                         
			{ y: 7, label:   'scikit-learn.org' }
			
		]
	}
	else if (dtp=='20169')
	{
		dp = [                                         
			{ y: 7, label:   'www.cs.cmu.edu' },
			{ y: 2, label:   'www.speech.cs.cmu.edu' }
			
		]
	}
	else if (dtp=='201610')
	{
		dp = [                                         
			{ y: 6, label:   'cogcomp.cs.illinois.edu' },
			{ y: 1, label:   'http://nlp.cs.illinois.edu/' }
			
			
		]
	}
	else if (dtp=='201611')
	{
		dp = [                                         
			{ y: 5, label:   'ronan.collobert.com' }
			
		]
	}
	else if (dtp=='201612')
	{
		dp = [                                         
			{ y: 5, label:   'www.csie.ntu.edu.tw' }
			
		]
	}
	else if (dtp=='201613')
	{
		dp = [                 
			{ y: 4, label:   'www.ncbi.nlm.nih.gov' },
			{ y: 1, label:   'https://www.nlm.nih.gov/pubs/' }
			
		]
	}
	else if (dtp=='201614')
	{
		dp = [                                         
			{ y: 4, label:   'sourceforge.net' },
			{ y: 1, label:   'http://zql.sourceforge.net' },
			{ y: 1, label:   'http://espeak.sourceforge.net' },
			{ y: 1, label:   'http://kaldi.sourceforge.net/' },
			{ y: 1, label:   'http://cmusphinx.sourceforge.net' }
			
		]
	}
	else if (dtp=='201615')
	{
		dp = [                                         
			{ y: 4, label:   'www.kaggle.com' }
			
		]
	}
	else if (dtp=='201616')
	{
		dp = [                                         
			{ y: 4, label:   'allenai.org' }
			
		]
	}
	else if (dtp=='201617')
	{
		dp = [                                         
			{ y: 4, label:   'qwone.com' }
			
		]
	}
	else if (dtp=='201618')
	{
		dp = [                                         
			{ y: 1, label:   'universaldependencies.org' }
			
		]
	}
	else if (dtp=='201619')
	{
		dp = [
			{ y: 1, label:   'http://www.aiphes.tu-darmstadt.de' },
			{ y: 1, label:   'http://bev.lt.informatik.tu-darmstadt.de/' },
			{ y: 4, label:   'www.ukp.tu-darmstadt.de' }
			
		]
	}
	else if (dtp=='20170')
	{
		dp = [                                         
			{ y: 1119, label:   'www.aclweb.org' },
			{ y: 18, label:   'anthology.aclweb.org' }
			
		]
	}
	else if (dtp=='20171')
	{
		dp = [                                         
			{ y: 209, label:   'arxiv.org' }
			
		]
	}
	else if (dtp=='20172')
	{
		dp = [                                         
			{ y: 178, label:   'github.com' }
			
		]
	}
	else if (dtp=='20173')
	{
		dp = [                                         
			{ y:  113, label:   'dl.acm.org' },
			{ y: 10, label:   'doi.acm.org' },
			{ y: 1, label:   'http://portal.acm.org/citation.cfm?id=1289260' }
			
		]
	}
	else if (dtp=='20174')
	{
		dp = [                                         
			{ y: 34, label:   'papers.nips.cc' }
			
		]
	}
	else if (dtp=='20175')
	{
		dp = [                                         
			{ y: 1, label:   'http://developers.google.com/' },
			{ y: 24, label:   'code.google.com' },
			{ y: 2, label:   'translate.google.com' },
			{ y: 1, label:   'https://books.google.com/books?id=I8svAAAAYAAJ' },
			{ y: 1, label:   'https://www.google.com/sheets' },
			{ y: 2, label:   'sites.google.com' },
			{ y: 1, label:   'assistant.google.com' },
			{ y: 1, label:   'https://cloud.google.com/speech' }
			
			
		]
	}
	else if (dtp=='20176')
	{
		dp = [                                         
			{ y: 1238, label:   'doi.org' },
			{ y: 19, label:   'dx.doi.org' }
			
		]
	}
	else if (dtp=='20177')
	{
		dp = [
			{ y: 17, label:   'nlp.stanford.edu' },
			{ y: 1, label:   'https://cs224d.stanford.edu/' },
			{ y: 1, label:   'http://nlp.stanford.edu:8080/sentiment/rntnDemo.html' },
			{ y: 1, label:   'http://cs.stanford.edu/' },
			{ y: 1, label:   'https://snap.stanford.edu/data/cit-HepTh.html' },
			{ y: 1, label:   'http://ai.Stanford.edu/amaas/data/' }
			
		]
	}
	else if (dtp=='20178')
	{
		dp = [                                         
			{ y: 17, label:   'aclanthology.info' }
			
		]
	}
	else if (dtp=='20179')
	{
		dp = [                                         
			{ y: 19, label:   'www.jmlr.org' }
			
		]
	}
	else if (dtp=='201710')
	{
		dp = [                                         
			{ y: 12, label:   'catalog.ldc.upenn.edu' },
			{ y: 1, label:   'http://projects.ldc.upenn.edu/ace/' },
			{ y: 2, label:   'www.seas.upenn.edu' },
			{ y: 1, label:   'http://www.cis.upenn.edu/' }
			
		]
	}
	else if (dtp=='201711')
	{
		dp = [                                         
			{ y: 2, label:   'www.wikipedia.org' },
			{ y: 11, label:   'en.wikipedia.org' }
			
		]
	}
	else if (dtp=='201712')
	{
		dp = [                                         
			{ y: 11, label:   'www.ncbi.nlm.nih.gov' },
			{ y: 7, label:   'www.nlm.nih.gov' },
			{ y: 1, label:   'https://pubchem.ncbi.nlm.nih.gov' }
			
		]
	}
	else if (dtp=='201713')
	{
		dp = [                                         
			{ y: 6, label:   'radimrehurek.com' }
			
		]
	}
	else if (dtp=='201714')
	{
		dp = [                                         
			{ y: 16, label:   'www.tensorflow.org' }
			
		]
	}
	else if (dtp=='201715')
	{
		dp = [                                         
			{ y: 9, label:   'www.transacl.org' }
			
		]
	}
	else if (dtp=='201716')
	{
		dp = [                                         
			{ y: 12, label:   'www.statmt.org' },
			{ y: 1, label:   'http://data.statmt.org/' }
			
		]
	}
	else if (dtp=='201717')
	{
		dp = [                                         
			{ y: 6, label:   'bitbucket.org' }
			
		]
	}
	else if (dtp=='201718')
	{
		dp = [                                         
			{ y: 6, label:   'www.cs.jhu.edu' },
			{ y: 1, label:   'http://cs.jhu.edu/' }
			
		]
	}
	else if (dtp=='201719')
	{
		dp = [                                         
			{ y: 6, label:   'hdl.handle.net' }
			
		]
	}
	else if (dtp=='20180')
	{
		dp = [                                         
			{ y: 317, label:   'github.com' },
			{ y: 1, label:   'https://gist.github.com/' },
			{ y: 1, label:   'http://www.github.com/webis-de/ACL-18' }
			
		]
	}
	else if (dtp=='20181')
	{
		dp = [                                         
			{ y: 392, label:   'aclweb.org' },
			{ y: 1, label:   'anthology.aclweb.org' },
			{ y: 1, label:   'http://www.anthology.aclweb.org/N/N13/N13-' }
			
		]
	}
	else if (dtp=='20182')
	{
		dp = [                                         
			{ y: 152, label:   'arxiv.org' }
			
		]
	}
	else if (dtp=='20183')
	{
		dp = [                                         
			{ y: 34, label:   'dl.acm.org' },
			{ y: 5, label:   'doi.acm.org' }
			
		]
	}
	else if (dtp=='20184')
	{
		dp = [                                         
			{ y: 29, label:   'nlp.stanford.edu' },
			{ y: 1, label:   'https://kbpo.stanford.edu' },
			{ y: 1, label:   'https://cs.stanford.edu/people/alecmgo/papers/' },
			{ y: 1, label:   'http://nlp.stanford.edu:8080/corenlp/process' }
			
		]
	}
	else if (dtp=='20185')
	{
		dp = [                                         
			{ y: 18, label:   'papers.nips.cc' }
			
		]
	}
	else if (dtp=='20186')
	{
		dp = [                                         
			{ y: 15, label:   'en.wikipedia.org' }
			
		]
	}
	else if (dtp=='20187')
	{
		dp = [                                         
			{ y: 10, label:   'catalog.ldc.upenn.edu' },
			{ y: 1, label:   'https://www.ldc.upenn.edu/sites/' },
			{ y: 1, label:    'www.ldc.upenn.edu/files/english-' },
			{ y: 1, label:   'https://web.sas.upenn.edu/danielpr/resources/' },
			{ y: 1, label:   'http://repository.upenn.edu/cis' },
			{ y: 1, label:   'http://projects.ldc.upenn.edu/ace/' }
			
		]
	}
	else if (dtp=='20188')
	{
		dp = [                                         
			{ y: 10, label:  'openreview.net' }
			
		]
	}
	else if (dtp=='20189')
	{
		dp = [                                         
			{ y: 4, label:   'books.google.com' },
			{ y: 3, label:   'sites.google.com' },
			{ y: 10, label:   'code.google.com' },
			{ y: 1, label:   'https://play.google.com/store?hl=en' },
			{ y: 1, label:   'https://translate.google.com' },
			{ y: 1, label:   'https://developers.google.com/' }
			
		]
	}
	else if (dtp=='201810')
	{
		dp = [                                         
			{ y: 11, label:   'www.statmt.org' },
			{ y: 1, label:   'http://data.statmt.org/wmt17/translation-' },
			{ y: 2, label:   'matrix.statmt.org' }
			
		]
	}
	else if (dtp=='201811')
	{
		dp = [                                         
			{ y: 9, label:   'spacy.io' }
			
		]
	}
	else if (dtp=='201812')
	{
		dp = [                                         
			{ y: 2, label:   'nlp.cs.washington.edu' },
			{ y: 8, label:   'homes.cs.washington.edu' }
			
		]
	}
	else if (dtp=='201813')
	{
		dp = [                                         
			{ y: 8, label:   'www.tensorflow.org' }
			
		]
	}
	else if (dtp=='201814')
	{
		dp = [                                         
			{ y: 185, label:   'doi.org' },
			{ y: 8, label:   'dx.doi.org' }
			
		]
	}
	else if (dtp=='201815')
	{
		dp = [                                         
			{ y: 7, label:   'transacl.org' }
			
		]
	}
	else if (dtp=='201816')
	{
		dp = [                                         
			{ y: 7, label:   'lucene.apache.org' },
			{ y: 1, label:   'https://lucenent.apache.org/' },
			{ y: 2, label:   'opennlp.apache.org' },
			{ y: 1, label:   'https://lucenenet.apache.org/' }
			
			
		]
	}
	else if (dtp=='201817')
	{
		dp = [                                         
			{ y: 6, label:   'bitbucket.org' }
			
		]
	}
	else if (dtp=='201818')
	{
		dp = [                                         
			{ y: 6, label:   'saifmohammad.com' }
			
		]
	}
	else if (dtp=='201819')
	{
		dp = [                                         
			{ y: 6, label:   'cogcomp.org' }
			
		]
	}
	else if (dtp=='201820')
	{
		dp = [                                         
			{ y: 7, label:   'nltk.org' }
			
		]
	}
	else
	{
	
		dp = [                                         
			{ y: 1, label: 'sayak' }
			
		]
	}
		
		
		
		
		
		
		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var chart = new CanvasJS.Chart(res, {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	height: 320,
	width: 900,
	title:{
		text: ''
	},
	axisX: {
		interval: 1,
		
	},
	axisY: {
		title: ""
	},
	data: [{        
		type: "column",  
      	color: "#0303AC", 
		showInLegend: true, 
		legendMarkerColor: "grey",
		legendText: "",
		name : n2,
		dataPoints: dp
	}]
});
chart.render();


}







}









