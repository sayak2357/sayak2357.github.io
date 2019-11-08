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
		name: "PACLIC: Long Papers",
		dataPoints: [
		
		
				{ y: 17, x: new Date(1995,0) },
				{ y: 49, x: new Date(1996,0) },
				{ y: 28, x: new Date(1998,0) },
				{ y: 33, x: new Date(1999,0) },
				{ y: 38, x: new Date(2000,0) },
				{ y: 72, x: new Date(2001,0) },
				{ y: 38, x: new Date(2003,0) },
				{ y: 28, x: new Date(2004,0) },
				{ y: 33, x: new Date(2005,0) },
				{ y: 29, x: new Date(2006,0) },
				{ y: 48, x: new Date(2007,0) },
				{ y: 39, x: new Date(2008,0) },
				{ y: 93, x: new Date(2009,0) },
				{ y: 88, x: new Date(2010,0) },
				{ y: 64, x: new Date(2011,0) },
				{ y: 58, x: new Date(2012,0) },
				{ y: 41, x: new Date(2013,0) },
				{ y: 63, x: new Date(2014,0) },
				{ y: 57, x: new Date(2015,0) },
				{ y: 28, x: new Date(2016,0) },
				{ y: 37, x: new Date(2017,0) },
				{ y: 81, x: new Date(2018,0) }
				
				
		]
		},
		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Short Papers",
			color: "#e3f702",
			dataPoints: [
			
			
			
				{ y: 20, x: new Date(1995,0) },
				{ y: 3, x: new Date(1996,0) },
				{ y: 10, x: new Date(1998,0) },
				{ y: 3, x: new Date(1999,0) },
				{ y: 3, x: new Date(2000,0) },
				{ y: 5, x: new Date(2001,0) },
				{ y: 12, x: new Date(2003,0) },
				{ y: 5, x: new Date(2004,0) },
				{ y: 2, x: new Date(2005,0) },
				{ y: 42, x: new Date(2006,0) },
				{ y: 7, x: new Date(2007,0) },
				{ y: 12, x: new Date(2008,0) },
				{ y: 5, x: new Date(2009,0) },
				{ y: 13, x: new Date(2010,0) },
				{ y: 3, x: new Date(2011,0) },
				{ y: 12, x: new Date(2012,0) },
				{ y: 13, x: new Date(2013,0) },
				{ y: 12, x: new Date(2014,0) },
				{ y: 8, x: new Date(2015,0) },
				{ y: 8, x: new Date(2016,0) },
				{ y: 16, x: new Date(2017,0) },
				{ y: 17, x: new Date(2018,0) }
			]
		},

		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Demo Paper",
			color: "#f70202",
			dataPoints: [
			
			
			    { y: 0, x: new Date(1995,0) },
				{ y: 0, x: new Date(1996,0) },
				{ y: 0, x: new Date(1998,0) },
				{ y: 0, x: new Date(1999,0) },
				{ y: 0, x: new Date(2000,0) },
				{ y: 0, x: new Date(2001,0) },
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
		name: "PACLIC: Old Authors",
		dataPoints: [
		
		
				{ y: 0.0, x: new Date(1995,0) },
				{ y: 0.13580246913580246, x: new Date(1996,0) },
				{ y: 0.21052631578947367, x: new Date(1998,0) },
				{ y: 0.4090909090909091, x: new Date(1999,0) },
				{ y: 0.2878787878787879, x: new Date(2000,0) },
				{ y: 0.24561403508771928, x: new Date(2001,0) },
				{ y: 0.15151515151515152, x: new Date(2003,0) },
				{ y: 0.25, x: new Date(2004,0) },
				{ y: 0.1956521739130435, x: new Date(2005,0) },
				{ y: 0.14285714285714285, x: new Date(2006,0) },
				{ y: 0.36036036036036034, x: new Date(2007,0) },
				{ y: 0.26126126126126126, x: new Date(2008,0) },
				{ y: 0.19742489270386265, x: new Date(2009,0) },
				{ y: 0.34759358288770054, x: new Date(2010,0) },
				{ y: 0.2781456953642384, x: new Date(2011,0) },
				{ y: 0.34415584415584416, x: new Date(2012,0) },
				{ y: 0.3770491803278688, x: new Date(2013,0) },
				{ y: 0.25161290322580643, x: new Date(2014,0) },
				{ y: 0.35428571428571426, x: new Date(2015,0) },
				{ y: 0.40540540540540543, x: new Date(2016,0) },
				{ y: 0.3163265306122449, x: new Date(2017,0) },
				{ y: 0.27755102040816326, x: new Date(2018,0) }
				
				
		]
		},
		
		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "New Authors",
			color: "#f70202",
			dataPoints: [
			
			
			
				{ y: 1.0, x: new Date(1995,0) },
				{ y: 0.8641975308641975, x: new Date(1996,0) },
				{ y: 0.7894736842105263, x: new Date(1998,0) },
				{ y: 0.5909090909090909, x: new Date(1999,0) },
				{ y: 0.7121212121212122, x: new Date(2000,0) },
				{ y: 0.7543859649122807, x: new Date(2001,0) },
				{ y: 0.8484848484848485, x: new Date(2003,0) },
				{ y: 0.75, x: new Date(2004,0) },
				{ y: 0.8043478260869565, x: new Date(2005,0) },
				{ y: 0.8571428571428571, x: new Date(2006,0) },
				{ y: 0.6396396396396397, x: new Date(2007,0) },
				{ y: 0.7387387387387387, x: new Date(2008,0) },
				{ y: 0.8025751072961373, x: new Date(2009,0) },
				{ y: 0.6524064171122995, x: new Date(2010,0) },
				{ y: 0.7218543046357616, x: new Date(2011,0) },
				{ y: 0.6558441558441559, x: new Date(2012,0) },
				{ y: 0.6229508196721312, x: new Date(2013,0) },
				{ y: 0.7483870967741936, x: new Date(2014,0) },
				{ y: 0.6457142857142857, x: new Date(2015,0) },
				{ y: 0.5945945945945946, x: new Date(2016,0) },
				{ y: 0.6836734693877551, x: new Date(2017,0) },
				{ y: 0.7224489795918367, x: new Date(2018,0) }
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
		name: "PACLIC: Avg. number of Papers per Author",
		dataPoints: [
			
			
			
			{ y:0.6379310344827587, x: new Date(1995,0) },
			{ y:0.6265060240963856, x: new Date(1996,0) },
			{ y:0.6333333333333333, x: new Date(1998,0) },
			{ y:0.5217391304347826, x: new Date(1999,0) },
			{ y:0.6029411764705882, x: new Date(2000,0) },
			{ y:0.5789473684210527, x: new Date(2001,0) },
			{ y:0.4766355140186916, x: new Date(2003,0) },
			{ y:0.4852941176470588, x: new Date(2004,0) },
			{ y:0.3723404255319149, x: new Date(2005,0) },
			{ y:0.3858695652173913, x: new Date(2006,0) },
			{ y:0.4827586206896552, x: new Date(2007,0) },
			{ y:0.4180327868852459, x: new Date(2008,0) },
			{ y:0.35125448028673834, x: new Date(2009,0) },
			{ y:0.44933920704845814, x: new Date(2010,0) },
			{ y:0.39880952380952384, x: new Date(2011,0) },
			{ y:0.3977272727272727, x: new Date(2012,0) },
			{ y:0.42857142857142855, x: new Date(2013,0) },
			{ y:0.43103448275862066, x: new Date(2014,0) },
			{ y:0.325, x: new Date(2015,0) },
			{ y:0.43902439024390244, x: new Date(2016,0) },
			{ y:0.4690265486725664, x: new Date(2017,0) },
			{ y:0.35, x: new Date(2018,0) }
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
		name: "PACLIC: Avg. number of Authors per Paper per Year",
		dataPoints: [
			
			
			
			{ y:1.5675675675675675, x: new Date(1995,0) },
			{ y:1.5961538461538463, x: new Date(1996,0) },
			{ y:1.5789473684210527, x: new Date(1998,0) },
			{ y:1.9166666666666667, x: new Date(1999,0) },
			{ y:1.6585365853658536, x: new Date(2000,0) },
			{ y:1.7272727272727273, x: new Date(2001,0) },
			{ y:2.0980392156862746, x: new Date(2003,0) },
			{ y:2.0606060606060606, x: new Date(2004,0) },
			{ y:2.6857142857142855, x: new Date(2005,0) },
			{ y:2.591549295774648, x: new Date(2006,0) },
			{ y:2.0714285714285716, x: new Date(2007,0) },
			{ y:2.392156862745098, x: new Date(2008,0) },
			{ y:2.8469387755102042, x: new Date(2009,0) },
			{ y:2.2254901960784315, x: new Date(2010,0) },
			{ y:2.5074626865671643, x: new Date(2011,0) },
			{ y:2.5142857142857142, x: new Date(2012,0) },
			{ y:2.3333333333333335, x: new Date(2013,0) },
			{ y:2.32, x: new Date(2014,0) },
			{ y:3.076923076923077, x: new Date(2015,0) },
			{ y:2.2777777777777777, x: new Date(2016,0) },
			{ y:2.1320754716981134, x: new Date(2017,0) },
			{ y:2.857142857142857, x: new Date(2018,0) }
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
		name: "PACLIC: Long Papers",
		dataPoints: [
			
			
			
			{ y:8.588235294117647, x: new Date(1995,0) },
			{ y:7.795918367346939, x: new Date(1996,0) },
			{ y:8.75, x: new Date(1998,0) },
			{ y:12.787878787878787, x: new Date(1999,0) },
			{ y:7.7368421052631575, x: new Date(2000,0) },
			{ y:7.111111111111111, x: new Date(2001,0) },
			{ y:9.435897435897436, x: new Date(2003,0) },
			{ y:13.25, x: new Date(2004,0) },
			{ y:16.939393939393938, x: new Date(2005,0) },
			{ y:11.10344827586207, x: new Date(2006,0) },
			{ y:14.346938775510203, x: new Date(2007,0) },
			{ y:14.025641025641026, x: new Date(2008,0) },
			{ y:17.0, x: new Date(2009,0) },
			{ y:15.415730337078651, x: new Date(2010,0) },
			{ y:17.984375, x: new Date(2011,0) },
			{ y:21.448275862068964, x: new Date(2012,0) },
			{ y:20.4390243902439, x: new Date(2013,0) },
			{ y:20.428571428571427, x: new Date(2014,0) },
			{ y:24.49122807017544, x: new Date(2015,0) },
			{ y:24.642857142857142, x: new Date(2016,0) },
			{ y:24.35135135135135, x: new Date(2017,0) },
			{ y:25.71604938271605, x: new Date(2018,0) }
		]
		},


		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Short Papers",
			color: "#C00C0C",
			dataPoints: [
			
			
			
			
			
			{ y:3.8, x: new Date(1995,0) },
			{ y:2.0, x: new Date(1996,0) },
			{ y:9.1, x: new Date(1998,0) },
			{ y:1.0, x: new Date(1999,0) },
			{ y:4.0, x: new Date(2000,0) },
			{ y:2.0, x: new Date(2001,0) },
			{ y:5.5, x: new Date(2003,0) },
			{ y:2.4, x: new Date(2004,0) },
			{ y:1.5, x: new Date(2005,0) },
			{ y:5.023809523809524, x: new Date(2006,0) },
			{ y:9.857142857142858, x: new Date(2007,0) },
			{ y:12.333333333333334, x: new Date(2008,0) },
			{ y:10.2, x: new Date(2009,0) },
			{ y:7.076923076923077, x: new Date(2010,0) },
			{ y:13.333333333333334, x: new Date(2011,0) },
			{ y:17.833333333333332, x: new Date(2012,0) },
			{ y:18.384615384615383, x: new Date(2013,0) },
			{ y:6.666666666666667, x: new Date(2014,0) },
			{ y:17.375, x: new Date(2015,0) },
			{ y:8.625, x: new Date(2016,0) },
			{ y:12.1875, x: new Date(2017,0) },
			{ y:17.88235294117647, x: new Date(2018,0) }
			
			
			
			
			]
	},
	{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Demo Papers",
			color: "#309000",
			dataPoints: [
			
			
			
			
			
			{ y:0, x: new Date(1995,0) },
			{ y:0, x: new Date(1996,0) },
			{ y:0, x: new Date(1998,0) },
			{ y:0, x: new Date(1999,0) },
			{ y:0, x: new Date(2000,0) },
			{ y:0, x: new Date(2001,0) },
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
		name: "PACLIC: URLs per Paper 1996-2018",
		dataPoints: [
			
			
			
			{ y:0.2702702702702703, x: new Date(1995,0) },
			{ y:0.21153846153846154, x: new Date(1996,0) },
			{ y:0.0, x: new Date(1998,0) },
			{ y:0.05555555555555555, x: new Date(1999,0) },
			{ y:0.3902439024390244, x: new Date(2000,0) },
			{ y:0.5194805194805194, x: new Date(2001,0) },
			{ y:0.5882352941176471, x: new Date(2003,0) },
			{ y:1.696969696969697, x: new Date(2004,0) },
			{ y:2.3714285714285714, x: new Date(2005,0) },
			{ y:1.1408450704225352, x: new Date(2006,0) },
			{ y:1.5892857142857142, x: new Date(2007,0) },
			{ y:2.4901960784313726, x: new Date(2008,0) },
			{ y:2.336734693877551, x: new Date(2009,0) },
			{ y:2.2549019607843137, x: new Date(2010,0) },
			{ y:2.298507462686567, x: new Date(2011,0) },
			{ y:2.7857142857142856, x: new Date(2012,0) },
			{ y:2.0, x: new Date(2013,0) },
			{ y:2.066666666666667, x: new Date(2014,0) },
			{ y:2.6307692307692307, x: new Date(2015,0) },
			{ y:2.5, x: new Date(2016,0) },
			{ y:2.7547169811320753, x: new Date(2017,0) },
			{ y:2.9591836734693877, x: new Date(2018,0) }
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
		name: "PACLIC : Avg. number of URLs in footnote per Paper per Year",
		dataPoints: [
			
			
			
			{ y:0.0, x: new Date(1995,0) },
			{ y:0.0, x: new Date(1996,0) },
			{ y:0.0, x: new Date(1998,0) },
			{ y:0.0, x: new Date(1999,0) },
			{ y:0.024390243902439025, x: new Date(2000,0) },
			{ y:0.0, x: new Date(2001,0) },
			{ y:0.0392156862745098, x: new Date(2003,0) },
			{ y:0.45454545454545453, x: new Date(2004,0) },
			{ y:0.05714285714285714, x: new Date(2005,0) },
			{ y:0.11267605633802817, x: new Date(2006,0) },
			{ y:0.25, x: new Date(2007,0) },
			{ y:0.43137254901960786, x: new Date(2008,0) },
			{ y:0.6938775510204082, x: new Date(2009,0) },
			{ y:0.7058823529411765, x: new Date(2010,0) },
			{ y:0.5522388059701493, x: new Date(2011,0) },
			{ y:0.9714285714285714, x: new Date(2012,0) },
			{ y:0.7777777777777778, x: new Date(2013,0) },
			{ y:0.68, x: new Date(2014,0) },
			{ y:1.1846153846153846, x: new Date(2015,0) },
			{ y:1.0555555555555556, x: new Date(2016,0) },
			{ y:0.7547169811320755, x: new Date(2017,0) },
			{ y:0.9285714285714286, x: new Date(2018,0) }
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
		name: "PACLIC : Avg. number of Tables per Paper per Year",
		dataPoints: [
			
			
			
			{ y:1.135135135135135, x: new Date(1995,0) },
			{ y:0.8846153846153846, x: new Date(1996,0) },
			{ y:1.368421052631579, x: new Date(1998,0) },
			{ y:1.3055555555555556, x: new Date(1999,0) },
			{ y:0.8292682926829268, x: new Date(2000,0) },
			{ y:1.1688311688311688, x: new Date(2001,0) },
			{ y:1.803921568627451, x: new Date(2003,0) },
			{ y:2.59375, x: new Date(2004,0) },
			{ y:1.8, x: new Date(2005,0) },
			{ y:2.323943661971831, x: new Date(2006,0) },
			{ y:2.111111111111111, x: new Date(2007,0) },
			{ y:3.2941176470588234, x: new Date(2008,0) },
			{ y:3.7755102040816326, x: new Date(2009,0) },
			{ y:2.396039603960396, x: new Date(2010,0) },
			{ y:4.409090909090909, x: new Date(2011,0) },
			{ y:4.202898550724638, x: new Date(2012,0) },
			{ y:3.5925925925925926, x: new Date(2013,0) },
			{ y:3.138888888888889, x: new Date(2014,0) },
			{ y:3.7384615384615385, x: new Date(2015,0) },
			{ y:2.411764705882353, x: new Date(2016,0) },
			{ y:3.0943396226415096, x: new Date(2017,0) },
			{ y:4.418367346938775, x: new Date(2018,0) }
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
		name: "PACLIC : Avg. number of Figures per Paper per Year",
		dataPoints: [
			
			
			
			{ y:0.918918918918919, x: new Date(1995,0) },
			{ y:0.6346153846153846, x: new Date(1996,0) },
			{ y:1.3157894736842106, x: new Date(1998,0) },
			{ y:1.3055555555555556, x: new Date(1999,0) },
			{ y:1.4634146341463414, x: new Date(2000,0) },
			{ y:1.87012987012987, x: new Date(2001,0) },
			{ y:1.5686274509803921, x: new Date(2003,0) },
			{ y:1.40625, x: new Date(2004,0) },
			{ y:2.914285714285714, x: new Date(2005,0) },
			{ y:1.267605633802817, x: new Date(2006,0) },
			{ y:1.7777777777777777, x: new Date(2007,0) },
			{ y:1.7450980392156863, x: new Date(2008,0) },
			{ y:2.204081632653061, x: new Date(2009,0) },
			{ y:1.9504950495049505, x: new Date(2010,0) },
			{ y:2.4393939393939394, x: new Date(2011,0) },
			{ y:2.0434782608695654, x: new Date(2012,0) },
			{ y:2.7777777777777777, x: new Date(2013,0) },
			{ y:2.375, x: new Date(2014,0) },
			{ y:3.1384615384615384, x: new Date(2015,0) },
			{ y:1.8823529411764706, x: new Date(2016,0) },
			{ y:1.8113207547169812, x: new Date(2017,0) },
			{ y:3.1020408163265305, x: new Date(2018,0) }
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
		name: "PACLIC : Most Popular primary URL domains & their Frequencies",
		legendText: "",
		dataPoints: [
			{ y:62,  label:'github.com'  },
			{ y:35,  label:'nlp.stanford.edu'  },
			{ y:34,  label:'en.wikipedia.org'  },
			{ y:24,  label:'code.google.com'  },
			{ y:22,  label:'www.statmt.org'  },
			{ y:17,  label:'sourceforge.net'  },
			{ y:15,  label:'chasen.org'  },
			{ y:14,  label:'taku910.github.io'  },
			{ y:13,  label:'crfpp.sourceforge.net'  },
			{ y:13,  label:'dumps.wikimedia.org'  },
			{ y:11,  label:'www.ldc.upenn.edu'  },
			{ y:11,  label:'www.csie.ntu.edu.tw'  },
			{ y:10,  label:'ltrc.iiit.ac.in'  },
			{ y:10,  label:'www.nltk.org'  },
			{ y:9,  label:'svmlight.joachims.org'  },
			{ y:9,  label:'www.nist.gov'  },
			{ y:9,  label:'homepages.inf.ed.ac.uk'  },
			{ y:8,  label:'www.cs.cmu.edu'  },
			{ y:8,  label:'www.cis.upenn.edu'  },
			{ y:8,  label:'wordnet.princeton.edu'  },
			{ y:8,  label:'www.language-archives.org'}
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
		name: "PACLIC : Top Unique GitHub Pages",
		legendText: "",
		dataPoints: [
			{ y: 1, label: 'tomtung/' },
			{ y: 2, label: 'aisophie/HWS' },
			{ y: 1, label: 'tkyf/jpair' },
			{ y: 1, label: 'glorotxa/SME' },
			{ y: 1, label: 'whym/growthring' },
			{ y: 1, label: 'jordwest/mecab-docs-en' },
			{ y: 1, label: 'klb3713/sentence2vec' },
			{ y: 1, label: 'zzsfornlp/nngdparser' },
			{ y: 1, label: 'othman-zennaki/RNN_' },
			{ y: 1, label: 'lzhang10/maxent' },
			{ y: 1, label: 'lisa-groundhog/GroundHog' },
			{ y: 1, label: 'slavpetrov/' },
			{ y: 1, label: 'jhclark/multeval' },
			{ y: 1, label: 'clab/fast' },
			{ y: 1, label: 'MingleiLI/ACE2005' },
			{ y: 1, label: 'esantus/APSyn' },
			{ y: 1, label: 'moses-smt/giza-pp' },
			{ y: 1, label: 'nguyenlab/SentAlign-Similarity' },
			{ y: 1, label: 'moses-smt/mgiza' },
			{ y: 1, label: 'wang-h/HieraParser' }
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
		name: "PACLIC : Top University Pages",
		legendText: "",
		dataPoints: [ 
			{ y: 13, label:'R.O.C.' },
			{ y: 12, label:'De La Salle University Manila' },
			{ y: 9, label:'City University of Hong Kong' },
			{ y: 9, label:'Kitakyushu Campus – Waseda University' },
			{ y: 9, label:'The Hong Kong Polytechnic University' },
			{ y: 8, label:'Tohoku University' },
			{ y: 7, label:'Korea University' },
			{ y: 7, label:'Academia Sinica' },
			{ y: 6, label:'The University of Tokyo Kashiwa Campus' },
			{ y: 6, label:'Saga University Information Technology Center' },
			{ y: 5, label:'Yonsei University' },
			{ y: 5, label:'Japan Advanced Institute of Science and Technology' },
			{ y: 5, label:'Seoul National University' },
			{ y: 5, label:'Sardegna' },
			{ y: 5, label:'Kyoto University' },
			{ y: 4, label:'National Tsing Hua University' },
			{ y: 4, label:'Kyung Hee Tae Kwon Do' },
			{ y: 3, label:'Universität des Saarlandes' },
			{ y: 3, label:'Hankuk University of Foreign Studies Station' },
			{ y: 3, label:'Dongseo University' },
			{ y: 3, label:'University of Edinburgh' }
			
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
		
		
		if (dt==1995)
		{
		
		dp = [                                         
			{ y:1, label: 'nus.sg' },
			{ y:2, label: 'compling.hu-' },
			{ y:1, label: 'hu-berlin.de' },
			{ y:1, label: 'uni-erlangen.de' },
			{ y:1, label: 'ora.conVdevcorner' },
			{ y:1, label: 'website.ora.com' }
			
			
		]
		}
		else if (dt==1996)
		{
		
		dp = [  
			{ y:1, label: 'seasrc.th' },
			{ y:1, label: 'seasrc.th.net' },
			{ y:2, label: 'xxx.lanl.gov' },
			{ y:2, label: 'sinica.edu.twiftms-' },
			{ y:1, label: 'uni-duesseldorf.derryu' }
			
			
		]
		}
		else if(dt==1997)
		{
			dp= [                                         
			
			
			
		]
		}
		else if(dt==1998)
		{
			dp= [                                         
			
			
			
		]
		}
		else if(dt==1999)
		{
			dp= [                                         
			
			{ y:1, label: 'indiana.edu' }
			
		]
		}
		else if(dt==2000)
		{
			dp= [
			{ y:1, label: 'lu.se' },
			{ y:1, label: 'lanl.gov' },
			{ y:2, label: 'upenn.edu' },
			{ y:1, label: 'tohokugalcuin.acjprfuto' },
			{ y:1, label: 'tohoku-galcuin..acjp' },
			{ y:1, label: 'rutgers.edu' },
			{ y:2, label: 'how-net.com' }
			
		]
		}
		else if(dt==2001)
		{
			dp= [ 
			{ y:1, label: 'cmu.edu' },
			{ y:2, label: 'upenn.edu' },
			{ y:1, label: 'mitre.org' },
			{ y:1, label: 'sri.com' },
			{ y:1, label: 'stanford.edu' },
			{ y:2, label: 'sinica.edu.tw' },
			{ y:1, label: 'dcs.ac.uk' },
			{ y:1, label: 'sina.com.cn' },
			{ y:1, label: 'google.com' },
			{ y:1, label: 'bell-labs.Com' },
			{ y:1, label: 'transtar.com.cn' },
			{ y:1, label: 'goo.ne.jp' },
			{ y:1, label: 'aist-nara.ac.jp' },
			{ y:1, label: 'pchome.com.tw' },
			{ y:1, label: 'emurasoft.com' },
			{ y:1, label: 'uva.n1' },
			{ y:1, label: 'hu-berlin.det-h2816i3x' },
			{ y:1, label: 'promo.net' },
			{ y:3, label: 'linguistik.uni-' }
			
		]
		}
		else if(dt==2003)
		{
			dp= [ 
			{ y:1, label: 'upenn.edu' },
			{ y:1, label: 'mediaindo.co.id' },
			{ y:1, label: 'stanford.edu' },
			{ y:1, label: 'cts.com.tw' },
			{ y:1, label: 'chinatimes.com' },
			{ y:2, label: 'keenage.com' },
			{ y:1, label: 'nj.nec.com' },
			{ y:1, label: 'nj.nec.corn' },
			{ y:1, label: 'n.j.nec.com' },
			{ y:1, label: 'sinica.edu.tw' },
			{ y:1, label: 'livac.org' },
			{ y:1, label: 'joachims.org' },
			{ y:1, label: 'bppt.go.id' },
			{ y:1, label: 'hncnlp.com' },
			{ y:1, label: 'hcu.ox.ac.uk' },
			{ y:1, label: 'szate.ac.uld' },
			{ y:1, label: 'laodonsz.com.vn' }
			
		]
		}
		else if(dt==2004)
		{
			dp= [ 
			{ y:1, label: 'cnn.com' },
			{ y:2, label: 'ontologyportal.org' },
			{ y:5, label: 'sinica.edu.tw' },
			{ y:1, label: 'princeton.edu' },
			{ y:1, label: 'stanford.edu' },
			{ y:2, label: 'upenn.edu' },
			{ y:2, label: 'chasen.org' },
			{ y:1, label: 'time.com' },
			{ y:1, label: 'bbc.co.uk' },
			{ y:1, label: 'nict.go.jp' },
			{ y:2, label: 'naist.jp' },
			{ y:1, label: 'aist-nara.ac.jp' },
			{ y:1, label: 'wikipedia.org' },
			{ y:1, label: 'google.co.jp' },
			{ y:1, label: 'cmu.edu' },
			{ y:1, label: 'mofa.gov.tw' },
			{ y:1, label: 'yellowbridge.com' },
			{ y:1, label: 'arxiv.org' },
			{ y:1, label: 'nyu.edu' }
			
		]
		}
		else if(dt==2005)
		{
			dp= [                                         
			{ y:3, label: 'w3.org' },
			{ y:1, label: 'upenn.edu' },
			{ y:1, label: 'nyu.edu' },
			{ y:4, label: 'sinica.edu.tw' },
			{ y:1, label: 'aist-nara.ac.jp' },
			{ y:1, label: 'joachims.org' },
			{ y:1, label: 'jaist.ac.jp' },
			{ y:2, label: 'sourceforge.net' },
			{ y:2, label: 'lbc21.jp' },
			{ y:1, label: 'chasen.org' },
			{ y:2, label: 'mit.edu' },
			{ y:1, label: 'nist.gov' },
			{ y:2, label: 'cmu.edu' },
			{ y:3, label: 'omniglot.com' },
			{ y:2, label: 'unhchr.ch' },
			{ y:2, label: 'rosettaproject.org' },
			{ y:2, label: 'ethnologue.com' },
			{ y:2, label: 'language-' },
			{ y:1, label: 'wikipedia.org' },
			{ y:2, label: 'deaflibrary.org' }
			
		]
		}
		else if(dt==2006)
		{
			dp= [ 
			{ y:1, label: 'umn.edu' },
			{ y:2, label: 'timeml.org' },
			{ y:2, label: 'aspell.net' },
			{ y:1, label: 'cpan.org' },
			{ y:5, label: 'upenn.edu' },
			{ y:4, label: 'sinica.edu.tw' },
			{ y:1, label: 'wikipedia.org' },
			{ y:1, label: 'havard.edu' },
			{ y:1, label: 'cornell.edu' },
			{ y:1, label: 'stanford.edu' },
			{ y:1, label: 'naist.jp' },
			{ y:1, label: 'keenage.com' },
			{ y:1, label: 'berkeley.edu' },
			{ y:2, label: 'cmu.edu' },
			{ y:1, label: 'amtaweb.org' },
			{ y:1, label: 'princeton.edu' },
			{ y:1, label: 'ibm.com' },
			{ y:2, label: 'nist.gov' },
			{ y:1, label: 'sejong.or.kr' },
			{ y:1, label: 'mireene.com' }
			
		]
		}
		else if(dt==2007)
		{
			dp= [ 
			{ y:1, label: 'doi.org' },
			{ y:1, label: 'chasen.org' },
			{ y:2, label: 'arabeyes.org' },
			{ y:5, label: 'sourceforge.net' },
			{ y:1, label: 'wiktionary.org' },
			{ y:1, label: 'yakushite.net' },
			{ y:1, label: 'princeton.edu' },
			{ y:2, label: 'creighton.edu' },
			{ y:2, label: 'sinica.edu.tw' },
			{ y:2, label: 'upenn.edu' },
			{ y:1, label: 'umanitoba.ca' },
			{ y:1, label: 'hum.au.dk' },
			{ y:3, label: 'fmprc.gov.cn' },
			{ y:2, label: 'mitre.org' },
			{ y:1, label: 'columbia.edu' },
			{ y:1, label: 'nist.gov' },
			{ y:1, label: 'acm.org' },
			{ y:2, label: 'umn.edu' },
			{ y:1, label: 'jhu.edu' },
			{ y:1, label: 'cmu.edu' }
			
		]
		}
		else if(dt==2008)
		{
			dp= [   
			{ y:3, label: 'nist.gov' },
			{ y:5, label: 'upenn.edu' },
			{ y:6, label: 'sourceforge.net' },
			{ y:1, label: 'languagemonitor.com' },
			{ y:7, label: 'language-archives.org' },
			{ y:2, label: 'sil.org' },
			{ y:1, label: 'nyu.edu' },
			{ y:2, label: 'princeton.edu' },
			{ y:3, label: 'iiit.ac.in' },
			{ y:2, label: 'cmu.edu' },
			{ y:3, label: 'mit.edu' },
			{ y:1, label: 'uva.nl' },
			{ y:1, label: 'senseval.org' },
			{ y:1, label: 'natcorp.ox.ac.uk' },
			{ y:4, label: 'chasen.org' },
			{ y:2, label: 'livedoor.com' },
			{ y:2, label: 'kyoto-u.ac.jp' },
			{ y:1, label: 'tartarus.org' },
			{ y:1, label: 'unsw.edu.au' },
			{ y:2, label: 'kakaku.com' }
			
		]
		}
		else if(dt==2009)
		{
			dp= [                                         
			{ y:2, label: 'msra.cn' },
			{ y:2, label: 'statmt.org' },
			{ y:3, label: 'google.com' },
			{ y:2, label: 'uned.es' },
			{ y:2, label: 'uni-stuttgart.de' },
			{ y:10, label: 'sourceforge.net' },
			{ y:2, label: 'aist-nara.ac.jp' },
			{ y:5, label: 'iiit.ac.in' },
			{ y:4, label: 'homepages.inf.ed.ac.uk' },
			{ y:2, label: 'natcorp.ox.ac.uk' },
			{ y:4, label: 'uvt.nl' },
			{ y:2, label: 'svmlight.joachims.org' },
			{ y:2, label: 'vxu.se' },
			{ y:6, label: 'upenn.edu' },
			{ y:9, label: 'wikipedia.org' },
			{ y:3, label: 'stanford.edu' },
			{ y:4, label: 'ntu.edu.tw' },
			{ y:3, label: 'chasen.org' },
			{ y:2, label: 'nlp.org.cn' },
			{ y:2, label: 'sri.com' }
			
		]
		}
		else if(dt==2010)
		{
			dp=[   
			{ y:5, label: 'cmu.edu' },
			{ y:2, label: 'ethnologue.com' },
			{ y:6, label: 'google.com' },
			{ y:8, label: 'wikipedia.org' },
			{ y:14, label: 'sourceforge.net' },
			{ y:2, label: 'aist-nara.ac.jp' },
			{ y:5, label: 'iiit.ac.in' },
			{ y:2, label: 'sejong.or.kr' },
			{ y:2, label: 'natcorp.ox.ac.uk' },
			{ y:2, label: 'ui.ac.id' },
			{ y:2, label: 'joachims.org' },
			{ y:3, label: 'nih.gov' },
			{ y:1, label: 'upenn.edu' },
			{ y:2, label: 'stanford.edu' },
			{ y:2, label: 'u-tokyo.ac.jp' },
			{ y:3, label: 'chasen.org' },
			{ y:2, label: 'internetworldstats.com' },
			{ y:5, label: 'sinica.edu.tw' },
			{ y:2, label: 'uchicago.edu' },
			{ y:2, label: 'sdu.dk' }
			
		]
		}
		else if(dt==2011)
		{
			dp= [ 
			{ y:1, label: 'mghamdi' },
			{ y:1, label: 'dreye.com' },
			{ y:5, label: 'delph-in.net' },
			{ y:3, label: 'princeton.edu' },
			{ y:1, label: 'statmt.org' },
			{ y:5, label: 'sourceforge.net' },
			{ y:2, label: 'ethnologue.com' },
			{ y:1, label: 'opensource.org' },
			{ y:2, label: 'globalwordnet.org' },
			{ y:3, label: 'google.com' },
			{ y:1, label: 'lemurproject.org' },
			{ y:5, label: 'wikipedia.org' },
			{ y:2, label: 'archimuse.com' },
			{ y:2, label: 'joachims.org' },
			{ y:6, label: 'stanford.edu' },
			{ y:1, label: 'nict.gov.tw' },
			{ y:5, label: 'sinica.edu.tw' },
			{ y:1, label: 'chasen.org' },
			{ y:2, label: 'nii.ac.jp' },
			{ y:1, label: 'timeml.org' }
			
			
		]
		}
		else if(dt==2012)
		{
			dp= [                                         
			
			{ y:1, label: 'nih.gov' },
			{ y:2, label: 'no-ip.org' },
			{ y:4, label: 'upenn.edu' },
			{ y:10, label: 'sinica.edu.tw' },
			{ y:5, label: 'sourceforge.net' },
			{ y:4, label: 'stanford.edu' },
			{ y:2, label: 'joachims.org' },
			{ y:4, label: 'statmt.org' },
			{ y:7, label: 'google.com' },
			{ y:2, label: 'dict.edu.tw' },
			{ y:2, label: 'pitt.edu' },
			{ y:2, label: 'loc.gov' },
			{ y:2, label: 'umass.edu' },
			{ y:3, label: 'wikimedia.org' },
			{ y:2, label: 'nltk.org' },
			{ y:2, label: 'keenage.com' },
			{ y:1, label: 'nist.gov' },
			{ y:2, label: 'tokuteicorpus.jp' },
			{ y:5, label: 'ntu.edu.tw' },
			{ y:2, label: 'kyoto-u.ac.jp' }
		]
		}
		else if(dt==2013)
		{
			dp= [                                         
			{ y:1, label: 'uam.es' },
			{ y:2, label: 'wals.info' },
			{ y:2, label: 'sourceforge.net' },
			{ y:1, label: 'google.com' },
			{ y:7, label: 'wikipedia.org' },
			{ y:2, label: 'homepages.inf.ed.ac.uk' },
			{ y:1, label: 'cambridge.org' },
			{ y:1, label: 'github.com' },
			{ y:5, label: 'googlecode.com' },
			{ y:3, label: 'uclouvain.be' },
			{ y:2, label: 'lingfil.uu.se' },
			{ y:2, label: 'triplet.cc' },
			{ y:2, label: 'praat.org' },
			{ y:1, label: 'apache.org' },
			{ y:1, label: 'u-tokyo.ac.jp' },
			{ y:1, label: 'nist.gov' },
			{ y:1, label: 'baidu.com' },
			{ y:1, label: 'wiktionary.org' },
			{ y:2, label: 'thottingal.in' },
			{ y:2, label: 'sdu.dk' }
			
		]
		}
		else if(dt==2014)
		{
			dp= [ 
			{ y:1, label: 'nyu.edu' },
			{ y:4, label: 'wikipedia.org' },
			{ y:5, label: 'twitter.com' },
			{ y:7, label: 'stanford.edu' },
			{ y:1, label: 'homepages.inf.ed.ac.uk' },
			{ y:2, label: 'sourceforge.net' },
			{ y:2, label: 'football.com' },
			{ y:2, label: 'nist.gov' },
			{ y:5, label: 'google.com' },
			{ y:1, label: 'pitt.edu' },
			{ y:2, label: 'princeton.edu' },
			{ y:1, label: 'cmu.edu' },
			{ y:3, label: 'ntu.edu.tw' },
			{ y:2, label: 'tu-darmstadt.de' },
			{ y:3, label: 'wikimedia.org' },
			{ y:2, label: 'thai-language.com' },
			{ y:3, label: 'github.com' },
			{ y:1, label: 'upenn.edu' },
			{ y:3, label: 'R-project.org' },
			{ y:2, label: 'eonli.ne' }
			
		]
		}
		else if(dt==2015)
		{
			dp= [ 
			{ y:2, label: 'yelp.com' },
			{ y:3, label: 'statmt.org' },
			{ y:2, label: 'ntu.edu.tw' },
			{ y:4, label: 'sourceforge.net' },
			{ y:8, label: 'github.com' },
			{ y:2, label: 'nltk.org' },
			{ y:2, label: 'scikit-learn.org' },
			{ y:3, label: 'github.io' },
			{ y:8, label: 'google.com' },
			{ y:2, label: 'nist.gov' },
			{ y:7, label: 'wikipedia.org' },
			{ y:7, label: 'stanford.edu' },
			{ y:3, label: 'upenn.edu' },
			{ y:4, label: 'wikimedia.org' },
			{ y:2, label: 'qwone.com' },
			{ y:2, label: 'waikato.ac.nz' },
			{ y:2, label: 'sri.com' },
			{ y:2, label: 'sketchengine.co' },
			{ y:2, label: 'sina.com.cn' },
			{ y:2, label: 'twitter.com' }
			
			
		]
		}
		else if(dt==2016)
		{
			dp= [  
			{ y:3, label: 'bit.ly' },
			{ y:8, label: 'github.com' },
			{ y:1, label: 'yahoo.co.kr' },
			{ y:1, label: 'natcorp.ox.ac.uk' },
			{ y:1, label: 'upenn.edu' },
			{ y:1, label: 'nltk.org' },
			{ y:5, label: 'statmt.org' },
			{ y:2, label: 'sourceforge.net' },
			{ y:3, label: 'phontron.com' },
			{ y:1, label: 'nist.gov' },
			{ y:1, label: 'stanford.edu' },
			{ y:3, label: 'github.io' },
			{ y:5, label: 'google.com' },
			{ y:1, label: 'chainer.org' },
			{ y:1, label: 'microsoft.com' },
			{ y:1, label: 'wikipedia.org' },
			{ y:1, label: 'mpg.de' },
			{ y:2, label: 'chokkan.org' },
			{ y:1, label: 'amazon.com' },
			{ y:1, label: 'usf.edu' }
			
		]
		}
		else if(dt==2017)
		{
			dp= [                                         
			{ y:1, label: 'mit.edu' },
			{ y:1, label: 'cambridge.org' },
			{ y:2, label: 'apa.org' },
			{ y:2, label: 'wikipedia.org' },
			{ y:1, label: 'doi:10.1515' },
			{ y:2, label: 'hkbu.edu.hk' },
			{ y:2, label: 'ibaraki.ac.jp' },
			{ y:4, label: 'stanford.edu' },
			{ y:1, label: 'goo.gl' },
			{ y:1, label: 'desiquintans.com' },
			{ y:10, label: 'github.com' },
			{ y:3, label: 'phontron.com' },
			{ y:1, label: 'kyoto-u.ac.jp' },
			{ y:5, label: 'statmt.org' },
			{ y:3, label: 'cnts.ua.ac.be' },
			{ y:1, label: 'vlsp.org.vn' },
			{ y:1, label: 'baomoi.com' },
			{ y:2, label: 'google.com' },
			{ y:1, label: 'jhu.edu' },
			{ y:3, label: 'biolab.si' }
			
		]
		}
		else if(dt==2018)
		{
			dp= [ 
			{ y:1, label: 'mit.edu' },
			{ y:33, label: 'github.com' },
			{ y:3, label: 'statmt.org' },
			{ y:11, label: 'github.io' },
			{ y:5, label: 'google.com' },
			{ y:4, label: 'arxiv.org' },
			{ y:3, label: 'wikimedia.org' },
			{ y:5, label: 'stanford.edu' },
			{ y:4, label: 'ted.com' },
			{ y:1, label: 'scikit-learn.org' },
			{ y:3, label: 'goo.gl' },
			{ y:1, label: 'indiatimes.com' },
			{ y:3, label: 'samayam.com' },
			{ y:1, label: 'naver.com' },
			{ y:7, label: 'ninjal.ac.jp' },
			{ y:3, label: 'nltk.org' },
			{ y:1, label: 'doi.acm.org' },
			{ y:23, label: 'doi.org' },
			{ y:3, label: 'praat.org' },
			{ y:2, label: 'cuhk.edu.hk' }
			
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
	
	
	
	
	
	if (dtp=='19950')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.iscs.nus.sg/luakt' }
			
		]
	}
	else if (dtp=='19951')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.compling.hu-' },
			{ y: 1, label: 'http://www.compling.hu-berlin.de/-stefan/PS/hpsg.ps.gz' }
			
		]
	}
	else if (dtp=='19952')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.compling.hu-berlin.de/-stefan/PS/hpsg.ps.gz'}
			
		]
	}
	else if (dtp=='19953')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.linguistik.uni-erlangen.de/Malaga.en.html'}
			
		]
	}
	else if (dtp=='19954')
	{
		dp = [                                         
			{ y: 1, label: 'http://website.ora.conVdevcorner/db-src/index.html'}
			
		]
	}
	else if (dtp=='19955')
	{
		dp = [                                         
			{ y: 1, label: 'http://website.ora.com/devcorner/db-src/vb-top.html'}
			
		]
	}
	else if (dtp=='19961')
	{
		dp = [                                         
			{ y: 1, label: 'http://seasrc.th.net'}
			
		]
	}
	else if (dtp=='19960')
	{
		dp = [                                         
			{ y: 1, label: 'http://seasrc.th'}
			
		]
	}
	else if (dtp=='19962')
	{
		dp = [                                         
			{ y: 2, label: 'xxx.lanl.gov' }
			
		]
	}
	else if (dtp=='19963')
	{
		dp = [                                         
			{ y: 2, label: 'www.sinica.edu.twiftms-'}
			
		]
	}
	else if (dtp=='19964')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.phil-fak.uni-duesseldorf.derryu/'}
			
		]
	}
	else if (dtp=='19970')
	{
		dp = [                                         
						
		]
	}
	else if (dtp=='19980')
	{
		dp = [                                         
						
		]
	}
	else if (dtp=='19990')
	{
		dp = [                                         
			{ y: 2, label: 'http://www.cs.indiana.edu/eventimaics96/Proceedings/Wang/wang.ps' }		
		]
	}
	else if (dtp=='20000')
	{
		dp = [                                         
			{ y: 1, label: 'http://lucs.lu.se/Multimodal/Program.html).1998' }			
		]
	}
	else if (dtp=='20001')
	{
		dp = [                                         
			{ y: 1, label: 'http://xxx.lanl.gov/abs/cmp-lg/9510008' }			
		]
	}
	else if (dtp=='20002')
	{
		dp = [                                         
			{ y: 1, label:'http://www.ldc.upenn.edu' },
			{ y: 1, label:'http://www.Idc.upenn.edu/ldc/about/chjapanese.html' }			
		]
	}
	else if (dtp=='20003')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.izavc.tohokugalcuin.acjprfuto/futo.html' }			
		]
	}
	else if (dtp=='20004')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.izavc.tohoku-galcuin..acjp/futoduto.html' }			
		]
	}
	else if (dtp=='20005')
	{
		dp = [                                         
			{ y: 1, label: 'http://ruccs.rutgers.edu/roa.html]' }			
		]
	}
	else if (dtp=='20006')
	{
		dp = [                                         
			{ y: 2, label: 'www.how-net.com' }			
		]
	}
	else if (dtp=='20010')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cs.cmu.edu/' }			
		]
	}
	else if (dtp=='20011')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.ldc.upenn.edu' },
			{ y: 1, label: 'http://www.cis.upenn.edu/' }			
		]
	}
	else if (dtp=='20012')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.mitre.org/technology/alembic-workbench' }			
		]
	}
	else if (dtp=='20013')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.ai.sri.com/natural-language/projects/fastus.html' }			
		]
	}
	else if (dtp=='20014')
	{
		dp = [                                         
			{ y: 1, label: 'http://www-csli.stanford.edu/' }			
		]
	}
	else if (dtp=='20015')
	{
		dp = [                                         
			{ y: 2, label: 'rockey.iis.sinica.edu.tw' }			
		]
	}
	else if (dtp=='20016')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.dcs.ac.uk/Keith/' }			
		]
	}
	else if (dtp=='20017')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.sina.com.cn' }			
		]
	}
	else if (dtp=='20018')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.google.com/intl/zh-TW/' }			
		]
	}
	else if (dtp=='20019')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.bell-labs.Com/project/tts/rnandarin-gb.html' }			
		]
	}
	else if (dtp=='200110')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.transtar.com.cn/' }			
		]
	}
	else if (dtp=='200111')
	{
		dp = [                                         
			{ y: 1, label: 'http://goo.ne.jp'}			
		]
	}
	else if (dtp=='200112')
	{
		dp = [                                         
			{ y: 1, label: 'http://chasen.aist-nara.ac.jp/chasen/doc/chasen-2.2.8.pdf' }			
		]
	}
	else if (dtp=='200113')
	{
		dp = [                                         
			{ y: 1, label: 'http://news.pchome.com.tw/' }			
		]
	}
	else if (dtp=='200114')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.emurasoft.com/index.htm' }			
		]
	}
	else if (dtp=='200115')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.hum.uva.n1/ewn' }			
		]
	}
	else if (dtp=='200116')
	{
		dp = [                                         
			{ y: 1, label: 'http://inamorsz.hu-berlin.det-h2816i3x/shcon.pdf' }			
		]
	}
	else if (dtp=='200117')
	{
		dp = [                                         
			{ y: 1, label: 'http://promo.net/pg/' }			
		]
	}
	else if (dtp=='200118')
	{
		dp = [                                         
			{ y: 1, label: 'www.linguistik.uni-' },
			{ y: 1, label: 'http://www.linguistik.uni-erlangen.dehirrh/Reviews_sampson.html' }
		]
	}
	else if (dtp=='200312')
	{
		dp = [                                         
				
			{ y: 1, label: 'http://nlp.aia.bppt.go.id/kebi/' }	
		]
	}
	else if (dtp=='20031')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://www.mediaindo.co.id' }			
		]
	}
	else if (dtp=='20032')
	{
		dp = [                                         
			{ y: 1, label: 'http://www-csli.stanford.edu/' }			
		]
	}
	else if (dtp=='20033')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cts.com.tw' }			
		]
	}
	else if (dtp=='20034')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.chinatimes.com' }			
		]
	}
	else if (dtp=='20035')
	{
		dp = [                                         
			{ y: 2, label: 'www.keenage.com' }			
		]
	}
	else if (dtp=='20036')
	{
		dp = [                                         
			{ y: 1, label: 'http://citeseer.nj.nec.com' }			
		]
	}
	else if (dtp=='20037')
	{
		dp = [                                         
			{ y: 1, label: 'http://citeseer.nj.nec.corn' }			
		]
	}
	else if (dtp=='20038')
	{
		dp = [                                         
			{ y: 1, label: 'http://citeseer.n.j.nec.com' }			
		]
	}
	else if (dtp=='20039')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.sinica.edu.tw/SinicaCorpus/' }			
		]
	}
	else if (dtp=='200310')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.livac.org' }			
		]
	}
	else if (dtp=='200311')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.joachims.org/svm_light' }			
		]
	}
	else if (dtp=='20030')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.ldc.upenn.edu/Projects/Chinese/' }			
		]
	}
	else if (dtp=='200313')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.hncnlp.com' }			
		]
	}
	else if (dtp=='200314')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.hcu.ox.ac.uk/BNCI' }			
		]
	}
	else if (dtp=='200315')
	{
		dp = [                                         
			{ y: 1, label: 'http://szate.ac.uld' }			
		]
	}
	else if (dtp=='200316')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.laodonsz.com.vn' }			
		]
	}
	else if (dtp=='20040')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cnn.com/' }			
		]
	}
	else if (dtp=='20041')
	{
		dp = [                                         
			{ y: 2, label: 'www.ontologyportal.org' }			
		]
	}
	else if (dtp=='20042')
	{
		dp = [                                         
			{ y: 3, label: 'bow.sinica.edu.tw' },
			{ y: 1, label: 'http://corpus.ling.sinica.edu.tw/project/LanguageArchive/lc_index.html' },
			{ y: 1, label: 'http://BOW.sinica.edu.tw/' }	
		]
	}
	else if (dtp=='20043')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://www.cogsci.princeton.edu/~wn/' }
		]
	}
	else if (dtp=='20044')
	{
		dp = [                                         
			{ y: 1, label: 'http://ling.stanford.edu' }			
		]
	}
	else if (dtp=='20045')
	{
		dp = [                                         
			{ y: 2, label: 'www.ldc.upenn.edu' }			
		]
	}
	else if (dtp=='20046')
	{
		dp = [                                         
			{ y: 2, label: 'chasen.org' }			
		]
	}
	else if (dtp=='20047')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.time.com/time/' }			
		]
	}
	else if (dtp=='20048')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.bbc.co.uk/' }			
		]
	}
	else if (dtp=='20049')
	{
		dp = [                                         
			{ y: 1, label: 'http://www2.nict.go.jp/jt/a132/members/mutiyama/software.html' }			
		]
	}else if (dtp=='200410')
	{
		dp = [                                         
			{ y: 2, label: 'chasen.naist.jp' }			
		]
	}
	else if (dtp=='200411')
	{
		dp = [                                         
			{ y: 1, label: 'http://chasen.aist-nara.ac.jp/index.html.en' }			
		]
	}
	else if (dtp=='200412')
	{
		dp = [                                         
			{ y: 1, label: 'http://eo.wikipedia.org/wiki/Esperanto' }			
		]
	}
	else if (dtp=='200413')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.google.co.jp/' }			
		]
	}
	else if (dtp=='200414')
	{
		dp = [                                         
			{ y: 1, label:'http://www.speech.cs.cmu.edu/cgi-bin/cmudict' }			
		]
	}
	else if (dtp=='200415')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.mofa.gov.tw/almanac98/section_3/page3-5.htm' }			
		]
	}
	else if (dtp=='200416')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.yellowbridge.com/language/chineseloan.html' }			
		]
	}
	else if (dtp=='200417')
	{
		dp = [                                         
			{ y: 1, label: 'http://arxiv.org/abs/cs.CL/0208020' }			
		]
	}
	else if (dtp=='200418')
	{
		dp = [                                         
			{ y: 1, label: 'http://nlp.cs.nyu.edu/evalb/' }			
		]
	}
	else if (dtp=='20050')
	{
		dp = [                                         
			
			{ y: 3, label: 'www.w3.org' }
		]
	}
	else if (dtp=='20051')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://www.cis.upenn.edu/treebank/home.html' },
			{ y: 1, label: 'http://acl.upenn.edu.W/W01/W01-1406.pdf' }
		]
	}
	else if (dtp=='20052')
	{
		dp = [                                         
			{ y: 1, label: 'http://apple.cs.nyu.edu/akin/' }			
		]
	}
	else if (dtp=='20053')
	{
		dp = [                                         
			{ y: 2, label: 'www.sinica.edu.tw'},
			{ y: 1, label: 'http://ckipsvr.iis.sinica.edu.tw'},
			{ y: 1, label: 'http://serv2.sinica.edu.tw:8081/HandyWeb/'}
		]
	}
	else if (dtp=='20054')
	{
		dp = [                                         
			{ y: 1, label:'http://chasen.aist-nara.ac.jp/index.html.en' }			
		]
	}
	else if (dtp=='20055')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://svmlight.joachims.org/' }			
		]
	}
	else if (dtp=='20056')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.jaist.ac.jp/~hieuxuan/flexcrfs/flexcrfs.html' }			
		]
	}
	else if (dtp=='20057')
	{
		dp = [                                         
			{ y: 1, label: 'http://frenchmozilla.sourceforge.net/' },
			{ y: 1, label: 'http://sourceforge.net/projects/sserver/' }
		]
	}
	else if (dtp=='20058')
	{
		dp = [                                         
			{ y: 2, label:   'www.lbc21.jp' }			
		]
	}
	else if (dtp=='20059')
	{
		dp = [                                         
			{ y: 1, label: 'http://chasen.org/~taku/software/TinySVM/' }			
		]
	}
	else if (dtp=='200510')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.ai.mit.edu/projects/jmlr//papers/volume2/dejean02a.pdf' },
			{ y: 1, label: 'http://people.csail.mit.edu/koehn/publications/europarl/' }
		]
	}
	else if (dtp=='200511')
	{
		dp = [                                         
			{ y: 1, label: 'http://jazz.nist.gov/atpcf/prjbriefs/prjbrief.cfm?ProjectNumber=00-00-' }			
		]
	}
	else if (dtp=='200512')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cgi.cs.cmu.edu/~kathrin/amta02CarbonellEtAl.pdf' },
			{ y: 1, label: 'http://www.cgi.sc.cmu.edu/People/kathrin/Research/SummaryOfProposal.pdf' }
		]
	}
	else if (dtp=='200513')
	{
		dp = [                                         
			{ y: 3, label: 'www.omniglot.com' }			
		]
	}
	else if (dtp=='200514')
	{
		dp = [                                         
			{ y: 2, label: 'www.unhchr.ch' }			
		]
	}
	else if (dtp=='200515')
	{
		dp = [                                         
			{ y: 2, label: 'www.rosettaproject.org' }			
		]
	}
	else if (dtp=='200516')
	{
		dp = [                                         
			
			{ y: 2, label: 'www.ethnologue.com' }
		]
	}
	else if (dtp=='200517')
	{
		dp = [                                         
			{ y: 2, label:  'www.language-' }			
		]
	}
	else if (dtp=='200518')
	{
		dp = [                                         
			{ y: 1, label:  'http://en.wikipedia.org/wiki/ISO_639-3' }			
		]
	}
	else if (dtp=='200519')
	{
		dp = [                                         
			{ y: 2, label: 'www.deaflibrary.org' }			
		]
	}
	else if (dtp=='20060')
	{
		dp = [                                         
			{ y: 1, label: 'http://glaros.dtc.umn.edu/gkhome/views/cluto' }			
		]
	}
	else if (dtp=='20061')
	{
		dp = [                                         
			
			
			{ y: 2, label: 'www.timeml.org' }
		]
	}
	else if (dtp=='20062')
	{
		dp = [                                         
			{ y: 2, label: 'aspell.net' }			
		]
	}
	else if (dtp=='20063')
	{
		dp = [                                         
			{ y: 1, label: 'http://search.cpan.org/~bbc/Lingua-MSWordSpell-1.010/lib/Lingua/MSWordSpell.pm' }			
		]
	}
	else if (dtp=='20064')
	{
		dp = [                                         
			{ y: 3, label: 'www.cis.upenn.edu' },
			{ y: 1, label: 'http://www.ldc.upenn.edu/Catalog/CatalogEntry.jsp?catalogId=LDC2004T18' },
			{ y: 1, label: 'http://acl.ldc.upenn.edu/P/' }
		]
	}
	else if (dtp=='20065')
	{
		dp = [                                         
			{ y: 3, label: 'www.sinica.edu.tw' },
			{ y: 1, label: 'http://bow.sinica.edu.tw/' }	
		]
	}
	else if (dtp=='20066')
	{
		dp = [                                         
			{ y: 1, label: 'http://vi.wikipedia.org/' }			
		]
	}
	else if (dtp=='20067')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.wjh.havard.edu/~inquirer/spreadsheet_' }			
		]
	}
	else if (dtp=='20068')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cs.cornell.edu/people/pabo/movie-review-data' }			
		]
	}
	else if (dtp=='20069')
	{
		dp = [                                         
			{ y: 1, label: 'http://protege.stanford.edu/' }			
		]
	}
	else if (dtp=='200610')
	{
		dp = [                                         
			{ y: 1, label: 'http://chasen.naist.jp/' }			
		]
	}
	else if (dtp=='200611')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.keenage.com/' }			
		]
	}
	else if (dtp=='200612')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.icsi.berkeley.edu/~framenet/' }			
		]
	}
	else if (dtp=='200613')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cgi.sc.cmu.edu/' },
			{ y: 1, label: 'http://www.cs.cmu.edu/~alavie/papers/BanerjeeLavie2005-' }
		]
	}
	else if (dtp=='200614')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.amtaweb.org/summit/MTSummit/FinalPapers/79-Culy-final.pdf' }			
		]
	}
	else if (dtp=='200615')
	{
		dp = [                                         
			{ y: 1, label: 'http://wordnet.princeton.edu'}			
		]
	}
	else if (dtp=='200616')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://domino.watson.ibm.com/library/' }	
		]
	}
	else if (dtp=='200617')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.nist.gov/speech/tests/mt/doc/2002-' },
			{ y: 1, label: 'http://trec.nist.gov' }	
		]
	}
	else if (dtp=='200618')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.sejong.or.kr/english/index.html' }			
		]
	}
	else if (dtp=='200619')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://corpus.mireene.com/test.php' }
		]
	}
	else if (dtp=='20070')
	{
		dp = [                                         
			{ y: 1, label: 'http://dx.doi.org/10.3115/1220835.1220892' }
		]
	}
	else if (dtp=='20071')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://chasen.org/~taku/software/cabocha/' }
		]
	}
	else if (dtp=='20072')
	{
		dp = [                                         
			
			{ y: 2, label:  'www.arabeyes.org' }
		]
	}
	else if (dtp=='20073')
	{
		dp = [                                         
			{ y: 1, label: 'http://sourceforge.net/projects/dhtmlgrid/' },
			{ y: 1, label: 'http://mecab.sourceforge.net/' },
			{ y: 2, label: 'opennlp.sourceforge.net' },
			{ y: 1, label: 'http://wordfreak.sourceforge.net/' }
		]
	}
	else if (dtp=='20074')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.wiktionary.org' }
		]
	}
	else if (dtp=='20075')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.yakushite.net/cgi-bin/WebObjects/YakushiteNet.woa/wa/main' }
		]
	}
	else if (dtp=='20076')
	{
		dp = [                                         
			{ y: 1, label: 'http://wordnet.princeton.edu/' }
		]
	}
	else if (dtp=='20077')
	{
		dp = [                                         
			
			{ y: 2, label: 'www.hsl.creighton.edu' }
		]
	}
	else if (dtp=='20078')
	{
		dp = [                                         
			{ y: 1, label: 'http://wordsketch.ling.sinica.edu.tw/' },
			{ y: 1, label: 'http://www.sinica.edu.tw/SinicaCorpus/' }
		]
	}
	else if (dtp=='20079')
	{
		dp = [                                         
			
			{ y: 2, label: 'www.ldc.upenn.edu' }
		]
	}
	else if (dtp=='200710')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://www.umanitoba.ca/linguistics/russell/redup-corpus.html' }
		]
	}
	else if (dtp=='200711')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://www.hum.au.dk/semiotics/pdf/emotion_dev.pdf' }
		]
	}
	else if (dtp=='200712')
	{
		dp = [                                         
			{ y: 3, label: 'www.fmprc.gov.cn' }
		]
	}
	else if (dtp=='200713')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.mitre.org/tech/alembic-workbench/' },
			{ y: 1, label: 'http://callisto.mitre.org/' }
		]
	}
	else if (dtp=='200714')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://www1.cs.columbia.edu/~ani/DUC2005/AnnotationGuide.htm' }
		]
	}
	else if (dtp=='200715')
	{
		dp = [                                         
			{ y: 1, label: 'http://duc.nist.gov/' }
		]
	}
	else if (dtp=='200716')
	{
		dp = [                                         
			{ y: 1, label: 'http://doi.acm.org/10.1145/1233912.1233913' }
		]
	}
	else if (dtp=='200717')
	{
		dp = [                                         
			{ y: 2, label: 'glaros.dtc.umn.edu'}
		]
	}
	else if (dtp=='200718')
	{
		dp = [                                         
		
			{ y: 1, label: 'http://www.cs.jhu.edu/' }
		]
	}
	else if (dtp=='200719')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cs.cmu.edu/~ref/mlim/chapter3.html' }
		]
	}
	else if (dtp=='20080')
	{
		dp = [                                         
			
			{ y: 3, label:   'www.nist.gov' }
		]
	}
	else if (dtp=='20081')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.ldc.upenn.edu/' },
			{ y: 3, label:  'acl.ldc.upenn.edu' },
			{ y: 1, label:  'http://repository.upenn.edu/cgi/viewcontent.cgi?article=1490&context=cis_reports' }
		]
	}
	else if (dtp=='20082')
	{
		dp = [                                         
			{ y: 1, label:  'http://sigmakee.cvs.sourceforge.net/*checkout*/sigmakee/sigma/suo-kif.pdf' },
			{ y: 1, label:  'http://olac.wiki.sourceforge.net/' },
			{ y: 2, label:  'crfpp.sourceforge.net' },
			{ y: 1, label:  'http://sourceforge.net/projects/wn-similarity' },
			{ y: 1, label:  'http://mecab.sourceforge.net/' }
		]
	}
	else if (dtp=='20083')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.languagemonitor.com/top_word_lists' }
		]
	}
	else if (dtp=='20084')
	{
		dp = [                                         
			
			{ y: 7, label: 'www.language-archives.org' }
		]
	}
	else if (dtp=='20085')
	{
		dp = [                                         
			
			{ y: 2, label:   'www.sil.org' }
		]
	}
	else if (dtp=='20086')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.cs.nyu.edu/~sekine/papers/iwpt95.pdf' }
		]
	}
	else if (dtp=='20087')
	{
		dp = [                                         
			{ y: 2, label:  'wordnet.princeton.edu' }
		]
	}
	else if (dtp=='20088')
	{
		dp = [                                         
			{ y: 3, label:  'ltrc.iiit.ac.in' }
		]
	}
	else if (dtp=='20089')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cs.cmu.edu/~roseh/Papers/wordnet' },
			{ y: 1, label: 'http://www.speech.cs.cmu.edu/cgi-bin/cmudict'}
		]
	}
	else if (dtp=='200810')
	{
		dp = [                                         
			{ y: 3, label:  'web.media.mit.edu' }
		]
	}
	else if (dtp=='200811')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.fon.hum.uva.nl/praat/' }
		]
	}
	else if (dtp=='200812')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.senseval.org' }
		]
	}
	else if (dtp=='200813')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.natcorp.ox.ac.uk/' }
		]
	}else if (dtp=='200814')
	{
		dp = [                                         
			
			{ y: 4, label:  'chasen.org' }
		]
	}
	else if (dtp=='200815')
	{
		dp = [                                         
			{ y: 2, label:  'blog.livedoor.com' }
		]
	}
	else if (dtp=='200816')
	{
		dp = [                                         
			{ y: 2, label:   'nlp.kuee.kyoto-u.ac.jp' }
		]
	}
	else if (dtp=='200817')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.tartarus.org/~martin/PorterStemmer' }
		]
	}
	else if (dtp=='200818')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.cse.unsw.edu.au/~min/ILLDATA/Function_word.htm' }
		]
	}
	else if (dtp=='200819')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.kakaku.com/' },
			{ y: 1, label:  'http://bbs.kakaku.com/bbs/' }
		]
	}
	else if (dtp=='20090')
	{
		dp = [                                         
			{ y: 2, label:  'duilian.msra.cn' }
		]
	}
	else if (dtp=='20091')
	{
		dp = [                                         
			
			{ y: 2, label:  'www.statmt.org' }
		]
	}
	else if (dtp=='20092')
	{
		dp = [                                         
			{ y: 2, label:   'www.google.com' },
			{ y: 1, label:   'http://code.google.com/p/chinesefunctiontagging/' }
		]
	}
	else if (dtp=='20093')
	{
		dp = [                                         
			{ y: 2, label:  'nlp.uned.es' }
		]
	}
	else if (dtp=='20094')
	{
		dp = [                                         
			
			{ y: 2, label:  'www.ims.uni-stuttgart.de' }
		]
	}
	else if (dtp=='20095')
	{
		dp = [                                         
			{ y: 6, label: 'crfpp.sourceforge.net' },
			{ y: 1, label:  'http://flexcrfs.sourceforge.net/' },
			{ y: 1, label:  'http://libots.sourceforge.net' },
			{ y: 1, label:  'http://champollion.sourceforge.net/' },
			{ y: 1, label:  'http://opennlp.sourceforge.net/' }
		]
	}
	else if (dtp=='20096')
	{
		dp = [                                         
			
			{ y: 2, label:  'cl.aist-nara.ac.jp' }
		]
	}
	else if (dtp=='20097')
	{
		dp = [                                         
			{ y: 3, label:  'shiva.iiit.ac.in' },
			{ y: 2, label:  'ltrc.iiit.ac.in' }
		]
	}
	else if (dtp=='20098')
	{
		dp = [                                         
			
			{ y: 4, label:  'homepages.inf.ed.ac.uk' }
		]
	}
	else if (dtp=='20099')
	{
		dp = [                                         
			
			{ y: 2, label:  'www.natcorp.ox.ac.uk' }
		]
	}
	else if (dtp=='200910')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://let.uvt.nl/general/people/bunt/docs/dit-schema3-2.html' },
			{ y: 3, label:  'ilk.uvt.nl' }
		]
	}
	else if (dtp=='200911')
	{
		dp = [                                         
			
			
			
			{ y: 2, label:  'svmlight.joachims.org' }
		]
	}
	else if (dtp=='200912')
	{
		dp = [                                         
			
			{ y: 2, label:  'w3.msi.vxu.se' }
		]
	}
	else if (dtp=='200913')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.ldc.upenn.edu/Catalog/CatalogEntry.jsp?catalogId=LDC2005T01' },
			{ y: 3, label:  'www.seas.upenn.edu' },
			{ y: 1, label:  'http://projects.ldc.upenn.edu/Chinese/LDC_ch.htm' },
			{ y: 1, label:  'http://acl.ldc.upenn.edu/W/W95/W95-0101.pdf' }
		]
	}else if (dtp=='200914')
	{
		dp = [                                         
			{ y: 6, label:  'en.wikipedia.org' },
			{ y: 2, label:  'www.wikipedia.org' },
			{ y: 1, label:  'http://zh.wikipedia.org/' }
		]
	}
	else if (dtp=='200915')
	{
		dp = [                                         
			{ y: 3, label:  'nlp.stanford.edu' }
		]
	}else if (dtp=='200916')
	{
		dp = [                                         
			{ y: 4, label:   'www.csie.ntu.edu.tw' }
		]
	}
	else if (dtp=='200917')
	{
		dp = [                                         
			
			{ y: 3, label:   'chasen.org' }
		]
	}
	else if (dtp=='200918')
	{
		dp = [                                         
			{ y: 2, label:  'www.nlp.org.cn' }
		]
	}
	else if (dtp=='200919')
	{
		dp = [                                         
			{ y: 2, label:  'www.speech.sri.com' }
		]
	}
	else if (dtp=='20100')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.informedia.cs.cmu.edu/' },
			{ y: 1, label:  'http://aclia.lti.cs.cmu.edu/ntcir8' },
			{ y: 3, label:  'www.cs.cmu.edu' }
		]
	}
	else if (dtp=='20101')
	{
		dp = [                                         
			{ y: 2, label:    'www.ethnologue.com'}
		]
	}
	else if (dtp=='20102')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.google.com' },
			{ y: 3, label:  'translate.google.com' },
			{ y: 1, label:  'http://www.google.com.hk/' },
			{ y: 1, label:  'http://code.google.com/intl/no/apis/maps/' }
		]
	}
	else if (dtp=='20103')
	{
		dp = [                                         
			{ y: 3, label:  'www.wikipedia.org' },
			{ y: 1, label:  'http://fr.wikipedia.org' },
			{ y: 4, label:  'en.wikipedia.org' }
		]
	}
	else if (dtp=='20104')
	{
		dp = [                                         
			{ y: 2, label:  'maxent.sourceforge.net' },
			{ y: 4, label:  'sourceforge.net' },
			{ y: 2, label:  'cwb.sourceforge.net' },
			{ y: 1, label:  'http://crfpp.sourceforge.net' },
			{ y: 4, label:  'mecab.sourceforge.net' },
			{ y: 1, label:  'http://StarDict.sourceforge.net/' }
		]
	}
	else if (dtp=='20105')
	{
		dp = [                                         
			{ y: 2, label:  'http://cl.aist-nara.ac.jp/taku-' }
		]
	}else if (dtp=='20106')
	{
		dp = [                                         
			
			{ y: 4, label:  'ltrc.iiit.ac.in' },
			{ y: 1, label:  'http://shiva.iiit.ac.in/SPSAL2007/iiit_tagset_guidelines.pdf' }
		]
	}
	else if (dtp=='20107')
	{
		dp = [                                         
			{ y: 2, label:   'www.sejong.or.kr' }
		]
	}
	else if (dtp=='20108')
	{
		dp = [                                         
			{ y: 2, label: 'www.natcorp.ox.ac.uk' }
		]
	}
	else if (dtp=='20109')
	{
		dp = [                                         
			{ y: 2, label:  'bahasa.cs.ui.ac.id' }
		]
	}
	else if (dtp=='201010')
	{
		dp = [                                         
			{ y: 2, label:   'http://svmlight.joachims.org/' }
		]
	}
	else if (dtp=='201011')
	{
		dp = [                                         
			{ y: 2, label:  'www.nlm.nih.gov' },
			{ y: 1, label: 'http://eutils.ncbi.nih.gov/corehtml/query/static/eutils' }
		]
	}
	else if (dtp=='201012')
	{
		dp = [                                         
			{ y: 1, label:  'http://projects.ldc.upenn.edu/ace/docs/English-Events-Guidelines_v5.4.3.pdf' }
		]
	}
	else if (dtp=='201013')
	{
		dp = [                                         
			
			{ y: 2, label:  'nlp.stanford.edu' }
		]
	}
	else if (dtp=='201014')
	{
		dp = [                                         
			
			{ y: 2, label:  'www-tsujii.is.s.u-tokyo.ac.jp' }
		]
	}
	else if (dtp=='201015')
	{
		dp = [                                         
			{ y: 3, label:   'chasen.org' }
		]
	}
	else if (dtp=='201016')
	{
		dp = [                                         
			{ y: 2, label:  'www.internetworldstats.com' }
		]
	}
	else if (dtp=='201017')
	{
		dp = [                                         
			{ y: 2, label:  'wordsketch.ling.sinica.edu.tw' },
			{ y: 2, label:  'dbo.sinica.edu.tw' },
			{ y: 1, label:  'http://rocling.iis.sinica.edu.tw/CKIP/engversion/index.htm' }
		]
	}
	else if (dtp=='201018')
	{
		dp = [                                         
			
			{ y: 2, label:  'home.uchicago.edu' }
		]
	}
	else if (dtp=='201019')
	{
		dp = [                                         
			{ y: 2, label:  'beta.visl.sdu.dk' }
		]
	}
	else if (dtp=='20110')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.mghamdi' }
		]
	}
	else if (dtp=='20111')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.dreye.com/index_en.html' }
		]
	}
	else if (dtp=='20112')
	{
		dp = [                                         
			
			{ y: 3, label:  'www.delph-in.net' },
			{ y: 2, label:  'wiki.delph-in.net' }
		]
	}
	else if (dtp=='20113')
	{
		dp = [                                         
			{ y: 2, label:  'wordnet.princeton.edu' },
			{ y: 1, label:  'http://wordnet.cs.princeton.edu/downloads.html' }
		]
	}
	else if (dtp=='20114')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.statmt.org'}
		]
	}else if (dtp=='20115')
	{
		dp = [                                         
			{ y: 2, label:  'crfpp.sourceforge.net' },
			{ y: 1, label:  'http://aspell.sourceforge.net/' },
			{ y: 1, label:  'http://jvnsegmenter.sourceforge.net/' },
			{ y: 1, label:  'https://cmusphinx.svn.sourceforge.net/' }
		]
	}
	else if (dtp=='20116')
	{
		dp = [                                         
			
			{ y: 2, label: 'www.ethnologue.com' }
		]
	}
	else if (dtp=='20117')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.opensource.org/licenses/mit-license.php' }
		]
	}
	else if (dtp=='20118')
	{
		dp = [                                         
			{ y: 2, label:  'www.globalwordnet.org' }
		]
	}
	else if (dtp=='20119')
	{
		dp = [                                         
			
			{ y: 3, label:  'code.google.com' }
		]
	}else if (dtp=='201110')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.lemurproject.org' }
		]
	}
	else if (dtp=='201111')
	{
		dp = [                                         
			{ y: 1, label:  'http://id.wikipedia.org/wiki/Linguistik_komputasional;' },
			{ y: 1, label:  'http://wikipedia.org' },
			{ y: 1, label:  'http://www.wikipedia.org' },
			{ y: 2, label:  'en.wikipedia.org' }
		]
	}
	else if (dtp=='201112')
	{
		dp = [                                         
			
			{ y: 2, label:  'conference.archimuse.com' }
		]
	}
	else if (dtp=='201113')
	{
		dp = [                                         
			{ y: 2, label:  'svmlight.joachims.org' }
		]
	}
	else if (dtp=='201114')
	{
		dp = [                                         
			{ y: 1, label:  'http://www-csli.stanford.edu/publications/LFG/lfg1.html'},
			{ y: 1, label:  'http://csli-publications.stanford.edu/'},
			{ y: 4, label:  'nlp.stanford.edu'}
		]
	}
	else if (dtp=='201115')
	{
		dp = [                                         
			{ y: 1, label:  'http://terms.nict.gov.tw/' }
		]
	}
	else if (dtp=='201116')
	{
		dp = [                                         
			{ y: 2, label:  'ckip.iis.sinica.edu.tw' },
			{ y: 2, label:  'elearning.ling.sinica.edu.tw' },
			{ y: 1, label:  'http://db1x.sinica.edu.tw/kiwi/mkiwi/' }
		]
	}
	else if (dtp=='201117')
	{
		dp = [                                         
			{ y: 1, label:   'http://chasen.org/taku/' }
		]
	}
	else if (dtp=='201118')
	{
		dp = [                                         
			{ y: 1, label:  'http://research.nii.ac.jp/ntcir/index-en.html' },
			{ y: 1, label:  'http://ntcir.nii.ac.jp/PatentMT/' }
		]
	}
	else if (dtp=='201119')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.timeml.org/site/publications/timeMLdocs/timeml_1.2.1.html#tlink' }
		]
	}
	else if (dtp=='20120')
	{
		dp = [                                         
			
			{ y: 1, label:   'http://www.nlm.nih.gov/pubs/factsheets/umlsmeta.html' }
		]
	}
	else if (dtp=='20121')
	{
		dp = [                                         
			
			{ y: 2, label:  'chilin.no-ip.org' }
		]
	}
	else if (dtp=='20122')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.ldc.upenn.edu/Catalog/catalogEntry.jsp?catalogId' },
			{ y: 1, label:  'http://projects.ldc.upenn.edu/Chinese/' },
			{ y: 2, label:  'www.cis.upenn.edu' }
		]
	}
	else if (dtp=='20123')
	{
		dp = [                                         
			{ y: 5, label:  'db1x.sinica.edu.tw' },
			{ y: 2, label:  'wordsketch.ling.sinica.edu.tw' },
			{ y: 1, label:  'http://dbo.sinica.edu.tw/SinicaCorpus/' },
			{ y: 1, label:  'http://minhakka.ling.sinica.edu.tw/bkg/index.p' },
			{ y: 1, label:  'http://ckipsvr.iis.sinica.edu.tw/' }
		]
	}
	else if (dtp=='20124')
	{
		dp = [                                         
			{ y: 1, label:  'http://multiword.sourceforge.net/' },
			{ y: 3, label:  'sourceforge.net' },
			{ y: 1, label:  'http://jvntextpro.sourceforge.net/' }
		]
	}
	else if (dtp=='20125')
	{
		dp = [                                         
			{ y: 1, label:  'http://csli-publications.stanford.edu/LFG/14/lfg09toc.html' },
			{ y: 3, label:  'nlp.stanford.edu' }
		]
	}
	else if (dtp=='20126')
	{
		dp = [                                         
			{ y: 2, label:   'svmlight.joachims.org' }
		]
	}
	else if (dtp=='20127')
	{
		dp = [                                         
			{ y: 3, label:  'www.statmt.org' },
			{ y: 1, label: 'http://statmt.org/wmt09/scripts.tgz' }
		]
	}
	else if (dtp=='20128')
	{
		dp = [                                         
			{ y: 3, label:   'code.google.com' },
			{ y: 2, label:  'www.google.com' },
			{ y: 2, label:   'developers.google.com' }
		]
	}
	else if (dtp=='20129')
	{
		dp = [                                         
			{ y: 2, label:  'twblg.dict.edu.tw' }
		]
	}
	else if (dtp=='201210')
	{
		dp = [                                         
			{ y: 2, label:  'www.cs.pitt.edu' }
		]
	}
	else if (dtp=='201211')
	{
		dp = [                                         
			{ y: 2, label: 'memory.loc.gov' }
		]
	}
	else if (dtp=='201212')
	{
		dp = [                                         
			{ y: 2, label:  'mallet.cs.umass.edu' }
		]
	}
	else if (dtp=='201213')
	{
		dp = [                                         
			{ y: 3, label:  'dumps.wikimedia.org' }
		]
	}
	else if (dtp=='201214')
	{
		dp = [                                         
			{ y: 2, label:  'www.nltk.org' }
		]
	}
	else if (dtp=='201215')
	{
		dp = [                                         
			{ y: 2, label:  'www.keenage.com' }
		]
	}
	else if (dtp=='201216')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.trec.nist.gov' }
		]
	}
	else if (dtp=='201217')
	{
		dp = [                                         
			{ y: 2, label:  'www.tokuteicorpus.jp' }
		]
	}
	else if (dtp=='201218')
	{
		dp = [                                         
			{ y: 2, label: 'www.csie.ntu.edu.tw'},
			{ y: 1, label: 'http://nlg18.csie.ntu.edu.tw:8080/opinion/index.html'},
			{ y: 2, label: 'lope.linguistics.ntu.edu.tw'}
		]
	}
	else if (dtp=='201219')
	{
		dp = [                                         
			{ y: 2, label:  'nlp.ist.i.kyoto-u.ac.jp' }
		]
	}
	else if (dtp=='20130')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.uam.es/proyectosinv/woslac/cedel2.htm' }
		]
	}
	else if (dtp=='20131')
	{
		dp = [                                         
			
			{ y: 2, label:  'wals.info' }
		]
	}
	else if (dtp=='20132')
	{
		dp = [                                         
			{ y: 1, label:  'http://mecab.sourceforge.net/' },
			{ y: 1, label:  'http://audacity.sourceforge.net/' }
		]
	}
	else if (dtp=='20133')
	{
		dp = [                                         
			{ y: 1, label:  'code.google.com' }
		]
	}
	else if (dtp=='20134')
	{
		dp = [                                         
			{ y: 1, label:  'http://zh.wikipedia.org/wiki/%E8%A9%9E%E7%B6%B4' },
			{ y: 1, label:  'http://zh-yue.wikipedia.org' },
			{ y: 1, label:  'http://wuu.wikipedia.org' },
			{ y: 4, label:  'en.wikipedia.org' }
		]
	}
	else if (dtp=='20135')
	{
		dp = [                                         
			{ y: 2, label:  'homepages.inf.ed.ac.uk' }
		]
	}
	else if (dtp=='20136')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cambridge.org/elt/corpus/' }
		]
	}
	else if (dtp=='20137')
	{
		dp = [                                         
			
			{ y: 1, label:  'https://github.com/tkyf/jpair' }
		]
	}
	else if (dtp=='20138')
	{
		dp = [                                         
			
			{ y: 3, label:  'mecab.googlecode.com' },
			{ y: 1, label:  'http://crfpp.googlecode.com' },
			{ y: 1, label:  'http://crosslink.googlecode.com/files/zh-topics-36.zip' }
		]
	}
	else if (dtp=='20139')
	{
		dp = [                                         
			
			{ y: 3, label:  'www.uclouvain.be' }
		]
	}
	else if (dtp=='201310')
	{
		dp = [                                         
			
			{ y: 2, label: 'stp.lingfil.uu.se' }
		]
	}
	else if (dtp=='201311')
	{
		dp = [                                         
			{ y: 2, label: 'triplet.cc' }
		]
	}
	else if (dtp=='201312')
	{
		dp = [                                         
			{ y: 2, label:  'www.praat.org' }
		]
	}
	else if (dtp=='201313')
	{
		dp = [                                         
			{ y: 1, label:  'http://opennlp.apache.org/' }
		]
	}
	else if (dtp=='201314')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.tkl.iis.u-tokyo.ac.jp/~wl-gao/' }
		]
	}
	else if (dtp=='201315')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.nist.gov/tac/2012/KBP/workshop/index.html' }
		]
	}
	else if (dtp=='201316')
	{
		dp = [                                         
			{ y: 1, label:  'http://baike.baidu.com/' }
		]
	}
	else if (dtp=='201317')
	{
		dp = [                                         
			{ y: 1, label:  'http://zh.wiktionary.org/zh/' }
		]
	}
	else if (dtp=='201318')
	{
		dp = [                                         
			{ y: 2, label:  'thottingal.in' }
		]
	}
	else if (dtp=='201319')
	{
		dp = [                                         
			
			{ y: 2, label:  'beta.visl.sdu.dk' }
		]
	}
	else if (dtp=='20140')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.cs.nyu.edu/davise/papers/WS.html' }
		]
	}
	else if (dtp=='20141')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://th.wikipedia.org/' },
			{ y: 3, label:  'en.wikipedia.org' }
		]
	}
	else if (dtp=='20142')
	{
		dp = [                                         
			{ y: 2, label:  'dev.twitter.com' },
			{ y: 2, label:  'twitter.com' },
			{ y: 1, label:  'https://blog.twitter.com/2013/' }
		]
	}
	else if (dtp=='20143')
	{
		dp = [                                         
			
			{ y: 7, label:  'nlp.stanford.edu' }
		]
	}
	else if (dtp=='20144')
	{
		dp = [                                         
			{ y: 1, label: 'http://homepages.inf.ed.ac.uk/s0453356/' }
		]
	}
	else if (dtp=='20145')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://sourceforge.net/projects/hcrf/' },
			{ y: 1, label:  'http://crfpp.sourceforge.net' }
		]
	}
	else if (dtp=='20146')
	{
		dp = [                                         
			
			
			{ y: 2, label:   'example.football.com' }
		]
	}
	else if (dtp=='20147')
	{
		dp = [                                         
			
			
			{ y: 1, label:   'http://www.itl.nist.gov/' },
			{ y: 1, label:   'http://trec.nist.gov/data/qa.html' }
		]
	}
	else if (dtp=='20148')
	{
		dp = [                                         
			
			{ y: 4, label:  'code.google.com' },
			{ y: 1, label:  'https://sites.google.com/site/' }
		]
	}
	else if (dtp=='20149')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://mpqa.cs.pitt.edu/opinionfinder/' }
		]
	}
	else if (dtp=='201410')
	{
		dp = [                                         
			{ y: 1, label:  'http://wordnet.princeton.edu/' },
			{ y: 1, label:  'http://www.princeton.edu/wordnet' }
		]
	}
	else if (dtp=='201411')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.ark.cs.cmu.edu/TweetNLP/' }
		]
	}
	else if (dtp=='201412')
	{
		dp = [                                         
			{ y: 3, label:   'www.csie.ntu.edu.tw' }
		]
	}
	else if (dtp=='201413')
	{
		dp = [                                         
			{ y: 2, label:  'www.ukp.tu-darmstadt.de' }
		]
	}
	else if (dtp=='201414')
	{
		dp = [                                         
			
			{ y: 3, label:  'dumps.wikimedia.org' }
		]
	}
	else if (dtp=='201415')
	{
		dp = [                                         
			
			{ y: 2, label:  'www.thai-language.com' }
		]
	}
	else if (dtp=='201416')
	{
		dp = [                                         
			{ y: 3, label:  'github.com' }
		]
	}
	else if (dtp=='201417')
	{
		dp = [                                         
			{ y: 1, label:  'https://catalog.ldc.upenn.edu/LDC2006T13' }
		]
	}
	else if (dtp=='201418')
	{
		dp = [                                         
			{ y: 2, label:  'CRAN.R-project.org' },
			{ y: 1, label:  'http://www.R-project.org/' }
		]
	}
	else if (dtp=='201419')
	{
		dp = [                                         
			{ y: 2, label:  'eonli.ne' }
		]
	}
	else if (dtp=='20150')
	{
		dp = [                                         
			{ y: 2, label:  'www.yelp.com' }
			]
	}
	else if (dtp=='20151')
	{
		dp = [                                         
			
			{ y: 3, label:  'www.statmt.org' }
		]
	}
	else if (dtp=='20152')
	{
		dp = [                                         
			
			{ y: 2, label:  'www.csie.ntu.edu.tw' }
		]
	}
	else if (dtp=='20153')
	{
		dp = [                                         
			{ y: 4, label:  'sourceforge.net' }
		]
	}
	else if (dtp=='20154')
	{
		dp = [                                         
			{ y: 7, label:  'github.com' },
			{ y: 1, label: 'https://hubot.github.com/' }
			]
	}
	else if (dtp=='20155')
	{
		dp = [                                         
			
			{ y: 2, label:  'www.nltk.org' }
		]
	}
	else if (dtp=='20156')
	{
		dp = [                                         
			
			{ y: 2, label:  'scikit-learn.org' }
		]
	}
	else if (dtp=='20157')
	{
		dp = [                                         
			{ y: 3, label:  'taku910.github.io' }
			]
	}
	else if (dtp=='20158')
	{
		dp = [                                         
			{ y: 6, label:  'code.google.com' },
			{ y: 1, label:  'https://translate.google.com/'},
			{ y: 1, label:  'https://developers.google.com/freebase/' }
		]
	}
	else if (dtp=='20159')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.nist.gov/tac/2013/KBP/'},
			{ y: 1, label:  'http://www.itl.nist.gov/iad/'}
		]
	}else if (dtp=='201510')
	{
		dp = [                                         
			
			{ y: 7, label:  'en.wikipedia.org' }
		]
	}
	else if (dtp=='201511')
	{
		dp = [                                         
			
			{ y: 7, label: 'nlp.stanford.edu' }
		]
	}
	else if (dtp=='201512')
	{
		dp = [                                         
			
			{ y: 2, label:  'catalog.ldc.upenn.edu' },
			{ y: 1, label:  'http://www.cis.upenn.edu/\\' }
		]
	}
	else if (dtp=='201513')
	{
		dp = [                                         
			{ y: 3, label:  'meta.wikimedia.org' },
			{ y: 1, label:  'http://dumps.wikimedia.org/jawiki/' }
		]
	}
	else if (dtp=='201514')
	{
		dp = [                                         
			{ y: 2, label:  'qwone.com' }
		]
	}
	else if (dtp=='201515')
	{
		dp = [                                         
			{ y: 2, label:  'www.cs.waikato.ac.nz' }
		]
	}
	else if (dtp=='201516')
	{
		dp = [                                         
			{ y: 2, label:  'www.speech.sri.com' }
		]
	}
	else if (dtp=='201517')
	{
		dp = [                                         
			{ y: 2, label: 'the.sketchengine.co' }
		]
	}else if (dtp=='201518')
	{
		dp = [                                         
			
			{ y: 2, label:  'news.sina.com.cn' }
		]
	}
	else if (dtp=='201519')
	{
		dp = [                                         
			{ y: 2, label:  'blog.twitter.com' }
		]
	}
	else if (dtp=='20160')
	{
		dp = [                                         
			
			{ y: 3, label: 'bit.ly' }
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
			
			{ y: 1, label:  'https://www.yahoo.co.kr' }
		]
	}
	else if (dtp=='20163')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.natcorp.ox.ac.uk' }
		]
	}
	else if (dtp=='20164')
	{
		dp = [                                         
			
			{ y: 1, label:  'https://catalog.ldc.upenn.edu/LDC2011T07'}
		]
	}
	else if (dtp=='20165')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.nltk.org' }
		]
	}
	else if (dtp=='20166')
	{
		dp = [                                         
			{ y: 5, label:  'www.statmt.org' }
		]
	}
	else if (dtp=='20167')
	{
		dp = [                                         
			{ y: 1, label:  'http://meka.sourceforge.net/#about' },
			{ y: 1, label:  'http://jvntextpro.sourceforge.net/' }
		]
	}
	else if (dtp=='20168')
	{
		dp = [                                         
			{ y: 3, label:  'www.phontron.com' }
		]
	}
	else if (dtp=='20169')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.itl.nist.gov/iad/mig/tests/ace/2005/' }
		]
	}
	else if (dtp=='201610')
	{
		dp = [                                         
			{ y: 1, label:  'http://nlp.stanford.edu/software/tagger.shtml' }
		]
	}
	else if (dtp=='201611')
	{
		dp = [                                         
			{ y: 2, label:  'taku910.github.io' },
			{ y: 1, label:  'http://stanfordnlp.github.io/CoreNLP/' }
		]
	}
	else if (dtp=='201612')
	{
		dp = [                                         
			{ y: 1, label:  'http://site.google.com/' },
			{ y: 2, label:  'code.google.com' },
			{ y: 2, label:  'sites.google.com' }
		]
	}
	else if (dtp=='201613')
	{
		dp = [                                         
			{ y: 1, label:  'http://chainer.org/' }
		]
	}
	else if (dtp=='201614')
	{
		dp = [                                         
			{ y: 1, label:  'http://research.microsoft.com/en-us/downloads/aafd5dcf-' }
		]
	}
	else if (dtp=='201615')
	{
		dp = [                                         
			{ y: 1, label:  'https://en.wikipedia.org' }
		]
	}
	else if (dtp=='201616')
	{
		dp = [                                         
			{ y: 1, label:  'https://stics.mpi-inf.mpg.de/' }
		]
	}
	else if (dtp=='201617')
	{
		dp = [                                         
			{ y: 2, label: 'www.chokkan.org' }
		]
	}
	else if (dtp=='201618')
	{
		dp = [                                         
			{ y: 1, label: 'https://www.amazon.com/gp/help/customer/' }
		]
	}
	else if (dtp=='201619')
	{
		dp = [                                         
			{ y: 1, label:  'http://w3.usf.edu/FreeAssociation/' }
		]
	}
	else if (dtp=='20170')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://tedlab.mit.edu/' }
		]
	}
	else if (dtp=='20171')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.dictionary.cambridge.org/us/' }
		]
	}
	else if (dtp=='20172')
	{
		dp = [                                         
			{ y: 2, label:  'www.apa.org' }
		]
	}
	else if (dtp=='20173')
	{
		dp = [                                         
			{ y: 2, label:  'en.wikipedia.org' }
		]
	}
	else if (dtp=='20174')
	{
		dp = [                                         
			
			{ y: 1, label:  'https://doi:10.1515/cllt-2016-0062' }
		]
	}
	else if (dtp=='20175')
	{
		dp = [                                         
			
			{ y: 2, label:  'digital.lib.hkbu.edu.hk' }
		]
	}
	else if (dtp=='20176')
	{
		dp = [                                         
			
			{ y: 1, label:   'nlp.dse.ibaraki.ac.jp' }
		]
	}
	else if (dtp=='20177')
	{
		dp = [                                         
			{ y: 4, label:  'nlp.stanford.edu' }
		]
	}
	else if (dtp=='20178')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://goo.gl/dY0qFe' }
		]
	}
	else if (dtp=='20179')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.desiquintans.com/nounlist'}
		]
	}
	else if (dtp=='201710')
	{
		dp = [                                         
			{ y: 10, label:  'github.com' }
		]
	}
	else if (dtp=='201711')
	{
		dp = [                                         
			
			{ y: 3, label:  'www.phontron.com'}
		]
	}
	else if (dtp=='201712')
	{
		dp = [                                         
			{ y: 1, label:  'http://orchid.kuee.kyoto-u.ac.jp/ASPEC/' }
		]
	}
	else if (dtp=='201713')
	{
		dp = [                                         
			{ y: 5, label:  'www.statmt.org' }
		]
	}
	else if (dtp=='201714')
	{
		dp = [                                         
			{ y: 3, label:  'www.cnts.ua.ac.be' }
		]
	}
	else if (dtp=='201715')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://vlsp.org.vn/'}
		]
	}
	else if (dtp=='201716')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.baomoi.com' }
			
		]
	}
	else if (dtp=='201717')
	{
		dp = [                                         
			{ y: 1, label:  'https://code.google.com/archive/p/' },
			{ y: 1, label:  'https://sites.google.com/site/motazsite/corpora/osac' }
		]
	}
	else if (dtp=='201718')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.cs.jhu.edu/' }
		]
	}
	else if (dtp=='201719')
	{
		dp = [                                         
			{ y: 3, label:  'orange.biolab.si' }
		]
	}
	else if (dtp=='20180')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://tedlab.mit.edu/' }
		]
	}
	else if (dtp=='20181')
	{
		dp = [                                         
			
			{ y: 33, label:  'github.com' }
		]
	}
	else if (dtp=='20182')
	{
		dp = [                                         
			
			{ y: 3, label:   'www.statmt.org' }
		]
	}
	else if (dtp=='20183')
	{
		dp = [                                         
			{ y: 8, label:  'taku910.github.io' },
			{ y: 1, label:  'http://colah.github.io/posts/2015-08-Understanding-' },
			{ y: 2, label:  'noisy-text.github.io' }
		]
	}
	else if (dtp=='20184')
	{
		dp = [                                         
			{ y: 2, label:  'sites.google.com' },
			{ y: 2, label:  'code.google.com' },
			{ y: 1, label:  'https://cloud.google.com/translate/' }
		]
	}
	else if (dtp=='20185')
	{
		dp = [                                         
			
			{ y: 4, label:  'arxiv.org' }
		]
	}
	else if (dtp=='20186')
	{
		dp = [                                         
			 
			{ y: 3, label:  'dumps.wikimedia.org' }
		]
	}
	else if (dtp=='20187')
	{
		dp = [                                         
			{ y: 1, label:  'http://www-nlp.stanford.edu/' },
			{ y: 4, label:  'nlp.stanford.edu' }
		]
	}
	else if (dtp=='20188')
	{
		dp = [                                         
			{ y: 4, label:  'www.ted.com' }
		]
	}
	else if (dtp=='20189')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://scikit-learn.org/stable/auto_' }
		]
	}
	else if (dtp=='201810')
	{
		dp = [                                         
			{ y: 3, label:  'goo.gl' }
		]
	}
	else if (dtp=='201811')
	{
		dp = [                                         
			{ y: 1, label:  'http://navbharattimes.indiatimes.com/' }
		]
	}
	else if (dtp=='201812')
	{
		dp = [                                         
			{ y: 1, label:  'http://telugu.samayam.com/'},
			{ y: 1, label:  'http://tamil.samayam.com/tamil-cinema/'},
			{ y: 1, label:  'http://malayalam.samayam.com/'}
		]
	}
	else if (dtp=='201813')
	{
		dp = [                                         
			{ y: 1, label:  'http://m.movie.naver.com/m/category/' }
		]
	}
	else if (dtp=='201814')
	{
		dp = [                                         
			{ y: 5, label:  'pj.ninjal.ac.jp' },
			{ y: 1, label:  'http://unidic.ninjal.ac.jp/' },
			{ y: 1, label:  'nwjc-data.ninjal.ac.jp' }
		]
	}
	else if (dtp=='201815')
	{
		dp = [                                         
			
			{ y: 3, label:  'www.nltk.org' }
		]
	}
	else if (dtp=='201816')
	{
		dp = [                                         
			{ y: 1, label:  'http://doi.acm.org/10.1145/1361684.1361685' }
		]
	}
	else if (dtp=='201817')
	{
		dp = [                                         
			{ y: 23, label:  'doi.org' }
		]
	}
	else if (dtp=='201818')
	{
		dp = [                                         
			{ y: 3, label:  'www.praat.org' }
		]
	}
	else if (dtp=='201819')
	{
		dp = [                                         
			{ y: 2, label:  'humanum.arts.cuhk.edu.hk' }
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