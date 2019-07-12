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
		showInLegend: true, 
		legendMarkerColor: "grey",
		name: "ACL : 1997 URLs",
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
		legendMarkerColor: "grey",
		name: "ACL : 1998 URLs",
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
		legendMarkerColor: "grey",
		name: "ACL : 1999 URLs",
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
		legendMarkerColor: "grey",
		name: "ACL : 2000 URLs",
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
		legendMarkerColor: "grey",
		name: "ACL : 2001 URLs",
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
		showInLegend: true, 
		legendMarkerColor: "grey",
		name: "ACL : 2002 URLs",
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
		showInLegend: true, 
		legendMarkerColor: "grey",
		name: "ACL : 2003 URLs",
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
		showInLegend: true, 
		legendMarkerColor: "grey",
		name: "ACL : 2004 URLs",
		legendText: "",
		dataPoints: [                                         
			{ y: 5, label: 'www.nist.gov' },         
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
			{ y: 2,  label: 'trec.nist.gov' },
			{ y: 2,  label: 'lingo.stanford.edu' },
			{ y: 2, label: 'nlp.cs.nyu.edu' },
			{ y: 2,  label: 'www.cis.upenn.edu' },
			{ y: 2, label: 'davidmlane.com' },
			{ y: 2, label: 'lists.sourceforge.net' },
			{ y: 1,  label: 'roa.rutgers.edu' },
			{ y: 1, label: 'openccg.sourceforge.net' }
			
			
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
		legendMarkerColor: "grey",
		name: "ACL : 2005 URLs",
		legendText: "",
		dataPoints: [                                         
			{ y: 6, label: 'www.nist.gov' },        
			{ y: 4, label: 'chasen.org' },
			{ y: 4,  label: 'www.clres.com' },          
			{ y: 3,  label: 'cnts.uia.ac.be' },
			{ y: 3,  label: 'www.d.umn.edu' },
			{ y: 3, label: 'www.fjoch.com' },
			{ y: 3,  label: 'www.ldc.upenn.edu' },
			{ y: 3,  label: 'search.cpan.org' },
			{ y: 2, label: 'mallet.cs.umass.edu' },
			{ y: 2, label:  'www.cs.cornell.edu' },
			{ y: 2, label: 'www.itl.nist.gov' },           
			{ y: 2,  label: 'www.cis.upenn.edu' },
			{ y: 2,  label: 'www.ims.uni-stuttgart.de' },
			{ y: 2,  label: 'www.csie.ntu.edu.tw' },
			{ y: 2, label: 'svmlight.joachims.org' },
			{ y: 2,  label: 'nces.ed.gov' },
			{ y: 2, label: 'sourceforge.net' },
			{ y: 2, label: 'trec.nist.gov' },
			{ y: 2,  label: 'biocreative.ifsm.umbc.edu' },
			{ y: 2, label: 'www.ncbi.nlm.nih.gov'  }
			
			
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
		legendMarkerColor: "grey",
		name: "ACL : 2006 URLs",
		legendText: "",
		dataPoints: [                                         
			{ y: 9, label: 'nlp.cs.nyu.edu' },
			{ y: 5, label: 'trec.nist.gov' },
			{ y: 5,  label: 'chasen.org' },          
			{ y: 2,  label: 'chasen.aist-nara.ac.jp' },
			{ y: 4,  label: 'www.isi.edu' },
			{ y: 13, label: 'upenn.edu' },
			{ y: 3,  label:  'www-tsujii.is.s.u-tokyo.ac.jp'},
			{ y: 3,  label: 'www.chasen.org' },
			{ y: 3, label: 'www.pascal-network.org' },
			{ y: 2, label:  'www.cs.ualberta.ca' },
			{ y: 2, label: 'www.ims.uni-stuttgart.de' },           
			{ y: 2,  label: 'www.cis.upenn.edu' },
			{ y: 2,  label: 'www.ims.uni-stuttgart.de' },
			{ y: 2,  label: 'www.csie.ntu.edu.tw' },
			{ y: 2, label: 'www.keenage.com' },
			{ y: 2,  label: 'www-nlpir.nist.gov' },
			{ y: 2, label: 'www.natcorp.ox.ac.uk' },
			{ y: 2, label: 'homepages.inf.ed.ac.uk' },
			{ y: 2,  label: 'chasen.naist.jp' },
			{ y: 2, label: 'mila.cs.technion.ac.il'  }
			
			
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
		legendMarkerColor: "grey",
		name: "ACL : 2007 URLs",
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
		legendMarkerColor: "grey",
		name: "ACL : 2008 URLs",
		legendText: "",
		dataPoints: [                                         
			{ y: 7, label: 'www.statmt.org' },                    
			{ y: 6, label: 'nlp.stanford.edu' },
			{ y: 4,  label: 'chasen.org' },          
			{ y: 5,  label: 'www.cl.cam.ac.uk' },
			{ y: 4,  label: 'www.cs.cmu.edu' },
			{ y: 4, label: 'opennlp.sourceforge.net' },
			{ y: 4,  label: 'sourceforge.net'},
			{ y: 4,  label: 'homepages.inf.ed.ac.uk' },
			{ y: 13, label: 'www.nist.gov' },
			{ y: 7, label:  'upenn.edu' },
			{ y: 3, label: 'www.w3.org' },           
			{ y: 3,  label: 'wordnet.princeton.edu' },
			{ y: 3,  label: 'hal3.name' },
			{ y: 3,  label: 'pub.hal3.name' },
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
		legendMarkerColor: "grey",
		name: "ACL : 2009 URLs",
		legendText: "",
		dataPoints: [                                         
			{ y: 9, label: 'nlp.stanford.edu' },          
			{ y: 8, label: 'www.statmt.org' },
			{ y: 13,  label: 'www.nist.gov' },          
			{ y: 6,  label: 'upenn.edu' },
			{ y: 6,  label: 'en.wikipedia.org' },
			{ y: 5, label: 'code.google.com' },
			{ y: 4,  label: 'www.cs.ualberta.ca' },
			{ y: 4,  label: 'opennlp.sourceforge.net' },
			{ y: 4, label: 'svmlight.joachims.org' },
			{ y: 4, label:  'lucene.apache.org' },
			{ y: 3, label: 'verbs.colorado.edu' },           
			{ y: 3,  label: 'ir.hit.edu.cn' },
			{ y: 3,  label: 'nlp.kuee.kyoto-u.ac.jp' },
			{ y: 3,  label: 'www.cs.pitt.edu' },
			{ y: 3, label: 'www.cs.cornell.edu' },
			{ y: 3,  label: 'sourceforge.net' },
			{ y: 3, label: 'www.cnts.ua.ac.be' },
			{ y: 3, label: 'www.speech.sri.com' },
			{ y: 3,  label: 'mallet.cs.umass.edu' },
			{ y: 3, label: 'edits.fbk.eu'  }
			
			
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
		legendMarkerColor: "grey",
		name: "ACL : 2010 URLs",
		legendText: "",
		dataPoints: [                                         
			{ y: 14, label: 'www.nist.gov' },
			{ y: 10, label: 'nlp.stanford.edu' },
			{ y: 8,  label: 'mallet.cs.umass.edu' },          
			{ y: 7,  label: 'www.csie.ntu.edu.tw' },
			{ y: 7,  label: 'opennlp.sourceforge.net' },
			{ y: 6, label: 'www.cs.chalmers.se' },
			{ y: 5,  label: 'homepages.inf.ed.ac.uk' },
			{ y: 9,  label: 'upenn.edu' },
			{ y: 5, label: 'translate.google.com' },
			{ y: 5, label:  'www.isi.edu' },
			{ y: 5, label: 'code.google.com' },           
			{ y: 8,  label: 'www.anc.org' },
			{ y: 4,  label: 'www.cs.washington.edu' },
			{ y: 4,  label: 'www.amazon.com' },
			{ y: 4, label: 'svmlight.joachims.org' },
			{ y: 4,  label: 'www.cs.pitt.edu' },
			{ y: 4, label: 'wordnet.princeton.edu' },
			{ y: 3, label: 'www.sil.org' },
			{ y: 3,  label: 'hdl.handle.net' },
			{ y: 3, label: 'lcl.uniroma1.it'  }
			
			
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
		legendMarkerColor: "grey",
		name: "ACL : 2011 URLs",
		legendText: "",
		dataPoints: [                                         
			{ y: 23, label: 'en.wikipedia.org' },
			{ y: 19, label: 'google.com' },
			{ y: 11,  label: 'www.statmt.org' },          
			{ y: 10,  label: 'nlp.stanford.edu' },
			{ y: 16,  label: 'sourceforge.net' },
			{ y: 7, label: 'mallet.cs.umass.edu' },
			{ y: 6,  label: 'www.csie.ntu.edu.tw' },
			{ y: 6,  label: 'github.com' },
			{ y: 5, label: 'www.cs.cmu.edu' },
			{ y: 5, label:  'svmlight.joachims.org' },
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
		showInLegend: true, 
		legendMarkerColor: "grey",
		name: "ACL : 2012 URLs",
		legendText: "",
		dataPoints: [                                         
			{ y: 27, label: 'google.com' },
			{ y: 12, label: 'nlp.stanford.edu' },
			{ y: 10,  label: 'www.aclweb.org' },          
			{ y: 6,  label: 'github.com' },
			{ y: 6,  label: 'statmt.org' },
			{ y: 6, label: 'mallet.cs.umass.edu' },
			{ y: 9,  label: 'en.wikipedia.org' },
			{ y: 4,  label: 'lucene.apache.org' },
			{ y: 4, label: 'crfpp.sourceforge.net'},
			{ y: 4, label:  'nist.gov' },
			{ y: 4, label: 'groups.csail.mit.edu' },           
			{ y: 3,  label: 'upenn.edu' },
			{ y: 3,  label: 'disi.unitn.it' },
			{ y: 3,  label: 'lemurproject.org' },
			{ y: 3, label: 'homepages.inf.ed.ac.uk'},
			{ y: 3,  label: 'www.mturk.com' },
			{ y: 3, label: 'www.speech.cs.cmu.edu'},
			{ y: 3, label: 'www.csie.ntu.edu.tw' },
			{ y: 3,  label: 'www.accurat-project.eu' },
			{ y: 2, label: 'www.itl.nist.gov'  }
			
			
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
		legendMarkerColor: "grey",
		name: "ACL : 2013 URLs",
		legendText: "",
		dataPoints: [                                         
			{ y: 29, label: 'nlp.stanford.edu' },
			{ y: 26, label: 'google.com' },
			{ y: 24,  label: 'en.wikipedia.org' },          
			{ y: 20,  label: 'github.com' },
			{ y: 12,  label: 'www.statmt.org' },
			{ y: 11, label: 'mallet.cs.umass.edu' },
			{ y: 7,  label: 'sourceforge.net' },
			{ y: 7,  label: 'lcl.uniroma1.it' },
			{ y: 6, label: 'www.ark.cs.cmu.edu'},
			{ y: 6, label:  'dumps.wikimedia.org' },
			{ y: 6, label: 'www.csie.ntu.edu.tw' },           
			{ y: 6,  label: 'dev.twitter.com' },
			{ y: 5,  label: 'homepages.inf.ed.ac.uk' },
			{ y: 5,  label: 'trec.nist.gov' },
			{ y: 5, label: 'www.ukp.tu-darmstadt.de'},
			{ y: 5, label: 'disi.unitn.it' },
			{ y: 5,  label: 'nlp.ist.i.kyoto-u.ac.jp' },
			{ y: 5, label: 'takelab.fer.hr'  },
			{ y: 4,  label: 'ufal.mff.cuni.cz' },
			{ y: 4,  label: 'www.ldc.upenn.edu' }
			
			
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
		showInLegend: true, 
		legendMarkerColor: "grey",
		name: "ACL : 2014 URLs",
		legendText: "",
		dataPoints: [                                         
			{ y: 52, label: 'google.com' },
			{ y: 31, label: 'github.com' },
			{ y: 33,  label: 'nlp.stanford.edu' },          
			{ y: 18,  label: 'en.wikipedia.org' },                 
			{ y: 16,  label: 'www.aclweb.org' },
			{ y: 12, label: 'www.cs.cmu.edu' },
			{ y: 9,  label: 'www.statmt.org' },
			{ y: 7,  label: 'sourceforge.net' },
			{ y: 7, label: 'www.ark.cs.cmu.edu' },
			{ y: 7, label:  'ufal.mff.cuni.cz' },
			{ y: 11, label: 'nist.gov' },           
			{ y: 5,  label: 'homepages.inf.ed.ac.uk' },
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
		alert(  e.dataSeries.type + ", dataPoint { x:" + dt + ", y: "+ e.dataPoint.y + " }" );
		var str1= "chartContainer";
		var res = str1.concat(dt);
		var x = document.getElementById(res);
		if (x.style.display === "none") {
			//	x.style.position = 'static';
				//x.style.visibility = "visible";
				var i;
				for(i=1997;i<2019;i++)
				{
					var str = "chartContainer";
					var res1 = str.concat(i);
					var x1 = document.getElementById(res1);
					x1.style.display='none';
				}
				x.style.display = "block"
				} else {
				x.style.display = "none";
				}
		
	}









}












