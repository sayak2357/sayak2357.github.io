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
		
		
				{ y: 35, x: new Date(2013,0) },
				{ y: 43, x: new Date(2014,0) },
				{ y: 42, x: new Date(2015,0) },
				{ y: 39, x: new Date(2016,0) },
				{ y: 37, x: new Date(2017,0) },
				{ y: 48, x: new Date(2018,0) },
				{ y: 29, x: new Date(2019,0) }
				
				
		]
		},
		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Short Papers",
			color: "#e3f702",
			dataPoints: [
			
			
			
				{ y: 0, x: new Date(2013,0) },
				{ y: 0, x: new Date(2014,0) },
				{ y: 0, x: new Date(2015,0) },
				{ y: 0, x: new Date(2016,0) },
				{ y: 0, x: new Date(2017,0) },
				{ y: 0, x: new Date(2018,0) },
				{ y: 0, x: new Date(2019,0) }
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
		
				{ y: 0.0, x: new Date(2013,0) },
				{ y: 0.13385826771653545, x: new Date(2014,0) },
				{ y: 0.18382352941176472, x: new Date(2015,0) },
				{ y: 0.2231404958677686, x: new Date(2016,0) },
				{ y: 0.18064516129032257, x: new Date(2017,0) },
				{ y: 0.2727272727272727, x: new Date(2018,0) },
				{ y: 0.2982456140350877, x: new Date(2019,0) }
				
				
		]
		},
		
		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "New Authors",
			color: "#f70202",
			dataPoints: [
			
			
			
				{ y: 1.0, x: new Date(2013,0) },
				{ y: 0.8661417322834646, x: new Date(2014,0) },
				{ y: 0.8161764705882353, x: new Date(2015,0) },
				{ y: 0.7768595041322314, x: new Date(2016,0) },
				{ y: 0.8193548387096774, x: new Date(2017,0) },
				{ y: 0.7272727272727273, x: new Date(2018,0) },
				{ y: 0.7017543859649122, x: new Date(2019,0) }
	]
		},
]
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
		name: "Avg. number of Papers per Author",
		dataPoints: [
			
			
			
			{ y:0.30973451327433627, x: new Date(2013,0) },
			{ y:0.3115942028985507, x: new Date(2014,0) },
			{ y:0.2896551724137931, x: new Date(2015,0) },
			{ y:0.29770992366412213, x: new Date(2016,0) },
			{ y:0.22560975609756098, x: new Date(2017,0) },
			{ y:0.2553191489361702, x: new Date(2018,0) },
			{ y:0.24786324786324787, x: new Date(2019,0) }
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
		name: "Avg. number of Authors per Paper per Year",
		dataPoints: [
			
			
			
			{ y:3.2285714285714286, x: new Date(2013,0) },
			{ y:3.2093023255813953, x: new Date(2014,0) },
			{ y:3.4523809523809526, x: new Date(2015,0) },
			{ y:3.358974358974359, x: new Date(2016,0) },
			{ y:4.4324324324324325, x: new Date(2017,0) },
			{ y:3.9166666666666665, x: new Date(2018,0) },
			{ y:4.0344827586206895, x: new Date(2019,0) }
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
			
			
			
			{ y:41.411764705882355, x: new Date(2013,0) },
			{ y:41.372093023255815, x: new Date(2014,0) },
			{ y:56.476190476190474, x: new Date(2015,0) },
			{ y:48.82051282051282, x: new Date(2016,0) },
			{ y:46.054054054054056, x: new Date(2017,0) },
			{ y:52.520833333333336, x: new Date(2018,0) },
			{ y:190.31034482758622, x: new Date(2019,0) }
		]
		},


		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Short Papers",
			color: "#C00C0C",
			dataPoints: [
			
			
			
			
			
			{ y:0, x: new Date(2013,0) },
			{ y:0, x: new Date(2014,0) },
			{ y:0, x: new Date(2015,0) },
			{ y:0, x: new Date(2016,0) },
			{ y:0, x: new Date(2017,0) },
			{ y:0, x: new Date(2018,0) },
			{ y:0, x: new Date(2019,0) }
			
			
			
			
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
		name: "TACL URLs per Paper 2013-2019",
		dataPoints: [
			
			
			
			{ y:3.5428571428571427, x: new Date(2013,0) },
			{ y:4.162790697674419, x: new Date(2014,0) },
			{ y:3.6666666666666665, x: new Date(2015,0) },
			{ y:4.333333333333333, x: new Date(2016,0) },
			{ y:4.297297297297297, x: new Date(2017,0) },
			{ y:3.75, x: new Date(2018,0) },
			{ y:0.5862068965517241, x: new Date(2019,0) }
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
		name: "TACL : Avg. number of URLs in footnote per Paper per Year",
		dataPoints: [
			
			
			
			{ y:1.3142857142857143, x: new Date(2013,0) },
			{ y:1.6046511627906976, x: new Date(2014,0) },
			{ y:1.5238095238095237, x: new Date(2015,0) },
			{ y:1.9743589743589745, x: new Date(2016,0) },
			{ y:1.9189189189189189, x: new Date(2017,0) },
			{ y:1.8333333333333333, x: new Date(2018,0) },
			{ y:0.20689655172413793, x: new Date(2019,0) }
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
		name: "TACL : Avg. number of Tables per Paper per Year",
		dataPoints: [
			
			
			
			{ y:4.5, x: new Date(2013,0) },
			{ y:4.666666666666667, x: new Date(2014,0) },
			{ y:6.2926829268292686, x: new Date(2015,0) },
			{ y:5.421052631578948, x: new Date(2016,0) },
			{ y:6.75, x: new Date(2017,0) },
			{ y:6.608695652173913, x: new Date(2018,0) },
			{ y:5.0, x: new Date(2019,0) }
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
		name: "TACL : Avg. number of Figures per Paper per Year",
		dataPoints: [
			
			
			
			{ y:3.7941176470588234, x: new Date(2013,0) },
			{ y:4.880952380952381, x: new Date(2014,0) },
			{ y:3.3658536585365852, x: new Date(2015,0) },
			{ y:3.9210526315789473, x: new Date(2016,0) },
			{ y:4.25, x: new Date(2017,0) },
			{ y:4.913043478260869, x: new Date(2018,0) },
			{ y:4.0, x: new Date(2019,0) }
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
		name: "TACL : Most Popular primary URL domains & their Frequencies",
		legendText: "",
		dataPoints: [
			{ y:128,  label:'github.com'  },
			{ y:30,  label:'www.aclweb.org'  },
			{ y:19,  label:'code.google.com'  },
			{ y:14,  label:'nlp.stanford.edu'  },
			{ y:12,  label:'dx.doi.org'  },
			{ y:12,  label:'www.statmt.org'  },
			{ y:11,  label:'www.ark.cs.cmu.edu'  },
			{ y:9,  label:'en.wikipedia.org'  },
			{ y:7,  label:'www.ukp.tu-darmstadt.de'  },
			{ y:7,  label:'www.aclweb'  },
			{ y:7,  label:'aclweb.org'  },
			{ y:6,  label:'hal3.name'  },
			{ y:6,  label:'sites.google.com'  },
			{ y:6,  label:'arxiv.org'  },
			{ y:5,  label:'dumps.wikimedia.org'  },
			{ y:5,  label:'cogcomp.cs.illinois.edu'  },
			{ y:5,  label:'bitbucket.org'  },
			{ y:5,  label:'scikit-learn.org'  },
			{ y:4,  label:'www.seas.upenn.edu'  },
			{ y:4,  label:'mallet.cs.umass.edu'  }
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
		name: "TACL : Top Unique GitHub Pages",
		legendText: "",
		dataPoints: [      
			{ y: 3, label: 'moses-smt/' },
			{ y: 2, label: 'clab/cnn/tree/' },
			{ y: 2, label: 'clab/' },
			{ y: 2, label: 'gdtreebank/' },
			{ y: 2, label: 'SUTDNLP/ZPar' },
			{ y: 2, label: 'percyliang/' },
			{ y: 2, label: 'ukplab/' },
			{ y: 2, label: 'clulab/timenorm' },
			{ y: 1, label: 'jpate/predictabilityParsing' },
			{ y: 1, label: 'njsmith/pysrilm' },
			{ y: 1, label: 'saffsd/linguini.py' },
			{ y: 1, label: 'saffsd/polyglot' },
			{ y: 1, label: 'stanfordnlp/CoreNLP' },
			{ y: 1, label: 'syllog1sm/redshift' },
			{ y: 1, label: 'jhclark/ducttape/' },
			{ y: 1, label: 'dasmith/stanford-corenlp-python' },
			{ y: 1, label: 'ma-sultan/' },
			{ y: 1, label: 'aritter/Twitter' },
			{ y: 1, label: 'qxred/higher-order-crf' }
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
		name: "TACL : Top University Pages",
		legendText: "",
		dataPoints: [      
			{ y: 9,  label: 'Johns Hopkins Hospital' },
			{ y: 7, label: 'Stanford University' },                         
			{ y: 5,label: 'Google' },
			{ y: 5,  label: 'MPII' },
			{ y: 3,  label: 'Van Pelt Library' },
			{ y: 3,  label: 'James Dickson Carr Library' },
			{ y: 3, label: 'Institute for Logic' },
			{ y: 2,  label: 'University of Washington' },
			{ y: 2, label: 'University of Wisconsin-Madison' },
			{ y: 2,  label: 'The Grand Garage' },
			{ y: 2,  label: 'Santa Fe Institute'},
			{ y: 2,  label: 'Penn Museum' },
			{ y: 2,  label: 'MIT' },
			{ y: 2, label: 'Faculty of Law' },
			{ y: 2,  label: 'Bailey Hall' },
			{ y: 2,  label: 'NJU' },
			{ y: 2, label: 'Idiap Research Institute' },
			{ y: 2,  label: 'Dero' },
			{ y: 1,  label: 'Microsoft Research Asia' },
			{ y: 1,  label: 'UNC-Chapel Hill' }
			
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
		
		
		
		
		if(dt==2013)
		{
			dp= [  
			{ y:2, label: 'ut.ee' },
			{ y:2, label: 'github.com' },
			{ y:2, label: 'nist.gov' },
			{ y:1, label: 'harvard.edu' },
			{ y:2, label: 'uic.edu' },
			{ y:3, label: 'upenn.edu' },
			{ y:3, label: 'stanford.edu' },
			{ y:4, label: 'tu-darmstadt.de' },
			{ y:1, label: 'isi.edu' },
			{ y:1, label: 'umass.edu' },
			{ y:1, label: 'unm.edu' },
			{ y:1, label: 'lemurproject.org' },
			{ y:1, label: 'cornell.edu' },
			{ y:2, label: 'aalto.fi' },
			{ y:3, label: 'cmu.edu' },
			{ y:2, label: 'demelo.org' },
			{ y:3, label: 'aclweb.org' },
			{ y:4, label: 'doi.org' },
			{ y:5, label: 'hal3.name' },
			{ y:1, label: 'princeton.edu' },
			{ y:1, label: 'microsoft.com' },
			{ y:1, label: 'kaggle.com' },
			{ y:2, label: 'google.com' }
			
		]
		}
		else if(dt==2014)
		{
			dp= [
			{ y:8, label: 'cmu.edu' },
			{ y:4, label: 'mq.edu.au' },
			{ y:4, label: 'wikimedia.org' },
			{ y:4, label: 'stanford.edu' },
			{ y:1, label: 'umass.edu' },
			{ y:1, label: 'doi.org' },
			{ y:2, label: 'healthnlp.org' },
			{ y:4, label: 'wikipedia.org' },
			{ y:14, label: 'github.com' },
			{ y:1, label: 'wiktionary.org' },
			{ y:2, label: 'upenn.edu' },
			{ y:5, label: 'google.com' },
			{ y:2, label: 'microsoft.com' },
			{ y:2, label: 'babelfy.org' },
			{ y:6, label: 'illinois.edu' },
			{ y:7, label: 'goo.gl' },
			{ y:2, label: 'usna.edu' },
			{ y:3, label: 'aclweb.org' },
			{ y:2, label: 'knowledgeforge.org' },
			{ y:3, label: 'umd.edu' },
			{ y:2, label: 'berkeley.edu' },
			{ y:2, label: 'tu-darmstadt.de' },
			{ y:3, label: 'collocations.de' }
			
		]
		}
		else if(dt==2015)
		{
			dp= [                        
			{ y:3, label: 'jhu.edu' },
			{ y:8, label: 'google.com' },
			{ y:1, label: 'york.ac.uk' },
			{ y:2, label: 'unibo.it' },
			{ y:5, label: 'doi.org' },
			{ y:2, label: 'xkcd.com' },
			{ y:1, label: 'nist.gov' },
			{ y:1, label: 'dbpedia.org' },
			{ y:10, label: 'github.com' },
			{ y:2, label: 'upenn.edu' },
			{ y:2, label: 'arxiv.org' },
			{ y:2, label: 'yahoo.com' },
			{ y:5, label: 'cmu.edu' },
			{ y:3, label: 'lemurproject.org' },
			{ y:2, label: 'newsela.com' },
			{ y:1, label: 'wikipedia.org' },
			{ y:1, label: 'nltk.org' },
			{ y:1, label: 'stanford.edu' },
			{ y:3, label: 'illinois.edu' },
			{ y:2, label: 'unitn.it' },
			{ y:2, label: 'acm.org' },
			{ y:5, label: 'aclweb.org' }
			
		]
		}
		else if(dt==2016)
		{
			dp= [                                         
			{ y:2, label: 'mit.edu' },
			{ y:3, label: 'google.com' },
			{ y:1, label: 'wikipedia.org' },
			{ y:1, label: 'yahoo.com' },
			{ y:7, label: 'upenn.edu' },
			{ y:2, label: 'scikit-learn.org' },
			{ y:4, label: 'stanford.edu' },
			{ y:2, label: 'umass.edu' },
			{ y:1, label: 'unitn.it' },
			{ y:26, label: 'github.com' },
			{ y:3, label: 'bitbucket.org' },
			{ y:3, label: 'universaldependencies.org' },
			{ y:3, label: 'statmt.org' },
			{ y:3, label: 'arxiv.org' },
			{ y:1, label: 'bit.ly' },
			{ y:1, label: 'deeplearningbook.org' },
			{ y:3, label: 'nih.gov' },
			{ y:2, label: 'who.int' },
			{ y:1, label: 'aclweb.org' },
			{ y:1, label: 'joachims.org' },
			{ y:1, label: 'fas.org' }
			
		]
		}
		else if(dt==2017)
		{
			dp= [ 
			{ y:2, label: 'nyu.edu' },
			{ y:7, label: 'google.com' },
			{ y:34, label: 'github.com' },
			{ y:2, label: 'nih.gov' },
			{ y:4, label: 'stanford.edu' },
			{ y:2, label: 'wikimedia.org' },
			{ y:8, label: 'statmt.org' },
			{ y:1, label: 'umd.edu' },
			{ y:1, label: 'cmu.edu' },
			{ y:3, label: 'allenai.org' },
			{ y:7, label: 'google.com' },
			{ y:1, label: 'handle.net' },
			{ y:1, label: 'tensorflow.org' },
			{ y:1, label: 'gurobi.com' },
			{ y:1, label: 'isi.edu' },
			{ y:1, label: 'wikipedia.org' },
			{ y:1, label: 'nist.gov' },
			{ y:9, label: 'aclweb.org' },
			{ y:1, label: 'jhu.edu' },
			{ y:1, label: 'hal3.name' },
			{ y:1, label: 'kyoto-u.ac.jp' },
			{ y:1, label: 'yelp.com' },
			{ y:1, label: 'wustl.edu' },
			{ y:1, label: 'doi.org' }
			
		]
		}
		else if(dt==2018)
		{
			dp= [                                         
			{ y:2, label: 'nyu.edu' },
			{ y:1, label: 'cornell.edu' },
			{ y:3, label: 'reddit.com' },
			{ y:2, label: 'scikit-learn.org' },
			{ y:2, label: 'stanford.edu' },
			{ y:2, label: 'allenai.org' },
			{ y:4, label: 'google.com' },
			{ y:1, label: 'openai.com' },
			{ y:1, label: 'twitter.com' },
			{ y:5, label: 'aclweb.org' },
			{ y:2, label: 'medium.com' },
			{ y:12, label: 'goo.gl' },
			{ y:3, label: 'scipy.org' },
			{ y:2, label: 'doi.org' },
			{ y:1, label: 'qz.com' },
			{ y:3, label: 'wikipedia.org' },
			{ y:3, label: 'github.io' },
			{ y:2, label: 'consort-statement.org' },
			{ y:36, label: 'github.com' },
			{ y:2, label: 'arxiv.org' }
			
		]
		}
		else if(dt==2019)
		{
			dp= [
			{ y:6, label: 'github.com' },
			{ y:2, label: 'statmt.org' },
			{ y:1, label: 'isi.edu' },
			{ y:1, label: 'universaldependencies.org' },
			{ y:1, label: 'golang.org' },
			{ y:1, label: 'openu.org.il' },
			{ y:1, label: 'github.io' },
			{ y:1, label: 'deepleaningbook.org' }
			
			
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
	
	
	if (dtp=='20130')
	{
		dp = [                                         
			
			{ y: 2, label:  'www.cl.ut.ee' }
		]
	}
	else if (dtp=='20131')
	{
		dp = [                                         
			
			{ y: 2, label:  'github.com' }
		]
	}
	else if (dtp=='20132')
	{
		dp = [                                         
			{ y: 1, label:  'http://duc.nist.gov/' },
			{ y: 1, label:  'http://www.nist.gov/tac/' }
		]
	}
	else if (dtp=='20133')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.wjh.harvard.edu/' }
		]
	}
	else if (dtp=='20134')
	{
		dp = [                                         
			
			{ y: 2, label:   'www.cs.uic.edu' }
		]
	}
	else if (dtp=='20135')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.seas.upenn.edu/' },
			{ y: 2, label:  'www.cis.upenn.edu' }
		]
	}
	else if (dtp=='20136')
	{
		dp = [                                         
			{ y: 3, label:  'nlp.stanford.edu' }
		]
	}
	else if (dtp=='20137')
	{
		dp = [                                         
			{ y: 4, label:  'www.ukp.tu-darmstadt.de' }
		]
	}
	else if (dtp=='20138')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.isi.edu/natural-language/download/hansard/' }
		]
	}
	else if (dtp=='20139')
	{
		dp = [                                         
			{ y: 1, label:  'http://mallet.cs.umass.edu' }
		]
	}
	else if (dtp=='201310')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://cs.unm.edu/mccune/mace4/' }
		]
	}
	else if (dtp=='201311')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.lemurproject.org/clueweb09/' }
		]
	}
	else if (dtp=='201312')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.cs.cornell.edu/People/tj/' }
		]
	}
	else if (dtp=='201313')
	{
		dp = [                                         
			{ y: 2, label:  'research.ics.aalto.fi' }
		]
	}
	else if (dtp=='201314')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.ark.cs.cmu.edu/TurboParser/' },
			{ y: 1, label:  'http://rtw.ml.cmu.edu/' },
			{ y: 1, label:  'http://www.speech.cs.cmu.edu/cgi-' }
		]
	}
	else if (dtp=='201315')
	{
		dp = [                                         
			
			{ y: 2, label:  'demelo.org' }
		]
	}
	else if (dtp=='201316')
	{
		dp = [                                         
			{ y: 3, label:  'www.aclweb.org' }
		]
	}
	else if (dtp=='201317')
	{
		dp = [                                         
			{ y: 4, label:  'dx.doi.org' }
		]
	}
	else if (dtp=='201318')
	{
		dp = [                                         
			{ y: 4, label:  'hal3.name' },
			{ y: 1, label:  'http://pub.hal3.name' }
		]
	}
	else if (dtp=='201319')
	{
		dp = [                                         
			{ y: 1, label: 'http://wordnet.princeton.edu/' }
		]
	}
	else if (dtp=='201320')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://research.microsoft.com/~sumitb/grading' }
		]
	}
	else if (dtp=='201321')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.kaggle.com/c/asap-sas'}
		]
	}
	else if (dtp=='201322')
	{
		dp = [                                         
			
			{ y: 1, label:  'https://sites.google.com/site/spmrl2013/home/sharedtask'},
			{ y: 1, label:  'https://code.google.com/p/mate-tools/'}
		]
	}
	else if (dtp=='20140')
	{
		dp = [                                         
			
			{ y: 7, label:  'www.ark.cs.cmu.edu'},
			{ y: 1, label:  'http://www.speech.cs.cmu.edu/cgi-bin/cmudict'}
		]
	}
	else if (dtp=='20141')
	{
		dp = [                                         
			{ y: 2, label:  'comp.mq.edu.au' },
			{ y: 2, label: 'web.science.mq.edu.au' }
		]
	}
	else if (dtp=='20142')
	{
		dp = [                                         
			{ y: 3, label:  'dumps.wikimedia.org' },
			{ y: 1, label:  'http://meta.wikimedia.org/wiki/List_of_' }
		]
	}
	else if (dtp=='20143')
	{
		dp = [                                         
			{ y: 2, label:  'www-nlp.stanford.edu' },
			{ y: 1, label:  'http://nlp.stanford.edu/downloads/corenlp.shtml' },
			{ y: 1, label:  'http://infolab.stanford.edu/west1/TACL2014/' }
		]
	}
	else if (dtp=='20144')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.cs.umass.edu/' }
		]
	}
	else if (dtp=='20145')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://dx.doi.org/10.2139/ssrn' }
		]
	}
	else if (dtp=='20146')
	{
		dp = [                                         
			
			{ y: 2, label:  'thyme.healthnlp.org' }
		]
	}
	else if (dtp=='20147')
	{
		dp = [                                         
			
			{ y: 3, label:  'en.wikipedia.org' },
			{ y: 1, label:  'http://www.wikipedia.org' }
		]
	}
	else if (dtp=='20148')
	{
		dp = [                                         
			{ y: 14, label:  'github.com' }
		]
	}
	else if (dtp=='20149')
	{
		dp = [                                         
			{ y: 1, label:  'http://en.wiktionary.org;' }
		]
	}
	else if (dtp=='201410')
	{
		dp = [                                         
			{ y: 2, label:   'www.ldc.upenn.edu' }
		]
	}
	else if (dtp=='201411')
	{
		dp = [                                         
			{ y: 2, label:  'sites.google.com' },
			{ y: 3, label:  'code.google.com' }
		]
	}
	else if (dtp=='201412')
	{
		dp = [                                         
			
			{ y: 2, label:  'research.microsoft.com' }
		]
	}
	else if (dtp=='201413')
	{
		dp = [                                         
			
			{ y: 2, label:  'babelfy.org' }
		]
	}
	else if (dtp=='201414')
	{
		dp = [                                         
			{ y: 4, label:  'cogcomp.cs.illinois.edu' },
			{ y: 2, label:  'nlp.cs.illinois.edu' }
		]
	}
	else if (dtp=='201415')
	{
		dp = [                                         
			{ y: 7, label:  'goo.gl' }
		]
	}
	else if (dtp=='201416')
	{
		dp = [                                         
			{ y: 2, label:  'www.usna.edu' }
		]
	}
	else if (dtp=='201417')
	{
		dp = [                                         
			
			{ y: 3, label:  'aclweb.org' }
		]
	}
	else if (dtp=='201418')
	{
		dp = [                                         
			{ y: 2, label:   'www.knowledgeforge.org' }
		]
	}
	else if (dtp=='201419')
	{
		dp = [                                         
			{ y: 1, label:  'http://psl.umiacs.umd.edu' },
			{ y: 2, label:  'www.umiacs.umd.edu' }
		]
	}
	else if (dtp=='201420')
	{
		dp = [                                         
			{ y: 2, label:  'nlp.cs.berkeley.edu' }
		]
	}
	else if (dtp=='201421')
	{
		dp = [                                         
			
			{ y: 2, label:  'www.ukp.tu-darmstadt.de' }
		]
	}
	else if (dtp=='201422')
	{
		dp = [                                         
			
			{ y: 2, label:  'wordspace.collocations.de' },
			{ y: 1, label:  'http://www.collocations.de/software.html' }
		]
	}
	else if (dtp=='20150')
	{
		dp = [                                         
			{ y: 2, label:   'cs.jhu.edu' },
			{ y: 1, label:   'http://hubal.cs.jhu.edu/' }
			]
	}
	else if (dtp=='20151')
	{
		dp = [                                         
			{ y: 5, label:  'code.google.com' },
			{ y: 1, label:  'https://sites.google.com/site/mahajalthobaiti/resources' },
			{ y: 2, label:  'developers.google.com' }
		]
	}
	else if (dtp=='20152')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.cs.york.ac.uk/' }
		]
	}
	else if (dtp=='20153')
	{
		dp = [                                         
			{ y: 2, label:  'wacky.sslmit.unibo.it' }
		]
	}
	else if (dtp=='20154')
	{
		dp = [                                         
			{ y: 5, label:  'dx.doi.org' }
			]
	}
	else if (dtp=='20155')
	{
		dp = [                                         
			{ y: 2, label:  'blog.xkcd.com' }
			]
	}
	else if (dtp=='20156')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.nist.gov/tac/2014/KBP/' }
			]
	}
	else if (dtp=='20157')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://wiki.dbpedia.org/Downloads' }
		]
	}
	else if (dtp=='20158')
	{
		dp = [                                         
			{ y: 10, label:  'github.com' }
		]
	}else if (dtp=='20159')
	{
		dp = [                                         
			{ y: 1, label:  'https://catalog.ldc.upenn.edu/' },
			{ y: 1, label:  'http://www.cis.upenn.edu/' }
		]
	}
	else if (dtp=='201510')
	{
		dp = [                                         
			
			{ y: 2, label: 'arxiv.org' }
		]
	}
	else if (dtp=='201511')
	{
		dp = [                                         
			
			{ y: 2, label:  'answers.yahoo.com' }
		]
	}
	else if (dtp=='201512')
	{
		dp = [                                         
			{ y: 2, label:  'rtw.ml.cmu.edu' },
			{ y: 3, label:  'www.ark.cs.cmu.edu' }
		]
	}
	else if (dtp=='201513')
	{
		dp = [                                         
			{ y: 2, label:  'lemurproject.org' },
			{ y: 1, label:  'http://www.lemurproject.org/clueweb09' }
		]
	}
	else if (dtp=='201514')
	{
		dp = [                                         
			{ y: 2, label:  'newsela.com' }
		]
	}
	else if (dtp=='201515')
	{
		dp = [                                         
			{ y: 1, label:  'http://en.wikipedia.org/wiki/Lexile' }
		]
	}
	else if (dtp=='201516')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.nltk.org/' }
		]
	}else if (dtp=='201517')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www-nlp.stanford.edu/projects/glove/' }
		]
	}
	else if (dtp=='201518')
	{
		dp = [                                         
			{ y: 3, label:  'web.engr.illinois.edu' }
		]
	}
	else if (dtp=='201519')
	{
		dp = [                                         
			{ y: 2, label:  'clic.cimec.unitn.it' }
		]
	}
	else if (dtp=='201520')
	{
		dp = [                                         
			
			{ y: 2, label: 'dl.acm.org' }
		]
	}
	else if (dtp=='201521')
	{
		dp = [                                         
			
			{ y: 4, label:'www.aclweb.org' },
			{ y: 1, label:'http://aclweb.org/' }
		]
	}
	else if (dtp=='20160')
	{
		dp = [                                         
			
			{ y: 2, label:  'web.mit.edu' }
		]
	}
	else if (dtp=='20161')
	{
		dp = [                                         
			{ y: 1, label:  'http://developers.google.com/freebase/' },
			{ y: 1, label:  'https://translate.google.com/' },
			{ y: 4, label:  'code.google.com' },
			{ y: 1, label:  'https://drive.google.com/' }
		]
	}
	else if (dtp=='20162')
	{
		dp = [                                         
			
			{ y: 1, label: 'https://simple.wikipedia.org/wiki/Main_' }
		]
	}
	else if (dtp=='20163')
	{
		dp = [                                         
			
			{ y: 1, label:  'https://answers.yahoo.com/' }
		]
	}
	else if (dtp=='20164')
	{
		dp = [                                         
			{ y: 3, label:  'www.seas.upenn.edu' },
			{ y: 1, label:  'http://www.cis.upenn.edu/' },
			{ y: 1, label:  'https://catalog.ldc.upenn.edu/' },
			{ y: 1, label:  'http://projects.ldc.upenn.edu/ace/' },
			{ y: 1, label:  'http://itre.cis.upenn.edu/' }
		]
	}
	else if (dtp=='20165')
	{
		dp = [                                         
			
			{ y: 2, label:  'scikit-learn.org'}
		]
	}
	else if (dtp=='20166')
	{
		dp = [                                         
			{ y: 4, label:   'nlp.stanford.edu' }
		]
	}
	else if (dtp=='20167')
	{
		dp = [                                         
			
			{ y: 2, label:  'mallet.cs.umass.edu' }
		]
	}
	else if (dtp=='20168')
	{
		dp = [                                         
			{ y: 1, label:  'http://clic.cimec.unitn.it/composes/' }
		]
	}
	else if (dtp=='20169')
	{
		dp = [                                         
			
			{ y: 26, label:  'github.com' }
		]
	}
	else if (dtp=='201610')
	{
		dp = [                                         
			{ y: 3, label: 'bitbucket.org' }
		]
	}
	else if (dtp=='201611')
	{
		dp = [                                         
			{ y: 3, label:  'universaldependencies.org' }
		]
	}
	else if (dtp=='201612')
	{
		dp = [                                         
			{ y: 3, label:  'www.statmt.org' }
		]
	}
	else if (dtp=='201613')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.arxiv.org' },
			{ y: 2, label:  'arxiv.org'}
		]
	}
	else if (dtp=='201614')
	{
		dp = [                                         
			{ y: 1, label:  'http://bit.ly/1LUP5kJ' }
		]
	}
	else if (dtp=='201615')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.deeplearningbook.org' }
		]
	}
	else if (dtp=='201616')
	{
		dp = [                                         
			{ y: 1, label:  'http://lexsrv3.nlm.nih.gov/LexSysGroup/' },
			{ y: 1, label:  'http://www.ncbi.nlm.nih.gov/' },
			{ y: 1, label:  'http://www.nimh.nih.gov/health/' }
		]
	}
	else if (dtp=='201617')
	{
		dp = [                                         
			{ y: 2, label:  'www.who.int' }
		]
	}
	else if (dtp=='201618')
	{
		dp = [                                         
			{ y: 1, label: 'https://www.aclweb.org/anthology/P/' }
		]
	}
	else if (dtp=='201619')
	{
		dp = [                                         
			{ y: 1, label:  'http://svmlight.joachims.org/' }
		]
	}
	else if (dtp=='201620')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.fas.org/irp/threat/terror.htm' }
		]
	}
	else if (dtp=='20170')
	{
		dp = [                                         
			
			{ y: 2, label:  'nlp.cs.nyu.edu' }
		]
	}
	else if (dtp=='20171')
	{
		dp = [                                         
			
			{ y: 5, label:  'code.google.com' },
			{ y: 2, label:  'sites.google.com' }
		]
	}
	else if (dtp=='20172')
	{
		dp = [                                         
			{ y: 34, label:  'github.com' }
		]
	}
	else if (dtp=='20173')
	{
		dp = [                                         
			{ y: 2, label:  'www.ncbi.nlm.nih.gov'}
		]
	}
	else if (dtp=='20174')
	{
		dp = [                                         
			
			{ y: 4, label:  'nlp.stanford.edu' },
			{ y: 1, label:  'https://cocolab.stanford.edu/datasets/' }
		]
	}
	else if (dtp=='20175')
	{
		dp = [                                         
			
			{ y: 2, label:  'dumps.wikimedia.org' }
		]
	}
	else if (dtp=='20176')
	{
		dp = [                                         
			{ y: 5, label:   'www.statmt.org' },
			{ y: 3, label:   'statmt.org' }
		]
	}
	else if (dtp=='20177')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.cs.umd.edu/' }
		]
	}
	else if (dtp=='20178')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://www.cs.cmu.edu/' }
		]
	}
	else if (dtp=='20179')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://data.allenai.org/tuple-kb' },
			{ y: 2, label:   'allenai.org' }
		]
	}
	else if (dtp=='201710')
	{
		dp = [                                         
			{ y: 5, label:  'code.google.com' },
			{ y: 2, label:  'sites.google.com' }
		]
	}
	else if (dtp=='201711')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://hdl.handle.net/11234/1-1548' }
		]
	}
	else if (dtp=='201712')
	{
		dp = [                                         
			{ y: 1, label:  'https://www.tensorflow.org/get_started/' }
		]
	}
	else if (dtp=='201713')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.gurobi.com/' }
		]
	}
	else if (dtp=='201714')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.isi.edu/hobbs/damage.text' }
		]
	}
	else if (dtp=='201715')
	{
		dp = [                                         
			
			{ y: 1, label:  'https://en.wikipedia.org/' }
		]
	}
	else if (dtp=='201716')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.nist.gov/tac/' }
		]
	}
	else if (dtp=='201717')
	{
		dp = [                                         
			{ y: 9, label:  'www.aclweb.org' }
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
			{ y: 1, label:  'http://hal3.name/damt/' }
		]
	}
	else if (dtp=='201720')
	{
		dp = [                                         
			{ y: 1, label:  'http://orchid.kuee.kyoto-u.ac.jp/' }
		]
	}
	else if (dtp=='201721')
	{
		dp = [                                         
			{ y: 1, label:  'https://www.yelp.com/' }
		]
	}
	else if (dtp=='201722')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.cse.wustl.edu/' }
		]
	}
	else if (dtp=='201723')
	{
		dp = [                                         
			{ y: 1, label:  'http://dx.doi.org/10.7910/DVN/TGOPRU' }
		]
	}
	else if (dtp=='20180')
	{
		dp = [                                         
			
			{ y: 2, label:  'cs.nyu.edu' }
		]
	}
	else if (dtp=='20181')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.cs.cornell.edu/' }
		]
	}
	else if (dtp=='20182')
	{
		dp = [                                         
			
			{ y: 2, label:  'www.reddit.com' },
			{ y: 1, label:  'https://reddit.com' }
		]
	}
	else if (dtp=='20183')
	{
		dp = [                                         
			
			{ y: 2, label:  'nlp.stanford.edu' }
		]
	}
	else if (dtp=='20184')
	{
		dp = [                                         
			{ y: 2, label:  'allenai.org' }
		]
	}
	else if (dtp=='20185')
	{
		dp = [                                         
			
			{ y: 2, label:  'translate.google.com' },
			{ y: 1, label:  'https://code.google.com/archive/p/' },
			{ y: 1, label:  'https://cloud.google.com/natural-language/' }
		]
	}
	else if (dtp=='20186')
	{
		dp = [                                         
			 
			{ y: 1, label:  'https://blog.openai.com/openai-' }
		]
	}
	else if (dtp=='20187')
	{
		dp = [                                         
			{ y: 1, label:  'https://twitter.com/soumithchintala/' }
		]
	}
	else if (dtp=='20188')
	{
		dp = [                                         
			{ y: 3, label:  'aclweb.org' },
			{ y: 2, label:  'www.aclweb.org' }
		]
	}
	else if (dtp=='20189')
	{
		dp = [                                         
			
			{ y: 2, label:  'medium.com' }
		]
	}
	else if (dtp=='201810')
	{
		dp = [                                         
			{ y: 12, label:  'goo.gl' }
		]
	}
	else if (dtp=='201811')
	{
		dp = [                                         
			{ y: 2, label:  'docs.scipy.org' },
			{ y: 1, label:  'https://www.scipy.org/' }
		]
	}
	else if (dtp=='201812')
	{
		dp = [                                         
			{ y: 1, label:  'https://doi.org/'},
			{ y: 1, label:  'http://dx.doi.org/10'}
		]
	}
	else if (dtp=='201813')
	{
		dp = [                                         
			{ y: 1, label:  'https://qz.com/701521/parents-are-worried-the-amazon-' }
		]
	}
	else if (dtp=='201814')
	{
		dp = [                                         
			{ y: 3, label:  'en.wikipedia.org' }
		]
	}
	else if (dtp=='201815')
	{
		dp = [                                         
			{ y: 1, label:  'https://whichlight.github.io/' },
			{ y: 2, label:  'stanfordnlp.github.io' }
		]
	}
	else if (dtp=='201816')
	{
		dp = [                                         
			{ y: 2, label:  'www.consort-statement.org' }
		]
	}
	else if (dtp=='201817')
	{
		dp = [                                         
			{ y: 36, label:  'github.com' }
		]
	}
	else if (dtp=='201818')
	{
		dp = [                                         
			{ y: 2, label:  'arxiv.org' }
		]
	}
	else if (dtp=='20190')
	{
		dp = [                                         
			
			{ y: 6, label:  'github.com' }
		]
	}
	else if (dtp=='20191')
	{
		dp = [                                         
		
			{ y: 2, label:  'www.statmt.org' }
		]
	}
	else if (dtp=='20192')
	{
		dp = [                                         
			
			{ y: 1, label:  'https://amr.isi.edu/download.html' }
		]
	}
	else if (dtp=='20193')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://universaldependencies.org/' }
		]
	}
	else if (dtp=='20194')
	{
		dp = [                                         
			
			{ y: 1, label:  'https://golang.org' }
		]
	}
	else if (dtp=='20195')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://onlp.openu.org.il/' }
		]
	}
	else if (dtp=='20196')
	{
		dp = [                                         
			
			{ y: 1, label:  'https://boknilev.github.io/' }
		]
	}
	else if (dtp=='20197')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.deepleaningbook.org' }
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