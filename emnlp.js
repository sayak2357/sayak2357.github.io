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
		name: "EMNLP: Long Papers",
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
				{ y: 549, x: new Date(2018,0) },
				{ y: 478, x: new Date(2019,0) }
				
				
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
			{ y: 0, x: new Date(2018,0) },
			{ y: 203, x: new Date(2019,0) }
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
				{ y: 30, x: new Date(2018,0) },
				{ y: 44, x: new Date(2019,0) }
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
		name: "EMNLP: Old Authors",
		dataPoints: [
		
		
				{ y: 0.0, x: new Date(1996,0) },
				{ y: 0.16279069767441862, x: new Date(1997,0) },
				{ y: 0.10714285714285714, x: new Date(1998,0) },
				{ y: 0.1038961038961039, x: new Date(1999,0) },
				{ y: 0.12280701754385964, x: new Date(2000,0) },
				{ y: 0.17647058823529413, x: new Date(2001,0) },
				{ y: 0.2823529411764706, x: new Date(2002,0) },
				{ y: 0.3333333333333333, x: new Date(2003,0) },
				{ y: 0.024193548387096774, x: new Date(2004,0) },
				{ y: 0.19444444444444445, x: new Date(2005,0) },
				{ y: 0.2887700534759358, x: new Date(2006,0) },
				{ y: 0.3042071197411003, x: new Date(2007,0) },
				{ y: 0.3787878787878788, x: new Date(2008,0) },
				{ y: 0.42780748663101603, x: new Date(2009,0) },
				{ y: 0.44345238095238093, x: new Date(2010,0) },
				{ y: 0.4358974358974359, x: new Date(2011,0) },
				{ y: 0.48548812664907653, x: new Date(2012,0) },
				{ y: 0.4080560420315236, x: new Date(2013,0) },
				{ y: 0.43302180685358255, x: new Date(2014,0) },
				{ y: 0.3866822429906542, x: new Date(2015,0) },
				{ y: 0.42012578616352203, x: new Date(2016,0) },
				{ y: 0.3795289855072464, x: new Date(2017,0) },
				{ y: 0.3394871794871795, x: new Date(2018,0) },
				{ y: 0.30731548007838017, x: new Date(2019,0) }
				
				
		]
		},
		
		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "New Authors",
			color: "#f70202",
			dataPoints: [
			
			
			
				{ y: 1.0, x: new Date(1996,0) },
				{ y: 0.8372093023255814, x: new Date(1997,0) },
				{ y: 0.8928571428571429, x: new Date(1998,0) },
				{ y: 0.8961038961038961, x: new Date(1999,0) },
				{ y: 0.8771929824561403, x: new Date(2000,0) },
				{ y: 0.8235294117647058, x: new Date(2001,0) },
				{ y: 0.7176470588235294, x: new Date(2002,0) },
				{ y: 0.6666666666666666, x: new Date(2003,0) },
				{ y: 0.9758064516129032, x: new Date(2004,0) },
				{ y: 0.8055555555555556, x: new Date(2005,0) },
				{ y: 0.7112299465240641, x: new Date(2006,0) },
				{ y: 0.6957928802588996, x: new Date(2007,0) },
				{ y: 0.6212121212121212, x: new Date(2008,0) },
				{ y: 0.5721925133689839, x: new Date(2009,0) },
				{ y: 0.5565476190476191, x: new Date(2010,0) },
				{ y: 0.5641025641025641, x: new Date(2011,0) },
				{ y: 0.5145118733509235, x: new Date(2012,0) },
				{ y: 0.5919439579684763, x: new Date(2013,0) },
				{ y: 0.5669781931464174, x: new Date(2014,0) },
				{ y: 0.6133177570093458, x: new Date(2015,0) },
				{ y: 0.579874213836478, x: new Date(2016,0) },
				{ y: 0.6204710144927537, x: new Date(2017,0) },
				{ y: 0.6605128205128206, x: new Date(2018,0) },
				{ y: 0.6926845199216198, x: new Date(2019,0) }
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
		name: "EMNLP: Avg. number of Papers per Author",
		dataPoints: [
			
			
			
			{ y:0.5833333333333334, x: new Date(1996,0) },
			{ y:0.5348837209302325, x: new Date(1997,0) },
			{ y:0.42857142857142855, x: new Date(1998,0) },
			{ y:0.43209876543209874, x: new Date(1999,0) },
			{ y:0.4426229508196721, x: new Date(2000,0) },
			{ y:0.4117647058823529, x: new Date(2001,0) },
			{ y:0.45054945054945056, x: new Date(2002,0) },
			{ y:0.45161290322580644, x: new Date(2003,0) },
			{ y:0.4, x: new Date(2004,0) },
			{ y:0.3895705521472393, x: new Date(2005,0) },
			{ y:0.37823834196891193, x: new Date(2006,0) },
			{ y:0.36797752808988765, x: new Date(2007,0) },
			{ y:0.3787375415282392, x: new Date(2008,0) },
			{ y:0.3574561403508772, x: new Date(2009,0) },
			{ y:0.33156498673740054, x: new Date(2010,0) },
			{ y:0.29979879275653926, x: new Date(2011,0) },
			{ y:0.3159090909090909, x: new Date(2012,0) },
			{ y:0.3073463268365817, x: new Date(2013,0) },
			{ y:0.29894179894179895, x: new Date(2014,0) },
			{ y:0.2932330827067669, x: new Date(2015,0) },
			{ y:0.26693629929221435, x: new Date(2016,0) },
			{ y:0.2609682299546142, x: new Date(2017,0) },
			{ y:0.23584521384928717, x: new Date(2018,0) },
			{ y:0.17691556857003415, x: new Date(2019,0) }
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
		name: "EMNLP: Avg. number of Authors per Paper per Year",
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
			{ y: 4.24, x: new Date(2018,0) },
			{ y:5.652413793103448, x: new Date(2019,0) }
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
		name: "EMNLP: Long Papers",
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
			{ y: 33.664, x: new Date(2018,0) },
			{ y:39.92259414225941, x: new Date(2019,0) }
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
			{ y: 0, x: new Date(2018,0) },
			{ y:27.23152709359606, x: new Date(2019,0) }
			
			
			
			
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
			{ y: 15.63, x: new Date(2018,0) },
			{ y:18.045454545454547, x: new Date(2019,0) }
			
			
			
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
		name: "EMNLP: URLs per Paper 1996-2019",
		dataPoints: [
			
			
			
			{ y:0.35714285714285715, x: new Date(1996,0) },
			{ y:0.08695652173913043, x: new Date(1997,0) },
			{ y:0.0, x: new Date(1998,0) },
			{ y:0.5142857142857142, x: new Date(1999,0) },
			{ y:0.7037037037037037, x: new Date(2000,0) },
			{ y:0.47619047619047616, x: new Date(2001,0) },
			{ y:0.8780487804878049, x: new Date(2002,0) },
			{ y:1.5714285714285714, x: new Date(2003,0) },
			{ y:1.75, x: new Date(2004,0) },
			{ y:1.9448818897637796, x: new Date(2005,0) },
			{ y:1.904109589041096, x: new Date(2006,0) },
			{ y:2.4580152671755724, x: new Date(2007,0) },
			{ y:2.3421052631578947, x: new Date(2008,0) },
			{ y:2.1411042944785277, x: new Date(2009,0) },
			{ y:2.416, x: new Date(2010,0) },
			{ y:2.4093959731543624, x: new Date(2011,0) },
			{ y:2.6402877697841727, x: new Date(2012,0) },
			{ y:2.6878048780487807, x: new Date(2013,0) },
			{ y:2.747787610619469, x: new Date(2014,0) },
			{ y:3.003205128205128, x: new Date(2015,0) },
			{ y:2.984848484848485, x: new Date(2016,0) },
			{ y:4.194202898550724, x: new Date(2017,0) },
			{ y:3.075993091537133, x: new Date(2018,0) },
			{ y:3.3393103448275863, x: new Date(2019,0) }
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
			{ y: 1.226, x: new Date(2018,0) },
			{ y:1.4551724137931035, x: new Date(2019,0) }
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
			{ y: 4.569, x: new Date(2018,0) },
			{ y:4.622406639004149, x: new Date(2019,0) }
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
			{ y: 3.076, x: new Date(2018,0) },
			{ y:3.5131396957123098, x: new Date(2019,0) }
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
		name: "EMNLP : Most Popular primary URL domains & their Frequencies",
		legendText: "",
		dataPoints: [
			{ y:1548,  label:'github.com'  },
			{ y:219,  label:'nlp.stanford.edu'  },
			{ y:188,  label:'code.google.com'  },
			{ y:147,  label:'en.wikipedia.org'  },
			{ y:119,  label:'www.statmt.org'  },
			{ y:115,  label:'www.aclweb.org'  },
			{ y:109,  label:'arxiv.org'  },
			{ y:105,  label:'aclweb.org'  },
			{ y:72,  label:'www.nist.gov'  },
			{ y:48,  label:'catalog.ldc.upenn.edu'  },
			{ y:44,  label:'www.cs.cmu.edu'  },
			{ y:44,  label:'mallet.cs.umass.edu'  },
			{ y:43,  label:'www.ldc.upenn.edu'  },
			{ y:40,  label:'www.csie.ntu.edu.tw'  },
			{ y:37,  label:'sourceforge.net'  },
			{ y:36,  label:'spacy.io'  },
			{ y:34,  label:'trec.nist.gov'  },
			{ y:32,  label:'www.mturk.com'  },
			{ y:32,  label:'www.nltk.org'  },
			{ y:30,  label:'www.cs.cornell.edu'  }
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
		name: "EMNLP : Top Unique GitHub Pages",
		legendText: "",
		dataPoints: [
			{ y: 11, label: 'UKPLab/' },
			{ y: 5, label: 'google/' },
			{ y: 25, label: 'facebookresearch/' },
			{ y: 24, label: 'huggingface/' },
			{ y: 20, label: 'google-research/' },
			{ y: 11, label: 'fxsjy/jieba' },
			{ y: 11, label: 'pytorch/fairseq' },
			{ y: 11, label: 'google-research/bert' },
			{ y: 9, label: 'OpenNMT/OpenNMT-py' },
			{ y: 8, label: 'tensorflow/tensor2tensor' },
			{ y: 7, label: 'facebookresearch/MUSE' },
			{ y: 7, label: 'huggingface/pytorch-pretrained-' },
			{ y: 6, label: 'facebookresearch/fastText' },
			{ y: 5, label: 'facebook/NAMAS' },
			{ y: 5, label: 'moses-smt/' },
			{ y: 5, label: 'sacreBLEU' },
			{ y: 5, label: 'salesforce/' },
			{ y: 5, label: 'gabrielStanovsky/' },
			{ y: 4, label: 'saffsd/langid.py' },
			{ y: 4, label: 'edx/ease' }
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
		name: "EMNLP : Top University Pages",
		legendText: "",
		dataPoints: [      
			
			{ y: 19, label:'Microsoft Research Asia' },
			{ y: 13, label:'University of California' },
			{ y: 12, label:'Penn Museum' },
			{ y: 12, label:'Johns Hopkins Hospital' },
			{ y: 11, label:'Van Pelt Library' },
			{ y: 11, label:'University of Michigan' },
			{ y: 10, label:'Stanford University' },
			{ y: 10, label:'SVC-6' },
			{ y: 9, label:'Brown University' },
			{ y: 9, label:'University of Washington' },
			{ y: 9, label:'The Grand Garage' },
			{ y: 7, label:'Carnegie Mellon University Silicon Valley' },
			{ y: 7, label:'Columbia University' },
			{ y: 7, label:'Johns Hopkins University' },
			{ y: 6, label:'University of Edinburgh' },
			{ y: 6, label:'Cornell University' },
			{ y: 6, label:'IBM Almaden Research Center' },
			{ y: 6, label:'University of Pittsburgh' },
			{ y: 6, label:'University of Essex' },
			{ y: 6, label:'Carnegie Mellon University' }
			
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
		
		
		
		if (dt==1996)
		{
		
		dp = [                                         
			{ y: 1, label: 'cspjhu.ece.j' },                         
			{ y: 1,  label: "www.phnetik.uni-muenchen'de" }
			
			
		]
		}
		else if(dt==1997)
		{
			dp= [                                         
			{ y: 1, label: 'crl.nmsu.edu' }
			
			
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
			{ y: 2, label: 'ling.uu.se' },
			{ y: 1, label: 'uvw.gospelcom.net' },
			{ y: 1, label: 'upc.es' },
			{ y: 1, label: 'vassar.edu' },
			{ y: 1, label: 'morph.ldc' },
			{ y: 1, label: 'kub.nl' },
			{ y: 1, label: 'info.ox.ac.uk' },
			{ y: 1, label: 'shef.ac.uk' }
			
		]
		}
		else if(dt==2000)
		{
			dp= [                                         
			{ y: 2, label: 'nacsis.ac.jp' },
			{ y: 2, label: 'ilc.pi.cnr.it' },
			{ y: 1, label: 'att.com' },
			{ y: 1, label: 'arrakis.es' },
			{ y: 1, label: 'linux.com' },
			{ y: 1, label: 'uib.no' },
			{ y: 1, label: 'brighton.ac.uk' }
			
		]
		}
		else if(dt==2001)
		{
			dp= [                                         
			{ y: 1, label: 'www.acronymfinder' },
			{ y: 1, label: 'www.infoplease.com' },
			{ y: 1, label: 'www.onelook.com' },
			{ y: 1, label: 'ibm.com' },
			{ y: 1, label: 'berkeley.edu' },
			{ y: 1, label: 'www9.org' },
			{ y: 1, label: 'uni-stuttgart.de' }
			
		]
		}
		else if(dt==2002)
		{
			dp= [                                         
			{ y: 3, label: 'cornell.edu' },
			{ y: 2, label: 'brown.edu' },
			{ y: 1, label: 'sharp.co.uk' },
			{ y: 1, label: 'cmu.edu' },
			{ y: 1, label: 'www.mindfuleye.com' },
			{ y: 1, label: 'imdb.com' },
			{ y: 1, label: 'svmlight.joachims.org' },
			{ y: 1, label: 'bham.ac.uk' },
			{ y: 1, label: 'freedict.com' },
			{ y: 1, label: 'yahoo.com' },
			{ y: 1, label: 'isi.edu' },
			{ y: 1, label: 'att.com' },
			{ y: 1, label: 'mizar.org' },
			{ y: 1, label: 'www.cogsci.ed.ac.uk' },
			{ y: 1, label: 'kyoto-u.ac.jp' },
			{ y: 1, label: 'aist-nara.ac.jp' },
			{ y: 1, label: 'nyu.edu' },
			{ y: 1, label: 'www.searchengineshowdown.com' },
			{ y: 1, label: 'waikato.ac.nz' }
			
		]
		}
		else if(dt==2003)
		{
			dp= [                                         
			{ y: 3, label: 'nyu.edu' },
			{ y: 3, label: 'nist.gov' },
			{ y: 1, label: 'isi.edu' },
			{ y: 1, label: 'att.com' },
			{ y: 1, label: 'sri.com' },
			{ y: 1, label: 'mit.edu' },
			{ y: 1, label: 'msk.ru' },
			{ y: 1, label: 'eonline.com' },
			{ y: 1, label: 'jguru.com' },
			{ y: 1, label: 'sdsu.edu' },
			{ y: 1, label: 'daviddlewis.com' },
			{ y: 1, label: 'www-tsujii.is.s.u-tokyo.ac.jp' },
			{ y: 1, label: 'waikato.ac.nz' },
			{ y: 1, label: 'gate.ac.uk' },
			{ y: 1, label: 'searchengineshowdown.com' },
			{ y: 1, label: 'info.ox.ac.uk' },
			{ y: 1, label: 'kyoto-u.ac.jp' },
			{ y: 2, label: 'aist-nara.ac.jp' },
			{ y: 1, label: 'godel.iis.sinica.edu.tw' },
			{ y: 1, label: 'www2.crl.go.jp' }
			
		]
		}
		else if(dt==2004)
		{
			dp= [                                         
			{ y: 3, label: 'nist.gov' },
			{ y: 2, label: 'www.senseval.org' },
			{ y: 2, label: 'ixa2.si.ehu.es' },
			{ y: 3, label: 'isi.edu' },
			{ y: 1, label: 'upenn.edu' },
			{ y: 1, label: 'unt.edu' },
			{ y: 1, label: 'darpa.mil' },
			{ y: 1, label: 'www.gutenberg.net' },
			{ y: 1, label: 'www.elsnet.org' },
			{ y: 1, label: 'rulequest.com' },
			{ y: 1, label: 'hcu.ox.ac.uk' },
			{ y: 1, label: 'upc.es' },
			{ y: 1, label: 'www.clres.com' },
			{ y: 1, label: 'www.icsi' },
			{ y: 1, label: 'uvt.nl' },
			{ y: 1, label: 'berkeley.edu' },
			{ y: 1, label: 'microsoft.com' },
			{ y: 1, label: 'yahoo.com' },
			{ y: 1, label: 'google.com' },
			{ y: 1, label: 'msn.com' }
			
		]
		}
		else if(dt==2005)
		{
			dp= [                                         
			{ y: 24, label: 'nist.gov' },
			{ y: 11, label: 'upenn.edu' },
			{ y: 5, label: 'ntu.edu.tw' },
			{ y: 4, label: 'isi.edu' },
			{ y: 3, label: 'altavista.com' },
			{ y: 4, label: 'cam.ac.uk' },
			{ y: 3, label: 'kub.nl'},
			{ y: 3, label: 'apache.org' },
			{ y: 3, label: 'senseval.org' },
			{ y: 2, label: 'www.cnts.ua.ac.be' },
			{ y: 2, label: 'lemurproject.org' },
			{ y: 2, label: 'chasen.org' },
			{ y: 2, label: 'dyna.org' },
			{ y: 2, label: 'uiuc.edu' },
			{ y: 2, label: 'mitre.org' },
			{ y: 2, label: 'umass.edu'},
			{ y: 7, label: 'cmu.edu' },
			{ y: 2, label: 'timeml.org' },
			{ y: 2, label: 'google.com' },
			{ y: 2, label: 'nih.gov' }
			
		]
		}
		else if(dt==2006)
		{
			dp= [                                         
			{ y: 3, label: 'ntu.edu.tw' },
			{ y: 7, label: 'upenn.edu' },
			{ y: 2, label: 'ualberta.ca' },
			{ y: 2, label: 'chasen.org' },
			{ y: 2, label: 'upc.edu' },
			{ y: 3, label: 'upc.es' },
			{ y: 2, label: 'cpan.org'},
			{ y: 2, label: 'u-tokyo.ac.jp' },
			{ y: 2, label: 'umass.edu' },
			{ y: 2, label: 'princeton.edu' },
			{ y: 2, label: 'cmu.edu' },
			{ y: 1, label: 'toronto.edu' },
			{ y: 1, label: 'fjoch.com' },
			{ y: 1, label: 'tc-star.org' },
			{ y: 1, label: 'slate.com' },
			{ y: 1, label: 'lanl.gov'},
			{ y: 2, label: 'sourceforge.net' },
			{ y: 2, label: 'uvt.nl' },
			{ y: 2, label: 'uia.ac.be' },
			{ y: 3, label: 'mitre.org' }
			
		]
		}
		else if(dt==2007)
		{
			dp= [                                         
			{ y: 17, label: 'upc.edu' },
			{ y: 20, label: 'nist.gov' },
			{ y: 8, label: 'chasen.org' },
			{ y: 6, label: 'svmlight.joachims.org' },
			{ y: 5, label: 'umass.edu' },
			{ y: 4, label: 'ntu.edu.tw' },
			{ y: 4, label: 'vxu.se'},
			{ y: 8, label: 'upenn.edu' },
			{ y: 4, label: 'statmt.org' },
			{ y: 5, label: 'u-tokyo.ac.jp' },
			{ y: 4, label: 'mit.edu' },
			{ y: 4, label: 'cmu.edu' },
			{ y: 3, label: 'kyoto-u.ac.jp' },
			{ y: 3, label: 'utah.edu' },
			{ y: 4, label: 'isi.edu' },
			{ y: 2, label: 'lemurproject.org'},
			{ y: 2, label: 'fjoch.com' },
			{ y: 2, label: 'sri.com' },
			{ y: 5, label: 'nih.gov' },
			{ y: 2, label: 'aclweb.org' },
			{ y: 4, label: 'wikipedia.org' }
			
		]
		}
		else if(dt==2008)
		{
			dp= [                                         
			{ y: 16, label: 'nist.gov' },
			{ y: 6, label: 'ntu.edu.tw' },
			{ y: 11, label: 'upenn.edu' },
			{ y: 4, label: 'svmlight.joachims.org' },
			{ y: 5, label: 'umass.edu' },
			{ y: 5, label: 'stanford.edu' },
			{ y: 6, label: 'yahoo.com'},
			{ y: 4, label: 'kyoto-u.ac.jp' },
			{ y: 4, label: 'berkeley.edu' },
			{ y: 4, label: 'cpan.org' },
			{ y: 2, label: 'ualberta.ca' },
			{ y: 3, label: 'statmt.org' },
			{ y: 6, label: 'sourceforge.net' },
			{ y: 6, label: 'uiuc.edu' },
			{ y: 5, label: 'jhu.edu' },
			{ y: 2, label: 'homepages.inf.ed.ac.uk'},
			{ y: 2, label: 'princeton.edu' },
			{ y: 4, label: 'google.com' },
			{ y: 2, label: 'openfst.org' },
			{ y: 2, label: 'doloreslabs.com' },
			{ y: 3, label: 'chasen.org' }
			
		]
		}
		else if(dt==2009)
		{
			dp= [                                         
			{ y: 6, label: 'pitt.edu' },                  
			{ y: 10, label: 'nist.gov' },
			{ y: 7, label: 'google.com' },
			{ y: 5, label: 'homepages.inf.ed.ac.uk' },
			{ y: 6, label: 'stanford.edu' },
			{ y: 6, label: 'ntu.edu.tw' },
			{ y: 5, label: 'wikipedia.org'},
			{ y: 4, label: 'statmt.org' },
			{ y: 12, label: 'sourceforge.net' },
			{ y: 4, label: 'umass.edu' },
			{ y: 6, label: 'berkeley.edu' },
			{ y: 8, label: 'upenn.edu' },
			{ y: 5, label: 'cmu.edu' },
			{ y: 3, label: 'wikimedia.org' },
			{ y: 3, label: 'chasen.org' },
			{ y: 3, label: 'nih.gov'},
			{ y: 3, label: 'kyoto-u.ac.jp' },
			{ y: 4, label: 'mit.edu' },
			{ y: 2, label: 'natcorp.ox.ac.uk' },
			{ y: 2, label: 'mturk.com' },
			{ y: 3, label: 'unitn.it' }
			
		]
		}
		else if(dt==2010)
		{
			dp=[                                         
			{ y: 7, label: 'stanford.edu' },                   
			{ y: 6, label: 'homepages.inf.ed.ac.uk' },
			{ y: 8, label: 'wikipedia.org' },
			{ y: 9, label: 'google.com' },
			{ y: 5, label: 'statmt.org' },
			{ y: 4, label: 'umass.edu' },
			{ y: 11, label: 'upenn.edu' },
			{ y: 4, label: 'apache.org' },
			{ y: 3, label: 'mit.edu' },
			{ y: 3, label: 'doi.org' },
			{ y: 3, label: 'cornell.edu' },
			{ y: 3, label: 'lth.se' },
			{ y: 3, label: 'washington.edu' },
			{ y: 3, label: 'cmu.edu' },
			{ y: 3, label: 'umd.edu' },
			{ y: 2, label: 'natcorp.ox.ac.uk'},
			{ y: 2, label: 'byu.edu' },
			{ y: 12, label: 'sourceforge.net' },
			{ y: 3, label: 'brown.edu' },
			{ y: 2, label: 'yahoo.com' },
			{ y: 6, label: 'nist.gov' }
			
		]
		}
		else if(dt==2011)
		{
			dp= [                                         
			{ y: 12, label: 'stanford.edu' },               
			{ y: 9, label: 'wikipedia.org' },
			{ y: 6, label: 'umass.edu' },
			{ y: 11, label: 'nist.gov' },
			{ y: 9, label: 'upenn.edu' },
			{ y: 2, label: 'gutenberg.org' },
			{ y: 5, label: 'cmu.edu' },
			{ y: 5, label: 'doi.org' },
			{ y: 4, label: 'google.com' },
			{ y: 10, label:'sourceforge.net' },
			{ y: 3, label: 'maltparser.org' },
			{ y: 4, label: 'lemurproject.org' },
			{ y: 5, label: 'kyoto-u.ac.jp' },
			{ y: 3, label: 'twitter.com' },
			{ y: 3, label: 'mednlp.jp' },
			{ y: 2, label: 'ntu.edu.tw' },
			{ y: 2, label: 'statmt.org' },
			{ y: 2, label: 'pitt.edu' },
			{ y: 2, label: 'illinois.edu' },
			{ y: 2, label: 'mq.edu.au' },
			{ y: 2, label: 'wikimedia.org' }
			
		]
		}
		else if(dt==2012)
		{
			dp= [                                         
			{ y: 12, label: 'stanford.edu' },      
			{ y: 14, label: 'google.com' },
			{ y: 8, label: 'wikipedia.org' },
			{ y: 5, label: 'umass.edu' },
			{ y: 9, label: 'statmt.org' },
			{ y: 3, label: 'cornell.edu' },
			{ y: 3, label: 'h-its.org' },
			{ y: 3, label: 'illinois.edu' },
			{ y: 3, label: 'github.com' },
			{ y: 2, label: 'wiktionary.org' },
			{ y: 2, label: 'liwc.net' },
			{ y: 2, label: 'dictionsoftware.com' },
			{ y: 2, label: 'clopinet.com' },
			{ y: 2, label: 'surdeanu.name' },
			{ y: 2, label: 'unibo.it' },
			{ y: 2, label: 'arxiv.org' },
			{ y: 4, label: 'nist.gov' },
			{ y: 2, label: 'cuni.cz' },
			{ y: 2, label: 'vxu.se' },
			{ y: 2, label: 'aspell.net' },
			{ y: 2, label: 'uvt.nl' }
			
		]
		}
		else if(dt==2013)
		{
			dp= [                                         
			{ y: 23, label: 'google.com' },
			{ y: 15, label: 'stanford.edu' },
			{ y: 12, label: 'github.com' },
			{ y: 11, label: 'wikipedia.org' },
			{ y: 9, label: 'statmt.org' },
			{ y: 8, label: 'illinois.edu' },
			{ y: 5, label: 'unibo.it' },
			{ y: 6, label: 'mturk.com' },
			{ y: 9, label: 'upenn.edu' },
			{ y: 8, label: 'nist.gov' },
			{ y: 5, label: 'wiktionary.org' },
			{ y: 4, label: 'kyoto-u.ac.jp' },
			{ y: 3, label: 'lingfil.uu.se' },
			{ y: 3, label: 'unitn.it' },
			{ y: 5, label: 'sourceforge.net' },
			{ y: 4, label: 'nih.gov' },
			{ y: 3, label: 'svmlight.joachims.org' },
			{ y: 3, label: 'tu-darmstadt.de' },
			{ y: 3, label: 'tuwien.ac.at' },
			{ y: 4, label: 'apache.org' }
			
		]
		}
		else if(dt==2014)
		{
			dp= [                                         
			{ y: 34, label: 'google.com' },                  
			{ y: 28, label: 'stanford.edu' },
			{ y: 22, label: 'github.com' },
			{ y: 18, label: 'sourceforge.net' },
			{ y: 8, label: 'statmt.org' },
			{ y: 16, label: 'upenn.edu' },
			{ y: 12, label: 'wikipedia.org' },
			{ y: 15, label: 'cmu.edu' },
			{ y: 6, label: 'princeton.edu' },
			{ y: 5, label: 'kyoto-u.ac.jp' },
			{ y: 4, label: 'mturk.com' },
			{ y: 4, label: 'homepages.inf.ed.ac.uk' },
			{ y: 5, label: 'umass.edu' },
			{ y: 6, label: 'fbk.eu' },
			{ y: 3, label: 'qcri.org' },
			{ y: 3, label: 'metaoptimize.com' },
			{ y: 3, label: 'gurobi.com' },
			{ y: 4, label: 'hit.edu.cn' },
			{ y: 5, label: 'apache.org' },
			{ y: 2, label: 'mattmahoney.net' },
			{ y: 5, label: 'twitter.com' }
			
		]
		}
		else if(dt==2015)
		{
			dp= [                                         
			{ y: 85, label: 'github.com' },                                                    
			{ y: 50, label: 'google.com' },
			{ y: 30, label: 'stanford.edu' },
			{ y: 18, label: 'wikipedia.org' },
			{ y: 17, label: 'statmt.org' },
			{ y: 12, label: 'upenn.edu' },
			{ y: 11, label: 'sourceforge.net' },
			{ y: 6, label: 'phontron.com' },
			{ y: 15, label: 'nist.gov' },
			{ y: 6, label: 'illinois.edu' },
			{ y: 8, label: 'aclweb.org' },
			{ y: 13, label: 'cmu.edu' },
			{ y: 8, label: 'umass.edu' },
			{ y: 6, label: 'ntu.edu.tw' },
			{ y: 5, label: 'svmlight.joachims.org' },
			{ y: 4, label: 'cornell.edu' },
			{ y: 4, label: 'imdb.com' },
			{ y: 4, label: 'sutd.edu.sg' },
			{ y: 7, label: 'nih.gov' },
			{ y: 4, label: 'chokkan.org' },
			{ y: 4, label: 'nltk.org' }
			
		]
		}
		else if(dt==2016)
		{
			dp= [                                         
			{ y: 114, label: 'github.com' },                                                               
			{ y: 30, label: 'stanford.edu' },
			{ y: 29, label: 'google.com' },
			{ y: 17, label: 'wikipedia.org' },
			{ y: 14, label: 'upenn.edu' },
			{ y: 9, label: 'statmt.org' },
			{ y: 7, label: 'cornell.edu' },
			{ y: 5, label: 'nist.gov' },
			{ y: 5, label: 'universaldependencies.org' },
			{ y: 5, label: 'aclweb.org' },
			{ y: 3, label: 'uniroma1.it' },
			{ y: 4, label: 'illinois.edu' },
			{ y: 4, label: 'arxiv.org' },
			{ y: 4, label: 'nltk.org' },
			{ y: 4, label: 'phontron.com' },
			{ y: 4, label: 'federalreserve.gov' },
			{ y: 4, label: 'colorado.edu' },
			{ y: 3, label: 'statnlp.org' },
			{ y: 3, label: 'uic.edu' },
			{ y: 3, label: 'ntu.edu.tw' },
			{ y: 3, label: 'torch.ch' }
			
		]
		}
		else if(dt==2017)
		{
			dp= [                                         
			{ y: 210, label: 'github.com' },                                                               
			{ y: 169, label: 'aclweb.org' },
			{ y: 62, label: 'arxiv.org'},
			{ y: 28, label: 'stanford.edu' },
			{ y: 46, label: 'google.com' },
			{ y: 24, label: 'wikipedia.org' },
			{ y: 14, label: 'acm.org' },
			{ y: 12, label: 'nips.cc' },
			{ y: 15, label: 'statmt.org' },
			{ y: 11, label: 'cmu.edu' },
			{ y: 7, label: 'doi.org' },
			{ y: 10, label: 'apache.org' },
			{ y: 6, label: 'yelp.com' },
			{ y: 5, label: 'qcri.org' },
			{ y: 5, label: 'nltk.org' },
			{ y: 5, label: 'upenn.edu' },
			{ y: 5, label: 'princeton.edu' },
			{ y: 4, label: 'wikimedia.org'},
			{ y: 4, label: 'spacy.io' },
			{ y: 4, label: 'scikit-learn.org' },
			{ y: 4, label: 'hit.edu.cn' }
			
		]
		}
		else if(dt==2018)
		{
			dp= [                                         
			{ y: 438, label: 'github.com' },                                                
			{ y: 44, label: 'stanford.edu' },
			{ y: 32, label: 'statmt.org' },
			{ y: 23, label: 'wikipedia.org' },
			{ y: 21, label: 'arxiv.org' },
			{ y: 42, label: 'google.com' },
			{ y: 27, label: 'aclweb.org' },
			{ y: 9, label: 'spacy.io' },
			{ y: 9, label: 'fasttext.cc' },
			{ y: 13, label: 'upenn.edu' },
			{ y: 8, label: 'nlpl.eu' },
			{ y: 8, label: 'kaggle.com' },
			{ y: 8, label: 'tensorflow.org' },
			{ y: 7, label: 'wikimedia.org' },
			{ y: 7, label: 'openreview.net' },
			{ y: 7, label: 'tu-darmstadt.de' },
			{ y: 5, label: 'radimrehurek.com' },
			{ y: 5, label: 'yelp.com' },
			{ y: 5, label: 'opennmt.net' },
			{ y: 5, label: 'nltk.org' },
			{ y: 9, label: 'nih.gov' }
			
		]
		}
		else if(dt==2019)
		{
			dp= [ 
			{ y:9, label: 'bit.ly' },
			{ y:15, label: 'nih.gov' },
			{ y:673, label: 'github.com' },
			{ y:14, label: 'yelp.com' },
			{ y:13, label: 'nltk.org' },
			{ y:10, label: 'allennlp.org' },
			{ y:30, label: 'stanford.edu' },
			{ y:22, label: 'spacy.io' },
			{ y:44, label: 'github.io' },
			{ y:7, label: 'ucsd.edu' },
			{ y:13, label: 'pytorch.org' },
			{ y:8, label: 'tensorflow.org' },
			{ y:53, label: 'google.com' },
			{ y:8, label: 'cogcomp.org' },
			{ y:14, label: 'wikidata.org' },
			{ y:10, label: 'upenn.edu' },
			{ y:19, label: 'statmt.org' },
			{ y:34, label: 'wikipedia.org' },
			{ y:8, label: 'fasttext.cc' },
			{ y:12, label: 'wikimedia.org' }
			
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
	if (dtp=='19960')
	{
		dp = [                                         
			{ y: 1, label: 'http://cspjhu.ece.j'}
			
		]
	}
	else if (dtp=='19961')
	{
		dp = [                                         
			{ y: 1, label: "http://www'phnetik'uni-muenchen'de/"}
			
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
			{ y: 2, label: 'stp.ling.uu.se' }		
		]
	}
	else if (dtp=='19991')
	{
		dp = [                                         
			{ y: 1, label: 'http://uvw.gospelcom.net' }		
		]
	}
	else if (dtp=='19992')
	{
		dp = [                                         
			{ y: 1, label: "http://www.lsi.upc.es/'padro" }			
		]
	}
	else if (dtp=='19993')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cs.vassar.edu/CES/' }			
		]
	}
	else if (dtp=='19994')
	{
		dp = [                                         
			{ y: 1, label: 'http://morph.ldc' }			
		]
	}
	else if (dtp=='19995')
	{
		dp = [                                         
			{ y: 1, label: 'http://ilk.kub.nl/' }			
		]
	}
	else if (dtp=='19996')
	{
		dp = [                                         
			{ y: 1, label: 'http://info.ox.ac.uk/' }			
		]
	}
	else if (dtp=='19997')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.dcs.shef.ac.uk/research/ilash' }			
		]
	}
	else if (dtp=='20000')
	{
		dp = [                                         
			{ y: 2, label: 'www.rd.nacsis.ac.jp' }			
		]
	}
	else if (dtp=='20001')
	{
		dp = [                                         
			{ y: 2, label: 'www.ilc.pi.cnr.it' }			
		]
	}
	else if (dtp=='20002')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.reseaxch.att.com/lewis/' }			
		]
	}
	else if (dtp=='20003')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.activa.arrakis.es' }			
		]
	}
	else if (dtp=='20004')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.linux.com' }			
		]
	}
	else if (dtp=='20005')
	{
		dp = [                                         
			{ y: 1, label: 'http://khnt.hit.uib.no/icame/manuals/brown/' }			
		]
	}
	else if (dtp=='20006')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.itri.brighton.ac.uk/' }			
		]
	}
	else if (dtp=='20010')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.acronymfinder' }			
		]
	}
	else if (dtp=='20011')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.infoplease.com' }			
		]
	}
	else if (dtp=='20012')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.onelook.com' }			
		]
	}
	else if (dtp=='20013')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.research.ibm.com/talent/.2001' }			
		]
	}
	else if (dtp=='20014')
	{
		dp = [                                         
			{ y: 1, label: 'http://sherlock.sims.berkeley.edu/docs/asis96/asis96' }			
		]
	}
	else if (dtp=='20015')
	{
		dp = [                                         
			{ y: 1, label: 'http://www9.org/w9cdrom/363/363.html' }			
		]
	}
	else if (dtp=='20016')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.ims.uni-stuttgart.de/projekte/' }			
		]
	}
	else if (dtp=='20020')
	{
		dp = [                                         
			{ y: 3, label: 'www.cs.cornell.edu' }			
		]
	}
	else if (dtp=='20021')
	{
		dp = [                                         
			{ y: 2, label: 'www.cs.brown.edu' }			
		]
	}
	else if (dtp=='20022')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.sle.sharp.co.uk/senseval2/' }			
		]
	}
	else if (dtp=='20023')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cs.cmu.edu/afs/cs/user/aberger/' }			
		]
	}
	else if (dtp=='20024')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.mindfuleye.com/about/lexant.htm' }			
		]
	}
	else if (dtp=='20025')
	{
		dp = [                                         
			{ y: 1, label: 'http://reviews.imdb.com/Reviews/' }			
		]
	}
	else if (dtp=='20026')
	{
		dp = [                                         
			{ y: 1, label: 'http://svmlight.joachims.org' }			
		]
	}
	else if (dtp=='20027')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.english.bham.ac.uk/staff/oliver/soft-' }			
		]
	}
	else if (dtp=='20028')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.freedict.com' }			
		]
	}
	else if (dtp=='20029')
	{
		dp = [                                         
			{ y: 1, label: 'http://biz.yahoo.com/news/medical.html' }			
		]
	}
	else if (dtp=='200210')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.isi.edu/natural-language/projects/rewrite/' }			
		]
	}
	else if (dtp=='200211')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.research.att.com/sw/tools/fsm/' }			
		]
	}
	else if (dtp=='200212')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.mizar.org' }			
		]
	}
	else if (dtp=='200213')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cogsci.ed.ac.uk/chrisbr/papers/mt-' }			
		]
	}
	else if (dtp=='200214')
	{
		dp = [                                         
			{ y: 1, label: 'http://winnie.kuis.kyoto-u.ac.jp/dictation' }			
		]
	}else if (dtp=='200215')
	{
		dp = [                                         
			{ y: 1, label: 'http://chasen.aist-nara.ac.jp' }			
		]
	}
	else if (dtp=='200216')
	{
		dp = [                                         
			{ y: 1, label: 'http://cs.nyu.edu/cs/projects/proteus/irex/index-e.html' }			
		]
	}else if (dtp=='200217')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.searchengineshowdown.com/' }			
		]
	}
	else if (dtp=='200218')
	{
		dp = [                                         
			{ y: 1, label: 'waikato.ac.nz' }			
		]
	}
	else if (dtp=='20030')
	{
		dp = [                                         
			{ y: 2, label: 'nlp.cs.nyu.edu' },	
			{ y: 1, label: 'http://www.cs.nyu.edu/cs/faculty/grishman/muc6.html' }	
		]
	}
	else if (dtp=='20031')
	{
		dp = [                                         
			{ y: 2, label: 'trec.nist.gov' },
			{ y: 1, label: 'http://www.itl.nist.gov/iad/894.02/related' }			
		]
	}
	else if (dtp=='20032')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.isi.edu/licensed-sw/rewrite-decoder/' }			
		]
	}
	else if (dtp=='20033')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.research.att.com/sw/tools/fsm/' }			
		]
	}
	else if (dtp=='20034')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.speech.sri.com/projects/srilm/' }			
		]
	}
	else if (dtp=='20035')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.ai.mit.edu/people/mcollins/papers/heads' }			
		]
	}
	else if (dtp=='20036')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.magister.msk.ru/library/tolstoy/wp/wp00.htm' }			
		]
	}
	else if (dtp=='20037')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.eonline.com' }			
		]
	}
	else if (dtp=='20038')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.jguru.com/faq/Lucene' }			
		]
	}
	else if (dtp=='20039')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.sci.sdsu.edu/CAL/wordlist/' }			
		]
	}
	else if (dtp=='200310')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.daviddlewis.com/resources/' }			
		]
	}
	else if (dtp=='200311')
	{
		dp = [                                         
			{ y: 1, label: 'http://www-tsujii.is.s.u-tokyo.ac.jp/' }			
		]
	}
	else if (dtp=='200312')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cs.waikato.ac.nz/ml/weka/' }			
		]
	}
	else if (dtp=='200313')
	{
		dp = [                                         
			{ y: 1, label: 'http://gate.ac.uk' }			
		]
	}
	else if (dtp=='200314')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.searchengineshowdown.com/' }			
		]
	}
	else if (dtp=='200315')
	{
		dp = [                                         
			{ y: 1, label: 'http://info.ox.ac.uk/bnc' }			
		]
	}
	else if (dtp=='200316')
	{
		dp = [                                         
			{ y: 1, label: 'http://pine.kuee.kyoto-u.ac.jp/nl-resource/courpus-e.html' }			
		]
	}
	else if (dtp=='200317')
	{
		dp = [                                         
			{ y: 1, label: 'http://chasen.aist-nara.ac.jp/' },
			{ y: 1, label: 'http://cl.aist-nara.ac.jp/taku-ku/software/cabocha/' }			
		]
	}
	else if (dtp=='200318')
	{
		dp = [                                         
			{ y: 1, label: 'http://godel.iis.sinica.edu.tw/ROCLING' }			
		]
	}
	else if (dtp=='200319')
	{
		dp = [                                         
			{ y: 1, label: 'http://www2.crl.go.jp/jt/a132/members/mutiyama/software' }			
		]
	}
	else if (dtp=='20040')
	{
		dp = [                                         
			{ y: 3, label: 'www.nist.gov' }			
		]
	}
	else if (dtp=='20041')
	{
		dp = [                                         
			{ y: 2, label: 'www.senseval.org' }			
		]
	}
	else if (dtp=='20042')
	{
		dp = [                                         
			{ y: 2, label: 'ixa2.si.ehu.es' }			
		]
	}
	else if (dtp=='20043')
	{
		dp = [                                         
			{ y: 2, label: 'semantics.isi.edu' },
			{ y: 1, label: 'http://www.isi.edu/hdaume/' }
		]
	}
	else if (dtp=='20044')
	{
		dp = [                                         
			{ y: 1, label: 'http://wave.ldc.upenn.edu/Catalog/-' }			
		]
	}
	else if (dtp=='20045')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cs.unt.edu/~rada/wpt/' }			
		]
	}
	else if (dtp=='20046')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.darpa.mil/ipto/programs/ears/' }			
		]
	}
	else if (dtp=='20047')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.gutenberg.net/' }			
		]
	}
	else if (dtp=='20048')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.elsnet.org/eci.html' }			
		]
	}
	else if (dtp=='20049')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.rulequest.com/see5-info.html' }			
		]
	}else if (dtp=='200410')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.hcu.ox.ac.uk/BNC' }			
		]
	}
	else if (dtp=='200411')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.lsi.upc.es/~conll04st/' }			
		]
	}
	else if (dtp=='200412')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.clres.com/SensSemRoles.html' }			
		]
	}
	else if (dtp=='200413')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.icsi' }			
		]
	}
	else if (dtp=='200414')
	{
		dp = [                                         
			{ y: 1, label: 'http://ilk.uvt.nl/downloads/pub/' }			
		]
	}
	else if (dtp=='200415')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.icsi.berkeley.edu/' }			
		]
	}
	else if (dtp=='200416')
	{
		dp = [                                         
			{ y: 1, label: 'http://research.microsoft.com/~joshuago/' }			
		]
	}
	else if (dtp=='200417')
	{
		dp = [                                         
			{ y: 1, label: 'http://news.yahoo.com/' }			
		]
	}
	else if (dtp=='200418')
	{
		dp = [                                         
			{ y: 1, label: 'http://news.google.com' }			
		]
	}
	else if (dtp=='200419')
	{
		dp = [                                         
			{ y: 1, label: 'http://uk.newsbot.msn.com' }			
		]
	}
	else if (dtp=='20050')
	{
		dp = [                                         
			{ y: 9, label: 'www.nist.gov' },
			{ y: 8, label: 'trec.nist.gov' },
			{ y: 5, label: 'www.itl.nist.gov' },
			{ y: 2, label: 'duc.nist.gov' }
		]
	}
	else if (dtp=='20051')
	{
		dp = [                                         
			{ y: 9, label: 'www.ldc.upenn.edu' },
			{ y: 1, label: 'http://www.cis.upenn.edu/' },
			{ y: 1, label: 'http://bioie.ldc.upenn.edu/' }
		]
	}
	else if (dtp=='20052')
	{
		dp = [                                         
			{ y: 5, label: 'www.csie.ntu.edu.tw' }			
		]
	}
	else if (dtp=='20053')
	{
		dp = [                                         
			{ y: 4, label: 'www.isi.edu'}			
		]
	}
	else if (dtp=='20054')
	{
		dp = [                                         
			{ y: 3, label: 'babelfish.altavista.com' }			
		]
	}
	else if (dtp=='20055')
	{
		dp = [                                         
			{ y: 3, label: 'mi.eng.cam.ac.uk' },
			{ y: 1, label: 'http://htk.eng.cam.ac.uk' }			
		]
	}
	else if (dtp=='20056')
	{
		dp = [                                         
			{ y: 3, label:  'ilk.kub.nl' }			
		]
	}
	else if (dtp=='20057')
	{
		dp = [                                         
			{ y: 3, label: 'lucene.apache.org' }			
		]
	}
	else if (dtp=='20058')
	{
		dp = [                                         
			{ y: 3, label:  'www.senseval.org' }			
		]
	}
	else if (dtp=='20059')
	{
		dp = [                                         
			{ y: 2, label: 'www.cnts.ua.ac.be' }			
		]
	}
	else if (dtp=='200510')
	{
		dp = [                                         
			{ y: 2, label: 'www.lemurproject.org' }			
		]
	}
	else if (dtp=='200511')
	{
		dp = [                                         
			{ y: 2, label: 'chasen.org' }			
		]
	}
	else if (dtp=='200512')
	{
		dp = [                                         
			{ y: 2, label: 'dyna.org' }			
		]
	}
	else if (dtp=='200513')
	{
		dp = [                                         
			{ y: 2, label: 'l2r.cs.uiuc.edu' }			
		]
	}
	else if (dtp=='200514')
	{
		dp = [                                         
			{ y: 2, label: 'nrrc.mitre.org' }			
		]
	}
	else if (dtp=='200515')
	{
		dp = [                                         
			{ y: 2, label: 'mallet.cs.umass.edu' }			
		]
	}
	else if (dtp=='200516')
	{
		dp = [                                         
			{ y: 2, label: 'www.cs.cmu.edu' },
			{ y: 1, label: 'http://www.speech.cs.cmu.edu/cgi-bin/cmudict' },
			{ y: 1, label: 'http://privacy.cs.cmu.edu/dataprivacy/' },
			{ y: 1, label: 'http://lib.stat.cmu.edu/' },
			{ y: 1, label: 'http://www-2.cs.cmu.edu/~lemur' },
			{ y: 1, label: 'http://www.link.cs.cmu.edu/link/' }
		]
	}
	else if (dtp=='200517')
	{
		dp = [                                         
			{ y: 2, label: 'www.timeml.org' }			
		]
	}
	else if (dtp=='200518')
	{
		dp = [                                         
			{ y: 2, label:  'labs.google.com' }			
		]
	}
	else if (dtp=='200519')
	{
		dp = [                                         
			{ y: 2, label: 'www.ncbi.nlm.nih.gov' }			
		]
	}
	else if (dtp=='20060')
	{
		dp = [                                         
			{ y: 3, label: 'www.csie.ntu.edu.tw' }			
		]
	}
	else if (dtp=='20061')
	{
		dp = [                                         
			{ y: 2, label: 'www.cis.upenn.edu' },
			{ y: 2, label: 'www.ldc.upenn.edu' },
			{ y: 1, label: 'http://bioie.ldc.upenn.edu/' },
			{ y: 1, label: 'http://acl.ldc.upenn.edu/P/P03/P03-2025.pdf' },
			{ y: 1, label: 'projects.ldc.upenn.edu' }
		]
	}
	else if (dtp=='20062')
	{
		dp = [                                         
			{ y: 2, label: 'www.cs.ualberta.ca' }			
		]
	}
	else if (dtp=='20063')
	{
		dp = [                                         
			{ y: 2, label: 'chasen.org' }			
		]
	}
	else if (dtp=='20064')
	{
		dp = [                                         
			{ y: 2, label: 'www.lsi.upc.edu' }			
		]
	}
	else if (dtp=='20065')
	{
		dp = [                                         
			{ y: 2, label: 'www.lsi.upc.es' },
			{ y: 1, label: 'nipadio.lsi.upc.es' }	
		]
	}
	else if (dtp=='20066')
	{
		dp = [                                         
			{ y: 2, label: 'search.cpan.org' }			
		]
	}
	else if (dtp=='20067')
	{
		dp = [                                         
			{ y: 2, label: 'www-tsujii.is.s.u-tokyo.ac.jp' }			
		]
	}
	else if (dtp=='20068')
	{
		dp = [                                         
			{ y: 2, label: 'mallet.cs.umass.edu' }			
		]
	}
	else if (dtp=='20069')
	{
		dp = [                                         
			{ y: 2, label: 'wordnet.princeton.edu' }			
		]
	}
	else if (dtp=='200610')
	{
		dp = [                                         
			{ y: 2, label: 'www.cs.cmu.edu' }			
		]
	}
	else if (dtp=='200611')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cs.toronto.edu/compling/Publications' }			
		]
	}
	else if (dtp=='200612')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.fjoch.com/GIZA++.html' }			
		]
	}
	else if (dtp=='200613')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.tc-star.org' }			
		]
	}
	else if (dtp=='200614')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.slate.com/id/2133922/' }			
		]
	}
	else if (dtp=='200615')
	{
		dp = [                                         
			{ y: 1, label: 'http://xxx.lanl.gov/cmp-lg'}			
		]
	}
	else if (dtp=='200616')
	{
		dp = [                                         
			{ y: 1, label: 'http://maxent.sourceforge.net/' },
			{ y: 1, label: 'http://opennlp.sourceforge.net/' }	
		]
	}
	else if (dtp=='200617')
	{
		dp = [                                         
			{ y: 1, label: 'http://ilk.uvt.nl/' },
			{ y: 1, label: 'http://nextens.uvt.nl/' }	
		]
	}
	else if (dtp=='200618')
	{
		dp = [                                         
			{ y: 2, label: 'http://cnts.uia.ac.be/conll2000/' }			
		]
	}
	else if (dtp=='200619')
	{
		dp = [                                         
			{ y: 1, label: 'http://timex2.mitre.org/tern.html' },
			{ y: 1, label: 'http://nrrc.mitre.org/NRRC/publications.htm' },
			{ y: 1, label: 'https://rrc.mitre.org/pubs/mpqaFinalReport.pdf' }
		]
	}
	else if (dtp=='20070')
	{
		dp = [                                         
			{ y: 17, label: 'www.lsi.upc.edu' }
		]
	}
	else if (dtp=='20071')
	{
		dp = [                                         
			{ y: 17, label: 'www.nist.gov' },
			{ y: 1, label: 'www-nlpir.nist.gov' },
			{ y: 1, label: 'trec.nist.gov' },
			{ y: 1, label: 'http://nist.gov/speech/tests/tdt/tdt98/' }
		]
	}
	else if (dtp=='20072')
	{
		dp = [                                         
			{ y: 7, label: 'chasen.org' },
			{ y: 1, label: 'http://www.chasen.org/taku/software/' }
		]
	}
	else if (dtp=='20073')
	{
		dp = [                                         
			{ y: 5, label: 'svmlight.joachims.org' },
			{ y: 1, label: 'http://svmlight.joachims.org;' }
		]
	}
	else if (dtp=='20074')
	{
		dp = [                                         
			{ y: 5, label: 'mallet.cs.umass.edu' }
		]
	}
	else if (dtp=='20075')
	{
		dp = [                                         
			{ y: 4, label: 'www.csie.ntu.edu.tw' }
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
			{ y: 4, label: 'www.statmt.org' }
		]
	}
	else if (dtp=='20079')
	{
		dp = [                                         
			{ y: 4, label: 'www-tsujii.is.s.u-tokyo.ac.jp' },
			{ y: 1, label: 'http://www.tkl.iis.u-tokyo.ac.jp/kaji/acp/' }
		]
	}
	else if (dtp=='200710')
	{
		dp = [                                         
			{ y: 3, label: 'people.csail.mit.edu' },
			{ y: 1, label: 'http://web.mit.edu/17.251/www/' }
		]
	}
	else if (dtp=='200711')
	{
		dp = [                                         
			{ y: 3, label: 'www.speech.cs.cmu.edu' },
			{ y: 1, label: 'http://www.cs.cmu.edu/~lemur/' }
		]
	}
	else if (dtp=='200712')
	{
		dp = [                                         
			{ y: 3, label: 'nlp.kuee.kyoto-u.ac.jp' }
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
			{ y: 3, label: 'www.isi.edu' },
			{ y: 1, label: 'http://haydn.isi.edu/ROUGE/' }
		]
	}
	else if (dtp=='200715')
	{
		dp = [                                         
			{ y: 2, label: 'www.lemurproject.org' }
		]
	}
	else if (dtp=='200716')
	{
		dp = [                                         
			{ y: 2, label: 'www.fjoch.com' }
		]
	}
	else if (dtp=='200717')
	{
		dp = [                                         
			{ y: 2, label: 'www.speech.sri.com' }
		]
	}
	else if (dtp=='200718')
	{
		dp = [                                         
			{ y: 2, label: 'www.nlm.nih.gov' },
			{ y: 2, label: 'http://www.pubmedcentral.nih.gov' },
			{ y: 1, label: 'www.nlm.nih.gov' }
		]
	}
	else if (dtp=='200719')
	{
		dp = [                                         
			{ y: 2, label: 'www.aclweb.org' }
		]
	}
	else if (dtp=='200720')
	{
		dp = [                                         
			{ y: 2, label:  'www.wikipedia.org' },
			{ y: 1, label: 'http://wikipedia.org/' },
			{ y: 1, label: 'http://en.wikipedia.org/wiki/Golomb_coding' }
		]
	}
	else if (dtp=='20080')
	{
		dp = [                                         
			{ y: 11, label:  'www.nist.gov' },
			{ y: 2, label:  'duc.nist.gov' },
			{ y: 2, label:  'www-nlpir.nist.gov' },
			{ y: 1, label:  'http://trec.nist.gov/results' }
		]
	}
	else if (dtp=='20081')
	{
		dp = [                                         
			{ y: 6, label:  'www.csie.ntu.edu.tw' }
		]
	}
	else if (dtp=='20082')
	{
		dp = [                                         
			{ y: 4, label:  'projects.ldc.upenn.edu' },
			{ y: 3, label:  'www.ldc.upenn.edu' },
			{ y: 2, label:  'www.cis.upenn.edu' },
			{ y: 1, label:  'http://onlinebooks.library.upenn.edu' },
			{ y: 1, label:  'http://www.seas.upenn.edu/strctlrn/StructLearn' }
		]
	}
	else if (dtp=='20083')
	{
		dp = [                                         
			{ y: 4, label:  'svmlight.joachims.org' }
		]
	}
	else if (dtp=='20084')
	{
		dp = [                                         
			{ y: 4, label:  'mallet.cs.umass.edu' },
			{ y: 1, label:  'http://www.cs.umass.edu/' }
		]
	}
	else if (dtp=='20085')
	{
		dp = [                                         
			{ y: 4, label:  'nlp.stanford.edu' },
			{ y: 1, label:  'http://ai.stanford.edu/' }
		]
	}
	else if (dtp=='20086')
	{
		dp = [                                         
			{ y: 4, label:  'answers.yahoo.com' },
			{ y: 1, label:  'http://tw.news.yahoo.com' },
			{ y: 1, label:  'http://babelfish.yahoo.com/translate_txt' }
		]
	}
	else if (dtp=='20087')
	{
		dp = [                                         
			{ y: 4, label:  'nlp.kuee.kyoto-u.ac.jp' }
		]
	}
	else if (dtp=='20088')
	{
		dp = [                                         
			{ y: 4, label:  'nlp.cs.berkeley.edu' }
		]
	}
	else if (dtp=='20089')
	{
		dp = [                                         
			{ y: 4, label: 'search.cpan.org' }
		]
	}
	else if (dtp=='200810')
	{
		dp = [                                         
			{ y: 2, label:  'www.cs.ualberta.ca' }
		]
	}
	else if (dtp=='200811')
	{
		dp = [                                         
			{ y: 3, label:  'www.statmt.org' }
		]
	}
	else if (dtp=='200812')
	{
		dp = [                                         
			{ y: 3, label:  'sourceforge.net' },
			{ y: 1, label:  'http://minorthird.sourceforge.net' },
			{ y: 1, label:  'http://flexcrfs.sourceforge.net' },
			{ y: 1, label:  'http://crfpp.sourceforge.net/' }
		]
	}
	else if (dtp=='200813')
	{
		dp = [                                         
			{ y: 3, label:  'L2R.cs.uiuc.edu' },
			{ y: 2, label:  '12r.cs.uiuc.edu' },
			{ y: 1, label:  'http://vision.cs.uiuc.edu/annotation/' }
		]
	}else if (dtp=='200814')
	{
		dp = [                                         
			{ y: 2, label:  'cs.jhu.edu' },
			{ y: 2, label:  'www.cs.jhu.edu' },
			{ y: 1, label:  'http://www.clsp.jhu.edu/ws2007/groups/elerfed/docu' }
		]
	}
	else if (dtp=='200815')
	{
		dp = [                                         
			{ y: 2, label:  'homepages.inf.ed.ac.uk' }
		]
	}
	else if (dtp=='200816')
	{
		dp = [                                         
			{ y: 2, label:  'wordnet.princeton.edu' }
		]
	}
	else if (dtp=='200817')
	{
		dp = [                                         
			{ y: 2, label:  'www.google.com' },
			{ y: 1, label:  'http://translate.google.com/translate_t' },
			{ y: 1, label:  'http://labs.google.com/sets' }
		]
	}
	else if (dtp=='200818')
	{
		dp = [                                         
			{ y: 2, label:  'www.openfst.org' }
		]
	}
	else if (dtp=='200819')
	{
		dp = [                                         
			{ y: 2, label:  'blog.doloreslabs.com' }
		]
	}
	else if (dtp=='200820')
	{
		dp = [                                         
			{ y: 2, label:  'chasen.org' },
			{ y: 1, label:  'http://www.chasen.org/' }
		]
	}
	else if (dtp=='20090')
	{
		dp = [                                         
			{ y: 6, label:  'www.cs.pitt.edu' }
		]
	}
	else if (dtp=='20091')
	{
		dp = [                                         
			{ y: 6, label:  'www.nist.gov' },
			{ y: 3, label:   'trec.nist.gov' },
			{ y: 1, label:  'http://www-nlpir.nist.gov/projects/' }
		]
	}
	else if (dtp=='20092')
	{
		dp = [                                         
			{ y: 6, label:   'code.google.com' },
			{ y: 1, label:   'http://groups.google.com/' }
		]
	}
	else if (dtp=='20093')
	{
		dp = [                                         
			{ y: 5, label:  'homepages.inf.ed.ac.uk' }
		]
	}
	else if (dtp=='20094')
	{
		dp = [                                         
			{ y: 4, label:  'nlp.stanford.edu' },
			{ y: 1, label:  'http://www-nlp.stanford.edu/software/lex-parser.shtml' },
			{ y: 1, label:  'http://www.stanford.edu/class/linguist34/;' }
		]
	}
	else if (dtp=='20095')
	{
		dp = [                                         
			{ y: 4, label: 'www.csie.ntu.edu.tw' },
			{ y: 2, label:  'nlg18.csie.ntu.edu.tw:8080' }
		]
	}
	else if (dtp=='20096')
	{
		dp = [                                         
			{ y: 4, label:  'en.wikipedia.org' },
			{ y: 1, label:  'http://it.wikipedia.org/' }
		]
	}
	else if (dtp=='20097')
	{
		dp = [                                         
			{ y: 4, label:  'www.statmt.org' }
		]
	}
	else if (dtp=='20098')
	{
		dp = [                                         
			{ y: 4, label: 'crfpp.sourceforge.net' },
			{ y: 2, label:  'maxent.sourceforge.net' },
			{ y: 2, label:  'mstparser.sourceforge.net' },
			{ y: 1, label:  'http://tadm.sourceforge.net/' },
			{ y: 1, label:  'http://wikipedia-miner.sourceforge.net/' },
			{ y: 1, label:  'http://infomap-nlp.sourceforge.net' },
			{ y: 1, label:  'http://gibbslda.sourceforge.net' }
		]
	}
	else if (dtp=='20099')
	{
		dp = [                                         
			{ y: 1, label:  'http://mallet.cs.umass.edu' },
			{ y: 3, label:  'www.cs.umass.edu' }
		]
	}
	else if (dtp=='200910')
	{
		dp = [                                         
			{ y: 3, label:  'framenet.icsi.berkeley.edu' },
			{ y: 1, label:  'http://www.cs.berkeley.edu/pliang/software/brown-' },
			{ y: 1, label:  'http://bailando.sims.berkeley.edu/enron/enron.sql.gz' },
			{ y: 1, label:  'http://www.icsi.berkeley.edu/ees/dadb/' }
		]
	}
	else if (dtp=='200911')
	{
		dp = [                                         
			
			{ y: 2, label:  'www.ling.upenn.edu' },
			{ y: 2, label:  'www.cis.upenn.edu' },
			{ y: 1, label:  'http://projects.ldc.upenn.edu/Chinese/LDC' },
			{ y: 3, label:  'www.ldc.upenn.edu' }
		]
	}
	else if (dtp=='200912')
	{
		dp = [                                         
			{ y: 3, label:  'www.cs.cmu.edu' },
			{ y: 1, label:  'http://www.speech.cs.cmu.edu/' },
			{ y: 1, label:  'http://projectile.sv.cmu.edu/research/' }
		]
	}
	else if (dtp=='200913')
	{
		dp = [                                         
			{ y: 2, label:  'download.wikimedia.org' },
			{ y: 1, label:  'http://meta.wikimedia.org/wiki/List' }
		]
	}else if (dtp=='200914')
	{
		dp = [                                         
			{ y: 3, label:  'chasen.org' }
		]
	}
	else if (dtp=='200915')
	{
		dp = [                                         
			{ y: 3, label:  'www.ncbi.nlm.nih.gov' }
		]
	}else if (dtp=='200916')
	{
		dp = [                                         
			{ y: 3, label:   'nlp.kuee.kyoto-u.ac.jp' }
		]
	}
	else if (dtp=='200917')
	{
		dp = [                                         
			{ y: 2, label:  'tedlab.mit.edu' },
			{ y: 2, label:   'people.csail.mit.edu' }
		]
	}
	else if (dtp=='200918')
	{
		dp = [                                         
			{ y: 2, label:  'www.natcorp.ox.ac.uk' }
		]
	}
	else if (dtp=='200919')
	{
		dp = [                                         
			{ y: 2, label:  'www.mturk.com' }
		]
	}
	else if (dtp=='200920')
	{
		dp = [                                         
			{ y: 2, label:  'www.mturk.com' },
			{ y: 1, label:  'http://dit.unitn.it/~moschitt/' }
		]
	}
	else if (dtp=='20100')
	{
		dp = [                                         
			{ y: 7, label:  'nlp.stanford.edu' }
		]
	}
	else if (dtp=='20101')
	{
		dp = [                                         
			{ y: 6, label:   'homepages.inf.ed.ac.uk'}
		]
	}
	else if (dtp=='20102')
	{
		dp = [                                         
			{ y: 5, label: 'en.wikipedia.org' },
			{ y: 1, label:  'http://zh.wikipedia.org/zh-cn/%E6%B0%B4' },
			{ y: 1, label:  'http://als.wikipedia.org;' },
			{ y: 1, label:  'http://www.wikipedia.org' }
		]
	}
	else if (dtp=='20103')
	{
		dp = [                                         
			{ y: 5, label:  'code.google.com' },
			{ y: 1, label:  'http://research.google.com/archive/' },
			{ y: 1, label:  'http://translate.google.com' },
			{ y: 1, label:  'http://news.google.com/' },
			{ y: 1, label:  'http://blogsearch.google.com/' }
		]
	}
	else if (dtp=='20104')
	{
		dp = [                                         
			{ y: 4, label:  'www.statmt.org' },
			{ y: 1, label:  'http://statmt.org/moses' }
		]
	}
	else if (dtp=='20105')
	{
		dp = [                                         
			{ y: 4, label:  'mallet.cs.umass.edu' }
		]
	}else if (dtp=='20106')
	{
		dp = [                                         
			{ y: 3, label:  'www.cis.upenn.edu' },
			{ y: 4, label:  'www.ldc.upenn.edu' },
			{ y: 1, label:  'http://bioie.ldc.upenn.edu/' },
			{ y: 1, label:  'http://ccat.sas.upenn.edu/~haroldfs/' },
			{ y: 1, label:  'http://projects.ldc.upenn.edu/gale/data/catalog.html' },
			{ y: 1, label:  'http://papers.ldc.upenn.edu/LREC2004/' }
		]
	}
	else if (dtp=='20107')
	{
		dp = [                                         
			{ y: 4, label:   'lucene.apache.org' }
		]
	}
	else if (dtp=='20108')
	{
		dp = [                                         
			{ y: 3, label:  'groups.csail.mit.edu' }
		]
	}
	else if (dtp=='20109')
	{
		dp = [                                         
			{ y: 3, label:  'dx.doi.org' }
		]
	}
	else if (dtp=='201010')
	{
		dp = [                                         
			{ y: 3, label:   'www.cs.cornell.edu' }
		]
	}
	else if (dtp=='201011')
	{
		dp = [                                         
			{ y: 3, label:  'nlp.cs.lth.se' }
		]
	}
	else if (dtp=='201012')
	{
		dp = [                                         
			{ y: 3, label:  'www.cs.washington.edu' }
		]
	}
	else if (dtp=='201013')
	{
		dp = [                                         
			{ y: 2, label:  'www.ark.cs.cmu.edu' },
			{ y: 1, label:  'http://projectile.sv.cmu.edu/research/' }
		]
	}
	else if (dtp=='201014')
	{
		dp = [                                         
			{ y: 2, label:  'www.umiacs.umd.edu' },
			{ y: 1, label:  'http://www.lib.umd.edu/drum/handle/1903/10058' }
		]
	}
	else if (dtp=='201015')
	{
		dp = [                                         
			{ y: 2, label:   'www.natcorp.ox.ac.uk' }
		]
	}
	else if (dtp=='201016')
	{
		dp = [                                         
			{ y: 2, label:  'nlp.cs.byu.edu' }
		]
	}
	else if (dtp=='201017')
	{
		dp = [                                         
			{ y: 2, label:  'sourceforge.net' },
			{ y: 2, label:  'opennlp.sourceforge.net' },
			{ y: 1, label:  'http://stardict.sourceforge.net/Dictionaries.php' },
			{ y: 1, label:  'http://biocreative.sourceforge.net/' },
			{ y: 1, label:  'http://www.sourceforge.net/projects/zpar' },
			{ y: 1, label:  'http://crfpp.sourceforge.net/' },
			{ y: 1, label:  'http://sary.sourceforge.net' },
			{ y: 1, label:  'http://tadm.sourceforge.net/' },
			{ y: 1, label:  'http://irrlicht.sourceforge.net/' },
			{ y: 1, label:  'http://lpsolve.sourceforge.net/' }
		]
	}
	else if (dtp=='201018')
	{
		dp = [                                         
			{ y: 2, label:  'www.cog.brown.edu' },
			{ y: 1, label:  'http://bllip.cs.brown.edu/resources.shtml#software' }
		]
	}
	else if (dtp=='201019')
	{
		dp = [                                         
			{ y: 2, label:  'developer.yahoo.com' }
		]
	}
	else if (dtp=='201020')
	{
		dp = [                                         
			{ y: 2, label:  'www.nist.gov' },
			{ y: 2, label:  'www.itl.nist.gov' },
			{ y: 1, label:  'http://trec.nist.gov/data/blog08.html' },
			{ y: 1, label:  'duc.nist.gov' }
		]
	}
	else if (dtp=='20110')
	{
		dp = [                                         
			{ y: 11, label:  'nlp.stanford.edu' },
			{ y: 1, label:  'http://www.stanford.edu/' }
		]
	}
	else if (dtp=='20111')
	{
		dp = [                                         
			{ y: 6, label:  'en.wikipedia.org' },
			{ y: 1, label:  'http://ja.wikipedia.org/' },
			{ y: 1, label:  'http://wikipedia.org' },
			{ y: 1, label:  'http://www.wikipedia.org/' }
		]
	}
	else if (dtp=='20112')
	{
		dp = [                                         
			{ y: 6, label: 'mallet.cs.umass.edu' }
		]
	}
	else if (dtp=='20113')
	{
		dp = [                                         
			{ y: 6, label:  'www.nist.gov' },
			{ y: 2, label:  'www.itl.nist.gov' },
			{ y: 1, label:  'http://duc.nist.gov/' },
			{ y: 1, label:  'http://trec.nist.gov/data/qamain.html' },
			{ y: 1, label:  'http://www-nlpir.nist.gov/related_projects/muc/' }
		]
	}
	else if (dtp=='20114')
	{
		dp = [                                         
			{ y: 5, label:  'www.ldc.upenn.edu' },
			{ y: 2, label:  'projects.ldc.upenn.edu' },
			{ y: 1, label:  'http://www.cis.upenn.edu/' },
			{ y: 1, label:  'http://www.seas.upenn.edu/' }
		]
	}else if (dtp=='20115')
	{
		dp = [                                         
			{ y: 2, label:  'www.gutenberg.org' }
		]
	}
	else if (dtp=='20116')
	{
		dp = [                                         
			{ y: 2, label:  'rtw.ml.cmu.edu' },
			{ y: 2, label:  'boston.lti.cs.cmu.edu' },
			{ y: 1, label:  'http://www.ark.cs.cmu.edu/MT' }
		]
	}
	else if (dtp=='20117')
	{
		dp = [                                         
			{ y: 5, label:  'dx.doi.org' }
		]
	}
	else if (dtp=='20118')
	{
		dp = [                                         
			{ y: 4, label:  'code.google.com' }
		]
	}
	else if (dtp=='20119')
	{
		dp = [                                         
			{ y: 4, label:  'sourceforge.net' },
			{ y: 2, label:  'opennlp.sourceforge.net' },
			{ y: 1, label:  'http://crfpp.sourceforge.net/' },
			{ y: 1, label:  'http://lpsolve.sourceforge.net/5.5/' },
			{ y: 1, label:  'http://maxent.sourceforge.net/about.html' },
			{ y: 1, label:  'http://multiword.sourceforge.net/' }
		]
	}else if (dtp=='201110')
	{
		dp = [                                         
			{ y: 3, label:  'maltparser.org' }
		]
	}
	else if (dtp=='201111')
	{
		dp = [                                         
			{ y: 3, label:  'www.lemurproject.org' },
			{ y: 1, label:  'http://lemurproject.org/clueweb09/' }
		]
	}
	else if (dtp=='201112')
	{
		dp = [                                         
			{ y: 3, label:  'nlp.kuee.kyoto-u.ac.jp' },
			{ y: 2, label:  'nlp.ist.i.kyoto-u.ac.jp' }
		]
	}
	else if (dtp=='201113')
	{
		dp = [                                         
			{ y: 3, label:  'twitter.com' }
		]
	}
	else if (dtp=='201114')
	{
		dp = [                                         
			{ y: 3, label:  'mednlp.jp' }
		]
	}
	else if (dtp=='201115')
	{
		dp = [                                         
			{ y: 2, label:  'www.csie.ntu.edu.tw' }
		]
	}
	else if (dtp=='201116')
	{
		dp = [                                         
			{ y: 2, label:  'www.statmt.org' }
		]
	}
	else if (dtp=='201117')
	{
		dp = [                                         
			{ y: 2, label:   'www.cs.pitt.edu' }
		]
	}
	else if (dtp=='201118')
	{
		dp = [                                         
			{ y: 2, label:  'cogcomp.cs.illinois.edu' }
		]
	}
	else if (dtp=='201119')
	{
		dp = [                                         
			{ y: 2, label:  'web.science.mq.edu.au' }
		]
	}
	else if (dtp=='20120')
	{
		dp = [                                         
			{ y: 10, label:  'nlp.stanford.edu' },
			{ y: 2, label:   'cs.stanford.edu' }
		]
	}
	else if (dtp=='20121')
	{
		dp = [                                         
			{ y: 9, label:  'code.google.com' },
			{ y: 2, label:  'www.google.com' },
			{ y: 2, label:  'books.google.com' },
			{ y: 1, label:  'download.wikimedia.org' }
		]
	}
	else if (dtp=='20122')
	{
		dp = [                                         
			{ y: 6, label:  'en.wikipedia.org' },
			{ y: 2, label:  'www.wikipedia.org' }
		]
	}
	else if (dtp=='20123')
	{
		dp = [                                         
			{ y: 5, label:  'mallet.cs.umass.edu' }
		]
	}
	else if (dtp=='20124')
	{
		dp = [                                         
			{ y: 5, label:  'www.statmt.org' },
			{ y: 4, label:  'statmt.org' }
		]
	}
	else if (dtp=='20125')
	{
		dp = [                                         
			{ y: 3, label:  'www.cs.cornell.edu' }
		]
	}
	else if (dtp=='20126')
	{
		dp = [                                         
			{ y: 3, label:   'www.h-its.org' }
		]
	}
	else if (dtp=='20127')
	{
		dp = [                                         
			{ y: 3, label:  'cogcomp.cs.illinois.edu' }
		]
	}
	else if (dtp=='20128')
	{
		dp = [                                         
			{ y: 3, label:  'github.com' }
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
			{ y: 2, label:  'www.liwc.net' }
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
			{ y: 2, label:  'ufal.mff.cuni.cz' }
		]
	}
	else if (dtp=='201218')
	{
		dp = [                                         
			{ y: 2, label: 'w3.msi.vxu.se' }
		]
	}
	else if (dtp=='201219')
	{
		dp = [                                         
			{ y: 2, label:  'aspell.net' }
		]
	}
	else if (dtp=='201220')
	{
		dp = [                                         
			{ y: 2, label:  'ilk.uvt.nl' }
		]
	}
	else if (dtp=='20130')
	{
		dp = [                                         
			{ y: 16, label:  'code.google.com' },
			{ y: 4, label:  'translate.google.com' },
			{ y: 1, label:  'http://news.google.com' },
			{ y: 1, label:  'https://developers.google.com/' },
			{ y: 1, label:  'https://sites.google.com/a/brown.edu/m-barton-laws/home/gmias' }
		]
	}
	else if (dtp=='20131')
	{
		dp = [                                         
			{ y: 13, label:  'nlp.stanford.edu' },
			{ y: 1, label:  'http://snap.stanford.edu/data/web-RateBeer.html' },
			{ y: 1, label:  'http://nlp.stanford.edu:8080/parser/' }
		]
	}
	else if (dtp=='20132')
	{
		dp = [                                         
			{ y: 12, label:  'github.com' }
		]
	}
	else if (dtp=='20133')
	{
		dp = [                                         
			{ y: 11, label:  'en.wikipedia.org' }
		]
	}
	else if (dtp=='20134')
	{
		dp = [                                         
			{ y: 9, label:  'www.statmt.org' },
			{ y: 1, label:  'http://matrix.statmt.org/test_sets/list' }
		]
	}
	else if (dtp=='20135')
	{
		dp = [                                         
			{ y: 8, label:  'cogcomp.cs.illinois.edu' }
		]
	}
	else if (dtp=='20136')
	{
		dp = [                                         
			{ y: 5, label:  'wacky.sslmit.unibo.it' }
		]
	}
	else if (dtp=='20137')
	{
		dp = [                                         
			{ y: 5, label:  'www.mturk.com' },
			{ y: 1, label:  'https://requester.mturk.com/tour' }
		]
	}
	else if (dtp=='20138')
	{
		dp = [                                         
			{ y: 5, label:  'www.ldc.upenn.edu' },
			{ y: 2, label:  'www.cis.upenn.edu' },
			{ y: 1, label:  'http://www.seas.upenn.edu/' },
			{ y: 1, label:  'http://ccat.sas.upenn.edu/' }
		]
	}
	else if (dtp=='20139')
	{
		dp = [                                         
			{ y: 4, label:  'www.nist.gov' },
			{ y: 3, label:  'www.itl.nist.gov' },
			{ y: 1, label:  'http://trec.nist.gov/trec_eval' }
		]
	}
	else if (dtp=='201310')
	{
		dp = [                                         
			{ y: 4, label: 'en.wiktionary.org' },
			{ y: 1, label: 'http://www.wiktionary.org/' }
		]
	}
	else if (dtp=='201311')
	{
		dp = [                                         
			{ y: 4, label:  'nlp.ist.i.kyoto-u.ac.jp' }
		]
	}
	else if (dtp=='201312')
	{
		dp = [                                         
			{ y: 3, label:  'stp.lingfil.uu.se' }
		]
	}
	else if (dtp=='201313')
	{
		dp = [                                         
			{ y: 3, label:  'clic.cimec.unitn.it' }
		]
	}
	else if (dtp=='201314')
	{
		dp = [                                         
			{ y: 3, label:  'sourceforge.net' },
			{ y: 1, label:  'meka.sourceforge.net' },
			{ y: 1, label:  'wn-similarity.sourceforge.net' }
		]
	}
	else if (dtp=='201315')
	{
		dp = [                                         
			{ y: 3, label:  'www.nlm.nih.gov' },
			{ y: 1, label:  'metamap.nlm.nih.gov' }
		]
	}
	else if (dtp=='201316')
	{
		dp = [                                         
			{ y: 3, label:  'svmlight.joachims.org' }
		]
	}
	else if (dtp=='201317')
	{
		dp = [                                         
			{ y: 3, label:  'www.ukp.tu-darmstadt.de' }
		]
	}
	else if (dtp=='201318')
	{
		dp = [                                         
			{ y: 3, label:  'www.ifs.tuwien.ac.at' }
		]
	}
	else if (dtp=='201319')
	{
		dp = [                                         
			{ y: 3, label:  'lucene.apache.org' },
			{ y: 1, label:  'http://opennlp.apache.org/' }
		]
	}
	else if (dtp=='20140')
	{
		dp = [                                         
			{ y: 29, label:  'code.google.com' },
			{ y: 2, label:  'developers.google.com'},
			{ y: 2, label:  'sites.google.com' },
			{ y: 1, label:  'http://translate.google.com' }
		]
	}
	else if (dtp=='20141')
	{
		dp = [                                         
			{ y: 25, label:  'nlp.stanford.edu' },
			{ y: 2, label:  'www-nlp.stanford.edu' },
			{ y: 1, label:  'http://ai.stanford.edu/%7eehhuang/' }
		]
	}
	else if (dtp=='20142')
	{
		dp = [                                         
			{ y: 22, label:  'github.com' }
		]
	}
	else if (dtp=='20143')
	{
		dp = [                                         
			{ y: 11, label:  'sourceforge.net' },
			{ y: 3, label:  'lpsolve.sourceforge.net' },
			{ y: 1, label:  'http://maxent.sourceforge.net/' },
			{ y: 1, label:  'http://jazzy.sourceforge.net/' },
			{ y: 1, label:  'http://wn-similarity.sourceforge.net/' },
			{ y: 1, label:  'http://crfpp.sourceforge.net/' }
		]
	}
	else if (dtp=='20144')
	{
		dp = [                                         
			{ y: 8, label:  'www.statmt.org' }
		]
	}
	else if (dtp=='20145')
	{
		dp = [                                         
			{ y: 7, label:  'catalog.ldc.upenn.edu' },
			{ y: 3, label:  'www.cis.upenn.edu' },
			{ y: 4, label:  'www.ldc.upenn.edu' },
			{ y: 1, label:  'http://projects.ldc.upenn.edu/ace' },
			{ y: 1, label:  'http://www.seas.upenn.edu/' }
		]
	}
	else if (dtp=='20146')
	{
		dp = [                                         
			{ y: 7, label:  'en.wikipedia.org'},
			{ y: 2, label:  'zh.wikipedia.org' },
			{ y: 1, label:  'http://wikipedia.org/' },
			{ y: 1, label:  'http://simple.wikipedia.org/' },
			{ y: 1, label:  'http://download.wikipedia.org' }
		]
	}
	else if (dtp=='20147')
	{
		dp = [                                         
			{ y: 7, label:  'www.cs.cmu.edu' },
			{ y: 4, label:  'www.ark.cs.cmu.edu' },
			{ y: 2, label:  'rtw.ml.cmu.edu' },
			{ y: 1, label:  'http://nlp.qatar.cmu.edu/resources/' },
			{ y: 1, label:  'http://www.speech.cs.cmu.edu/' }
		]
	}
	else if (dtp=='20148')
	{
		dp = [                                         
			{ y: 6, label:  'wordnet.princeton.edu' }
		]
	}
	else if (dtp=='20149')
	{
		dp = [                                         
			{ y: 5, label:  'nlp.ist.i.kyoto-u.ac.jp' }
		]
	}
	else if (dtp=='201410')
	{
		dp = [                                         
			{ y: 4, label:   'www.mturk.com' }
		]
	}
	else if (dtp=='201411')
	{
		dp = [                                         
			{ y: 4, label:  'homepages.inf.ed.ac.uk' }
		]
	}
	else if (dtp=='201412')
	{
		dp = [                                         
			{ y: 3, label:  'mallet.cs.umass.edu' },
			{ y: 1, label:  'https://people.cs.umass.edu/' },
			{ y: 1, label:  'http://iesl.cs.umass.edu/riedel/ecml/' }
		]
	}
	else if (dtp=='201413')
	{
		dp = [                                         
			{ y: 3, label:  'wit3.fbk.eu' },
			{ y: 1, label:  'http://iwslt2010.fbk.eu' },
			{ y: 1, label:  'http://hlt.fbk.eu/en/irstlm' },
			{ y: 1, label:  'http://wndomains.fbk.eu/hierarchy.html' }
		]
	}
	else if (dtp=='201414')
	{
		dp = [                                         
			{ y: 3, label:  'alt.qcri.org' }
		]
	}
	else if (dtp=='201415')
	{
		dp = [                                         
			{ y: 3, label:  'metaoptimize.com' }
		]
	}
	else if (dtp=='201416')
	{
		dp = [                                         
			{ y: 3, label:  'www.gurobi.com' }
		]
	}
	else if (dtp=='201417')
	{
		dp = [                                         
			{ y: 3, label:  'ir.hit.edu.cn' },
			{ y: 1, label:  'http://mitlab.hit.edu.cn/ssmt2007.html' }
		]
	}
	else if (dtp=='201419')
	{
		dp = [                                         
			{ y: 2, label:  'mattmahoney.net' }
		]
	}
	else if (dtp=='201418')
	{
		dp = [                                         
			{ y: 2, label:  'lucene.apache.org' },
			{ y: 3, label:  'http://opennlp.apache.org/' }
		]
	}
	else if (dtp=='201420')
	{
		dp = [                                         
			{ y: 2, label:  'dev.twitter.com' },
			{ y: 2, label:  'twitter.com' },
			{ y: 1, label:  'https://stream.twitter.com/1.1/statuses/sample.json' }
		]
	}
	else if (dtp=='20150')
	{
		dp = [                                         
			{ y: 85, label:  'github.com' }
			]
	}
	else if (dtp=='20151')
	{
		dp = [                                         
			{ y: 41, label:  'code.google.com' },
			{ y: 6, label:  'sites.google.com' },
			{ y: 1, label:  'https://www.google.com/finance' },
			{ y: 1, label:  'http://docs.google.com/View?docid=dfvxd49s_36c28v9pmw' },
			{ y: 1, label:  'http://www-nlp.stanford.edu/projects/' }
		]
	}
	else if (dtp=='20152')
	{
		dp = [                                         
			{ y: 24, label:  'nlp.stanford.edu' },
			{ y: 3, label:  'ai.stanford.edu' },
			{ y: 1, label:  'http://i.stanford.edu/hazy/tuffy' },
			{ y: 1, label:  'https://snap.stanford.edu/data/web-Amazon.html' },
			{ y: 1, label:  'htple.json' }
		]
	}
	else if (dtp=='20153')
	{
		dp = [                                         
			{ y: 18, label:  'en.wikipedia.org' }
		]
	}
	else if (dtp=='20154')
	{
		dp = [                                         
			{ y: 17, label:  'www.statmt.org' }
			]
	}
	else if (dtp=='20155')
	{
		dp = [                                         
			{ y: 8, label:  'catalog.ldc.upenn.edu' },
			{ y: 1, label:  'http://www.ling.upenn.edu/courses/' },
			{ y: 1, label:  'http://www.ldc.upenn.edu/Catalog/CatalogEntry.jsp?' },
			{ y: 1, label:  'http://www.cis.upenn.edu/~treebank/' },
			{ y: 1, label:  'http://www.seas.upenn.edu/' }
		]
	}
	else if (dtp=='20156')
	{
		dp = [                                         
			{ y: 7, label:  'sourceforge.net' },
			{ y: 2, label:  'gibbslda.sourceforge.net' },
			{ y: 1, label:  'http://lpsolve.sourceforge.net/' },
			{ y: 1, label:  'http://mulan.sourceforge.net/' }
		]
	}
	else if (dtp=='20157')
	{
		dp = [                                         
			{ y: 6, label:  'www.phontron.com' }
			]
	}
	else if (dtp=='20158')
	{
		dp = [                                         
			{ y: 6, label:  'www.nist.gov' },
			{ y: 5, label:  'duc.nist.gov' },
			{ y: 3, label:  'www.itl.nist.gov' },
			{ y: 1, label:  'http://trec.nist.gov/' }
		]
	}
	else if (dtp=='20159')
	{
		dp = [                                         
			{ y: 6, label:  'cogcomp.cs.illinois.edu' }
		]
	}else if (dtp=='201510')
	{
		dp = [                                         
			{ y: 6, label:  'www.aclweb.org' },
			{ y: 2, label:  'aclweb.org' }
		]
	}
	else if (dtp=='201511')
	{
		dp = [                                         
			{ y: 5, label:  'www.cs.cmu.edu' },
			{ y: 5, label:  'www.ark.cs.cmu.edu' },
			{ y: 2, label:  'rtw.ml.cmu.edu' },
			{ y: 1, label: 'http://www.speech.cs.cmu.edu/cgi-bin/cmudict' }
		]
	}
	else if (dtp=='201512')
	{
		dp = [                                         
			{ y: 5, label:  'mallet.cs.umass.edu' },
			{ y: 1, label:  'http://www.cs.umass.edu/' },
			{ y: 1, label:  'http://people.cs.umass.edu/vdang/ranklib.html/' },
			{ y: 1, label:  'http://iesl.cs.umass.edu/riedel/ecml/' }
		]
	}
	else if (dtp=='201513')
	{
		dp = [                                         
			{ y: 6, label:  'www.csie.ntu.edu.tw' }
		]
	}
	else if (dtp=='201514')
	{
		dp = [                                         
			{ y: 5, label:  'http://svmlight.joachims.org' }
		]
	}
	else if (dtp=='201515')
	{
		dp = [                                         
			{ y: 4, label:  'http://www.cs.cornell.edu/people/pabo/' }
		]
	}
	else if (dtp=='201516')
	{
		dp = [                                         
			{ y: 4, label:  'www.imdb.com' }
		]
	}
	else if (dtp=='201517')
	{
		dp = [                                         
			{ y: 4, label: 'people.sutd.edu.sg' }
		]
	}else if (dtp=='201518')
	{
		dp = [                                         
			{ y: 4, label:  'www.ncbi.nlm.nih.gov' },
			{ y: 3, label:  'www.nlm.nih.gov' }
		]
	}
	else if (dtp=='201519')
	{
		dp = [                                         
			{ y: 4, label:  'www.chokkan.org' }
		]
	}
	else if (dtp=='201520')
	{
		dp = [                                         
			{ y: 4, label:  'www.nltk.org' }
		]
	}
	else if (dtp=='20160')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.github.com/emorynlp/nlp4j/' },
			{ y: 113, label: 'github.com' }
		]
	}
	else if (dtp=='20161')
	{
		dp = [                                         
			{ y: 4, label:  'ai.stanford.edu' },
			{ y: 25, label:  'nlp.stanford.edu' },
			{ y: 1, label:  'http://snap.stanford.edu/data/' }
		]
	}
	else if (dtp=='20162')
	{
		dp = [                                         
			{ y: 17, label: 'code.google.com' },
			{ y: 7, label:  'sites.google.com' },
			{ y: 1, label:  'https://drive.google.com/file/d/' },
			{ y: 1, label:  'https://images.google.com/' },
			{ y: 1, label:  'https://developers.google.com/optimization/' },
			{ y: 1, label:  'http://www.code.google.com/p/word2vec' },
			{ y: 1, label:  'http://translate.google.com/' }
		]
	}
	else if (dtp=='20163')
	{
		dp = [                                         
			{ y: 15, label:  'en.wikipedia.org' },
			{ y: 1, label:  'https://simple.wikipedia.org/wiki/Main_Page' },
			{ y: 1, label:  'http://www.wikipedia.org' }
		]
	}
	else if (dtp=='20164')
	{
		dp = [                                         
			{ y: 11, label:  'catalog.ldc.upenn.edu' },
			{ y: 2, label:  'www.seas.upenn.edu' },
			{ y: 1, label:  'http://www.ling.upenn.edu/courses/Fall_' }
		]
	}
	else if (dtp=='20165')
	{
		dp = [                                         
			{ y: 9, label:  'www.statmt.org' },
			{ y: 2, label:  'statmt.org' }
		]
	}
	else if (dtp=='20166')
	{
		dp = [                                         
			{ y: 7, label:  'www.cs.cornell.edu' }
		]
	}
	else if (dtp=='20167')
	{
		dp = [                                         
			{ y: 5, label:  'www.nist.gov' },
			{ y: 2, label:  'trec.nist.gov' }
		]
	}
	else if (dtp=='20168')
	{
		dp = [                                         
			{ y: 5, label:  'universaldependencies.org' }
		]
	}
	else if (dtp=='20169')
	{
		dp = [                                         
			{ y: 5, label:  'www.aclweb.org' },
			{ y: 5, label:  'http://aclweb.org/anthology/' }
		]
	}
	else if (dtp=='201610')
	{
		dp = [                                         
			{ y: 3, label:  'lcl.uniroma1.it' }
		]
	}
	else if (dtp=='201611')
	{
		dp = [                                         
			{ y: 4, label:  'cogcomp.cs.illinois.edu' }
		]
	}
	else if (dtp=='201612')
	{
		dp = [                                         
			{ y: 4, label:  'arxiv.org' }
		]
	}
	else if (dtp=='201613')
	{
		dp = [                                         
			{ y: 4, label:  'www.nltk.org' }
		]
	}
	else if (dtp=='201614')
	{
		dp = [                                         
			{ y: 4, label:  'www.phontron.com' }
		]
	}
	else if (dtp=='201615')
	{
		dp = [                                         
			{ y: 4, label:  'www.federalreserve.gov' }
		]
	}
	else if (dtp=='201616')
	{
		dp = [                                         
			{ y: 4, label:  'verbs.colorado.edu' }
		]
	}
	else if (dtp=='201617')
	{
		dp = [                                         
			{ y: 3, label:  'statnlp.org' }
		]
	}
	else if (dtp=='201618')
	{
		dp = [                                         
			{ y: 3, label:  'www.cs.uic.edu' }
		]
	}
	else if (dtp=='201619')
	{
		dp = [                                         
			{ y: 3, label:  'www.csie.ntu.edu.tw' }
		]
	}
	else if (dtp=='201620')
	{
		dp = [                                         
			{ y: 4, label:  'torch.ch' }
		]
	}
	else if (dtp=='20170')
	{
		dp = [                                         
			{ y: 206, label:  'github.com' },
			{ y: 3, label:  'www.github.com' },
			{ y: 1, label:  'https://gist.github.com/herrfz/7967781' }
		]
	}
	else if (dtp=='20171')
	{
		dp = [                                         
			{ y: 85, label:  'www.aclweb.org' },
			{ y: 82, label:  'aclweb.org' },
			{ y: 1, label:  'http://www.anthology.aclweb.org/D/D13/D13-' },
			{ y: 1, label:  'http://anthology.aclweb.org/P16-2006' }
		]
	}
	else if (dtp=='20172')
	{
		dp = [                                         
			{ y: 62, label:  'arxiv.org' }
		]
	}
	else if (dtp=='20173')
	{
		dp = [                                         
			{ y: 28, label:  'nlp.stanford.edu' }
		]
	}
	else if (dtp=='20174')
	{
		dp = [                                         
			{ y: 25, label:  'code.google.com' },
			{ y: 4, label:  'sites.google.com' },
			{ y: 3, label:  'translate.google.com' },
			{ y: 2, label:  'news.google.com' },
			{ y: 2, label:  'developers.google.com' },
			{ y: 2, label:  'drive.google.com' },
			{ y: 1, label:  'https://cse.google.com/cse/' },
			{ y: 2, label:  'books.google.fr' },
			{ y: 1, label:  'https://books.google.ie/books?isbn=0805860622' },
			{ y: 1, label:  'books.google.com' },
			{ y: 1, label:  'https://books.google.de/' },
			{ y: 1, label:  'http://www.code.google.com/p/word2vec' },
			{ y: 1, label:  'https://books.google.com/books?id=cDsN3xOyO-' }
		]
	}
	else if (dtp=='20175')
	{
		dp = [                                         
			{ y: 22, label:  'en.wikipedia.org' },
			{ y: 2, label:  'www.wikipedia.org' }
		]
	}
	else if (dtp=='20176')
	{
		dp = [                                         
			{ y: 13, label:   'dl.acm.org' },
			{ y: 1, label:   'http://doi.acm.org/10.1145/2850417' }
		]
	}
	else if (dtp=='20177')
	{
		dp = [                                         
			{ y: 12, label:  'papers.nips.cc' }
		]
	}
	else if (dtp=='20178')
	{
		dp = [                                         
			{ y: 11, label:  'www.statmt.org' },
			{ y: 2, label:  'data.statmt.org' },
			{ y: 2, label: 'statmt.org' }
		]
	}
	else if (dtp=='20179')
	{
		dp = [                                         
			{ y: 9, label:  'www.cs.cmu.edu' },
			{ y: 1, label:  'http://www.ark.cs.cmu.edu/MT' },
			{ y: 1, label:  'http://rtw.ml.cmu.edu/rtw/' }
		]
	}
	else if (dtp=='201710')
	{
		dp = [                                         
			{ y: 7, label:  'dx.doi.org' }
		]
	}
	else if (dtp=='201711')
	{
		dp = [                                         
			{ y: 6, label:  'lucene.apache.org' },
			{ y: 2, label:  'opennlp.apache.org' },
			{ y: 1, label:  'http://cassandra.apache.org' },
			{ y: 1, label:  'http://hadoop.apache.org' }
		]
	}
	else if (dtp=='201712')
	{
		dp = [                                         
			{ y: 6, label:  'www.yelp.com' }
		]
	}
	else if (dtp=='201713')
	{
		dp = [                                         
			{ y: 5, label:  'alt.qcri.org' }
		]
	}
	else if (dtp=='201714')
	{
		dp = [                                         
			{ y: 5, label:  'www.nltk.org' }
		]
	}
	else if (dtp=='201715')
	{
		dp = [                                         
			{ y: 5, label:  'catalog.ldc.upenn.edu' },
			{ y: 1, label:  'http://www.cis.upenn.edu/%7Ederry/translations.html' }
		]
	}
	else if (dtp=='201716')
	{
		dp = [                                         
			{ y: 4, label:  'wordnet.princeton.edu' },
			{ y: 1, label:  'http://wordnetcode.princeton.edu/3.0' }
		]
	}
	else if (dtp=='201717')
	{
		dp = [                                         
			{ y: 4, label:  'dumps.wikimedia.org' }
		]
	}
	else if (dtp=='201718')
	{
		dp = [                                         
			{ y: 4, label:  'spacy.io' }
		]
	}
	else if (dtp=='201719')
	{
		dp = [                                         
			{ y: 4, label:  'scikit-learn.org' }
		]
	}
	else if (dtp=='201720')
	{
		dp = [                                         
			{ y: 4, label:  'ir.hit.edu.cn' }
		]
	}
	else if (dtp=='20180')
	{
		dp = [                                         
			{ y: 435, label:  'github.com' },
			{ y: 2, label: 'www.github.com' },
			{ y: 1, label:  'https://gist.github.com/ihsgnef/' }
		]
	}
	else if (dtp=='20181')
	{
		dp = [                                         
			{ y: 41, label:  'nlp.stanford.edu' },
			{ y: 1, label:  'snap.stanford.edu' },
			{ y: 1, label:  'dawn.cs.stanford.edu' },
			{ y: 1, label:  'web.stanford.edu' }
		]
	}
	else if (dtp=='20182')
	{
		dp = [                                         
			{ y: 26, label:  'www.statmt.org' },
			{ y: 3, label:  'data.statmt.org' },
			{ y: 2, label:  'matrix.statmt.org' },
			{ y: 1, label:  'http://statmt.org/moses' }
		]
	}
	else if (dtp=='20183')
	{
		dp = [                                         
			{ y: 22, label:  'en.wikipedia.org' },
			{ y: 1, label:  'https://wikipedia.org' }
		]
	}
	else if (dtp=='20184')
	{
		dp = [                                         
			{ y: 21, label:  'arxiv.org' }
		]
	}
	else if (dtp=='20185')
	{
		dp = [                                         
			{ y: 20, label:  'code.google.com' },
			{ y: 5, label:  'sites.google.com' },
			{ y: 3, label:  'developers.google.com' },
			{ y: 2, label: 'drive.google.com' },
			{ y: 2, label:  'cloud.google.com' },
			{ y: 2, label:  'research.google.com' },
			{ y: 2, label:  'translate.google.com' },
			{ y: 1, label:  'https://plus.google.com/' },
			{ y: 1, label:  'https://www.google.com/intl/es419/insidesearch/features/' },
			{ y: 1, label:  'https://docs.google.com/' },
			{ y: 1, label:  'https://support.google.com/youtube/answer/2991785?' },
			{ y: 1, label:  'https://groups.google.com/a/' },
			{ y: 1, label:  'https://colab.research.google.com/' }
		]
	}
	else if (dtp=='20186')
	{
		dp = [                                         
			{ y: 11, label:  'www.aclweb.org' }, 
			{ y: 16, label:  'aclweb.org' }
		]
	}
	else if (dtp=='20187')
	{
		dp = [                                         
			{ y: 9, label:  'spacy.io' }
		]
	}
	else if (dtp=='20188')
	{
		dp = [                                         
			{ y: 9, label:  'fasttext.cc' }
		]
	}
	else if (dtp=='20189')
	{
		dp = [                                         
			{ y: 9, label:  'catalog.ldc.upenn.edu' },
			{ y: 2, label:  'www.ldc.upenn.edu' },
			{ y: 1, label:  'http://projects.ldc.upenn.edu/ace/' },
			{ y: 1, label:  'http://languagelog.ldc.upenn.edu/myl/PennTreebank1995.pdf' }
		]
	}
	else if (dtp=='201810')
	{
		dp = [                                         
			{ y: 8, label:  'opus.nlpl.eu' }
		]
	}
	else if (dtp=='201811')
	{
		dp = [                                         
			{ y: 8, label:  'www.kaggle.com' }
		]
	}
	else if (dtp=='201812')
	{
		dp = [                                         
			{ y: 8, label:  'www.tensorflow.org'},
			{ y: 1, label:  'http://tensorflow.org/'}
		]
	}
	else if (dtp=='201813')
	{
		dp = [                                         
			{ y: 7, label:  'dumps.wikimedia.org' }
		]
	}
	else if (dtp=='201814')
	{
		dp = [                                         
			{ y: 7, label:  'openreview.net' }
		]
	}
	else if (dtp=='201815')
	{
		dp = [                                         
			{ y: 6, label:  'www.ukp.tu-darmstadt.de' },
			{ y: 1, label:  'https://www.aiphes.tu-darmstadt.de/' }
		]
	}
	else if (dtp=='201816')
	{
		dp = [                                         
			{ y: 5, label:  'radimrehurek.com' }
		]
	}
	else if (dtp=='201817')
	{
		dp = [                                         
			{ y: 5, label:  'www.yelp.com' }
		]
	}
	else if (dtp=='201818')
	{
		dp = [                                         
			{ y: 5, label:  'opennmt.net' }
		]
	}
	else if (dtp=='201819')
	{
		dp = [                                         
			{ y: 5, label:  'www.nltk.org' }
		]
	}
	else if (dtp=='201820')
	{
		dp = [                                         
			{ y: 5, label:  'www.ncbi.nlm.nih.gov' },
			{ y: 2, label:  'www.nlm.nih.gov' },
			{ y: 1, label:  'http://ncbi.nlm.nih.gov/pubmed' },
			{ y: 1, label:  'https://meshb-prev.nlm.nih.gov/' }
		]
	}
	else if (dtp=='20190')
	{
		dp = [                                         
			{ y: 9, label:  'bit.ly' }
		]
	}
	else if (dtp=='20191')
	{
		dp = [                                         
			{ y: 10, label:  'www.ncbi.nlm.nih.gov' },
			{ y: 3, label:  'www.nlm.nih.gov' },
			{ y: 1, label:  'http://umlsks.nlm.nih.gov/' },
			{ y: 1, label:  'https://pubchem.ncbi.nlm.nih.gov/' }
		]
	}
	else if (dtp=='20192')
	{
		dp = [                                         
			{ y: 673, label:  'github.com' }
		]
	}
	else if (dtp=='20193')
	{
		dp = [                                         
			{ y: 13, label:   'www.yelp.com' },
			{ y: 1, label:   'https://ww.yelp.com/dataset/challenge' }
		]
	}
	else if (dtp=='20194')
	{
		dp = [                                         
			{ y: 12, label:  'www.nltk.org' },
			{ y: 1, label:  'http://nltk.org' }
		]
	}
	else if (dtp=='20195')
	{
		dp = [                                         
			{ y: 2, label:  'demo.allennlp.org' },
			{ y: 8, label:   'allennlp.org' }
		]
	}
	else if (dtp=='20196')
	{
		dp = [                                         
			{ y: 24, label:  'nlp.stanford.edu' },
			{ y: 1, label:  'https://ai.stanford.edu/' },
			{ y: 3, label:  'web.stanford.edu' },
			{ y: 1, label:  'http://snap.stanford.edu/data/web-BeerAdvocate.html' },
			{ y: 1, label:  'https://cs.stanford.edu/people/dorarad/gqa/evaluate.html' }
		]
	}
	else if (dtp=='20197')
	{
		dp = [                                         
			{ y: 22, label:  'spacy.io' }
		]
	}
	else if (dtp=='20198')
	{
		dp = [     
			{ y: 2, label:  'taku910.github.io'},
			{ y: 1, label:  'https://sharc-data.github.io/'},
			{ y: 10, label:  'stanfordnlp.github.io'},
			{ y: 1, label:  'https://mbforbes.github.io/neural-naturalist/'},
			{ y: 1, label:  'https://unimorph.github.io/'},
			{ y: 3, label:  'ntunlpsg.github.io'},
			{ y: 3, label:  'yale-lily.github.io'},
			{ y: 1, label:  'https://tizirinagh.github.io/acl2019/'},
			{ y: 1, label:  'https://amritasaha1812.github.io/CSQA'},
			{ y: 2, label:  'multinlp.github.io'},
			{ y: 4, label:  'rajpurkar.github.io'},
			{ y: 3, label:  'hotpotqa.github.io'},
			{ y: 1, label:  'https://pubmedqa.github.io'},
			{ y: 1, label:  'http://ucam-smt.github.io/sgnmt/html/'},
			{ y: 1, label:  'https://tkipf.github.io/'},
			{ y: 1, label:  'https://noisy-text.github.io/2016/geo-shared-task.html'},
			{ y: 1, label:  'https://nyu-mll.github.io/CoLA'},
			{ y: 1, label:  'https://sheng-z.github.io/ReCoRD-explorer/'},
			{ y: 2, label:  'languagenet.github.io'},
			{ y: 1, label:  'https://thunlp.github.io/fewrel.html'},
			{ y: 1, label:  'https://dkpro.github.io/dkpro-statistics/dkpro-agreement-'},
			{ y: 1, label:  'https://massistant.github.io'},
			{ y: 1, label:  'https://microsoft.github.io/'}
		]
	}
	else if (dtp=='20199')
	{
		dp = [                                         
			{ y: 7, label: 'jmcauley.ucsd.edu' }
		]
	}
	else if (dtp=='201910')
	{
		dp = [                                         
			{ y: 13, label:  'pytorch.org' }
		]
	}
	else if (dtp=='201911')
	{
		dp = [                                         
			{ y: 6, label:  'www.tensorflow.org' },
			{ y: 1, label:  'https://projector.tensorflow.org' },
			{ y: 1, label:  'https://js.tensorflow.org' }
		]
	}
	else if (dtp=='201912')
	{
		dp = [                                         
			{ y: 15, label:  'code.google.com' },
			{ y: 5, label:  'drive.google.com'},
			{ y: 14, label:  'cloud.google.com' },
			{ y: 5, label:  'translate.google.com' },
			{ y: 2, label:  'sites.google.com' },
			{ y: 3, label:  'news.google.com' },
			{ y: 1, label:  'https://scholar.google.com' },
			{ y: 2, label:  'play.google.com' },
			{ y: 1, label:  'https://toolbox.google.com/' },
			{ y: 2, label:  'colab.research.google.com' },
			{ y: 2, label:  'developers.google.com' },
			{ y: 1, label:  'https://ai.google.com/research/' }
		]
	}
	else if (dtp=='201913')
	{
		dp = [                                         
			{ y: 8, label:  'cogcomp.org' }
		]
	}
	else if (dtp=='201914')
	{
		dp = [                                         
			{ y: 12, label:  'www.wikidata.org' },
			{ y: 2, label:  'wikidata.org' }
		]
	}
	else if (dtp=='201915')
	{
		dp = [                                         
			{ y: 1, label:  'https://www.ldc.upenn.edu/' },
			{ y: 8, label:  'catalog.ldc.upenn.edu' },
			{ y: 1, label:  'https://cogcomp.seas.upenn.edu/page/' }
		]
	}
	else if (dtp=='201916')
	{
		dp = [                                         
			{ y: 15, label:  'www.statmt.org' },
			{ y: 1, label: 'http://data.statmt.org/ContraWSD/' },
			{ y: 1, label:  'http://matrix.statmt.org/' },
			{ y: 2, label:  'statmt.org' }
		]
	}
	else if (dtp=='201917')
	{
		dp = [                                         
			{ y: 28, label:  'en.wikipedia.org' },
			{ y: 2, label:  'www.wikipedia.org' },
			{ y: 2, label:  'simple.wikipedia.org' },
			{ y: 1, label:  'https://zh.wikipedia.org/wiki/' },
			{ y: 1, label:  'https://dumps.wikipedia.org/enwiki/' }
		]
	}
	else if (dtp=='201918')
	{
		dp = [                                         
			{ y: 8, label:   'fasttext.cc' }
		]
	}
	else if (dtp=='201919')
	{
		dp = [                                         
			{ y: 11, label:  'dumps.wikimedia.org' },
			{ y: 1, label:  'https://meta.wikimedia.org/wiki/List_of_Wikipedias' }
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