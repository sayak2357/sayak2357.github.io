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
		name: "ROCLING-IJCLCLP: Long Papers",
		dataPoints: [
		
		
				{ y: 8, x: new Date(1988,0) },
			{ y: 11, x: new Date(1989,0) },
			{ y: 13, x: new Date(1990,0) },
			{ y: 11, x: new Date(1991,0) },
			{ y: 8, x: new Date(1992,0) },
			{ y: 10, x: new Date(1993,0) },
			{ y: 10, x: new Date(1994,0) },
			{ y: 10, x: new Date(1995,0) },
			{ y: 12, x: new Date(1996,0) },
			{ y: 26, x: new Date(1997,0) },
			{ y: 11, x: new Date(1998,0) },
			{ y: 11, x: new Date(1999,0) },
			{ y: 11, x: new Date(2000,0) },
			{ y: 14, x: new Date(2001,0) },
			{ y: 4, x: new Date(2002,0) },
			{ y: 15, x: new Date(2003,0) },
			{ y: 25, x: new Date(2004,0) },
			{ y: 28, x: new Date(2005,0) },
			{ y: 23, x: new Date(2006,0) },
			{ y: 18, x: new Date(2007,0) },
			{ y: 16, x: new Date(2008,0) },
			{ y: 20, x: new Date(2009,0) },
			{ y: 17, x: new Date(2010,0) },
			{ y: 12, x: new Date(2011,0) },
			{ y: 22, x: new Date(2012,0) },
			{ y: 20, x: new Date(2013,0) },
			{ y: 16, x: new Date(2014,0) },
			{ y: 21, x: new Date(2015,0) },
			{ y: 22, x: new Date(2016,0) },
			{ y: 20, x: new Date(2017,0) },
			{ y: 21, x: new Date(2018,0) }
				
				
		]
		},
		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Short Papers",
			color: "#e3f702",
			dataPoints: [
			
			
			
				{ y: 1, x: new Date(1988,0) },
				{ y: 0, x: new Date(1989,0) },
				{ y: 0, x: new Date(1990,0) },
				{ y: 0, x: new Date(1991,0) },
				{ y: 0, x: new Date(1992,0) },
				{ y: 4, x: new Date(1993,0) },
				{ y: 7, x: new Date(1994,0) },
				{ y: 7, x: new Date(1995,0) },
				{ y: 8, x: new Date(1996,0) },
				{ y: 2, x: new Date(1997,0) },
				{ y: 17, x: new Date(1998,0) },
				{ y: 14, x: new Date(1999,0) },
				{ y: 12, x: new Date(2000,0) },
				{ y: 12, x: new Date(2001,0) },
				{ y: 7, x: new Date(2002,0) },
				{ y: 13, x: new Date(2003,0) },
				{ y: 3, x: new Date(2004,0) },
				{ y: 0, x: new Date(2005,0) },
				{ y: 5, x: new Date(2006,0) },
				{ y: 10, x: new Date(2007,0) },
				{ y: 12, x: new Date(2008,0) },
				{ y: 8, x: new Date(2009,0) },
				{ y: 11, x: new Date(2010,0) },
				{ y: 16, x: new Date(2011,0) },
				{ y: 6, x: new Date(2012,0) },
				{ y: 8, x: new Date(2013,0) },
				{ y: 12, x: new Date(2014,0) },
				{ y: 7, x: new Date(2015,0) },
				{ y: 6, x: new Date(2016,0) },
				{ y: 8, x: new Date(2017,0) },
				{ y: 6, x: new Date(2018,0) }
			]
		},

		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Demo Paper",
			color: "#f70202",
			dataPoints: [
			
			
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
		name: "ROCLING-IJCLCLP: Old Authors",
		dataPoints: [
		
		
				{ y: 0.0, x: new Date(1988,0) },
				{ y: 0.4090909090909091, x: new Date(1989,0) },
				{ y: 0.3076923076923077, x: new Date(1990,0) },
				{ y: 0.2, x: new Date(1991,0) },
				{ y: 0.55, x: new Date(1992,0) },
				{ y: 0.3333333333333333, x: new Date(1993,0) },
				{ y: 0.2777777777777778, x: new Date(1994,0) },
				{ y: 0.14705882352941177, x: new Date(1995,0) },
				{ y: 0.3617021276595745, x: new Date(1996,0) },
				{ y: 0.21875, x: new Date(1997,0) },
				{ y: 0.5535714285714286, x: new Date(1998,0) },
				{ y: 0.2641509433962264, x: new Date(1999,0) },
				{ y: 0.4146341463414634, x: new Date(2000,0) },
				{ y: 0.2692307692307692, x: new Date(2001,0) },
				{ y: 0.13043478260869565, x: new Date(2002,0) },
				{ y: 0.3617021276595745, x: new Date(2003,0) },
				{ y: 0.3, x: new Date(2004,0) },
				{ y: 0.3373493975903614, x: new Date(2005,0) },
				{ y: 0.4, x: new Date(2006,0) },
				{ y: 0.3235294117647059, x: new Date(2007,0) },
				{ y: 0.3442622950819672, x: new Date(2008,0) },
				{ y: 0.3188405797101449, x: new Date(2009,0) },
				{ y: 0.3373493975903614, x: new Date(2010,0) },
				{ y: 0.3375, x: new Date(2011,0) },
				{ y: 0.3258426966292135, x: new Date(2012,0) },
				{ y: 0.39080459770114945, x: new Date(2013,0) },
				{ y: 0.36619718309859156, x: new Date(2014,0) },
				{ y: 0.30952380952380953, x: new Date(2015,0) },
				{ y: 0.35802469135802467, x: new Date(2016,0) },
				{ y: 0.36363636363636365, x: new Date(2017,0) },
				{ y: 0.28378378378378377, x: new Date(2018,0) }
				
				
		]
		},
		
		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "New Authors",
			color: "#f70202",
			dataPoints: [
			
			
			
				{ y: 1.0, x: new Date(1988,0) },
				{ y: 0.5909090909090909, x: new Date(1989,0) },
				{ y: 0.6923076923076923, x: new Date(1990,0) },
				{ y: 0.8, x: new Date(1991,0) },
				{ y: 0.45, x: new Date(1992,0) },
				{ y: 0.6666666666666666, x: new Date(1993,0) },
				{ y: 0.7222222222222222, x: new Date(1994,0) },
				{ y: 0.8529411764705882, x: new Date(1995,0) },
				{ y: 0.6382978723404256, x: new Date(1996,0) },
				{ y: 0.78125, x: new Date(1997,0) },
				{ y: 0.44642857142857145, x: new Date(1998,0) },
				{ y: 0.7358490566037735, x: new Date(1999,0) },
				{ y: 0.5853658536585366, x: new Date(2000,0) },
				{ y: 0.7307692307692307, x: new Date(2001,0) },
				{ y: 0.8695652173913043, x: new Date(2002,0) },
				{ y: 0.6382978723404256, x: new Date(2003,0) },
				{ y: 0.7, x: new Date(2004,0) },
				{ y: 0.6626506024096386, x: new Date(2005,0) },
				{ y: 0.6, x: new Date(2006,0) },
				{ y: 0.6764705882352942, x: new Date(2007,0) },
				{ y: 0.6557377049180327, x: new Date(2008,0) },
				{ y: 0.6811594202898551, x: new Date(2009,0) },
				{ y: 0.6626506024096386, x: new Date(2010,0) },
				{ y: 0.6625, x: new Date(2011,0) },
				{ y: 0.6741573033707865, x: new Date(2012,0) },
				{ y: 0.6091954022988506, x: new Date(2013,0) },
				{ y: 0.6338028169014085, x: new Date(2014,0) },
				{ y: 0.6904761904761905, x: new Date(2015,0) },
				{ y: 0.6419753086419753, x: new Date(2016,0) },
				{ y: 0.6363636363636364, x: new Date(2017,0) },
				{ y: 0.7162162162162162, x: new Date(2018,0) }
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
		name: "ROCLING-IJCLCLP: Avg. number of Papers per Author",
		dataPoints: [
			
			
			
			{ y:0.47368421052631576, x: new Date(1988,0) },
			{ y:0.44, x: new Date(1989,0) },
			{ y:0.43333333333333335, x: new Date(1990,0) },
			{ y:0.34375, x: new Date(1991,0) },
			{ y:0.3333333333333333, x: new Date(1992,0) },
			{ y:0.3888888888888889, x: new Date(1993,0) },
			{ y:0.4146341463414634, x: new Date(1994,0) },
			{ y:0.4594594594594595, x: new Date(1995,0) },
			{ y:0.37037037037037035, x: new Date(1996,0) },
			{ y:0.3783783783783784, x: new Date(1997,0) },
			{ y:0.4117647058823529, x: new Date(1998,0) },
			{ y:0.44642857142857145, x: new Date(1999,0) },
			{ y:0.41818181818181815, x: new Date(2000,0) },
			{ y:0.40625, x: new Date(2001,0) },
			{ y:0.4583333333333333, x: new Date(2002,0) },
			{ y:0.4666666666666667, x: new Date(2003,0) },
			{ y:0.3684210526315789, x: new Date(2004,0) },
			{ y:0.3218390804597701, x: new Date(2005,0) },
			{ y:0.3888888888888889, x: new Date(2006,0) },
			{ y:0.36363636363636365, x: new Date(2007,0) },
			{ y:0.3684210526315789, x: new Date(2008,0) },
			{ y:0.34146341463414637, x: new Date(2009,0) },
			{ y:0.3181818181818182, x: new Date(2010,0) },
			{ y:0.32941176470588235, x: new Date(2011,0) },
			{ y:0.2828282828282828, x: new Date(2012,0) },
			{ y:0.3010752688172043, x: new Date(2013,0) },
			{ y:0.36363636363636365, x: new Date(2014,0) },
			{ y:0.28, x: new Date(2015,0) },
			{ y:0.2828282828282828, x: new Date(2016,0) },
			{ y:0.2978723404255319, x: new Date(2017,0) },
			{ y:0.313953488372093, x: new Date(2018,0) }
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
		name: "ROCLING-IJCLCLP: Avg. number of Authors per Paper per Year",
		dataPoints: [
			
			
			
			{ y:2.111111111111111, x: new Date(1988,0) },
			{ y:2.272727272727273, x: new Date(1989,0) },
			{ y:2.3076923076923075, x: new Date(1990,0) },
			{ y:2.909090909090909, x: new Date(1991,0) },
			{ y:3.0, x: new Date(1992,0) },
			{ y:2.5714285714285716, x: new Date(1993,0) },
			{ y:2.411764705882353, x: new Date(1994,0) },
			{ y:2.176470588235294, x: new Date(1995,0) },
			{ y:2.7, x: new Date(1996,0) },
			{ y:2.642857142857143, x: new Date(1997,0) },
			{ y:2.4285714285714284, x: new Date(1998,0) },
			{ y:2.24, x: new Date(1999,0) },
			{ y:2.391304347826087, x: new Date(2000,0) },
			{ y:2.4615384615384617, x: new Date(2001,0) },
			{ y:2.1818181818181817, x: new Date(2002,0) },
			{ y:2.142857142857143, x: new Date(2003,0) },
			{ y:2.7142857142857144, x: new Date(2004,0) },
			{ y:3.107142857142857, x: new Date(2005,0) },
			{ y:2.5714285714285716, x: new Date(2006,0) },
			{ y:2.75, x: new Date(2007,0) },
			{ y:2.7142857142857144, x: new Date(2008,0) },
			{ y:2.9285714285714284, x: new Date(2009,0) },
			{ y:3.142857142857143, x: new Date(2010,0) },
			{ y:3.0357142857142856, x: new Date(2011,0) },
			{ y:3.5357142857142856, x: new Date(2012,0) },
			{ y:3.3214285714285716, x: new Date(2013,0) },
			{ y:2.75, x: new Date(2014,0) },
			{ y:3.5714285714285716, x: new Date(2015,0) },
			{ y:3.5357142857142856, x: new Date(2016,0) },
			{ y:3.357142857142857, x: new Date(2017,0) },
			{ y:3.185185185185185, x: new Date(2018,0) }
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
		name: "ROCLING-IJCLCLP: Long Papers",
		dataPoints: [
			
			
			
			{ y:0, x: new Date(1988,0) },
			{ y:0, x: new Date(1989,0) },
			{ y:0, x: new Date(1990,0) },
			{ y:0, x: new Date(1991,0) },
			{ y:0, x: new Date(1992,0) },
			{ y:0, x: new Date(1993,0) },
			{ y:0, x: new Date(1994,0) },
			{ y:0, x: new Date(1995,0) },
			{ y:0, x: new Date(1996,0) },
			{ y:0, x: new Date(1997,0) },
			{ y:0, x: new Date(1998,0) },
			{ y:0, x: new Date(1999,0) },
			{ y:6.181818181818182, x: new Date(2000,0) },
			{ y:3.7857142857142856, x: new Date(2001,0) },
			{ y:0.0, x: new Date(2002,0) },
			{ y:6.4, x: new Date(2003,0) },
			{ y:4.68, x: new Date(2004,0) },
			{ y:3.7857142857142856, x: new Date(2005,0) },
			{ y:1.9565217391304348, x: new Date(2006,0) },
			{ y:2.2222222222222223, x: new Date(2007,0) },
			{ y:5.375, x: new Date(2008,0) },
			{ y:5.8, x: new Date(2009,0) },
			{ y:3.411764705882353, x: new Date(2010,0) },
			{ y:3.5833333333333335, x: new Date(2011,0) },
			{ y:6.090909090909091, x: new Date(2012,0) },
			{ y:1.8, x: new Date(2013,0) },
			{ y:3.875, x: new Date(2014,0) },
			{ y:2.0952380952380953, x: new Date(2015,0) },
			{ y:4.590909090909091, x: new Date(2016,0) },
			{ y:3.65, x: new Date(2017,0) },
			{ y:6.190476190476191, x: new Date(2018,0) }
		]
		},


		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Short Papers",
			color: "#C00C0C",
			dataPoints: [
			
			
			
			
			
			{ y:0, x: new Date(1988,0) },
			{ y:0, x: new Date(1989,0) },
			{ y:0, x: new Date(1990,0) },
			{ y:0, x: new Date(1991,0) },
			{ y:0, x: new Date(1992,0) },
			{ y:0, x: new Date(1993,0) },
			{ y:0, x: new Date(1994,0) },
			{ y:0, x: new Date(1995,0) },
			{ y:0, x: new Date(1996,0) },
			{ y:0, x: new Date(1997,0) },
			{ y:0, x: new Date(1998,0) },
			{ y:0, x: new Date(1999,0) },
			{ y:0.5, x: new Date(2000,0) },
			{ y:0.0, x: new Date(2001,0) },
			{ y:0.0, x: new Date(2002,0) },
			{ y:0.0, x: new Date(2003,0) },
			{ y:10.666666666666666, x: new Date(2004,0) },
			{ y:0, x: new Date(2005,0) },
			{ y:16.0, x: new Date(2006,0) },
			{ y:0.0, x: new Date(2007,0) },
			{ y:0.5, x: new Date(2008,0) },
			{ y:0.0, x: new Date(2009,0) },
			{ y:0.0, x: new Date(2010,0) },
			{ y:3.0, x: new Date(2011,0) },
			{ y:4.666666666666667, x: new Date(2012,0) },
			{ y:1.625, x: new Date(2013,0) },
			{ y:0.0, x: new Date(2014,0) },
			{ y:1.5714285714285714, x: new Date(2015,0) },
			{ y:2.1666666666666665, x: new Date(2016,0) },
			{ y:2.75, x: new Date(2017,0) },
			{ y:0.0, x: new Date(2018,0) }
			
			
			
			
			]
	},
	{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Demo Papers",
			color: "#309000",
			dataPoints: [
			
			
			
			
			
			{ y:0, x: new Date(1988,0) },
			{ y:0, x: new Date(1989,0) },
			{ y:0, x: new Date(1990,0) },
			{ y:0, x: new Date(1991,0) },
			{ y:0, x: new Date(1992,0) },
			{ y:0, x: new Date(1993,0) },
			{ y:0, x: new Date(1994,0) },
			{ y:0, x: new Date(1995,0) },
			{ y:0, x: new Date(1996,0) },
			{ y:0, x: new Date(1997,0) },
			{ y:0, x: new Date(1998,0) },
			{ y:0, x: new Date(1999,0) },
			{ y:0, x: new Date(2000,0) },
			{ y:0, x: new Date(2001,0) },
			{ y:0, x: new Date(2002,0) },
			{ y:0, x: new Date(2003,0) },
			{ y:0, x: new Date(2004,0) },
			{ y:0, x: new Date(2005,0) },
			{ y:0, x: new Date(2006,0) },
			{ y:0, x: new Date(2007,0) },
			{ y:0, x: new Date(2008,0) },
			{ y:0, x: new Date(2009,0) },
			{ y:0, x: new Date(2010,0) },
			{ y:0, x: new Date(2011,0) },
			{ y:0, x: new Date(2012,0) },
			{ y:0, x: new Date(2013,0) },
			{ y:0, x: new Date(2014,0) },
			{ y:0, x: new Date(2015,0) },
			{ y:0, x: new Date(2016,0) },
			{ y:0, x: new Date(2017,0) },
			{ y:0, x: new Date(2018,0) }
			
			
			
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
		name: "ROCLING-IJCLCLP: URLs per Paper 1996-2018",
		dataPoints: [
			
			
			
			{ y:0.0, x: new Date(1988,0) },
			{ y:0.0, x: new Date(1989,0) },
			{ y:0.0, x: new Date(1990,0) },
			{ y:0.0, x: new Date(1991,0) },
			{ y:0.0, x: new Date(1992,0) },
			{ y:0.0, x: new Date(1993,0) },
			{ y:0.0, x: new Date(1994,0) },
			{ y:0.0, x: new Date(1995,0) },
			{ y:0.0, x: new Date(1996,0) },
			{ y:0.0, x: new Date(1997,0) },
			{ y:0.0, x: new Date(1998,0) },
			{ y:0.0, x: new Date(1999,0) },
			{ y:0.30434782608695654, x: new Date(2000,0) },
			{ y:0.6538461538461539, x: new Date(2001,0) },
			{ y:1.0, x: new Date(2002,0) },
			{ y:1.3571428571428572, x: new Date(2003,0) },
			{ y:3.142857142857143, x: new Date(2004,0) },
			{ y:3.6785714285714284, x: new Date(2005,0) },
			{ y:2.0714285714285716, x: new Date(2006,0) },
			{ y:2.0714285714285716, x: new Date(2007,0) },
			{ y:1.5714285714285714, x: new Date(2008,0) },
			{ y:1.8571428571428572, x: new Date(2009,0) },
			{ y:2.5357142857142856, x: new Date(2010,0) },
			{ y:1.25, x: new Date(2011,0) },
			{ y:1.5, x: new Date(2012,0) },
			{ y:2.0714285714285716, x: new Date(2013,0) },
			{ y:1.4285714285714286, x: new Date(2014,0) },
			{ y:2.4642857142857144, x: new Date(2015,0) },
			{ y:2.357142857142857, x: new Date(2016,0) },
			{ y:0.7857142857142857, x: new Date(2017,0) },
			{ y:2.259259259259259, x: new Date(2018,0) }
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
		name: "ROCLING-IJCLCLP : Avg. number of URLs in footnote per Paper per Year",
		dataPoints: [
			
			
			
			{ y:0.0, x: new Date(1988,0) },
			{ y:0.0, x: new Date(1989,0) },
			{ y:0.0, x: new Date(1990,0) },
			{ y:0.0, x: new Date(1991,0) },
			{ y:0.0, x: new Date(1992,0) },
			{ y:0.0, x: new Date(1993,0) },
			{ y:0.0, x: new Date(1994,0) },
			{ y:0.0, x: new Date(1995,0) },
			{ y:0.0, x: new Date(1996,0) },
			{ y:0.0, x: new Date(1997,0) },
			{ y:0.0, x: new Date(1998,0) },
			{ y:0.0, x: new Date(1999,0) },
			{ y:0.0, x: new Date(2000,0) },
			{ y:0.0, x: new Date(2001,0) },
			{ y:0.0, x: new Date(2002,0) },
			{ y:0.10714285714285714, x: new Date(2003,0) },
			{ y:0.10714285714285714, x: new Date(2004,0) },
			{ y:0.0, x: new Date(2005,0) },
			{ y:0.17857142857142858, x: new Date(2006,0) },
			{ y:0.39285714285714285, x: new Date(2007,0) },
			{ y:0.0, x: new Date(2008,0) },
			{ y:0.10714285714285714, x: new Date(2009,0) },
			{ y:0.25, x: new Date(2010,0) },
			{ y:0.21428571428571427, x: new Date(2011,0) },
			{ y:0.32142857142857145, x: new Date(2012,0) },
			{ y:0.2857142857142857, x: new Date(2013,0) },
			{ y:0.25, x: new Date(2014,0) },
			{ y:0.14285714285714285, x: new Date(2015,0) },
			{ y:0.10714285714285714, x: new Date(2016,0) },
			{ y:0.0, x: new Date(2017,0) },
			{ y:0.25925925925925924, x: new Date(2018,0) }
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
		name: "ROCLING-IJCLCLP : Avg. number of Tables per Paper per Year",
		dataPoints: [
			
			
			
			{ y:0, x: new Date(1988,0) },
			{ y:0, x: new Date(1989,0) },
			{ y:0, x: new Date(1990,0) },
			{ y:0, x: new Date(1991,0) },
			{ y:0, x: new Date(1992,0) },
			{ y:0, x: new Date(1993,0) },
			{ y:0, x: new Date(1994,0) },
			{ y:0, x: new Date(1995,0) },
			{ y:0, x: new Date(1996,0) },
			{ y:0, x: new Date(1997,0) },
			{ y:0, x: new Date(1998,0) },
			{ y:0, x: new Date(1999,0) },
			{ y:1.3333333333333333, x: new Date(2000,0) },
			{ y:1.2142857142857142, x: new Date(2001,0) },
			{ y:0.0, x: new Date(2002,0) },
			{ y:3.3333333333333335, x: new Date(2003,0) },
			{ y:2.25, x: new Date(2004,0) },
			{ y:1.9642857142857142, x: new Date(2005,0) },
			{ y:1.9565217391304348, x: new Date(2006,0) },
			{ y:1.0625, x: new Date(2007,0) },
			{ y:1.625, x: new Date(2008,0) },
			{ y:1.35, x: new Date(2009,0) },
			{ y:1.7058823529411764, x: new Date(2010,0) },
			{ y:2.090909090909091, x: new Date(2011,0) },
			{ y:1.2962962962962963, x: new Date(2012,0) },
			{ y:0.9285714285714286, x: new Date(2013,0) },
			{ y:1.2380952380952381, x: new Date(2014,0) },
			{ y:0.5185185185185185, x: new Date(2015,0) },
			{ y:1.25, x: new Date(2016,0) },
			{ y:0.8518518518518519, x: new Date(2017,0) },
			{ y:1.1111111111111112, x: new Date(2018,0) }
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
		name: "ROCLING-IJCLCLP : Avg. number of Figures per Paper per Year",
		dataPoints: [
			
			
			
			{ y:0, x: new Date(1988,0) },
			{ y:0, x: new Date(1989,0) },
			{ y:0, x: new Date(1990,0) },
			{ y:0, x: new Date(1991,0) },
			{ y:0, x: new Date(1992,0) },
			{ y:0, x: new Date(1993,0) },
			{ y:0, x: new Date(1994,0) },
			{ y:0, x: new Date(1995,0) },
			{ y:0, x: new Date(1996,0) },
			{ y:0, x: new Date(1997,0) },
			{ y:0, x: new Date(1998,0) },
			{ y:0, x: new Date(1999,0) },
			{ y:1.0, x: new Date(2000,0) },
			{ y:1.2142857142857142, x: new Date(2001,0) },
			{ y:1.6666666666666667, x: new Date(2002,0) },
			{ y:1.6666666666666667, x: new Date(2003,0) },
			{ y:1.2142857142857142, x: new Date(2004,0) },
			{ y:1.7142857142857142, x: new Date(2005,0) },
			{ y:1.3478260869565217, x: new Date(2006,0) },
			{ y:1.5, x: new Date(2007,0) },
			{ y:1.125, x: new Date(2008,0) },
			{ y:1.25, x: new Date(2009,0) },
			{ y:0.4117647058823529, x: new Date(2010,0) },
			{ y:1.1818181818181819, x: new Date(2011,0) },
			{ y:2.037037037037037, x: new Date(2012,0) },
			{ y:0.8571428571428571, x: new Date(2013,0) },
			{ y:1.1428571428571428, x: new Date(2014,0) },
			{ y:0.6296296296296297, x: new Date(2015,0) },
			{ y:0.39285714285714285, x: new Date(2016,0) },
			{ y:0.5555555555555556, x: new Date(2017,0) },
			{ y:1.1851851851851851, x: new Date(2018,0) }
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
	axisX: {
		interval: 1
	},
	axisY: {
		title: ""
	},
	data: [{        
		type: "column",  
      	color: "#0303AC",                                              
		showInLegend: true, 
		legendMarkerColor: "grey",
		name: "ROCLING-IJCLCLP : Most Popular primary URL domains & their Frequencies",
		legendText: "",
		dataPoints: [
			{ y:6,  label:'www.edu.tw'  },
			{ y:11,  label:'www.w3.org'  },
			{ y:12,  label:'github.com'  },
			{ y:16,  label:'nlp.stanford.edu'  },
			{ y:14,  label:'htk.eng.cam.ac.uk'  },
			{ y:13,  label:'iug.csie.dahan.edu.tw'  },
			{ y:12,  label:'ckipsvr.iis.sinica.edu.tw'  },
			{ y:11,  label:'www.sinica.edu.tw'  },
			{ y:11,  label:'www.keenage.com'  },
			{ y:11,  label:'www.aclclp.org.tw'  },
			{ y:11,  label:'en.wikipedia.org'  },
			{ y:10,  label:'godel.iis.sinica.edu.tw'  },
			{ y:10,  label:'www.speech.sri.com'  },
			{ y:8,  label:'www.ldc.upenn.edu'  },
			{ y:8,  label:'www.csie.ntu.edu.tw'  },
			{ y:7,  label:'www.google.com'  },
			{ y:7,  label:'guhy.csie.ntust.edu.tw'  },
			{ y:7,  label:'zh.wikipedia.org'  },
			{ y:6,  label:'citeseer.nj.nec.com'  },
			{ y:5,  label:'rocling.iis.sinica.edu.tw'  }
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
	axisX: {
		interval: 1
	},
	axisY: {
		title: ""
	},
	data: [{        
		type: "column",  
      	color: "#0303AC",                                              
		showInLegend: true, 
		legendMarkerColor: "grey",
		name: "ROCLING-IJCLCLP : Top Unique GitHub Pages",
		legendText: "",
		dataPoints: [
			{ y: 1, label: 'a-' },
			{ y: 1, label: 'mhshih/sketch' },
			{ y: 1, label: 'makinacorpus/Leaflet.TextPath' },
			{ y: 1, label: 'openplans/Leaflet.AnimatedMarker' },
			{ y: 1, label: 'harvardnlp/seq2seq-attn' },
			{ y: 1, label: 'fchollet/keras' },
			{ y: 1, label: 'fxsjy/jieba' },
			{ y: 1, label: 'kodexlab/eleve' },
			{ y: 1, label: 'charlespwd/project-title' },
			{ y: 1, label: 'cmusphinx/g2p-seq2seq' },
			{ y: 1, label: 'UniversalDependencies/UD_Chinese-GSD' },
			{ y: 1, label: 'tensorflow/models/blob/master/research/syntaxnet/g3doc/syntaxnet-tutorial.md#part-of-spee' }
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
	axisX: {
		interval: 1
	},
	axisY: {
		title: ""
	},
	data: [{        
		type: "column",  
      	color: "#0303AC",                                              
		showInLegend: true, 
		legendMarkerColor: "grey",
		name: "ROCLING-IJCLCLP : Top University Pages",
		legendText: "",
		dataPoints: [      
			
			{ y: 8, label:'R.O.C.' },
			{ y: 1, label:'Penn Museum' },
			{ y: 6, label:'Academia Sinica' },
			{ y: 2, label:'Yuan Ze University' },
			{ y: 2, label:'New York University' },
			{ y: 2, label:'Université Paris-Saclay' },
			{ y: 7, label:'National Tsing Hua University' },
			{ y: 7, label: 'National Taiwan Normal University Gongguan Campus' },
			{ y: 6, label:'National Chiao Tung University Guangfu Campus' },
			{ y: 4, label:'Foreign Language Training Center, National Sun Yat-sen University' },
			{ y: 4, label:'National Taiwan University' },
			{ y: 4, label:'National Central University' },
			{ y: 4, label:'Institute of Information Science, Academia Sinica' },
			{ y: 4, label:'Industrial Technology Research Institute' },
			{ y: 3, label:'Orta Doğu Teknik Üniversitesi' },
			{ y: 3, label:'Chung Yuan Christian University' },
			{ y: 2, label:'National Taiwan University of Science and Technology' },
			{ y: 2, label:'Indian Statistical Institute' },
			{ y: 1, label:'New Mexico State University' },
			{ y: 1, label:'Kyoto Institute of Technology' }
			
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
		
		
		
		
		if(dt==2000)
		{
			dp= [                                         
			{ y:1, label: 'altavista.com' },
			{ y:1, label: 'directhit.com' },
			{ y:1, label: 'infoseek.com' },
			{ y:1, label: 'kimo.com.tw' },
			{ y:1, label: 'squid-cache.org' },
			{ y:1, label: 'yam.com.tw' }
			
		]
		}
		else if(dt==2001)
		{
			dp= [ 
			{ y:1, label: 'umd.edu' },
			{ y:4, label: 'sinica.edu.tw' },
			{ y:2, label: 'cuhk.edu.hk' },
			{ y:1, label: 'upatras.gr' },
			{ y:1, label: 'compuleer.nl' },
			{ y:1, label: 'grenet.fr' },
			{ y:1, label: 'upenn.edu' },
			{ y:1, label: 'edu.tw:81' }
			
		]
		}
		else if(dt==2002)
		{
			dp= [ 
			{ y:6, label: 'nj.nec.com' },
			{ y:1, label: 'sinica.edu.tw' },
			{ y:2, label: 'keenage.com' }
			
		]
		}
		else if(dt==2003)
		{
			dp= [  
			{ y:1, label: 'isi.edu' },
			{ y:1, label: 'sciam.com' },
			{ y:1, label: 'greatman.com.tw' },
			{ y:1, label: 'umd.edu' },
			{ y:4, label: 'sinica.edu.tw' },
			{ y:1, label: 'google.com' },
			{ y:1, label: 'openfind.com' },
			{ y:1, label: 'teknowledge.com' },
			{ y:1, label: 'upenn.edu' },
			{ y:1, label: 'behindthename.com' },
			{ y:1, label: 'joachims.org' },
			{ y:3, label: 'keenage.com' },
			{ y:2, label: 'udnnews.com' },
			{ y:1, label: 'openfind.com.tw' },
			{ y:1, label: 'udn.com.tw' },
			{ y:1, label: 'bham.ac.uk' },
			{ y:2, label: 'answerbus.com' },
			{ y:1, label: 'languagecomputer.com' },
			{ y:1, label: 'jhu.edu' },
			{ y:1, label: 'att.com' }
			
		]
		}
		else if(dt==2004)
		{
			dp= [                                         
			{ y:1, label: 'sri.com' },
			{ y:1, label: 'ntnu.edu.tw' },
			{ y:1, label: 'cam.ac.uk' },
			{ y:1, label: 'google.com' },
			{ y:13, label: 'sinica.edu.tw' },
			{ y:2, label: 'keenage.com' },
			{ y:1, label: 'udnnews.com' },
			{ y:3, label: 'nist.gov' },
			{ y:1, label: 'medstract.org' },
			{ y:2, label: 'ets.org' },
			{ y:1, label: 'bham.ac.uk' },
			{ y:1, label: 'csa.com.tw' },
			{ y:5, label: 'w3.org' },
			{ y:3, label: 'microsoft.com' },
			{ y:2, label: 'berkeley.edu' },
			{ y:1, label: 'bestbookdeal.com' },
			{ y:1, label: 'stic.gov.tw' },
			{ y:1, label: 'uia.ac.be' },
			{ y:1, label: 'nthu.edu.tw' },
			{ y:1, label: 'atr.co.jp' }
			
			
		]
		}
		else if(dt==2005)
		{
			dp= [ 
			{ y:5, label: 'w3.org' },
			{ y:13, label: 'sinica.edu.tw' },
			{ y:2, label: 'stanford.edu' },
			{ y:9, label: 'dahan.edu.tw' },
			{ y:2, label: 'cgu.edu.tw' },
			{ y:5, label: 'aclclp.org.tw' },
			{ y:1, label: 'apache.org' },
			{ y:2, label: 'uva.nl' },
			{ y:3, label: 'upenn.edu' },
			{ y:2, label: 'chasen.org' },
			{ y:1, label: 'umich.edu' },
			{ y:1, label: 'isi.edu' },
			{ y:1, label: 'cam.ac.uk' },
			{ y:3, label: 'sri.com' },
			{ y:1, label: 'keenage.com' },
			{ y:2, label: 'wikipedia.org' },
			{ y:2, label: 'Acezh.com' },
			{ y:2, label: 'ets.org' },
			{ y:3, label: 'ntu.edu.tw' },
			{ y:1, label: 'nctu.edu.tw' }
			
		]
		}
		else if(dt==2006)
		{
			dp= [ 
			{ y:1, label: 'isi.edu' },
			{ y:3, label: 'sinica.edu.tw' },
			{ y:3, label: 'upenn.edu' },
			{ y:2, label: 'ntust.edu.tw' },
			{ y:2, label: 'aclclp.org.tw' },
			{ y:2, label: 'nist.gov' },
			{ y:1, label: 'mit.edu' },
			{ y:1, label: 'xuite.net' },
			{ y:1, label: 'technorati.com' },
			{ y:1, label: 'blogspot.com' },
			{ y:1, label: 'msn.com' },
			{ y:2, label: 'yahoo.com' },
			{ y:1, label: 'ntu.edu.tw' },
			{ y:1, label: 'bbk.ac.uk' },
			{ y:1, label: 'google.com' },
			{ y:1, label: 'mojolingo.com.tw' },
			{ y:1, label: '24drs.com' },
			{ y:1, label: 'fjoch.com' },
			{ y:1, label: 'stanford.edu' },
			{ y:1, label: 'gutenberg.org' }
			
		]
		}
		else if(dt==2007)
		{
			dp= [ 
			{ y:1, label: 'blo.gs' },
			{ y:2, label: 'nist.gov' },
			{ y:1, label: 'microsoft.com' },
			{ y:3, label: 'google.com' },
			{ y:2, label: 'yahoo.com' },
			{ y:1, label: 'altavista.com' },
			{ y:1, label: 'kookmin.ac.kr' },
			{ y:1, label: 'daum.net' },
			{ y:1, label: 'wikipedia.org' },
			{ y:1, label: 'naver.com' },
			{ y:1, label: 'cna.com.tw' },
			{ y:1, label: 'upenn.edu' },
			{ y:1, label: 'sri.com' },
			{ y:1, label: 'sinica.edu.tw' },
			{ y:2, label: 'sketchengine.co.uk' },
			{ y:3, label: 'stanford.edu' },
			{ y:1, label: 'nii.ac.jp' },
			{ y:1, label: 'youtube.com' },
			{ y:1, label: 'yam.com' },
			{ y:3, label: 'weblogs.com' }
			
		]
		}
		else if(dt==2008)
		{
			dp= [
			
			{ y:1, label: 'princeton.edu' },
			{ y:1, label: 'uni-sb.de' },
			{ y:1, label: 'ntust.edu.tw' },
			{ y:4, label: 'cam.ac.uk' },
			{ y:4, label: 'sinica.edu.tw' },
			{ y:1, label: 'cbflabs.com' },
			{ y:1, label: 'cns11643.gov.tw' },
			{ y:1, label: 'foruto.com' },
			{ y:1, label: 'ethnologue.com' },
			{ y:4, label: 'dahan.edu.tw' },
			{ y:1, label: 'upenn.edu' },
			{ y:1, label: 'umass.edu' },
			{ y:1, label: 'chasen.org' },
			{ y:1, label: 'ntu.edu.tw' },
			{ y:1, label: 'tuebingen.mpg.de' },
			{ y:1, label: 'wisc.edu' },
			{ y:1, label: 'ua.ac.be' },
			{ y:1, label: 'sketchengine.co.uk' }
			
		]
		}
		else if(dt==2009)
		{
			dp= [ 
			{ y:1, label: 'sri.com' },
			{ y:1, label: 'google.com' },
			{ y:1, label: 'yahoo.com' },
			{ y:1, label: 'live.com' },
			{ y:2, label: 'cmu.edu' },
			{ y:1, label: 'ntu.edu.tw' },
			{ y:2, label: 'sinica.edu.tw' },
			{ y:1, label: 'wordpedia.com' },
			{ y:1, label: 'nict.gov.tw' },
			{ y:1, label: 'tipo.gov.tw' },
			{ y:1, label: 'sourceforge.net' },
			{ y:1, label: 'praat.org' },
			{ y:1, label: 'nist.gov' },
			{ y:1, label: 'nikkostrom.com' },
			{ y:1, label: 'ntust.edu.tw' },
			{ y:1, label: 'nccu.edu.tw' },
			{ y:2, label: 'stanford.edu' },
			{ y:1, label: 'sdsu.edu' },
			{ y:2, label: 'quiz-zone.co.uk' },
			{ y:2, label: 'cam.ac.uk' }
			
		]
		}
		else if(dt==2010)
		{
			dp=[                                         

			
			{ y:1, label: 'msn.com' },
			{ y:2, label: 'sri.com' },
			{ y:2, label: 'google.com' },
			{ y:3, label: 'cam.ac.uk' },
			{ y:2, label: 'ceec.edu.tw' },
			{ y:1, label: 'taiwantestcentral.com' },
			{ y:2, label: 'wikipedia.org' },
			{ y:1, label: 'sdsu.edu' },
			{ y:1, label: 'harrymclaughlin.com' },
			{ y:1, label: 'cmu.edu' },
			{ y:4, label: 'stanford.edu' },
			{ y:1, label: 'google.com.tw' },
			{ y:1, label: 'microsoft.com' },
			{ y:1, label: 'winperturn.com.tw' },
			{ y:1, label: 'openfoundry.org' },
			{ y:2, label: 'nlp.org.cn' },
			{ y:2, label: 'plurk.com' },
			{ y:1, label: 'yahoo.com' },
			{ y:2, label: 'upenn.edu' },
			{ y:2, label: 'sourceforge.net' }
			
		]
		}
		else if(dt==2011)
		{
			dp= [                                         
			{ y:1, label: 'sri.com' },
			{ y:1, label: 'cuhk.edu.hk' },
			{ y:1, label: 'nltk.org' },
			{ y:1, label: 'sourceforge.net' },
			{ y:1, label: 'nsysu.edu.tw' },
			{ y:4, label: 'sinica.edu.tw' },
			{ y:1, label: 'wordpedia.com' },
			{ y:1, label: 'nict.gov.tw' },
			{ y:3, label: 'wikipedia.org' },
			{ y:1, label: 'ris.gov.tw' },
			{ y:1, label: 'greatchinese.com' },
			{ y:1, label: 'wikimedia.org' },
			{ y:1, label: 'kyoto-u.ac.jp' },
			{ y:1, label: 'moe.edu.tw' },
			{ y:1, label: 'nist.gov' },
			{ y:1, label: 'nthu.edu.tw' },
			{ y:1, label: 'waikato.ac.nz' },
			{ y:1, label: 'ncu.edu.tw' },
			{ y:1, label: 'R-project.org' },
			{ y:1, label: 'ucsb.edu' }
			
		]
		}
		else if(dt==2012)
		{
			dp= [ 
			{ y:1, label: 'cnki.net' },
			{ y:1, label: 'ntust.edu.tw' },
			{ y:1, label: 'Americancorpus.Org' },
			{ y:1, label: 'facebook.com' },
			{ y:5, label: 'sinica.edu.tw' },
			{ y:1, label: 'r-project.org' },
			{ y:1, label: 'ethnologue.com' },
			{ y:5, label: 'wikipedia.org' },
			{ y:1, label: 'seventhstring.com' },
			{ y:2, label: '140.111.34.54' },
			{ y:1, label: 'pts.org.tw' },
			{ y:1, label: 'ntu.edu.tw' },
			{ y:1, label: 'jrf.org.tw' },
			{ y:3, label: 'statmt.org' },
			{ y:2, label: 'apache.org' },
			{ y:1, label: 'google.com' },
			{ y:1, label: 'dropbox.com' },
			{ y:1, label: 'cuny.edu' }
			
		]
		}
		else if(dt==2013)
		{
			dp= [                                         
			{ y:1, label: 'isi.edu' },
			{ y:1, label: 'sri.com' },
			{ y:1, label: 'aclclp.org.tw' },
			{ y:1, label: 'ntust.edu.tw' },
			{ y:6, label: 'stanford.edu' },
			{ y:1, label: 'nii.ac.jp' },
			{ y:1, label: 'microsoft.com' },
			{ y:1, label: 'waikato.ac.nz' },
			{ y:1, label: 'deadline.com' },
			{ y:1, label: 'uic.edu' },
			{ y:1, label: 'ualberta.ca' },
			{ y:3, label: 'wikipedia.org' },
			{ y:1, label: 'twitter.com' },
			{ y:1, label: 'google.com' },
			{ y:1, label: 'cornell.edu' },
			{ y:2, label: 'sinica.edu.tw' },
			{ y:1, label: 'udndata.com' },
			{ y:1, label: 'wiktionary.org' },
			{ y:1, label: 'thefreedictionary.com' },
			{ y:1, label: 'keenage.com' }
			
		]
		}
		else if(dt==2014)
		{
			dp= [                                         
			{ y:1, label: 'isi.edu' },
			{ y:1, label: 'nist.gov' },
			{ y:1, label: 'ntust.edu.tw' },
			{ y:1, label: 'speaking.tw' },
			{ y:1, label: 'cuni.cz' },
			{ y:2, label: 'sketchengine.co.uk' },
			{ y:2, label: 'sinica.edu.tw' },
			{ y:2, label: 'stanford.edu' },
			{ y:1, label: 'linguistics.ntu.edu.tw' },
			{ y:4, label: 'github.com' },
			{ y:2, label: 'github.io' },
			{ y:2, label: 'google.com' },
			{ y:1, label: 'foursquare.com' },
			{ y:1, label: 'firebase.com' },
			{ y:1, label: 'openstreetmap.org' },
			{ y:1, label: 'leafletjs.com' },
			{ y:2, label: 'w3.org' },
			{ y:1, label: 'phonegap.com' },
			{ y:1, label: 'microsoft.com' },
			{ y:1, label: 'nike.com' }
			
		]
		}
		else if(dt==2015)
		{
			dp= [    
			{ y:1, label: 'doi.org' },
			{ y:1, label: 'acm.org' },
			{ y:1, label: 'sri.com' },
			{ y:2, label: 'hakka.gov.tw' },
			{ y:1, label: 'openvanilla.org' },
			{ y:1, label: 'microsoft.com' },
			{ y:1, label: 'ntpc.edu.tw' },
			{ y:1, label: 'darpa.mil' },
			{ y:3, label: 'wikipedia.org' },
			{ y:3, label: 'ntu.edu.tw' },
			{ y:1, label: 'cohmetrix.com' },
			{ y:1, label: 'princeton.edu' },
			{ y:1, label: 'chinesereadability.net' },
			{ y:3, label: 'google.com' },
			{ y:1, label: 'moc.gov.tw' },
			{ y:1, label: 'psu.edu' },
			{ y:1, label: 'people.com.cn' },
			{ y:1, label: 'scikit-learn.org' },
			{ y:1, label: 'stanford.edu' },
			{ y:2, label: 'iyp.com.tw' }
			
		]
		}
		else if(dt==2016)
		{
			dp= [ 
			{ y:1, label: 'isi.edu' },
			{ y:5, label: 'sinica.edu.tw' },
			{ y:1, label: 'cam.ac.uk' },
			{ y:1, label: 'aclclp.org.tw' },
			{ y:4, label: 'ntu.edu.tw' },
			{ y:1, label: 'wikia.com' },
			{ y:1, label: 'pixnet.net' },
			{ y:1, label: 'moe.edu.tw' },
			{ y:1, label: 'ctcn.edu.tw' },
			{ y:2, label: 'cdict.info' },
			{ y:1, label: 'princeton.edu' },
			{ y:1, label: 'crowdtruth.org' },
			{ y:2, label: 'senseval.org' },
			{ y:1, label: 'torch.ch' },
			{ y:6, label: 'github.com' },
			{ y:1, label: 'udndata.com' },
			{ y:1, label: 'ford.com' },
			{ y:1, label: 'about.com' },
			{ y:4, label: 'google.com' },
			{ y:1, label: 'sourceforge.net' }
			
		]
		}
		else if(dt==2017)
		{
			dp= [ 
			{ y:1, label: 'tut.fi' },
			{ y:1, label: 'archive.org' },
			{ y:2, label: 'hakka.gov.tw' },
			{ y:2, label: 'doi.org' },
			{ y:1, label: 'laurenceanthony.net' },
			{ y:1, label: 'slideplayer.com' },
			{ y:1, label: 'github.io' },
			{ y:1, label: 'nitech.ac.jp' },
			{ y:1, label: 'stanford.edu' },
			{ y:1, label: 'github.com' },
			{ y:1, label: 'sinica.edu.tw' }
			
		]
		}
		else if(dt==2018)
		{
			dp= [                                         
			{ y:1, label: 'idv.tw' },
			{ y:3, label: 'arxiv.org' },
			{ y:1, label: 'nist.gov' },
			{ y:1, label: 'aclclp.org.tw' },
			{ y:1, label: 'nltk.org' },
			{ y:1, label: 'keras.io' },
			{ y:1, label: 'microsoft.com' },
			{ y:1, label: 'hakka.gov.tw' },
			{ y:1, label: 'si.ehu.es' },
			{ y:2, label: 'tn.edu.tw' },
			{ y:3, label: 'youtube.com' },
			{ y:1, label: 'waikato.ac.nz' },
			{ y:1, label: 'github.io' },
			{ y:2, label: 'ai-clerk.com' },
			{ y:1, label: 'inside.com.tw' },
			{ y:1, label: 'ebay.com' },
			{ y:2, label: 'github.com' },
			{ y:1, label: 'wikipedia.org' },
			{ y:5, label: 'mathworks.com' },
			{ y:1, label: 'doi.org' }
			
		]
		}
		else
		{
			dp = [];
		}
	var chart = new CanvasJS.Chart(res, {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	height: 400,
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
	
	
	if (dtp=='20000')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.altavista.com' }			
		]
	}
	else if (dtp=='20001')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.directhit.com' }			
		]
	}
	else if (dtp=='20002')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.infoseek.com' }			
		]
	}
	else if (dtp=='20003')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.kimo.com.tw' }			
		]
	}
	else if (dtp=='20004')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.squid-cache.org/Doc/FAQ/FAQ-6.html' }			
		]
	}
	else if (dtp=='20005')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.yam.com.tw'}			
		]
	}
	else if (dtp=='20010')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.glue.umd.edu/~oard/research.html' }			
		]
	}
	else if (dtp=='20011')
	{
		dp = [                                         
			{ y: 1, label: 'http://godel.iis.sinica.edu.tw' },
			{ y: 1, label: 'http://rocling.iis.sinica.edu.tw/ROCLING/MAT/index' },
			{ y: 2, label: 'www.sinica.edu.tw' }
		]
	}
	else if (dtp=='20012')
	{
		dp = [                                         
			{ y: 2, label: 'dsp.ee.cuhk.edu.hk' }			
		]
	}
	else if (dtp=='20013')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.wcl.ee.upatras.gr/access/access.htm' }			
		]
	}
	else if (dtp=='20014')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.compuleer.nl/arise.htm' }			
		]
	}
	else if (dtp=='20015')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.icp.grenet.fr/ELRA/home.html' }			
		]
	}
	else if (dtp=='20016')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.ldc.upenn.edu' }			
		]
	}
	else if (dtp=='20017')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.edu.tw:81/mandr/' }			
		]
	}
	else if (dtp=='20020')
	{
		dp = [                                         
			{ y: 6, label: 'citeseer.nj.nec.com' }			
		]
	}
	else if (dtp=='20021')
	{
		dp = [                                         
			{ y: 1, label: 'http://godel.iis.sinica.edu.tw/CKIP/r_content.html' }			
		]
	}
	else if (dtp=='20022')
	{
		dp = [                                         
			{ y: 2, label: 'www.keenage.com' }			
		]
	}
	else if (dtp=='20030')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://www.isi.edu/natural-language/projects/C-ST-RD.html'}	
		]
	}
	else if (dtp=='20031')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://www.sciam.com' }			
		]
	}
	else if (dtp=='20032')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.greatman.com.tw/sinorama.htm' }			
		]
	}
	else if (dtp=='20033')
	{
		dp = [                                         
			{ y: 1, label: 'http://raveb.umd.edu/ddlrg/clir/systems.html'}			
		]
	}
	else if (dtp=='20034')
	{
		dp = [                                         
			{ y: 1, label: 'http://livetrans.iis.sinica.edu.tw/lt.html' },
			{ y: 1, label: 'http://www.sinica.edu.tw/SinicaCorpus/' },
			{ y: 2, label: 'godel.iis.sinica.edu.tw' }
		]
	}
	else if (dtp=='20035')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.google.com/' }			
		]
	}
	else if (dtp=='20036')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.openfind.com/' }	
		]
	}
	else if (dtp=='20037')
	{
		dp = [                                         
			{ y: 1, label: 'http://ontology.teknowledge.com/' }			
		]
	}
	else if (dtp=='20038')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.ldc.upenn.edu/ldc/online/index.html' }			
		]
	}
	else if (dtp=='20039')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.behindthename.com/' }			
		]
	}
	else if (dtp=='200310')
	{
		dp = [                                         
			{ y: 1, label: 'http://svmlight.joachims.org/' }			
		]
	}
	else if (dtp=='200311')
	{
		dp = [                                         
			{ y: 3, label: 'www.keenage.com' }			
		]
	}
	else if (dtp=='200312')
	{
		dp = [                                         
			{ y: 2, label: 'udnnews.com' }			
		]
	}
	else if (dtp=='200313')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.openfind.com.tw/' }			
		]
	}
	else if (dtp=='200314')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.udn.com.tw' }			
		]
	}
	else if (dtp=='200315')
	{
		dp = [                                         
			{ y: 1, label: 'http://web.bham.ac.uk/O.Mason/software/tagger/' }			
		]
	}
	else if (dtp=='200316')
	{
		dp = [                                         
			{ y: 2, label: 'www.answerbus.com' }			
		]
	}
	else if (dtp=='200317')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://www.languagecomputer.com/' }			
		]
	}
	else if (dtp=='200318')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.clsp.jhu.edu/ws2000/groups/reading/' }			
		]
	}
	else if (dtp=='200319')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.research.att.com/~algot/hmihy/' }			
		]
	}
	else if (dtp=='20040')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.speech.sri.com/projects/srilm/' }			
		]
	}
	else if (dtp=='20041')
	{
		dp = [                                         
			{ y: 1, label: 'http://speech.csie.ntnu.edu.tw/MATBN_SetDefinition/' }			
		]
	}
	else if (dtp=='20042')
	{
		dp = [                                         
			{ y: 1, label: 'http://htk.eng.cam.ac.uk/' }			
		]
	}
	else if (dtp=='20043')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://www.google.com' }
		]
	}
	else if (dtp=='20044')
	{
		dp = [                                         
			{ y: 1, label: 'http://sovideo.iis.sinica.edu.tw/SLG/' },
			{ y: 2, label: 'godel.iis.sinica.edu.tw' },
			{ y: 3, label: 'turing.iis.sinica.edu.tw' },
			{ y: 4, label: 'www.sinica.edu.tw' },
			{ y: 1, label: 'http://BOW.sinica.edu.tw/' },
			{ y: 2, label: 'rocling.iis.sinica.edu.tw' }
		]
	}
	else if (dtp=='20045')
	{
		dp = [                                         
			{ y: 2, label: 'www.keenage.com' }			
		]
	}
	else if (dtp=='20046')
	{
		dp = [                                         
			{ y: 1, label: 'http://udnnews.com/NEWS/' }			
		]
	}
	else if (dtp=='20047')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.itl.nist.gov/iaui/894.02/related_projects/' },
			{ y: 1, label: 'http://duc.nist.gov' },
			{ y: 1, label: 'http://www-nlpir.nist.gov/related_projects/tipster_summac/final_rpt.html' }
		]
	}
	else if (dtp=='20048')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.medstract.org/' }			
		]
	}
	else if (dtp=='20049')
	{
		dp = [                                         
			{ y: 2, label: 'www.ets.org' }			
		]
	}else if (dtp=='200410')
	{
		dp = [                                         
			{ y: 1, label: 'http://web.bham.ac.uk/johnstf/timcall.htm' }			
		]
	}
	else if (dtp=='200411')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.csa.com.tw' }			
		]
	}
	else if (dtp=='200412')
	{
		dp = [                                         
			{ y: 5, label: 'www.w3.org' }			
		]
	}
	else if (dtp=='200413')
	{
		dp = [                                         
			{ y: 1, label: 'http://research.microsoft.com/aboutmsr/labs/beijing/' },
			{ y: 2, label: 'msdn.microsoft.com' }
		]
	}
	else if (dtp=='200414')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.lib.berkeley.edu/TeachingLib/Guides/Internet/MetaSearch.html' },
			{ y: 1, label: 'http://www.icsi.berkeley.edu/~framenet/' }
		]
	}
	else if (dtp=='200415')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.bestbookdeal.com' }			
		]
	}
	else if (dtp=='200416')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.stic.gov.tw/fdb/index.html' }			
		]
	}
	else if (dtp=='200417')
	{
		dp = [                                         
			{ y: 1, label: 'http://cnts.uia.ac.be/conll2000/' }			
		]
	}
	else if (dtp=='200418')
	{
		dp = [                                         
			{ y: 1, label: 'http://candle.cs.nthu.edu.tw/' }			
		]
	}
	else if (dtp=='200419')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.slt.atr.co.jp/' }			
		]
	}
	else if (dtp=='20050')
	{
		dp = [                                         
			
			{ y: 5, label: 'www.w3.org' }
		]
	}
	else if (dtp=='20051')
	{
		dp = [                                         
			{ y: 6, label: 'ckipsvr.iis.sinica.edu.tw' },
			{ y: 2, label: 'www.sinica.edu.tw' },
			{ y: 1, label: 'http://treebank.sinica.edu.tw/' },
			{ y: 2, label: 'godel.iis.sinica.edu.tw' },
			{ y: 2, label: 'sovideo.iis.sinica.edu.tw' }
		]
	}
	else if (dtp=='20052')
	{
		dp = [                                         
			{ y: 1, label: 'http://protege.stanford.edu/rdfname' },
			{ y: 1, label: 'http://infomap.stanford.edu' }
		]
	}
	else if (dtp=='20053')
	{
		dp = [                                         
			{ y: 9, label: 'iug.csie.dahan.edu.tw'}			
		]
	}
	else if (dtp=='20054')
	{
		dp = [                                         
			{ y: 2, label: 'msp.csie.cgu.edu.tw' }			
		]
	}
	else if (dtp=='20055')
	{
		dp = [                                         
			
			{ y: 5, label: 'www.aclclp.org.tw' }			
		]
	}
	else if (dtp=='20056')
	{
		dp = [                                         
			{ y: 1, label:  'http://xml.apache.org/xerces-j/' }			
		]
	}
	else if (dtp=='20057')
	{
		dp = [                                         
			{ y: 2, label: 'staff.science.uva.nl' }			
		]
	}
	else if (dtp=='20058')
	{
		dp = [                                         
			{ y: 3, label:   'www.ldc.upenn.edu' }			
		]
	}
	else if (dtp=='20059')
	{
		dp = [                                         
			{ y: 2, label: 'chasen.org' }			
		]
	}
	else if (dtp=='200510')
	{
		dp = [                                         
			{ y: 1, label: 'http://tangra.si.umich.edu/clair/mead' }			
		]
	}
	else if (dtp=='200511')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.isi.edu/~cyl/ROUGE/'}			
		]
	}
	else if (dtp=='200512')
	{
		dp = [                                         
			{ y: 1, label: 'http://htk.eng.cam.ac.uk/' }			
		]
	}
	else if (dtp=='200513')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.ai.sri.com/~israel/fastus_brief2.pdf' },
			{ y: 2, label:  'www.speech.sri.com' }
		]
	}
	else if (dtp=='200514')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.keenage.com' }			
		]
	}
	else if (dtp=='200515')
	{
		dp = [                                         
			{ y: 2, label: 'en.wikipedia.org' }			
		]
	}
	else if (dtp=='200516')
	{
		dp = [                                         
			
			{ y: 2, label: 'Acezh.com' }
		]
	}
	else if (dtp=='200517')
	{
		dp = [                                         
			{ y: 2, label: 'www.ets.org' }			
		]
	}
	else if (dtp=='200518')
	{
		dp = [                                         
			{ y: 1, label:  'http://tb.csie.ntu.edu.tw/' },
			{ y: 1, label:  'http://nlg3.csie.ntu.edu.tw' },
			{ y: 1, label:  'http://www.csie.ntu.edu.tw/~cjlin/libsvm/' }
		]
	}
	else if (dtp=='200519')
	{
		dp = [                                         
			{ y: 1, label: 'http://speech.cm.nctu.edu.tw/' }			
		]
	}
	else if (dtp=='20060')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.isi.edu/publications/licensed-sw/rewrite-decoder/index.html' }			
		]
	}
	else if (dtp=='20061')
	{
		dp = [                                         
			{ y: 1, label: 'http://ckipsvr.iis.sinica.edu.tw/' },
			{ y: 1, label: 'http://cwn.ling.sinica.edu.tw' },
			{ y: 1, label: 'http://www.sinica.edu.tw/SinicaCorpus/98-' },
			{ y: 1, label: 'http://rocling.iis.sinica.edu.tw/ROCLING/MAT/Tcc_300brief.htm'}
		]
	}
	else if (dtp=='20062')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.ldc.upenn.edu/Catalog/CatalogEntry.jsp?catalogId=LDC2003T09' },
			{ y: 1, label: 'http://wave.ldc.upenn.edu/Catalog/CatalogEntry.jsp?' },
			{ y: 1, label: 'http://acl.ldc.upenn.edu/A/A97/A97-2014.pdf' }
		]
	}
	else if (dtp=='20063')
	{
		dp = [                                         
			{ y: 2, label: 'www.csie.ntust.edu.tw' }			
		]
	}
	else if (dtp=='20064')
	{
		dp = [                                         
			{ y: 2, label:  'www.aclclp.org.tw' }			
		]
	}
	else if (dtp=='20065')
	{
		dp = [                                         
			
			{ y: 2, label: 'www.nist.gov' }	
		]
	}
	else if (dtp=='20066')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.ll.mit.edu/IST/lnknet/' }			
		]
	}
	else if (dtp=='20067')
	{
		dp = [                                         
			{ y: 1, label: 'http://blog.xuite.net/'}			
		]
	}
	else if (dtp=='20068')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.technorati.com/' }			
		]
	}
	else if (dtp=='20069')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.blogspot.com/' }			
		]
	}
	else if (dtp=='200610')
	{
		dp = [                                         
			{ y: 1, label: 'http://spaces.msn.com/' }			
		]
	}
	else if (dtp=='200611')
	{
		dp = [                                         
			{ y: 1, label: 'http://tw.blog.yahoo.com/' },
			{ y: 1, label: 'http://tw.myblog.yahoo.com/jw!IlyqF8KeFRLqmezkFIeTaK5./article?mid=9470' }
		]
	}
	else if (dtp=='200612')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.csie.ntu.edu.tw/~cjlin/libsvm/index.html' }			
		]
	}
	else if (dtp=='200613')
	{
		dp = [                                         
			{ y: 1, label: 'http://textmining.cryst.bbk.ac.uk/acl05/' }			
		]
	}
	else if (dtp=='200614')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.google.com/language_tools?hl=en' }			
		]
	}
	else if (dtp=='200615')
	{
		dp = [                                         
			{ y: 1, label: 'http://text.mojolingo.com.tw/'}			
		]
	}
	else if (dtp=='200616')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://www.24drs.com/professional/' }	
		]
	}
	else if (dtp=='200617')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://www.fjoch.com/GIZA++.html' }	
		]
	}
	else if (dtp=='200618')
	{
		dp = [                                         
			{ y: 1, label: 'http://ai.stanford.edu/~rion/parsing/stanford_viz.html'}			
		]
	}
	else if (dtp=='200619')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://www.gutenberg.org/' }
		]
	}
	else if (dtp=='20070')
	{
		dp = [                                         
			{ y: 1, label: 'http://blo.gs/' }
		]
	}
	else if (dtp=='20071')
	{
		dp = [                                         
			
			{ y: 2, label: 'trec.nist.gov' }
		]
	}
	else if (dtp=='20072')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://research.microsoft.com/~minka/papers/dirichlet/minka-dirtree.pdf' }
		]
	}
	else if (dtp=='20073')
	{
		dp = [                                         
			{ y: 2, label: 'www.google.com' },
			{ y: 1, label: 'http://google.com/tra' }
		]
	}
	else if (dtp=='20074')
	{
		dp = [                                         
			{ y: 2, label: 'tw.blog.yahoo.com' }
		]
	}
	else if (dtp=='20075')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.altavista.com' }
		]
	}
	else if (dtp=='20076')
	{
		dp = [                                         
			{ y: 1, label: 'http://nlp.kookmin.ac.kr/HAM/kor/index.html' }
		]
	}
	else if (dtp=='20077')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://cndic.daum.net' }
		]
	}
	else if (dtp=='20078')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.wikipedia.org' }
		]
	}
	else if (dtp=='20079')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://people.naver.com' }
		]
	}
	else if (dtp=='200710')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://client.cna.com.tw/name/' }
		]
	}
	else if (dtp=='200711')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://www.ldc.upenn.edu' }
		]
	}
	else if (dtp=='200712')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.speech.sri.com/projects/srilm/' }
		]
	}
	else if (dtp=='200713')
	{
		dp = [                                         
			{ y: 1, label: 'http://sovideo.iis.sinica.edu.tw/SLG/index.htm' }
		]
	}
	else if (dtp=='200714')
	{
		dp = [                                         
			
			{ y: 2, label: 'www.sketchengine.co.uk' }
		]
	}
	else if (dtp=='200715')
	{
		dp = [                                         
			{ y: 1, label: 'http://www-nlp.stanford.edu/downloads/lex-parser.shtml' },
			{ y: 2, label: 'nlp.stanford.edu' }
		]
	}
	else if (dtp=='200716')
	{
		dp = [                                         
			{ y: 1, label: 'http://research.nii.ac.jp/ntcir/index-en.html' }
		]
	}
	else if (dtp=='200717')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.youtube.com/' }
		]
	}
	else if (dtp=='200718')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://blog.yam.com/' }
		]
	}
	else if (dtp=='200719')
	{
		dp = [                                         
			{ y: 1, label: 'http://Web.weblogs.com/' },
			{ y: 2, label: 'rpc.weblogs.com' }
		]
	}
	else if (dtp=='20080')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://wordnet.princeton.edu/perl/webwn?s=word-you-want' }
		]
	}
	else if (dtp=='20081')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.ps.uni-sb.de/~niehren/' }
		]
	}
	else if (dtp=='20082')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://guhy.csie.ntust.edu.tw/spmdtw/' }
		]
	}
	else if (dtp=='20083')
	{
		dp = [                                         
			{ y: 4, label:  'htk.eng.cam.ac.uk' }
		]
	}
	else if (dtp=='20084')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.sinica.edu.tw/~cdp/cdphanzi/Last' },
			{ y: 1, label:  'http://abc.iis.sinica.edu.tw/' },
			{ y: 1, label:  'http://rocling.iis.sinica.edu.tw/CKIP/paper/' },
			{ y: 1, label:  'http://godel.iis.sinica.edu.tw/CKIP/paper/poslist.pdf' }
		]
	}
	else if (dtp=='20085')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.cbflabs.com/book/ocj5/ocj5/index.htmlLast' }
		]
	}
	else if (dtp=='20086')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.cns11643.gov.tw/web/word/big5/index.htmlLast' }
		]
	}
	else if (dtp=='20087')
	{
		dp = [                                         
			{ y: 1, label:  'http://input.foruto.com/cjdict/Search_1.php' }
		]
	}
	else if (dtp=='20088')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.ethnologue.com/' }
		]
	}
	else if (dtp=='20089')
	{
		dp = [                                         
			{ y: 4, label: 'iug.csie.dahan.edu.tw' }
		]
	}
	else if (dtp=='200810')
	{
		dp = [                                         
			{ y: 1, label:  'http://acl.ldc.upenn.edu/W/W96/W96-0213.pdf' }
		]
	}
	else if (dtp=='200811')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.cs.umass.edu/~mccallum/papers/memm-icml2000.ps' }
		]
	}
	else if (dtp=='200812')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://chasen.org/~taku/software/YamCha/' }
		]
	}
	else if (dtp=='200813')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.csie.ntu.edu.tw/~cjlin/libsvm/' }
		]
	}else if (dtp=='200814')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.kyb.tuebingen.mpg.de/ssl-book/' }
		]
	}
	else if (dtp=='200815')
	{
		dp = [                                         
			{ y: 1, label:  'http://pages.cs.wisc.edu/~jerryzhu/pub/ssl_survey.pdf' }
		]
	}
	else if (dtp=='200816')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.cnts.ua.ac.be/conll2000/chunking/conlleval.tx' }
		]
	}
	else if (dtp=='200817')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.sketchengine.co.uk' }
		]
	}
	else if (dtp=='20090')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.speech.sri.com/projects/srilm/' }
		]
	}
	else if (dtp=='20091')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.google.com/search' }
		]
	}
	else if (dtp=='20092')
	{
		dp = [                                         
			
			{ y: 1, label:   'http://search.yahoo.com/search' }
		]
	}
	else if (dtp=='20093')
	{
		dp = [                                         
			{ y: 1, label:  'http://search.live.com/' }
		]
	}
	else if (dtp=='20094')
	{
		dp = [                                         
			
			{ y: 2, label:   'www.cs.cmu.edu'}
		]
	}
	else if (dtp=='20095')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.csie.ntu.edu.tw/~cjlin/libsvm' }
		]
	}
	else if (dtp=='20096')
	{
		dp = [                                         
			{ y: 1, label:  'http://ckipsvr.iis.sinica.edu.tw/:2009' },
			{ y: 1, label:  'http://elearning.ling.sinica.edu.tw/CWordframe.html:2009' }
		]
	}
	else if (dtp=='20097')
	{
		dp = [                                         
			{ y: 1, label:  'http://edu2.wordpedia.com/taipei_sa/:2009' }
		]
	}
	else if (dtp=='20098')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://terms.nict.gov.tw/:2009' }
		]
	}
	else if (dtp=='20099')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.tipo.gov.tw/ch/:2009' }
		]
	}
	else if (dtp=='200910')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://crfpp.sourceforge.net/' }
		]
	}
	else if (dtp=='200911')
	{
		dp = [                                         
			
			
			{ y: 1, label:  'http://www.praat.org/' }
		]
	}
	else if (dtp=='200912')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.itl.nist.gov/iad/mig/tests/lre/' }
		]
	}
	else if (dtp=='200913')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://nico.nikkostrom.com/' }
		]
	}else if (dtp=='200914')
	{
		dp = [                                         
			{ y: 1, label:  'http://guhy.csie.ntust.edu.tw/dcc/vt.html' }
		]
	}
	else if (dtp=='200915')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cs.nccu.edu.tw/~chaolin/papers/rocling_huang.pdf' }
		]
	}else if (dtp=='200916')
	{
		dp = [                                         
			{ y: 2, label:   'nlp.stanford.edu' }
		]
	}
	else if (dtp=='200917')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://bulba.sdsu.edu/jeanette/thesis/PennTags.html' }
		]
	}
	else if (dtp=='200918')
	{
		dp = [                                         
			{ y: 2, label:  'www.quiz-zone.co.uk' }
		]
	}
	else if (dtp=='200919')
	{
		dp = [                                         
			{ y: 2, label:  'htk.eng.cam.ac.uk' }
		]
	}
	else if (dtp=='20100')
	{
		dp = [                                         
			{ y: 1, label:  'http://search.msn.com/' }
		]
	}
	else if (dtp=='20101')
	{
		dp = [                                         
			{ y: 2, label:   'www.speech.sri.com'}
		]
	}
	else if (dtp=='20102')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.google.com/' },
			{ y: 1, label:  'http://translate.google.com.tw/#zh-CN|zh-CN|' }
		]
	}
	else if (dtp=='20103')
	{
		dp = [                                         
			
			{ y: 3, label:  'htk.eng.cam.ac.uk' }
		]
	}
	else if (dtp=='20104')
	{
		dp = [                                         
			
			{ y: 2, label:  'www.ceec.edu.tw' }
		]
	}
	else if (dtp=='20105')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.taiwantestcentral.com/WordList/' }
		]
	}else if (dtp=='20106')
	{
		dp = [                                         
			
			{ y: 2, label:  'en.wikipedia.org' }
		]
	}
	else if (dtp=='20107')
	{
		dp = [                                         
			{ y: 1, label:   'http://bulba.sdsu.edu/jeanette/thesis/PennTags.html' }
		]
	}
	else if (dtp=='20108')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.harrymclaughlin.com/SMOG.htm' }
		]
	}
	else if (dtp=='20109')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.speech.cs.cmu.edu/cgi-bin/cmudict' }
		]
	}
	else if (dtp=='201010')
	{
		dp = [                                         
			{ y: 3, label:   'nlp.stanford.edu' },
			{ y: 1, label:   'http://www.stanford.edu/~alecmgo/papers/TwitterDistantSupervision09.pdf' }
		]
	}
	else if (dtp=='201011')
	{
		dp = [                                         
			{ y: 1, label:  'http://translate.google.com.tw/#zh-CN|zh-CN|' }
		]
	}
	else if (dtp=='201012')
	{
		dp = [                                         
			{ y: 1, label:  'http://office.microsoft.com/zh-tw/' }
		]
	}
	else if (dtp=='201013')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.winperturn.com.tw/' }
		]
	}
	else if (dtp=='201014')
	{
		dp = [                                         
		
			{ y: 1, label: 'http://tongwen.openfoundry.org/'}
		]
	}
	else if (dtp=='201015')
	{
		dp = [                                         
			{ y: 2, label:   'www.nlp.org.cn' }
		]
	}
	else if (dtp=='201016')
	{
		dp = [                                         
			{ y: 2, label:  'www.plurk.com' }
		]
	}
	else if (dtp=='201017')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://tw.developer.yahoo.com/cas/' }
		]
	}
	else if (dtp=='201018')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.ldc.upenn.edu' },
			{ y: 1, label:  'http://acl.ldc.upenn.edu/P/P02/P02-1053.pdf' }
		]
	}
	else if (dtp=='201019')
	{
		dp = [                                         
			{ y: 1, label:  'http://crfpp.sourceforge.net/' },
			{ y: 1, label:  'http://sp-tk.sourceforge.net/' }
		]
	}
	else if (dtp=='20110')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.speech.sri.com/projects/srilm/'}
		]
	}
	else if (dtp=='20111')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://humanum.arts.cuhk.edu.hk/Lexis/Lindict/' }
		]
	}
	else if (dtp=='20112')
	{
		dp = [                                         
			{ y: 1, label: 'http://nltk.org/book.html' }
		]
	}
	else if (dtp=='20113')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://startdict.sourceforge.net/Dictionaries_zh_TW.php'}
		]
	}
	else if (dtp=='20114')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://ajds.nsysu.edu.tw/learn/dict/' }
		]
	}else if (dtp=='20115')
	{
		dp = [                                         
			{ y: 1, label:  'http://elearning.ling.sinica.edu.tw/c_help.html' },
			{ y: 1, label:  'http://godel.iis.sinica.edu.tw/CKIP/20corpus.htm' },
			{ y: 1, label:  'http://ehownet.iis.sinica.edu.tw'},
			{ y: 1, label:  'http://ckipsvr.iis.sinica.edu.tw/' }
		]
	}
	else if (dtp=='20116')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://edu2.wordpedia.com/taipei_sa/' }
		]
	}
	else if (dtp=='20117')
	{
		dp = [                                         
			{ y: 1, label:  'http://terms.nict.gov.tw/download_main.php' }
		]
	}
	else if (dtp=='20118')
	{
		dp = [                                         
			{ y: 3, label:  'zh.wikipedia.org' }
		]
	}
	else if (dtp=='20119')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.ris.gov.tw/ch4/0940531-2.doc' }
		]
	}else if (dtp=='201110')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.greatchinese.com/surname/surname.htm' }
		]
	}
	else if (dtp=='201111')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://download.wikimedia.org/jawiki/20090124' }
		]
	}
	else if (dtp=='201112')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://kanji.zinbun.kyoto-u.ac.jp/~yasuoka/ftp/CJKtable/UniVariants.Z' }
		]
	}
	else if (dtp=='201113')
	{
		dp = [                                         
			{ y: 1, label:  'http://dict.revised.moe.edu.tw/cgi-bin/newDict/dict.sh?idx=dict.idx&cond=%E0T&pieceLen=50&' }
		]
	}
	else if (dtp=='201114')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.itl.nist.gov/iaui/894.02/related_projects/muc/index.html' }
		]
	}
	else if (dtp=='201115')
	{
		dp = [                                         
			{ y: 1, label:  'http://ling.nthu.edu.tw/faculty/thlin/pdf/Shen_Lin.pdf' }
		]
	}
	else if (dtp=='201116')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.cs.waikato.ac.nz/ml/weka/' }
		]
	}
	else if (dtp=='201117')
	{
		dp = [                                         
			{ y: 1, label:   'http://hanzi.ncu.edu.tw/picpho/pronrule.php' }
		]
	}
	else if (dtp=='201118')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.R-project.org' }
		]
	}
	else if (dtp=='201119')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.linguistics.ucsb.edu/faculty/stgries/teaching/groningen/coll.analysis.r' }
		]
	}
	else if (dtp=='20120')
	{
		dp = [                                         
			
			{ y: 1, label:   'http://wuxizazhi.cnki.net/Article/YYYY602.004.html' }
		]
	}
	else if (dtp=='20121')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://guhy.csie.ntust.edu.tw/VCLMR/LMR.html' }
		]
	}
	else if (dtp=='20122')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.Americancorpus.Org' }
		]
	}
	else if (dtp=='20123')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.facebook.com/' }
		]
	}
	else if (dtp=='20124')
	{
		dp = [                                         
			{ y: 1, label:  'http://ckipsvr.iis.sinica.edu.tw/' },
			{ y: 2, label:  'db1x.sinica.edu.tw' },
			{ y: 1, label:  'http://ckip.iis.sinica.edu.tw/taxonomy/' },
			{ y: 1, label:  'http://ehownet.iis.sinica.edu.tw/' }
		]
	}
	else if (dtp=='20125')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.r-project.org/' }
		]
	}
	else if (dtp=='20126')
	{
		dp = [                                         
			{ y: 1, label:   'http://www.ethnologue.com/14/show_language.asp?code=CFR' }
		]
	}
	else if (dtp=='20127')
	{
		dp = [                                         
			{ y: 3, label:  'en.wikipedia.org' },
			{ y: 1, label:  'http://wikipedia.org' },
			{ y: 1, label:  'http://zh.wikipedia.org/wiki/' }
		]
	}
	else if (dtp=='20128')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.seventhstring.com/' }
		]
	}
	else if (dtp=='20129')
	{
		dp = [                                         
			{ y: 2, label:  '140.111.34.54' }
		]
	}
	else if (dtp=='201210')
	{
		dp = [                                         
			{ y: 1, label:  'http://news.pts.org.tw/' }
		]
	}
	else if (dtp=='201211')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.csie.ntu.edu.tw/~cjlin/libsvm/'}
		]
	}
	else if (dtp=='201212')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.jrf.org.tw/newjrf/RTE/myform_detail2.asp?id=1289' }
		]
	}
	else if (dtp=='201213')
	{
		dp = [                                         
			{ y: 3, label:  'www.statmt.org' }
		]
	}
	else if (dtp=='201214')
	{
		dp = [                                         
			{ y: 2, label:  'lucene.apache.org' }
		]
	}
	else if (dtp=='201215')
	{
		dp = [                                         
			{ y: 1, label:  'http://translate.google.com' }
		]
	}
	else if (dtp=='201216')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://dl.dropbox.com/u/33089565/ryEx007_3.html' }
		]
	}
	else if (dtp=='201217')
	{
		dp = [                                         
			{ y: 1, label: 'http://eniac.cs.qc.cuny.edu/andrew/autobi/index.html' }
		]
	}
	else if (dtp=='20130')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://haydn.isi.edu/ROUGE/' }
		]
	}
	else if (dtp=='20131')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.speech.sri.com/projects/srilm/' }
		]
	}
	else if (dtp=='20132')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.aclclp.org.tw/doc/eat' }
		]
	}
	else if (dtp=='20133')
	{
		dp = [                                         
			{ y: 1, label:  'http://guhy.csie.ntust.edu.tw/vcHeqLmr/' }
		]
	}
	else if (dtp=='20134')
	{
		dp = [                                         
			{ y: 5, label:  'nlp.stanford.edu' },
			{ y: 1, label:  'http://www-nlp.stanford.edu/software/CRF-NER.shtml' }
		]
	}
	else if (dtp=='20135')
	{
		dp = [                                         
			{ y: 1, label:  'http://research.nii.ac.jp/ntcir/index-en.html' }
		]
	}
	else if (dtp=='20136')
	{
		dp = [                                         
			{ y: 1, label:  'http://research.microsoft.com/en-us/downloads/607d14d9-20cd-47e3-85bc-a2f65cd28042/' }
		]
	}
	else if (dtp=='20137')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.cs.waikato.ac.nz/ml/weka/' }
		]
	}
	else if (dtp=='20138')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.deadline.com/hollywood' }
		]
	}
	else if (dtp=='20139')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.cs.uic.edu/liub/' }
		]
	}
	else if (dtp=='201310')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://webdocs.cs.ualberta.ca/~lindek/minipar.htm' }
		]
	}
	else if (dtp=='201311')
	{
		dp = [                                         
			{ y: 3, label:  'en.wikipedia.org' }
		]
	}
	else if (dtp=='201312')
	{
		dp = [                                         
			{ y: 1, label:  'https://dev.twitter.com/docs/api' }
		]
	}
	else if (dtp=='201313')
	{
		dp = [                                         
			{ y: 1, label:  'https://code.google.com/p/google-api-spelling-java/' }
		]
	}
	else if (dtp=='201314')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.cs.cornell.edu/people/pabo/movie-review-data/' }
		]
	}
	else if (dtp=='201315')
	{
		dp = [                                         
			{ y: 1, label:  'http://cdp.sinica.edu.tw/cdphanzi/' },
			{ y: 1, label:  'http://mmc.sinica.edu.tw/resources_c_01.htm' }
		]
	}
	else if (dtp=='201316')
	{
		dp = [                                         
			{ y: 1, label:  'http://udndata.com/ndapp/Detail' }
		]
	}
	else if (dtp=='201317')
	{
		dp = [                                         
			{ y: 1, label:  'http://en.wiktionary.org/wiki/hot' }
		]
	}
	else if (dtp=='201318')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.thefreedictionary.com/hot' }
		]
	}
	else if (dtp=='201319')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://www.keenage.com/html/c_index.html' }
		]
	}
	else if (dtp=='20140')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://haydn.isi.edu/ROUGE/' }
		]
	}
	else if (dtp=='20141')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.nist.gov/speech/tests/spk/2005/sre-05_evalplan-v6.pdf' }
		]
	}
	else if (dtp=='20142')
	{
		dp = [                                         
			{ y: 1, label:  'http://guhy.csie.ntust.edu.tw/hmmhalf/' }
		]
	}
	else if (dtp=='20143')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://ecfa.speaking.tw/imho.php' }
		]
	}
	else if (dtp=='20144')
	{
		dp = [                                         
			{ y: 1, label: 'http://ufal.mff.cuni.cz/pdt3.0/' }
		]
	}
	else if (dtp=='20145')
	{
		dp = [                                         
			
			{ y: 2, label:   'www.sketchengine.co.uk' }
		]
	}
	else if (dtp=='20146')
	{
		dp = [                                         
			
			{ y: 2, label:  'wordsketch.ling.sinica.edu.tw' }
		]
	}
	else if (dtp=='20147')
	{
		dp = [                                         
			
			{ y: 2, label:   'nlp.stanford.edu' }
		]
	}
	else if (dtp=='20148')
	{
		dp = [                                         
			{ y: 1, label:  'http://lope.linguistics.ntu.edu.tw/cwn2' }
		]
	}
	else if (dtp=='20149')
	{
		dp = [                                         
			{ y: 3, label:  'github.com' },
			{ y: 1, label:  'https://pages.github.com/' }
		]
	}
	else if (dtp=='201410')
	{
		dp = [                                         
			{ y: 1, label:   'http://frankyang0529.github.io/gps-log/' },
			{ y: 1, label:   'http://chilijung.github.io/gps-path-view/' }
		]
	}
	else if (dtp=='201411')
	{
		dp = [                                         
			{ y: 1, label:  'http://code.google.com/p/tw-synonyms-chilin' },
			{ y: 1, label:  'https://play.google.com/store/apps/details?id=com.google.android.maps.mytracks' }
		]
	}
	else if (dtp=='201412')
	{
		dp = [                                         
			
			{ y: 1, label:  'https://foursquare.com/' }
		]
	}
	else if (dtp=='201413')
	{
		dp = [                                         
			
			{ y: 1, label:  'https://www.firebase.com/'}
		]
	}
	else if (dtp=='201414')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.openstreetmap.org/#map=5/51.509/-0.088' }
		]
	}
	else if (dtp=='201415')
	{
		dp = [                                         
			{ y: 1, label:  'http://leafletjs.com/' }
		]
	}
	else if (dtp=='201416')
	{
		dp = [                                         
			{ y: 1, label:  'http://dev.w3.org/geo/api/spec-source.html' },
			{ y: 1, label:  'http://www.w3.org/'}
		]
	}
	else if (dtp=='201417')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://phonegap.com/' }
		]
	}
	else if (dtp=='201418')
	{
		dp = [                                         
			{ y: 1, label:  'http://research.microsoft.com/apps/mobile/download.aspx?p=b16d359d-d164-469e-9fd4-' }
		]
	}
	else if (dtp=='201419')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.nike.com/tw/zh_tw/c/running' }
		]
	}
	else if (dtp=='20150')
	{
		dp = [                                         
			{ y: 1, label:  'http://dx.doi.org/10.1162/089120102762671936' }
			]
	}
	else if (dtp=='20151')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://dl.acm.org/citation.cfm?id=1599081.1599209' }
		]
	}
	else if (dtp=='20152')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.speech.sri.com/projects/srilm/' }
		]
	}
	else if (dtp=='20153')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.hakka.gov.tw/dl.asp?fileName=1521131271.pdf' },
			{ y: 1, label:  'http://elearning.hakka.gov.tw/Kaga/Kaga_QDMiddle.aspx' }
		]
	}
	else if (dtp=='20154')
	{
		dp = [                                         
			{ y: 1, label:  'http://openvanilla.org/' }
			]
	}
	else if (dtp=='20155')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://office.microsoft.com/zhtw/help/HA010212138.aspx' }
		]
	}
	else if (dtp=='20156')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://ostube.tctes.ntpc.edu.tw/poetry/index.php?option=com_content&view=article&id=51&Itemid=63' }
		]
	}
	else if (dtp=='20157')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.darpa.mil/Our_Work/I2O/Programs/Big_Mechanism.aspx' }
			]
	}
	else if (dtp=='20158')
	{
		dp = [                                         
			{ y: 3, label:  'zh.wikipedia.org' }
		]
	}
	else if (dtp=='20159')
	{
		dp = [                                         
			{ y: 2, label: 'www.csie.ntu.edu.tw' },
			{ y: 1, label: 'http://lope.linguistics.ntu.edu.tw/cwn/' }
		]
	}else if (dtp=='201510')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://tool.cohmetrix.com/' }
		]
	}
	else if (dtp=='201511')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://wordnet.princeton.edu/' }
		]
	}
	else if (dtp=='201512')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.chinesereadability.net/CRIE/?LANG=CHT' }
		]
	}
	else if (dtp=='201513')
	{
		dp = [                                         
			{ y: 1, label:  'https://code.google.com/p/word2vec/' },
			{ y: 1, label:  'http://translate.google.com/translate_tts' },
			{ y: 1, label:  'http://translate.google.com.tw/translate_a/single' }
		]
	}
	else if (dtp=='201514')
	{
		dp = [                                         
			{ y: 1, label:  'http://book.moc.gov.tw/book/' }
		]
	}
	else if (dtp=='201515')
	{
		dp = [                                         
			{ y: 1, label:  'http://citeseerx.ist.psu.edu/about/site' }
		]
	}
	else if (dtp=='201516')
	{
		dp = [                                         
			{ y: 1, label:  'http://english.people.com.cn/90001/90782/90872/7112508.html' }
		]
	}
	else if (dtp=='201517')
	{
		dp = [                                         
			{ y: 1, label: 'http://scikit-learn.org/dev/index.html' }
		]
	}else if (dtp=='201518')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://nlp.stanford.edu/software/CRF-NER.shtml' }
		]
	}
	else if (dtp=='201519')
	{
		dp = [                                         
			{ y: 2, label:  'www.iyp.com.tw' }
		]
	}
	else if (dtp=='20160')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://haydn.isi.edu/ROUGE/' }
		]
	}
	else if (dtp=='20161')
	{
		dp = [                                         
			{ y: 3, label:  'asbc.iis.sinica.edu.tw' },
			{ y: 1, label:  'http://ckipsvr.iis.sinica.edu.tw/' },
			{ y: 1, label:  'http://xiaoxue.iis.sinica.edu.tw/download/WSL_TPS_IME.htm' }
		]
	}
	else if (dtp=='20162')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://htk.eng.cam.ac.uk/' }
		]
	}
	else if (dtp=='20163')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.aclclp.org.tw/use_mat_c.php' }
		]
	}
	else if (dtp=='20164')
	{
		dp = [                                         
			
			{ y: 2, label:  'lopen.linguistics.ntu.edu.tw' },
			{ y: 2, label:  'lope.linguistics.ntu.edu.tw' }
		]
	}
	else if (dtp=='20165')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://evchk.wikia.com/wiki/%E8%AA%8D%E7%9C%9F%E4%BD%A0%E5%B0%B' }
		]
	}
	else if (dtp=='20166')
	{
		dp = [                                         
			{ y: 1, label: 'http://disrusi.pixnet.net/blog/post/81929892-%E3%80%8A%E8%AA%8D%E7%9C%9' }
		]
	}
	else if (dtp=='20167')
	{
		dp = [                                         
			{ y: 1, label:  'http://dict.revised.moe.edu.tw/cgi-' },
			{ y: 1, label:  'http://depart.moe.edu.tw/ED2400/cp.aspx?n=BB47AA61331DDAC8' }
		]
	}
	else if (dtp=='20168')
	{
		dp = [                                         
			{ y: 1, label:  'http://lib.ctcn.edu.tw/chtdict/content.aspx?TermId=49278' }
		]
	}
	else if (dtp=='20169')
	{
		dp = [                                         
			
			{ y: 2, label:  'chinese.cdict.info' }
		]
	}
	else if (dtp=='201610')
	{
		dp = [                                         
			{ y: 1, label:  'https://wordnet.princeton.edu/' }
		]
	}
	else if (dtp=='201611')
	{
		dp = [                                         
			{ y: 1, label:  'http://crowdtruth.org/' }
		]
	}
	else if (dtp=='201612')
	{
		dp = [                                         
			{ y: 2, label:  'www.senseval.org' }
		]
	}
	else if (dtp=='201613')
	{
		dp = [                                         
			{ y: 1, label:  'http://torch.ch' }
		]
	}
	else if (dtp=='201614')
	{
		dp = [                                         
			{ y: 6, label:  'github.com' }
		]
	}
	else if (dtp=='201615')
	{
		dp = [                                         
			{ y: 1, label:  'http://udndata.com/' }
		]
	}
	else if (dtp=='201616')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.ford.com/technology/sync/' }
		]
	}
	else if (dtp=='201617')
	{
		dp = [                                         
			{ y: 1, label: 'http://voip.about.com/od/voipbasics/a/MOS.htm' }
		]
	}
	else if (dtp=='201618')
	{
		dp = [                                         
			{ y: 2, label:   'code.google.com' },
			{ y: 1, label:   'https://translate.google.com/' },
			{ y: 1, label:   'https://play.google.com/store/apps/details?id=fr.magistry.taigime' }
		]
	}
	else if (dtp=='201619')
	{
		dp = [                                         
			{ y: 1, label: 'http://gibbslda.sourceforge.net/' }
		]
	}
	
	else if (dtp=='20170')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.cs.tut.fi/sgn/arg/dcase2016/challenge' }
		]
	}
	else if (dtp=='20171')
	{
		dp = [                                         
			
			{ y: 1, label:  'https://archive.org/details/TaiwaneseSpeechNotepadenglishVersion' }
		]
	}
	else if (dtp=='20172')
	{
		dp = [                                         
			{ y: 2, label:  'elearning.hakka.gov.tw' }
		]
	}
	else if (dtp=='20173')
	{
		dp = [                                         
			{ y: 2, label: 'doi.org' }
		]
	}
	else if (dtp=='20174')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.laurenceanthony.net/' }
		]
	}
	else if (dtp=='20175')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://slideplayer.com/slide/6639448/' }
		]
	}
	else if (dtp=='20176')
	{
		dp = [                                         
			
			{ y: 1, label:   'http://colah.github.io/posts/2015-08-Understanding-' }
		]
	}
	else if (dtp=='20177')
	{
		dp = [                                         
			{ y: 1, label:  'http://hts.sp.nitech.ac.jp' }
		]
	}
	else if (dtp=='20178')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://nlp.stanford.edu/software/lex-parser.shtml' }
		]
	}
	else if (dtp=='20179')
	{
		dp = [                                         
			
			{ y: 1, label:  'https://github.com/cmusphinx/g2p-seq2seq' }
		]
	}
	else if (dtp=='201710')
	{
		dp = [                                         
			{ y: 1, label:  'http://ehownet.iis.sinica.edu.tw' }
		]
	}
	else if (dtp=='20180')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.dang.idv.tw/memo.htm' }
		]
	}
	else if (dtp=='20181')
	{
		dp = [                                         
			
			{ y: 3, label:  'arxiv.org' }
		]
	}
	else if (dtp=='20182')
	{
		dp = [                                         
			
			{ y: 1, label:  'https://www.nist.gov/itl/iad/mig/speaker-recognition-evaluation-2010' }
		]
	}
	else if (dtp=='20183')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.aclclp.org.tw/use_conll_c.php' }
		]
	}
	else if (dtp=='20184')
	{
		dp = [                                         
			{ y: 1, label: 'https://www.nltk.org/' }
		]
	}
	else if (dtp=='20185')
	{
		dp = [                                         
			
			{ y: 1, label:  'https://keras.io' }
		]
	}
	else if (dtp=='20186')
	{
		dp = [                                         
			 
			{ y: 1, label:  'http://www.microsoft.com/msj/1198/tapi3/tapi3.aspx' }
		]
	}
	else if (dtp=='20187')
	{
		dp = [                                         
			{ y: 1, label:  'http://elearning.hakka.gov.tw/ver2015/kaga/dontseehakkafont.aspx,[:' }
		]
	}
	else if (dtp=='20188')
	{
		dp = [                                         
			{ y: 1, label:  'http://ixa2.si.ehu.es/stswiki/index.php/' }
		]
	}
	else if (dtp=='20189')
	{
		dp = [                                         
			
			{ y: 2, label:  'www.rfes.tn.edu.tw' }
		]
	}
	else if (dtp=='201810')
	{
		dp = [                                         
			{ y: 3, label:  'www.youtube.com' }
		]
	}
	else if (dtp=='201811')
	{
		dp = [                                         
			{ y: 1, label:  'https://www.cs.waikato.ac.nz/ml/weka/' }
		]
	}
	else if (dtp=='201812')
	{
		dp = [                                         
			
			{ y: 1, label:  'https://taku910.github.io/crfpp/' }
		]
	}
	else if (dtp=='201813')
	{
		dp = [                                         
			{ y: 2, label:  'ai-clerk.com' }
		]
	}
	else if (dtp=='201814')
	{
		dp = [                                         
			{ y: 1, label:  'https://www.inside.com.tw/2011/08/08/kakaku-com-introduction' }
		]
	}
	else if (dtp=='201815')
	{
		dp = [                                         
			
			{ y: 1, label:  'https://shopbot.ebay.com/' }
		]
	}
	else if (dtp=='201816')
	{
		dp = [                                         
			{ y: 2, label:  'github.com' }
		]
	}
	else if (dtp=='201817')
	{
		dp = [                                         
			{ y: 1, label:  'https://en.wikipedia.org/wiki/Computing_Machinery_and_Intelligence' }
		]
	}
	else if (dtp=='201818')
	{
		dp = [                                         
			{ y: 5, label:  'www.mathworks.com' }
		]
	}
	else if (dtp=='201819')
	{
		dp = [                                         
			{ y: 1, label:  'http://dx.doi.org/10.1109/ICCIA.2010.6141614' }
		]
	}
	
	else
	{
		dp = [                                         
			{ y: 2, label: 'trec.nist.gov'}
			
		]
	}
	
	
	
	
	
	
	
	
	
	
	
	var chart = new CanvasJS.Chart(res, {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	height: 400,
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