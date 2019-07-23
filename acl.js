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



































var chart = new CanvasJS.Chart("chartContainer1996", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		click: onClick2,		
		showInLegend: true, 
		legendMarkerColor: "grey",
		name: "1996",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'www.cs.rochester.edu' },
			{ y: 1,label: 'www.di.ufpe.br' },
			{ y: 1,  label: 'www.sfs.nphil.uni-tuebingen' }
			
		]
	}]
});
chart.render();



























var chart = new CanvasJS.Chart("chartContainer19960", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "1996-0",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://www.cs.rochester.edu/research/trains/ACL96' }
			
		]
	}]
});
chart.render();






























var chart = new CanvasJS.Chart("chartContainer19961", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "1996-1",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://www.di.ufpe.br/~jr' }
			
		]
	}]
});
chart.render();




























var chart = new CanvasJS.Chart("chartContainer19962", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "1996-2",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: "http://www.sfs.nphil.uni-tuebingen/'minnen" }
			
		]
	}]
});
chart.render();



















var chart = new CanvasJS.Chart("chartContainer1997", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		click: onClick2,		
		showInLegend: true, 
		legendMarkerColor: "grey",
		name: "1997",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'www.research.att.com' },
			{ y: 1,label: 'www.coling.uni-freiburg.de' },
			{ y: 1,  label: 'hpsg.stanford.edu' },           
			{ y: 2,  label: 'ruccs.rutgers.edu' },
			{ y: 1,  label: 'www.ims.uni-stuttgart.de' },
			{ y: 2, label: 'www.ps.uni-sb.de' },
			{ y: 1,  label: 'www.globalink.com' },
			{ y: 1, label: 'www.logos-ca.com' },
			{ y: 1, label: 'systranmt.com' }
			
		]
	}]
});
chart.render();





































var chart = new CanvasJS.Chart("chartContainer19970", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		click: onClick2,		
		showInLegend: true, 
		legendMarkerColor: "grey",
		name: "1997-0",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://www.research.att.com/lewis' }
			
		]
	}]
});
chart.render();










































var chart = new CanvasJS.Chart("chartContainer19971", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		click: onClick2,		
		showInLegend: true, 
		legendMarkerColor: "grey",
		name: "1997-1",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://www.coling.uni-freiburg.de/' }
			
		]
	}]
});
chart.render();
































var chart = new CanvasJS.Chart("chartContainer19972", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		click: onClick2,		
		showInLegend: true, 
		legendMarkerColor: "grey",
		name: "1997-2",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://hpsg.stanford.edu/hpsg/sag.html' }
			
		]
	}]
});
chart.render();































var chart = new CanvasJS.Chart("chartContainer19973", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		click: onClick2,		
		showInLegend: true, 
		legendMarkerColor: "grey",
		name: "1997-3",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'ruccs.rutgers.edu' }
			
		]
	}]
});
chart.render();


































var chart = new CanvasJS.Chart("chartContainer19974", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		click: onClick2,		
		showInLegend: true, 
		legendMarkerColor: "grey",
		name: "1997-4",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: "http://www.ims.uni-stuttgart.de/'jochen/CBSem" }
			
		]
	}]
});
chart.render();


































var chart = new CanvasJS.Chart("chartContainer19975", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		click: onClick2,		
		showInLegend: true, 
		legendMarkerColor: "grey",
		name: "1997-5",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'www.ps.uni-sb.de' }
			
		]
	}]
});
chart.render();


































var chart = new CanvasJS.Chart("chartContainer19976", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		click: onClick2,		
		showInLegend: true, 
		legendMarkerColor: "grey",
		name: "1997-6",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://www.globalink.com/home.html' }
			
		]
	}]
});
chart.render();





























var chart = new CanvasJS.Chart("chartContainer19977", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		click: onClick2,		
		showInLegend: true, 
		legendMarkerColor: "grey",
		name: "1997-7",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://www.logos-ca.com/' }
			
		]
	}]
});
chart.render();


























var chart = new CanvasJS.Chart("chartContainer19978", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		click: onClick2,		
		showInLegend: true, 
		legendMarkerColor: "grey",
		name: "1997-8",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://systranmt.com/' }
			
		]
	}]
});
chart.render();






























var chart = new CanvasJS.Chart("chartContainer1998", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		click: onClick2,		
		legendMarkerColor: "grey",
		name: "1998",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'titania.cobuild.collins.co.uk' },         
			{ y: 1,label: 'www.conexor.fi' },
			{ y: 1,  label: 'www.itl.nist.gov' },           
			{ y: 1,  label: 'www.cs.biu.ac.il' },
			{ y: 1,  label: 'www.ims.uni-' },
			{ y: 1, label: 'earth.let.uva.nl' },
			{ y: 1,  label: 'www.cs.jhu.edu' },
			{ y: 1, label: 'www.cis.upenn.edu' },
			{ y: 3, label: 'www.gmat.org' },
			{ y: 2,label: 'www.toefl.org' },
			{ y: 1,  label: 'www.gmat.orff' },           
			{ y: 1,  label: 'www.toetl.org' },
			{ y: 1,  label: 'research.microsoft.com' },
			{ y: 1, label: 'www.ee.umd' },
			{ y: 1,  label: 'ciir.cs.urnass.edu' },
			{ y: 1, label: 'nl.ijs.si' },
			{ y: 1,  label: 'www.ids-mannheim.de' },
			{ y: 1, label: 'www.itri.bton.ac.uk' },
			{ y: 1,  label: 'www.georgetown.edu' },
			{ y: 1, label: 'wombat.doc.ic.ac.uk' }
			
			
		]
	}]
});
chart.render();

























var chart = new CanvasJS.Chart("chartContainer19980", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "1998-0",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://titania.cobuild.collins.co.uk/boe_info.html' }
			
		]
	}]
});
chart.render();
















var chart = new CanvasJS.Chart("chartContainer19981", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "1998-1",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://www.conexor.fi/analysers.html' }
			
		]
	}]
});
chart.render();


































var chart = new CanvasJS.Chart("chartContainer19982", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "1998-2",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://www.itl.nist.gov/div894' }
			
		]
	}]
});
chart.render();

































var chart = new CanvasJS.Chart("chartContainer19983", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "1998-3",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://www.cs.biu.ac.il/,-~yuvalk/MBSL' }
			
		]
	}]
});
chart.render();




























var chart = new CanvasJS.Chart("chartContainer19984", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "1998-4",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://www.ims.uni-' }
			
		]
	}]
});
chart.render();




























var chart = new CanvasJS.Chart("chartContainer19985", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "1998-5",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://earth.let.uva.nl/-rens' }
			
		]
	}]
});
chart.render();

























var chart = new CanvasJS.Chart("chartContainer19986", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "1998-6",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://www.cs.jhu.edu/-brill' }
			
		]
	}]
});
chart.render();



























var chart = new CanvasJS.Chart("chartContainer19987", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "1998-7",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://www.cis.upenn.edu/-adwait' }
			
		]
	}]
});
chart.render();























var chart = new CanvasJS.Chart("chartContainer19988", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "1998-8",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'www.gmat.org' }
			
		]
	}]
});
chart.render();























var chart = new CanvasJS.Chart("chartContainer19989", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "1998-9",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'www.toefl.org' }
			
		]
	}]
});
chart.render();
































var chart = new CanvasJS.Chart("chartContainer199810", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "1998-10",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://www.gmat.orff' }
			
		]
	}]
});
chart.render();






































var chart = new CanvasJS.Chart("chartContainer199811", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "1998-11",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://www.toetl.org/tstprpmt.htm!' }
			
		]
	}]
});
chart.render();
























var chart = new CanvasJS.Chart("chartContainer199812", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "1998-12",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://research.microsoft.com/nlp/' }
			
		]
	}]
});
chart.render();




































var chart = new CanvasJS.Chart("chartContainer199813", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "1998-13",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://www.ee.umd' }
			
		]
	}]
});
chart.render();









































var chart = new CanvasJS.Chart("chartContainer199814", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "1998-14",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://ciir.cs.urnass.edu/info/psfiles/tepubs/tepu' }
			
		]
	}]
});
chart.render();








































var chart = new CanvasJS.Chart("chartContainer199815", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "1998-15",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://nl.ijs.si/ME/CD/docs/mte-d' }
			
		]
	}]
});
chart.render();



































var chart = new CanvasJS.Chart("chartContainer199816", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "1998-16",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://www.ids-mannheim.de/telril' }
			
		]
	}]
});
chart.render();







































var chart = new CanvasJS.Chart("chartContainer199817", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "1998-17",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://www.itri.bton.ac.uk/events/senseval' }
			
		]
	}]
});
chart.render();




































var chart = new CanvasJS.Chart("chartContainer199818", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "1998-18",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://www.georgetown.edu/luperfoy/Discourse-' }
			
		]
	}]
});
chart.render();































var chart = new CanvasJS.Chart("chartContainer199819", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "1998=19",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://wombat.doc.ic.ac.uk' }
			
		]
	}]
});
chart.render();




















































var chart = new CanvasJS.Chart("chartContainer1999", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		click: onClick2,
		legendMarkerColor: "grey",
		name: "1999",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'www.link.cs.cmu.edu' },         
			{ y: 1,label: 'fofoca.mitre.org' },               
			{ y: 2,  label: 'nlp.cs.jhu.edu' },           
			{ y: 1,  label: 'www.ee.umd.edu' },
			{ y: 1,  label: 'www.gcorgetown.edu' },
			{ y: 1, label: 'www.cs.nmsu.edu' },
			{ y: 1,  label: 'web.math.auc.dk' },
			{ y: 1, label: 'www.morphologic.hu' },
			{ y: 1, label: 'www.cs.umanitoba.ca' },
			{ y: 1,label: 'www.cs.umanitob&.ca' },
			{ y: 1,  label: 'www.askjeeves.com' },           
			{ y: 1,  label: 'www.electricmonk.com' },
			{ y: 1,  label: 'altavista.com' },
			{ y: 1, label: 'www.dcs.gla.ac.uk' },
			{ y: 1,  label: 'www.fask.uni-mainz.de' },
			{ y: 1, label: 'www.cs.cmu.edu' },
			{ y: 1,  label: 'www.rxrc.xerox.com' },
			{ y: 1, label: 'xxx.lanl.gov' },
			{ y: 1,  label: 'www.tipster.org' },
			{ y: 1, label: 'www.ltg.ed.ac.uk' }
			
		]
	}]
});
chart.render();
















var chart = new CanvasJS.Chart("chartContainer19990", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "1999-0",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://www.link.cs.cmu.edu/lexfn' }
			
		]
	}]
});
chart.render();































var chart = new CanvasJS.Chart("chartContainer19991", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "1999-1",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://fofoca.mitre.org' }
			
		]
	}]
});
chart.render();










































var chart = new CanvasJS.Chart("chartContainer19992", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "1999-2",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'nlp.cs.jhu.edu' }
			
		]
	}]
});
chart.render();





































var chart = new CanvasJS.Chart("chartContainer19993", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "1999-3",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://www.ee.umd.edu/medlab/filter/paperslmlir.ps' }
			
		]
	}]
});
chart.render();











































var chart = new CanvasJS.Chart("chartContainer19994", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "1999-4",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://www.gcorgetown.edu/luperfoy/Discourse-' }
			
		]
	}]
});
chart.render();




































var chart = new CanvasJS.Chart("chartContainer19995", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "1999-5",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://www.cs.nmsu.edu/~wiebe/projects' }
			
		]
	}]
});
chart.render();































var chart = new CanvasJS.Chart("chartContainer19996", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "1999-6",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://web.math.auc.dk/-jhb/CoCo' }
			
		]
	}]
});
chart.render();


























var chart = new CanvasJS.Chart("chartContainer19997", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "1999-7",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://www.morphologic.hu' }
			
		]
	}]
});
chart.render();




























var chart = new CanvasJS.Chart("chartContainer19998", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "1999-8",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'www.cs.umanitoba.ca' }
			
		]
	}]
});
chart.render();
























var chart = new CanvasJS.Chart("chartContainer19999", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "1999-9",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://www.cs.umanitob&.ca/-lindek/nlldemo.htm/' }
			
		]
	}]
});
chart.render();

























var chart = new CanvasJS.Chart("chartContainer199910", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "1999-10",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://www.askjeeves.com'  }
			
		]
	}]
});
chart.render();


































var chart = new CanvasJS.Chart("chartContainer199911", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "1999-11",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://www.electricmonk.com' }
			
		]
	}]
});
chart.render();




























var chart = new CanvasJS.Chart("chartContainer199912", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "1999-12",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://altavista.com' }
			
		]
	}]
});
chart.render();






























var chart = new CanvasJS.Chart("chartContainer199913", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "1999-13",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://www.dcs.gla.ac.uk/prosper/' }
			
		]
	}]
});
chart.render();


























var chart = new CanvasJS.Chart("chartContainer199914", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "1999-14",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://www.fask.uni-mainz.de/user/rappl' }
			
		]
	}]
});
chart.render();





















var chart = new CanvasJS.Chart("chartContainer199915", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "1999-15",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://www.cs.cmu.edu/' },
			{ y: 1, label: '~dougb/ident.html' }
			
		]
	}]
});
chart.render();





























var chart = new CanvasJS.Chart("chartContainer199916", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "1999-16",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://www.rxrc.xerox.com/research/' }
			
		]
	}]
});
chart.render();
































var chart = new CanvasJS.Chart("chartContainer199917", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "1999-17",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://xxx.lanl.gov/ps/cmp-' }
			
		]
	}]
});
chart.render();






























var chart = new CanvasJS.Chart("chartContainer199918", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "1999-18",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://www.tipster.org' }
			
		]
	}]
});
chart.render();































var chart = new CanvasJS.Chart("chartContainer199919", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "1999-19",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://www.ltg.ed.ac.uk/software/index.html' }
			
		]
	}]
});
chart.render();


































var chart = new CanvasJS.Chart("chartContainer2000", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		click: onClick2,
		legendMarkerColor: "grey",
		name: "2000",
		legendText: "",
		dataPoints: [                                         
			{ y: 3, label: 'www.iiit.net' },                                   
			{ y: 2, label: 'www.ims.uni-stuttgart.de' },               
			{ y: 2,  label: 'www.muc.saic.com' },           
			{ y: 1,  label: 'www.sgi.com' },
			{ y: 1,  label: 'www.ksl.Stanford.EDU' },
			{ y: 1, label: 'morph.ldc.upenn.edu' },
			{ y: 1,  label: 'ilk.kub.nl' },
			{ y: 1, label: 'www.cs.biu.ac.il' },
			{ y: 1, label: 'www.conexor.fi' },
			{ y: 1,label: 'www.ps.uni-sb.de' },
			{ y: 1,  label: 'www.mpi-sb' },           
			{ y: 1,  label: 'www.hcrc.ed.ac.uk' },
			{ y: 1,  label: 'www.people.cornell.edu' },
			{ y: 1, label: 'www.ai.univie.ac.at' },
			{ y: 1,  label: 'www.cicc.or.jp' },
			{ y: 1, label: 'www.aia.bppt.go.id' },
			{ y: 1,  label: 'nlp.aia.bppt.go.id' },
			{ y: 1, label: 'www.tdil.gov.in' },
			{ y: 1,  label: 'www.cdac.org.in' },
			{ y: 1, label: 'www.links.nectec.or.th' }
			
		]
	}]
});
chart.render();





































var chart = new CanvasJS.Chart("chartContainer20000", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2000-0",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'www.iiit.net' }
			
		]
	}]
});
chart.render();





































var chart = new CanvasJS.Chart("chartContainer20001", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2000-1",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'www.ims.uni-stuttgart.de' }
			
		]
	}]
});
chart.render();






























var chart = new CanvasJS.Chart("chartContainer20002", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2000-2",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'www.muc.saic.com' }
			
		]
	}]
});
chart.render();

































var chart = new CanvasJS.Chart("chartContainer20003", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2000-3",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://www.sgi.com/Technology/mlc' }
			
		]
	}]
});
chart.render();




































var chart = new CanvasJS.Chart("chartContainer20004", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2000-4",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://www.ksl.Stanford.EDU/ontologies/time/' }
			
		]
	}]
});
chart.render();





































var chart = new CanvasJS.Chart("chartContainer20005", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2000-5",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://morph.ldc.upenn.edu/Catalog/LDC99T3' }
			
		]
	}]
});
chart.render();





































var chart = new CanvasJS.Chart("chartContainer20006", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2000-6",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://ilk.kub.nl/' }
			
		]
	}]
});
chart.render();





































var chart = new CanvasJS.Chart("chartContainer20007", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2000-7",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://www.cs.biu.ac.il/~yuvalk/MBSL' }
			
		]
	}]
});
chart.render();






































var chart = new CanvasJS.Chart("chartContainer20008", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2000-8",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://www.conexor.fi' }
			
		]
	}]
});
chart.render();









































var chart = new CanvasJS.Chart("chartContainer20009", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2000-9",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://www.ps.uni-sb.de/Papers/' }
			
		]
	}]
});
chart.render();





































var chart = new CanvasJS.Chart("chartContainer200010", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2000-10",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://www.mpi-sb' }
			
		]
	}]
});
chart.render();































var chart = new CanvasJS.Chart("chartContainer200011", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2000-11",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://www.hcrc.ed.ac.uk/' }
			
		]
	}]
});
chart.render();


































var chart = new CanvasJS.Chart("chartContainer200012", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2000-12",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://www.people.cornell.edu/pages/cjc26/' }
			
		]
	}]
});
chart.render();
































var chart = new CanvasJS.Chart("chartContainer200013", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2000-13",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://www.ai.univie.ac.at/~harald/handbook.html' }
			
		]
	}]
});
chart.render();






































var chart = new CanvasJS.Chart("chartContainer200014", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2000-14",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://www.cicc.or.jp/homepage/english/about/a' }
			
		]
	}]
});
chart.render();


































var chart = new CanvasJS.Chart("chartContainer200015", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2000-15",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://www.aia.bppt.go.id/mmts' }
			
		]
	}]
});
chart.render();


































var chart = new CanvasJS.Chart("chartContainer200016", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2000-16",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://nlp.aia.bppt.go.id/' }
			
		]
	}]
});
chart.render();









































var chart = new CanvasJS.Chart("chartContainer200017", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2000-17",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://www.tdil.gov.in' }
			
		]
	}]
});
chart.render();



































var chart = new CanvasJS.Chart("chartContainer200018", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2000-18",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://www.cdac.org.in' }
			
		]
	}]
});
chart.render();



































var chart = new CanvasJS.Chart("chartContainer200019", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2000-19",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'http://www.links.nectec.or.th' }
			
		]
	}]
});
chart.render();

































var chart = new CanvasJS.Chart("chartContainer2001", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		click: onClick2,
		legendMarkerColor: "grey",
		name: "2001",
		legendText: "",
		dataPoints: [                                         
			{ y: 7, label: 'www.w3.org' },                                        
			{ y: 3, label: 'trec.nist.gov' },               
			{ y: 3,  label: 'www.cis.upenn.edu' },           
			{ y: 2,  label: 'www.inria.fr' },
			{ y: 2,  label: 'www.collocations.de' },
			{ y: 2, label: 'www.loria.fr' },
			{ y: 2,  label: 'cgi.portugues.mct.pt' },
			{ y: 2,  label: 'www.ims.uni-stuttgart.de' },
			{ y: 1, label: 'www.limsi.fr' },
			{ y: 1, label: 'twentyone.tpd.tno.nl' },
			{ y: 1, label: 'www.fb9-' },
			{ y: 1,  label: 'coretex.itc.it' },           
			{ y: 1,  label: 'www.kecl.ntt.co.jp' },
			{ y: 1,  label: 'www.cs.columbia.edu' },
			{ y: 1, label: 'www.electricknowledge.com' },
			{ y: 1,  label: 'www.cs.nyu.edu' },
			{ y: 1, label: 'ilk.kub.nl' },
			{ y: 1,  label: 'leo.stcloudstate.edu' },
			{ y: 1, label: 'www.itri.bton.ac.uk' },
			{ y: 1,  label: 'www.pharmweb.net' }
			
			
		]
	}]
});
chart.render();



































var chart = new CanvasJS.Chart("chartContainer20010", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2001-0",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'www.w3.org' }
			
		]
	}]
});
chart.render();

































var chart = new CanvasJS.Chart("chartContainer20011", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2001-1",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'trec.nist.gov' }
			
		]
	}]
});
chart.render();




























var chart = new CanvasJS.Chart("chartContainer20012", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2001-2",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'www.cis.upenn.edu' }
			
		]
	}]
});
chart.render();























var chart = new CanvasJS.Chart("chartContainer20013", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2001-3",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'www.inria.fr' }
			
		]
	}]
});
chart.render();

































var chart = new CanvasJS.Chart("chartContainer20014", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2001-4",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.collocations.de' }
			
		]
	}]
});
chart.render();
























var chart = new CanvasJS.Chart("chartContainer20015", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2001-5",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.loria.fr' }
			
		]
	}]
});
chart.render();


























var chart = new CanvasJS.Chart("chartContainer20016", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2001-6",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'cgi.portugues.mct.pt' }
			
		]
	}]
});
chart.render();




























var chart = new CanvasJS.Chart("chartContainer20017", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2001-7",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.ims.uni-stuttgart.de' }
			
		]
	}]
});
chart.render();


























var chart = new CanvasJS.Chart("chartContainer20018", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2001-8",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://www.limsi.fr/tlp' }
			
		]
	}]
});
chart.render();





























var chart = new CanvasJS.Chart("chartContainer20019", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2001-9",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://twentyone.tpd.tno.nl/' }
			
		]
	}]
});
chart.render();



























var chart = new CanvasJS.Chart("chartContainer200110", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2001-10",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://www.fb9-' }
			
		]
	}]
});
chart.render();





























var chart = new CanvasJS.Chart("chartContainer200111", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2001-11",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://coretex.itc.it/' }
			
		]
	}]
});
chart.render();

























var chart = new CanvasJS.Chart("chartContainer200112", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2001-12",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://www.kecl.ntt.co.jp/icl/mtg/resources/altjaws.html' }
			
		]
	}]
});
chart.render();
























var chart = new CanvasJS.Chart("chartContainer200113", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2001-13",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://www.cs.columbia.edu/regina' }
			
		]
	}]
});
chart.render();





















var chart = new CanvasJS.Chart("chartContainer200114", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2001-14",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://www.electricknowledge.com' }
			
		]
	}]
});
chart.render();
















var chart = new CanvasJS.Chart("chartContainer200115", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2001-15",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://www.cs.nyu.edu/cs/projects/proteus/evalb/' }
			
		]
	}]
});
chart.render();























var chart = new CanvasJS.Chart("chartContainer200116", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2001-16",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://ilk.kub.nl/l' }
			
		]
	}]
});
chart.render();






















var chart = new CanvasJS.Chart("chartContainer200117", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2001-17",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://leo.stcloudstate.edu' }
			
		]
	}]
});
chart.render();


























var chart = new CanvasJS.Chart("chartContainer200118", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2001-18",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://www.itri.bton.ac.uk/projects/rags' }
			
		]
	}]
});
chart.render();





























var chart = new CanvasJS.Chart("chartContainer200119", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2001-19",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://www.pharmweb.net' }
			
		]
	}]
});
chart.render();








































var chart = new CanvasJS.Chart("chartContainer2002", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		click: onClick2,
		showInLegend: true, 
		legendMarkerColor: "grey",
		name: "2002",
		legendText: "",
		dataPoints: [                                         
			{ y: 2, label: 'www.altavista.com' },                                                        
			{ y: 2, label: 'maxent.sourceforge.net' },               
			{ y: 2,  label: 'www.google.com' },           
			{ y: 1,  label: 'www-white.media.mit.edu' },
			{ y: 1,  label: 'www.mozart-oz' },
			{ y: 3, label: 'research.microsoft.com' },
			{ y: 2,  label: 'lingo.stanford.edu' },
			{ y: 2,  label: 'www.cs.toronto.edu' },
			{ y: 1, label: 'www.coli.uni-sb.de' },
			{ y: 1, label: 'www.ps.uni-sb.de' },
			{ y: 1, label: 'fofoca.mitre.org' },
			{ y: 1,  label: 'www.nlm.nih.gov' },           
			{ y: 1,  label: 'opennlp.sf.net' },
			{ y: 1,  label: 'grok.sf.net' },
			{ y: 1, label: 'www.d.umn.edu' },
			{ y: 1,  label: 'encarta.msn.com' },
			{ y: 1, label: 'www.whlib.ac.cn' },
			{ y: 1,  label: 'www.cs.waikato.ac.nz' },
			{ y: 1, label: 'tarjim.ajeeb.com'},
			{ y: 1,  label: 'www.muc.saic.com' }
			
			
			
		]
	}]
});
chart.render();


























var chart = new CanvasJS.Chart("chartContainer20020", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2002-0",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.altavista.com' }
			
		]
	}]
});
chart.render();



























var chart = new CanvasJS.Chart("chartContainer20021", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2002-1",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'maxent.sourceforge.net' }
			
		]
	}]
});
chart.render();


























var chart = new CanvasJS.Chart("chartContainer20022", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2002-2",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.google.com' }
			
		]
	}]
});
chart.render();


























var chart = new CanvasJS.Chart("chartContainer20023", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2002-3",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://www-white.media.mit.edu/' }
			
		]
	}]
});
chart.render();



























var chart = new CanvasJS.Chart("chartContainer20024", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2002-4",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://www.mozart-oz' }
			
		]
	}]
});
chart.render();




















var chart = new CanvasJS.Chart("chartContainer20025", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2002-5",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://research.microsoft.com/~dmax/WinMine/Tool' }
			
		]
	}]
});
chart.render();






























var chart = new CanvasJS.Chart("chartContainer20026", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2002-6",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://lingo.stanford.edu' }
			
		]
	}]
});
chart.render();




























var chart = new CanvasJS.Chart("chartContainer20027", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2002-7",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://www.cs.toronto.edu/' }
			
		]
	}]
});
chart.render();


























var chart = new CanvasJS.Chart("chartContainer20028", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2002-8",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://www.coli.uni-sb.de/' }
			
		]
	}]
});
chart.render();











































var chart = new CanvasJS.Chart("chartContainer20029", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2002-9",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://www.ps.uni-sb.de/oz/' }
			
		]
	}]
});
chart.render();






































var chart = new CanvasJS.Chart("chartContainer200210", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2002-10",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://fofoca.mitre.org' }
			
		]
	}]
});
chart.render();
































var chart = new CanvasJS.Chart("chartContainer200211", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2002-11",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://www.nlm.nih.gov/mesh/meshhome.html;' }
			
		]
	}]
});
chart.render();




































var chart = new CanvasJS.Chart("chartContainer200212", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2002-12",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://opennlp.sf.net' }
			
		]
	}]
});
chart.render();































var chart = new CanvasJS.Chart("chartContainer200213", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2002-13",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://grok.sf.net' }
			
		]
	}]
});
chart.render();





























var chart = new CanvasJS.Chart("chartContainer200214", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2002-14",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://www.d.umn.edu/~tpederse/data.html' }
			
		]
	}]
});
chart.render();





























var chart = new CanvasJS.Chart("chartContainer200215", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2002-15",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://encarta.msn.com/default.asp' }
			
		]
	}]
});
chart.render();





























var chart = new CanvasJS.Chart("chartContainer200216", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2002-16",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://www.whlib.ac.cn/sjk/bkqs.htm' }
			
		]
	}]
});
chart.render();





























var chart = new CanvasJS.Chart("chartContainer200217", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2002-17",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://www.cs.waikato.ac.nz/e' }
			
		]
	}]
});
chart.render();





























var chart = new CanvasJS.Chart("chartContainer200218", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2002-18",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://tarjim.ajeeb.com/' }
			
		]
	}]
});
chart.render();

































var chart = new CanvasJS.Chart("chartContainer200219", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2002-19",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://www.muc.saic.com/' }
			
		]
	}]
});
chart.render();










































































var chart = new CanvasJS.Chart("chartContainer2003", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		click: onClick2,
		showInLegend: true, 
		legendMarkerColor: "grey",
		name: "2003",
		legendText: "",
		dataPoints: [                                         
			{ y: 2, label: 'www.rulequest.com' },         
			{ y: 2, label: 'www.research.att.com' },
			{ y: 2,  label: 'maxent.sourceforge.net' },           
			{ y: 2,  label: 'www.ldc.upenn.edu' },
			{ y: 2,  label: 'www.cs.cmu.edu' },
			{ y: 2, label: 'www.isi.edu' },
			{ y: 2,  label: 'www.cs.columbia.edu' },
			{ y: 2,  label: 'www.quiz-zone.co.uk' },
			{ y: 1, label: 'www.greatauk.com' },
			{ y: 1, label: 'www.nlp.cs.ritsumei.ac.jp' },
			{ y: 1, label: 'www.cs.nyu.edu' },           
			{ y: 1,  label: 'info.ox.ac.uk' },
			{ y: 1,  label: 'www.cia.gov' },
			{ y: 1,  label: 'www.hcrc.ed.ac.uk' },
			{ y: 1, label: 'www.umiacs.umd.edu' },
			{ y: 1,  label: 'chasen.aist-nara.ac.jp' },
			{ y: 1, label: 'www.iijnet.or.jp' },
			{ y: 1, label: 'www.csse.monash.edu.au' },
			{ y: 1,  label: 'trec.nist.gov' },
			{ y: 1, label: 'www.cogsci.princeton.edu' }
			
			
		]
	}]
});
chart.render();
































var chart = new CanvasJS.Chart("chartContainer20030", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2003-0",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.rulequest.com' }
			
		]
	}]
});
chart.render();


































var chart = new CanvasJS.Chart("chartContainer20031", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2003-1",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.research.att.com' }
			
		]
	}]
});
chart.render();
































var chart = new CanvasJS.Chart("chartContainer20032", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2003-2",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'maxent.sourceforge.net' }
			
		]
	}]
});
chart.render();

































var chart = new CanvasJS.Chart("chartContainer20033", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2003-3",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'www.ldc.upenn.edu' }
			
		]
	}]
});
chart.render();





























var chart = new CanvasJS.Chart("chartContainer20034", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2003-4",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.cs.cmu.edu' }
			
		]
	}]
});
chart.render();




























var chart = new CanvasJS.Chart("chartContainer20035", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2003-5",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.isi.edu' }
			
		]
	}]
});
chart.render();





























var chart = new CanvasJS.Chart("chartContainer20036", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2003-6",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.cs.columbia.edu' }
			
		]
	}]
});
chart.render();




























var chart = new CanvasJS.Chart("chartContainer20037", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2003-7",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://www.quiz-zone.co.uk' }
			
		]
	}]
});
chart.render();

































var chart = new CanvasJS.Chart("chartContainer20038", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2003-8",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://www.greatauk.com' }
			
		]
	}]
});
chart.render();






























var chart = new CanvasJS.Chart("chartContainer20039", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2003-9",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://www.nlp.cs.ritsumei.ac.jp/qac/' }
			
		]
	}]
});
chart.render();























var chart = new CanvasJS.Chart("chartContainer200310", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2003-10",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://www.cs.nyu.edu/sekine/PROJECT/CRLQA/' }
			
		]
	}]
});
chart.render();
























var chart = new CanvasJS.Chart("chartContainer200311", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2003-11",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://info.ox.ac.uk/bnc' }
			
		]
	}]
});
chart.render();




















var chart = new CanvasJS.Chart("chartContainer200312", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2003-12",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://www.cia.gov/cia/publications/' }
			
		]
	}]
});
chart.render();
























var chart = new CanvasJS.Chart("chartContainer200313", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2003-13",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://www.hcrc.ed.ac.uk/gnome' }
			
		]
	}]
});
chart.render();



























var chart = new CanvasJS.Chart("chartContainer200314", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2003-14",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://www.umiacs.umd.edu/bonnie/verbs-English.lcs' }
			
		]
	}]
});
chart.render();

























var chart = new CanvasJS.Chart("chartContainer200315", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2003-15",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://chasen.aist-nara.ac.jp/' }
			
		]
	}]
});
chart.render();



























var chart = new CanvasJS.Chart("chartContainer200316", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2003-16",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://www.iijnet.or.jp/edr/' }
			
		]
	}]
});
chart.render();
























var chart = new CanvasJS.Chart("chartContainer200317", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2003-17",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://www.csse.monash.edu.au/jwb/edict.html' }
			
		]
	}]
});
chart.render();

























var chart = new CanvasJS.Chart("chartContainer200318", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2003-18",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://trec.nist.gov/' }
			
		]
	}]
});
chart.render();
























var chart = new CanvasJS.Chart("chartContainer200319", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2003-19",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://www.cogsci.princeton.edu/wn/' }
			
		]
	}]
});
chart.render();





























var chart = new CanvasJS.Chart("chartContainer2004", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		click: onClick2,
		showInLegend: true, 
		legendMarkerColor: "grey",
		name: "2004",
		legendText: "",
		dataPoints: [                                         
			{ y: 7, label: 'www.nist.gov' },         
			{ y: 5, label: 'www.isi.edu' },
			{ y: 4,  label: 'www.research.att.com' },          
			{ y: 4,  label: 'www.senseval.org' },
			{ y: 3,  label: 'www.nlm.nih.gov' },
			{ y: 3, label: 'www.cogsci.princeton.edu' },
			{ y: 3,  label: 'www.ai.mit.edu' },
			{ y: 2,  label: 'arXiv.org' },
			{ y: 2, label: 'www.cs.waikato.ac.nz' },
			{ y: 2, label:  'www.csse.monash.edu.au' },
			{ y: 2, label: 'www.census.gov' },           
			{ y: 2,  label: 'research.nii.ac.jp' },
			{ y: 2,  label: 'lingo.stanford.edu' },
			{ y: 2, label: 'nlp.cs.nyu.edu' },
			{ y: 2,  label: 'www.cis.upenn.edu' },
			{ y: 2, label: 'davidmlane.com' },
			{ y: 2, label: 'lists.sourceforge.net' },
			{ y: 1,  label: 'roa.rutgers.edu' },
			{ y: 1, label: 'openccg.sourceforge.net' },
			{ y: 1, label: 'www.dcs.shef.ac' }
			
			
		]
	}]
});
chart.render();




































var chart = new CanvasJS.Chart("chartContainer20040", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2004-0",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.nist.gov' },
			{ y: 1, label:  'http://www.itl.nist.gov/iad/894.01/' },
			{ y: 1, label:  'trec.nist.gov' },
			{ y: 1, label:  'http://duc.nist.gov' },
			{ y: 1, label:  'tides.nist.gov' }
			
		]
	}]
});
chart.render();

































var chart = new CanvasJS.Chart("chartContainer20041", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2004-1",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.isi.edu' }
			
		]
	}]
});
chart.render();
























var chart = new CanvasJS.Chart("chartContainer20042", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2004-2",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.research.att.com' }
			
		]
	}]
});
chart.render();



















var chart = new CanvasJS.Chart("chartContainer20043", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2004-3",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.senseval.org' }
			
		]
	}]
});
chart.render();

























var chart = new CanvasJS.Chart("chartContainer20044", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2004-4",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.nlm.nih.gov' }
			
		]
	}]
});
chart.render();




























var chart = new CanvasJS.Chart("chartContainer20045", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2004-5",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.cogsci.princeton.edu' }
			
		]
	}]
});
chart.render();

























var chart = new CanvasJS.Chart("chartContainer20046", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2004-6",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.ai.mit.edu' }
			
		]
	}]
});
chart.render();


























var chart = new CanvasJS.Chart("chartContainer20047", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2004-7",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'arXiv.org' }
			
		]
	}]
});
chart.render();























var chart = new CanvasJS.Chart("chartContainer20048", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2004-8",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.cs.waikato.ac.nz' }
			
		]
	}]
});
chart.render();























var chart = new CanvasJS.Chart("chartContainer20049", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2004-9",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.csse.monash.edu.au' }
			
		]
	}]
});
chart.render();






















var chart = new CanvasJS.Chart("chartContainer200410", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2004-10",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.census.gov' }
			
		]
	}]
});
chart.render();























var chart = new CanvasJS.Chart("chartContainer200411", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2004-11",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'research.nii.ac.jp' }
			
		]
	}]
});
chart.render();





















































var chart = new CanvasJS.Chart("chartContainer200412", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2004-12",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'lingo.stanford.edu' }
			
		]
	}]
});
chart.render();

























var chart = new CanvasJS.Chart("chartContainer200413", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2004-13",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'nlp.cs.nyu.edu' }
			
		]
	}]
});
chart.render();

























var chart = new CanvasJS.Chart("chartContainer200414", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2004-14",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:   'www.cis.upenn.edu' }
			
		]
	}]
});
chart.render();


























var chart = new CanvasJS.Chart("chartContainer200415", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2004-15",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'davidmlane.com' }
			
		]
	}]
});
chart.render();



























var chart = new CanvasJS.Chart("chartContainer200416", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2004-16",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'lists.sourceforge.net' }
			
		]
	}]
});
chart.render();



























var chart = new CanvasJS.Chart("chartContainer200417", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2004-17",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://roa.rutgers.edu/view.php3?id=845' }
			
		]
	}]
});
chart.render();



























var chart = new CanvasJS.Chart("chartContainer200418", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2004-18",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://openccg.sourceforge.net' }
			
		]
	}]
});
chart.render();































var chart = new CanvasJS.Chart("chartContainer200419", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2004-19",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://www.dcs.shef.ac' },
			{ y: 1, label:  'http://www.dcs.shef.ac.uk' }
			
		]
	}]
});
chart.render();















































var chart = new CanvasJS.Chart("chartContainer2005", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		click: onClick2,		
		legendMarkerColor: "grey",
		name: "2005",
		legendText: "",
		dataPoints: [                                         
			{ y: 10, label: 'www.nist.gov' },        
			{ y: 4, label: 'chasen.org' },
			{ y: 4,  label: 'www.clres.com' },          
			{ y: 3,  label: 'cnts.uia.ac.be' },
			{ y: 3,  label: 'www.d.umn.edu' },
			{ y: 3, label: 'www.fjoch.com' },
			{ y: 5,  label: 'upenn.edu' },
			{ y: 3,  label: 'search.cpan.org' },
			{ y: 2, label: 'mallet.cs.umass.edu' },
			{ y: 2, label:  'www.cs.cornell.edu' },          
			{ y: 2,  label: 'www.ims.uni-stuttgart.de' },
			{ y: 2,  label: 'www.csie.ntu.edu.tw' },
			{ y: 2, label: 'svmlight.joachims.org' },
			{ y: 2,  label: 'nces.ed.gov' },
			{ y: 8, label: 'sourceforge.net' },
			{ y: 2,  label: 'biocreative.ifsm.umbc.edu' },
			{ y: 2, label: 'www.ncbi.nlm.nih.gov'  },
			{ y: 2, label: 'www.nlm.nih.gov' },
			{ y: 1,  label:  'www.speech.sri.com' },
			{ y: 2, label:  'www.sover.net' }
			
			
		]
	}]
});
chart.render();






































var chart = new CanvasJS.Chart("chartContainer20050", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2005-0",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.nist.gov' },
			{ y: 1, label:  'www.itl.nist.gov' },
			{ y: 1, label:  'trec.nist.gov' },
			{ y: 1, label:  'http://nlpir.nist.gov/projects/duc/pubs.html' },
			{ y: 1, label:  'http://www-nlpir.nist.gov/projects/duc/' }
			
			
		]
	}]
});
chart.render();







































var chart = new CanvasJS.Chart("chartContainer20051", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2005-1",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'chasen.org' }
			
		]
	}]
});
chart.render();

























var chart = new CanvasJS.Chart("chartContainer20052", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2005-2",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:   'www.clres.com' }
			
		]
	}]
});
chart.render();
































var chart = new CanvasJS.Chart("chartContainer20053", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2005-3",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'cnts.uia.ac.be' }
			
		]
	}]
});
chart.render();




































var chart = new CanvasJS.Chart("chartContainer20054", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2005-4",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://www.d.umn.edu/f' }
			
		]
	}]
});
chart.render();






































var chart = new CanvasJS.Chart("chartContainer20055", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2005-5",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://www.fjoch.com/YASMET.html' }
			
		]
	}]
});
chart.render();





































var chart = new CanvasJS.Chart("chartContainer20056", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2005-6",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://ldc.upenn.edu/projects/tides/' },
			{ y: 1, label:  'www.cis.upenn.edu' },
			{ y: 1, label:  'www.ldc.upenn.edu' }
			
		]
	}]
});
chart.render();




































var chart = new CanvasJS.Chart("chartContainer20057", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2005-7",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://search.cpan.org/' }
			
		]
	}]
});
chart.render();




















var chart = new CanvasJS.Chart("chartContainer20058", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2005-8",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'mallet.cs.umass.edu' }
			
		]
	}]
});
chart.render();





























var chart = new CanvasJS.Chart("chartContainer20059", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2005-9",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://www.cs.cornell.edu/' }
			
		]
	}]
});
chart.render();




































var chart = new CanvasJS.Chart("chartContainer200510", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2005-10",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.ims.uni-stuttgart.de' }
			
		]
	}]
});
chart.render();

































var chart = new CanvasJS.Chart("chartContainer200511", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2005-11",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.csie.ntu.edu.tw' }
			
		]
	}]
});
chart.render();





























var chart = new CanvasJS.Chart("chartContainer200512", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2005-12",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:   'svmlight.joachims.org' }
			
		]
	}]
});
chart.render();































var chart = new CanvasJS.Chart("chartContainer200513", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2005-13",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'nces.ed.gov' }
			
		]
	}]
});
chart.render();

































var chart = new CanvasJS.Chart("chartContainer200514", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2005-14",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'sourceforge.net' },
			{ y: 1, label:  'utool.sourceforge.net' },
			{ y: 1, label:  'maxent.sourceforge.net' },
			{ y: 1, label:  'openccg.sourceforge.net' },
			{ y: 1, label:  'agtk.sourceforge.net' },
			{ y: 1, label:  'senserelate.sourceforge.net' },
			{ y: 1, label:  'senseclusters.sourceforge.net' }
			
		]
	}]
});
chart.render();
































var chart = new CanvasJS.Chart("chartContainer200515", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2005-15",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'biocreative.ifsm.umbc.edu' }
			
		]
	}]
});
chart.render();

























var chart = new CanvasJS.Chart("chartContainer200516", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2005-16",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.ncbi.nlm.nih.gov' }
			
		]
	}]
});
chart.render();































var chart = new CanvasJS.Chart("chartContainer200517", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2005-17",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.nlm.nih.gov' }
			
		]
	}]
});
chart.render();

































var chart = new CanvasJS.Chart("chartContainer200518", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2005-18",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://www.speech.sri.com/projects/srilm/' }
			
		]
	}]
});
chart.render();
































var chart = new CanvasJS.Chart("chartContainer200519", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2005-19",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://www.sover.net/ozus/cinema.htm' }
			
		]
	}]
});
chart.render();















var chart = new CanvasJS.Chart("chartContainer2006", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		click: onClick2,
		legendMarkerColor: "grey",
		name: "2006",
		legendText: "",
		dataPoints: [                                         
			{ y: 9, label: 'nlp.cs.nyu.edu' },
			{ y: 11, label: 'nist.gov' },
			{ y: 8,  label: 'chasen.org' },          
			{ y: 2,  label: 'chasen.aist-nara.ac.jp' },
			{ y: 6,  label: 'www.isi.edu' },
			{ y: 15, label: 'upenn.edu' },
			{ y: 3,  label:  'www-tsujii.is.s.u-tokyo.ac.jp'},
			{ y: 3, label: 'www.pascal-network.org' },
			{ y: 2, label:  'www.cs.ualberta.ca' },
			{ y: 2, label: 'www.ims.uni-stuttgart.de' },           
			{ y: 2,  label: 'chasen.aist-nara.ac.jp' },
			{ y: 2,  label: 'www.csie.ntu.edu.tw' },
			{ y: 2, label: 'www.keenage.com' },
			{ y: 2,  label: 'www.papillon-dictionary.org' },
			{ y: 2, label: 'www.natcorp.ox.ac.uk' },
			{ y: 2, label: 'homepages.inf.ed.ac.uk' },
			{ y: 2,  label: 'chasen.naist.jp' },
			{ y: 2, label: 'mila.cs.technion.ac.il'  },
			{ y: 2, label: 'www.cnts.ua.ac.be'  },
			{ y: 2, label: 'www.bitterlemons.org'  }
			
			
		]
	}]
});
chart.render();


































var chart = new CanvasJS.Chart("chartContainer20060", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2006-0",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'nlp.cs.nyu.edu' }
			
		]
	}]
});
chart.render();































var chart = new CanvasJS.Chart("chartContainer20061", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2006-1",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'trec.nist.gov' },
			{ y: 1, label:  'www-nlpir.nist.gov' },
			{ y: 1, label:  'http://www.nist.gov/speech/tests/mt/resources/scoring.htm' },
			{ y: 1, label:  'http://www.itl.nist.gov/iaui/894.02/' }
			
		]
	}]
});
chart.render();




























var chart = new CanvasJS.Chart("chartContainer20062", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2006-2",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'chasen.org' }
			
		]
	}]
});
chart.render();




























var chart = new CanvasJS.Chart("chartContainer20063", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2006-3",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://chasen.aist-nara.ac.jp/hiki/ChaSen' }
			
		]
	}]
});
chart.render();































var chart = new CanvasJS.Chart("chartContainer20064", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2006-4",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:   'www.isi.edu' },
			{ y: 1, label:   'semantics.isi.edu' }
			
		]
	}]
});
chart.render();


































var chart = new CanvasJS.Chart("chartContainer20065", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2006-5",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.ldc.upenn.edu' },
			{ y: 1, label:  'www.cis.upenn.edu' },
			{ y: 1, label:  'projects.ldc.upenn.edu' },
			{ y: 1, label:  'www.cis.upenn.edu.bikel' }
		]
	}]
});
chart.render();






























var chart = new CanvasJS.Chart("chartContainer20066", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2006-6",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://www-tsujii.is.s.u-tokyo.ac.jp/tsuruoka/postagger/' }
			
		]
	}]
});
chart.render();

































var chart = new CanvasJS.Chart("chartContainer20067", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2006-7",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.pascal-network.org' }
			
		]
	}]
});
chart.render();





































var chart = new CanvasJS.Chart("chartContainer20068", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2006-8",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.cs.ualberta.ca' }
			
		]
	}]
});
chart.render();



































var chart = new CanvasJS.Chart("chartContainer20069", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2006-9",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.ims.uni-stuttgart.de' }
			
		]
	}]
});
chart.render();
































var chart = new CanvasJS.Chart("chartContainer200610", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2006-10",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'chasen.aist-nara.ac.jp' }
			
		]
	}]
});
chart.render();







































var chart = new CanvasJS.Chart("chartContainer200611", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2006-11",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.csie.ntu.edu.tw' }
			
		]
	}]
});
chart.render();




































var chart = new CanvasJS.Chart("chartContainer200612", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2006-12",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.keenage.com' }
			
		]
	}]
});
chart.render();






























var chart = new CanvasJS.Chart("chartContainer200613", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2006-13",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'www.papillon-dictionary.org' }
			
		]
	}]
});
chart.render();






























var chart = new CanvasJS.Chart("chartContainer200614", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2006-14",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.natcorp.ox.ac.uk' }
			
		]
	}]
});
chart.render();




































var chart = new CanvasJS.Chart("chartContainer200615", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2006-15",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'homepages.inf.ed.ac.uk' }
			
		]
	}]
});
chart.render();



































var chart = new CanvasJS.Chart("chartContainer200616", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2006-16",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'chasen.naist.jp' }
			
		]
	}]
});
chart.render();



































var chart = new CanvasJS.Chart("chartContainer200617", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2006-17",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'mila.cs.technion.ac.il' }
			
		]
	}]
});
chart.render();




































var chart = new CanvasJS.Chart("chartContainer200618", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2006-18",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.cnts.ua.ac.be' }
			
		]
	}]
});
chart.render();







































var chart = new CanvasJS.Chart("chartContainer200619", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2006-19",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.bitterlemons.org' }
			
		]
	}]
});
chart.render();









































































var chart = new CanvasJS.Chart("chartContainer2007", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"width: 900,
	width: 900,
	title:{
		text: ""
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
		click : onClick2,		
		legendMarkerColor: "grey",
		name: "2007",
		legendText: "",
		dataPoints: [                                         
			{ y: 6, label: 'chasen.org' }, 
			{ y: 6, label: 'opennlp.sourceforge.net' },
			{ y: 6,  label: 'www.isi.edu' },          
			{ y: 11,  label: 'upenn.edu' },
			{ y: 4,  label: 'www.statmt.org' },
			{ y: 4, label: 'www.csie.ntu.edu.tw' },
			{ y: 6,  label:  'www.nist.gov'},
			{ y: 3,  label: 'hal3.name' },
			{ y: 3, label: 'search.cpan.org' },
			{ y: 3, label:  'lucene.apache.org' },
			{ y: 2, label: 'www.cs.waikato.ac.nz' },           
			{ y: 2,  label: 'svmlight.joachims.org' },
			{ y: 2,  label: 'corpus.leeds.ac.uk' },
			{ y: 2,  label: 'homepages.inf.ed.ac.uk' },
			{ y: 2, label: 'www.cnts.ua.ac.be' },
			{ y: 2,  label: 'www.fjoch.com' },
			{ y: 2, label: 'www.speech.sri.com' },
			{ y: 2, label: 'www.eml-research.de' },
			{ y: 2,  label: 'www.cs.ualberta.ca' },
			{ y: 2, label: 'glaros.dtc.umn.edu'  }
			
			
		]
	}]
});
chart.render();






































var chart = new CanvasJS.Chart("chartContainer20070", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2007-0",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'chasen.org' }
			
		]
	}]
});
chart.render();





























var chart = new CanvasJS.Chart("chartContainer20071", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2007-1",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'opennlp.sourceforge.net' }
			
		]
	}]
});
chart.render();
























var chart = new CanvasJS.Chart("chartContainer20072", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2007-2",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.isi.edu' }
			
		]
	}]
});
chart.render();
























var chart = new CanvasJS.Chart("chartContainer20073", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2007-3",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.ldc.upenn.edu' },
			{ y: 1, label:  'www.cis.upenn.edu' },
			{ y: 1, label:  'projects.ldc.upenn.edu' },
			{ y: 1, label:  'www.cis.upenn.edu.bikel' }
			
		]
	}]
});
chart.render();



























var chart = new CanvasJS.Chart("chartContainer20074", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2007-4",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.statmt.org' }
			
		]
	}]
});
chart.render();






























var chart = new CanvasJS.Chart("chartContainer20075", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2007-5",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.csie.ntu.edu.tw' }
			
		]
	}]
});
chart.render();






























var chart = new CanvasJS.Chart("chartContainer20076", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2007-6",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://trec.nist.gov/data/reuters/' },
			{ y: 1, label:  'www-nlpir.nist.gov' },
			{ y: 1, label:  'www.nist.gov' }
			
		]
	}]
});
chart.render();





























var chart = new CanvasJS.Chart("chartContainer20077", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2007-7",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'hal3.name' }
			
		]
	}]
});
chart.render();






























var chart = new CanvasJS.Chart("chartContainer20078", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2007-8",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'search.cpan.org' }
			
		]
	}]
});
chart.render();

































var chart = new CanvasJS.Chart("chartContainer20079", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2007-9",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'lucene.apache.org' }
			
		]
	}]
});
chart.render();





























var chart = new CanvasJS.Chart("chartContainer200710", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2007-10",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'www.cs.waikato.ac.nz' }
			
		]
	}]
});
chart.render();




























var chart = new CanvasJS.Chart("chartContainer200711", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2007-11",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'svmlight.joachims.org' }
			
		]
	}]
});
chart.render();





























var chart = new CanvasJS.Chart("chartContainer200712", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2007-12",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'corpus.leeds.ac.uk' }
			
		]
	}]
});
chart.render();





























var chart = new CanvasJS.Chart("chartContainer200713", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2007-13",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'homepages.inf.ed.ac.uk' }
			
		]
	}]
});
chart.render();



























var chart = new CanvasJS.Chart("chartContainer200714", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2007-14",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.cnts.ua.ac.be' }
			
		]
	}]
});
chart.render();





























var chart = new CanvasJS.Chart("chartContainer200715", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2007-15",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.fjoch.com' }
			
		]
	}]
});
chart.render();





























var chart = new CanvasJS.Chart("chartContainer200716", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2007-16",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.speech.sri.com' }
			
		]
	}]
});
chart.render();



























var chart = new CanvasJS.Chart("chartContainer200717", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2007-17",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.eml-research.de' }
			
		]
	}]
});
chart.render();





























var chart = new CanvasJS.Chart("chartContainer200718", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2007-18",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.cs.ualberta.ca' }
			
		]
	}]
});
chart.render();





























var chart = new CanvasJS.Chart("chartContainer200719", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2007-19",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'glaros.dtc.umn.edu' }
			
		]
	}]
});
chart.render();








































































var chart = new CanvasJS.Chart("chartContainer2008", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		click: onClick2,
		legendMarkerColor: "grey",
		name: "2008",
		legendText: "",
		dataPoints: [                                         
			{ y: 7, label: 'www.statmt.org' },                    
			{ y: 6, label: 'nlp.stanford.edu' },
			{ y: 4,  label: 'chasen.org' },          
			{ y: 5,  label: 'www.cl.cam.ac.uk' },
			{ y: 4,  label: 'www.cs.cmu.edu' },
			{ y: 20, label: 'sourceforge.net' },
			{ y: 2,  label: 'www.cs.ualberta.ca'},
			{ y: 4,  label: 'homepages.inf.ed.ac.uk' },
			{ y: 14, label: 'www.nist.gov' },
			{ y: 11, label:  'upenn.edu' },
			{ y: 3, label: 'www.w3.org' },           
			{ y: 3,  label: 'wordnet.princeton.edu' },
			{ y: 6,  label: 'hal3.name' },
			{ y: 2,  label: 'answers.yahoo.com' },
			{ y: 3, label: 'www.csie.ntu.edu.tw' },
			{ y: 3,  label: 'www.mturk.com' },
			{ y: 3, label: 'www.summarization.com' },
			{ y: 2, label: 'www.cs.washington.edu' },
			{ y: 2,  label: 'mallet.cs.umass.edu' },
			{ y: 2, label: 'bllip.cs.brown.edu'  }
			
			
		]
	}]
});
chart.render();

























var chart = new CanvasJS.Chart("chartContainer20080", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2008-0",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.statmt.org' }
			
		]
	}]
});
chart.render();

































var chart = new CanvasJS.Chart("chartContainer20081", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2008-1",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'nlp.stanford.edu' }
			
		]
	}]
});
chart.render();




























var chart = new CanvasJS.Chart("chartContainer20082", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2008-2",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'chasen.org' }
			
		]
	}]
});
chart.render();

































var chart = new CanvasJS.Chart("chartContainer20083", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2008-3",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.cl.cam.ac.uk' }
			
		]
	}]
});
chart.render();


































var chart = new CanvasJS.Chart("chartContainer20084", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2008-4",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.cs.cmu.edu' }
			
		]
	}]
});
chart.render();




































var chart = new CanvasJS.Chart("chartContainer20085", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2008-5",
		legendText: "",
		dataPoints: [ 
			{ y: 1, label:  'sourceforge.net' },
			{ y: 1, label:  'opennlp.sourceforge.net' },
			{ y: 1, label:  'openccg.sourceforge.net' },
			{ y: 1, label:  'maxent.sourceforge.net' },
			{ y: 1, label:  'mecab.sourceforge.net' },
			{ y: 1, label:  'cmusphinx.sourceforge.net' },
			{ y: 1, label:  'minorthird.sourceforge.net' },
			{ y: 1, label:  'jwordnet.sourceforge.net' },
			{ y: 1, label:  'mstparser.sourceforge.net' },
			{ y: 1, label:  'lpsolve.sourceforge.net' },
			{ y: 1, label:  'riso.sourceforge.net' }
			
		]
	}]
});
chart.render();



































var chart = new CanvasJS.Chart("chartContainer20086", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2008-6",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.cs.ualberta.ca' }
			
		]
	}]
});
chart.render();




































var chart = new CanvasJS.Chart("chartContainer20087", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2008-7",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'homepages.inf.ed.ac.uk' }
			
		]
	}]
});
chart.render();







































var chart = new CanvasJS.Chart("chartContainer20088", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2008-8",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'duc.nist.gov' },
			{ y: 1, label:  'www.nist.gov' },
			{ y: 1, label:  'trec.nist.gov' },
			{ y: 1, label:  'math.nist.gov' }
			
		]
	}]
});
chart.render();







































var chart = new CanvasJS.Chart("chartContainer20089", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2008-9",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'projects.ldc.upenn.edu' },
			{ y: 1, label:  'www.cis.upenn.edu' },
			{ y: 1, label:  'www.ldc.upenn.edu' },
			{ y: 1, label:  'www.seas.upenn.edu' }
			
		]
	}]
});
chart.render();






































var chart = new CanvasJS.Chart("chartContainer200810", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2008-10",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.w3.org' }
			
		]
	}]
});
chart.render();






































var chart = new CanvasJS.Chart("chartContainer200811", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2008-11",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'wordnet.princeton.edu' }
			
		]
	}]
});
chart.render();




































var chart = new CanvasJS.Chart("chartContainer200812", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2008-12",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'hal3.name' },
			{ y: 1, label:  'pub.hal3.name' }
			
		]
	}]
});
chart.render();










































var chart = new CanvasJS.Chart("chartContainer200813", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2008-13",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'answers.yahoo.com' }
			
		]
	}]
});
chart.render();

































var chart = new CanvasJS.Chart("chartContainer200814", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2008-14",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.csie.ntu.edu.tw' }
			
		]
	}]
});
chart.render();































var chart = new CanvasJS.Chart("chartContainer200815", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2008-15",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.mturk.com' }
			
		]
	}]
});
chart.render();






































var chart = new CanvasJS.Chart("chartContainer200816", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2008-16",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.summarization.com' }
			
		]
	}]
});
chart.render();


































var chart = new CanvasJS.Chart("chartContainer200817", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2008-17",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.cs.washington.edu' }
			
		]
	}]
});
chart.render();































var chart = new CanvasJS.Chart("chartContainer200818", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2008-18",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:   'mallet.cs.umass.edu' }
			
		]
	}]
});
chart.render();


































var chart = new CanvasJS.Chart("chartContainer200819", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2008-19",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'bllip.cs.brown.edu' }
			
		]
	}]
});
chart.render();








































































var chart = new CanvasJS.Chart("chartContainer2009", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2",
	width: 900,
	title:{
		text: ""
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
		click: onClick2,
		legendMarkerColor: "grey",
		name: "2009",
		legendText: "",
		dataPoints: [                                         
			{ y: 9, label: 'nlp.stanford.edu' },          
			{ y: 8, label: 'www.statmt.org' },
			{ y: 13,  label: 'www.nist.gov' },          
			{ y: 6,  label: 'upenn.edu' },
			{ y: 6,  label: 'wikipedia.org' },
			{ y: 8, label: 'google.com' },
			{ y: 4,  label: 'www.cs.ualberta.ca' },
			{ y: 14,  label: 'sourceforge.net' },
			{ y: 4, label: 'svmlight.joachims.org' },
			{ y: 4, label:  'lucene.apache.org' },
			{ y: 3, label: 'verbs.colorado.edu' },           
			{ y: 3,  label: 'ir.hit.edu.cn' },
			{ y: 3,  label: 'nlp.kuee.kyoto-u.ac.jp' },
			{ y: 3,  label: 'www.cs.pitt.edu' },
			{ y: 3, label: 'www.cs.cornell.edu' },
			{ y: 2,  label: 'www.flickr.com' },
			{ y: 3, label: 'www.cnts.ua.ac.be' },
			{ y: 3, label: 'www.speech.sri.com' },
			{ y: 3,  label: 'mallet.cs.umass.edu' },
			{ y: 3, label: 'edits.fbk.eu'  }
			
			
		]
	}]
});
chart.render();






























var chart = new CanvasJS.Chart("chartContainer20090", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2009-0",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'nlp.stanford.edu' }
			
		]
	}]
});
chart.render();






























var chart = new CanvasJS.Chart("chartContainer20091", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2009-1",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.statmt.org' }
			
		]
	}]
});
chart.render();



































var chart = new CanvasJS.Chart("chartContainer20092", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2009-2",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.nist.gov' },
			{ y: 1, label:  'duc.nist.gov' },
			{ y: 1, label:  'trec.nist.gov' },
			{ y: 1, label:  'http://www.itl.nist.gov/iad/mig/tests/mt/2008/doc/' },
			{ y: 1, label:  'http://www-nlpir.nist.gov/projects/duc/duc2007/' }
			
		]
	}]
});
chart.render();































var chart = new CanvasJS.Chart("chartContainer20093", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2009-3",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.cis.upenn.edu' },
			{ y: 1, label:  'http://www.seas.upenn.edu/~mdredze/datasets/sentiment/' },
			{ y: 1, label:  'projects.ldc.upenn.edu' },
			{ y: 1, label:  'www.ldc.upenn.edu' }
			
		]
	}]
});
chart.render();






























var chart = new CanvasJS.Chart("chartContainer20094", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2009-4",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://www.wikipedia.org/'},
			{ y: 1, label:   'download.wikipedia.org' },
			{ y: 1, label:   'en.wikipedia.org' }
			
			
			
			
		]
	}]
});
chart.render();

































var chart = new CanvasJS.Chart("chartContainer20095", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2009-5",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'code.google.com' },
			{ y: 1, label:  'translate.google.com' },
			{ y: 1, label:  'labs.google.com' },
			{ y: 1, label:  'directory.google.com' }
			
		]
	}]
});
chart.render();

































var chart = new CanvasJS.Chart("chartContainer20096", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2009-6",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.cs.ualberta.ca' }
			
		]
	}]
});
chart.render();


































var chart = new CanvasJS.Chart("chartContainer20097", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2009-7",
		legendText: "",
		dataPoints: [
			{ y: 1, label: 'sourceforge.net' },
			{ y: 1, label:  'http://stardict.sourceforge.net/' },
			{ y: 1, label:  'http://lpsolve.sourceforge.net/5.5/' },
			{ y: 1, label:  'opennlp.sourceforge.net' },
			{ y: 1, label: 'crfpp.sourceforge.net' },
			{ y: 1, label: 'http://argmax.sourceforge.net/' },
			{ y: 1, label: 'http://maxent.sourceforge.net' },
			{ y: 1, label: 'http://jswarm-pso.sourceforge.net/' },
			{ y: 1, label: 'http://nltk.sourceforge.net/'}
			
		]
	}]
});
chart.render();

































var chart = new CanvasJS.Chart("chartContainer20098", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2009-8",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'svmlight.joachims.org' }
			
		]
	}]
});
chart.render();






























var chart = new CanvasJS.Chart("chartContainer20099", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2009-9",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'lucene.apache.org' }
			
		]
	}]
});
chart.render();
































var chart = new CanvasJS.Chart("chartContainer200910", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2009-10",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:   'verbs.colorado.edu' }
			
		]
	}]
});
chart.render();
































var chart = new CanvasJS.Chart("chartContainer200911", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2009-11",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'ir.hit.edu.cn' }
			
		]
	}]
});
chart.render();





























var chart = new CanvasJS.Chart("chartContainer200912", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2009-12",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'nlp.kuee.kyoto-u.ac.jp' }
			
		]
	}]
});
chart.render();

































var chart = new CanvasJS.Chart("chartContainer200913", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2009-13",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.cs.pitt.edu' }
			
		]
	}]
});
chart.render();




































var chart = new CanvasJS.Chart("chartContainer200914", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2009-14",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.cs.cornell.edu' }
			
		]
	}]
});
chart.render();




































var chart = new CanvasJS.Chart("chartContainer200915", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2009-15",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.flickr.com' }
			
		]
	}]
});
chart.render();




































var chart = new CanvasJS.Chart("chartContainer200916", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2009-16",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.cnts.ua.ac.be' }
			
		]
	}]
});
chart.render();































var chart = new CanvasJS.Chart("chartContainer200917", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2009-17",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.speech.sri.com' }
			
		]
	}]
});
chart.render();



































var chart = new CanvasJS.Chart("chartContainer200918", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2009-18",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'mallet.cs.umass.edu' }
			
		]
	}]
});
chart.render();






































var chart = new CanvasJS.Chart("chartContainer200919", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2009-19",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'edits.fbk.eu' }
			
		]
	}]
});
chart.render();


























































var chart = new CanvasJS.Chart("chartContainer2010", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		click: onClick2,
		legendMarkerColor: "grey",
		name: "2010",
		legendText: "",
		dataPoints: [                                         
			{ y: 14, label: 'www.nist.gov' },
			{ y: 10, label: 'nlp.stanford.edu' },
			{ y: 8,  label: 'mallet.cs.umass.edu' },          
			{ y: 7,  label: 'www.csie.ntu.edu.tw' },
			{ y: 23,  label: 'sourceforge.net' },
			{ y: 6, label: 'www.cs.chalmers.se' },
			{ y: 5,  label: 'homepages.inf.ed.ac.uk' },
			{ y: 9,  label: 'upenn.edu' },
			{ y: 15, label: 'google.com' },
			{ y: 5, label:  'www.isi.edu' },
			{ y: 3, label: 'webdocs.cs.ualberta.ca' },           
			{ y: 8,  label: 'www.anc.org' },
			{ y: 4,  label: 'www.cs.washington.edu' },
			{ y: 4,  label: 'www.amazon.com' },
			{ y: 4, label: 'svmlight.joachims.org' },
			{ y: 4,  label: 'www.cs.pitt.edu' },
			{ y: 4, label: 'princeton.edu' },
			{ y: 3, label: 'www.sil.org' },
			{ y: 3,  label: 'hdl.handle.net' },
			{ y: 3, label: 'lcl.uniroma1.it'  }
			
			
		]
	}]
});
chart.render();














































var chart = new CanvasJS.Chart("chartContainer20100", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2010-0",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.nist.gov' },
			{ y: 1, label:  'duc.nist.gov' },
			{ y: 1, label:  'www-nlpir.nist.gov' },
			{ y: 1, label:  'trec.nist.gov' },
			{ y: 1, label:  'www.itl.nist.gov' },
			{ y: 1, label:  'http://nist.gov/speech/tests' }
			
			
		]
	}]
});
chart.render();



































var chart = new CanvasJS.Chart("chartContainer20101", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2010-1",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'nlp.stanford.edu' },
			{ y: 1, label:  'http://nlp.stanford.edu:8080/parser/' }
			
		]
	}]
});
chart.render();

































var chart = new CanvasJS.Chart("chartContainer20102", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2010-2",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'mallet.cs.umass.edu' }
			
		]
	}]
});
chart.render();





























var chart = new CanvasJS.Chart("chartContainer20103", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2010-3",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.csie.ntu.edu.tw' }
			
		]
	}]
});
chart.render();

































var chart = new CanvasJS.Chart("chartContainer20104", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2010-4",
		legendText: "",
		dataPoints: [    
			{ y: 1, label:  'sourceforge.net' },
			{ y: 1, label:  'tadm.sourceforge.net' },
			{ y: 1, label:  'http://flexcrfs.sourceforge' },
			{ y: 1, label:  'http://texhyphj.sourceforge.net' },
			{ y: 1, label:  'http://crfpp.sourceforge.net/' },
			{ y: 1, label:  'http://mmax2.sourceforge.net/' },
			{ y: 1, label:  'http://stardict.sourceforge.net/' },
			{ y: 1, label:  'http://chasen-legacy.sourceforge.jp/' },
			{ y: 1, label:  'http://multiparse.sourceforge.net' },
			{ y: 1, label:  'lpsolve.sourceforge.net' },
			{ y: 1, label:  'http://mecab.sourceforge.net' },
			{ y: 1, label:  'http://opennlp.sourceforge' },
			{ y: 1, label:  'http://wn-similarity.sourceforge.net/' },
			{ y: 1, label:  'http://jwordnet.sourceforge.net/' },
			{ y: 1, label:  'http://maxent.sourceforge.net/' }
			
		]
	}]
});
chart.render();































var chart = new CanvasJS.Chart("chartContainer20105", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2010-5",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:   'www.cs.chalmers.se' }
			
		]
	}]
});
chart.render();




































var chart = new CanvasJS.Chart("chartContainer20106", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2010-6",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'homepages.inf.ed.ac.uk' },
			{ y: 1, label:  'http://homepages.inf' }
			
		]
	}]
});
chart.render();

































var chart = new CanvasJS.Chart("chartContainer20107", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2010-7",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.cis.upenn.edu' },
			{ y: 1, label:  'http://www.seas.upenn.edu/~mdredze/datasets/sentiment/' },
			{ y: 1, label:  'projects.ldc.upenn.edu' },
			{ y: 1, label:  'www.ldc.upenn.edu' }
			
		]
	}]
});
chart.render();



































var chart = new CanvasJS.Chart("chartContainer20108", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2010-8",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:   'www.google.com' },
			{ y: 1, label:   'translate.google.com' },
			{ y: 1, label:   'code.google.com' },
			{ y: 1, label:   'news.google.com' }
			
		]
	}]
});
chart.render();































var chart = new CanvasJS.Chart("chartContainer20109", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2010-9",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.isi.edu' }
			
		]
	}]
});
chart.render();































var chart = new CanvasJS.Chart("chartContainer201010", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2010-10",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'webdocs.cs.ualberta.ca' }
			
		]
	}]
});
chart.render();

































var chart = new CanvasJS.Chart("chartContainer201011", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2010-11",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.anc.org' }
			
		]
	}]
});
chart.render();
































var chart = new CanvasJS.Chart("chartContainer201012", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2010-12",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.cs.washington.edu' }
			
		]
	}]
});
chart.render();































var chart = new CanvasJS.Chart("chartContainer201013", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2010-13",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.amazon.com' }
			
		]
	}]
});
chart.render();































var chart = new CanvasJS.Chart("chartContainer201014", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2010-14",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'svmlight.joachims.org' }
			
		]
	}]
});
chart.render();






































var chart = new CanvasJS.Chart("chartContainer201015", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2010-15",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.cs.pitt.edu' }
			
		]
	}]
});
chart.render();
































var chart = new CanvasJS.Chart("chartContainer201016", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2010-16",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'wordnet.princeton.edu' },
			{ y: 1, label:  'http://wordnetweb.princeton.edu/perl/webwn' }
			
		]
	}]
});
chart.render();





































var chart = new CanvasJS.Chart("chartContainer201017", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2010-17",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.sil.org' }
			
		]
	}]
});
chart.render();





























var chart = new CanvasJS.Chart("chartContainer201018", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2010-18",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'hdl.handle.net' }
			
		]
	}]
});
chart.render();


































var chart = new CanvasJS.Chart("chartContainer201019", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2010-19",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'lcl.uniroma1.it' }
			
		]
	}]
});
chart.render();



















































var chart = new CanvasJS.Chart("chartContainer2011", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		click: onClick2,
		legendMarkerColor: "grey",
		name: "2011",
		legendText: "",
		dataPoints: [                                         
			{ y: 23, label: 'wikipedia.org' },
			{ y: 19, label: 'google.com' },
			{ y: 11,  label: 'www.statmt.org' },          
			{ y: 10,  label: 'nlp.stanford.edu' },
			{ y: 16,  label: 'sourceforge.net' },
			{ y: 7, label: 'mallet.cs.umass.edu' },
			{ y: 6,  label: 'www.csie.ntu.edu.tw' },
			{ y: 6,  label: 'github.com' },
			{ y: 5, label:  'cs.cmu.edu' },
			{ y: 5, label:  'svmlight.org' },
			{ y: 5, label: 'upenn.edu' },           
			{ y: 9,  label: 'www.nist.gov' },
			{ y: 4,  label: 'cogcomp.cs.illinois.edu' },
			{ y: 4,  label: 'research.microsoft.com' },
			{ y: 4, label: 'www.mturk.com' },
			{ y: 3,  label: 'www.cs.cornell.edu' },
			{ y: 3, label: 'www.wjh.harvard.edu' },
			{ y: 3, label: 'groups.csail.mit.edu' },
			{ y: 3,  label: 'fjoch.com' },
			{ y: 3, label: 'www.ark.cs.cmu.edu'  }
			
			
		]
	}]
});
chart.render();









































var chart = new CanvasJS.Chart("chartContainer20110", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2011-0",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'en.wikipedia.org' },
			{ y: 1, label:  'www.wikipedia.org' },
			{ y: 1, label:  'simple.wikipedia.org' }
			
		]
	}]
});
chart.render();


































var chart = new CanvasJS.Chart("chartContainer20111", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2011-1",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.google.com' },
			{ y: 1, label:  'translate.google.com' },
			{ y: 1, label:  'code.google.com' },
			{ y: 1, label:  'sites.google.com' },
			{ y: 1, label:  'http://news.google.com' }
			
		]
	}]
});
chart.render();



































var chart = new CanvasJS.Chart("chartContainer20112", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2011-2",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.statmt.org' }
			
		]
	}]
});
chart.render();
































var chart = new CanvasJS.Chart("chartContainer20113", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2011-3",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'nlp.stanford.edu' }
			
		]
	}]
});
chart.render();










































var chart = new CanvasJS.Chart("chartContainer20114", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2011-4",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'sourceforge.net' },
			{ y: 1, label:  'http://maxent.sourceforge.net' },
			{ y: 1, label:  'crftagger.sourceforge.net' },
			{ y: 1, label:  'crfpp.sourceforge.net' },
			{ y: 1, label:  'opennlp.sourceforge.net' },
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
	}]
});
chart.render();































































var chart = new CanvasJS.Chart("chartContainer20115", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2011-5",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'mallet.cs.umass.edu' }
			
		]
	}]
});
chart.render();





































var chart = new CanvasJS.Chart("chartContainer20116", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2011-6",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.csie.ntu.edu.tw' }
			
		]
	}]
});
chart.render();






































var chart = new CanvasJS.Chart("chartContainer20117", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2011-7",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'github.com' }
			
		]
	}]
});
chart.render();







































var chart = new CanvasJS.Chart("chartContainer20118", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2011-8",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.cs.cmu.edu' },
			{ y: 1, label:  'http://www.speech.cs.cmu.edu/sphinx/tutorial.html' },
			{ y: 1, label:  'www.ark.cs.cmu.edu' },
			{ y: 1, label:  'http://boston.lti.cs.cmu.edu/Data/clueweb09/' }
			
		]
	}]
});
chart.render();




































var chart = new CanvasJS.Chart("chartContainer20119", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2011-9",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'svmlight.joachims.org' },
			{ y: 1, label:  'svmlight' }
			
		]
	}]
});
chart.render();


























var chart = new CanvasJS.Chart("chartContainer201110", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2011-10",
		legendText: "",
		dataPoints: [
			{ y: 1, label:  'www.ldc.upenn.edu' },
			{ y: 1, label:  'projects.ldc.upenn.edu' },
			{ y: 1, label:  'https://dbappserv.cis.upenn.edu/spell/' },
			{ y: 1, label:  'http://www.cis.upenn.edu/' },
			{ y: 1, label:  'http://ww.ldc.upenn.edu/Project/GALE' },
			{ y: 1, label:  'http://www.seas.upenn.edu/' }
			
		]
	}]
});
chart.render();



































var chart = new CanvasJS.Chart("chartContainer201111", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2011-11",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.itl.nist.gov' },
			{ y: 1, label:  'trec.nist.gov' },
			{ y: 1, label:  'www.nist.gov' },
			{ y: 1, label:  'http://www-nlpir.nist.gov/related_projects/muc/' }
			
		]
	}]
});
chart.render();































var chart = new CanvasJS.Chart("chartContainer201112", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2011-12",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'cogcomp.cs.illinois.edu' },
			{ y: 1, label:  'http://cogcomp.cs' }
			
		]
	}]
});
chart.render();



































var chart = new CanvasJS.Chart("chartContainer201113", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2011-13",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'research.microsoft.com' }
			
		]
	}]
});
chart.render();




































var chart = new CanvasJS.Chart("chartContainer201114", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2011-14",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.mturk.com' }
			
		]
	}]
});
chart.render();




























var chart = new CanvasJS.Chart("chartContainer201115", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2011-15",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.cs.cornell.edu' }
			
		]
	}]
});
chart.render();






































var chart = new CanvasJS.Chart("chartContainer201116", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2011-16",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.wjh.harvard.edu' }
			
		]
	}]
});
chart.render();
































var chart = new CanvasJS.Chart("chartContainer201117", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2011-17",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'groups.csail.mit.edu' }
			
		]
	}]
});
chart.render();


































var chart = new CanvasJS.Chart("chartContainer201118", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2011-18",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'fjoch.com' }
			
		]
	}]
});
chart.render();



























var chart = new CanvasJS.Chart("chartContainer201119", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2011-19",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.ark.cs.cmu.edu' }
			
		]
	}]
});
chart.render();




















































var chart = new CanvasJS.Chart("chartContainer2012", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		click: onClick2,
		showInLegend: true, 
		legendMarkerColor: "grey",
		name: "2012",
		legendText: "",
		dataPoints: [                                         
			{ y: 27, label: 'google.com' },
			{ y: 12, label: 'nlp.stanford.edu' },
			{ y: 10,  label: 'www.aclweb.org' },          
			{ y: 6,  label: 'github.com' },
			{ y: 6,  label: 'statmt.org' },
			{ y: 6, label: 'mallet.cs.umass.edu' },
			{ y: 9,  label: 'wikipedia.org' },
			{ y: 4,  label: 'lucene.apache.org' },
			{ y: 13, label: 'sourceforge.net'},
			{ y: 4, label:  'nist.gov' },
			{ y: 4, label: 'groups.csail.mit.edu' },           
			{ y: 3,  label: 'upenn.edu' },
			{ y: 3,  label: 'disi.unitn.it' },
			{ y: 3,  label: 'lemurproject.org' },
			{ y: 3, label: 'homepages.inf.ed.ac.uk'},
			{ y: 3,  label: 'www.mturk.com' },
			{ y: 3, label: 'www.speech.cs.cmu.edu'},
			{ y: 3, label: 'www.csie.ntu.edu' },
			{ y: 3,  label: 'www.accurat-project.eu' },
			{ y: 2, label: 'phontron.com'  }
			
			
		]
	}]
});
chart.render();








































var chart = new CanvasJS.Chart("chartContainer20120", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2012-0",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'sites.google.com' },
			{ y: 1, label:  'code.google.com' },
			{ y: 1, label:  'translate.google.com' },
			{ y: 1, label:  'https://support.google.com/adwords/' },
			{ y: 1, label:  'books.google.com' }
			
		]
	}]
});
chart.render();



































var chart = new CanvasJS.Chart("chartContainer20121", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2012-1",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'nlp.stanford.edu' }
			
		]
	}]
});
chart.render();



































var chart = new CanvasJS.Chart("chartContainer20122", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2012-2",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.aclweb.org' }
			
		]
	}]
});
chart.render();






































var chart = new CanvasJS.Chart("chartContainer20123", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2012-3",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'github.com' }
			
		]
	}]
});
chart.render();
































var chart = new CanvasJS.Chart("chartContainer20124", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2012-4",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.statmt.org' }
			
		]
	}]
});
chart.render();


































var chart = new CanvasJS.Chart("chartContainer20125", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2012-5",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'mallet.cs.umass.edu' }
			
		]
	}]
});
chart.render();






























var chart = new CanvasJS.Chart("chartContainer20126", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2012-6",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'en.wikipedia.org' },
			{ y: 1, label:  'www.wikipedia.org' },
			{ y: 1, label:  'simple.wikipedia.org' },
			{ y: 1, label:  'http://zh.wikipedia.org/wiki' }
			
		]
	}]
});
chart.render();

































var chart = new CanvasJS.Chart("chartContainer20127", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2012-7",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'lucene.apache.org' }
			
		]
	}]
});
chart.render();

































var chart = new CanvasJS.Chart("chartContainer20128", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2012-8",
		legendText: "",
		dataPoints: [
			{ y: 1, label:  'sourceforge.net' },
			{ y: 1, label:  'opennlp.sourceforge.net' },
			{ y: 1, label:  'crfpp.sourceforge.net' },
			{ y: 1, label:  'http://gibbslda.sourceforge.net/' },
			{ y: 1, label:  'http://wn-similarity.sourceforge.net' },
			{ y: 1, label:  'mecab.sourceforge.net' },
			{ y: 1, label:  'http://sourceforge.net/projects/opennlp/' },
			{ y: 1, label:  'http://inprotk.sourceforge.net' },
			{ y: 1, label:  'http://java-ml.sourceforge.net/' }
			
			
		]
	}]
});
chart.render();



























var chart = new CanvasJS.Chart("chartContainer20129", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2012-9",
		legendText: "",
		dataPoints: [     
			{ y: 1, label:  'www.nist.gov' },
			{ y: 1, label:  'www.itl.nist.gov' },
			{ y: 1, label:  'trec.nist.gov' },
			{ y: 1, label:  'duc.nist.gov' }
			
			
		]
	}]
});
chart.render();




































var chart = new CanvasJS.Chart("chartContainer201210", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2012-10",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'groups.csail.mit.edu' }
			
		]
	}]
});
chart.render();


































var chart = new CanvasJS.Chart("chartContainer201211", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2012-11",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.seas.upenn.edu' },
			{ y: 1, label:  'www.cis.upenn.edu' },
			{ y: 1, label:  'http://projects.ldc.upenn.edu/ace' },
			{ y: 1, label:  'www.ldc.upenn.edu' }
			
		]
	}]
});
chart.render();





























var chart = new CanvasJS.Chart("chartContainer201212", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2012-12",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'disi.unitn.it' }
			
		]
	}]
});
chart.render();





























var chart = new CanvasJS.Chart("chartContainer201213", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2012-13",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.lemurproject.org' }
			
		]
	}]
});
chart.render();


























var chart = new CanvasJS.Chart("chartContainer201214", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2012-14",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'homepages.inf.ed.ac.uk' }
			
		]
	}]
});
chart.render();































var chart = new CanvasJS.Chart("chartContainer201215", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2012-15",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://mturk.com' }
			
		]
	}]
});
chart.render();
































var chart = new CanvasJS.Chart("chartContainer201216", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2012-16",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.speech.cs.cmu.edu' }
			
		]
	}]
});
chart.render();





























var chart = new CanvasJS.Chart("chartContainer201217", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2012-17",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.csie.ntu.edu.tw' },
			{ y: 1, label:  'http://www.csie.ntu.edu' }
			
		]
	}]
});
chart.render();






























var chart = new CanvasJS.Chart("chartContainer201218", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2012-18",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.accurat-project.eu' }
			
		]
	}]
});
chart.render();




























var chart = new CanvasJS.Chart("chartContainer201219", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2012-19",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://phontron.com/pialign/' }
			
		]
	}]
});
chart.render();




































































var chart = new CanvasJS.Chart("chartContainer2013", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		click: onClick2,
		legendMarkerColor: "grey",
		name: "2013",
		legendText: "",
		dataPoints: [                                         
			{ y: 29, label: 'nlp.stanford.edu' },
			{ y: 26, label: 'google.com' },
			{ y: 24,  label: 'wikipedia.org' },          
			{ y: 20,  label: 'github.com' },
			{ y: 12,  label: 'www.statmt.org' },
			{ y: 11, label: 'mallet.cs.umass.edu' },
			{ y: 18,  label: 'sourceforge.net' },
			{ y: 7,  label: 'lcl.uniroma1.it' },
			{ y: 6, label: 'www.ark.cs.cmu.edu'},
			{ y: 6, label:  'dumps.wikimedia.org' },
			{ y: 6, label: 'www.csie.ntu.edu.tw' },           
			{ y: 6,  label: 'dev.twitter.com' },
			{ y: 5,  label: 'homepages.inf.ed.ac.uk' },
			{ y: 14,  label: 'nist.gov' },
			{ y: 5, label: 'www.ukp.tu-darmstadt.de'},
			{ y: 5, label: 'disi.unitn.it' },
			{ y: 5,  label: 'nlp.ist.i.kyoto-u.ac.jp' },
			{ y: 5, label: 'takelab.fer.hr'  },
			{ y: 4,  label: 'ufal.mff.cuni.cz' },
			{ y: 10,  label: 'upenn.edu' }
			
			
		]
	}]
});
chart.render();










































var chart = new CanvasJS.Chart("chartContainer20130", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2013-0",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'nlp.stanford.edu' },

			
		]
	}]
});
chart.render();






















var chart = new CanvasJS.Chart("chartContainer20131", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2013-1",
		legendText: "",
		dataPoints: [      
			{ y: 1, label:  'http://code.google' },
			{ y: 1, label:  'translate.google.com' },
			{ y: 1, label:  'https://sites.google.com/site/sancl2012/home/shared-' },
			{ y: 1, label:  'https://support.google.com/adwords/' },
			{ y: 1, label:  'https://play.google.com/store' },
			{ y: 1, label:  'books.google.com' }
			
		]
	}]
});
chart.render();


























var chart = new CanvasJS.Chart("chartContainer20132", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2013-2",
		legendText: "",
		dataPoints: [
	
				{ y: 1, label:  'en.wikipedia.org' },
				{ y: 1, label:  'http://de.wikipedia.org/wiki/' },
				{ y: 1, label:  'http://zh.wikipedia.org/wiki/' },
				{ y: 1, label:  'http://www.wikipedia.org/' }
			
		]
	}]
});
chart.render();






















var chart = new CanvasJS.Chart("chartContainer20133", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2013-3",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'github.com' }
		]
	}]
});
chart.render();
























var chart = new CanvasJS.Chart("chartContainer20134", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2013-4",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:   'www.statmt.org' },
			{ y: 1, label:   'http://www.statmt.or/wmt12' }
		]
	}]
});
chart.render();

























var chart = new CanvasJS.Chart("chartContainer20135", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2013-5",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'mallet.cs.umass.edu' }
			
		]
	}]
});
chart.render();



























var chart = new CanvasJS.Chart("chartContainer20136", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2013-6",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'sourceforge.net' },
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
	}]
});
chart.render();



























var chart = new CanvasJS.Chart("chartContainer20137", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2013-7",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'lcl.uniroma1.it' }
			
		]
	}]
});
chart.render();
























var chart = new CanvasJS.Chart("chartContainer20138", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2013-8",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.ark.cs.cmu.edu' }
			
		]
	}]
});
chart.render();
























var chart = new CanvasJS.Chart("chartContainer20139", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2013-9",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'dumps.wikimedia.org' }
			
		]
	}]
});
chart.render();


























var chart = new CanvasJS.Chart("chartContainer201310", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2013-10",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'www.csie.ntu.edu.tw' }
			
		]
	}]
});
chart.render();


























var chart = new CanvasJS.Chart("chartContainer201311", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2013-11",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'dev.twitter.com' }
			
		]
	}]
});
chart.render();





























var chart = new CanvasJS.Chart("chartContainer201312", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2013-12",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'homepages.inf.ed.ac.uk' }
			
		]
	}]
});
chart.render();























var chart = new CanvasJS.Chart("chartContainer201313", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2013-13",
		legendText: "",
		dataPoints: [   
			{ y: 1, label:  'www.nist.gov' },
			{ y: 1, label:  'www.itl.nist.gov' },
			{ y: 1, label:  'trec.nist.gov' },
			{ y: 1, label:  'duc.nist.gov' }
			
			
		]
	}]
});
chart.render();






























var chart = new CanvasJS.Chart("chartContainer201314", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2013-14",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'http://www.ukp.tu-darmstadt' }
			
		]
	}]
});
chart.render();




























var chart = new CanvasJS.Chart("chartContainer201315", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2013-15",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'disi.unitn.it' }
			
		]
	}]
});
chart.render();






























var chart = new CanvasJS.Chart("chartContainer201316", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2013-16",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'nlp.ist.i.kyoto-u.ac.jp' }
			
		]
	}]
});
chart.render();




























var chart = new CanvasJS.Chart("chartContainer201317", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2013-17",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'takelab.fer.hr' }
			
		]
	}]
});
chart.render();




























var chart = new CanvasJS.Chart("chartContainer201318", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2013-18",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:  'ufal.mff.cuni.cz' }
			
		]
	}]
});
chart.render();






























var chart = new CanvasJS.Chart("chartContainer201319", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2013-19",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:   'www.ldc.upenn.edu' },
			{ y: 1, label:  'projects.ldc.upenn.edu' },
			{ y: 1, label:  'http://www.cis.upenn.edu/dbikel/software.html#comparator' },
			{ y: 1, label:  'http://www.ircs.upenn.edu/arabic/Jan03release/' },
			{ y: 1, label:  'http://www.seas.upenn.edu/strctlrn/BioTagger/BioTagger.html' }
			
		]
	}]
});
chart.render();




























































































var chart = new CanvasJS.Chart("chartContainer2014", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		click: onClick2,
		showInLegend: true, 
		legendMarkerColor: "grey",
		name: "2014",
		legendText: "",
		dataPoints: [                                         
			{ y: 52, label: 'google.com' },
			{ y: 31, label: 'github.com' },
			{ y: 33,  label: 'nlp.stanford.edu' },          
			{ y: 18,  label: 'wikipedia.org' },                 
			{ y: 16,  label: 'www.aclweb.org' },
			{ y: 12, label: 'www.cs.cmu.edu' },
			{ y: 9,  label: 'www.statmt.org' },
			{ y: 7,  label: 'sourceforge.net' },
			{ y: 7, label: 'www.ark.cs.cmu.edu' },
			{ y: 7, label:  'ufal.mff.cuni.cz' },
			{ y: 11, label: 'nist.gov' },           
			{ y: 5,  label: 'homepages.inf.ed' },
			{ y: 5,  label: 'clic.cimec.unitn.it' },       
			{ y: 5,  label: 'arxiv.org' },
			{ y: 13, label: 'upenn.edu'},
			{ y: 5, label: 'opennlp.apache.org' },
			{ y: 5,  label: 'mallet.cs.umass.edu' },
			{ y: 4, label: 'qwone.com'  },
			{ y: 4,  label: 'svmlight.joachims.org' },
			{ y: 4, label: 'www.mturk.com' }
			
			
			
			
			
		]
	}]
});
chart.render();

































var chart = new CanvasJS.Chart("chartContainer20140", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2014-0",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:   'code.google.com' },
			{ y: 1, label:   'https://plus.google.com/' },
			{ y: 1, label:   'developers.google.com' },
			{ y: 1, label:   'sites.google.com' },
			{ y: 1, label:   'books.google.com' },
			{ y: 1, label:   'translate.google.com' }
			
		]
	}]
});
chart.render();






































var chart = new CanvasJS.Chart("chartContainer20141", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2014-1",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:   'www.github.com' },
			{ y: 1, label:  'hltfbk.github.io' },
			{ y: 1, label:  'http://lex4all.github.io/lex4all/' }
		]
	}]
});
chart.render();
































var chart = new CanvasJS.Chart("chartContainer20142", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2014-2",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:   'nlp.stanford.edu' }
			
		]
	}]
});
chart.render();
































var chart = new CanvasJS.Chart("chartContainer20143", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2014-3",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:   'en.wikipedia.org' },
			{ y: 1, label:  'http://simple.wikipedia.org' },
			{ y: 1, label:  'http://www.wikipedia.org' }
			
		]
	}]
});
chart.render();
































var chart = new CanvasJS.Chart("chartContainer20144", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2014-4",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:   'aclweb.org' }
			
		]
	}]
});
chart.render();

































var chart = new CanvasJS.Chart("chartContainer20145", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2014-5",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:   'www.cs.cmu.edu' }
			
		]
	}]
});
chart.render();

































var chart = new CanvasJS.Chart("chartContainer20146", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2014-6",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:   'www.statmt.org' }
			
		]
	}]
});
chart.render();

































var chart = new CanvasJS.Chart("chartContainer20147", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2014-7",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:   'sourceforge.net' },
			{ y: 1, label:  'gibbslda.sourceforge.net' },
			{ y: 1, label:  'http://lpsolve.sourceforge.net/5.5/' },
			{ y: 1, label:  'http://chasen-legacy.sourceforge.jp/' },
			{ y: 1, label:  'http://mstparser.sourceforge.net' },
			{ y: 1, label:  'http://pmd.sourceforge.net' },
			{ y: 1, label:  'http://meka.sourceforge.net' },
			{ y: 1, label:  'http://libots.sourceforge.net/' }
			
		]
	}]
});
chart.render();
































var chart = new CanvasJS.Chart("chartContainer20148", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2014-8",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:   'http://www.ark.cs.cmu' }
			
		]
	}]
});
chart.render();






























var chart = new CanvasJS.Chart("chartContainer20149", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2014-9",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:   'ufal.mff.cuni.cz' }
			
		]
	}]
});
chart.render();





























var chart = new CanvasJS.Chart("chartContainer201410", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2014-10",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:   'www.nist.gov' },
			{ y: 1, label:  'www.itl.nist.gov' },
			{ y: 1, label:  'duc.nist.gov' },
			{ y: 1, label:  'www-nlpir.nist.gov' },
			{ y: 1, label:  'http://ww.itl.nist.gov/iad/mig/tools' }
			
			
		]
	}]
});
chart.render();






























var chart = new CanvasJS.Chart("chartContainer201411", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2014-11",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:   'http://homepages.inf.ed.ac' },
			{ y: 1, label:  'homepages.inf.ed.ac.uk' }
			
		]
	}]
});
chart.render();

































var chart = new CanvasJS.Chart("chartContainer201412", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2014-12",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:   'clic.cimec.unitn.it' }
			
		]
	}]
});
chart.render();































var chart = new CanvasJS.Chart("chartContainer201413", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2014-13",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:   'arxiv.org' }
			
		]
	}]
});
chart.render();





























var chart = new CanvasJS.Chart("chartContainer201414", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2014-14",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:   'www.cis.upenn.edu' },
			{ y: 1, label:  'www.ldc.upenn.edu' },
			{ y: 1, label:  'catalog.ldc.upenn.edu' },
			{ y: 1, label:  'http://www.ling.upenn.edu/' },
			{ y: 1, label:  'http://projects.ldc.upenn.edu/kbp/data' }
			
		]
	}]
});
chart.render();






























var chart = new CanvasJS.Chart("chartContainer201415", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2014-15",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:   'opennlp.apache.org' }
			
		]
	}]
});
chart.render();




























var chart = new CanvasJS.Chart("chartContainer201416", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2014-16",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:   'mallet.cs.umass.edu' }
			
		]
	}]
});
chart.render();





























var chart = new CanvasJS.Chart("chartContainer201417", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2014-17",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:   'qwone.com' }
			
		]
	}]
});
chart.render();

































var chart = new CanvasJS.Chart("chartContainer201418", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2014-18",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:   'svmlight.joachims.org' }
			
		]
	}]
});
chart.render();






























var chart = new CanvasJS.Chart("chartContainer201419", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "2014-19",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label:   'www.mturk.com' }
			
		]
	}]
});
chart.render();






























































var chart = new CanvasJS.Chart("chartContainer2015", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "ACL : 2015 URLs",
		legendText: "",
		dataPoints: [                                         
			{ y: 75, label: 'github.com' },
			{ y: 54, label: 'google.com' },
			{ y: 40,  label: 'nlp.stanford.edu' },              
			{ y: 30,  label: 'en.wikipedia.org' },                 
			{ y: 9,  label: 'research.microsoft.com' },
			{ y: 9, label: 'www.statmt.org' },
			{ y: 7,  label: 'scikit-learn.org' },
			{ y: 7,  label: 'sourceforge.net' },
			{ y: 6, label: 'upenn.edu' },
			{ y: 6, label:  'www.ark.cs.cmu.edu' },
			{ y: 6, label: 'bitbucket.org' },           
			{ y: 6,  label: 'umass.edu' },
			{ y: 6,  label: 'www.csie.ntu.edu.tw' },       
			{ y: 5,  label: 'arxiv.org' },
			{ y: 4, label: 'cogcomp.cs.illinois.edu'},
			{ y: 4, label: 'lucene.apache.org' },
			{ y: 4,  label: 'www.natcorp.ox.ac.uk' },
			{ y: 4, label: 'clic.cimec.unitn.it'  },
			{ y: 4,  label: 'mpqa.cs.pitt.edu' },
			{ y: 4, label: 'labs.priberam.com' }
			
			
			
			
			
		]
	}]
});
chart.render();













































var chart = new CanvasJS.Chart("chartContainer2016", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "ACL : 2016 URLs",
		legendText: "",
		dataPoints: [                                         
			{ y: 136, label: 'github.com' },    
			{ y: 92, label: 'google.com' },
			{ y: 20,  label: 'nlp.stanford.edu' },              
			{ y: 12,  label: 'upenn.edu' },                 
			{ y: 10,  label: 'www.statmt.org' },
			{ y: 10, label: 'bitbucket.org' },
			{ y: 10,  label: 'arxiv.org' },
			{ y: 13,  label: 'en.wikipedia.org' },
			{ y: 7, label: 'scikit-learn.org' },
			{ y: 7, label:  'www.cs.cmu.edu' },
			{ y: 6, label: 'cogcomp.cs.illinois.edu' },           
			{ y: 5,  label: 'ronan.collobert.com' },
			{ y: 5,  label: 'www.csie.ntu.edu.tw' },       
			{ y: 4,  label: 'www.ncbi.nlm.nih.gov'},
			{ y: 4, label: 'sourceforge.net'},
			{ y: 4, label: 'www.kaggle.com' },
			{ y: 4,  label: 'allenai.org' },
			{ y: 4, label: 'qwone.com'  },
			{ y: 4,  label: 'universaldependencies.org' },
			{ y: 4, label: 'www.ukp.tu-darmstadt.de' }
			
			
			
			
			
		]
	}]
});
chart.render();













































var chart = new CanvasJS.Chart("chartContainer2017", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "ACL : 2017 URLs",
		legendText: "",
		dataPoints: [                                         
			{ y: 1119, label: 'www.aclweb.org' },
			{ y: 209, label: 'arxiv.org' },
			{ y: 178,  label: 'github.com' },              
			{ y: 113,  label: 'dl.acm.org' },                 
			{ y: 34,  label: 'papers.nips.cc' },
			{ y: 24, label: 'google.com' },
			{ y: 19,  label: 'dx.doi.org' },
			{ y: 17,  label: 'nlp.stanford.edu' },
			{ y: 33, label: 'aclanthology.info' },
			{ y: 14, label:  'jmlr.org' },
			{ y: 12, label: 'upenn.edu' },           
			{ y: 11,  label: 'en.wikipedia.org' },
			{ y: 11,  label: 'www.ncbi.nlm.nih.gov' },       
			{ y: 10,  label: 'doi.acm.org'},
			{ y: 16, label: 'www.tensorflow.org' },
			{ y: 7, label: 'transacl.org' },
			{ y: 7,  label: 'www.statmt.org' },
			{ y: 7, label: 'www.nlm.nih.gov'  },
			{ y: 6,  label: 'www.cs.jhu.edu' },
			{ y: 6, label: 'hdl.handle.net' }
			
			
			
			
			
		]
	}]
});
chart.render();






































var chart = new CanvasJS.Chart("chartContainer2018", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "ACL : 2018 URLs",
		legendText: "",
		dataPoints: [                                         
			{ y: 317, label: 'github.com' },
			{ y: 408, label: 'www.aclweb.org' },
			{ y: 152,  label: 'arxiv.org' },              
			{ y: 34,  label: 'dl.acm.org' },                 
			{ y: 29,  label: 'nlp.stanford.edu' },
			{ y: 18, label: 'papers.nips.cc' },
			{ y: 21,  label: 'en.wikipedia.org' },
			{ y: 10,  label: 'upenn.edu' },
			{ y: 10, label: 'openreview.net' },
			{ y: 10, label:  'google.com' },
			{ y: 9, label: 'www.statmt.org' },           
			{ y: 9,  label: 'spacy.io' },
			{ y: 8,  label: 'homes.cs.washington.edu' },       
			{ y: 8,  label: 'www.tensorflow.org'},
			{ y: 8, label: 'dx.doi.org' },
			{ y: 7, label: 'transacl.org' },
			{ y: 7,  label: 'lucene.apache.org' },
			{ y: 7, label: 'bitbucket.org'  },
			{ y: 6,  label: 'saifmohammad.com' },
			{ y: 6, label: 'cogcomp.org' },
			{ y: 6, label: 'nltk.org' }
			
			
			
			
			
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


function onClick(e) {
		var dt= e.dataPoint.x.getFullYear();
		//alert(  e.dataSeries.type + ", dataPoint { x:" + dt + ", y: "+ e.dataPoint.y + " }" );
		var str1= "chartContainer";
		var res = str1.concat(dt);
		var x = document.getElementById(res);
		if (x.style.display === "none") {
			//	x.style.position = 'static';
				//x.style.visibility = "visible";
				var i;
				for(i=1996;i<2019;i++)
				{
					var str = "chartContainer";
					var res1 = str.concat(i);
					for(j=0;j<20;j++)
					{
						var res2=res1.concat(j);
						try{
						var x5 = document.getElementById(res2);
						x5.style.display = "none";
						}
						catch(err){
							continue;
						}
					}
					var x1 = document.getElementById(res1);
					x1.style.display='none';
				}
				x.style.display = "block";
				} else {
				x.style.display = "none";
				}
		
	}
	
function onClick2(e) {
		
		var dt =  e.dataSeries.name;
		//alert(  e.dataSeries.type + ", dataPoint { x:" + dt + ", y: "+ e.dataPoint.x + " }" ) ;
		var x1 = e.dataPoint.x;
		y1 = 'chartContainer';
		var res1 = dt.concat(x1);
		var res2 = y1.concat(res1);
		var x2 = document.getElementById(res2);
		//alert(res1);
		//alert(x2);
		for(i=0;i<21;i++)
		{
			var x3= dt.concat(i);
			var res3 = y1.concat(x3);
			try{
			var x4 = document.getElementById(res3);
			x4.style.display = "none";
			}
			catch(err){
				continue;
			}
			
		}
		
		if(x2.style.display == 'none')
		{
			x2.style.display = "block";
		}
		else
		{
			x2.style.display = "none";
		}
				
		


}


}









