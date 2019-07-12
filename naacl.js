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
































var chart = new CanvasJS.Chart("chartContainer2000", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "NAACL : 2000 Top URLs",
		legendText: "",
		dataPoints: [                                         
			{ y: 2, label: 'nist.gov' },                                             
			{ y: 2, label: 'www.muc.saic.com' },
			{ y: 2, label: 'www.hum.uva.nl' },
			{ y: 2, label: 'lcg-www.uia.ac.be' },
			{ y: 2, label: 'www.coli.uni-sb.de' },
			{ y: 1, label: 'www.clis.umd.edu' },
			{ y: 1, label: 'sunrain.net' },
			{ y: 1, label: 'www.readworld.com' },
			{ y: 1, label: 'www.mindspring.com' },
			{ y: 1, label: 'www.ida.liu.se' },
			{ y: 1, label: 'cslu.cse.ogi.edu' },
			{ y: 1, label: 'www.nuance.com' },
			{ y: 1, label: 'ic.arc.nasa.gov' },
			{ y: 1, label: 'www-nlpir.nist.gov' },
			{ y: 1, label: 'www.sgi.com' },
			{ y: 1, label: 'www.sun.com' },
			{ y: 1, label: 'cs.nyu.edu' },
			{ y: 1, label: 'www.ladl.jussieu.fr' },
			{ y: 1, label: 'www.onelook.com' },
			{ y: 1, label: 'www.jstor.org' },
			{ y: 1, label: 'www.benton.org' }
			
		]
	}]
});
chart.render();












































var chart = new CanvasJS.Chart("chartContainer2001", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "NAACL : 2001 Top URLs",
		legendText: "",
		dataPoints: [                                         
			{ y: 1, label: 'www.research.att.com' },                                
			{ y: 1, label: 'www.cogsci.ed.ac.uk' },
			{ y: 1, label: 'www.ai.mit.edu' },
			{ y: 1, label: 'www.cis.upenn.edu' },
			{ y: 1, label: 'xxx.lanl.gov' },
			{ y: 1, label: 'humanities.uchicago.edu' },
			{ y: 1, label: 'lcg-www.uia.ac.be' },
			{ y: 1, label: 'cl.aist-nara.ac.jp' }
			
			
		]
	}]
});
chart.render();









































var chart = new CanvasJS.Chart("chartContainer2003", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "NAACL : 2003 Top URLs",
		legendText: "",
		dataPoints: [                                         
			{ y: 4, label: 'www.isi.edu' },                        
			{ y: 3, label: 'infomap.stanford.edu' },
			{ y: 2, label: 'nist.gov' },
			{ y: 2, label: 'www.icsi.berkeley.edu' },
			{ y: 2, label: 'newsblaster.cs.columbia.edu' },
			{ y: 1, label: 'www.cs.cornell.edu' },
			{ y: 1, label: 'www.ldc.org' },
			{ y: 1, label: 'www.eecs.umich.edu' },
			{ y: 1, label: 'clipdemos.umiacs.umd.edu' },
			{ y: 1, label: 'www.keenage.com' },
			{ y: 1, label: 'www.umiacs.umd.edu' },
			{ y: 1, label: 'www.cogsci.princeton.edu' },
			{ y: 1, label: 'www.xerox.fr' },
			{ y: 1, label: 'www.clis2.umd.edu' },
			{ y: 1, label: 'www.research.att.com' },
			{ y: 1, label: 'www.speech.sri.com' },
			{ y: 1, label: 'www.ai.mit.edu' },
			{ y: 1, label: 'arXiv.org' },
			{ y: 1, label: 'www.ldc.upenn.edu' },
			{ y: 1, label: 'fullcoverage.yahoo.com' }
			
			
		]
	}]
});
chart.render();






































var chart = new CanvasJS.Chart("chartContainer2004", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "NAACL : 2004 Top URLs",
		legendText: "",
		dataPoints: [                                         
			{ y: 8, label: 'cl.aist-nara.ac.jp' },      
			{ y: 9, label: 'upenn.edu' },
			{ y: 10, label: 'www.nist.gov' },
			{ y: 3, label: 'www.isi.edu' },
			{ y: 2, label: 'www2.parc.com' },
			{ y: 2, label: 'www.clsp.jhu.edu' },
			{ y: 2, label: 'festvox.org' },
			{ y: 2, label: 'www.kc.t.u-tokyo.ac.jp' },
			{ y: 2, label: 'senseclusters.sourceforge.net' },
			{ y: 2, label: 'research.microsoft.com' },
			{ y: 2, label: 'search.cpan.org' },
			{ y: 2, label: 'wn-similarity.sourceforge.net' },
			{ y: 2, label: 'ilk.uvt.nl' },
			{ y: 1, label: 'www.bbn.com' },
			{ y: 1, label: 'www.iknowsys.org' },
			{ y: 1, label: 'www.psychometricsociety.org' },
			{ y: 1, label: 'www.goo.ne.jp' },
			{ y: 1, label: 'www.sls.csail.mit.edu' },
			{ y: 1, label: 'www.cogs'}
			
			
		]
	}]
});
chart.render();








































var chart = new CanvasJS.Chart("chartContainer2006", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "NAACL : 2006 Top URLs",
		legendText: "",
		dataPoints: [     
			{ y: 10, label: 'www.nist.gov' },      
			{ y: 6, label: 'www.lycos.com' },
			{ y: 5, label: 'upenn.edu' },
			{ y: 4, label: 'www.aclweb.org' },
			{ y: 3, label: 'www.pascal-network.org' },
			{ y: 3, label: 'research.microsoft.com' },
			{ y: 3, label:  'en.wikipedia.org' },
			{ y: 3, label: 'mallet.cs.umass.edu' },
			{ y: 3, label: 'www.csie.ntu.edu.tw' },
			{ y: 3, label: 'asked.jp' },
			{ y: 2, label: 'www.fjoch.com' },
			{ y: 2, label: 'www.senseval.org' },
			{ y: 2, label: 'people.csail.mit.edu' },
			{ y: 2, label: 'www.wikipedia.org' },
			{ y: 2, label: 'sourceforge.net' },
			{ y: 2, label: 'www.isi.edu' },
			{ y: 2, label: 'secondstring.sourceforge.net' },
			{ y: 2, label: 'www.cs.cmu.edu' },
			{ y: 2, label: 'www.ldc.org'},
			{ y: 2, label: 'www.acronymsearch.com'}
			
			
		]
	}]
});
chart.render();











































var chart = new CanvasJS.Chart("chartContainer2007", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "NAACL : 2007 Top URLs",
		legendText: "",
		dataPoints: [     
			{ y: 4, label: 'www.cis.hut.fi' },
			{ y: 4, label: 'people.csail.mit.edu' },
			{ y: 3, label: 'www.nlm.nih.gov' },
			{ y: 3, label: 'www.csie.ntu.edu.tw' },
			{ y: 4, label: 'www.nist.gov' },
			{ y: 4, label: 'upenn.edu' },
			{ y: 2, label:  'svmlight.joachims.org' },
			{ y: 2, label: 'ai-nlp.info.uniroma2.it' },
			{ y: 2, label: 'research.microsoft.com' },
			{ y: 3, label: 'www.senseval.org' },
			{ y: 2, label: 'www.lemurproject.org' },
			{ y: 2, label: 'www.senseval.org' },
			{ y: 2, label: 'google.com' },
			{ y: 2, label: 'timex2.mitre.org' },
			{ y: 2, label: 'www.isi.edu' },
			{ y: 2, label: 'nlp.cs.nyu.edu' },
			{ y: 2, label: 'cl.aist-nara.ac.jp' },
			{ y: 2, label: 'www.alias-i.com' },
			{ y: 1, label: 'www.naturalvoices.att.com'},
			{ y: 1, label: 'festvox.org'}
			
			
		]
	}]
});
chart.render();










































var chart = new CanvasJS.Chart("chartContainer2009", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "NAACL : 2009 Top URLs",
		legendText: "",
		dataPoints: [     
			{ y: 9, label: 'www.nist.gov' },
			{ y: 5, label: 'www.statmt.org' },
			{ y: 4, label: 'www.cs.pitt.edu' },
			{ y: 4, label: 'en.wikipedia.org' },
			{ y: 7, label: 'upenn.edu' },
			{ y: 4, label: 'www.sigir2009.org' },
			{ y: 3, label:  'svmlight.joachims.org' },
			{ y: 3, label: 'www.isi.edu' },
			{ y: 3, label: 'google.com' },
			{ y: 3, label: 'research.microsoft.com' },
			{ y: 3, label: 'www.cis.hut.fi' },
			{ y: 2, label: 'search.cpan.org' },
			{ y: 2, label: 'www.cog.brown.edu' },
			{ y: 2, label: 'sourceforge.net' },
			{ y: 2, label: 'demo.patrickpantel.com' },
			{ y: 2, label: 'www.speech.cs.cmu.edu' },
			{ y: 2, label: 'nlp.kuee.kyoto-u.ac.jp' },
			{ y: 2, label: 'www.merriam-webster.com' },
			{ y: 2, label: 'www.naturalvoices.att.com'},
			{ y: 2, label: 'festvox.org'},
			{ y: 2, label: 'www.sigir.org'},
			{ y: 2, label: 'www.sigir2008.org'}
			
			
		]
	}]
});
chart.render();










































var chart = new CanvasJS.Chart("chartContainer2010", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
	},
		axisX: {
		interval: 1,
		
	},
	data: [{        
		type: "column",  
      	color: "#0303AC",                                              
		showInLegend: true, 
		legendMarkerColor: "grey",
		name: "NAACL : 2010 Top URLs",
		legendText: "",
		dataPoints: [     
			{ y: 12, label: 'www.nist.gov' },
			{ y: 5, label: 'www.csie.ntu.edu.tw' },
			{ y: 5, label: 'www.statmt.org' },
			{ y: 4, label: 'www.ncbi.nlm.nih.gov' },
			{ y: 4, label: 'homepages.inf.ed.ac.uk' },
			{ y: 4, label: 'upenn.edu' },
			{ y: 4, label:  'nlp.stanford.edu' },
			{ y: 4, label: 'research.microsoft.com' },
			{ y: 5, label: 'google.com' },
			{ y: 3, label: 'L2R.cs.uiuc.edu' },
			{ y: 3, label: 'sourceforge.net' },
			{ y: 3, label: 'maltparser.org' },
			{ y: 3, label: 'www.cs.pitt.edu' },
			{ y: 3, label: 'www.nilc.icmc.usp.br' },
			{ y: 2, label: 'www-tsujii.is.s.u-tokyo.ac.jp' },
			{ y: 2, label: 'news.bbc.co.uk' },
			{ y: 2, label: 'en.wikipedia.org' },
			{ y: 2, label: 'www.mturk.com' },
			{ y: 2, label: 'crfpp.sourceforge.net' },
			{ y: 2, label: 'www.cs.cmu.edu'},
			{ y: 2, label: 'nist.gov'},
			{ y: 2, label: 'www.questiongeneration.org'}
			
			
		]
	}]
});
chart.render();






































var chart = new CanvasJS.Chart("chartContainer2012", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	
	width: 900,
	title:{
		text: ""
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
		name: "NAACL : 2012 Top URLs",
		legendText: "",
		dataPoints: [     
			{ y: 4, label: 'mallet.cs.umass.edu' },
			{ y: 3, label: 'github.com' },
			{ y: 3, label: 'nist.gov' },
			{ y: 3, label: 'www.statmt.org' },
			{ y: 3, label: 'research.microsoft.com' },
			{ y: 2, label: 'www.mturk.com' },
			{ y: 2, label:  'www.cs.waikato.ac.nz' },
			{ y: 2, label: 'www.cs.york.ac.uk' },
			{ y: 2, label: 'crfpp.sourceforge.net' },
			{ y: 2, label: 'en.wikipedia.org' },
			{ y: 2, label: 'research.ics.tkk.fi' },
			{ y: 2, label: 'chasen.org' },
			{ y: 2, label: 'homepages.inf.ed.ac.uk' },
			{ y: 2, label: 'mturk.com' },
			{ y: 2, label: 'nextens.uvt.nl' },
			{ y: 2, label: 'jgibblda.sourceforge.net' },
			{ y: 2, label: 'nlp.stanford.edu' },
			{ y: 2, label: 'lucene.apache.org' },
			{ y: 2, label: 'google.com' },
			{ y: 2, label: 'dbpedia.org' },
			{ y: 2, label: 'www.i2b2.org' },
			{ y: 2, label: 'hal3.name'}
			
			
		]
	}]
});
chart.render();




































var chart = new CanvasJS.Chart("chartContainer2013", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "NAACL : 2013 Top URLs",
		legendText: "",
		dataPoints: [     
			{ y: 14, label: 'github.com' },
			{ y: 14, label: 'google.com' },
			{ y: 9, label: 'en.wikipedia.org' },
			{ y: 9, label: 'nlp.stanford.edu' },
			{ y: 7, label: 'mallet.cs.umass.edu' },
			{ y: 6, label: 'www.ark.cs.cmu.edu' },
			{ y: 5, label:  'www.statmt.org' },
			{ y: 3, label: 'upenn.edu' },
			{ y: 3, label: 'nlp.cs.lth.se' },
			{ y: 5, label: 'www.nist.gov' },
			{ y: 3, label: 'www.ukp.tu-darmstadt.de' },
			{ y: 2, label: 'svmlight.joachims.org' },
			{ y: 2, label: 'sourceforge.net' },
			{ y: 2, label: 'pascallin.ecs.soton.ac.uk' },
			{ y: 2, label: 'groups.csail.mit.edu' },
			{ y: 2, label: 'blog.twitter.com' },
			{ y: 2, label: 'www.speech.cs.cmu.edu' },
			{ y: 2, label: 'www.cs.cornell' },
			{ y: 2, label: 'festvox.org' },
			{ y: 2, label:  'en.wiktionary.org' },
			{ y: 2, label: 'www.maltparser.org' },
			{ y: 2, label: 'www.computing.dcu.ie'}
			
			
		]
	}]
});
chart.render();




































var chart = new CanvasJS.Chart("chartContainer2015", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "NAACL : 2015 Top URLs",
		legendText: "",
		dataPoints: [     
			{ y: 56, label: 'github.com' }, 
			{ y: 25, label: 'google.com' },
			{ y: 12, label: 'nlp.stanford.edu' },
			{ y: 10, label: 'arxiv.org' },
			{ y: 8, label: 'en.wikipedia.org' },
			{ y: 6, label: 'umass.edu' },
			{ y: 6, label:  'research.microsoft.com' },
			{ y: 6, label: 'wordnet.princeton.edu' },
			{ y: 6, label: 'www.statmt.org' },
			{ y: 19, label: 'cmu.edu' },
			{ y: 5, label: 'ufal.mff.cuni.cz' },
			{ y: 4, label: 'lucene.apache.org' },
			{ y: 4, label: 'statmt.org' },
			{ y: 4, label: 'upenn.edu' },
			{ y: 4, label: 'www.gurobi.com' },
			{ y: 4, label: 'bitbucket.org' },
			{ y: 4, label: 'www.nist.gov' },
			{ y: 3, label: 'www.crowdflower.com' },            
			{ y: 3, label: 'www.ssa.gov' },
			{ y: 3, label: 'ml.nec-labs.com' }
			
		]
	}]
});
chart.render();












































var chart = new CanvasJS.Chart("chartContainer2016", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "NAACL : 2016 Top URLs",
		legendText: "",
		dataPoints: [     
			{ y: 69, label: 'github.com' }, 
			{ y: 25, label: 'google.com' },
			{ y: 11, label: 'nlp.stanford.edu' },
			{ y: 8, label: 'www.statmt.org' },
			{ y: 8, label: 'bitbucket.org' },
			{ y: 6, label: 'alt.qcri.org' },
			{ y: 5, label:  'upenn.edu' },
			{ y: 5, label: 'www.cs.cmu.edu' },
			{ y: 4, label: 'arxiv.org' },
			{ y: 4, label: 'radimrehurek.com' },
			{ y: 4, label: 'tinyurl.com' },
			{ y: 4, label: 'www.cnts.ua.ac.be' },
			{ y: 4, label: 'cistern.cis.lmu.de' },
			{ y: 3, label: 'upenn.edu' },
			{ y: 3, label: 'www.crowdflower.com' },
			{ y: 3, label: 'stackexchange.com' },
			{ y: 2, label: 'lotus.kuee.kyoto-u.ac.jp' },
			{ y: 2, label: 'www.opensubtitles.org' },            
			{ y: 2, label: 'www.clg.ox.ac.uk' },
			{ y: 2, label: 'svn.ask.it.usyd.edu.au' },
			{ y: 2, label: 'nlg.isi.edu' }
			
		]
	}]
});
chart.render();












































var chart = new CanvasJS.Chart("chartContainer2018", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	width: 900,
	title:{
		text: ""
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
		name: "NAACL : 2018 Top URLs",
		legendText: "",
		dataPoints: [     
			{ y: 255, label: 'github.com' },
			{ y: 550, label: 'www.aclweb.org' },
			{ y: 135, label: 'arxiv.org' },
			{ y: 79, label: 'dl.acm.org' },
			{ y: 26, label: 'nlp.stanford.edu' },
			{ y: 22, label: 'papers.nips.cc' },
			{ y: 19, label:  'google.com' },
			{ y: 11, label: 'aclanthology.info' },
			{ y: 10, label: 'transacl.org' },
			{ y: 9, label: 'www.statmt.org' },
			{ y: 8, label: 'en.wikipedia.org' },
			{ y: 7, label: 'www.reddit.com' },
			{ y: 7, label: 'cogcomp.org' },
			{ y: 7, label: 'www.nltk.org' },
			{ y: 7, label: 'www.cs.jhu.edu' },
			{ y: 7, label: 'jmlr.org' },
			{ y: 7, label: 'upenn.edu' },
			{ y: 6, label: 'www.aaai.org' },            
			{ y: 6, label: 'spacy.io' },
			{ y: 6, label: 'dumps.wikimedia.org' },
			{ y: 6, label: 'developer.twitter.com' }
			
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
		var dt= e.dataPoint.x.getFullYear();
		// alert(  e.dataSeries.type + ", dataPoint { x:" + dt + ", y: "+ e.dataPoint.y + " }" );
		var str1= "chartContainer";
		var res = str1.concat(dt);
		var x = document.getElementById(res);
		
		
		if (x.style.display === "none") {
					//var i;
					[2000,2001,2003,2004,2006,2007,2009,2010,2012,2013,2015,2016,2018].forEach(function(i) {
						var str = "chartContainer";
						var res1 = str.concat(i);
						
						var x1 = document.getElementById(res1);
						x1.style.display='none';
						
					});
				
				x.style.display = "block";
				}
				else {
				x.style.display = "none";
				
				}
		
	}
	
	

}