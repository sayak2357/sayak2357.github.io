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
		name: "CONLL: Long Papers",
		dataPoints: [
		
		
			{ y: 0, x: new Date(1997,0) },
			{ y: 0, x: new Date(1998,0) },
			{ y: 0, x: new Date(1999,0) },
			{ y: 0, x: new Date(2000,0) },
			{ y: 0, x: new Date(2001,0) },
			{ y: 0, x: new Date(2002,0) },
			{ y: 0, x: new Date(2003,0) },
			{ y: 0, x: new Date(2004,0) },
			{ y: 0, x: new Date(2005,0) },
			{ y: 1, x: new Date(2006,0) },
			{ y: 63, x: new Date(2007,0) },
			{ y: 1, x: new Date(2008,0) },
			{ y: 0, x: new Date(2009,0) },
			{ y: 14, x: new Date(2010,0) },
			{ y: 0, x: new Date(2011,0) },
			{ y: 133, x: new Date(2012,0) },
			{ y: 15, x: new Date(2013,0) },
			{ y: 15, x: new Date(2014,0) },
			{ y: 26, x: new Date(2015,0) },
			{ y: 26, x: new Date(2016,0) },
			{ y: 41, x: new Date(2017,0) },
			{ y: 53, x: new Date(2018,0) }
				
				
		]
		},
		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Short Papers",
			color: "#e3f702",
			dataPoints: [
			
			
			
			{ y: 16, x: new Date(1997,0) },
			{ y: 42, x: new Date(1998,0) },
			{ y: 8, x: new Date(1999,0) },
			{ y: 44, x: new Date(2000,0) },
			{ y: 26, x: new Date(2001,0) },
			{ y: 35, x: new Date(2002,0) },
			{ y: 35, x: new Date(2003,0) },
			{ y: 24, x: new Date(2004,0) },
			{ y: 39, x: new Date(2005,0) },
			{ y: 37, x: new Date(2006,0) },
			{ y: 68, x: new Date(2007,0) },
			{ y: 39, x: new Date(2008,0) },
			{ y: 27, x: new Date(2009,0) },
			{ y: 15, x: new Date(2010,0) },
			{ y: 29, x: new Date(2011,0) },
			{ y: 6, x: new Date(2012,0) },
			{ y: 10, x: new Date(2013,0) },
			{ y: 5, x: new Date(2014,0) },
			{ y: 12, x: new Date(2015,0) },
			{ y: 5, x: new Date(2016,0) },
			{ y: 4, x: new Date(2017,0) },
			{ y: 3, x: new Date(2018,0) }
			]
		},

		]
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
		name: "CONLL: Old Authors",
		dataPoints: [
		
		
				{ y: 0.0, x: new Date(1997,0) },
				{ y: 0.06557377049180328, x: new Date(1998,0) },
				{ y: 0.35714285714285715, x: new Date(1999,0) },
				{ y: 0.12658227848101267, x: new Date(2000,0) },
				{ y: 0.2608695652173913, x: new Date(2001,0) },
				{ y: 0.203125, x: new Date(2002,0) },
				{ y: 0.39705882352941174, x: new Date(2003,0) },
				{ y: 0.3076923076923077, x: new Date(2004,0) },
				{ y: 0.2549019607843137, x: new Date(2005,0) },
				{ y: 0.3595505617977528, x: new Date(2006,0) },
				{ y: 0.2168284789644013, x: new Date(2007,0) },
				{ y: 0.3220338983050847, x: new Date(2008,0) },
				{ y: 0.4528301886792453, x: new Date(2009,0) },
				{ y: 0.32857142857142857, x: new Date(2010,0) },
				{ y: 0.3783783783783784, x: new Date(2011,0) },
				{ y: 0.24274406332453827, x: new Date(2012,0) },
				{ y: 0.3424657534246575, x: new Date(2013,0) },
				{ y: 0.49056603773584906, x: new Date(2014,0) },
				{ y: 0.40350877192982454, x: new Date(2015,0) },
				{ y: 0.2647058823529412, x: new Date(2016,0) },
				{ y: 0.24725274725274726, x: new Date(2017,0) },
				{ y: 0.15767634854771784, x: new Date(2018,0) }
				
				
		]
		},
		
		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "New Authors",
			color: "#f70202",
			dataPoints: [
			
			
			
				{ y: 1.0, x: new Date(1997,0) },
				{ y: 0.9344262295081968, x: new Date(1998,0) },
				{ y: 0.6428571428571429, x: new Date(1999,0) },
				{ y: 0.8734177215189873, x: new Date(2000,0) },
				{ y: 0.7391304347826086, x: new Date(2001,0) },
				{ y: 0.796875, x: new Date(2002,0) },
				{ y: 0.6029411764705882, x: new Date(2003,0) },
				{ y: 0.6923076923076923, x: new Date(2004,0) },
				{ y: 0.7450980392156863, x: new Date(2005,0) },
				{ y: 0.6404494382022472, x: new Date(2006,0) },
				{ y: 0.7831715210355987, x: new Date(2007,0) },
				{ y: 0.6779661016949152, x: new Date(2008,0) },
				{ y: 0.5471698113207547, x: new Date(2009,0) },
				{ y: 0.6714285714285714, x: new Date(2010,0) },
				{ y: 0.6216216216216216, x: new Date(2011,0) },
				{ y: 0.7572559366754618, x: new Date(2012,0) },
				{ y: 0.6575342465753424, x: new Date(2013,0) },
				{ y: 0.5094339622641509, x: new Date(2014,0) },
				{ y: 0.5964912280701754, x: new Date(2015,0) },
				{ y: 0.7352941176470589, x: new Date(2016,0) },
				{ y: 0.7527472527472527, x: new Date(2017,0) },
				{ y: 0.8423236514522822, x: new Date(2018,0) }
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
		name: "CONLL: Avg. number of Papers per Author",
		dataPoints: [
			
			
			
			{ y:0.48484848484848486, x: new Date(1997,0) },
			{ y:0.56, x: new Date(1998,0) },
			{ y:0.5714285714285714, x: new Date(1999,0) },
			{ y:0.5057471264367817, x: new Date(2000,0) },
			{ y:0.48148148148148145, x: new Date(2001,0) },
			{ y:0.4861111111111111, x: new Date(2002,0) },
			{ y:0.42168674698795183, x: new Date(2003,0) },
			{ y:0.4067796610169492, x: new Date(2004,0) },
			{ y:0.3577981651376147, x: new Date(2005,0) },
			{ y:0.41304347826086957, x: new Date(2006,0) },
			{ y:0.36797752808988765, x: new Date(2007,0) },
			{ y:0.32, x: new Date(2008,0) },
			{ y:0.42857142857142855, x: new Date(2009,0) },
			{ y:0.3670886075949367, x: new Date(2010,0) },
			{ y:0.38666666666666666, x: new Date(2011,0) },
			{ y:0.31519274376417233, x: new Date(2012,0) },
			{ y:0.3333333333333333, x: new Date(2013,0) },
			{ y:0.35714285714285715, x: new Date(2014,0) },
			{ y:0.31666666666666665, x: new Date(2015,0) },
			{ y:0.29523809523809524, x: new Date(2016,0) },
			{ y:0.23316062176165803, x: new Date(2017,0) },
			{ y:0.22580645161290322, x: new Date(2018,0) }
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
		name: "CONLL: Avg. number of Authors per Paper per Year",
		dataPoints: [
			
			
			
			{ y:2.0625, x: new Date(1997,0) },
			{ y:1.7857142857142858, x: new Date(1998,0) },
			{ y:1.75, x: new Date(1999,0) },
			{ y:1.9772727272727273, x: new Date(2000,0) },
			{ y:2.076923076923077, x: new Date(2001,0) },
			{ y:2.057142857142857, x: new Date(2002,0) },
			{ y:2.3714285714285714, x: new Date(2003,0) },
			{ y:2.4583333333333335, x: new Date(2004,0) },
			{ y:2.7948717948717947, x: new Date(2005,0) },
			{ y:2.4210526315789473, x: new Date(2006,0) },
			{ y:2.717557251908397, x: new Date(2007,0) },
			{ y:3.125, x: new Date(2008,0) },
			{ y:2.3333333333333335, x: new Date(2009,0) },
			{ y:2.7241379310344827, x: new Date(2010,0) },
			{ y:2.586206896551724, x: new Date(2011,0) },
			{ y:3.172661870503597, x: new Date(2012,0) },
			{ y:3.0, x: new Date(2013,0) },
			{ y:2.8, x: new Date(2014,0) },
			{ y:3.1578947368421053, x: new Date(2015,0) },
			{ y:3.3870967741935485, x: new Date(2016,0) },
			{ y:4.288888888888889, x: new Date(2017,0) },
			{ y:4.428571428571429, x: new Date(2018,0) }
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
		name: "CONLL: Long Papers",
		dataPoints: [
			
			
			
			{ y:0, x: new Date(1997,0) },
			{ y:0, x: new Date(1998,0) },
			{ y:0, x: new Date(1999,0) },
			{ y:0, x: new Date(2000,0) },
			{ y:0, x: new Date(2001,0) },
			{ y:0, x: new Date(2002,0) },
			{ y:0, x: new Date(2003,0) },
			{ y:0, x: new Date(2004,0) },
			{ y:0, x: new Date(2005,0) },
			{ y:62.0, x: new Date(2006,0) },
			{ y:26.19047619047619, x: new Date(2007,0) },
			{ y:40.0, x: new Date(2008,0) },
			{ y:0, x: new Date(2009,0) },
			{ y:32.785714285714285, x: new Date(2010,0) },
			{ y:0, x: new Date(2011,0) },
			{ y:32.42857142857143, x: new Date(2012,0) },
			{ y:33.06666666666667, x: new Date(2013,0) },
			{ y:31.466666666666665, x: new Date(2014,0) },
			{ y:41.76923076923077, x: new Date(2015,0) },
			{ y:33.73076923076923, x: new Date(2016,0) },
			{ y:42.48780487804878, x: new Date(2017,0) },
			{ y:42.41509433962264, x: new Date(2018,0) }
		]
		},


		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Short Papers",
			color: "#C00C0C",
			dataPoints: [
			
			
			
			
			
			{ y:4.75, x: new Date(1997,0) },
			{ y:9.142857142857142, x: new Date(1998,0) },
			{ y:2.625, x: new Date(1999,0) },
			{ y:8.068181818181818, x: new Date(2000,0) },
			{ y:8.192307692307692, x: new Date(2001,0) },
			{ y:10.028571428571428, x: new Date(2002,0) },
			{ y:19.37142857142857, x: new Date(2003,0) },
			{ y:34.875, x: new Date(2004,0) },
			{ y:17.025641025641026, x: new Date(2005,0) },
			{ y:14.18918918918919, x: new Date(2006,0) },
			{ y:20.808823529411764, x: new Date(2007,0) },
			{ y:14.35897435897436, x: new Date(2008,0) },
			{ y:23.14814814814815, x: new Date(2009,0) },
			{ y:17.333333333333332, x: new Date(2010,0) },
			{ y:25.103448275862068, x: new Date(2011,0) },
			{ y:25.166666666666668, x: new Date(2012,0) },
			{ y:22.8, x: new Date(2013,0) },
			{ y:23.4, x: new Date(2014,0) },
			{ y:19.666666666666668, x: new Date(2015,0) },
			{ y:27.2, x: new Date(2016,0) },
			{ y:13.5, x: new Date(2017,0) },
			{ y:24.666666666666668, x: new Date(2018,0) }
			
			
			
			
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
		name: "CONLL: URLs per Paper 1996-2018",
		dataPoints: [
			
			
			
			{ y:0.25, x: new Date(1997,0) },
			{ y:0.21428571428571427, x: new Date(1998,0) },
			{ y:1.125, x: new Date(1999,0) },
			{ y:1.1136363636363635, x: new Date(2000,0) },
			{ y:0.15384615384615385, x: new Date(2001,0) },
			{ y:0.4857142857142857, x: new Date(2002,0) },
			{ y:0.7428571428571429, x: new Date(2003,0) },
			{ y:1.4583333333333333, x: new Date(2004,0) },
			{ y:1.6666666666666667, x: new Date(2005,0) },
			{ y:1.0526315789473684, x: new Date(2006,0) },
			{ y:2.4580152671755724, x: new Date(2007,0) },
			{ y:3.325, x: new Date(2008,0) },
			{ y:1.8148148148148149, x: new Date(2009,0) },
			{ y:1.5862068965517242, x: new Date(2010,0) },
			{ y:1.5517241379310345, x: new Date(2011,0) },
			{ y:2.6402877697841727, x: new Date(2012,0) },
			{ y:2.44, x: new Date(2013,0) },
			{ y:2.95, x: new Date(2014,0) },
			{ y:3.473684210526316, x: new Date(2015,0) },
			{ y:3.129032258064516, x: new Date(2016,0) },
			{ y:9.533333333333333, x: new Date(2017,0) },
			{ y:3.0714285714285716, x: new Date(2018,0) }
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
		name: "CONLL : Avg. number of URLs in footnote per Paper per Year",
		dataPoints: [
			
			
			
			{ y:0.25, x: new Date(1997,0) },
			{ y:0.21428571428571427, x: new Date(1998,0) },
			{ y:1.125, x: new Date(1999,0) },
			{ y:1.1136363636363635, x: new Date(2000,0) },
			{ y:0.15384615384615385, x: new Date(2001,0) },
			{ y:0.4857142857142857, x: new Date(2002,0) },
			{ y:0.7428571428571429, x: new Date(2003,0) },
			{ y:1.4583333333333333, x: new Date(2004,0) },
			{ y:1.6666666666666667, x: new Date(2005,0) },
			{ y:1.0526315789473684, x: new Date(2006,0) },
			{ y:2.4580152671755724, x: new Date(2007,0) },
			{ y:3.325, x: new Date(2008,0) },
			{ y:1.8148148148148149, x: new Date(2009,0) },
			{ y:1.5862068965517242, x: new Date(2010,0) },
			{ y:1.5517241379310345, x: new Date(2011,0) },
			{ y:2.6402877697841727, x: new Date(2012,0) },
			{ y:2.44, x: new Date(2013,0) },
			{ y:2.95, x: new Date(2014,0) },
			{ y:3.473684210526316, x: new Date(2015,0) },
			{ y:3.129032258064516, x: new Date(2016,0) },
			{ y:9.533333333333333, x: new Date(2017,0) },
			{ y:3.0714285714285716, x: new Date(2018,0) }
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
		name: "CONLL : Avg. number of Tables per Paper per Year",
		dataPoints: [
			
			
			
			{ y:2.375, x: new Date(1997,0) },
			{ y:1.5714285714285714, x: new Date(1998,0) },
			{ y:3.0, x: new Date(1999,0) },
			{ y:2.272727272727273, x: new Date(2000,0) },
			{ y:1.56, x: new Date(2001,0) },
			{ y:1.5625, x: new Date(2002,0) },
			{ y:4.371428571428571, x: new Date(2003,0) },
			{ y:3.375, x: new Date(2004,0) },
			{ y:2.8205128205128207, x: new Date(2005,0) },
			{ y:3.3421052631578947, x: new Date(2006,0) },
			{ y:4.152671755725191, x: new Date(2007,0) },
			{ y:4.475, x: new Date(2008,0) },
			{ y:3.5925925925925926, x: new Date(2009,0) },
			{ y:3.185185185185185, x: new Date(2010,0) },
			{ y:3.6206896551724137, x: new Date(2011,0) },
			{ y:4.884892086330935, x: new Date(2012,0) },
			{ y:4.72, x: new Date(2013,0) },
			{ y:4.2, x: new Date(2014,0) },
			{ y:3.8947368421052633, x: new Date(2015,0) },
			{ y:4.516129032258065, x: new Date(2016,0) },
			{ y:5.181818181818182, x: new Date(2017,0) },
			{ y:5.160714285714286, x: new Date(2018,0) }
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
		name: "CONLL: Avg. number of Figures per Paper per Year",
		dataPoints: [
			
			
			
			{ y:3.5625, x: new Date(1997,0) },
			{ y:2.7142857142857144, x: new Date(1998,0) },
			{ y:2.0, x: new Date(1999,0) },
			{ y:1.4545454545454546, x: new Date(2000,0) },
			{ y:0.88, x: new Date(2001,0) },
			{ y:0.96875, x: new Date(2002,0) },
			{ y:2.0, x: new Date(2003,0) },
			{ y:1.7916666666666667, x: new Date(2004,0) },
			{ y:1.8205128205128205, x: new Date(2005,0) },
			{ y:1.394736842105263, x: new Date(2006,0) },
			{ y:3.015267175572519, x: new Date(2007,0) },
			{ y:2.025, x: new Date(2008,0) },
			{ y:2.4444444444444446, x: new Date(2009,0) },
			{ y:2.740740740740741, x: new Date(2010,0) },
			{ y:1.8620689655172413, x: new Date(2011,0) },
			{ y:3.3093525179856114, x: new Date(2012,0) },
			{ y:2.84, x: new Date(2013,0) },
			{ y:2.8, x: new Date(2014,0) },
			{ y:3.0526315789473686, x: new Date(2015,0) },
			{ y:3.5483870967741935, x: new Date(2016,0) },
			{ y:3.25, x: new Date(2017,0) },
			{ y:3.357142857142857, x: new Date(2018,0) }
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
		name: "CONLL : Most Popular primary URL domains & their Frequencies",
		legendText: "",
		dataPoints: [
			{ y:102,  label:'github.com'  },
			{ y:163,  label:'aclweb.org'  },
			{ y:39,  label:'creativecommons.org'  },
			{ y:33,  label:'nlp.stanford.edu'  },
			{ y:32,  label:'code.google.com'  },
			{ y:19,  label:'www.lsi.upc.edu'  },
			{ y:18,  label:'www.nist.gov'  },
			{ y:15,  label:'sourceforge.net'  },
			{ y:15,  label:'mallet.cs.umass.edu'  },
			{ y:15,  label:'www.statmt.org'  },
			{ y:14,  label:'chasen.org'  },
			{ y:14,  label:'www.csie.ntu.edu.tw'  },
			{ y:13,  label:'en.wikipedia.org'  },
			{ y:12,  label:'arxiv.org'  },
			{ y:11,  label:'svmlight.joachims.org'  },
			{ y:11,  label:'w3.msi.vxu.se'  },
			{ y:10,  label:'ilk.uvt.nl'  },
			{ y:10,  label:'dl.acm.org'  },
			{ y:9,  label:'homepages.inf.ed.ac.uk'  }
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
		name: "CONLL : Top Unique GitHub Pages",
		legendText: "",
		dataPoints: [   
			{ y: 1, label: 'clab/' },
			{ y: 3, label: 'facebookresearch/' },
			{ y: 2, label: 'coastalcph/' },
			{ y: 2, label: 'mfaruqui/' },
			{ y: 2, label: 'shawnwun/RNNLG' },
			{ y: 2, label: 'anderbarrena/' },
			{ y: 2, label: 'facebookresearch/fastText' },
			{ y: 2, label: 'semanticvectors/semanticvectors' },
			{ y: 1, label: 'fozziethebeat/S-Space' },
			{ y: 1, label: 'fozziethebeat/TopicModelComparison' },
			{ y: 1, label: 'utcompling/' },
			{ y: 1, label: 'shuyo/ldig' },
			{ y: 1, label: 'desmond86/' },
			{ y: 1, label: 'vered1986/LinKeR' },
			{ y: 1, label: 'yohasebe/wp2txt/' },
			{ y: 1, label: 'samiroid/CUE-CNN' },
			{ y: 1, label: 'clab/cnn' },
			{ y: 1, label: 'clab/lstm-parser' },
			{ y: 1, label: 'taolei87/' }
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
		name: "CONLL : Top University Pages",
		legendText: "",
		dataPoints: [      
			{ y: 9,  label: 'UdS' },
			{ y: 16, label: 'Stanford University' },                         
			{ y: 14,label: 'Tilburg University' },
			{ y: 11,  label: 'Microsoft Research Asia' },
			{ y: 8,  label: 'University of Edinburgh' },
			{ y: 8,  label: 'Campus Middelheim Universiteit Antwerpen' },
			{ y: 8, label: 'Penn Museum' },
			{ y: 7,  label: 'Institute for Logic' },
			{ y: 6, label: 'University of Michigan' },
			{ y: 5,  label: 'University of Washington' },
			{ y: 4,  label: 'Uppsala universitets tentamenslokal Fyrislundsgatan' },
			{ y: 4,  label: 'Krannert Art Museum' },
			{ y: 4,  label: 'Harbin Institute of Technology' },
			{ y: 4, label: 'Koç Üniversitesi' },
			{ y: 4,  label: 'Australian National University' },
			{ y: 4,  label: 'UC Berkeley' },
			{ y: 4, label: 'Van Pelt Library' },
			{ y: 4,  label: 'IBM' },
			{ y: 3,  label: 'Regional Ayurveda research institute for lifestyle related disorders' },
			{ y: 3,  label: 'USyd' }
			
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
		
		
		
		
		
		if(dt==1997)
		{
		
		dp = [                                         
			{ y: 1, label: 'ogi.edu' },                         
			{ y: 1,  label: 'let.rug.nh4321' }
			
			
		]
		}
		else if(dt==1998)
		{
			dp= [                                         
			
				{ y: 1, label: 'lingsoft.fi' },                         
				{ y: 1,  label: 'iai.uni-sb.de' },
				{ y: 1,  label: 'ciips.ee.uwa~' },
				{ y: 1,  label: 'ieee.org' }
			
		]
		}
		else if(dt==1999)
		{
			dp= [                                         
			{ y: 3, label: 'pi.cnI-.it' },
			{ y: 1, label: 'lanl.gov' }
			
		]
		}
		else if(dt==2000)
		{
			dp= [                                         
			{ y: 5, label: 'kub.nl' },
			{ y: 1, label: 'kuleuven.ac.be' },
			{ y: 1, label: 'uib.no' },
			{ y: 1, label: 'cnr.it' },
			{ y: 1, label: 'unicaen.fr' },
			{ y: 1, label: 'humanities.uchi-' },
			{ y: 1, label: 'xrce.xe-' },
			{ y: 1, label: 'lanl.gov' },
			{ y: 2, label: 'ed.ac.uk' },
			{ y: 1, label: 'uci.edu' },
			{ y: 1, label: 'ldc.upenn' },
			{ y: 1, label: 'unige.ch' },
			{ y: 1, label: 'limsi.fr' },
			{ y: 1, label: 'saic.com' },
			{ y: 1, label: 'uva.nl' },
			{ y: 1, label: 'lcg-www.uia' },
			{ y: 1, label: 'uni-dortmund.de' },
			{ y: 1, label: 'cogsci.ed.ac.uk' },
			{ y: 1, label: 'cogsci.ed' },
			{ y: 1, label: 'w3.org' }
			
		]
		}
		else if(dt==2001)
		{
			dp= [                                         
			{ y: 1, label: 'gla.ac.uk' },
			{ y: 1, label: 'uia.ac.be' }
			
		]
		}
		else if(dt==2002)
		{
			dp= [                                         
			{ y: 1, label: 'stanford.edu' },
			{ y: 1, label: 'megaputer.com' },
			{ y: 1, label: 'indiana.edu' },
			{ y: 1, label: 'cphling.dk' },
			{ y: 2, label: 'id.cbs.dk' },
			{ y: 1, label: 'mcs.anl.gov' },
			{ y: 1, label: 'talp.upc.es' },
			{ y: 1, label: 'kuleuven.ac.be' }
			
		]
		}
		else if(dt==2003)
		{
			dp= [                                         
			{ y: 2, label: 'pitt.edu' },
			{ y: 1, label: 'uci.edu'  },
			{ y: 1, label: 'torch.ch' },
			{ y: 1, label: 'ltg.ed.ac.uk' },
			{ y: 1, label: 'susx.ac.uk' },
			{ y: 1, label: 'uia.ac.be' },
			{ y: 2, label: 'reuters.com' },
			{ y: 1, label: 'upenn.edu' },
			{ y: 1, label: 'nist.gov' },
			{ y: 1, label: 'jhu.edu'  },
			{ y: 1, label: 'cmu.edu' },
			{ y: 1, label: 'kub.nl' }
			
		]
		}
		else if(dt==2004)
		{
			dp= [                                         
			{ y: 1, label: 'ilog.com' },
			{ y: 2, label: 'dashoptimization.com' },
			{ y: 1, label: 'nist.gov' },
			{ y: 1, label: 'joachims.org'  },
			{ y: 1, label: 'toronto.edu' },
			{ y: 1, label: 'umn.edu' },
			{ y: 2, label: 'sourceforge.net' },
			{ y: 1, label: 'daviddlewis.com' },
			{ y: 3, label: 'aist-nara.ac.jp'  },
			{ y: 1, label: 'reuters.com' },
			{ y: 1, label: 'ualberta.ca' },
			{ y: 1, label: 'brighton.ac.uk' },
			{ y: 1, label: 'uia.ac.be' },
			{ y: 3, label: 'nl' },
			{ y: 1, label: 'nlplab.cn' }
			
		]
		}
		else if(dt==2005)
		{
			dp= [                                         
			{ y: 3, label: 'sourceforge.net' },
			{ y: 1, label: 'nih.gov' },
			{ y: 1, label: 'susx.ac.uk' },
			{ y: 1, label: 'cmu.edu'},
			{ y: 2, label: 'umass.edu' },
			{ y: 2, label: 'mit.edu-' },
			{ y: 1, label: 'uci.edu'},
			{ y: 1, label: 'joachims.org' },
			{ y: 1, label: 'gate.ac.uk' },
			{ y: 1, label: 'uia.ac.be' },
			{ y: 1, label: 'isi.edu' },
			{ y: 1, label: 'shef.ac.uk' },
			{ y: 1, label: 'sekt-project.org' },
			{ y: 1, label: 'ucd.ie' },
			{ y: 1, label: 'kun.nl' },
			{ y: 3, label: 'homepages.inf.ed.ac.uk'},
			{ y: 1, label: 'ualberta.ca' },
			{ y: 1, label: 'bioware.com' },
			{ y: 1, label: 'uchicago.edu' },
			{ y: 2, label: 'eml-research.de' }
			
		]
		}
		else if(dt==2006)
		{
			dp= [                                         
			{ y: 2, label: 'uva.nl' },
			{ y: 1, label: 'iaaa.nl' },
			{ y: 1, label: 'ilsp.gr' },
			{ y: 1, label: 'ualberta.ca' },
			{ y: 1, label: 'uniroma2.it' },
			{ y: 1, label: 'unt.edu' },
			{ y: 1, label: 'cnts.ua.ac.be'},
			{ y: 1, label: 'im2.ch' },
			{ y: 4, label: 'ntu.edu.tw' },
			{ y: 1, label: 'upenn.edu' },
			{ y: 2, label: 'bitterlemons.org' },
			{ y: 1, label: 'sourceforge.net' },
			{ y: 1, label: 'science.uva.nl' },
			{ y: 1, label: 'msi.vxu.se'  },
			{ y: 1, label: 'depparse.uvt.nl' },
			{ y: 1, label: 'rug.nl'},
			{ y: 2, label: 'bultreebank.org' },
			{ y: 2, label: 'chasen.org' },
			{ y: 1, label: 'tartarus.org' },
			{ y: 2, label: 'uvt.nl' }
			
		]
		}
		else if(dt==2007)
		{
			dp= [                                         
			{ y: 20, label: 'nist.gov' },
			{ y: 17, label: 'upc.edu' },
			{ y: 2, label: 'lemurproject.org' },
			{ y: 4, label: 'ntu.edu.tw' },
			{ y: 4, label: 'mit.edu' },
			{ y: 6, label: 'joachims.org' },
			{ y: 4, label: 'vxu.se'},
			{ y: 8, label: 'upenn.edu' },
			{ y: 5, label: 'umass.edu' },
			{ y: 4, label: 'statmt.org' },
			{ y: 3, label: 'kyoto-u.ac.jp' },
			{ y: 8, label: 'chasen.org' },
			{ y: 5, label: 'u-tokyo.ac.jp' },
			{ y: 3, label: 'utah.edu' },
			{ y: 2, label: 'fjoch.com' },
			{ y: 2, label: 'sri.com'},
			{ y: 4, label: 'isi.edu' },
			{ y: 5, label: 'stanford.edu' },
			{ y: 2, label: 'tc-star.org' },
			{ y: 20, label: 'nist.gov' },
			{ y: 4, label: 'wikipedia.org' }
			
		]
		}
		else if(dt==2008)
		{
			dp= [                                         
			{ y: 4, label: 'uvt.nl' },
			{ y: 39, label: 'creativecommons.org' },
			{ y: 4, label: 'vxu.se' },
			{ y: 7, label: 'sourceforge.net' },
			{ y: 3, label: 'homepages.inf.ed.ac.uk' },
			{ y: 2, label: 'googlecode.com' },
			{ y: 1, label: 'rug.nl'},
			{ y: 1, label: 'brown.edu' },
			{ y: 1, label: 'ua.ac.be' },
			{ y: 1, label: 'uia.ac.be' },
			{ y: 2, label: 'chasen.org' },
			{ y: 1, label: 'spraakbanken.gu.se' },
			{ y: 1, label: 'ntu.edu.tw' },
			{ y: 1, label: 'robocup.org' },
			{ y: 1, label: 'waikato.ac.nz'},
			{ y: 1, label: 'uiuc.edu' },
			{ y: 2, label: 'yahoo.com' },
			{ y: 1, label: 'sina.com.cn' },
			{ y: 1, label: 'tartarus.org' },
			{ y: 1, label: 'mayer-johnson.com' }
			
		]
		}
		else if(dt==2009)
		{
			dp= [                                         
			{ y: 2, label: 'uvt.nl' },                  
			{ y: 4, label: 'mit.edu' },
			{ y: 4, label: 'uiuc.edu' },
			{ y: 2, label: 'ualberta.ca' },
			{ y: 1, label: 'unitn.it' },
			{ y: 1, label: 'daviddlewis.com'},
			{ y: 1, label: 'u-tokyo.ac.jp'},
			{ y: 1, label: 'uva.nl' },
			{ y: 1, label: 'nlpado.de' },
			{ y: 2, label: 'sourceforge.net' },
			{ y: 1, label: 'oed.com' },
			{ y: 1, label: 'gutenberg.org' },
			{ y: 1, label: 'ecdf.ed.ac.uk' },
			{ y: 1, label: 'edikt.org.uk' },
			{ y: 1, label: 'openoffice.org' },
			{ y: 1, label: 'informatics.susx.ac.uk' },
			{ y: 1, label: 'stanford.edu' },
			{ y: 1, label: 'tedlab.mit.edu'  },
			{ y: 1, label: 'itch.fbk.eu' },
			{ y: 1, label: 'joachims.org' },
			{ y: 1, label: 'berkeley.edu' }
			
		]
		}
		else if(dt==2010)
		{
			dp=[                                         
			{ y: 2, label: 'joachims.org' },                   
			{ y: 2, label: 'mturk.com' },
			{ y: 3, label: 'cornell.edu' },
			{ y: 2, label: 'stanford.edu' },
			{ y: 1, label: 'handle.net' },
			{ y: 1, label: 'unitn.it' },
			{ y: 1, label: 'wikidot.com' },
			{ y: 2, label: 'jhu.edu' },
			{ y: 1, label: 'tinysong.com' },
			{ y: 1, label: 'yahoo.com'},
			{ y: 1, label: 'pitt.edu' },
			{ y: 1, label: 'iit.edu' },
			{ y: 1, label: 'unt.edu' },
			{ y: 1, label: 'gate.ac.uk'},
			{ y: 1, label: 'waikato.ac.nz'},
			{ y: 4, label: 'sourceforge.net' },
			{ y: 1, label: 'umass.edu' },
			{ y: 1, label: 'cnet.com' },
			{ y: 1, label: 'uiuc.edu' },
			{ y: 1, label: 'ntu.edu.tw' }
			
		]
		}
		else if(dt==2011)
		{
			dp= [                                         
			{ y: 2, label: 'pitt.edu' },
			{ y: 2, label: 'alias-i.com' },               
			{ y: 2, label: 'coin-or.org' },
			{ y: 2, label: 'colorado.edu' },
			{ y: 1, label: 'mit.edu' },
			{ y: 1, label: 'stanford.edu' },
			{ y: 1, label: 'ntu.edu.tw' },
			{ y: 1, label: 'bookblog.net' },
			{ y: 1, label: 'hackerfactor.com' },
			{ y: 1, label: 'umass.edu' },
			{ y: 2, label: 'csie.ntu.edu' },
			{ y: 1, label: 'medialab.di.unipi.it' },
			{ y: 1, label: 'evalita.fbk.eu' },
			{ y: 1, label: 'metaoptimize.com'},
			{ y: 2, label: 'sourceforge.net'  },
			{ y: 1, label: 'upenn.edu' },
			{ y: 1, label: 'nlp.csai' },
			{ y: 1, label: 'shef.ac.uk' },
			{ y: 1, label: 'elsnet.org' },
			{ y: 1, label: 'clsp.jhu.edu' },
			{ y: 1, label: 'ucf.edu' }
			
		]
		}
		else if(dt==2012)
		{
			dp= [                                         
			{ y: 14, label: 'google.com' },      
			{ y: 5, label: 'umass.edu' },
			{ y: 3, label: 'cornell.edu' },
			{ y: 3, label: 'h-its.org' },
			{ y: 13, label: 'stanford.edu' },
			{ y: 9, label: 'statmt.org' },
			{ y: 4, label: 'illinois.edu' },
			{ y: 3, label: 'github.com' },
			{ y: 8, label: 'wikipedia.org' },
			{ y: 2, label: 'wiktionary.org' },
			{ y: 2, label: 'liwc.net' },
			{ y: 2, label: 'dictionsoftware.com' },
			{ y: 2, label: 'clopinet.com' },
			{ y: 2, label: 'surdeanu.name' },
			{ y: 2, label: 'unibo.it' },
			{ y: 2, label: 'arxiv.org' },
			{ y: 4, label: 'nist.gov' },
			{ y: 3, label: 'alagin.jp' },
			{ y: 2, label: 'aspell.net' },
			{ y: 2, label: 'uvt.nl' }
			
		]
		}
		else if(dt==2013)
		{
			dp= [                                         
			{ y: 5, label: 'stanford.edu' },
			{ y: 4, label: 'cemantix.org' },
			{ y: 1, label: 'iitb.ac.in' },
			{ y: 1, label: 'wordspace.collocations' },
			{ y: 1, label: 'aalto.fi' },
			{ y: 2, label: 'github.com' },
			{ y: 2, label: 'ics.aalto.fi' },
			{ y: 1, label: 'uia.ac.be' },
			{ y: 1, label: 'sourceforge.jp' },
			{ y: 1, label: 'gurobi.com'  },
			{ y: 2, label: 'apache.org' },
			{ y: 1, label: 'upenn.edu' },
			{ y: 1, label: 'terrier.org' },
			{ y: 1, label: 'unitn.it' },
			{ y: 1, label: 'cmu.edu' },
			{ y: 1, label: 'collobert.com' },
			{ y: 1, label: 'york.ac.uk' },
			{ y: 1, label: 'createdebate.com' },
			{ y: 1, label: 'wikipedia.org'  },
			{ y: 1, label: 'mit.edu' }
			
		]
		}
		else if(dt==2014)
		{
			dp= [                                         
			{ y: 4, label: 'stanford.edu' },                  
			{ y: 8, label: 'google.com' },
			{ y: 2, label: 'marekrei.com' },
			{ y: 2, label: 'statmt.org' },
			{ y: 1, label: 'u-tokyo.ac.jp' },
			{ y: 1, label: 'cnts.ua.ac.be' },
			{ y: 1, label: 'lowlands.ku.dk' },
			{ y: 1, label: 'soton.ac.uk' },
			{ y: 1, label: 'tamaraberg.com'  },
			{ y: 1, label: 'mit.edu' },
			{ y: 1, label: 'umass.edu' },
			{ y: 1, label: 'ibm.com' },
			{ y: 1, label: 'cambridge.org' },
			{ y: 1, label: 'scipy.org' },
			{ y: 1, label: 'getmaren.com' },
			{ y: 1, label: 'yamli.com' },
			{ y: 1, label: 'bing.com' },
			{ y: 2, label: 'unitn.it' },
			{ y: 1, label: 'illinois.edu' },
			{ y: 1, label: 'crosswordgiant.com' },
			
			
		]
		}
		else if(dt==2015)
		{
			dp= [    
			{ y: 1, label: 'imag.fr' },                                                    
			{ y: 14, label: 'google.com' },
			{ y: 5, label: 'github.com' },
			{ y: 3, label: 'upenn.edu' },
			{ y: 5, label: 'stackexchange.com' },
			{ y: 4, label: 'askubuntu.com' },
			{ y: 2, label: 'github.io' },
			{ y: 2, label: 'bitbucket.org' },
			{ y: 2, label: 'lmu.de' },
			{ y: 3, label: 'statmt.org' },
			{ y: 2, label: 'wikimedia.org' },
			{ y: 3, label: 'theguardian.com'  },
			{ y: 3, label: 'illinois.edu' },
			{ y: 1, label: 'yorku.ca'  },
			{ y: 1, label: 'qamus.org' },
			{ y: 1, label: 'columbia.edu' },
			{ y: 1, label: 'cambridge.org' },
			{ y: 1, label: 'recode.net' },
			{ y: 1, label: 'scikit-learn.org' },
			{ y: 1, label: 'yahoo.com' },
			{ y: 1, label: 'quora.com'  }
			
		]
		}
		else if(dt==2016)
		{
			dp= [
			{ y: 3, label: 'cmu.edu' },                                                               
			{ y: 8, label: 'github.com' },
			{ y: 2, label: 'umontreal.ca' },
			{ y: 2, label: 'upenn.edu' },
			{ y: 2, label: 'crowdflower.com' },
			{ y: 2, label: 'wikimedia.org' },
			{ y: 4, label: 'nist.gov' },
			{ y: 2, label: 'tinyurl.com' },
			{ y: 1, label: 'preshing.com' },
			{ y: 2, label: 'aclweb.org' },
			{ y: 1, label: 'ifarm.nl' },
			{ y: 1, label: 'annacares.com' },
			{ y: 1, label: 'nvidia.com' },
			{ y: 1, label: 'alveo.edu.au'},
			{ y: 2, label: 'stanford.edu' },
			{ y: 1, label: 'ifi.uni-heidelberg' },
			{ y: 1, label: 'waikato.ac.nz' },
			{ y: 1, label: 'biu.ac.il' },
			{ y: 2, label: 'icij.org' },
			{ y: 1, label: 'qcri.org' }
			
		]
		}
		else if(dt==2017)
		{
			dp= [ 
			{ y: 63, label: 'doi.org'  },                                                               
			{ y: 10, label: 'arxiv.org' },
			{ y: 2, label: 'spacy.io'},
			{ y: 161, label: 'aclweb.org' },
			{ y: 35, label: 'github.com' },
			{ y: 10, label: 'acm.org' },
			{ y: 8, label: 'nips.cc' },
			{ y: 5, label: 'jmlr.org' },
			{ y: 3, label: 'uniroma1.it' },
			{ y: 6, label: 'dblp.uni-' },
			{ y: 2, label: 'bitbucket.org' },
			{ y: 2, label: 'allenai.org' },
			{ y: 4, label: 'google.com' },
			{ y: 4, label: 'stanford.edu' },
			{ y: 3, label: 'alt.qcri.org' },
			{ y: 1, label: 'transacl.org' },
			{ y: 1, label: 'wikipedia.org' },
			{ y: 1, label: 'nlpcn.org' },
			{ y: 2, label: 'github.io' },
			{ y: 2, label: 'umass.edu' },
			{ y: 1, label: 'wikimedia.org' }
			
		]
		}
		else if(dt==2018)
		{
			dp= [    
			{ y: 1, label: 'l3s.de' },                                                
			{ y: 4, label: 'stanford.edu' },
			{ y: 2, label: 'iiit.ac.in' },
			{ y: 4, label: 'google.com' },
			{ y: 2, label: 'wikimedia.org' },
			{ y: 2, label: 'wikipedia.org' },
			{ y: 2, label: 'delph-in.net' },
			{ y: 1, label: 'biu.ac.il' },
			{ y: 1, label: 'tu-darmstadt.de' },
			{ y: 1, label: 'movieqa.cs' },
			{ y: 1, label: 'iitp.ac.in' },
			{ y: 1, label: 'cogcomp.org' },
			{ y: 1, label: 'irsi.res.in' },
			{ y: 1, label: 'readthedocs.io' },
			{ y: 1, label: 'cuni.cz' },
			{ y: 1, label: 'norvig.com' },
			{ y: 1, label: 'uchicago.edu' },
			{ y: 1, label: 'occitania.online' },
			{ y: 1, label: 'smartschat.de' },
			{ y: 1, label: 'nist.gov' },
			{ y: 54, label: 'github.com' }
			
			
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
	
	if (dtp=='19970')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cse.ogi.edu' }
			
		]
	}
	else if (dtp=='19971')
	{
		dp = [                                         
			{ y: 1, label: 'http://grid.let.rug.nh4321/' }
			
		]
	}
	else if (dtp=='19980')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.lingsoft.fi/' }			
		]
	}
	else if (dtp=='19981')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.iai.uni-sb.de/cat2/docs.html' }			
		]
	}
	else if (dtp=='19982')
	{
		dp = [                                         
			{ y: 1, label: 'http://ciips.ee.uwa~' }			
		]
	}
	else if (dtp=='19983')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.ieee.org/rmc/' }			
		]
	}
	else if (dtp=='19990')
	{
		dp = [                                         
			{ y: 3, label: 'http://w~.ilc.pi.cnI-.it/-' }		
		]
	}
	else if (dtp=='19991')
	{
		dp = [                                         
			{ y: 1, label: 'http://xxx.lanl.gov/list/cmp-' }		
		]
	}
	else if (dtp=='20000')
	{
		dp = [                                         
			{ y: 5, label: 'ilk.kub.nl' }			
		]
	}
	else if (dtp=='20001')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cs.kuleuven.ac.be/-ldh/' }			
		]
	}
	else if (dtp=='20002')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.hit.uib.no/icame/lobman/lob-'}			
		]
	}
	else if (dtp=='20003')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.ilc.pi.cnr.it/spa' }			
		]
	}
	else if (dtp=='20004')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.info.unicaen.fr/~' }			
		]
	}
	else if (dtp=='20005')
	{
		dp = [                                         
			{ y: 1, label: 'http://humanities.uchi-'}			
		]
	}
	else if (dtp=='20006')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.xrce.xe-'}			
		]
	}
	else if (dtp=='20007')
	{
		dp = [                                         
			{ y: 1, label: 'http://xxx.lanl.gov/list/cmp-lg/' }			
		]
	}
	else if (dtp=='20008')
	{
		dp = [                                         
			{ y: 1, label: 'www.ltg.ed.ac.uk' },
			{ y: 1, label: "http://www.cogsci.ed.ac.uk/'osborne/shallow.ps" }	
		]
	}
	else if (dtp=='20009')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.ics.uci.edu/mlea~n/MLRepository.html' }			
		]
	}
	else if (dtp=='200010')
	{
		dp = [                                         
			{ y: 1, label: 'http://ldc.upenn' }			
		]
	}
	else if (dtp=='200011')
	{
		dp = [                                         
			{ y: 1, label: 'http://latl.unige.ch/doc/etiquettes.ps' }			
		]
	}
	else if (dtp=='200012')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.limsi.fr/TLP/grace/doc/GTR-3-' }			
		]
	}
	else if (dtp=='200013')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.muc.saic.com/' }			
		]
	}
	else if (dtp=='200014')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.hum.uva.nl/-ewn/' }			
		]
	}
	else if (dtp=='200015')
	{
		dp = [                                         
			{ y: 1, label: 'http://lcg-www.uia' }			
		]
	}
	else if (dtp=='200016')
	{
		dp = [                                         
			{ y: 1, label: 'http://www-ai.cs.uni-dortmund.de/SOFT-' }			
		]
	}
	else if (dtp=='200017')
	{
		dp = [                                         
			{ y: 1, label: "http://www.cogsci.ed.ac.uk/'osborne/shallow.ps" }			
		]
	}
	else if (dtp=='200018')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cogsci.ed' }			
		]
	}
	else if (dtp=='200019')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.w3.org/TR/PR-rdf-schema/' }			
		]
	}
	else if (dtp=='20010')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.dcs.gla.ac.uk/idom/it' }			
		]
	}
	else if (dtp=='20011')
	{
		dp = [                                         
			{ y: 1, label: 'http://lcg-www.uia.ac.be/conll99/npb/' }			
		]
	}
	else if (dtp=='20020')
	{
		dp = [                                         
			{ y: 1, label: 'http://lingo.stanford.edu/mwe' }			
		]
	}
	else if (dtp=='20021')
	{
		dp = [                                         
			{ y: 2, label: 'http://www.megaputer.com/php/eval.php3' }			
		]
	}
	else if (dtp=='20022')
	{
		dp = [                                         
			{ y: 1, label: 'http://iubio.bio.indiana.edu/'}			
		]
	}
	else if (dtp=='20023')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cphling.dk/BySoc' }			
		]
	}
	else if (dtp=='20024')
	{
		dp = [                                         
			{ y: 2, label: 'www.id.cbs.dk'}			
		]
	}
	else if (dtp=='20025')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.mcs.anl.gov/petsc'}			
		]
	}
	else if (dtp=='20026')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.talp.upc.es/' }			
		]
	}
	else if (dtp=='20027')
	{
		dp = [                                         
			{ y: 1, label: 'http://atranos.esat.kuleuven.ac.be/'}			
		]
	}
	else if (dtp=='20030')
	{
		dp = [                                         
			{ y: 2, label: 'www.cs.pitt.edu' }
				
		]
	}
	else if (dtp=='20031')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://kdd.ics.uci.edu/databases/reuters21578/'}			
		]
	}
	else if (dtp=='20032')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.torch.ch/'}			
		]
	}
	else if (dtp=='20033')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.ltg.ed.ac.uk/software/chunk/'}			
		]
	}
	else if (dtp=='20034')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cogs.susx.ac.uk/lab/nlp/carroll/morph.html' }			
		]
	}
	else if (dtp=='20035')
	{
		dp = [                                         
			{ y: 1, label: 'http://lcg-www.uia.ac.be/conll2003/ner/'}			
		]
	}
	else if (dtp=='20036')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.reuters.com/researchandstandards/'},
			{ y: 1, label: 'http://about.reuters.com/researchandstandards/corpus/'}
		]
	}
	else if (dtp=='20037')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.ldc.upenn.edu/' }			
		]
	}
	else if (dtp=='20038')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.itl.nist.gov/iaui/894.02/related' }			
		]
	}
	else if (dtp=='20039')
	{
		dp = [                                         
			{ y: 1, label: 'http://nlp.cs.jhu.edu/rflorian/fntbl/documentation.html'}			
		]
	}
	else if (dtp=='200310')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cnbc.cmu.edu/Resources/'}			
		]
	}
	else if (dtp=='200311')
	{
		dp = [                                         
			{ y: 1, label: 'http://ilk.kub.nl/downloads/pub/papers/ilk0210.ps.gz'}			
		]
	}
	else if (dtp=='20040')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.ilog.com/products/cplex/'}			
		]
	}
	else if (dtp=='20041')
	{
		dp = [                                         
			{ y: 2, label:  'www.dashoptimization.com' }			
		]
	}
	else if (dtp=='20042')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.nist.gov/speech/index.htm' }			
		]
	}
	else if (dtp=='20043')
	{
		dp = [                                         

			{ y: 1, label: 'http://svmlight.joachims.org/' }
		]
	}
	else if (dtp=='20044')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cs.toronto.edu/smm' }			
		]
	}
	else if (dtp=='20045')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.d.umn.edu/tpederse' }			
		]
	}
	else if (dtp=='20046')
	{
		dp = [                                         
			{ y: 1, label: 'http://ngram.sourceforge.net' },
			{ y: 1, label: 'http://senseclusters.sourceforge.net' }	
		]
	}
	else if (dtp=='20047')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.daviddlewis.com/resources/' }			
		]
	}
	else if (dtp=='20048')
	{
		dp = [                                         
			{ y: 3, label: 'cl.aist-nara.ac.jp' }			
		]
	}
	else if (dtp=='20049')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.reuters.com/researchandstandards/corpus/' }			
		]
	}else if (dtp=='200410')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cs.ualberta.ca/'}			
		]
	}
	else if (dtp=='200411')
	{
		dp = [                                         
			{ y: 1, label: 'http://wasps.itri.brighton.ac.uk' }			
		]
	}
	else if (dtp=='200412')
	{
		dp = [                                         
			{ y: 1, label: 'http://cnts.uia.ac.be/conll2004/roles'}			
		]
	}
	else if (dtp=='200413')
	{
		dp = [                                         
			{ y: 3, label: 'ilk.kub.nl' }			
		]
	}
	else if (dtp=='200414')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.nlplab.cn/zhangle/maxent' }			
		]
	}
	else if (dtp=='20050')
	{
		dp = [                                         
			{ y: 2, label: 'sourceforge.net' },
			{ y: 1, label: 'http://opennlp.sourceforge.net/' }
		]
	}
	else if (dtp=='20051')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.nlm.nih.gov/pubs/factsheets/umlslex.html' }
		]
	}
	else if (dtp=='20052')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cogs.susx.ac.uk/lab/nlp/carroll/morph.html' }			
		]
	}
	else if (dtp=='20053')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cs.cmu.edu/'}			
		]
	}
	else if (dtp=='20054')
	{
		dp = [                                         
			{ y: 2, label: 'http://mallet.cs.umass.edu' }			
		]
	}
	else if (dtp=='20055')
	{
		dp = [                                         
			{ y: 2, label: 'http://www.ai.mit.edu-' }
			
		]
	}
	else if (dtp=='20056')
	{
		dp = [                                         
			{ y: 1, label:  'http://kdd.ics.uci.edu/databases/-' }			
		]
	}
	else if (dtp=='20057')
	{
		dp = [                                         
			{ y: 1, label: 'http://svmlight.joachims.org/' }			
		]
	}
	else if (dtp=='20058')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.gate.ac.uk/'}			
		]
	}
	else if (dtp=='20059')
	{
		dp = [                                         
			{ y: 1, label: 'http://cnts.uia.ac.be/conll2003/ner/' }			
		]
	}
	else if (dtp=='200510')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.isi.edu/info-agents/RISE/repository.html'}			
		]
	}
	else if (dtp=='200511')
	{
		dp = [                                         
			{ y: 1, label: 'http://nlp.shef.ac.uk/pascal/' }			
		]
	}
	else if (dtp=='200512')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.sekt-project.org' }			
		]
	}
	else if (dtp=='200513')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.smi.ucd.ie/Dagstuhl-' }			
		]
	}
	else if (dtp=='200514')
	{
		dp = [                                         
			{ y: 1, label: 'http://lands.let.kun.nl/cgn/ehome.htm' }			
		]
	}
	else if (dtp=='200515')
	{
		dp = [                                         
			{ y: 3, label: 'homepages.inf.ed.ac.uk' }			
		]
	}
	else if (dtp=='200516')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cs.ualberta.ca/bergsma/Pubs/thesis.pdf' }
		]
	}
	else if (dtp=='200517')
	{
		dp = [                                         
			{ y: 1, label: 'http://nwn.bioware.com/' }			
		]
	}
	else if (dtp=='200518')
	{
		dp = [                                         
			{ y: 1, label:  'http://humanities.uchicago.edu/faculty/goldsmith/' }			
		]
	}
	else if (dtp=='200519')
	{
		dp = [                                         
			{ y: 2, label: 'www.eml-research.de' }			
		]
	}
	else if (dtp=='20060')
	{
		dp = [                                         
			{ y: 1, label: 'http://staff.science.uva.nl/jzuidema' },
			{ y: 1, label: 'http://ilps.science.uva.nl/erikt/signll/conll/'}
		]
	}
	else if (dtp=='20061')
	{
		dp = [                                         
			{ y: 1, label: 'http://iaaa.nl/rs/LeerdamE.html' }
		]
	}
	else if (dtp=='20062')
	{
		dp = [                                         
			{ y: 1, label: 'http://sinfos.ilsp.gr/musa/' }			
		]
	}
	else if (dtp=='20063')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cs.ualberta.ca/' }			
		]
	}
	else if (dtp=='20064')
	{
		dp = [                                         
			{ y: 1, label: 'http://ai-nlp.info.uniroma2.it/moschitti/' }			
		]
	}
	else if (dtp=='20065')
	{
		dp = [                                         
		
			{ y: 1, label: 'http://www.cs.unt.edu/rada/senseval/' }	
		]
	}
	else if (dtp=='20066')
	{
		dp = [                                         
			{ y: 2, label: 'http://www.cnts.ua.ac.be/conll2003/ner/' }			
		]
	}
	else if (dtp=='20067')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.im2.ch/' }			
		]
	}
	else if (dtp=='20068')
	{
		dp = [                                         
			{ y: 4, label: 'www.csie.ntu.edu.tw' }			
		]
	}
	else if (dtp=='20069')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.ldc.upenn.edu' }			
		]
	}
	else if (dtp=='200610')
	{
		dp = [                                         
			{ y: 2, label: 'www.bitterlemons.org' }			
		]
	}
	else if (dtp=='200611')
	{
		dp = [                                         
			{ y: 1, label: 'http://sourceforge.net/projects/'}			
		]
	}
	else if (dtp=='200612')
	{
		dp = [                                         
			{ y: 1, label: 'http://staff.science.uva.nl/jzuidema' }			
		]
	}
	else if (dtp=='200613')
	{
		dp = [                                         
			{ y: 1, label: 'http://w3.msi.vxu.se/' }			
		]
	}
	else if (dtp=='200614')
	{
		dp = [                                         
			{ y: 1, label: 'http://depparse.uvt.nl' }			
		]
	}
	else if (dtp=='200615')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.let.rug.nl/vannoord/trees/Papers/diffs.pdf'}			
		]
	}
	else if (dtp=='200616')
	{
		dp = [                                         
			
			{ y: 2, label: 'www.bultreebank.org' }	
		]
	}
	else if (dtp=='200617')
	{
		dp = [                                         
			
			{ y: 2, label: 'www.chasen.org' }	
		]
	}
	else if (dtp=='200618')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.snowball.tartarus.org/' }			
		]
	}
	else if (dtp=='200619')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://depparse.uvt.nl' },
			{ y: 1, label: 'http://nextens.uvt.nl/~conll/' }
		]
	}
	else if (dtp=='20070')
	{
		dp = [                  
		
			{ y: 15, label: 'www.nist.gov' },
			{ y: 1, label: 'http://nist.gov/speech/tests/tdt/tdt98/' },
			{ y: 2, label: 'trec.nist.gov' },,
			{ y: 2, label: 'www-nlpir.nist.gov' },
			
		]
	}
	else if (dtp=='20071')
	{
		dp = [                                         
			
			{ y: 17, label: 'www.lsi.upc.edu' }
		]
	}
	else if (dtp=='20072')
	{
		dp = [                                         
			
			{ y: 2, label:  'www.lemurproject.org' }
		]
	}
	else if (dtp=='20073')
	{
		dp = [                                         
			
			{ y: 4, label: 'www.csie.ntu.edu.tw' }
		]
	}
	else if (dtp=='20074')
	{
		dp = [                                         
			{ y: 3, label: 'people.csail.mit.edu' },
			{ y: 1, label: 'http://web.mit.edu/17.251/www/' }
		]
	}
	else if (dtp=='20075')
	{
		dp = [                                         
			{ y: 6, label: 'http://svmlight.joachims.org' }
		]
	}
	else if (dtp=='20076')
	{
		dp = [                                         
			{ y: 4, label: 'w3.msi.vxu.se' }
		]
	}
	else if (dtp=='20077')
	{
		dp = [                                         
			{ y: 4, label: 'www.cis.upenn.edu' },
			{ y: 2, label: 'www.ldc.upenn.edu' },
			{ y: 1, label: 'http://projects.ldc.upenn.edu/ace/' },
			{ y: 1, label: 'http://bioie.ldc.upenn.edu/' }
		]
	}
	else if (dtp=='20078')
	{
		dp = [                                         
			{ y: 5, label: 'mallet.cs.umass.edu' }
		]
	}
	else if (dtp=='20079')
	{
		dp = [                                         
			
			{ y: 4, label: 'www.statmt.org' }
		]
	}
	else if (dtp=='200710')
	{
		dp = [                                         
			{ y: 3, label: 'nlp.kuee.kyoto-u.ac.jp' }

		]
	}
	else if (dtp=='200711')
	{
		dp = [                                         
			{ y: 7, label: 'chasen.org' },
			{ y: 1, label: 'http://www.chasen.org/taku/software/' }
		]
	}
	else if (dtp=='200712')
	{
		dp = [                                         
			{ y: 4, label: 'www-tsujii.is.s.u-tokyo.ac.jp' },
			{ y: 1, label: 'http://www.tkl.iis.u-tokyo.ac.jp/kaji/acp/' }
		]
	}
	else if (dtp=='200713')
	{
		dp = [                                         
			{ y: 3, label: 'www.cs.utah.edu' }
		]
	}
	else if (dtp=='200714')
	{
		dp = [                                         
			
			{ y: 2, label: 'www.fjoch.com' }
		]
	}
	else if (dtp=='200715')
	{
		dp = [                                         
			{ y: 2, label:  'www.speech.sri.com' }
		]
	}
	else if (dtp=='200716')
	{
		dp = [                                         
			{ y: 3, label: 'www.isi.edu' },
			{ y: 1, label: 'http://haydn.isi.edu/ROUGE/' }
		]
	}
	else if (dtp=='200717')
	{
		dp = [                                         
			{ y: 2, label: 'ai.stanford.edu' },
			{ y: 1, label: 'http://lingo.stanford.edu/pubs/WP-2002-06.pdf' },
			{ y: 1, label: 'http://nlp.stanford.edu/software/lex-parser.shtml' },
			{ y: 1, label: 'http://www.stanford.edu/class/ee398a/handouts/lectures/' }
		]
	}
	else if (dtp=='200718')
	{
		dp = [                                         

			{ y: 2, label:  'www.tc-star.org' }
		]
	}
	else if (dtp=='200719')
	{
		dp = [                                         
			{ y: 15, label: 'www.nist.gov' },
			{ y: 1, label: 'http://nist.gov/speech/tests/tdt/tdt98/' },
			{ y: 2, label: 'www-nlpir.nist.gov' },
			{ y: 2, label: 'trec.nist.gov' }
		]
	}
	else if (dtp=='200720')
	{
		dp = [                                         
			{ y: 1, label:  'http://en.wikipedia.org/wiki/Golomb_coding' },
			{ y: 2, label:  'www.wikipedia.org' },
			{ y: 1, label:  'http://wikipedia.org/' }
		]
	}
	else if (dtp=='20080')
	{
		dp = [                                         
			{ y: 3, label:  'ilk.uvt.nl' },
			{ y: 1, label:  'http://nextens.uvt.nl/conll/software.html' }
		]
	}
	else if (dtp=='20081')
	{
		dp = [                                         
			{ y: 39, label:  'creativecommons.org'}
		]
	}
	else if (dtp=='20082')
	{
		dp = [                                         
			
			{ y: 4, label:  'w3.msi.vxu.se' }
		]
	}
	else if (dtp=='20083')
	{
		dp = [                                         
			{ y: 1, label:  'http://nltk.sourceforge.net/' },
			{ y: 2, label:  'crfpp.sourceforge.net' },
			{ y: 1, label:  'http://maxent.sourceforge.net/' },
			{ y: 3, label:   'sourceforge.net' }
		]
	}
	else if (dtp=='20084')
	{
		dp = [                                         
			
			{ y: 3, label:  'homepages.inf.ed.ac.uk' }
		]
	}
	else if (dtp=='20085')
	{
		dp = [                                         
		
			{ y: 2, label:  'thebeast.googlecode.com' }
		]
	}
	else if (dtp=='20086')
	{
		dp = [                                         

			{ y: 1, label:  'http://www.let.rug.nl/' }
		]
	}
	else if (dtp=='20087')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.cog.brown.edu/mj/software.htm' }
		]
	}
	else if (dtp=='20088')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.cnts.ua.ac.be/conll2003' }
		]
	}
	else if (dtp=='20089')
	{
		dp = [                                         
			{ y: 1, label: 'http://lcg-www.uia.ac.be/conll2000/chunking/' }
		]
	}
	else if (dtp=='200810')
	{
		dp = [                                         
			{ y: 1, label:  'http://chasen.org/taku/software/TinySVM/' },
			{ y: 1, label:  'http://www.chasen.org/taku/software/' }
		]
	}
	else if (dtp=='200811')
	{
		dp = [                                         
			{ y: 1, label:  'http://spraakbanken.gu.se' }
		]
	}
	else if (dtp=='200812')
	{
		dp = [                                         
	
			{ y: 1, label:  'http://www.csie.ntu.edu.tw/cjlin/libsvm' }
		]
	}
	else if (dtp=='200813')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.robocup.org' }
		]
	}else if (dtp=='200814')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.cs.waikato.ac.nz/ml/weka/' }
		]
	}
	else if (dtp=='200815')
	{
		dp = [                                         
			{ y: 1, label:  'http://L2R.cs.uiuc.edu/' }
		]
	}
	else if (dtp=='200816')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.yahoo.com' },
			{ y: 1, label:  'http://developer.yahoo.com/search/' }
		]
	}
	else if (dtp=='200817')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.sina.com.cn/' }
		]
	}
	else if (dtp=='200818')
	{
		dp = [                                         
			{ y: 1, label:  'http://snowball.tartarus.org/' }
		]
	}
	else if (dtp=='200819')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.mayer-johnson.com' }
		]
	}
	else if (dtp=='20090')
	{
		dp = [                                         
			{ y: 2, label:  'ilk.uvt.nl' }
		]
	}
	else if (dtp=='20091')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.mit.edu/mbf/instances.txt.gz' },
			{ y: 2, label:   'people.csail.mit.edu' },
			{ y: 1, label:  'http://tedlab.mit.edu/' }
		]
	}
	else if (dtp=='20092')
	{
		dp = [                                         
			{ y: 2, label:   'http://L2R.cs.uiuc.edu/cogcomp/' },
			{ y: 1, label:   'l2r.cs.uiuc.edu' },
			{ y: 1, label:   'http://apfel.ai.uiuc.edu/resources.html' }
		]
	}
	else if (dtp=='20093')
	{
		dp = [                                         
			{ y: 2, label:  'www.cs.ualberta.ca' }
		]
	}
	else if (dtp=='20094')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://disi.unitn.it/'}
		]
	}
	else if (dtp=='20095')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.daviddlewis.com/resources/' }
		]
	}
	else if (dtp=='20096')
	{
		dp = [                                         
		
			{ y: 1, label:  'http://www-tsujii.is.s.u-tokyo.ac.jp/GENIA/home/' }
		]
	}
	else if (dtp=='20097')
	{
		dp = [                                         
			{ y: 1, label:  'http://staff.science.uva.nl/yseginer/ccl' }
		]
	}
	else if (dtp=='20098')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.nlpado.de/' }
		]
	}
	else if (dtp=='20099')
	{
		dp = [                                         
			{ y: 1, label:  'http://maxent.sourceforge.net/' },
			{ y: 1, label:  'http://sourceforge.net/projects/carafe' }
		]
	}
	else if (dtp=='200910')
	{
		dp = [                                         
			
			
			
			{ y: 1, label:  'http://www.oed.com/' }
		]
	}
	else if (dtp=='200911')
	{
		dp = [                                         
			
			
			{ y: 1, label:  'http://www.gutenberg.org' }
		]
	}
	else if (dtp=='200912')
	{
		dp = [                                         

			{ y: 1, label:  'http://www.ecdf.ed.ac.uk/' }
		]
	}
	else if (dtp=='200913')
	{
		dp = [                                         

			{ y: 1, label:  'http://www.edikt.org.uk/' }
		]
	}else if (dtp=='200914')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.openoffice.org' }
		]
	}
	else if (dtp=='200915')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.informatics.susx.ac.uk/research/groups/nlp/carroll' }
		]
	}else if (dtp=='200916')
	{
		dp = [                                         
			{ y: 1, label:   'http://nlp.stanford.edu/software/CRF-NER.shtml' }
		]
	}
	else if (dtp=='200917')
	{
		dp = [                                         
			
			{ y: 1, label:   'http://tedlab.mit.edu/' }
		]
	}
	else if (dtp=='200918')
	{
		dp = [                                         
			{ y: 1, label:  'http://itch.fbk.eu' }
		]
	}
	else if (dtp=='200919')
	{
		dp = [                                         
			{ y: 1, label:  'http://svmlight.joachims.org/' }
		]
	}
	else if (dtp=='200920')
	{
		dp = [                                         
		
			{ y: 1, label:  'http://framenet.icsi.berkeley.edu/book/book.html' }
		]
	}
	else if (dtp=='20100')
	{
		dp = [                                         
			{ y: 2, label:  'svmlight.joachims.org' }
		]
	}
	else if (dtp=='20101')
	{
		dp = [                                         
			{ y: 2, label:   'www.mturk.com'}
		]
	}
	else if (dtp=='20102')
	{
		dp = [                                         
			
			{ y: 3, label:   'www.cs.cornell.edu' }
		]
	}
	else if (dtp=='20103')
	{
		dp = [                                         
			
			{ y: 2, label:  'nlp.stanford.edu' }
		]
	}
	else if (dtp=='20104')
	{
		dp = [                                         
		
			{ y: 1, label:  'http://hdl.handle.net/2142/15462' }
		]
	}
	else if (dtp=='20105')
	{
		dp = [                                         
			{ y: 1, label:  'http://dit.unitn.it/moschitt' },
			{ y: 1, label:  'http://disi.unitn.it/' }
		]
	}else if (dtp=='20106')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://ilpnlp.wikidot.com/' }
		]
	}
	else if (dtp=='20107')
	{
		dp = [                                         
			{ y: 1, label:   'http://www.clsp.jhu.edu/ws99/' },
			{ y: 1, label:   'http://www.cs.jhu.edu/' }
		]
	}
	else if (dtp=='20108')
	{
		dp = [                                         
			{ y: 1, label:  'http://tinysong.com/cO6i' }
		]
	}
	else if (dtp=='20109')
	{
		dp = [                                         
			{ y: 1, label:  'http://developer.yahoo.com/search/boss' }
		]
	}
	else if (dtp=='201010')
	{
		dp = [                                         
			{ y: 1, label:   'http://www.cs.pitt.edu/mpqa/' }
		]
	}
	else if (dtp=='201011')
	{
		dp = [                                         
			{ y: 1, label:  'http://lingcog.iit.edu/arc/appraisal_' }
		]
	}
	else if (dtp=='201012')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.cse.unt.edu/~rada/affectivetext/' }
		]
	}
	else if (dtp=='201013')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://gate.ac.uk/' }
		]
	}
	else if (dtp=='201014')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.cs.waikato.ac.nz/ml/weka/' }
		]
	}
	else if (dtp=='201015')
	{
		dp = [                                         
			{ y: 1, label:   'http://opennlp.sourceforge.net' },
			{ y: 1, label:   'http://maxent.sourceforge.net/' },
			{ y: 1, label:   'http://crfpp.sourceforge.net/' },
			{ y: 1, label:  'http://sourceforge.net/projects/mstparser/'}
		]
	}
	else if (dtp=='201016')
	{
		dp = [                                         
			{ y: 1, label: 'http://mallet.cs.umass.edu' }
		]
	}
	else if (dtp=='201017')
	{
		dp = [                                         
			

			{ y: 1, label:  'http://forums.cnet.com/?tag=' }
		]
	}
	else if (dtp=='201018')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://l2r.cs.uiuc.edu/'}
		]
	}
	else if (dtp=='201019')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.csie.ntu.edu.tw/cjlin/' }
		]
	}
	else if (dtp=='20111')
	{
		dp = [                                         
			
			{ y: 2, label: 'alias-i.com' }
		]
	}
	else if (dtp=='20110')
	{
		dp = [                                         
		
			{ y: 2, label:  'www.cs.pitt.edu' }
		]
	}
	else if (dtp=='20112')
	{
		dp = [                                         
			{ y: 2, label: 'www.coin-or.org' }
		]
	}
	else if (dtp=='20113')
	{
		dp = [                                         
			
			{ y: 2, label:  'verbs.colorado.edu' }
		]
	}
	else if (dtp=='20114')
	{
		dp = [                                         
		
			{ y: 1, label:  'http://groups.csail.mit.edu/rbg/code/morphsyn/' }
		]
	}else if (dtp=='20115')
	{
		dp = [                                         
			{ y: 1, label:  'http://nlp.stanford.edu/software/' }
		]
	}
	else if (dtp=='20116')
	{
		dp = [                                         
		
			{ y: 1, label:  'http://www.csie.ntu.edu.tw/~cjlin/libsvm' }
		]
	}
	else if (dtp=='20117')
	{
		dp = [                                         
			{ y: 1, label: 'http://bookblog.net/gender/genie.php' }
		]
	}
	else if (dtp=='20118')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.hackerfactor.com/' }
		]
	}
	else if (dtp=='20119')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.cs.umass.edu/' }
		]
	}else if (dtp=='201110')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.csie.ntu.edu.tw/~cjlin/libsvm'},
			{ y: 1, label:  'http://www.csie.ntu.edu'}
		]
	}
	else if (dtp=='201111')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://medialab.di.unipi.it/wiki/SemaWiki' }
		]
	}
	else if (dtp=='201112')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://evalita.fbk.eu/index.html' }
		]
	}
	else if (dtp=='201113')
	{
		dp = [                                         
			{ y: 1, label:  'http://metaoptimize.com/projects/wordreprs/' }
		]
	}
	else if (dtp=='201114')
	{
		dp = [                                         
			{ y: 1, label:  'http://sourceforge.net/projects/crf/' },
			{ y: 1, label:  'http://cuitools.sourceforge.net' }
		]
	}
	else if (dtp=='201115')
	{
		dp = [                                         
			{ y: 1, label:  'http://bioie.ldc.upenn.edu/' }
		]
	}
	else if (dtp=='201116')
	{
		dp = [                                         
			{ y: 1, label:  'http://nlp.csai' }
		]
	}
	else if (dtp=='201117')
	{
		dp = [                                         
			{ y: 1, label:   'http://nlp.shef.ac.uk/BioWSD/downloads/corpora' }
		]
	}
	else if (dtp=='201118')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.elsnet.org/eci.html' }
		]
	}
	else if (dtp=='201119')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.clsp.jhu.edu/ws99/' }
		]
	}
	else if (dtp=='201120')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.cs.ucf.edu/' }
		]
	}
	else if (dtp=='20120')
	{
		dp = [                                         
			{ y: 9, label:  'code.google.com' },
			{ y: 2, label:   'books.google.com' },
			{ y: 1, label:   'http://news.google.com' },
			{ y: 2, label:   'www.google.com' }
		]
	}
	else if (dtp=='20121')
	{
		dp = [                                         

			{ y: 5, label: 'mallet.cs.umass.edu' }
		]
	}
	else if (dtp=='20122')
	{
		dp = [                                         
			
			{ y: 3, label:  'www.cs.cornell.edu' }
		]
	}
	else if (dtp=='20123')
	{
		dp = [                                         
			{ y: 3, label:  'www.h-its.org' }
		]
	}
	else if (dtp=='20124')
	{
		dp = [                                         
			
			{ y: 10, label:  'nlp.stanford.edu' },
			{ y: 2, label:  'cs.stanford.edu' },
			{ y: 1, label:  'http://nlp.stanford' }
		]
	}
	else if (dtp=='20125')
	{
		dp = [                                         
			{ y: 5, label:  'www.statmt.org' },
			{ y: 4, label:  'statmt.org' }
		]
	}
	else if (dtp=='20126')
	{
		dp = [                                         
			{ y: 3, label:   'cogcomp.cs.illinois.edu' },
			{ y: 1, label:   'http://cogcomp.cs.illinois' }
		]
	}
	else if (dtp=='20127')
	{
		dp = [                                         
			{ y: 3, label:  'github.com'}
		]
	}
	else if (dtp=='20128')
	{
		dp = [                                         
			{ y: 6, label:  'en.wikipedia.org' },
			{ y: 2, label:  'www.wikipedia.org' }
		]
	}
	else if (dtp=='20129')
	{
		dp = [                                         
			{ y: 2, label:  'www.wiktionary.org' }
		]
	}
	else if (dtp=='201210')
	{
		dp = [                                         
			{ y: 2, label:   'www.liwc.net' }
		]
	}
	else if (dtp=='201211')
	{
		dp = [                                         
			{ y: 2, label:  'www.dictionsoftware.com' }
		]
	}
	else if (dtp=='201212')
	{
		dp = [                                         
			{ y: 2, label:  'clopinet.com' }
		]
	}
	else if (dtp=='201213')
	{
		dp = [                                         
			{ y: 2, label:  'www.surdeanu.name' }
		]
	}
	else if (dtp=='201214')
	{
		dp = [                                         
			{ y: 2, label:  'wacky.sslmit.unibo.it' }
		]
	}
	else if (dtp=='201215')
	{
		dp = [                                         
			{ y: 2, label:  'arxiv.org' }
		]
	}
	else if (dtp=='201216')
	{
		dp = [                                         
			{ y: 2, label:  'www.itl.nist.gov' },
			{ y: 1, label:  'http://trec.nist.gov/data/reuters/' },
			{ y: 1, label:  'http://www.nist.gov' }
		]
	}
	else if (dtp=='201217')
	{
		dp = [                                         
			{ y: 2, label:  'www.alagin.jp' },
			{ y: 1, label:  'http://alaginrc.nict.go.jp/opinion/index_e.html' }
		]
	}
	else if (dtp=='201218')
	{
		dp = [                                         
			{ y: 2, label: 'aspell.net' }
		]
	}
	else if (dtp=='201219')
	{
		dp = [                                         
			{ y: 2, label:  'ilk.uvt.nl' }
		]
	}
	else if (dtp=='20130')
	{
		dp = [                                         
			{ y: 4, label:  'nlp.stanford.edu' },
			{ y: 1, label:  'http://www-nlp.stanford.edu/' }
		]
	}
	else if (dtp=='20131')
	{
		dp = [                                         
			
			{ y: 2, label:  'conll.cemantix.org' },
			{ y: 2, label:  'cemantix.org' }
		]
	}
	else if (dtp=='20132')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cse.iitb.ac.in/' }
		]
	}
	else if (dtp=='20133')
	{
		dp = [                                         
			{ y: 1, label:  'http://wordspace.collocations' }
		]
	}
	else if (dtp=='20134')
	{
		dp = [                                         
			{ y: 1, label:  'http://users.ics.aalto.fi/' },
			{ y: 1, label:  'http://research.ics.aalto.fi/events/'}
		]
	}
	else if (dtp=='20135')
	{
		dp = [                                         
			{ y: 1, label:  'https://github.com/' },
			{ y: 1, label:  'http://www.github.com/' }
		]
	}
	else if (dtp=='20136')
	{
		dp = [                                         
			{ y: 1, label:  'http://users.ics.aalto.fi/' },
			{ y: 1, label:  'http://research.ics.aalto.fi/events/' }
		]
	}
	else if (dtp=='20137')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://lcg-www.uia.ac.be/conll2000/chunking/' }
		]
	}
	else if (dtp=='20138')
	{
		dp = [                                         

			{ y: 1, label: 'http://chasen-legacy.sourceforge.jp/' }
		]
	}
	else if (dtp=='20139')
	{
		dp = [                                         
		
			{ y: 1, label:  'http://www.gurobi.com' }
		]
	}
	else if (dtp=='201310')
	{
		dp = [                                         
			{ y: 1, label: 'http://uima.apache.org/' },
			{ y: 1, label: 'http://opennlp.apache.org/' }
		]
	}
	else if (dtp=='201311')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.ldc.upenn.edu/Catalog/docs/LDC2002T31/' }
		]
	}
	else if (dtp=='201312')
	{
		dp = [                                         
			{ y: 1, label:  'http://terrier.org/' }
		]
	}
	else if (dtp=='201313')
	{
		dp = [                                         
			{ y: 3, label:  'http://disi.unitn.it/moschitti/Tree-Kernel.htm' }
		]
	}
	else if (dtp=='201314')
	{
		dp = [                                         

			{ y: 1, label:  'http://www.cs.cmu' },
			{ y: 1, label:  'http://boston.lti.cs.cmu.edu/Data/clueweb09/' }
		]
	}
	else if (dtp=='201315')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://ronan.collobert.com/senna/' }
		]
	}
	else if (dtp=='201316')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.cs.york.ac.uk/semeval2010_WSI/task_14' }
		]
	}
	else if (dtp=='201317')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.createdebate.com/' }
		]
	}
	else if (dtp=='201318')
	{
		dp = [                                         
			{ y: 1, label:  'http://en.wikipedia.org/wiki/List_of_' }
		]
	}
	else if (dtp=='201319')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://openmind.media.mit.edu/' }
		]
	}
	else if (dtp=='20140')
	{
		dp = [                                         
			{ y: 3, label:  'nlp.stanford.edu' },
			{ y: 1, label:  'http://nlp.stanford' }
		]
	}
	else if (dtp=='20141')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.google.com/ta3reeb' },
			{ y: 1, label:  'http://storage.googleapis.com/books/' },
			{ y: 1, label:  'http://books.google.com/ngrams' },
			{ y: 5, label:  'code.google.com' }
		]
	}
	else if (dtp=='20142')
	{
		dp = [                                         
			{ y: 2, label:  'www.marekrei.com' }
		]
	}
	else if (dtp=='20143')
	{
		dp = [                                         
			{ y: 2, label:  'www.statmt.org' }
		]
	}
	else if (dtp=='20144')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.logos.ic.i.u-tokyo.ac.jp/' }
		]
	}
	else if (dtp=='20145')
	{
		dp = [                                         
	
			{ y: 1, label:  'http://www.cnts.ua.ac.be/conll2003/' }
		]
	}
	else if (dtp=='20146')
	{
		dp = [                                         
	
			{ y: 1, label:  'http://lowlands.ku.dk' }
		]
	}
	else if (dtp=='20147')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://pascallin.ecs.soton.ac.uk/' }
		]
	}
	else if (dtp=='20148')
	{
		dp = [                                         
			{ y: 1, label:  'http://tamaraberg.com/' }
		]
	}
	else if (dtp=='20149')
	{
		dp = [                                         
			{ y: 1, label:  'http://people.csail.mit.edu/torralba/' }
		]
	}
	else if (dtp=='201410')
	{
		dp = [                                         
			{ y: 1, label:   'http://mallet.cs.umass.edu/' }
		]
	}
	else if (dtp=='201411')
	{
		dp = [                                         
			{ y: 1, label:  'http://www-01.ibm.com/' }
		]
	}
	else if (dtp=='201412')
	{
		dp = [                                         
	
			{ y: 1, label:  'http://www.cambridge.org/gb/elt/' }
		]
	}
	else if (dtp=='201413')
	{
		dp = [                                         
		
			{ y: 1, label:  'http://docs.scipy.org/.../scipy' }
		]
	}
	else if (dtp=='201414')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.getmaren.com' }
		]
	}
	else if (dtp=='201415')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.yamli.com/' }
		]
	}
	else if (dtp=='201416')
	{
		dp = [                                         
			{ y: 1, label:  'https://www.bing.com/' }
		]
	}
	else if (dtp=='201417')
	{
		dp = [                                         
			{ y: 1, label:  'http://projects.disi.unitn.it/' },
			{ y: 1, label:  'http://disi.unitn.it/moschitti/' }
		]
	}
	else if (dtp=='201419')
	{
		dp = [                                         
			{ y: 1, label:  'http://cogcomp.cs.illinois.edu/page/' }
		]
	}
	else if (dtp=='201418')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.crosswordgiant.com' }
		]
	}
	else if (dtp=='20150')
	{
		dp = [ 
			{ y: 1, label:  'http://www-clips.imag.fr/geod/User/marion.potet/' }
			
			]
	}
	else if (dtp=='20151')
	{
		dp = [                                         
			{ y: 9, label:  'code.google.com' },
			{ y: 2, label:  'cloud.google.com' },
			{ y: 1, label:  'http://docs.google.com/View?docid=' },
			{ y: 1, label:  'http://crfpp.googlecode.com/svn/trunk/doc/index.html' },
			{ y: 1, label:  'http://word2vec.googlecode.com/' }
		]
	}
	else if (dtp=='20152')
	{
		dp = [                                         
			
			{ y: 5, label:  'github.com' }
		]
	}
	else if (dtp=='20153')
	{
		dp = [                                         
			{ y: 2, label:  'catalog.ldc.upenn.edu' },
			{ y: 1, label:  'http://www.cis.upenn.edu/treebank/tokenization.html' }
		]
	}
	else if (dtp=='20154')
	{
		dp = [                                         
			{ y: 3, label:  'stackexchange.com' },
			{ y: 2, label:  'meta.stackexchange.com' }
			]
	}
	else if (dtp=='20155')
	{
		dp = [                                         
			
			{ y: 4, label:  'askubuntu.com' }
		]
	}
	else if (dtp=='20156')
	{
		dp = [                                         

			{ y: 2, label:  'taku910.github.io' }
		]
	}
	else if (dtp=='20157')
	{
		dp = [                                         
			{ y: 2, label:  'bitbucket.org' }
			]
	}
	else if (dtp=='20158')
	{
		dp = [                                         

			{ y: 2, label:  'cistern.cis.lmu.de' }
		]
	}
	else if (dtp=='20159')
	{
		dp = [                                         
			{ y: 1, label:  'http://statmt.org/wmt10/translation-task.html' },
			{ y: 2, label:  'www.statmt.org'}
		]
	}else if (dtp=='201510')
	{
		dp = [                                         
		
			{ y: 2, label:  'dumps.wikimedia.org' }
		]
	}
	else if (dtp=='201511')
	{
		dp = [                                         
			{ y: 3, label: 'www.theguardian.com'}
		]
	}
	else if (dtp=='201512')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://cogcomp.cs.illinois' },
			{ y: 2, label:  'cogcomp.cs.illinois.edu' }
		]
	}
	else if (dtp=='201513')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.cse.yorku.ca/' }
		]
	}
	else if (dtp=='201514')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.qamus.org/transliteration.htm' }
		]
	}
	else if (dtp=='201515')
	{
		dp = [                                         
			{ y: 1, label:  'http://nlp.ldeo.columbia.edu/madamira/' }
		]
	}
	else if (dtp=='201516')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.cambridge.org/gb/elt/' }
		]
	}
	else if (dtp=='201517')
	{
		dp = [                                         
			{ y: 1, label: 'http://recode.net/2015/04/20/' }
		]
	}else if (dtp=='201518')
	{
		dp = [                                         
		
			{ y: 1, label:  'http://scikit-learn.org/' }
		]
	}
	else if (dtp=='201519')
	{
		dp = [                                         
			{ y: 1, label:  'https://answers.yahoo.com/' }
		]
	}
	else if (dtp=='201520')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.quora.com' }
		]
	}
	else if (dtp=='20160')
	{
		dp = [
			{ y: 2, label:  'www.cs.cmu.edu' },
			{ y: 1, label:  'http://demo.ark.cs.cmu.edu/parse'}
			
		]
	}
	else if (dtp=='20161')
	{
		dp = [                                         
	
			{ y: 8, label:  'github.com' }
		]
	}
	else if (dtp=='20162')
	{
		dp = [                                         
			
			{ y: 2, label:  'rali.iro.umontreal.ca'}
		]
	}
	else if (dtp=='20163')
	{
		dp = [                                         
			{ y: 1, label:  'https://www.cis.upenn.edu/~treebank/' },
			{ y: 2, label:  'catalog.ldc.upenn.edu'}
		]
	}
	else if (dtp=='20164')
	{
		dp = [                                         
			
			{ y: 2, label: 'www.crowdflower.com' }
		]
	}
	else if (dtp=='20165')
	{
		dp = [                                         
			
			{ y: 2, label:  'dumps.wikimedia.org' }
		]
	}
	else if (dtp=='20166')
	{
		dp = [                                         
			{ y: 3, label:  'duc.nist.gov' },
			{ y: 1, label:   'www.nist.gov' }
		]
	}
	else if (dtp=='20167')
	{
		dp = [                                         
			{ y: 1, label:  'tinyurl.com' },
			{ y: 1, label:  'http://tinyurl' }
		]
	}
	else if (dtp=='20168')
	{
		dp = [                                         
			{ y: 1, label:  'http://preshing.com/20120208/a-look-' }
		]
	}
	else if (dtp=='20169')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.aclweb.org/portal/' },
			{ y: 1, label:  'http://aclweb.org/anthology/attachments/P/P15/' }
		]
	}
	else if (dtp=='201610')
	{
		dp = [                                         
			{ y: 1, label:  'http://ifarm.nl/signll/about/' }
		]
	}
	else if (dtp=='201611')
	{
		dp = [                                         
			{ y: 1, label:  'http://annacares.com'}
		]
	}
	else if (dtp=='201612')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.nvidia.com/object/' }
		]
	}
	else if (dtp=='201613')
	{
		dp = [                                         
			{ y: 1, label:  'http://alveo.edu.au/' }
		]
	}
	else if (dtp=='201614')
	{
		dp = [                                         
			{ y: 1, label:  'http://nlp.stanford.edu:8080/sutime/' },
			{ y: 1, label:  'http://cs.stanford.edu/people/danqi/data/nips13-dataset.tar.bz2' }
		]
	}
	else if (dtp=='201615')
	{
		dp = [                                         
			{ y: 1, label:  'http://heideltime.ifi.uni-heidelberg' }
		]
	}
	else if (dtp=='201616')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.cs.waikato.ac.nz/ml/weka/' }
		]
	}
	else if (dtp=='201617')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.cs.biu.ac.il/nlp/resources/' }
		]
	}
	else if (dtp=='201618')
	{
		dp = [                                         
			{ y: 1, label:  'https://www.icij.org/' },
			{ y: 1, label:  'https://panamapapers.icij.org/' }
		]
	}
	else if (dtp=='201619')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://alt.qcri.org/semeval2014/' }
		]
	}
	else if (dtp=='20174')
	{
		dp = [                                         
			{ y: 31, label:  'github.com' },
			{ y: 4, label:  'github' }
		]
	}
	else if (dtp=='20171')
	{
		dp = [                                         
			
			{ y: 10, label:  'arxiv.org' }
		]
	}
	else if (dtp=='20172')
	{
		dp = [                                         
			{ y: 2, label:  'spacy.io' }
		]
	}
	else if (dtp=='20173')
	{
		dp = [                                         
			{ y: 95, label:  'www.aclweb.org' },
			{ y: 61, label:  'aclweb.org' },
			{ y: 5, label:  'anthology.aclweb.org' }
		]
	}
	else if (dtp=='20170')
	{
		dp = [                                         
			
			{ y: 63, label:  'doi.org' }
		]
	}
	else if (dtp=='20175')
	{
		dp = [                                         
			
			{ y: 10, label:  'dl.acm.org' }
		]
	}
	else if (dtp=='20176')
	{
		dp = [                                         
			
			{ y: 8, label:   'papers.nips.cc' }
		]
	}
	else if (dtp=='20177')
	{
		dp = [                                         
			{ y: 4, label:  'jmlr.org' },
			{ y: 1, label:  'http://www.jmlr.org/papers/v6/ando05a.html' }
		]
	}
	else if (dtp=='20178')
	{
		dp = [                                         

			{ y: 3, label:  'lcl.uniroma1.it' }
		]
	}
	else if (dtp=='20179')
	{
		dp = [                                         
			
			{ y: 6, label:  'dblp.uni-' }
		]
	}
	else if (dtp=='201710')
	{
		dp = [                                         
			{ y: 2, label:  'bitbucket.org' }
		]
	}
	else if (dtp=='201711')
	{
		dp = [                                         
			
			{ y: 2, label:  'allenai.org' }
		]
	}
	else if (dtp=='201712')
	{
		dp = [                                         
			{ y: 1, label:  'https://sites.google.com/site/rmyeid/projects/polyglot' },
			{ y: 3, label:  'code.google.com'}
		]
	}
	else if (dtp=='201713')
	{
		dp = [                                         
			{ y: 4, label:  'nlp.stanford.edu' }
		]
	}
	else if (dtp=='201714')
	{
		dp = [                                         
			{ y: 3, label:  'alt.qcri.org' }
		]
	}
	else if (dtp=='201715')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.transacl.org/wp-' }
		]
	}
	else if (dtp=='201716')
	{
		dp = [                                         
		
			{ y: 1, label:  'https://en.wikipedia.org/wiki/Baidu_Baike' }
		]
	}
	else if (dtp=='201717')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.nlpcn.org/resource/7' }
		]
	}
	else if (dtp=='201718')
	{
		dp = [                                         
			{ y: 1, label:'http://ucam-smt.github.io/sgnmt' },
			{ y: 1, label:'https://rajpurkar.github.io/' }
		]
	}
	else if (dtp=='201719')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.iesl.cs.umass.edu/data/' },
			{ y: 1, label:  'https://web.cs.umass.edu/publication/docs' }
		]
	}
	else if (dtp=='201720')
	{
		dp = [                                         
			{ y: 1, label:  'https://dumps.wikimedia.org/' }
		]
	}
	else if (dtp=='201820')
	{
		dp = [                                         
	
			{ y: 54, label:  'github.com' }
		]
	}
	else if (dtp=='20181')
	{
		dp = [                                         
		
			{ y: 4, label:  'nlp.stanford.edu' }
		]
	}
	else if (dtp=='20182')
	{
		dp = [                                         

			{ y: 2, label:  'ltrc.iiit.ac.in' }
		]
	}
	else if (dtp=='20183')
	{
		dp = [                                         
			{ y: 2, label:  'code.google.com' },
			{ y: 1, label:  'http://developers.google.com/' },
			{ y: 1, label:  'sites.google.com' }
		]
	}
	else if (dtp=='20184')
	{
		dp = [                                         
			{ y: 21, label:  'dumps.wikimedia.org' }
		]
	}
	else if (dtp=='20185')
	{
		dp = [                                         
			
			{ y: 1, label:  'en.wikipedia.org' },
			{ y: 1, label:  'https://www.wikipedia.org' }
		]
	}
	else if (dtp=='20186')
	{
		dp = [                                         
			 
			{ y: 2, label:  'moin.delph-in.net' }
		]
	}
	else if (dtp=='20187')
	{
		dp = [                                         
			{ y: 1, label:  'http://u.cs.biu.ac.il/~yogo/data/' }
		]
	}
	else if (dtp=='20188')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.ukp.tu-darmstadt.de/' }
		]
	}
	else if (dtp=='20189')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://movieqa.cs' }
		]
	}
	else if (dtp=='201810')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.iitp.ac.in/~ai-nlp-ml/' }
		]
	}
	else if (dtp=='201811')
	{
		dp = [                                         
			{ y: 1, label:  'http://cogcomp.org/Data/QA/QC/' }
		]
	}
	else if (dtp=='201812')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://fire.irsi.res.in/fire/2015/home'}
		]
	}
	else if (dtp=='201813')
	{
		dp = [                                         
			{ y: 1, label:  'http://polyglot.readthedocs.io/en/latest/' }
		]
	}
	else if (dtp=='201814')
	{
		dp = [                                         
			{ y: 1, label:  'http://ufal.mff.cuni.cz/hindencorp' }
		]
	}
	else if (dtp=='201815')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://norvig.com/ngrams/'}
		]
	}
	else if (dtp=='201816')
	{
		dp = [                                         
			{ y: 1, label:  'http://ttic.uchicago.edu/' }
		]
	}
	else if (dtp=='201817')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.occitania.online' }
		]
	}
	else if (dtp=='201818')
	{
		dp = [                                         
			{ y: 1, label:  'http://smartschat.de/software' }
		]
	}
	else if (dtp=='201819')
	{
		dp = [                                         
			{ y: 1, label:  'https://duc.nist.gov/' }
		]
	}
	else if (dtp=='20180')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.l3s.de/' }
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