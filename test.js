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
		color: "#02f70a",
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
		color: "#07fa24",
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
		color: "#07fa24",
		name: "Old Authors",
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

}












