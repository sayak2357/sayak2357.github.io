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
		name: "Avg. number of Papers per Author per Year",
		dataPoints: [
			
			
			
			{ y: 0.463, x: new Date(2000,0) },
			{ y: 0.50, x: new Date(2001,0) },
			
			{ y: 0.318, x: new Date(2003,0) },
			{ y: 0.28, x: new Date(2004,0) },
			
			{ y: 0.3633, x: new Date(2006,0) },
			{ y: 0.375, x: new Date(2007,0) },
			
			{ y: 0.296, x: new Date(2009,0) },
			{ y: 0.358, x: new Date(2010,0) },
			
			{ y: 0.345, x: new Date(2012,0) },
			{ y: 0.3267, x: new Date(2013,0) },
			
			{ y: 0.293, x: new Date(2015,0) },
			{ y: 0.2718, x: new Date(2016,0) },
			
			{ y: 0.258, x: new Date(2018,0) }
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
			
			
			
			{ y: 2.157, x: new Date(2000,0) },
			{ y: 1.967, x: new Date(2001,0) },
			
			{ y: 3.139, x: new Date(2003,0) },
			{ y: 3.571, x: new Date(2004,0) },
			
			{ y: 2.752, x: new Date(2006,0) },
			{ y: 2.661, x: new Date(2007,0) },
			
			{ y: 3.372, x: new Date(2009,0) },
			{ y: 2.792, x: new Date(2010,0) },
			
			{ y: 2.89, x: new Date(2012,0) },
			{ y: 3.06, x: new Date(2013,0) },
			
			{ y: 3.412, x: new Date(2015,0) },
			{ y: 3.678, x: new Date(2016,0) },
			
			{ y: 3.866, x: new Date(2018,0) }
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
			
			
			
			{ y: 6.89, x: new Date(2000,0) },
			{ y: 9.548, x: new Date(2001,0) },    
			
			{ y: 16.108, x: new Date(2003,0) },
			{ y: 22.23, x: new Date(2004,0) },
			
			{ y: 17.56, x: new Date(2006,0) },
			{ y: 24.84, x: new Date(2007,0) },
			
			{ y: 24.25, x: new Date(2009,0) },
			{ y: 20.7671, x: new Date(2010,0) },
			
			{ y: 25.51, x: new Date(2012,0) },
			{ y: 28.342, x: new Date(2013,0) },
			
			{ y: 29.021, x: new Date(2015,0) },
			{ y: 31.9, x: new Date(2016,0) },
			
			{ y: 42.45, x: new Date(2018,0) }
		]
		},


		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Short Papers",
			color: "#C00C0C",
			dataPoints: [
			
			
			
			
			
			{ y: 9.651, x: new Date(2000,0) },
			{ y: 0, x: new Date(2001,0) },
			
			{ y: 7.789, x: new Date(2003,0) },
			{ y: 0, x: new Date(2004,0) },
			
			{ y: 10.80, x: new Date(2006,0) },
			{ y: 10.52, x: new Date(2007,0) },         
			
			{ y: 14.25, x: new Date(2009,0) },
			{ y: 0, x: new Date(2010,0) },
			
			{ y: 0, x: new Date(2012,0) },
			{ y: 0, x: new Date(2013,0) },
			
			{ y: 0, x: new Date(2015,0) },
			{ y: 0, x: new Date(2016,0) },
			
			{ y: 29.272, x: new Date(2018,0) }
			
			
			
			
			]
	},
	{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Demo Papers",
			color: "#309000",
			dataPoints: [
			
			
			
			
			
			{ y: 0, x: new Date(2000,0) },
			{ y: 0, x: new Date(2001,0) },
			
			{ y: 3.35, x: new Date(2003,0) },
			{ y: 8.76, x: new Date(2004,0) },      
			
			{ y: 6.83, x: new Date(2006,0) },
			{ y: 0, x: new Date(2007,0) },
			
			{ y: 6, x: new Date(2009,0) },
			{ y: 15.6, x: new Date(2010,0) },
			
			{ y: 25.0, x: new Date(2012,0) },
			{ y: 11, x: new Date(2013,0) },
			
			{ y: 12.24, x: new Date(2015,0) },
			{ y: 14.47, x: new Date(2016,0) },
			
			{ y: 29, x: new Date(2018,0) }
			
			
			
			
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
		name: "Avg. number of URLs per Paper per Year",
		dataPoints: [
			
			
			
			{ y: 0.4044, x: new Date(2000,0) },
			{ y: 0.275, x: new Date(2001,0) },
			
			{ y: 0.533, x: new Date(2003,0) },   
			{ y: 0.875, x: new Date(2004,0) },
			
			{ y: 1.380, x: new Date(2006,0) },
			{ y: 0.968, x: new Date(2007,0) },
			
			{ y: 1.071, x: new Date(2009,0) },
			{ y: 1.38, x: new Date(2010,0) },
			
			{ y: 1.463, x: new Date(2012,0) },
			{ y: 1.88, x: new Date(2013,0) },
			
			{ y: 2.33, x: new Date(2015,0) },
			{ y: 1.99, x: new Date(2016,0) },
			
			{ y: 5.077, x: new Date(2018,0) }
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
		name: "Avg. number of URLs in Footnote per Paper per Year",
		dataPoints: [
			
			
			
			{ y: 0.0, x: new Date(2000,0) },
			{ y: 0.066, x: new Date(2001,0) },
			
			{ y: 0.097, x: new Date(2003,0) },   
			{ y: 0.333, x: new Date(2004,0) },
			
			{ y: 0.532, x: new Date(2006,0) },    
			{ y: 0.605, x: new Date(2007,0) },
			
			{ y: 0.76, x: new Date(2009,0) },
			{ y: 0.765, x: new Date(2010,0) },
			
			{ y: 0.75, x: new Date(2012,0) },
			{ y: 1.079, x: new Date(2013,0) },
			
			{ y: 1.19, x: new Date(2015,0) },
			{ y: 1.223, x: new Date(2016,0) },
			
			{ y: 1.475, x: new Date(2018,0) }
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
		name: "Avg. number of Tables per Paper per Year",
		dataPoints: [
			
			
			
			{ y: 2.37, x: new Date(2000,0) },
			{ y: 1.689, x: new Date(2001,0) },
			
			{ y: 2.069, x: new Date(2003,0) },  
			{ y: 4.38, x: new Date(2004,0) },
			
			{ y: 3.19, x: new Date(2006,0) },    
			{ y: 3.18, x: new Date(2007,0) },
			
			{ y: 3.57, x: new Date(2009,0) },
			{ y: 3.06, x: new Date(2010,0) },
			
			{ y: 3.247, x: new Date(2012,0) },
			{ y: 3.697, x: new Date(2013,0) },
			
			{ y: 3.978, x: new Date(2015,0) },
			{ y: 3.212, x: new Date(2016,0) },
			
			{ y: 4.407, x: new Date(2018,0) }
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
		name: "Avg. number of Figures per Paper per Year",
		dataPoints: [
			
			
			
			{ y: 5.79, x: new Date(2000,0) },
			{ y: 3.310, x: new Date(2001,0) },      
			
			{ y: 4.45, x: new Date(2003,0) },  
			{ y: 7.45, x: new Date(2004,0) },
			
			{ y: 6.98, x: new Date(2006,0) },    
			{ y: 5.66, x: new Date(2007,0) },
			
			{ y: 6.88, x: new Date(2009,0) },
			{ y: 5.46, x: new Date(2010,0) },
			
			{ y: 5.72, x: new Date(2012,0) },
			{ y: 6.22, x: new Date(2013,0) },
			
			{ y: 6.717, x: new Date(2015,0) },
			{ y: 5.586, x: new Date(2016,0) },
			
			{ y: 7.561, x: new Date(2018,0) }
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
		name: "NAACL: Most Popular primary URL domains & their Frequencies",
		legendText: "",
		dataPoints: [      
			{ y: 559, label: 'www.aclweb.org' },   
			{ y: 374,label: 'github.com' },
			{ y: 151,  label: 'arxiv.org' },
			{ y: 79,  label: 'dl.acm.org'  },
			{ y: 82,  label: 'code.google.com' },
			{ y: 60, label: 'nlp.stanford.edu' },
			{ y: 40,  label: 'www.statmt.org' },
			{ y: 33, label: 'en.wikipedia.org' },
			{ y: 22,  label: 'research.microsoft.com' },
			{ y: 22,  label: 'mallet.cs.umass.edu' },
			{ y: 22,  label: 'papers.nips.cc ' },
			{ y: 63,  label: 'upenn.edu' },
			{ y: 19, label: 'www.isi.edu' },
			{ y: 47,  label: 'nist.gov' },
			{ y: 44,  label: 'cs.cmu.edu' },
			{ y: 16, label: 'bitbucket.org' },
			{ y: 14,  label: 'www.csie.ntu.edu.tw' },
			{ y: 11,  label: 'svmlight.joachims.org' },
			{ y: 11,  label: 'aclanthology.info' },
			{ y: 10,  label: 'wordnet.princeton.edu' }
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
		name: "ACL : Top Unique GitHub Pages",
		legendText: "",
		dataPoints: [      
			{ y: 5, label: 'UKPLab/' },
			{ y: 5,label: 'facebookresearch/' },
			{ y: 4,  label: 'saffsd/langid.py' },
			{ y: 4,  label: 'nyu-dl/dl4mt-tutorial' },
			{ y: 3,  label: 'ygraham/' },
			{ y: 3, label: 'moses-smt/' },
			{ y: 2,  label: 'masha-p/PPRforNED' },
			{ y: 2, label: 'syllog1sm/redshift' },
			{ y: 2,  label: 'taolei87/RBGParser' },
			{ y: 2,  label: 'pks/cdec-dtrain' },
			{ y: 2,  label: 'coastalcph/rungsted' },
			{ y: 2,  label: 'slavpetrov/' },
			{ y: 2, label: 'HIPS/Spearmint' },
			{ y: 2,  label: 'clab/cnn/' },
			{ y: 2,  label: 'smartschat/cort' },
			{ y: 2, label: 'acocos/' },
			{ y: 2,  label: 'hadyelsahar/ ' },
			{ y: 2,  label: 'allenai/citeomatic' },
			{ y: 2,  label: 'hyperopt/hyperopt' },
			{ y: 2,  label: 'leuchine/ ' }
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
		name: "NAACL : Top University Pages",
		legendText: "",
		dataPoints: [                                         
			{ y: 30, label: 'Stanford University' },
			{ y: 24,label: 'University of Washington' },
			{ y: 23,  label: 'UC Berkeley' },
			{ y: 21,  label: 'Carnegie Mellon University Silicon Valley' },
			{ y: 20,  label: 'Columbia University' }, 
			{ y: 18, label: 'Johns Hopkins Hospital' },
			{ y: 17,  label: 'Microsoft Research' },
			{ y: 17, label: 'Penn Museum' },
			{ y: 16,  label: 'University of Edinburgh' },
			{ y: 16,  label: 'University of Southern California' },
			{ y: 16,  label: 'Brown University' },
			{ y: 13,  label: 'The Grand Garage' },
			{ y: 12, label: 'AT&T' },
			{ y: 12,  label: 'University of Pittsburgh' },
			{ y: 12,  label: 'Carnegie Mellon University' },
			{ y: 11, label: 'Institute of Scientific Information on Social Sciences of the Russian Academy of Sciences' },
			{ y: 11,  label: 'Cornell University' }
			
		
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
			
			
			
			{ y: 35, x: new Date(2000,0) },    
			{ y: 7, x: new Date(2001,0) },
			{ y: 0, x: new Date(2002,0) },
			{ y: 68, x: new Date(2003,0) },
			{ y: 91, x: new Date(2004,0) },
			{ y: 0, x: new Date(2005,0) },
			{ y: 29, x: new Date(2006,0) },
			{ y: 28, x: new Date(2007,0) },
			{ y: 0, x: new Date(2008,0) },
			{ y: 29, x: new Date(2009,0) },
			{ y: 48, x: new Date(2010,0) },
			{ y: 0, x: new Date(2011,0) },
			{ y: 28, x: new Date(2012,0) },
			{ y: 42, x: new Date(2013,0) },
			{ y: 0, x: new Date(2014,0) },
			{ y: 56, x: new Date(2015,0) },
			{ y: 48, x: new Date(2016,0) },
			{ y: 0, x: new Date(2017,0) },
			{ y: 80, x: new Date(2018,0) }
		]
		},


		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "UK",
			color: "#e3f702",
			dataPoints: [
			
			
			
			
			
			{ y: 10, x: new Date(2000,0) },
			{ y: 0, x: new Date(2001,0) },
			{ y: 0, x: new Date(2002,0) },
			{ y: 2, x: new Date(2003,0) },
			{ y: 10, x: new Date(2004,0) },               
			{ y: 0, x: new Date(2005,0) },
			{ y: 2, x: new Date(2006,0) },
			{ y: 7, x: new Date(2007,0) },
			{ y: 0, x: new Date(2008,0) },
			{ y: 8, x: new Date(2009,0) },
			{ y: 9, x: new Date(2010,0) },
			{ y: 0, x: new Date(2011,0) },
			{ y: 2, x: new Date(2012,0) },
			{ y: 9, x: new Date(2013,0) },
			{ y: 0, x: new Date(2014,0) },
			{ y: 6, x: new Date(2015,0) },
			{ y: 3, x: new Date(2016,0) },
			{ y: 0, x: new Date(2017,0) },
			{ y: 19, x: new Date(2018,0) }
			
			
			
			
			]
	},
	
		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Australia",
			color: "#157539",
			dataPoints: [
			
			
			
			
			
			{ y: 1, x: new Date(2000,0) },
			{ y: 0, x: new Date(2001,0) },
			{ y: 0, x: new Date(2002,0) },
			{ y: 0, x: new Date(2003,0) },
			{ y: 2, x: new Date(2004,0) },
			{ y: 0, x: new Date(2005,0) },
			{ y: 0, x: new Date(2006,0) },
			{ y: 2, x: new Date(2007,0) },          
			{ y: 0, x: new Date(2008,0) },
			{ y: 1, x: new Date(2009,0) },
			{ y: 3, x: new Date(2010,0) },
			{ y: 0, x: new Date(2011,0) },
			{ y: 1, x: new Date(2012,0) },
			{ y: 0, x: new Date(2013,0) },
			{ y: 0, x: new Date(2014,0) },
			{ y: 1, x: new Date(2015,0) },
			{ y: 8, x: new Date(2016,0) },
			{ y: 0, x: new Date(2017,0) },
			{ y: 3, x: new Date(2018,0) }
			
			
			
			
			]
	},
	{        
			type: "stackedColumn",
			showInLegend: true,
			name: "India",
			color: "#f70202",
			dataPoints: [
			
			
			
			
			
			{ y: 4, x: new Date(2000,0) },
			{ y: 0, x: new Date(2001,0) },
			{ y: 0, x: new Date(2002,0) },
			{ y: 7, x: new Date(2003,0) },
			{ y: 3, x: new Date(2004,0) },        
			{ y: 0, x: new Date(2005,0) },
			{ y: 3, x: new Date(2006,0) },
			{ y: 2, x: new Date(2007,0) },
			{ y: 0, x: new Date(2008,0) },
			{ y: 2, x: new Date(2009,0) },
			{ y: 5, x: new Date(2010,0) },
			{ y: 0, x: new Date(2011,0) },
			{ y: 0, x: new Date(2012,0) },
			{ y: 1, x: new Date(2013,0) },
			{ y: 0, x: new Date(2014,0) },
			{ y: 3, x: new Date(2015,0) },
			{ y: 1, x: new Date(2016,0) },
			{ y: 0, x: new Date(2017,0) },
			{ y: 3, x: new Date(2018,0) }
			
			
			
			
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
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		if (dt==2000)
		{
		
		dp = [                                         
			{ y: 3, label: 'nist.gov' },                                             
			{ y: 2, label: 'saic.com' },
			{ y: 2, label: 'uva.nl' },
			{ y: 3, label: 'uia.ac.be' },
			{ y: 2, label: 'uni-sb.de' },
			{ y: 1, label: 'umd.edu' },
			{ y: 1, label: 'sunrain.net' },
			{ y: 1, label: 'www.readworld.com' },
			{ y: 1, label: 'www.mindspring.com' },
			{ y: 1, label: 'liu.se' },
			{ y: 1, label: 'ogi.edu' },
			{ y: 1, label: 'www.nuance.com' },
			{ y: 1, label: 'nasa.gov' },
			{ y: 1, label: 'www.isi.edu' },
			{ y: 1, label: 'www.sgi.com' },
			{ y: 1, label: 'www.sun.com' },
			{ y: 1, label: 'nyu.edu' },
			{ y: 1, label: 'jussieu.fr' },
			{ y: 1, label: 'www.onelook.com' },
			{ y: 1, label: 'www.jstor.org' },
			{ y: 1, label: 'www.benton.org' }
			
		]
		}
		else if(dt==2001){
			
			dp = [                                         
			{ y: 1, label: 'att.com' },                                
			{ y: 1, label: 'www.cogsci.ed.ac.uk' },
			{ y: 1, label: 'mit.edu' },
			{ y: 1, label: 'upenn.edu' },
			{ y: 1, label: 'xxx.lanl.gov' },
			{ y: 1, label: 'uchicago.edu' },
			{ y: 1, label: 'uia.ac.be' },
			{ y: 1, label: 'cl.aist-nara.ac.jp' }
			
			
		]
		}
		else if(dt==2003){
			dp = [                                         
			{ y: 4, label: 'www.isi.edu' },                        
			{ y: 4, label: 'stanford.edu' },
			{ y: 4, label: 'nist.gov' },
			{ y: 2, label: 'berkeley.edu' },
			{ y: 2, label: 'columbia.edu' },
			{ y: 1, label: 'cornell.edu' },
			{ y: 1, label: 'www.ldc.org' },
			{ y: 1, label: 'umich.edu' },
			{ y: 3, label: 'umd.edu' },
			{ y: 1, label: 'www.keenage.com' },
			{ y: 1, label: 'nec.com' },
			{ y: 1, label: 'princeton.edu' },
			{ y: 1, label: 'www.xerox.fr' },
			{ y: 1, label: 'washington.edu' },
			{ y: 1, label: 'att.com' },
			{ y: 1, label: 'sri.com' },
			{ y: 1, label: 'mit.edu' },
			{ y: 1, label: 'arXiv.org' },
			{ y: 1, label: 'upenn.edu' },
			{ y: 1, label: 'yahoo.com' }
			
			
		]
		}
		else if(dt==2004){
			dp = [                                         
			{ y: 8, label: 'aist-nara.ac.jp' },      
			{ y: 9, label: 'upenn.edu' },
			{ y: 11, label: 'www.nist.gov' },
			{ y: 3, label: 'www.isi.edu' },
			{ y: 2, label: 'www2.parc.com' },
			{ y: 2, label: 'jhu.edu' },
			{ y: 2, label: 'festvox.org' },
			{ y: 2, label: 'u-tokyo.ac.jp' },
			{ y: 5, label: 'sourceforge.net' },
			{ y: 2, label: 'microsoft.com' },
			{ y: 2, label: 'cpan.org' },
			{ y: 1, label: 'www.readinga-z.com' },
			{ y: 2, label: 'uvt.nl' },
			{ y: 1, label: 'www.bbn.com' },
			{ y: 1, label: 'www.iknowsys.org' },
			{ y: 1, label: 'www.psychometricsociety.org' },
			{ y: 1, label: 'www.goo.ne.jp' },
			{ y: 2, label: 'mit.edu' },
			{ y: 1, label: 'www.cogs'},
			{ y: 1, label: 'cs.columbia.edu/' }
			
			
		]
		}
		else if(dt==2006){
			dp = [     
			{ y: 14, label: 'www.nist.gov' },      
			{ y: 6, label: 'www.lycos.com' },
			{ y: 6, label: 'upenn.edu' },
			{ y: 4, label: 'www.aclweb.org' },
			{ y: 3, label: 'www.pascal-network.org' },
			{ y: 3, label: 'microsoft.com' },
			{ y: 5, label:  'wikipedia.org' },
			{ y: 3, label: 'umass.edu' },
			{ y: 3, label: 'ntu.edu.tw' },
			{ y: 3, label: 'asked.jp' },
			{ y: 2, label: 'www.fjoch.com' },
			{ y: 2, label: 'www.senseval.org' },
			{ y: 3, label: 'mit.edu' },
			{ y: 2, label: 'www.acronymsearch.com' },
			{ y: 10, label: 'sourceforge.net' },
			{ y: 2, label: 'www.isi.edu' },
			{ y: 1, label: 'l2r.cs.uiuc.edu' },
			{ y: 6, label: 'cmu.edu' },
			{ y: 2, label: 'www.ldc.org'},
			{ y: 4, label: 'stanford.edu'}
			
			
		]
			
		}
		else if(dt==2007)
		{
			dp = [     
			{ y: 4, label: 'hut.fi' },
			{ y: 4, label: 'mit.edu' },
			{ y: 5, label: 'nih.gov' },
			{ y: 3, label: 'ntu.edu.tw' },
			{ y: 6, label: 'www.nist.gov' },
			{ y: 6, label: 'upenn.edu' },
			{ y: 2, label:  'svmlight.joachims.org' },
			{ y: 2, label: 'uniroma2.it' },
			{ y: 2, label: 'microsoft.com' },
			{ y: 2, label: 'www.senseval.org' },
			{ y: 2, label: 'www.lemurproject.org' },
			{ y: 2, label: 'sri.com' },
			{ y: 2, label: 'google.com' },
			{ y: 3, label: 'mitre.org' },
			{ y: 2, label: 'www.isi.edu' },
			{ y: 2, label: 'nyu.edu' },
			{ y: 2, label: 'aist-nara.ac.jp' },
			{ y: 2, label: 'www.alias-i.com' },
			{ y: 1, label: 'att.com'},
			{ y: 2, label: 'festvox.org'}
			
			
		]
		}
		else if(dt==2009)
		{
			dp = [     
			{ y: 13, label: 'www.nist.gov' },
			{ y: 5, label: 'www.statmt.org' },
			{ y: 4, label: 'pitt.edu' },
			{ y: 4, label: 'wikipedia.org' },
			{ y: 9, label: 'upenn.edu' },
			{ y: 4, label: 'www.sigir2009.org' },
			{ y: 3, label:  'svmlight.joachims.org' },
			{ y: 3, label: 'www.isi.edu' },
			{ y: 4, label: 'google.com' },
			{ y: 3, label: 'microsoft.com' },
			{ y: 3, label: 'hut.fi' },
			{ y: 2, label: 'cpan.org' },
			{ y: 2, label: 'brown.edu' },
			{ y: 6, label: 'sourceforge.net' },
			{ y: 2, label: 'patrickpantel.com' },
			{ y: 2, label: 'cmu.edu' },
			{ y: 2, label: 'kyoto-u.ac.jp' },
			{ y: 2, label: 'www.merriam-webster.com' },
			{ y: 2, label: 'www.sigir2004.org'},
			{ y: 2, label: 'www.sigir.org'},
			{ y: 2, label: 'www.sigir2008.org'}
			
			
		]
		}
		else if(dt==2010)
		{
			dp = [     
			{ y: 15, label: 'www.nist.gov' },
			{ y: 5, label: 'ntu.edu.tw' },
			{ y: 7, label: 'www.statmt.org' },
			{ y: 4, label: 'nih.gov' },
			{ y: 4, label: 'homepages.inf.ed.ac.uk' },
			{ y: 5, label: 'upenn.edu' },
			{ y: 5, label: 'stanford.edu' },
			{ y: 4, label: 'microsoft.com' },
			{ y: 8, label: 'google.com' },
			{ y: 3, label: 'uiuc.edu' },
			{ y: 10, label: 'sourceforge.net' },
			{ y: 3, label: 'pitt.edu' },
			{ y: 5, label: 'usp.br' },
			{ y: 2, label: 'u-tokyo.ac.jp' },
			{ y: 4, label: 'bbc.co.uk' },
			{ y: 2, label: 'wikipedia.org' },
			{ y: 3, label: 'www.mturk.com' },
			{ y: 2, label: 'waikato.ac.nz' },
			{ y: 5, label: 'cmu.edu'},
			{ y: 2, label: 'vxu.se'}
			
			
		]
		}
		else if(dt==2012)
		{
			dp = [     
			{ y: 5, label: 'umass.edu' },
			{ y: 3, label: 'github.com' },
			{ y: 5, label: 'nist.gov' },
			{ y: 3, label: 'www.statmt.org' },
			{ y: 3, label: 'microsoft.com' },
			{ y: 4, label: 'www.mturk.com' },
			{ y: 2, label: 'waikato.ac.nz' },
			{ y: 2, label: 'york.ac.uk' },
			{ y: 4, label: 'sourceforge.net' },
			{ y: 3, label: 'wikipedia.org' },
			{ y: 2, label: 'tkk.fi' },
			{ y: 2, label: 'chasen.org' },
			{ y: 2, label: 'homepages.inf.ed.ac.uk' },
			{ y: 1, label: 'www.bartleby.com' },
			{ y: 2, label: 'nextens.uvt.nl' },
			{ y: 1, label: 'www.sampottsinc.com' },
			{ y: 2, label: 'stanford.edu' },
			{ y: 3, label: 'apache.org' },
			{ y: 4, label: 'google.com' },
			{ y: 2, label: 'dbpedia.org' }
			
			
		]
		}
		else if(dt==2013)
		{
			dp = [     
			{ y: 14, label: 'github.com' },
			{ y: 15, label: 'google.com' },
			{ y: 9, label: 'wikipedia.org' },
			{ y: 10, label: 'stanford.edu' },
			{ y: 7, label: 'umass.edu' },
			{ y: 10, label: 'cmu.edu' },
			{ y: 5, label:  'www.statmt.org' },
			{ y: 7, label: 'upenn.edu' },
			{ y: 3, label: 'lth.se' },
			{ y: 7, label: 'www.nist.gov' },
			{ y: 3, label: 'tu-darmstadt.de' },
			{ y: 2, label: 'svmlight.joachims.org' },
			{ y: 8, label: 'sourceforge.net' },
			{ y: 2, label: 'soton.ac.uk' },
			{ y: 3, label: 'mit.edu' },
			{ y: 4, label: 'twitter.com' },
			{ y: 4, label: 'microsoft.com' },
			{ y: 2, label: 'www.cs.cornell' },
			{ y: 2, label: 'festvox.org' },
			{ y: 2, label: 'wiktionary.org' }
			
			
		]
		}
		else if(dt==2015)
		{
			dp = [     
			{ y: 58, label: 'github.com' }, 
			{ y: 33, label: 'google.com' },
			{ y: 15, label: 'stanford.edu' },
			{ y: 10, label: 'arxiv.org' },
			{ y: 10, label: 'wikipedia.org' },
			{ y: 8, label: 'umass.edu' },
			{ y: 6, label:  'microsoft.com' },
			{ y: 7, label: 'princeton.edu' },
			{ y: 10, label: 'statmt.org' },
			{ y: 19, label: 'cmu.edu' },
			{ y: 5, label: 'cuni.cz' },
			{ y: 4, label: 'apache.org' },
			{ y: 3, label: 'goo.gl' },
			{ y: 15, label: 'upenn.edu' },
			{ y: 4, label: 'www.gurobi.com' },
			{ y: 4, label: 'bitbucket.org' },
			{ y: 8, label: 'nist.gov' },
			{ y: 3, label: 'www.crowdflower.com' },            
			{ y: 3, label: 'www.ssa.gov' },
			{ y: 3, label: 'ml.nec-labs.com' }
			
		]
		}
		else if(dt==2016)
		{
			dp = [     
			{ y: 70, label: 'github.com' }, 
			{ y: 27, label: 'google.com' },
			{ y: 12, label: 'stanford.edu' },
			{ y: 9, label: 'www.statmt.org' },
			{ y: 8, label: 'bitbucket.org' },
			{ y: 6, label: 'qcri.org' },
			{ y: 11, label:  'upenn.edu' },
			{ y: 10, label: 'cmu.edu' },
			{ y: 4, label: 'arxiv.org' },
			{ y: 4, label: 'radimrehurek.com' },
			{ y: 4, label: 'tinyurl.com' },
			{ y: 4, label: 'cnts.ua.ac.be' },
			{ y: 4, label: 'lmu.de' },
			{ y: 2, label: 'twitter.com' },
			{ y: 4, label: 'www.crowdflower.com' },
			{ y: 3, label: 'stackexchange.com' },
			{ y: 2, label: 'kyoto-u.ac.jp' },
			{ y: 2, label: 'opensubtitles.org' },            
			{ y: 2, label: 'clg.ox.ac.uk' },
			{ y: 2, label: 'usyd.edu.au' },
			{ y: 3, label: 'isi.edu' }
			
		]
		}
		else if(dt==2018)
		{
			dp = [     
			{ y: 257, label: 'github.com' },
			{ y: 489, label: 'aclweb.org' },
			{ y: 136, label: 'arxiv.org' },
			{ y: 79, label: 'acm.org' },
			{ y: 34, label: 'stanford.edu' },
			{ y: 24, label: 'nips.cc' },
			{ y: 30, label:  'google.com' },
			{ y: 11, label: 'aclanthology.info' },
			{ y: 14, label: 'transacl.org' },
			{ y: 10, label: 'statmt.org' },
			{ y: 10, label: 'wikipedia.org' },
			{ y: 7, label: 'reddit.com' },
			{ y: 7, label: 'cogcomp.org' },
			{ y: 7, label: 'nltk.org' },
			{ y: 7, label: 'jhu.edu' },
			{ y: 7, label: 'jmlr.org' },
			{ y: 9, label: 'upenn.edu' },
			{ y: 9, label: 'aaai.org' },            
			{ y: 6, label: 'spacy.io' },
			{ y: 8, label: 'wikimedia.org' },
			{ y: 8, label: 'twitter.com' }
			
		]
		}
		else
		{
			dp = [                                         
			{ y: 1, label: 'sayak' },  
			
			
		]
		}
		
	
	var chart = new CanvasJS.Chart(res, {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	height: 320,
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
			{ y: 2, label: 'trec.nist.gov'},
			{ y: 1, label: 'http://www-nlpir.nist.gov/related-'}
			
		]
	}
	else if (dtp=='20001')
	{
		dp = [                                         
			{ y: 2, label: 'www.muc.saic.com'}
			
		]
	}
	else if (dtp=='20002')
	{
		dp = [                                         
			{ y: 2, label: 'www.hum.uva.nl'}
			
		]
	}
	else if (dtp=='20003')
	{
		dp = [                                         
			{ y: 2, label: 'lcg-www.uia.ac.be'}
			
		]
	}
	else if (dtp=='20004')
	{
		dp = [                                         
			{ y: 2, label: 'www.coli.uni-sb.de'}
			
		]
	}
	else if (dtp=='20005')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.clis.umd.edu/dlrg/filter/sss/papers'}
			
		]
	}
	else if (dtp=='20006')
	{
		dp = [                                         
			{ y: 1, label: 'http://sunrain.net/r_ecdict'}
			
		]
	}
	else if (dtp=='20007')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.readworld.com/translate.htm'}
			
		]
	}
	else if (dtp=='20008')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.mindspring.com/' }
			
		]
	}
	else if (dtp=='20009')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.ida.liu.se/~arnjo/kfb/dialoger.html' }
			
		]
	}
	else if (dtp=='200010')
	{
		dp = [                                         
			{ y: 1, label: 'http://cslu.cse.ogi.edu/HLTsurvey/HLTsurvey.html' }
			
		]
	}
	else if (dtp=='200011')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.nuance.com' }
			
		]
	}
	else if (dtp=='200012')
	{
		dp = [                                         
			{ y: 1, label: 'http://ic.arc.nasa.gov/ic/psa/' }
			
		]
	}
	else if (dtp=='200013')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.isi.edu/~marcu/software/' }
			
		]
	}
	else if (dtp=='200014')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.sgi.com/Technology/mlc' }
			
		]
	}
	else if (dtp=='200015')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.sun.com' }
			
		]
	}
	else if (dtp=='200016')
	{
		dp = [                                         
			{ y: 1, label: 'http://cs.nyu.edu/cs/projects/proteus/sekine/' }
			
		]
	}
	else if (dtp=='200017')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.ladl.jussieu.fr/index.html' }
			
		]
	}
	else if (dtp=='200018')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.onelook.com' }
			
		]
	}
	else if (dtp=='200019')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.jstor.org/' }
			
		]
	}
	else if (dtp=='200020')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.benton.org' }
			
		]
	}
	else if (dtp=='20010')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.research.att.com/' }
			
		]
	}
	else if (dtp=='20011')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cogsci.ed.ac.uk/sigphon' }
			
		]
	}
	else if (dtp=='20012')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.ai.mit.edu/jrennie' }
			
		]
	}
	else if (dtp=='20013')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cis.upenn.edu/~' }
			
		]
	}
	else if (dtp=='20014')
	{
		dp = [                                         
			{ y: 1, label: 'http://xxx.lanl.gov/abs/cmp-lg/9805001' }
			
		]
	}
	else if (dtp=='20015')
	{
		dp = [                                         
			{ y: 1, label: 'http://humanities.uchicago.edu/faculty/goldsmith' }
			
		]
	}
	else if (dtp=='20016')
	{
		dp = [                                         
			{ y: 1, label: 'http://lcg-www.uia.ac.be/conll2000/chunking/' }
			
		]
	}
	else if (dtp=='20017')
	{
		dp = [                                         
			{ y: 1, label: 'http://cl.aist-nara.ac.jp/' }
			
		]
	}
	else if (dtp=='20030')
	{
		dp = [                                         
			{ y: 4, label: 'www.isi.edu' }
			
		]
	}
	else if (dtp=='20031')
	{
		dp = [                                         
			{ y: 3, label: 'infomap.stanford.edu' },
			{ y: 1, label: 'http://www-psych.stanford.edu/' }
			
		]
	}
	else if (dtp=='20032')
	{
		dp = [                                         
			{ y: 2, label: 'duc.nist.gov' },
			{ y: 2, label: 'trec.nist.gov' }
			
		]
	}
	else if (dtp=='20033')
	{
		dp = [                                         
			{ y: 2, label: 'www.icsi.berkeley.edu' }
			
		]
	}
	else if (dtp=='20034')
	{
		dp = [                                         
			{ y: 2, label: 'newsblaster.cs.columbia.edu' }
			
		]
	}
	else if (dtp=='20035')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cs.cornell.edu/Info/Projects/' }
			
		]
	}
	else if (dtp=='20036')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.ldc.org' }
			
		]
	}
	else if (dtp=='20037')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.eecs.umich.edu/~qstout/586/bncfreq.html' }
			
		]
	}
	else if (dtp=='20038')
	{
		dp = [                                         
			{ y: 1, label: 'http://clipdemos.umiacs.umd.edu/catvar/' },
			{ y: 1, label: 'http://www.umiacs.umd.edu/' },
			{ y: 1, label: 'http://www.clis2.umd.edu/conferences/midas/papers/' }
			
		]
	}
	else if (dtp=='20039')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.keenage.com' }
			
		]
	}
	else if (dtp=='200310')
	{
		dp = [                                         
			{ y: 1, label: 'http://citeseer.nj.nec.com/19299.html' }
			
		]
	}
	else if (dtp=='200311')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cogsci.princeton.edu/wn' }
			
		]
	}
	else if (dtp=='200312')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.xerox.fr' }
			
		]
	}
	else if (dtp=='200313')
	{
		dp = [                                         
			{ y: 1, label: 'http://ssli.ee.washington.edu/' }
			
		]
	}
	else if (dtp=='200314')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.research.att.com/sw/tools/fsm/' }
			
		]
	}
	else if (dtp=='200315')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.speech.sri.com/projects/srilm/' }
			
		]
	}
	else if (dtp=='200316')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.ai.mit.edu/' }
			
		]
	}
	else if (dtp=='200317')
	{
		dp = [                                         
			{ y: 1, label: 'http://arXiv.org/abs/cs/0105019' }
			
		]
	}
	else if (dtp=='200318')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.ldc.upenn.edu/Catalog/CatalogEntry.jsp?' }
			
		]
	}
	else if (dtp=='200319')
	{
		dp = [                                         
			{ y: 1, label: 'http://fullcoverage.yahoo.com' }
			
		]
	}
	else if (dtp=='20040')
	{
		dp = [                                         
			{ y: 8, label: 'cl.aist-nara.ac.jp' }
			
		]
	}
	else if (dtp=='20041')
	{
		dp = [                                         
			{ y: 7, label: 'www.ldc.upenn.edu' },
			{ y: 2, label: 'www.cis.upenn.edu' }
			
		]
	}
	else if (dtp=='20042')
	{
		dp = [                                         
			{ y: 6, label: 'www.nist.gov' },
			{ y: 4, label:  'www.itl.nist.gov' },
			{ y: 1, label: 'http://duc.nist.gov/' }
			
		]
	}
	else if (dtp=='20043')
	{
		dp = [                                         
			{ y: 3, label: 'www.isi.edu' }
			
		]
	}
	else if (dtp=='20044')
	{
		dp = [                                         
			{ y: 2, label: 'www2.parc.com' }
			
		]
	}
	else if (dtp=='20045')
	{
		dp = [                                         
			{ y: 2, label: 'www.clsp.jhu.edu' }
			
		]
	}
	else if (dtp=='20046')
	{
		dp = [                                         
			{ y: 2, label: 'festvox.org' }
			
		]
	}
	else if (dtp=='20047')
	{
		dp = [                                         
			{ y: 2, label: 'www.kc.t.u-tokyo.ac.jp' }
			
		]
	}
	else if (dtp=='20048')
	{
		dp = [                                         
			{ y: 2, label: 'senseclusters.sourceforge.net' },
			{ y: 2, label: 'wn-similarity.sourceforge.net' },
			{ y: 1, label: 'http://senserelate.sourceforge.net' }
			
		]
	}
	else if (dtp=='20049')
	{
		dp = [                                         
			{ y: 2, label: 'research.microsoft.com' }
			
		]
	}
	else if (dtp=='200410')
	{
		dp = [                                         
			{ y: 2, label: 'search.cpan.org' }
			
		]
	}
	else if (dtp=='200411')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.readinga-z.com/' }
			
		]
	}
	else if (dtp=='200412')
	{
		dp = [                                         
			{ y: 2, label: 'ilk.uvt.nl' }
			
		]
	}
	else if (dtp=='200413')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.bbn.com/-' }
			
		]
	}
	else if (dtp=='200414')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.iknowsys.org/Download/' }
			
		]
	}
	else if (dtp=='200415')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.psychometricsociety.org/journal/online/A' }
			
		]
	}
	else if (dtp=='200416')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.goo.ne.jp' }
			
		]
	}
	else if (dtp=='200417')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.sls.csail.mit.edu/regina/struct' },
			{ y: 1, label: 'http://www.ai.mit.edu/people/jrennie/WordNet' }
			
		]
	}
	else if (dtp=='200418')
	{
		dp = [                                         
			{ y: 1, label: 'www.cogs' }
			
		]
	}
	else if (dtp=='200419')
	{
		dp = [                                         
			{ y: 1, label: 'http://newsblaster.cs.columbia.edu/' }
			
		]
	}
	else if (dtp=='20060')
	{
		dp = [                                         
			{ y: 6, label: 'www.nist.gov' },
			{ y: 4, label: 'trec.nist.gov' },
			{ y: 1, label: 'http://www.itl.nist.gov/iad/894.01/tests/ace/' },
			{ y: 1, label: 'http://duc.nist.gov' },
			{ y: 1, label: 'http://www-24.nist.gov/projects/aquaint/opinion.html' },
			{ y: 1, label: 'http://www-nlpir.nist.gov/projects/trecvid/' }
			
		]
	}
	else if (dtp=='20061')
	{
		dp = [                                         
			{ y: 6, label: 'www.lycos.com' }
			
		]
	}
	else if (dtp=='20062')
	{
		dp = [                                         
			{ y: 5, label: 'www.ldc.upenn.edu' },
			{ y: 1, label: 'http://www.cis.upenn.edu/' }
			
		]
	}
	else if (dtp=='20063')
	{
		dp = [                                         
			{ y: 4, label: 'www.aclweb.org' }
			
		]
	}
	else if (dtp=='20064')
	{
		dp = [                                         
			{ y: 3, label: 'http://www.pascal-network.org/challenges/VOC/' }
			
		]
	}
	else if (dtp=='20065')
	{
		dp = [                                         
			{ y: 3, label: 'research.microsoft.com' }
			
		]
	}
	else if (dtp=='20066')
	{
		dp = [                                         
			{ y: 3, label: 'en.wikipedia.org' },
			{ y: 2, label: 'www.wikipedia.org' }
			
		]
	}
	else if (dtp=='20067')
	{
		dp = [                                         
			{ y: 3, label: 'mallet.cs.umass.edu' }
			
		]
	}
	else if (dtp=='20068')
	{
		dp = [                                         
			{ y: 3, label: 'www.csie.ntu.edu.tw' }
			
		]
	}
	else if (dtp=='20069')
	{
		dp = [                                         
			{ y: 3, label:  'asked.jp' }
			
		]
	}
	else if (dtp=='200610')
	{
		dp = [                                         
			{ y: 2, label: 'www.fjoch.com' }
			
		]
	}
	else if (dtp=='200611')
	{
		dp = [                                         
			{ y: 2, label: 'www.senseval.org' }
			
		]
	}
	else if (dtp=='200612')
	{
		dp = [                                         
			{ y: 1, label: 'http://start.csail.mit.edu' },
			{ y: 2, label: 'people.csail.mit.edu' }
			
		]
	}
	else if (dtp=='200613')
	{
		dp = [                                         
			{ y: 2, label: 'www.acronymsearch.com' }
			
		]
	}
	else if (dtp=='200614')
	{
		dp = [                                         
			{ y: 2, label:  'sourceforge.net' },
			{ y: 2, label: 'secondstring.sourceforge.net' },
			{ y: 2, label: 'bionlp.sourceforge.net' },
			{ y: 1, label: 'minorthird.sourceforge.net' },
			{ y: 1, label: 'http://infomap-nlp.sourceforge.net' },
			{ y: 1, label: 'wordfreak.sourceforge.net' },
			{ y: 1, label: 'http://senseclusters.sourceforge.net' }
			
		]
	}
	else if (dtp=='200615')
	{
		dp = [                                         
			{ y: 2, label: 'www.isi.edu' }
			
		]
	}
	else if (dtp=='200616')
	{
		dp = [                                         
			{ y: 1, label: 'l2r.cs.uiuc.edu' }
			
		]
	}
	else if (dtp=='200617')
	{
		dp = [                                         
			{ y: 2, label: 'www.cs.cmu.edu' },
			{ y: 1, label: 'http://www.radar.cs.cmu.edu/external.asp' },
			{ y: 1, label: 'http://penance.is.cs.cmu.edu/iwslt2005' },
			{ y: 1, label: 'www.link.cs.cmu.edu' },
			{ y: 1, label: 'www.speech.cs.cmu.edu' }
			
		]
	}
	else if (dtp=='200618')
	{
		dp = [                                         
			{ y: 2, label: 'www.ldc.org' }
			
		]
	}
	else if (dtp=='200619')
	{
		dp = [                                         
			{ y: 1, label: 'http://infomap.stanford.edu' },
			{ y: 2, label: 'protege.stanford.edu' },
			{ y: 1, label: 'http://nlp.stanford.edu/software/tsurgeon.shtml' }
			
		]
	}
	else if (dtp=='20070')
	{
		dp = [                                         
			{ y: 4, label: 'www.cis.hut.fi' }
			
		]
	}
	else if (dtp=='20071')
	{
		dp = [                                         
			{ y: 4, label: 'people.csail.mit.edu' },
			{ y: 1, label: 'http://tedlab.mit.edu/~dr/Tgrep2/tgrep2.pdf' }
			
		]
	}
	else if (dtp=='20072')
	{
		dp = [                                         
			{ y: 3, label: 'www.nlm.nih.gov' },
			{ y: 1, label: 'http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?db=Taxonomy' },
			{ y: 1, label: 'http://mmtx.nlm.nih.gov/' }
			
		]
	}
	else if (dtp=='20073')
	{
		dp = [                                         
			{ y: 3, label: 'www.csie.ntu.edu.tw' }
			
		]
	}
	else if (dtp=='20074')
	{
		dp = [                                         
			{ y: 2, label: 'www.nist.gov' },
			{ y: 2, label: 'www.trec.nist.gov' },
			{ y: 1, label: 'http://www.itl.nist.gov/iaui/894.02/related' },
			{ y: 1, label: 'http://nist.gov/speech/tests/tdt/tdt98/' }
			
		]
	}
	else if (dtp=='20075')
	{
		dp = [                                         
			{ y: 3, label: 'http://ldc.upenn.edu/' },
			{y: 2, label: 'www.cis.upenn.edu' },
			{y: 1, label: 'projects.ldc.upenn.edu' }
			
		]
	}
	else if (dtp=='20076')
	{
		dp = [                                         
			{ y: 2, label: 'svmlight.joachims.org' }
			
		]
	}
	else if (dtp=='20077')
	{
		dp = [                                         
			{ y: 2, label: 'ai-nlp.info.uniroma2.it' }
			
		]
	}
	else if (dtp=='20078')
	{
		dp = [                                         
			{ y: 2, label: 'research.microsoft.com' }
			
		]
	}
	else if (dtp=='20079')
	{
		dp = [                                         
			{ y: 2, label: 'www.senseval.org' }
			
		]
	}
	else if (dtp=='200710')
	{
		dp = [                                         
			{ y: 2, label: 'http://lemurproject.org/indri' }
			
		]
	}
	else if (dtp=='200711')
	{
		dp = [                                         
			{ y: 2, label: 'www.ai.sri.com'}
			
		]
	}
	else if (dtp=='200712')
	{
		dp = [                                         
			{ y: 2, label: 'www.google.com' }
			
		]
	}
	else if (dtp=='200713')
	{
		dp = [                                         
			{ y: 2, label: 'timex2.mitre.org' },
			{ y: 1, label: 'nrrc.mitre.org' }
			
		]
	}
	else if (dtp=='200714')
	{
		dp = [                                         
			{ y: 2, label: 'www.isi.edu' }
			
		]
	}
	else if (dtp=='200715')
	{
		dp = [                                         
			{ y: 2, label: 'nlp.cs.nyu.edu' }
			
		]
	}
	else if (dtp=='200716')
	{
		dp = [                                         
			{ y: 2, label: 'cl.aist-nara.ac.jp' }
			
		]
	}
	else if (dtp=='200717')
	{
		dp = [                                         
			{ y: 2, label: 'www.alias-i.com' }
			
		]
	}
	else if (dtp=='200718')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.naturalvoices.att.com' }
			
		]
	}
	else if (dtp=='200719')
	{
		dp = [                                         
			{ y: 1, label: 'http://festvox.org/festival' },
			{ y: 1, label: 'http://www.festvox.org/' }
			
		]
	}
	else if (dtp=='20090')
	{
		dp = [
			{ y: 1, label: 'www.nist.gov' },
			{ y: 7, label: 'http://nist.gov/speech/tests/mt/2008' },
			{ y: 2, label: 'www-nlpir.nist.gov' },
			{ y: 1, label: 'http://www.itl.nist.gov/iaui/894.02/related' },
			{ y: 1, label: 'http://trec.nist.gov/' },
			{ y: 1, label: 'http://duc.nist.gov/' }
			
		]
	}
	else if (dtp=='20091')
	{
		dp = [                                         
			{ y: 5, label: 'www.statmt.org' }
			
		]
	}
	else if (dtp=='20092')
	{
		dp = [                                         
			{ y: 4, label: 'www.cs.pitt.edu' }
			
		]
	}
	else if (dtp=='20093')
	{
		dp = [                                         
			{ y: 4, label: 'en.wikipedia.org' }
			
		]
	}
	else if (dtp=='20094')
	{
		dp = [                                         
			{ y: 3, label: 'www.ldc.upenn.edu' },
			{ y: 4, label: 'projects.ldc.upenn.edu' },
			{ y: 1, label: 'http://www.cis.upenn.edu/' },
			{ y: 1, label: 'http://onlinebooks.library.upenn.edu' }
			
		]
	}
	else if (dtp=='20095')
	{
		dp = [                                         
			{ y: 4, label: 'www.sigir2009.org' }
			
		]
	}
	else if (dtp=='20096')
	{
		dp = [                                         
			{ y: 3, label: 'http://svmlight.joachims.org' }
			
		]
	}
	else if (dtp=='20097')
	{
		dp = [                                         
			{ y: 3, label: 'http://www.isi.edu/licensed-sw/carmel' }
			
		]
	}
	else if (dtp=='20098')
	{
		dp = [                                         
			{ y: 3, label: 'code.google.com' },
			{ y: 1, label: 'http://labs.google.com/sets' }
			
		]
	}
	else if (dtp=='20099')
	{
		dp = [                                         
			{ y: 3, label: 'research.microsoft.com' }
			
		]
	}
	else if (dtp=='200910')
	{
		dp = [                                         
			{ y: 3, label: 'www.cis.hut.fi' }
			
		]
	}
	else if (dtp=='200911')
	{
		dp = [                                         
			{ y: 2, label: 'search.cpan.org' }
			
		]
	}
	else if (dtp=='200912')
	{
		dp = [                                         
			{ y: 2, label: 'www.cog.brown.edu' }
			
		]
	}
	else if (dtp=='200913')
	{
		dp = [                                         
			{ y: 2, label: 'sourceforge.net' },
			{ y: 1, label: 'http://lpsolve.sourceforge.net/' },
			{ y: 1, label: 'http://minorthird.sourceforge.net/' },
			{ y: 1, label: 'http://senserelate.sourceforge.net' },
			{ y: 1, label: 'http://wn-similarity.sourceforge.net' },
			
		]
	}else if (dtp=='200914')
	{
		dp = [                                         
			{ y: 2, label: 'demo.patrickpantel.com' },
			{ y: 1, label: 'http://www.patrickpantel.com/cgi-bin/Web/Tools/getfile.pl?' }
			
		]
	}
	else if (dtp=='200915')
	{
		dp = [                                         
			{ y: 2, label: 'www.speech.cs.cmu.edu' }
			
		]
	}else if (dtp=='200916')
	{
		dp = [                                         
			{ y: 2, label: 'nlp.kuee.kyoto-u.ac.jp' }
			
		]
	}
	else if (dtp=='200917')
	{
		dp = [                                         
			{ y: 2, label:'www.merriam-webster.com' }
			
		]
	}
	else if (dtp=='200918')
	{
		dp = [                                         
			{ y: 2, label: 'www.sigir2004.org' }
			
		]
	}
	else if (dtp=='200919')
	{
		dp = [                                         
			{ y: 2, label: 'www.sigir.org' }
			
		]
	}
	else if (dtp=='200920')
	{
		dp = [                                         
			{ y: 2, label: 'www.sigir2008.org' }
			
		]
	}
	else if (dtp=='20100')
	{
		dp = [                                         
			{ y: 5, label: 'www.itl.nist.gov' },
			{ y: 7, label: 'www.nist.gov' },
			{ y: 2, label: 'www-nlpir.nist.gov' },
			{ y: 1, label: 'http://trec.nist.gov' }
			
		]
	}
	else if (dtp=='20101')
	{
		dp = [                                         
			{ y: 5, label: 'www.csie.ntu.edu.tw' }
			
		]
	}
	else if (dtp=='20102')
	{
		dp = [                                         
			{ y: 5, label: 'www.statmt.org' },
			{ y: 1, label: 'http://matrix.statmt.org/matrix' },
			{ y: 1, label: 'http://statmt.org/moses' }
			
		]
	}
	else if (dtp=='20103')
	{
		dp = [                                         
			{ y: 4, label: 'www.ncbi.nlm.nih.gov' }
			
		]
	}
	else if (dtp=='20104')
	{
		dp = [                                         
			{ y: 4, label: 'homepages.inf.ed.ac.uk' }
			
		]
	}
	else if (dtp=='20105')
	{
		dp = [                                         
			{ y: 4, label: 'www.ldc.upenn.edu' },
			{ y: 1, label: 'http://www.cis.upenn.edu/' }
			
		]
	}
	else if (dtp=='20106')
	{
		dp = [                                         
			{ y: 4, label: 'nlp.stanford.edu' },
			{ y: 1, label: 'http://cs.stanford.edu/' }
			
		]
	}
	else if (dtp=='20107')
	{
		dp = [                                         
			{ y: 4, label: 'research.microsoft.com' }
			
		]
	}
	else if (dtp=='20108')
	{
		dp = [                                         
			{ y: 3, label: 'code.google.com' },
			{ y: 1, label: 'http://www.google.com/mobile' },
			{ y: 3, label: 'http://www.translate.google.com' },
			{ y: 1, label: 'http://sites.google.com/site/adwaitratnaparkhi/home' },
		
			
		]
	}
	else if (dtp=='20109')
	{
		dp = [                                         
			{ y: 3, label:'L2R.cs.uiuc.edu' }
			
		]
	}
	else if (dtp=='201010')
	{
		dp = [                                         
			{ y: 4, label: 'sourceforge.net' },
			{ y: 2, label: 'crfpp.sourceforge.net' },
			{ y: 1, label: 'http://crf.sourceforge.net/' },
			{ y: 1, label: 'http://wn-similarity.sourceforge.net' },
			{ y: 1, label: 'http://corpussearch.sourceforge.net' },
			{ y: 1, label: 'http://infomap-nlp.sourceforge.net' }
			
		]
	}
	else if (dtp=='201011')
	{
		dp = [                                         
			{ y: 3, label: 'www.cs.pitt.edu' }
			
		]
	}
	else if (dtp=='201012')
	{
		dp = [                                         
			{ y: 3, label: 'www.nilc.icmc.usp.br' },
			{ y: 1, label: 'http://caravelas.icmc.usp.br/wiki/index.php/Principal' },
			{ y: 1, label: 'http://caravelas.icmc.usp.br:3000/' }
			
		]
	}
	else if (dtp=='201013')
	{
		dp = [                                         
			{ y: 2, label: 'www-tsujii.is.s.u-tokyo.ac.jp' }
			
		]
	}
	else if (dtp=='201014')
	{
		dp = [                                         
			{ y: 2, label: 'news.bbc.co.uk' },
			{ y: 2, label: 'www.bbc.co.uk' }
			
		]
	}
	else if (dtp=='201015')
	{
		dp = [                                         
			{ y: 2, label: 'en.wikipedia.org' },
			{ y: 1, label: 'http://simple.wikipedia.org' }
			
		]
	}
	else if (dtp=='201016')
	{
		dp = [                                         
			{ y: 3, label: 'www.mturk.com' }
			
		]
	}
	else if (dtp=='201017')
	{
		dp = [                                         
			{ y: 2, label: 'www.cs.waikato.ac.nz' }
			
		]
	}
	else if (dtp=='201018')
	{
		dp = [                                         
			{ y: 2, label: 'www.cs.cmu.edu' },
			{ y: 2, label: 'www.ark.cs.cmu.edu' },
			{ y: 1, label: 'http://www.speech.cs.cmu.edu/cgi-bin/cmudict' }
			
		]
	}
	else if (dtp=='201019')
	{
		dp = [                                         
			{ y: 2, label: 'w3.msi.vxu.se' }
			
		]
	}
	else if (dtp=='20120')
	{
		dp = [                                         
			{ y: 4, label: 'mallet.cs.umass.edu' },
			{ y: 1, label: 'http://www.cs.umass.edu/' }
			
		]
	}
	else if (dtp=='20121')
	{
		dp = [                                         
			{ y: 3, label: 'github.com' }
			
		]
	}
	else if (dtp=='20122')
	{
		dp = [                                         
			{ y: 4, label: 'http://www.itl.nist' },
			{ y: 1, label: 'http://trec.nist.gov/data/tweets/' }
			
		]
	}
	else if (dtp=='20123')
	{
		dp = [                                         
			{ y: 3, label: 'www.statmt.org' }
			
		]
	}
	else if (dtp=='20124')
	{
		dp = [                                         
			{ y: 3, label: 'research.microsoft.com' }
			
		]
	}
	else if (dtp=='20125')
	{
		dp = [                                         
			{ y: 4, label: 'www.mturk.com' }
			
		]
	}
	else if (dtp=='20126')
	{
		dp = [                                         
			{ y: 2, label: 'www.cs.waikato.ac.nz' }
			
		]
	}
	else if (dtp=='20127')
	{
		dp = [                                         
			{ y: 2, label: 'www.cs.york.ac.uk' }
			
		]
	}
	else if (dtp=='20128')
	{
		dp = [                                         
			{ y: 2, label: 'crfpp.sourceforge.net' },
			{ y: 2, label: 'jgibblda.sourceforge.net' }
			
		]
	}
	else if (dtp=='20129')
	{
		dp = [                                         
			{ y: 2, label: 'en.wikipedia.org' },
			{ y: 1, label: 'http://wikipedia.org' }
			
		]
	}
	else if (dtp=='201210')
	{
		dp = [                                         
			{ y: 2, label: 'research.ics.tkk.fi' }
			
		]
	}
	else if (dtp=='201211')
	{
		dp = [                                         
			{ y: 2, label: 'chasen.org' }
			
		]
	}
	else if (dtp=='201212')
	{
		dp = [                                         
			{ y: 2, label: 'homepages.inf.ed.ac.uk' }
			
		]
	}
	else if (dtp=='201213')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.bartleby.com/251/' }
			
		]
	}
	else if (dtp=='201214')
	{
		dp = [                                         
			{ y: 2, label: 'nextens.uvt.nl' }
			
		]
	}
	else if (dtp=='201215')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.sampottsinc.com/ij/file/IJ' }
			
		]
	}
	else if (dtp=='201216')
	{
		dp = [                                         
			{ y: 2, label: 'nlp.stanford.edu' }
			
		]
	}
	else if (dtp=='201217')
	{
		dp = [                                         
			{ y: 2, label: 'lucene.apache.org' },
			{ y: 1, label: 'http://incubator.apache.org/opennlp/' }
			
		]
	}
	else if (dtp=='201218')
	{
		dp = [                                         
			{ y: 2, label: 'code.google.com' },
			{ y: 1, label: 'http://groups.google.com/group/hoo-nlp/' },
			{ y: 1, label: 'http://translate.google.com' }
			
		]
	}
	else if (dtp=='201219')
	{
		dp = [                                         
			{ y: 2, label: 'dbpedia.org' }
			
		]
	}
	else if (dtp=='20130')
	{
		dp = [                                         
			{ y: 14, label: 'github.com' }
			
		]
	}
	else if (dtp=='20131')
	{
		dp = [                                         
			{ y: 10, label: 'code.google.com' },
			{ y: 2, label: 'developers.google.com' },
			{ y: 2, label: 'sites.google.com' },
			{ y: 1, label: 'translate.google.com' }
			
		]
	}
	else if (dtp=='20132')
	{
		dp = [                                         
			{ y: 9, label: 'en.wikipedia.org' }
			
		]
	}
	else if (dtp=='20133')
	{
		dp = [                                         
			{ y: 9, label: 'nlp.stanford.edu' },
			{ y: 1, label: 'http://soi.stanford.edu/' }
			
		]
	}
	else if (dtp=='20134')
	{
		dp = [                                         
			{ y: 7, label: 'mallet.cs.umass.edu' }
			
		]
	}
	else if (dtp=='20135')
	{
		dp = [                                         
			{ y: 6, label: 'www.ark.cs.cmu.edu' },
			{ y: 2, label: 'www.speech.cs.cmu.edu' },
			{ y: 1, label: 'http://www.cs.cmu.edu/afs/cs/project/' },
			{ y: 1, label: 'http://www.qatar.cmu.edu/' }
			
		]
	}
	else if (dtp=='20136')
	{
		dp = [                                         
			{ y: 5, label: 'www.statmt.org' }
			
		]
	}
	else if (dtp=='20137')
	{
		dp = [                                         
			{ y: 3, label: 'www.ldc.upenn.edu' },
			{ y: 2, label: 'projects.ldc.upenn.edu' },
			{ y: 1, label: 'http://www.ling.upenn.edu/hist-' },
			{ y: 1, label: 'http://www.cis.upenn.edu/treebank/tokenizer.sed' }
			
		]
	}
	else if (dtp=='20138')
	{
		dp = [                                         
			{ y: 3, label: 'nlp.cs.lth.se' }
			
		]
	}
	else if (dtp=='20139')
	{
		dp = [                                         
			{ y: 3, label: 'www.nist.gov' },
			{ y: 2, label: 'www.itl.nist.gov' },
			{ y: 2, label:  'duc.nist.gov' }
			
		]
	}
	else if (dtp=='201310')
	{
		dp = [                                         
			{ y: 3, label: 'www.ukp.tu-darmstadt.de' }
			
		]
	}else if (dtp=='201311')
	{
		dp = [                                         
			{ y: 2, label: 'svmlight.joachims.org' }
			
		]
	}
	else if (dtp=='201312')
	{
		dp = [                                         
			{ y: 2, label: 'sourceforge.net' },
			{ y: 1, label: 'http://opennlp.sourceforge.net/' },
			{ y: 1, label: 'http://espeak.sourceforge.net' },
			{ y: 1, label: 'http://jgibblda.sourceforge.net/' },
			{ y: 1, label: 'http://mmax2.sourceforge.net' },
			{ y: 1, label: 'http://gibbslda.sourceforge.net' },
			{ y: 1, label: 'http://umls-similarity.sourceforge.net' }
			
		]
	}
	else if (dtp=='201313')
	{
		dp = [                                         
			{ y: 2, label: 'pascallin.ecs.soton.ac.uk' }
			
		]
	}
	else if (dtp=='201314')
	{
		dp = [                                         
			{ y: 2, label: 'groups.csail.mit.edu' },
			{ y: 2, label: 'http://people.csail.mit.edu/jrennie/20Newsgroups/' }
			
		]
	}
	else if (dtp=='201315')
	{
		dp = [                                         
			{ y: 2, label: 'blog.twitter.com' },
			{ y: 1, label: 'https://twitter.com/' },
			{ y: 1, label: 'https://dev.twitter.com/docs/streaming-apis' }
			
		]
	}
	else if (dtp=='201316')
	{
		dp = [                                         
			{ y: 2, label: 'research.microsoft.com' },
			{ y: 1, label: 'http://support.microsoft.com/kb/883232/ja' },
			{ y: 1, label: 'http://afkar.microsoft.com/en/maren' }
			
		]
	}else if (dtp=='201317')
	{
		dp = [                                         
			{ y: 2, label: 'www.cs.cornell' }
			
		]
	}
	else if (dtp=='201318')
	{
		dp = [                                         
			{ y: 2, label: 'festvox.org' }
			
		]
	}
	else if (dtp=='201319')
	{
		dp = [                                         
			{ y: 2, label: 'en.wiktionary.org' }
			
		]
	}
	else if (dtp=='20150')
	{
		dp = [                                         
			{ y: 58, label: 'github.com' }
			
		]
	}
	else if (dtp=='20151')
	{
		dp = [                                         
			{ y: 25, label: 'code.google.com' },
			{ y: 2, label: 'developers.google.com' },
			{ y: 2, label: 'www.google.com' },
			{ y: 2, label: 'sites.google.com' },
			{ y: 1, label: 'http://books.google.com/ngrams' },
			{ y: 1, label: 'https://play.google.com/store/apps/' }
			
		]
	}
	else if (dtp=='20152')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.stanford.edu/' },
			{ y: 1, label: 'http://cs.stanford.edu/' },
			{ y: 12, label: 'nlp.stanford.edu' },
			{ y: 1, label: 'http://www-nlp.stanford.edu/projects/' }
			
		]
	}
	else if (dtp=='20153')
	{
		dp = [                                         
			{ y: 10, label: 'arxiv.org' }
			
		]
	}
	else if (dtp=='20154')
	{
		dp = [                                         
			{ y: 8, label: 'en.wikipedia.org' },
			{ y: 1, label: 'https://www.wikipedia.org/' },
			{ y: 1, label: 'http://simple.wikipedia.org/wiki/Main_Page' }
			
		]
	}
	else if (dtp=='20155')
	{
		dp = [                                         
			{ y: 6, label: 'mallet.cs.umass.edu' },
			{ y: 1, label: 'http://www.cs.umass.edu/' },
			{ y: 1, label: 'http://people.cs.umass.edu/' }
			
		]
	}
	else if (dtp=='20156')
	{
		dp = [                                         
			{ y: 6, label: 'research.microsoft.com' }
			
		]
	}
	else if (dtp=='20157')
	{
		dp = [                                         
			{ y: 6, label: 'wordnet.princeton.edu' },
			{ y: 1, label: 'http://www.cs.princeton.edu/' }
			
		]
	}
	else if (dtp=='20158')
	{
		dp = [                                         
			{ y: 10, label: 'www.statmt.org' }
			
		]
	}
	else if (dtp=='20159')
	{
		dp = [                                         
			{ y: 6, label: 'www.ark.cs.cmu.edu' },
			{ y: 5, label: 'www.speech.cs.cmu.edu' },
			{ y: 4, label: 'www.cs.cmu.edu' },
			{ y: 4, label: 'cs.cmu.edu' }
			
		]
	}
	else if (dtp=='201510')
	{
		dp = [                                         
			{ y: 5, label: 'ufal.mff.cuni.cz' }
			
		]
	}
	else if (dtp=='201511')
	{
		dp = [                                         
			{ y: 4, label: 'lucene.apache.org' }
			
		]
	}
	else if (dtp=='201512')
	{
		dp = [                                         
			{ y: 3, label: 'goo.gl' }
			
		]
	}
	else if (dtp=='201513')
	{
		dp = [                                         
			{ y: 4, label: 'catalog.ldc.upenn.edu' },
			{ y: 3, label: 'www.cis.upenn.edu' },
			{ y: 3, label: 'oracc.museum.upenn.edu' },
			{ y: 2, label: 'www.seas.upenn.edu' },
			{ y: 1, label: 'http://psd.museum.upenn.edu/' },
			{ y: 2, label: 'www.ldc.upenn.edu' }
			
		]
	}else if (dtp=='201514')
	{
		dp = [                                         
			{ y: 4, label: 'www.gurobi.com' }
			
		]
	}
	else if (dtp=='201515')
	{
		dp = [                                         
			{ y: 4, label: 'bitbucket.org' }
			
		]
	}
	else if (dtp=='201516')
	{
		dp = [                                         
			{ y: 4, label: 'www.nist.gov' },
			{ y: 2, label: 'trec.nist.gov' },
			{ y: 1, label: 'http://duc.nist.gov/duc2004/tasks.html' },
			{ y: 1, label: 'http://www.itl.nist.gov/iad/mig/tests/ace/2005/' }
			
		]
	}else if (dtp=='201517')
	{
		dp = [                                         
			{ y: 3, label: 'www.crowdflower.com' }
			
		]
	}
	else if (dtp=='201518')
	{
		dp = [                                         
			{ y: 3, label: 'www.ssa.gov' }
			
		]
	}
	else if (dtp=='201519')
	{
		dp = [                                         
			{ y: 3, label: 'ml.nec-labs.com' }
			
		]
	}
	else if (dtp=='20160')
	{
		dp = [                                         
			{ y: 69, label: 'github.com' },
			{ y: 1, label: 'https://status.github.com/messages/2013-07-29' }
			
		]
	}
	else if (dtp=='20161')
	{
		dp = [                                         
			{ y: 22, label: 'code.google.com' },
			{ y: 3, label: 'sites.google.com' },
			{ y: 1, label: 'https://developers.google.com/' },
			{ y: 1, label: 'https://www.google.com/intl/en/chrome/demos/speech.html' }
			
		]
	}
	else if (dtp=='20162')
	{
		dp = [                                         
			{ y: 11, label: 'nlp.stanford.edu' },
			{ y: 1, label: 'http://langcog.stanford.edu/materials/' }
			
		]
	}
	else if (dtp=='20163')
	{
		dp = [                                         
			{ y: 8, label:  'www.statmt.org' },
			{ y: 1, label:  'http://statmt.org/wmt14/' }
			
		]
	}
	else if (dtp=='20164')
	{
		dp = [                                         
			{ y: 8, label: 'bitbucket.org' }
			
		]
	}
	else if (dtp=='20165')
	{
		dp = [                                         
			{ y: 6, label: 'alt.qcri.org' }
			
		]
	}
	else if (dtp=='20166')
	{
		dp = [                                         
			{ y: 5, label: 'catalog.ldc.upenn.edu' },
			{ y: 3, label: 'www.ldc.upenn.edu' },
			{ y: 1, label:'http://projects.ldc.upenn.edu/ace' },
			{ y: 1, label: 'http://www.seas.upenn.edu/' },
			{ y: 1, label:'https://www.cis.upenn.edu/' }
			
		]
	}
	else if (dtp=='20167')
	{
		dp = [                                         
			{ y: 5, label: 'www.cs.cmu.edu' },
			{ y: 2, label: 'www.speech.cs.cmu.edu' },
			{ y: 1, label: 'http://rtw.ml.cmu.edu/resources/' },
			{ y: 1, label: 'http://www.ark.cs.cmu.edu/TweetNLP/' },
			{ y: 1, label: 'http://cs.cmu.edu/~dmortens/uriel.html' }
			
		]
	}
	else if (dtp=='20168')
	{
		dp = [                                         
			{ y: 4, label: 'arxiv.org' }
			
		]
	}
	else if (dtp=='20169')
	{
		dp = [                                         
			{ y: 4, label: 'radimrehurek.com' }
			
		]
	}
	else if (dtp=='201610')
	{
		dp = [                                         
			{ y: 4, label: 'tinyurl.com' }
			
		]
	}
	else if (dtp=='201611')
	{
		dp = [                                         
			{ y: 4, label: 'www.cnts.ua.ac.be' }
			
		]
	}
	else if (dtp=='201612')
	{
		dp = [                                         
			{ y: 4, label: 'cistern.cis.lmu.de' }
			
		]
	}
	else if (dtp=='201613')
	{
		dp = [                                         
			{ y: 2, label: 'twitter.com' }
			
		]
	}
	else if (dtp=='201614')
	{
		dp = [                                         
			{ y: 3, label: 'www.crowdflower.com' },
			{ y: 1, label: 'http://crowdflower.com' }
			
		]
	}
	else if (dtp=='201615')
	{
		dp = [                                         
			{ y: 3, label: 'stackexchange.com' }
			
		]
	}
	else if (dtp=='201616')
	{
		dp = [                                         
			{ y: 2, label: 'lotus.kuee.kyoto-u.ac.jp' }
			
		]
	}
	else if (dtp=='201617')
	{
		dp = [                                         
			{ y: 2, label: 'www.opensubtitles.org'  }
			
		]
	}
	else if (dtp=='201618')
	{
		dp = [                                         
			{ y: 2, label: 'www.clg.ox.ac.uk' }
			
		]
	}
	else if (dtp=='201619')
	{
		dp = [                                         
			{ y: 2, label: 'svn.ask.it.usyd.edu.au' }
			
		]
	}
	else if (dtp=='201620')
	{
		dp = [                                         
			{ y: 2, label: 'nlg.isi.edu' },
			{ y: 1, label: 'http://www.isi.edu/~marcu/' }
			
		]
	}
	else if (dtp=='20180')
	{
		dp = [                                         
			{ y: 255, label: 'github.com' },
			{ y: 2, label: 'www.github.com' }
			
		]
	}
	else if (dtp=='20181')
	{
		dp = [                                         
			{ y: 291, label: 'www.aclweb.org' },
			{ y: 192, label: 'aclweb.org' },
			{ y: 5, label: 'anthology.aclweb.org' },
			{ y: 1, label: 'http://www.newdesign.aclweb.org/' }
			
		]
	}
	else if (dtp=='20182')
	{
		dp = [                                         
			{ y: 135, label: 'arxiv.org' },
			{ y: 1, label: 'http://lanl.arxiv.org/abs/math.GM/0701393' }
			
		]
	}
	else if (dtp=='20183')
	{
		dp = [                                         
			{ y: 79, label: 'dl.acm.org' }
			
		]
	}
	else if (dtp=='20184')
	{
		dp = [                                         
			{ y: 26, label: 'nlp.stanford.edu' },
			{ y: 1, label: 'http://jmc.stanford.edu/articles/' },
			{ y: 1, label: 'http://plato.stanford.edu/entries/fallacies/' },
			{ y: 1, label: 'http://snap.stanford.edu/data/other.html' },
			{ y: 1, label: 'http://ilpubs.stanford.edu' },
			{ y: 1, label: 'http://web.stanford.edu/group/csli_' },
			{ y: 1, label: 'https://mailman.stanford.edu/pipermail/' },
			{ y: 1, label: 'https://cocolab.stanford.edu/' },
			{ y: 1, label: 'http://cs.stanford.edu/people/' }
			
		]
	}
	else if (dtp=='20185')
	{
		dp = [                                         
			{ y: 22, label: 'papers.nips.cc' },
			{ y: 1, label: 'books.nips.cc' },
			{ y: 1, label: 'nips.cc' }
			
		]
	}
	else if (dtp=='20186')
	{
		dp = [                                         
			{ y: 12, label: 'code.google.com' },
			{ y: 7, label: 'sites.google.com' },
			{ y: 5, label: 'books.google.com' },
			{ y: 1, label: 'https://docs.google.com/' },
			{ y: 1, label: 'https://cloud.google.com/translate' },
			{ y: 1, label: 'https://www.google.com/' },
			{ y: 1, label: 'https://drive.google.com/file/d/1nbpbnhwNP14xAc4SAc1-' },
			{ y: 1, label: 'https://developers.google.com/freebase/' }
			
		]
	}
	else if (dtp=='20187')
	{
		dp = [                                         
			{ y: 11, label: 'aclanthology.info' }
			
		]
	}
	else if (dtp=='20188')
	{
		dp = [                                         
			{ y: 10, label: 'transacl.org' },
			{ y: 4, label: 'www.transacl.org' }
			
		]
	}
	else if (dtp=='20189')
	{
		dp = [                                         
			{ y: 9, label: 'www.statmt.org' },
			{ y: 1, label: 'http://data.statmt.org/wmt17/' }
			
		]
	}
	else if (dtp=='201810')
	{
		dp = [                                         
			{ y: 8, label: 'en.wikipedia.org' },
			{ y: 1, label: 'http://simple.wikipedia.org' },
			{ y: 1, label: 'https://www.wikipedia.org/' }
			
		]
	}
	else if (dtp=='201811')
	{
		dp = [                                         
			{ y: 7, label: 'www.reddit.com' }
			
		]
	}
	else if (dtp=='201812')
	{
		dp = [                                         
			{ y: 7, label: 'cogcomp.org' }
			
		]
	}
	else if (dtp=='201813')
	{
		dp = [                                         
			{ y: 7, label: 'www.nltk.org' }
			
		]
	}
	else if (dtp=='201814')
	{
		dp = [                                         
			{ y: 7, label: 'www.cs.jhu.edu' }
			
		]
	}
	else if (dtp=='201815')
	{
		dp = [                                         
			{ y: 7, label: 'jmlr.org' }
			
		]
	}
	else if (dtp=='201816')
	{
		dp = [                                         
			{ y: 7, label: 'catalog.ldc.upenn.edu' },
			{ y: 1, label: 'http://www.cis.upenn.edu/' },
			{ y: 1, label: 'http://www.seas.upenn.edu/' }
			
		]
	}else if (dtp=='201817')
	{
		dp = [                                         
			{ y: 6, label: 'www.aaai.org' },
			{ y: 3, label: 'aaai.org' }
			
		]
	}
	else if (dtp=='201818')
	{
		dp = [                                         
			{ y: 6, label: 'spacy.io' }
			
		]
	}
	else if (dtp=='201819')
	{
		dp = [                                         
			{ y: 6, label: 'dumps.wikimedia.org' },
			{ y: 2, label: 'meta.wikimedia.org' }
			
		]
	}
	else if (dtp=='201820')
	{
		dp = [                                         
			{ y: 6, label: 'developer.twitter.com' },
			{ y: 1, label: 'https://dev.twitter.com/streaming/' },
			{ y: 1, label: 'https://twitter.com/' }
			
		]
	}
	else
	{
		dp = [                                         
			{ y: 1, label: 'sayak' }
			
		]
	}



var chart = new CanvasJS.Chart(res, {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	height: 320,
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