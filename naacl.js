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
				{ y: 46, x: new Date(2000,0) },
				{ y: 31, x: new Date(2001,0) },
				{ y: 37, x: new Date(2003,0) },            
				{ y: 43, x: new Date(2004,0) },
				{ y: 62, x: new Date(2006,0) },
				{ y: 72, x: new Date(2007,0) },
				{ y: 75, x: new Date(2009,0) },
				{ y: 146, x: new Date(2010,0) },
				{ y: 97, x: new Date(2012,0) },
				{ y: 140, x: new Date(2013,0) },
				{ y: 186, x: new Date(2015,0) },
				{ y: 181, x: new Date(2016,0) },
				{ y: 205, x: new Date(2018,0) }
		]
		},
		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Short Papers",
			color: "#e3f702",
			dataPoints: [
				{ y: 43, x: new Date(2000,0) },
				{ y: 0, x: new Date(2001,0) },
				{ y: 38, x: new Date(2003,0) },                       
				{ y: 0, x: new Date(2004,0) },
				{ y: 51, x: new Date(2006,0) },
				{ y: 55, x: new Date(2007,0) },
				{ y: 72, x: new Date(2009,0) },
				{ y: 0, x: new Date(2010,0) },
				{ y: 0, x: new Date(2012,0) },
				{ y: 0, x: new Date(2013,0) },
				{ y: 0, x: new Date(2015,0) },
				{ y: 0, x: new Date(2016,0) },
				{ y: 125, x: new Date(2018,0) }
			]
		},

		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Demo Paper",
			color: "#f70202",
			dataPoints: [
				{ y: 0, x: new Date(2000,0) },
				{ y: 0, x: new Date(2001,0) },
				{ y: 18, x: new Date(2003,0) },
				{ y: 13, x: new Date(2004,0) },                      
				{ y: 12, x: new Date(2006,0) },
				{ y: 0, x: new Date(2007,0) },
				{ y: 6, x: new Date(2009,0) },
				{ y: 13, x: new Date(2010,0) },
				{ y: 10, x: new Date(2012,0) },
				{ y: 10, x: new Date(2013,0) },
				{ y: 25, x: new Date(2015,0) },
				{ y: 21, x: new Date(2016,0) },
				{ y: 21, x: new Date(2018,0) }
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
		content: toolTipContent
	},
	data: [{
		type: "stackedColumn",
		showInLegend: true,
		color: "#0303AC",
		name: "Old Authors",    
		dataPoints: [
				{ y: 0, x: new Date(2000,0) },
				{ y: 0.245, x: new Date(2001,0) },
				{ y: 0.12, x: new Date(2003,0) },            
				{ y: 0.211, x: new Date(2004,0) },
				{ y: 0.189, x: new Date(2006,0) },
				{ y: 0.314, x: new Date(2007,0) },
				{ y: 0.242, x: new Date(2009,0) },
				{ y: 0.349, x: new Date(2010,0) },
				{ y: 0.4, x: new Date(2012,0) },
				{ y: 0.407, x: new Date(2013,0) },
				{ y: 0.293, x: new Date(2015,0) },
				{ y: 0.345, x: new Date(2016,0) },
				{ y: 0.272, x: new Date(2018,0) }
		]
		},
		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "New Authors",
			color: "#e3f702",
			dataPoints: [
				{ y: 1.0, x: new Date(2000,0) },
				{ y: 0.754, x: new Date(2001,0) },     
				{ y: 0.877, x: new Date(2003,0) },                       
				{ y: 0.788, x: new Date(2004,0) },
				{ y: 0.810, x: new Date(2006,0) },
				{ y: 0.685, x: new Date(2007,0) },
				{ y: 0.757, x: new Date(2009,0) },
				{ y: 0.650, x: new Date(2010,0) },
				{ y: 0.6, x: new Date(2012,0) },
				{ y: 0.592, x: new Date(2013,0) },
				{ y: 0.706, x: new Date(2015,0) },
				{ y: 0.654, x: new Date(2016,0) },
				{ y: 0.727, x: new Date(2018,0) }
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

}