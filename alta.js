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
		
		
				{ y: 16, x: new Date(2003,0) },
				{ y: 17, x: new Date(2004,0) },
				{ y: 21, x: new Date(2005,0) },
				{ y: 18, x: new Date(2006,0) },
				{ y: 16, x: new Date(2007,0) },
				{ y: 19, x: new Date(2008,0) },
				{ y: 9, x: new Date(2009,0) },
				{ y: 10, x: new Date(2010,0) },
				{ y: 17, x: new Date(2011,0) },
				{ y: 11, x: new Date(2012,0) },
				{ y: 10, x: new Date(2013,0) },
				{ y: 11, x: new Date(2014,0) },
				{ y: 11, x: new Date(2015,0) },
				{ y: 12, x: new Date(2016,0) },
				{ y: 10, x: new Date(2017,0) },
				{ y: 4, x: new Date(2018,0) }
				
				
		]
		},
		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Short Papers",
			color: "#e3f702",
			dataPoints: [
			
			
			
				{ y: 2, x: new Date(2003,0) },
			{ y: 5, x: new Date(2004,0) },
			{ y: 12, x: new Date(2005,0) },
			{ y: 9, x: new Date(2006,0) },
			{ y: 6, x: new Date(2007,0) },
			{ y: 2, x: new Date(2008,0) },
			{ y: 9, x: new Date(2009,0) },
			{ y: 5, x: new Date(2010,0) },
			{ y: 3, x: new Date(2011,0) },
			{ y: 9, x: new Date(2012,0) },
			{ y: 11, x: new Date(2013,0) },
			{ y: 14, x: new Date(2014,0) },
			{ y: 9, x: new Date(2015,0) },
			{ y: 11, x: new Date(2016,0) },
			{ y: 6, x: new Date(2017,0) },
			{ y: 8, x: new Date(2018,0) }
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
		
		
				{ y: 0.0, x: new Date(2003,0) },
				{ y: 0.23529411764705882, x: new Date(2004,0) },
				{ y: 0.2, x: new Date(2005,0) },
				{ y: 0.4, x: new Date(2006,0) },
				{ y: 0.5, x: new Date(2007,0) },
				{ y: 0.5, x: new Date(2008,0) },
				{ y: 0.43243243243243246, x: new Date(2009,0) },
				{ y: 0.6521739130434783, x: new Date(2010,0) },
				{ y: 0.39473684210526316, x: new Date(2011,0) },
				{ y: 0.35555555555555557, x: new Date(2012,0) },
				{ y: 0.46511627906976744, x: new Date(2013,0) },
				{ y: 0.359375, x: new Date(2014,0) },
				{ y: 0.37777777777777777, x: new Date(2015,0) },
				{ y: 0.42857142857142855, x: new Date(2016,0) },
				{ y: 0.5294117647058824, x: new Date(2017,0) },
				{ y: 0.5172413793103449, x: new Date(2018,0) }
				
				
		]
		},
		
		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "New Authors",
			color: "#f70202",
			dataPoints: [
			
			
			
				{ y: 1.0, x: new Date(2003,0) },
				{ y: 0.7647058823529411, x: new Date(2004,0) },
				{ y: 0.8, x: new Date(2005,0) },
				{ y: 0.6, x: new Date(2006,0) },
				{ y: 0.5, x: new Date(2007,0) },
				{ y: 0.5, x: new Date(2008,0) },
				{ y: 0.5675675675675675, x: new Date(2009,0) },
				{ y: 0.34782608695652173, x: new Date(2010,0) },
				{ y: 0.6052631578947368, x: new Date(2011,0) },
				{ y: 0.6444444444444445, x: new Date(2012,0) },
				{ y: 0.5348837209302325, x: new Date(2013,0) },
				{ y: 0.640625, x: new Date(2014,0) },
				{ y: 0.6222222222222222, x: new Date(2015,0) },
				{ y: 0.5714285714285714, x: new Date(2016,0) },
				{ y: 0.47058823529411764, x: new Date(2017,0) },
				{ y: 0.4827586206896552, x: new Date(2018,0) }
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
		name: "Avg. number of Papers per Author",
		dataPoints: [
			
			
			
			{ y:0.5, x: new Date(2003,0) },
			{ y:0.5116279069767442, x: new Date(2004,0) },
			{ y:0.5, x: new Date(2005,0) },
			{ y:0.4426229508196721, x: new Date(2006,0) },
			{ y:0.43137254901960786, x: new Date(2007,0) },
			{ y:0.42, x: new Date(2008,0) },
			{ y:0.3829787234042553, x: new Date(2009,0) },
			{ y:0.5357142857142857, x: new Date(2010,0) },
			{ y:0.42857142857142855, x: new Date(2011,0) },
			{ y:0.37735849056603776, x: new Date(2012,0) },
			{ y:0.42857142857142855, x: new Date(2013,0) },
			{ y:0.33783783783783783, x: new Date(2014,0) },
			{ y:0.3448275862068966, x: new Date(2015,0) },
			{ y:0.2911392405063291, x: new Date(2016,0) },
			{ y:0.3902439024390244, x: new Date(2017,0) },
			{ y:0.40625, x: new Date(2018,0) }
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
			
			
			
			{ y:2.0, x: new Date(2003,0) },
			{ y:1.9545454545454546, x: new Date(2004,0) },
			{ y:2.0, x: new Date(2005,0) },
			{ y:2.259259259259259, x: new Date(2006,0) },
			{ y:2.3181818181818183, x: new Date(2007,0) },
			{ y:2.380952380952381, x: new Date(2008,0) },
			{ y:2.611111111111111, x: new Date(2009,0) },
			{ y:1.8666666666666667, x: new Date(2010,0) },
			{ y:2.3333333333333335, x: new Date(2011,0) },
			{ y:2.65, x: new Date(2012,0) },
			{ y:2.3333333333333335, x: new Date(2013,0) },
			{ y:2.96, x: new Date(2014,0) },
			{ y:2.9, x: new Date(2015,0) },
			{ y:3.4347826086956523, x: new Date(2016,0) },
			{ y:2.5625, x: new Date(2017,0) },
			{ y:2.4615384615384617, x: new Date(2018,0) }
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
			
			
			
			{ y:15.1875, x: new Date(2003,0) },
			{ y:15.294117647058824, x: new Date(2004,0) },
			{ y:15.80952380952381, x: new Date(2005,0) },
			{ y:18.61111111111111, x: new Date(2006,0) },
			{ y:19.4375, x: new Date(2007,0) },
			{ y:21.105263157894736, x: new Date(2008,0) },
			{ y:22.666666666666668, x: new Date(2009,0) },
			{ y:24.2, x: new Date(2010,0) },
			{ y:23.61111111111111, x: new Date(2011,0) },
			{ y:28.454545454545453, x: new Date(2012,0) },
			{ y:29.0, x: new Date(2013,0) },
			{ y:26.363636363636363, x: new Date(2014,0) },
			{ y:23.09090909090909, x: new Date(2015,0) },
			{ y:31.5, x: new Date(2016,0) },
			{ y:31.1, x: new Date(2017,0) },
			{ y:46.2, x: new Date(2018,0) }
		]
		},


		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Short Papers",
			color: "#C00C0C",
			dataPoints: [
			
			
			
			
			
			{ y:13.5, x: new Date(2003,0) },
			{ y:18.8, x: new Date(2004,0) },
			{ y:10.916666666666666, x: new Date(2005,0) },
			{ y:3.6666666666666665, x: new Date(2006,0) },
			{ y:13.666666666666666, x: new Date(2007,0) },
			{ y:9.0, x: new Date(2008,0) },
			{ y:12.555555555555555, x: new Date(2009,0) },
			{ y:3.8, x: new Date(2010,0) },
			{ y:4.666666666666667, x: new Date(2011,0) },
			{ y:9.444444444444445, x: new Date(2012,0) },
			{ y:10.454545454545455, x: new Date(2013,0) },
			{ y:16.642857142857142, x: new Date(2014,0) },
			{ y:19.0, x: new Date(2015,0) },
			{ y:15.727272727272727, x: new Date(2016,0) },
			{ y:16.833333333333332, x: new Date(2017,0) },
			{ y:15.125, x: new Date(2018,0) }
			
			
			
			
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
		name: "ALTA URLs per Paper 2003-2018",
		dataPoints: [
			
			
			
			{ y:1.7777777777777777, x: new Date(2003,0) },
			{ y:0.5454545454545454, x: new Date(2004,0) },
			{ y:2.272727272727273, x: new Date(2005,0) },
			{ y:1.9259259259259258, x: new Date(2006,0) },
			{ y:2.0, x: new Date(2007,0) },
			{ y:1.7619047619047619, x: new Date(2008,0) },
			{ y:3.2222222222222223, x: new Date(2009,0) },
			{ y:2.933333333333333, x: new Date(2010,0) },
			{ y:3.380952380952381, x: new Date(2011,0) },
			{ y:2.9, x: new Date(2012,0) },
			{ y:2.5714285714285716, x: new Date(2013,0) },
			{ y:4.44, x: new Date(2014,0) },
			{ y:5.05, x: new Date(2015,0) },
			{ y:3.782608695652174, x: new Date(2016,0) },
			{ y:5.8125, x: new Date(2017,0) },
			{ y:8.0, x: new Date(2018,0) }
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
		name: "ALTA : Avg. number of URLs in footnote per Paper per Year",
		dataPoints: [
			
			
			
			{ y:0.3888888888888889, x: new Date(2003,0) },
			{ y:0.045454545454545456, x: new Date(2004,0) },
			{ y:0.5454545454545454, x: new Date(2005,0) },
			{ y:0.7037037037037037, x: new Date(2006,0) },
			{ y:0.8636363636363636, x: new Date(2007,0) },
			{ y:0.8571428571428571, x: new Date(2008,0) },
			{ y:1.1666666666666667, x: new Date(2009,0) },
			{ y:0.9333333333333333, x: new Date(2010,0) },
			{ y:1.380952380952381, x: new Date(2011,0) },
			{ y:1.45, x: new Date(2012,0) },
			{ y:1.2380952380952381, x: new Date(2013,0) },
			{ y:1.44, x: new Date(2014,0) },
			{ y:1.85, x: new Date(2015,0) },
			{ y:1.3478260869565217, x: new Date(2016,0) },
			{ y:1.6875, x: new Date(2017,0) },
			{ y:2.0, x: new Date(2018,0) }
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
		name: "ALTA : Avg. number of Tables per Paper per Year",
		dataPoints: [
			
			
			
			{ y:2.5555555555555554, x: new Date(2003,0) },
			{ y:1.7727272727272727, x: new Date(2004,0) },
			{ y:2.4545454545454546, x: new Date(2005,0) },
			{ y:2.4814814814814814, x: new Date(2006,0) },
			{ y:3.619047619047619, x: new Date(2007,0) },
			{ y:3.857142857142857, x: new Date(2008,0) },
			{ y:3.8823529411764706, x: new Date(2009,0) },
			{ y:3.2666666666666666, x: new Date(2010,0) },
			{ y:3.142857142857143, x: new Date(2011,0) },
			{ y:2.95, x: new Date(2012,0) },
			{ y:2.6666666666666665, x: new Date(2013,0) },
			{ y:3.32, x: new Date(2014,0) },
			{ y:3.95, x: new Date(2015,0) },
			{ y:3.0869565217391304, x: new Date(2016,0) },
			{ y:3.4375, x: new Date(2017,0) },
			{ y:2.230769230769231, x: new Date(2018,0) }
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
		name: "ALTA : Avg. number of Figures per Paper per Year",
		dataPoints: [
			
			
			{ y:3.1666666666666665, x: new Date(2003,0) },
			{ y:3.909090909090909, x: new Date(2004,0) },
			{ y:2.787878787878788, x: new Date(2005,0) },
			{ y:1.4444444444444444, x: new Date(2006,0) },
			{ y:1.0, x: new Date(2007,0) },
			{ y:2.8095238095238093, x: new Date(2008,0) },
			{ y:2.3529411764705883, x: new Date(2009,0) },
			{ y:1.0, x: new Date(2010,0) },
			{ y:1.8095238095238095, x: new Date(2011,0) },
			{ y:2.0, x: new Date(2012,0) },
			{ y:1.4285714285714286, x: new Date(2013,0) },
			{ y:2.4, x: new Date(2014,0) },
			{ y:2.3, x: new Date(2015,0) },
			{ y:3.217391304347826, x: new Date(2016,0) },
			{ y:2.3125, x: new Date(2017,0) },
			{ y:2.6153846153846154, x: new Date(2018,0) }
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
		name: "ALTA : Most Popular primary URL domains & their Frequencies",
		legendText: "",
		dataPoints: [
			{ y:14,  label:'arxiv.org'  },
			{ y:40,  label:'github.com'  },
			{ y:13,  label:'code.google.com'  },
			{ y:11,  label:'www.ncbi.nlm.nih.gov'  },
			{ y:11,  label:'en.wikipedia.org'  },
			{ y:11,  label:'inclass.kaggle.com'  },
			{ y:10,  label:'trove.nla.gov.au'  },
			{ y:9,  label:'trec.nist.gov'  },
			{ y:9,  label:'www.nlm.nih.gov'  },
			{ y:9,  label:'www.kaggle.com'  },
			{ y:9,  label:'www.aclweb.org'  },
			{ y:7,  label:'nlp.stanford.edu'  },
			{ y:7,  label:'sites.google.com'  },
			{ y:6,  label:'www.w3.org'  },
			{ y:6,  label:'www.ics.mq.edu.au'  },
			{ y:6,  label:'www.csie.ntu.edu.tw'  },
			{ y:6,  label:'www.nltk.org'  },
			{ y:6,  label:'www.geonames.org'  },
			{ y:6,  label:'dbpedia.org'  },
			{ y:6,  label:'aclweb.org'  }
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
		name: "ALTA : Top Unique GitHub Pages",
		legendText: "",
		dataPoints: [  
			{ y: 1, label: 'xavi-ai/' },
			{ y: 2, label: 'ldevine/AFM' },
			{ y: 1, label: 'saffsd/forum_' },
			{ y: 1, label: 'ansjsun/ansj' },
			{ y: 1, label: 'maxxkia/g-ssl-crf' },
			{ y: 1, label: 'tesseract-ocr' },
			{ y: 1, label: 'yasserg/crawler4j' },
			{ y: 1, label: 'kohlschutter/boilerpipe' },
			{ y: 1, label: 'tesseract-' },
			{ y: 1, label: 'stevecassidy/' },
			{ y: 1, label: 'jhlau/topic' },
			{ y: 1, label: 'rsennrich/ParZu' },
			{ y: 1, label: 'clab/cnn/tree/' },
			{ y: 1, label: 'gittykhirbat/nary_' },
			{ y: 1, label: 'myleott/ark-twokenize-py' },
			{ y: 1, label: 'languagerecipes/the-' },
			{ y: 1, label: 'IBMMRL/medinfo2015' },
			{ y: 1, label: 'elikip/bist-parser/tree/master/bmstparser' },
			{ y: 1, label: 'elikip/bist-parser/tree/master/barchybrid' },
			
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
		name: "ALTA : Top University Pages",
		legendText: "",
		dataPoints: [
			{ y: 11, label:'USyd' },
			{ y: 16, label:'Macquarie University' },
			{ y: 9, label:'Queensland University of Technology' },
			{ y: 8, label:'Australian National University' },
			{ y: 7, label:'Academy For Language And Technology' },
			{ y: 7, label:'Information Technologies' },
			{ y: 7, label:'University of Melbourne' },
			{ y: 5, label:'Department of Computer Science' },
			{ y: 5, label:'The Ian Potter Museum of Art' },
			{ y: 5, label:'Grainger Museum' },
			{ y: 3, label:'Macquarie University Library' },
			{ y: 3, label:'Flinders University' },
			{ y: 3, label:'Australian Minerals Research Centre' },
			{ y: 3, label:'Monash University' },
			{ y: 3, label:'UWA' },
			{ y: 2, label:'University of Otago' },
			{ y: 2, label:'Columbia University' },
			{ y: 2, label:'Computer Engineering & Informatics Department' },
			{ y: 2, label:'Jadavpur University' },
			{ y: 2, label:'Sydney' }
			
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
		
		
		
		
		if(dt==2003)
		{
			dp= [
			{ y:2, label: 'w3.org' },
			{ y:2, label: 'upenn.edu' },
			{ y:1, label: 'princeton.edu' },
			{ y:1, label: 'otago.ac.nz:8080' },
			{ y:1, label: 'utwente.nl' },
			{ y:1, label: 'nyu.edu' },
			{ y:1, label: 'agtk.sf.net' },
			{ y:1, label: 'antennahouse.com' },
			{ y:1, label: 'apache.org' },
			{ y:5, label: 'emeld.org' },
			{ y:1, label: 'coverpages.org' },
			{ y:1, label: 'oasis-open.org' },
			{ y:1, label: 'xattic.com' },
			{ y:1, label: 'susx.ac.uk' },
			{ y:1, label: 'rug.nl' },
			{ y:1, label: 'senseval.org' },
			{ y:1, label: 'leeds.ac.uk' },
			{ y:1, label: 'bham.ac.uk' }
			
		]
		}
		else if(dt==2004)
		{
			dp= [                    
			{ y:1, label: 'cmu.edu' },
			{ y:1, label: 'mq.edu.au' },
			{ y:2, label: 'example.org' },
			{ y:2, label: 'w3.org' },
			{ y:1, label: 'ist.psu' },
			{ y:1, label: 'sil.org' }
			
		]
		}
		else if(dt==2005)
		{
			dp= [ 
			{ y:2, label: 'mit.edu' },
			{ y:1, label: '64.81.54.21:8080' },
			{ y:6, label: 'nist.gov' },
			{ y:2, label: 'answerbus.com' },
			{ y:2, label: 'google.com' },
			{ y:1, label: 'anl.gov' },
			{ y:1, label: 'princeton.edu' },
			{ y:1, label: 'clef-campaign.org' },
			{ y:2, label: 'pascal-network.org' },
			{ y:2, label: 'alias-i.com' },
			{ y:1, label: 'wisc.edu' },
			{ y:1, label: 'rosettaproject.org' },
			{ y:1, label: 'unece.org' },
			{ y:1, label: 'rug.nl' },
			{ y:1, label: 'unhchr.ch' },
			{ y:1, label: 'cloudgarden.com' },
			{ y:1, label: 'customspeechusa.com' },
			{ y:1, label: 'sourceforge.net' }
			
		]
		}
		else if(dt==2006)
		{
			dp= [
			{ y:1, label: 'cs.purdue' },
			{ y:1, label: 'sourceforge.net' },
			{ y:1, label: 'alcyone.com' },
			{ y:1, label: 'berkeley.edu' },
			{ y:1, label: 'muohio.edu' },
			{ y:1, label: 'globalwordnet.org' },
			{ y:1, label: 'google.com' },
			{ y:1, label: 'yahoo.com' },
			{ y:1, label: 'msn.com' },
			{ y:1, label: 'fjoch.com' },
			{ y:2, label: 'nist.gov' },
			{ y:1, label: 'cnts.ua.ac.be' },
			{ y:1, label: 'arxiv.org' },
			{ y:1, label: 'ivoa.net' },
			{ y:2, label: 'uni-stuttgart.de' },
			{ y:1, label: 'iro.umontreal.ca' },
			{ y:1, label: 'lefff.net' },
			{ y:1, label: 'cnrtl.fr' },
			{ y:1, label: 'snomed.org' },
			{ y:1, label: 'xapian.org' },
			{ y:1, label: 'alias-i.com' },
			{ y:3, label: 'ics.mq.edu.au' }
			
		]
		}
		else if(dt==2007)
		{
			dp= [ 
			{ y:2, label: 'sf.net' },
			{ y:1, label: 'pascal-network.org' },
			{ y:1, label: 'biu.ac.il' },
			{ y:1, label: 'isi.edu' },
			{ y:2, label: 'mq.edu.au' },
			{ y:1, label: 'cmu.edu' },
			{ y:1, label: 'qamus.org' },
			{ y:2, label: 'upenn.edu' },
			{ y:1, label: 'fjoch.com' },
			{ y:1, label: 'sourceforge.net' },
			{ y:1, label: 'nyu.edu' },
			{ y:1, label: 'connexor.com' },
			{ y:1, label: 'alias-i.com' },
			{ y:1, label: 'rmit.edu.au' },
			{ y:1, label: 'highwire.org' },
			{ y:1, label: 'uiuc.edu' },
			{ y:1, label: 'nih.gov' },
			{ y:1, label: 'ohsu.edu' },
			{ y:1, label: 'altavista.com' },
			{ y:1, label: 'google.com' }
			
		]
		}
		else if(dt==2008)
		{
			dp= [       
			{ y:1, label: 'nyu.edu' },
			{ y:1, label: 'govtrack.us' },
			{ y:1, label: 'joachims.org' },
			{ y:1, label: 'utah.edu' },
			{ y:1, label: 'sourceforge.net' },
			{ y:1, label: 'uzh.ch' },
			{ y:1, label: 'nextapp.com' },
			{ y:1, label: 'owldl.org' },
			{ y:1, label: 'swi-prolog.org' },
			{ y:1, label: 'berkeley.edu' },
			{ y:1, label: 'thoughtlets.org' },
			{ y:1, label: 'ui.ac.id' },
			{ y:1, label: 'definitionroadsafety.org' },
			{ y:1, label: 'wikipedia.org' },
			{ y:1, label: 'pediapress.com' },
			{ y:1, label: 'usyd.edu.au' },
			{ y:1, label: 'wikimedia.org' },
			{ y:1, label: 'diknas.go.id' },
			{ y:1, label: 'mq.edu.au' },
			{ y:1, label: 'connexor.com' }
			
		]
		}
		else if(dt==2009)
		{
			dp= [  
			{ y:1, label: 'mpi.nl' },
			{ y:2, label: 'nist.gov' },
			{ y:1, label: 'utu.fi' },
			{ y:1, label: 'asx.com.au' },
			{ y:1, label: 'thomsonreuters.com' },
			{ y:1, label: 'sirca.org.au' },
			{ y:1, label: 'standardandpoors.com' },
			{ y:1, label: 'apache.org' },
			{ y:1, label: 'python.org' },
			{ y:1, label: 'stats.grok.se' },
			{ y:1, label: 'uib.no' },
			{ y:1, label: 'anu.edu.au' },
			{ y:1, label: 'usyd.edu.au' },
			{ y:1, label: 'asn.au' },
			{ y:1, label: 'language-archives.org' },
			{ y:2, label: 'parc.com' },
			{ y:1, label: 'stanford.edu' },
			{ y:1, label: 'ntu.edu.tw' }
			
		]
		}
		else if(dt==2010)
		{
			dp=[   
			{ y:2, label: 'i2b2.org' },
			{ y:1, label: 'wikimedia.org' },
			{ y:1, label: 'csse.unimelb' },
			{ y:1, label: 'kokken.go.jp' },
			{ y:1, label: 'anu.edu' },
			{ y:1, label: 'cnet.com' },
			{ y:2, label: 'ntu.edu.tw' },
			{ y:2, label: 'googlecode.com' },
			{ y:1, label: 'sourceforge.net' },
			{ y:1, label: 'showlett.id.au' },
			{ y:2, label: 'statmt.org' },
			{ y:1, label: 'rcpa.edu.au' },
			{ y:2, label: 'nih.gov' },
			{ y:1, label: 'nehta.gov.au' },
			{ y:1, label: 'aehrc.com' },
			{ y:1, label: 'linuxquestions.org' },
			{ y:1, label: 'github.com' },
			{ y:1, label: 'thecochranelibrary.com' },
			{ y:1, label: 'uptodateonline.com' },
			{ y:1, label: 'parkhurstexchange.com' },
			{ y:1, label: 'cochrane.org' }
			
		]
		}
		else if(dt==2011)
		{
			dp= [
			{ y:5, label: 'nih.gov' },
			{ y:2, label: 'jfponline.com' },
			{ y:2, label: 'waikato.ac.nz' },
			{ y:1, label: 'mq.edu.au' },
			{ y:1, label: 'tuxfamily.org' },
			{ y:1, label: 'aph.gov.au' },
			{ y:1, label: 'nus.edu.sg:8080' },
			{ y:1, label: 'apache.org' },
			{ y:1, label: 'sri.com' },
			{ y:1, label: 'sun.ac.za' },
			{ y:1, label: 'wikipedia.org' },
			{ y:1, label: 'wiktionary.org' },
			{ y:1, label: 'foldoc.org' },
			{ y:1, label: 'onelook.com' },
			{ y:1, label: 'uci.edu' },
			{ y:1, label: 'cornell.edu' },
			{ y:1, label: 'sindhwani.org' },
			{ y:1, label: 'virginia.edu' },
			{ y:1, label: 'unimelb.edu' }
			
		]
		}
		else if(dt==2012)
		{
			dp= [
			{ y:1, label: 'uic.edu' },
			{ y:1, label: 'google..com' },
			{ y:1, label: 'psu.edu' },
			{ y:1, label: 'microsoft.com' },
			{ y:1, label: 'upenn.edu' },
			{ y:1, label: 'imm.dtu.dk' },
			{ y:1, label: 'mturk.com' },
			{ y:2, label: 'cornell.edu' },
			{ y:1, label: 'jhu.edu' },
			{ y:1, label: 'eijiro.jp' },
			{ y:1, label: 'monash.edu.au' },
			{ y:1, label: 'kenkyusha.co.jp' },
			{ y:1, label: 'edrdg.org' },
			{ y:1, label: 'nih.gov' },
			{ y:1, label: 'toronto.edu' },
			{ y:1, label: 'askhermes.org' },
			{ y:1, label: 'wikia.com' },
			{ y:1, label: 'last.fm' },
			{ y:2, label: 'gutenberg.org' }
			
		]
		}
		else if(dt==2013)
		{
			dp= [ 
			{ y:1, label: 'wsj.com' },
			{ y:1, label: 'sourceforge.net' },
			{ y:1, label: 'queensu.ca' },
			{ y:1, label: 'twitter.com' },
			{ y:2, label: 'google.com' },
			{ y:1, label: 'smh.com.au' },
			{ y:1, label: 'freelancer.com' },
			{ y:1, label: 'mturk.com' },
			{ y:1, label: 'scikit-learn.org' },
			{ y:1, label: 'nih.gov' },
			{ y:1, label: 'jfponline.com' },
			{ y:1, label: 'mendeley.com' },
			{ y:1, label: 'labtrove.org' },
			{ y:1, label: 'brooklaw.edu' },
			{ y:1, label: 'pjfi.org' },
			{ y:1, label: 'nltk.org' },
			{ y:1, label: 'nsw.gov.au' },
			{ y:1, label: 'royalcommission.vic.gov' },
			{ y:1, label: 'climatecommission.gov.au' },
			{ y:1, label: 'wikipedia.org' },
			{ y:1, label: 'fas.org' },
			{ y:2, label: 'nist.gov' },
			{ y:1, label: 'isical.ac.in' },
			{ y:2, label: 'kaggle.com' }
			
		]
		}
		else if(dt==2014)
		{
			dp= [                                         
			{ y:1, label: 'lth.se' },
			{ y:1, label: 'vxu.se' },
			{ y:2, label: 'stanford.edu' },
			{ y:2, label: 'sourceforge.net' },
			{ y:4, label: 'github.com' },
			{ y:2, label: 'nih.gov' },
			{ y:1, label: 'wikimedia.org' },
			{ y:2, label: 'weibo.com' },
			{ y:1, label: 'datatang.com' },
			{ y:1, label: 'usgs.gov' },
			{ y:1, label: 'crowdmap.com' },
			{ y:2, label: 'weibo.com' },
			{ y:2, label: 'google.com' },
			{ y:1, label: 'sinaurl.cn' },
			{ y:1, label: 'csiro.au' },
			{ y:1, label: 'csndmc.ac.cn' },
			{ y:2, label: 'redcross.org' },
			{ y:1, label: 'training.fema.gov' },
			{ y:2, label: 'lemurproject.org' },
			{ y:1, label: 'usyd.edu.au' },
			{ y:1, label: 'nist.gov' },
			{ y:2, label: 'library.yale.edu' },
			{ y:2, label: 'kaggle.com' },
			{ y:6, label: 'dbpedia.org' }
			
		]
		}
		else if(dt==2015)
		{
			dp= [  
			{ y:1, label: 'nist.gov' },
			{ y:1, label: 'toronto.edu' },
			{ y:1, label: 'xpo6.com' },
			{ y:9, label: 'google.com' },
			{ y:6, label: 'github.com' },
			{ y:1, label: 'sk-spell.sk.cx' },
			{ y:1, label: 'khmertype.org' },
			{ y:1, label: 'apache.org' },
			{ y:1, label: 'primaresearch.org' },
			{ y:1, label: 'digitisation.eu' },
			{ y:1, label: 'villacollege.edu.mv' },
			{ y:1, label: 'geeksincambodia.com' },
			{ y:1, label: 'googlecode.blogspot.com.au' },
			{ y:1, label: 'ancientgreekocr.org' },
			{ y:1, label: 'nih.gov' },
			{ y:1, label: 'umass.edu' },
			{ y:1, label: 'sourceforge.net' },
			{ y:5, label: 'nla.gov.au' },
			{ y:1, label: 'alveo.edu.au' },
			{ y:2, label: 'huni.net.au' }
			
		]
		}
		else if(dt==2016)
		{
			dp= [  
			{ y:1, label: 'cdc.gov' },
			{ y:3, label: 'nltk.org' },
			{ y:11, label: 'github.com' },
			{ y:1, label: 'stanford.edu' },
			{ y:2, label: 'google.com' },
			{ y:1, label: 'ontoserver.csiro.au:8080' },
			{ y:1, label: 'nlm.nih' },
			{ y:2, label: 'umass.edu' },
			{ y:1, label: 'sourceforge.net' },
			{ y:1, label: 'illinois.edu' },
			{ y:1, label: 'billposer.org' },
			{ y:1, label: 'paradisec.org.au' },
			{ y:1, label: 'scikit-learn.org' },
			{ y:1, label: 'i2b2.org' },
			{ y:1, label: 'twitter.com' },
			{ y:1, label: 'geniaproject.org' },
			{ y:1, label: 'pjfi.org' },
			{ y:1, label: 'ntu.edu.tw' },
			{ y:1, label: 'gnip.com' },
			{ y:4, label: 'kaggle.com' }
			
		]
		}
		else if(dt==2017)
		{
			dp= [     
			{ y:3, label: '.nips.cc' },
			{ y:9, label: 'github.com' },
			{ y:14, label: 'doi.org' },
			{ y:1, label: 'mlr.press' },
			{ y:6, label: 'arxiv.org' },
			{ y:1, label: 'aclanthology.info' },
			{ y:1, label: 'tensorflow.org' },
			{ y:1, label: '128.2.220.95' },
			{ y:1, label: 'aclweb.org' },
			{ y:4, label: 'wikipedia.org' },
			{ y:1, label: 'bitbucket.org' },
			{ y:1, label: 'python.org' },
			{ y:1, label: 'figshare.com' },
			{ y:1, label: 'wikimedia.org' },
			{ y:1, label: 'cnrs.fr' },
			{ y:1, label: 'handle.net' },
			{ y:1, label: 'archives-ouvertes.fr' },
			{ y:1, label: 'langsci-press.org' },
			{ y:1, label: 'www.ethnologue.com' }
			
		]
		}
		else if(dt==2018)
		{
			dp= [ 
			{ y:1, label: 'ted.com' },
			{ y:1, label: 'statmt.org' },
			{ y:9, label: 'github.com' },
			{ y:1, label: 'haifa.ac.il' },
			{ y:2, label: 'uni-heidelberg.de' },
			{ y:5, label: 'wipo.int' },
			{ y:3, label: 'aclanthology.info' },
			{ y:18, label: 'doi.org' },
			{ y:7, label: 'arxiv.org' },
			{ y:8, label: 'aclweb.org' },
			{ y:1, label: 'proceedings.mlr.press' },
			{ y:1, label: 'transacl.org' },
			{ y:1, label: 'nips.cc' },
			{ y:1, label: 'isi.edu' },
			{ y:1, label: 'estepais.com' },
			{ y:1, label: 'asiapacific.anu.edu.au' },
			{ y:1, label: 'paradisec.org.au' },
			{ y:1, label: 'fasttext.cc' },
			{ y:1, label: 'tensorflow.org' },
			{ y:1, label: 'cs.man.ac.uk' },
			{ y:3, label: 'kaggle.com' }
			
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
	
	if (dtp=='20030')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.w3.org/TR/2001/REC-xsl-20011015/' },	
			{ y: 1, label: 'http://www..w3.org/TR/html4' }	
		]
	}
	else if (dtp=='20031')
	{
		dp = [                                         
			
			{ y: 2, label: 'www.cis.upenn.edu' }			
		]
	}
	else if (dtp=='20032')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cogsci.princeton.edu/~wn/' }			
		]
	}
	else if (dtp=='20033')
	{
		dp = [                                         
			{ y: 1, label: 'http://tutoko.otago.ac.nz:8080/teKaitito/' }			
		]
	}
	else if (dtp=='20034')
	{
		dp = [                                         
			{ y: 1, label: 'http://wwwhome.cs.utwente.nl/druid/' }			
		]
	}
	else if (dtp=='20035')
	{
		dp = [                                         
			{ y: 1, label: 'http://nlp.cs.nyu.edu/' }			
		]
	}
	else if (dtp=='20036')
	{
		dp = [                                         
			{ y: 1, label: 'http://agtk.sf.net' }			
		]
	}
	else if (dtp=='20037')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.antennahouse.com/xslformatter.htm' }			
		]
	}
	else if (dtp=='20038')
	{
		dp = [                                         
			{ y: 1, label: 'http://xml.apache.org/fop' }			
		]
	}
	else if (dtp=='20039')
	{
		dp = [                                         
			{ y: 5, label: 'www.emeld.org' }			
		]
	}
	else if (dtp=='200310')
	{
		dp = [                                         
			{ y: 1, label: 'http://xml.coverpages.org/KimberProductionQuality-' }			
		]
	}
	else if (dtp=='200311')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.oasis-open.org/docbook' }			
		]
	}
	else if (dtp=='200312')
	{
		dp = [                                         
			{ y: 1, label: 'http://xep.xattic.com/' }			
		]
	}
	else if (dtp=='200313')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cogs.susx.ac.uk/lab/nlp/' }			
		]
	}
	else if (dtp=='200314')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.let.rug.nl/vannoord/alp'}			
		]
	}
	else if (dtp=='200315')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.senseval.org/' }			
		]
	}
	else if (dtp=='200316')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.comp.leeds.ac.uk/amalgam/amalgam/multi-' }			
		]
	}
	else if (dtp=='200317')
	{
		dp = [                                         
		
			{ y: 1, label: 'http://web.bham.ac.uk/O.Mason/software/tagger/' }			
		]
	}
	else if (dtp=='20040')
	{
		dp = [                                         
			{ y: 1, label: 'http://childes.psy.cmu.edu/' }			
		]
	}
	else if (dtp=='20041')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.clt.mq.edu.au' }			
		]
	}
	else if (dtp=='20042')
	{
		dp = [                                         
			{ y: 2, label: 'www.example.org'}			
		]
	}
	else if (dtp=='20043')
	{
		dp = [                                         
			{ y: 2, label: 'www.w3.org'}
			
		]
	}
	else if (dtp=='20044')
	{
		dp = [                                         
			{ y: 1, label: 'http://citeseer.ist.psu' }			
		]
	}
	else if (dtp=='20045')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.sil.org/computing/shoebox/' }			
		]
	}
	else if (dtp=='20050')
	{
		dp = [                                         
			
			{ y: 2, label: 'www.ai.mit.edu' }
		]
	}
	else if (dtp=='20051')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://64.81.54.21:8080/live/' }
		]
	}
	else if (dtp=='20052')
	{
		dp = [                                         
			{ y: 3, label: 'trec.nist.gov' },
			{ y: 1, label: 'http://www-nlpir.nist.gov/projects/duc/' },
			{ y: 1 label:  'http://www.nist.gov/speech/tools/' },
			{ y: 1, label: 'http://duc.nist.gov' }
		]
	}
	else if (dtp=='20053')
	{
		dp = [                                         
			{ y: 2, label: 'www.answerbus.com'}			
		]
	}
	else if (dtp=='20054')
	{
		dp = [                                         
			{ y: 2, label: 'www.google.com' }			
		]
	}
	else if (dtp=='20055')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://www-unix.mcs.anl.gov/AR/otter/' }			
		]
	}
	else if (dtp=='20056')
	{
		dp = [                                         
			{ y: 1, label:  'http://wordnet.princeton.edu/' }			
		]
	}
	else if (dtp=='20057')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.clef-campaign.org/' }			
		]
	}
	else if (dtp=='20058')
	{
		dp = [                                         
			{ y: 2, label:  'www.pascal-network.org' }			
		]
	}
	else if (dtp=='20059')
	{
		dp = [                                         
			{ y: 1, label: 'http://alias-i.com/lingpipe/' },
			{ y: 1, label: 'http://www.alias-i.com/lingpipe/' }	
		]
	}
	else if (dtp=='200510')
	{
		dp = [                                         
			{ y: 1, label: 'http://trace.wisc.edu/docs/wordprediction2001/index.htm' }			
		]
	}
	else if (dtp=='200511')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.rosettaproject.org/' }			
		]
	}
	else if (dtp=='200512')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.unece.org/locode' }			
		]
	}
	else if (dtp=='200513')
	{
		dp = [                                         
			{ y: 1, label: 'http://odur.let.rug.nl/vannoord/TextCat/' }			
		]
	}
	else if (dtp=='200514')
	{
		dp = [                                         
			{ y: 2, label: 'http://www.unhchr.ch/udhr/navigate/alpha.htm' }			
		]
	}
	else if (dtp=='200515')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cloudgarden.com/JSAPI/' }			
		]
	}
	else if (dtp=='200516')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://www.customspeechusa.com/' }
		]
	}
	else if (dtp=='200517')
	{
		dp = [                                         
			{ y: 1, label: 'https://sourceforge.net/projects' }			
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