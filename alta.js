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
			{ y:1, label: 'umontreal.ca' },
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
			{ y:2, label: 'biu.ac.il' },
			{ y:1, label: 'isi.edu' },
			{ y:2, label: 'mq.edu.au' },
			{ y:1, label: 'cmu.edu' },
			{ y:1, label: 'qamus.org' },
			{ y:3, label: 'upenn.edu' },
			{ y:1, label: 'fjoch.com' },
			{ y:2, label: 'sourceforge.net' },
			{ y:1, label: 'nyu.edu' },
			{ y:1, label: 'connexor.com' },
			{ y:1, label: 'alias-i.com' },
			{ y:1, label: 'rmit.edu.au' },
			{ y:1, label: 'highwire.org' },
			{ y:1, label: 'uiuc.edu' },
			{ y:2, label: 'nih.gov' },
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
			{ y:3, label: 'sourceforge.net' },
			{ y:1, label: 'uzh.ch' },
			{ y:1, label: 'nextapp.com' },
			{ y:1, label: 'owldl.org' },
			{ y:1, label: 'swi-prolog.org' },
			{ y:1, label: 'berkeley.edu' },
			{ y:1, label: 'thoughtlets.org' },
			{ y:1, label: 'ui.ac.id' },
			{ y:1, label: 'definitionroadsafety.org' },
			{ y:2, label: 'wikipedia.org' },
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
			{ y:4, label: 'googlecode.com' },
			{ y:1, label: 'sourceforge.net' },
			{ y:1, label: 'showlett.id.au' },
			{ y:3, label: 'statmt.org' },
			{ y:1, label: 'rcpa.edu.au' },
			{ y:3, label: 'nih.gov' },
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
			{ y:10, label: 'nih.gov' },
			{ y:3, label: 'jfponline.com' },
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
			{ y:2, label: 'upenn.edu' },
			{ y:1, label: 'imm.dtu.dk' },
			{ y:1, label: 'mturk.com' },
			{ y:2, label: 'cornell.edu' },
			{ y:1, label: 'jhu.edu' },
			{ y:1, label: 'eijiro.jp' },
			{ y:1, label: 'monash.edu.au' },
			{ y:1, label: 'kenkyusha.co.jp' },
			{ y:1, label: 'edrdg.org' },
			{ y:3, label: 'nih.gov' },
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
			{ y:2, label: 'sourceforge.net' },
			{ y:1, label: 'queensu.ca' },
			{ y:2, label: 'twitter.com' },
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
			{ y:5, label: 'kaggle.com' }
			
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
			{ y:4, label: 'nih.gov' },
			{ y:1, label: 'wikimedia.org' },
			{ y:4, label: 'weibo.com' },
			{ y:1, label: 'datatang.com' },
			{ y:1, label: 'usgs.gov' },
			{ y:1, label: 'crowdmap.com' },
			{ y:2, label: 'google.com' },
			{ y:1, label: 'sinaurl.cn' },
			{ y:1, label: 'csiro.au' },
			{ y:1, label: 'csndmc.ac.cn' },
			{ y:2, label: 'redcross.org' },
			{ y:1, label: 'training.fema.gov' },
			{ y:2, label: 'lemurproject.org' },
			{ y:2, label: 'usyd.edu.au' },
			{ y:2, label: 'nist.gov' },
			{ y:2, label: 'library.yale.edu' },
			{ y:3, label: 'kaggle.com' },
			{ y:6, label: 'dbpedia.org' }
			
		]
		}
		else if(dt==2015)
		{
			dp= [  
			{ y:1, label: 'nist.gov' },
			{ y:1, label: 'toronto.edu' },
			{ y:1, label: 'xpo6.com' },
			{ y:12, label: 'google.com' },
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
			{ y:3, label: 'nih.gov' },
			{ y:1, label: 'umass.edu' },
			{ y:3, label: 'sourceforge.net' },
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
			{ y:4, label: 'google.com' },
			{ y:1, label: 'ontoserver.csiro.au:8080' },
			{ y:1, label: 'nlm.nih' },
			{ y:2, label: 'umass.edu' },
			{ y:1, label: 'sourceforge.net' },
			{ y:1, label: 'illinois.edu' },
			{ y:1, label: 'billposer.org' },
			{ y:1, label: 'paradisec.org.au' },
			{ y:1, label: 'scikit-learn.org' },
			{ y:1, label: 'i2b2.org' },
			{ y:3, label: 'twitter.com' },
			{ y:1, label: 'geniaproject.org' },
			{ y:1, label: 'pjfi.org' },
			{ y:1, label: 'ntu.edu.tw' },
			{ y:2, label: 'gnip.com' },
			{ y:4, label: 'kaggle.com' }
			
		]
		}
		else if(dt==2017)
		{
			dp= [     
			{ y:3, label: 'nips.cc' },
			{ y:9, label: 'github.com' },
			{ y:14, label: 'doi.org' },
			{ y:1, label: 'mlr.press' },
			{ y:6, label: 'arxiv.org' },
			{ y:1, label: 'aclanthology.info' },
			{ y:1, label: 'tensorflow.org' },
			{ y:1, label: '128.2.220.95' },
			{ y:2, label: 'aclweb.org' },
			{ y:4, label: 'wikipedia.org' },
			{ y:1, label: 'bitbucket.org' },
			{ y:1, label: 'python.org' },
			{ y:1, label: 'figshare.com' },
			{ y:2, label: 'wikimedia.org' },
			{ y:1, label: 'cnrs.fr' },
			{ y:1, label: 'handle.net' },
			{ y:1, label: 'archives-ouvertes.fr' },
			{ y:1, label: 'langsci-press.org' },
			{ y:1, label: 'ethnologue.com' },
			{ y:3, label: 'google.com' },
			{ y:6, label: 'nla.gov.au' }
			
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
			{ y:13, label: 'aclweb.org' },
			{ y:1, label: 'proceedings.mlr.press' },
			{ y:1, label: 'transacl.org' },
			{ y:1, label: 'nips.cc' },
			{ y:1, label: 'isi.edu' },
			{ y:1, label: 'estepais.com' },
			{ y:1, label: 'asiapacific.anu.edu.au' },
			{ y:1, label: 'paradisec.org.au' },
			{ y:1, label: 'fasttext.cc' },
			{ y:1, label: 'tensorflow.org' },
			{ y:1, label: 'man.ac.uk' },
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
			{ y: 1, label:  'http://www.nist.gov/speech/tools/' },
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
			{ y: 1, label: 'http://www.cs.purdue' }			
		]
	}
	else if (dtp=='20061')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://nltk.sourceforge.net/' }
		]
	}
	else if (dtp=='20062')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.alcyone.com/pyos/church/' }			
		]
	}
	else if (dtp=='20063')
	{
		dp = [                                         
			{ y: 1, label: 'http://aima.cs.berkeley.edu/python' }			
		]
	}
	else if (dtp=='20064')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.users.muohio.edu/stileswb/archive.htmlx' }			
		]
	}
	else if (dtp=='20065')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://www.globalwordnet.org/gwa/wordnet' }	
		]
	}
	else if (dtp=='20066')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.google.com' }			
		]
	}
	else if (dtp=='20067')
	{
		dp = [                                         
			{ y: 1, label: 'http://search.yahoo.com' }			
		]
	}
	else if (dtp=='20068')
	{
		dp = [                                         
			{ y: 1, label: 'http://search.msn.com' }			
		]
	}
	else if (dtp=='20069')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.fjoch.com/YASMET.html' }			
		]
	}
	else if (dtp=='200610')
	{
		dp = [                                         
			{ y: 2, label: 'trec.nist.gov' }			
		]
	}
	else if (dtp=='200611')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cnts.ua.ac.be/conll2003/ner/bin/' }			
		]
	}
	else if (dtp=='200612')
	{
		dp = [                                         
			{ y: 1, label: 'http://arxiv.org' }			
		]
	}
	else if (dtp=='200613')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.ivoa.net/pub/info/' }			
		]
	}
	else if (dtp=='200614')
	{
		dp = [                                         
			{ y: 2, label: 'www.ims.uni-stuttgart.de' }			
		]
	}
	else if (dtp=='200615')
	{
		dp = [                                         
			{ y: 1, label: 'http://rali.iro.umontreal.ca/Ressources/BAF'}			
		]
	}
	else if (dtp=='200616')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://www.lefff.net' }	
		]
	}
	else if (dtp=='200617')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://www.cnrtl.fr/morphalou' }	
		]
	}
	else if (dtp=='200618')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.snomed.org' }			
		]
	}
	else if (dtp=='200619')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://www.xapian.org/'}
		]
	}
	else if (dtp=='200620')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://www.alias-i.com/lingpipe/'}
		]
	}
	else if (dtp=='200621')
	{
		dp = [                                         
			
			{ y: 3, label: 'www.ics.mq.edu.au'}
		]
	}
	else if (dtp=='20070')
	{
		dp = [                                         
			{ y: 2, label:'get1t.sf.net'}
		]
	}
	else if (dtp=='20071')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://www.pascal-network.org/Challenges/RTE/' }
		]
	}
	else if (dtp=='20072')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cs.biu.ac.il/glikmao/rte05' },
			{ y: 1, label: 'http://ir-srv.cs.biu.ac.il:64080/RTE2/proceedings/' }
		]
	}
	else if (dtp=='20073')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://www.isi.edu/knight/' }
		]
	}
	else if (dtp=='20074')
	{
		dp = [                                         
			{ y: 2, label: 'www.ics.mq.edu.au' }
		]
	}
	else if (dtp=='20075')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.link.cs.cmu.edu/link/papers/index.html' }
		]
	}
	else if (dtp=='20076')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.qamus.org/transliteration.htm' }
		]
	}
	else if (dtp=='20077')
	{
		dp = [                                         
			
			{ y: 2, label: 'www.ldc.upenn.edu' },
			{ y: 1, label: 'http://www.cis.upenn.edu/' }
		]
	}
	else if (dtp=='20078')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.fjoch.com/YASMET.html' }
		]
	}
	else if (dtp=='20079')
	{
		dp = [                                         
			{ y: 1, label: 'http://opennlp.sourceforge.net/' },
			{ y: 1, label: 'http://swirl-parser.sourceforge.net/'}
		]
	}
	else if (dtp=='200710')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://nlp.cs.nyu.edu/evalb/' }
		]
	}
	else if (dtp=='200711')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://www.connexor.com'}
		]
	}
	else if (dtp=='200712')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.alias-i.com/lingpipe/' }
		]
	}
	else if (dtp=='200713')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.seg.rmit.edu.au/zettair/' }
		]
	}
	else if (dtp=='200714')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://www.highwire.org' }
		]
	}
	else if (dtp=='200715')
	{
		dp = [                                         
			{ y: 1, label: 'http://l2r.cs.uiuc.edu/cogcomp/atool' }
		]
	}
	else if (dtp=='200716')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.nlm.nih.gov/mesh' },
			{ y: 1, label: 'http://www.ncbi.nlm.nih.gov/sites/' }
		]
	}
	else if (dtp=='200717')
	{
		dp = [                                         
			{ y: 1, label: 'http://ir.ohsu.edu/genomics/2006data.html' }
		]
	}
	else if (dtp=='200718')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://babelfish.altavista.com/' }
		]
	}
	else if (dtp=='200719')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.google.com/translate' }
		]
	}
	else if (dtp=='20080')
	{
		dp = [                                         

			{ y: 1, label:  'http://www.cs.nyu.edu/cs/projects/proteus/evalb' }
		]
	}
	else if (dtp=='20081')
	{
		dp = [                                         
			{ y: 1, label: 'http://govtrack.us' }
		]
	}
	else if (dtp=='20082')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://svmlight.joachims.org/' }
		]
	}
	else if (dtp=='20083')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.cs.utah.edu/hal/megam/' }
		]
	}
	else if (dtp=='20084')
	{
		dp = [                                         
			{ y: 1, label:  'http://nltk.sourceforge.net' },
			{ y: 1, label:  'http://wnsqlbuilder.sourceforge.net' },
			{ y: 1, label:  'http://www.sourceforge.net/projects/maxent/' }
		]
	}
	else if (dtp=='20085')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://attempto.ifi.uzh.ch/acewiki/' }
		]
	}
	else if (dtp=='20086')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://echo.nextapp.com/site/' }
		]
	}
	else if (dtp=='20087')
	{
		dp = [                                         
			{ y: 1, label:  'http://pellet.owldl.org/' }
		]
	}
	else if (dtp=='20088')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.swi-prolog.org/' }
		]
	}
	else if (dtp=='20089')
	{
		dp = [                                         
			{ y: 1, label: 'http://bailando.sims.berkeley.edu/enron/enron.sql.gz' }
		]
	}
	else if (dtp=='200810')
	{
		dp = [                                         
			{ y: 1, label:  'http://annotate.thoughtlets.org' }
		]
	}
	else if (dtp=='200811')
	{
		dp = [                                         
			{ y: 1, label:  'http://bahasa.cs.ui.ac.id/iwn' }
		]
	}
	else if (dtp=='200812')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://hantarto.definitionroadsafety.org' }
		]
	}
	else if (dtp=='200813')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.wikipedia.org'},
			{ y: 1, label:  'http://en.wikipedia.org/wiki/Finnish\\' }
		]
	}else if (dtp=='200814')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://code.pediapress.com' }
		]
	}
	else if (dtp=='200815')
	{
		dp = [                                         
			{ y: 1, label:  'http://svn.ask.it.usyd.edu.au/trac/' }
		]
	}
	else if (dtp=='200816')
	{
		dp = [                                         
			{ y: 1, label:  'http://download.wikimedia.org/' }
		]
	}
	else if (dtp=='200817')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.pusatbahasa.diknas.go.id/kbbi' }
		]
	}
	else if (dtp=='200818')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.ics.mq.edu.au/jviethen/spatial/index.html' }
		]
	}
	else if (dtp=='200819')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.connexor.com' }
		]
	}
	else if (dtp=='20090')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.mpi.nl/IMDI/>' }
		]
	}
	else if (dtp=='20091')
	{
		dp = [                                         
			
			{ y: 2, label:  'www.nist.gov' }
		]
	}
	else if (dtp=='20092')
	{
		dp = [                                         
			
			{ y: 1, label:   'http://mars.cs.utu.fi/BinInfer' }
		]
	}
	else if (dtp=='20093')
	{
		dp = [                                         
			{ y: 1, label:  'http://asx.com.au' }
		]
	}
	else if (dtp=='20094')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://thomsonreuters.com/products_' }
		]
	}
	else if (dtp=='20095')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.sirca.org.au' }
		]
	}
	else if (dtp=='20096')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.standardandpoors.com' }
		]
	}
	else if (dtp=='20097')
	{
		dp = [                                         
			{ y: 1, label:  'http://incubator.apache.org/pdfbox' }
		]
	}
	else if (dtp=='20098')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://gibbslda.sourceforge.net' }
		]
	}
	else if (dtp=='20099')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://docs.python.org/library/difflib' }
		]
	}
	else if (dtp=='200910')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://stats.grok.se' }
		]
	}
	else if (dtp=='200911')
	{
		dp = [                                         
			
			
			{ y: 1, label:  'http://khnt.hit.uib.no/icame/manuals/ace/INDEX.HTM>' }
		]
	}
	else if (dtp=='200912')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://andosl.anu.edu.au/andosl/>' }
		]
	}
	else if (dtp=='200913')
	{
		dp = [                                         
			{ y: 1, label:  'http://blogs.usyd.edu.au/elac/2008/08/australian_national_corp' },
			{ y: 1, label:  'http://svn.ask.it.usyd.edu.au/trac/candc' }
		]
	}else if (dtp=='200914')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.als.asn.au/newsletters/alsnews200908.html>'}
		]
	}
	else if (dtp=='200915')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.language-archives.org/>;' }
		]
	}else if (dtp=='200916')
	{
		dp = [                                         
			{ y: 2, label:   'www2.parc.com' }
		]
	}
	else if (dtp=='200917')
	{
		dp = [                                         
			
			{ y: 1, label:   'http://www.stanford.edu/' }
		]
	}
	else if (dtp=='200918')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.csie.ntu.edu.tw/' }
		]
	}
	else if (dtp=='20100')
	{
		dp = [                                         
			{ y: 2, label:  'www.i2b2.org' }
		]
	}
	else if (dtp=='20101')
	{
		dp = [                                         
			{ y: 1, label:   'http://download.wikimedia.org/'}
		]
	}
	else if (dtp=='20102')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.csse.unimelb' }
		]
	}
	else if (dtp=='20103')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.kokken.go.jp/katsudo/seika/corpus/public' }
		]
	}
	else if (dtp=='20104')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://cs.anu.edu' }
		]
	}
	else if (dtp=='20105')
	{
		dp = [                                         
			{ y: 1, label:  'http://forums.cnet.com' }
		]
	}else if (dtp=='20106')
	{
		dp = [                                         
			
			{ y: 2, label:  'www.csie.ntu.edu.tw' }
		]
	}
	else if (dtp=='20107')
	{
		dp = [                                         
			{ y: 1, label:   'http://sitescraper.googlecode.com/' },
			{ y: 2, label:   'hydrat.googlecode.com' },
			{ y: 1, label:   'http://berkeleyparser.googlecode.com/svn/trunk/' }
		]
	}
	else if (dtp=='20108')
	{
		dp = [                                         
			{ y: 1, label: 'https://mosesdecoder.svn.sourceforge.net/svnroot/' }
		]
	}
	else if (dtp=='20109')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.showlett.id.au/' }
		]
	}
	else if (dtp=='201010')
	{
		dp = [                                         
			{ y: 2, label:   'www.statmt.org' },
			{ y: 1, label:   'http://matrix.statmt.org/' }
		]
	}
	else if (dtp=='201011')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.rcpa.edu.au/Publications/' }
		]
	}
	else if (dtp=='201012')
	{
		dp = [                                         
			{ y: 2, label:  'www.nlm.nih.gov' },
			{ y: 1, label:  'http://www.ncbi.nlm.nih.gov/pubmed' }
		]
	}
	else if (dtp=='201013')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.nehta.gov.au/media-centre/' }
		]
	}
	else if (dtp=='201014')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://aehrc.com/' }
		]
	}
	else if (dtp=='201015')
	{
		dp = [                                         
			{ y: 1, label:   'http://www.linuxquestions.org' }
		]
	}
	else if (dtp=='201016')
	{
		dp = [                                         
			{ y: 1, label:  'http://github.com/saffsd/forum_' }
		]
	}
	else if (dtp=='201017')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.thecochranelibrary.com/'}
		]
	}
	else if (dtp=='201018')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.uptodateonline.com' }
		]
	}
	else if (dtp=='201019')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.parkhurstexchange.com/' }
		]
	}
	else if (dtp=='201020')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.cochrane.org/' }
		]
	}
	else if (dtp=='20110')
	{
		dp = [                                         
			{ y: 5, label:  'www.nlm.nih.gov' },
			{ y: 3, label:  'www.ncbi.nlm.nih.gov' },
			{ y: 2, label:  'metamap.nlm.nih.gov' }
		]
	}
	else if (dtp=='20111')
	{
		dp = [                                         
			{ y: 2, label:  'www.jfponline.com' },
			{ y: 1, label:  'http://jfponline.com/' }
		]
	}
	else if (dtp=='20112')
	{
		dp = [                                         
			{ y: 2, label: 'www.cs.waikato.ac.nz' }
		]
	}
	else if (dtp=='20113')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://web.science.mq.edu.au/' }
		]
	}
	else if (dtp=='20114')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://eigen.tuxfamily.org' }
		]
	}else if (dtp=='20115')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.aph.gov.au/house/committee/jscc/cybercrime' }
		]
	}
	else if (dtp=='20116')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://wing.comp.nus.edu.sg:8080/SMSCorpus/' }
		]
	}
	else if (dtp=='20117')
	{
		dp = [                                         
			{ y: 1, label:  'http://incubator.apache.org/opennlp/' }
		]
	}
	else if (dtp=='20118')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.speech.sri.com/projects/srilm/' }
		]
	}
	else if (dtp=='20119')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.dsp.sun.ac.za/' }
		]
	}else if (dtp=='201110')
	{
		dp = [                                         
			{ y: 1, label:  'http://en.wikipedia.org/wiki/Main' }
		]
	}
	else if (dtp=='201111')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://en.wiktionary.org/wiki/dictionary' }
		]
	}
	else if (dtp=='201112')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://foldoc.org/' }
		]
	}
	else if (dtp=='201113')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.onelook.com/' }
		]
	}
	else if (dtp=='201114')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.ics.uci.edu/' }
		]
	}
	else if (dtp=='201115')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.cs.cornell.edu/People/tj/svm' }
		]
	}
	else if (dtp=='201116')
	{
		dp = [                                         
			{ y: 1, label:  'http://vikas.sindhwani.org/svmlin.html' }
		]
	}
	else if (dtp=='201117')
	{
		dp = [                                         
			{ y: 1, label:   'http://people.virginia.edu/' }
		]
	}
	else if (dtp=='201118')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.csse.unimelb.edu' }
		]
	}
	else if (dtp=='20120')
	{
		dp = [                                         
			
			{ y: 1, label:   'http://www.cs.uic.edu/' }
		]
	}
	else if (dtp=='20121')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://scholar.google..com' }
		]
	}
	else if (dtp=='20122')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://citeseerx.ist.psu.edu' }
		]
	}
	else if (dtp=='20123')
	{
		dp = [                                         
			{ y: 1, label:  'http://academic.research.microsoft.com/' }
		]
	}
	else if (dtp=='20124')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.asc.upenn.edu/usr/krippendorff/mw' },
			{ y: 1, label:  'http://www.ldc.upenn.edu/Catalog/' }
		]
	}
	else if (dtp=='20125')
	{
		dp = [                                         
			{ y: 1, label:  'http://www2.imm.dtu.dk/' }
		]
	}
	else if (dtp=='20126')
	{
		dp = [                                         
			{ y: 1, label:   'http://www.mturk.com/' }
		]
	}
	else if (dtp=='20127')
	{
		dp = [                                         
			{ y: 2, label:   'www.cs.cornell.edu' }
		]
	}
	else if (dtp=='20128')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cs.jhu.edu/' }
		]
	}
	else if (dtp=='20129')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.eijiro.jp/e/index.htm' }
		]
	}
	else if (dtp=='201210')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.csse.monash.edu.au/~jwb/' }
		]
	}
	else if (dtp=='201211')
	{
		dp = [                                         
			{ y: 1, label:  'http://kod.kenkyusha.co.jp/service/' }
		]
	}
	else if (dtp=='201212')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.edrdg.org/cgi-' }
		]
	}
	else if (dtp=='201213')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.ncbi.nlm.nih.gov/pubmed' },
			{ y: 1, label:  'http://www.nlm.nih.gov/research/umls/' },
			{ y: 1, label:  'http://metamap.nlm.nih.gov/' }
		]
	}
	else if (dtp=='201214')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.cs.toronto.edu/km/epocare/index.html' }
		]
	}
	else if (dtp=='201215')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.askhermes.org/' }
		]
	}
	else if (dtp=='201216')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://lyrics.wikia.com' }
		]
	}
	else if (dtp=='201217')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.last.fm' }
		]
	}
	else if (dtp=='201218')
	{
		dp = [                                         
			{ y: 2, label: 'www.gutenberg.org' }
		]
	}
	else if (dtp=='20130')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.wsj.com' }
		]
	}
	else if (dtp=='20131')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://wordlist.sourceforge.net' },
			{ y: 1, label:  'http://sourceforge.net/projects/sgmweka/' }
		]
	}
	else if (dtp=='20132')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.queensu.ca/strathy/' }
		]
	}
	else if (dtp=='20133')
	{
		dp = [                                         
			{ y: 1, label:  'http://twitter.com/' },
			{ y: 1, label:  'https://blog.twitter.com/' }
		]
	}
	else if (dtp=='20134')
	{
		dp = [                                         
			
			{ y: 2, label:  'sites.google.com' }
		]
	}
	else if (dtp=='20135')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.smh.com.au' }
		]
	}
	else if (dtp=='20136')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.freelancer.com' }
		]
	}
	else if (dtp=='20137')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.mturk.com/' }
		]
	}
	else if (dtp=='20138')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://scikit-learn.org' }
		]
	}
	else if (dtp=='20139')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.ncbi.nlm.nih.gov/pubmed' }
		]
	}
	else if (dtp=='201310')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://www.jfponline.com' }
		]
	}
	else if (dtp=='201311')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.mendeley.com/' }
		]
	}
	else if (dtp=='201312')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.labtrove.org/' }
		]
	}
	else if (dtp=='201313')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.brooklaw.edu/newsandevents/events/2012/10-' }
		]
	}
	else if (dtp=='201314')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://pjfi.org/' }
		]
	}
	else if (dtp=='201315')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://nltk.org/' }
		]
	}
	else if (dtp=='201316')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.rfs.nsw.gov.au/dsp_conent' }
		]
	}
	else if (dtp=='201317')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.royalcommission.vic.gov' }
		]
	}
	else if (dtp=='201318')
	{
		dp = [                                         
			{ y: 1, label:  'http://climatecommission.gov.au/' }
		]
	}
	else if (dtp=='201319')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://en.wikipedia.org/wiki/2012-'}
		]
	}
	else if (dtp=='201320')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.fas.org/'}
		]
	}
	else if (dtp=='201321')
	{
		dp = [                                         
			
			{ y: 2, label:  'trec.nist.gov'}
		]
	}
	else if (dtp=='201322')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.isical.ac.in/clia/'}
		]
	}
	else if (dtp=='201323')
	{
		dp = [                                         
			
			{ y: 2, label:  'www.kaggle.com'},
			{ y: 3, label:  'inclass.kaggle.com'}
		]
	}
	else if (dtp=='20140')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://nlp.cs.lth.se/software/' }
		]
	}
	else if (dtp=='20141')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://w3.msi.vxu.se/' }
		]
	}
	else if (dtp=='20142')
	{
		dp = [                                         
			{ y: 2, label:  'nlp.stanford.edu' }
		]
	}
	else if (dtp=='20143')
	{
		dp = [                                         
			
			{ y: 2, label:  'sourceforge.net' }
		]
	}
	else if (dtp=='20144')
	{
		dp = [                                         
			{ y: 4, label: 'github.com' }
		]
	}
	else if (dtp=='20145')
	{
		dp = [                                         
			
			{ y: 2, label:  'ii.nlm.nih.gov' },
			{ y: 2, label:  'www.ncbi.nlm.nih.gov' }
		]
	}
	else if (dtp=='20146')
	{
		dp = [                                         
			
			{ y: 1, label:  'https://dumps.wikimedia.org/pagecounts-raw/' }
		]
	}
	else if (dtp=='20147')
	{
		dp = [                                         
			
			{ y: 2, label:  'ir.weibo.com' },
			{ y: 2, label:  'open.weibo.com' }
		]
	}
	else if (dtp=='20148')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.datatang.com/data/19300' }
		]
	}
	else if (dtp=='20149')
	{
		dp = [                                         
			{ y: 1, label:  'http://earthquake.usgs.gov/' }
		]
	}
	else if (dtp=='201410')
	{
		dp = [                                         
			{ y: 1, label:   'https://sandydc.crowdmap.com/' }
		]
	}
	else if (dtp=='201411')
	{
		dp = [                                         
			{ y: 2, label:   'code.google.com' }
		]
	}
	else if (dtp=='201412')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://sinaurl.cn/hEQH1' }
		]
	}
	else if (dtp=='201413')
	{
		dp = [                                         

			{ y: 1, label:  'http://swim.csiro.au/' }
		]
	}
	else if (dtp=='201414')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.csndmc.ac.cn/newweb/' }
		]
	}
	else if (dtp=='201415')
	{
		dp = [                                         
			{ y: 2, label:  'www.redcross.org' }
		]
	}
	else if (dtp=='201416')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.training.fema.gov/EMIWeb/' }
		]
	}
	else if (dtp=='201417')
	{
		dp = [                                         
			
			{ y: 2, label:  'www.lemurproject.org' }
		]
	}
	else if (dtp=='201419')
	{
		dp = [                                         
			{ y: 1, label:  'http://svn.ask.it.usyd.edu.au/trac/candc/wiki/' },
			{ y: 1, label:  'http://ses.library.usyd.edu.au/handle/2123/7890' }
		]
	}
	else if (dtp=='201418')
	{
		dp = [                                         
			{ y: 1, label:  'http://trec.nist.gov/trec_eval/trec_eval_' },
			{ y: 1, label:  'http://www.nist.gov/tac/2014/' }
		]
	}
	else if (dtp=='201420')
	{
		dp = [                                         
			
			{ y: 2, label:  'www.library.yale.edu' }
		]
	}
	else if (dtp=='201421')
	{
		dp = [                                         
			
			{ y: 2, label:  'inclass.kaggle.com' },
			{ y: 1, label:  'https://www.kaggle.com/wiki/' }
		]
	}
	else if (dtp=='201422')
	{
		dp = [                                         
			
			{ y: 6, label:  'dbpedia.org' }
		]
	}
	
	else if (dtp=='20150')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.itl.nist.gov/iad/mig/tests/spk/' }
			]
	}
	else if (dtp=='20151')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.cs.toronto.edu/' }
		]
	}
	else if (dtp=='20152')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://xpo6.com/' }
		]
	}
	else if (dtp=='20153')
	{
		dp = [                                         
			{ y: 9, label:  'code.google.com' },
			{ y: 1, label:  'https://drive.google.com/file/d/0B7l10Bj_LprhbUlI' },
			{ y: 2, label:  'sites.google.com' }
		]
	}
	else if (dtp=='20154')
	{
		dp = [                                         
			{ y: 6, label:  'github.com' }
			]
	}
	else if (dtp=='20155')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://www.sk-spell.sk.cx/tesseract-ocr-parameters-in-302-' }
		]
	}
	else if (dtp=='20156')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.khmertype.org' }
		]
	}
	else if (dtp=='20157')
	{
		dp = [                                         
			{ y: 1, label:  'https://lucene.apache.org/core/' }
			]
	}
	else if (dtp=='20158')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://www.primaresearch.org/tools/' }
		]
	}
	else if (dtp=='20159')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.digitisation.eu/download/IMPACT_D-' }
		]
	}else if (dtp=='201510')
	{
		dp = [                                         
	
			{ y: 1, label:  'http://www.villacollege.edu.mv/iri/images/thaana2' }
		]
	}
	else if (dtp=='201511')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://geeksincambodia.com/khmer-ocr-convert-' }
		]
	}
	else if (dtp=='201512')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://googlecode.blogspot.com.au/2006/08/announ' }
		]
	}
	else if (dtp=='201513')
	{
		dp = [                                         
			{ y: 1, label:  'http://ancientgreekocr.org/e29-' }
		]
	}
	else if (dtp=='201514')
	{
		dp = [                                         
			{ y: 1, label:  'http://mbr.nlm.nih.gov/Download/' },
			{ y: 2, label:  'www.ncbi.nlm.nih.gov' }
		]
	}
	else if (dtp=='201515')
	{
		dp = [                                         
			{ y: 1, label:  'http://mallet.cs.umass.edu' }
		]
	}
	else if (dtp=='201516')
	{
		dp = [                                         
			{ y: 1, label:  'http://audacity.sourceforge.net/' },
			{ y: 1, label:  'http://emu.sourceforge.net/' },
			{ y: 1, label:  'http://jldadmm.sourceforge.net/' }
		]
	}
	else if (dtp=='201517')
	{
		dp = [                                         
			{ y: 5, label: 'trove.nla.gov.au' }
		]
	}else if (dtp=='201518')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://alveo.edu.au/' }
		]
	}
	else if (dtp=='201519')
	{
		dp = [                                         
			{ y: 2, label:  'huni.net.au' }
		]
	}
	else if (dtp=='20160')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://www.cdc.gov/lyme/signs' }
		]
	}
	else if (dtp=='20161')
	{
		dp = [                                         
			
			{ y: 3, label:  'www.nltk.org' }
		]
	}
	else if (dtp=='20162')
	{
		dp = [                                         
			
			{ y: 11, label:  'github.com' }
		]
	}
	else if (dtp=='20163')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://nlp.stanford.edu/software/' }
		]
	}
	else if (dtp=='20164')
	{
		dp = [                                         
			{ y: 2, label:  'sites.google.com' },
			{ y: 1, label:  'https://code.google.com/archive/p/word2vec' },
			{ y: 1, label:  'https://news.google.com' }
		]
	}
	else if (dtp=='20165')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://ontoserver.csiro.au:8080/' }
		]
	}
	else if (dtp=='20166')
	{
		dp = [                                         
			{ y: 1, label:  'https://www.ncbi.nlm.nih' }
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
			{ y: 1, label: 'http://asmalgorithm.sourceforge.net' }
		]
	}
	else if (dtp=='20169')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://cogcomp.cs.illinois.edu/Data/QA/QC/' }
		]
	}
	else if (dtp=='201610')
	{
		dp = [                                         
			{ y: 1, label:  'http://billposer.org/Software/' }
		]
	}
	else if (dtp=='201611')
	{
		dp = [                                         
			{ y: 1, label:  'http://paradisec.org.au/' }
		]
	}
	else if (dtp=='201612')
	{
		dp = [                                         
			{ y: 1, label:  'http://scikit-learn.org/stable/index.html' }
		]
	}
	else if (dtp=='201613')
	{
		dp = [                                         
			{ y: 1, label:  'https://www.i2b2.org/NLP/Coreference/Call.php'}
		]
	}
	else if (dtp=='201614')
	{
		dp = [                                         
			{ y: 1, label:  'http://dev.twitter.com' },
			{ y: 2, label:  'twitter.com' }
		]
	}
	else if (dtp=='201615')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.geniaproject.org/' }
		]
	}
	else if (dtp=='201616')
	{
		dp = [                                         
			{ y: 1, label:  'http://pjfi.org/' }
		]
	}
	else if (dtp=='201617')
	{
		dp = [                                         
			{ y: 1, label:  'http://support.gnip.com/apis/firehose/overview.html' },
			{ y: 1, label:  'https://gnip.com/' }
		]
	}
	else if (dtp=='201618')
	{
		dp = [                                         
			{ y: 4, label:  'inclass.kaggle.com' }
		]
	}
	else if (dtp=='20170')
	{
		dp = [                                         
			
			{ y: 3, label:   'papers.nips.cc' }
		]
	}
	else if (dtp=='20171')
	{
		dp = [                                         
			
			{ y: 9, label:  'github.com' }
		]
	}
	else if (dtp=='20172')
	{
		dp = [                                         
			{ y: 14, label:   'doi.org' }
		]
	}
	else if (dtp=='20173')
	{
		dp = [                                         
			{ y: 1, label:  'http://proceedings.mlr.press/v48/kumar16.html' }
		]
	}
	else if (dtp=='20174')
	{
		dp = [                                         
			
			{ y: 6, label:  'arxiv.org' }
		]
	}
	else if (dtp=='20175')
	{
		dp = [                                         
			
			{ y: 1, label:  'https://aclanthology.info/pdf/D/D13/D13-' }
		]
	}
	else if (dtp=='20176')
	{
		dp = [                                         
			
			{ y: 1, label:   'https://www.tensorflow.org/' }
		]
	}
	else if (dtp=='20177')
	{
		dp = [                                         
			{ y: 1, label:  'http://128.2.220.95/multilingual' }
		]
	}
	else if (dtp=='20178')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.aclweb.org/anthology/P11-' },
			
			{ y: 1, label: 'http://aclweb.org/anthology/C16-1328' }
		]
	}
	else if (dtp=='20179')
	{
		dp = [                                         
			
			{ y: 4, label: 'en.wikipedia.org' }
		]
	}
	else if (dtp=='201710')
	{
		dp = [                                         
			{ y: 1, label:  'https://bitbucket.org/unimelb_nlp/' }
		]
	}
	else if (dtp=='201711')
	{
		dp = [                                         
			
			{ y: 1, label:  'https://pypi.python.org/pypi/' }
		]
	}
	else if (dtp=='201712')
	{
		dp = [                                         
			{ y: 1, label:  'http://figshare.com/articles/English_' }
		]
	}
	else if (dtp=='201713')
	{
		dp = [                                         
			{ y: 1, label:  'https://datasets.wikimedia.org/' },
			{ y: 1, label:  'https://blog.wikimedia.org/2015/11/30/artificial-' }
		]
	}
	else if (dtp=='201714')
	{
		dp = [                                         
			{ y: 1, label:  'http://lacito.vjf.cnrs.fr/pangloss/corpus/show_text_en' }
		]
	}
	else if (dtp=='201715')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://hdl.handle.net/2152/ETD-UT-2011-08-4280' }
		]
	}
	else if (dtp=='201716')
	{
		dp = [                                         
			
			{ y: 1, label:  'https://halshs.archives-ouvertes.fr/halshs-' }
		]
	}
	else if (dtp=='201717')
	{
		dp = [                                         
			{ y: 1, label:  'http://langsci-press.org/catalog/book/109' }
		]
	}
	else if (dtp=='201718')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.ethnologue.com' }
		]
	}
	else if (dtp=='201719')
	{
		dp = [                                         
			{ y: 1, label:  'https://sites.google.com/site/nikobrummer/focal' },
			{ y: 1, label:  'https://code.google.com/archive/p/' },
			{ y: 1, label:  'https://drive.google.com/drive/' }
		]
	}
	else if (dtp=='201720')
	{
		dp = [                                         
			{ y: 1, label:  'https://www.nla.gov.au/' },
			{ y: 5, label:  'trove.nla.gov.au' }
		]
	}
	else if (dtp=='20180')
	{
		dp = [                                         
		
			{ y: 1, label:  'https://www.ted.com/talks' }
		]
	}
	else if (dtp=='20181')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.statmt.org/wmt17/' }
		]
	}
	else if (dtp=='20182')
	{
		dp = [                                         
			
			{ y: 9, label:  'github.com' }
		]
	}
	else if (dtp=='20183')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://cl.haifa.ac.il/projects/pmt/' }
		]
	}
	else if (dtp=='20184')
	{
		dp = [                                         
			{ y: 2, label:  'www.cl.uni-heidelberg.de' }
		]
	}
	else if (dtp=='20185')
	{
		dp = [                                         
			
			{ y: 5, label:  'www.wipo.int' }
		]
	}
	else if (dtp=='20186')
	{
		dp = [                                         
			 
			{ y: 3, label:  'aclanthology.info' }
		]
	}
	else if (dtp=='20187')
	{
		dp = [                                         
			{ y: 18, label:  'doi.org' }
		]
	}
	else if (dtp=='20188')
	{
		dp = [                                         
			{ y: 7, label:  'arxiv.org' }
		]
	}
	else if (dtp=='20189')
	{
		dp = [                                         
			
			{ y: 8, label:  'www.aclweb.org' },
			{ y: 5, label:  'aclweb.org' }
		]
	}
	else if (dtp=='201810')
	{
		dp = [                                         
			{ y: 1, label:  'http://proceedings.mlr.press/v70/gehring17a.html' }
		]
	}
	else if (dtp=='201811')
	{
		dp = [                                         
			{ y: 1, label:  'https://transacl.org/ojs/index.php/tacl/article/view/1081' }
		]
	}
	else if (dtp=='201812')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://papers.nips.cc/paper/7181-'}
		]
	}
	else if (dtp=='201813')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.isi.edu/natural-language/mt/multi-' }
		]
	}
	else if (dtp=='201814')
	{
		dp = [                                         
			{ y: 1, label:  'http://archivo.estepais.com/site/2014/para-' }
		]
	}
	else if (dtp=='201815')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://asiapacific.anu.edu.au/mapsonline/base-' }
		]
	}
	else if (dtp=='201816')
	{
		dp = [                                         
			{ y: 1, label: 'http://catalog.paradisec.org.au/collections/SN1' }
		]
	}
	else if (dtp=='201817')
	{
		dp = [                                         
			{ y: 1, label:  'https://fasttext.cc/docs/en/english-vectors.html' }
		]
	}
	else if (dtp=='201818')
	{
		dp = [                                         
			{ y: 1, label:  'http://download.tensorflow.org/data/questions-words.txt' }
		]
	}
	else if (dtp=='201819')
	{
		dp = [                                         
			{ y: 5, label:  'http://www.cs.man.ac.uk/ezolin/dl/' }
		]
	}
	else if (dtp=='201820')
	{
		dp = [                                         
			
			{ y: 3, label:   'www.kaggle.com' }
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