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