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
		name: "IJCNLP: Long Papers",
		dataPoints: [
				{ y: 88, x: new Date(2005,0) },
				{ y: 60, x: new Date(2008,0) },
				{ y: 121, x: new Date(2009,0) },
				{ y: 146, x: new Date(2011,0) },
				{ y: 86, x: new Date(2013,0) },
				{ y: 174, x: new Date(2015,0) },
				{ y: 103, x: new Date(2017,0) }
		]
		},
		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Short Papers",
			color: "#e3f702",
			dataPoints: [
				{ y: 1, x: new Date(2005,0) },
				{ y: 85, x: new Date(2008,0) },
				{ y: 93, x: new Date(2009,0) },
				{ y: 30, x: new Date(2011,0) },
				{ y: 114, x: new Date(2013,0) },
				{ y: 142, x: new Date(2015,0) },
				{ y: 76, x: new Date(2017,0) }
			]
		},

		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Demo Paper",
			color: "#f70202",
			dataPoints: [
				{ y: 49, x: new Date(2005,0) },
				{ y: 0, x: new Date(2008,0) },
				{ y: 11, x: new Date(2009,0) },
				{ y: 3, x: new Date(2011,0) },
				{ y: 12, x: new Date(2013,0) },
				{ y: 25, x: new Date(2015,0) },
				{ y: 17, x: new Date(2017,0) }
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
		name: "IJCNLP: Old Authors",    
		dataPoints: [
				{ y: 0.0, x: new Date(2005,0) },
				{ y: 0.21037463976945245, x: new Date(2008,0) },
				{ y: 0.16404886561954624, x: new Date(2009,0) },
				{ y: 0.29336188436830835, x: new Date(2011,0) },
				{ y: 0.2698706099815157, x: new Date(2013,0) },
				{ y: 0.2046728971962617, x: new Date(2015,0) },
				{ y: 0.251621271076524, x: new Date(2017,0) }
		]
		},
		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "New Authors",
			color: "#e3f702",
			dataPoints: [
				{ y: 1.0, x: new Date(2005,0) },
				{ y: 0.7896253602305475, x: new Date(2008,0) },
				{ y: 0.8359511343804538, x: new Date(2009,0) },
				{ y: 0.7066381156316917, x: new Date(2011,0) },
				{ y: 0.7301293900184843, x: new Date(2013,0) },
				{ y: 0.7953271028037383, x: new Date(2015,0) },
				{ y: 0.748378728923476, x: new Date(2017,0) }
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
		name: "IJCNLP: Avg. number of Papers per Author per Year",
		dataPoints: [
			
			
			
			{ y:0.360313315926893, x: new Date(2005,0) },
			{ y:0.3502415458937198, x: new Date(2008,0) },
			{ y:0.32514450867052025, x: new Date(2009,0) },
			{ y:0.3173758865248227, x: new Date(2011,0) },
			{ y:0.31689088191330345, x: new Date(2013,0) },
			{ y:0.25445103857566764, x: new Date(2015,0) },
			{ y:0.21374045801526717, x: new Date(2017,0) }
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
		name: "IJCNLP: Avg. number of Authors per Paper per Year",
		dataPoints: [
			
			
			
			{ y:2.7753623188405796, x: new Date(2005,0) },
			{ y:2.8551724137931034, x: new Date(2008,0) },
			{ y:3.0755555555555554, x: new Date(2009,0) },
			{ y:3.1508379888268156, x: new Date(2011,0) },
			{ y:3.1556603773584904, x: new Date(2013,0) },
			{ y:3.9300291545189503, x: new Date(2015,0) },
			{ y:4.678571428571429, x: new Date(2017,0) }
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
		name: "IJCNLP: Long Papers",
		dataPoints: [
			
			
			
			{ y:14.806818181818182, x: new Date(2005,0) },
			{ y:24.083333333333332, x: new Date(2008,0) },
			{ y:25.710743801652892, x: new Date(2009,0) },
			{ y:24.061643835616437, x: new Date(2011,0) },
			{ y:24.162790697674417, x: new Date(2013,0) },
			{ y:35.01149425287356, x: new Date(2015,0) },
			{ y:31.067961165048544, x: new Date(2017,0) }
		]
		},


		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Short Papers",
			color: "#C00C0C",
			dataPoints: [
			
			
			
			
			
			{ y:0.0, x: new Date(2005,0) },
			{ y:13.894117647058824, x: new Date(2008,0) },
			{ y:9.666666666666666, x: new Date(2009,0) },
			{ y:16.3, x: new Date(2011,0) },
			{ y:19.25438596491228, x: new Date(2013,0) },
			{ y:22.881944444444443, x: new Date(2015,0) },
			{ y:21.092105263157894, x: new Date(2017,0) }
			
			
			
			
			]
	},
	{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Demo Papers",
			color: "#309000",
			dataPoints: [
			
			
			
			
			
			{ y:10.489795918367347, x: new Date(2005,0) },
			{ y:0, x: new Date(2008,0) },
			{ y:7.0, x: new Date(2009,0) },
			{ y:8.0, x: new Date(2011,0) },
			{ y:9.333333333333334, x: new Date(2013,0) },
			{ y:18.6, x: new Date(2015,0) },
			{ y:10.705882352941176, x: new Date(2017,0) }
			
			
			
			
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
		name: "IJCNLP: Avg. number of URLs per Paper per Year",
		dataPoints: [
			
			
			
			{ y:1.891304347826087, x: new Date(2005,0) },
			{ y:2.220689655172414, x: new Date(2008,0) },
			{ y:2.0844444444444443, x: new Date(2009,0) },
			{ y:2.6927374301675977, x: new Date(2011,0) },
			{ y:3.0660377358490565, x: new Date(2013,0) },
			{ y:3.043731778425656, x: new Date(2015,0) },
			{ y:3.8010204081632653, x: new Date(2017,0) }
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
		name: "IJCNLP: Avg. number of URLs in Footnote per Paper per Year",
		dataPoints: [
			
			
			
			{ y:0.4855072463768116, x: new Date(2005,0) },
			{ y:0.6827586206896552, x: new Date(2008,0) },
			{ y:0.7422222222222222, x: new Date(2009,0) },
			{ y:1.1340782122905029, x: new Date(2011,0) },
			{ y:1.2028301886792452, x: new Date(2013,0) },
			{ y:1.2944606413994169, x: new Date(2015,0) },
			{ y:1.4489795918367347, x: new Date(2017,0) }
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
		name: "IJCNLP: Avg. number of Tables per Paper per Year",
		dataPoints: [
			
			
			
			{ y:3.9927536231884058, x: new Date(2005,0) },
			{ y:3.1631205673758864, x: new Date(2008,0) },
			{ y:3.107142857142857, x: new Date(2009,0) },
			{ y:4.247191011235955, x: new Date(2011,0) },
			{ y:3.6445497630331753, x: new Date(2013,0) },
			{ y:3.7551020408163267, x: new Date(2015,0) },
			{ y:4.596938775510204, x: new Date(2017,0) }
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
		name: "IJCNLP: Avg. number of Figures per Paper per Year",
		dataPoints: [
			
			
			
			{ y:2.536231884057971, x: new Date(2005,0) },
			{ y:2.3191489361702127, x: new Date(2008,0) },
			{ y:2.6473214285714284, x: new Date(2009,0) },
			{ y:2.8876404494382024, x: new Date(2011,0) },
			{ y:2.161137440758294, x: new Date(2013,0) },
			{ y:2.979591836734694, x: new Date(2015,0) },
			{ y:2.923469387755102, x: new Date(2017,0) }
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
		name: "IJCNLP: Most Popular primary URL domains & their Frequencies",
		legendText: "",
		dataPoints: [
			{ y:17,  label:'arxiv.org'  },
			{ y:177,  label:'github.com'  },
			{ y:100,  label:'code.google.com'  },
			{ y:78,  label:'nlp.stanford.edu'  },
			{ y:69,  label:'en.wikipedia.org'  },
			{ y:35,  label:'www.statmt.org'  },
			{ y:29,  label:'sourceforge.net'  },
			{ y:27,  label:'www.nist.gov'  },
			{ y:26,  label:'www.aclweb.org'  },
			{ y:24,  label:'chasen.org'  },
			{ y:23,  label:'dbpedia.org'  },
			{ y:22,  label:'www.csie.ntu.edu.tw'  },
			{ y:19,  label:'www.ldc.upenn.edu'  },
			{ y:19,  label:'mallet.cs.umass.edu'  },
			{ y:19,  label:'aclweb.org'  },
			{ y:17,  label:'svmlight.joachims.org'  },
			{ y:16,  label:'duc.nist.gov'  },
			{ y:16,  label:'lucene.apache.org'  },
			{ y:16,  label:'dumps.wikimedia.org'  },
			{ y:15,  label:'www.cis.upenn.edu'  }
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
		name: "IJCNLP : Top Unique GitHub Pages",
		legendText: "",
		dataPoints: [  
		{ y: 4, label: 'fxsjy/jieba' },
		{ y: 2, label: 'SAG-KeLP' },
		{ y: 2, label: 'wlin12/wang2vec' },
		{ y: 2, label: 'xpqiu/fnlp/' },
		{ y: 2, label: 'yoonkim/CNN' },
		{ y: 2, label: 'hltcoe/mingpipe' },
		{ y: 2, label: 'jflanigan/jamr' },
		{ y: 2, label: 'ghpaetzold/' },
		{ y: 2, label: 'BYVoid/OpenCC' },
		{ y: 2, label: 'beckdaniel/' },
		{ y: 2, label: 'EdinburghNLP/' },
		{ y: 1, label: 'Thomas1205/RegAligner' },
		{ y: 1, label: 'sfu-natlang/Kriya' },
		{ y: 1, label: 'adrien-bougouin/' },
		{ y: 1, label: 'boudinfl/centrality_' },
		{ y: 1, label: 'rasoolims/' },
		{ y: 1, label: 'CNGLdlab/' },
		{ y: 1, label: 'langtech/aikuma' },
		{ y: 1, label: 'choroba/inquiry/' }
			
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
		name: "IJCNLP : Top University Pages",
		legendText: "",
		dataPoints: [
			{ y: 6, label:'R.O.C.' },
			{ y: 11, label:'Microsoft Research' },
			{ y: 12, label:'Microsoft Research Asia' },
			{ y: 12, label:'Stanford University' },
			{ y: 10, label:'Harbin Institute of Technology' },
			{ y: 10, label:'University of Lethbridge' },
			{ y: 9, label:'Saga University Information Technology Center' },
			{ y: 9, label:'Tokyo Institute of Technology' },
			{ y: 8, label:'University of California' },
			{ y: 8, label:'Johns Hopkins Hospital' },
			{ y: 7, label:'University of Washington' },
			{ y: 7, label:'Columbia University' },
			{ y: 7, label:'School of Information Systems' },
			{ y: 6, label:'Department of Computer Science' },
			{ y: 6, label:'National Taiwan University ' },
			{ y: 5, label:'University of Melbourne' },
			{ y: 5, label:'Carnegie Mellon University Silicon Valley' },
			{ y: 5, label:'Pohang University of Science and Technology ' },
			{ y: 5, label:'University of York' },
			{ y: 5, label:'University of Maryland' }
			
		
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
		
		
		
		
		
		
		

		if(dt==2005){
			dp = [  
			{ y:5, label: 'isi.edu' },
			{ y:3, label: 'monash.edu.au' },
			{ y:3, label: 'altavista.com' },
			{ y:5, label: 'nii.ac.jp' },
			{ y:3, label: 'rulequest.com' },
			{ y:5, label: 'chasen.org' },
			{ y:3, label: 'fjoch.com' },
			{ y:7, label: 'upenn.edu' },
			{ y:3, label: 'u-tokyo.ac.jp' },
			{ y:3, label: 'sighan.org' },
			{ y:2, label: 'goo.ne.jp' },
			{ y:2, label: 'probertencyclopaedia.com' },
			{ y:17, label: 'nist.gov' },
			{ y:3, label: 'pku.edu.cn' },
			{ y:2, label: 'delph-in.net' },
			{ y:6, label: 'naist.jp' },
			{ y:2, label: 'fao.org' },
			{ y:3, label: 'google.com' },
			{ y:1, label: 'amazon.com' },
			{ y:1, label: 'joachims.org' },
			{ y:1, label: 'ucd.ie' }
			
			
			
		]
		}
		else if(dt==2008){
			dp = [ 
			{ y:2, label: 'w3.org' },
			{ y:3, label: 'sighan.org' },
			{ y:5, label: 'pku.edu.cn' },
			{ y:13, label: 'nist.gov' },
			{ y:5, label: 'naist.jp' },
			{ y:12, label: 'upenn.edu' },
			{ y:10, label: 'chasen.org' },
			{ y:10, label: 'nii.ac.jp' },
			{ y:2, label: 'waikato.ac.nz' },
			{ y:5, label: 'umass.edu' },
			{ y:8, label: 'wikipedia.org' },
			{ y:4, label: 'joachims.org' },
			{ y:3, label: 'gate.ac.uk' },
			{ y:2, label: 'nict.go.jp' },
			{ y:12, label: 'sourceforge.net' },
			{ y:2, label: 'keenage.com' },
			{ y:2, label: 'hal3.name' },
			{ y:2, label: 'googlepages.com' },
			{ y:2, label: 'quebec-japon.com' },
			{ y:2, label: 'apache.org' },
			
			
			
		]
		}
		else if(dt==2009){
			dp = [ 
			{ y:3, label: 'sri.com' },
			{ y:2, label: 'flickr.com' },
			{ y:3, label: 'pitt.edu' },
			{ y:12, label: 'stanford.edu' },
			{ y:5, label: 'colorado.edu' },
			{ y:2, label: 'upc.edu' },
			{ y:4, label: 'hit.edu.cn' },
			{ y:2, label: 'vxu.se' },
			{ y:2, label: 'rpi.edu' },
			{ y:12, label: 'upenn.edu' },
			{ y:15, label: 'sourceforge.net' },
			{ y:5, label: 'mit.edu' },
			{ y:4, label: 'joachims.org' },
			{ y:3, label: 'cornell.edu' },
			{ y:3, label: 'kyoto-u.ac.jp' },
			{ y:8, label: 'google.com' },
			{ y:4, label: 'ualberta.ca' },
			{ y:4, label: 'apache.org' },
			{ y:8, label: 'statmt.org' },
			{ y:2, label: 'convinceme.net' }
			
			
			
			
		]
		}
		else if(dt==2011){
			dp = [ 
			{ y:2, label: 'cuny.edu' },
			{ y:2, label: 'aclweb.org' },
			{ y:6, label: 'stanford.edu' },
			{ y:7, label: 'yahoo.com' },
			{ y:26, label: 'sourceforge.net' },
			{ y:7, label: 'chasen.org' },
			{ y:3, label: 'u-tokyo.ac.jp' },
			{ y:7, label: 'nii.ac.jp' },
			{ y:5, label: 'statmt.org' },
			{ y:5, label: 'apache.org' },
			{ y:8, label: 'upenn.edu' },
			{ y:6, label: 'homepages.inf.ed.ac.uk' },
			{ y:10, label: 'kyoto-u.ac.jp' },
			{ y:3, label: 'fjoch.com' },
			{ y:17, label: 'google.com' },
			{ y:4, label: 'wikimedia.org' },
			{ y:2, label: 'chokkan.org' },
			{ y:2, label: 'cornell.edu' },
			{ y:5, label: 'ntu.edu.tw' },
			{ y:10, label: 'wikipedia.org' }
			
			
			
			
		]
		}
		else if(dt==2013){
			dp = [ 
			{ y:9, label: 'nih.gov' },
			{ y:22, label: 'wikipedia.org' },
			{ y:7, label: 'apache.org' },
			{ y:3, label: 'keenage.com' },
			{ y:2, label: 'apple.com' },
			{ y:7, label: 'ntu.edu.tw' },
			{ y:12, label: 'sourceforge.net' },
			{ y:14, label: 'stanford.edu' },
			{ y:2, label: 'unitn.it' },
			{ y:2, label: 'dbpedia.org' },
			{ y:12, label: 'kyoto-u.ac.jp' },
			{ y:4, label: 'maltparser.org' },
			{ y:3, label: 'chokkan.org' },
			{ y:3, label: 'u-szeged.hu' },
			{ y:8, label: 'statmt.org' },
			{ y:2, label: 'jst.go.jp' },
			{ y:10, label: 'cuni.cz' },
			{ y:24, label: 'google.com' },
			{ y:2, label: 'aclweb.org' },
			{ y:3, label: 'iitb.ac.in' }
			
			
			
			
		]
		}
		else if(dt==2015){
			dp = [ 
			{ y:12, label: 'cmu.edu' },
			{ y:2, label: 'univ-lemans.fr' },
			{ y:72, label: 'github.com' },
			{ y:12, label: 'statmt.org' },
			{ y:5, label: 'github.io' },
			{ y:47, label: 'stanford.edu' },
			{ y:10, label: 'microsoft.com' },
			{ y:4, label: 'illinois.edu' },
			{ y:7, label: 'umass.edu' },
			{ y:11, label: 'apache.org' },
			{ y:7, label: 'wikimedia.org' },
			{ y:4, label: 'natcorp.ox.ac.uk' },
			{ y:61, label: 'google.com' },
			{ y:5, label: 'arxiv.org' },
			{ y:7, label: 'scikit-learn.org' },
			{ y:27, label: 'wikipedia.org' },
			{ y:4, label: 'priberam.com' },
			{ y:8, label: 'unitn.it' },
			{ y:14, label: 'upenn.edu' },
			{ y:12, label: 'sourceforge.net' }
			
			
			
			
		]
		}
		else if(dt==2017){
			dp = [ 
			{ y:18, label: 'doi.org' },
			{ y:99, label: 'github.com' },
			{ y:13, label: 'stanford.edu' },
			{ y:3, label: 'nltk.org' },
			{ y:7, label: 'radimrehurek.com' },
			{ y:20, label: 'dbpedia.org' },
			{ y:11, label: 'upenn.edu' },
			{ y:5, label: 'statmt.org' },
			{ y:24, label: 'google.com' },
			{ y:6, label: 'scikit-learn.org' },
			{ y:12, label: 'github.io' },
			{ y:4, label: 'cnts.ua.ac.be' },
			{ y:38, label: 'aclweb.org' },
			{ y:10, label: 'acm.org' },
			{ y:11, label: 'arxiv.org' },
			{ y:6, label: 'bit.ly' },
			{ y:4, label: 'nips.cc' },
			{ y:6, label: 'sinica.edu.tw' },
			{ y:5, label: 'wikimedia.org' },
			{ y:12, label: 'wikipedia.org' }
			
			
			
			
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
	
	
	
	
	if (dtp=='20050')
	{
		dp = [                                         
			{ y: 5, label:  'www.isi.edu'}
			
		]
	}
	else if (dtp=='20051')
	{
		dp = [ 
			
			{ y: 3, label: 'www.csse.monash.edu.au' }
			
			
		]
	}
	else if (dtp=='20052')
	{
		dp = [ 
			
			{ y: 1, label: 'http://world.altavista.com/' },
			{ y: 2, label: 'www.altavista.com' }
			
		]
	}
	else if (dtp=='20053')
	{
		dp = [                                         
			
			{ y: 5, label: 'research.nii.ac.jp' }
			
		]
	}
	else if (dtp=='20054')
	{
		dp = [ 
			
			{ y: 3, label: 'www.rulequest.com' }
			
		]
	}
	else if (dtp=='20055')
	{
		dp = [                                         
			{ y: 5, label: 'chasen.org' }
			
		]
	}
	else if (dtp=='20056')
	{
		dp = [                                         
			{ y: 3, label:  'www.fjoch.com' }
			
		]
	}
	else if (dtp=='20057')
	{
		dp = [                                         
			{ y: 2, label: 'www.cis.upenn.edu' },
			{ y: 5, label: 'www.ldc.upenn.edu' }
			
		]
	}
	else if (dtp=='20058')
	{
		dp = [                                         
			{ y: 3, label: 'www.kc.t.u-tokyo.ac.jp' }
			
		]
	}
	else if (dtp=='20059')
	{
		dp = [                                         
			{ y: 3, label: 'www.sighan.org' }
			
		]
	}
	else if (dtp=='200510')
	{
		dp = [                                         
			{ y: 2, label: 'www.goo.ne.jp' }
			
		]
	}
	else if (dtp=='200511')
	{
		dp = [                                         
			{ y: 2, label: 'www.probertencyclopaedia.com' }
			
		]
	}
	else if (dtp=='200512')
	{
		dp = [                                         
			{ y: 3, label: 'trec.nist.gov' },
			{ y: 2, label: 'duc.nist.gov' },
			{ y: 6, label: 'www.nist.gov' },
			{ y: 3, label: 'www.itl.nist.gov' },
			{ y: 3, label: 'www-nlpir.nist.gov' }
			
		]
	}
	else if (dtp=='200513')
	{
		dp = [                                         
			{ y: 2, label: 'www.icl.pku.edu.cn' },
			{ y: 1, label: 'http://icl.pku.edu.cn/yujs/' }
			
		]
	}
	else if (dtp=='200514')
	{
		dp = [                                         
			{ y: 2, label:  'www.delph-in.net' }
			
		]
	}
	else if (dtp=='200515')
	{
		dp = [                                         
			{ y: 5, label: 'chasen.naist.jp' },
			{ y: 1, label: 'http://cl.naist.jp' }
			
		]
	}
	else if (dtp=='200516')
	{
		dp = [                                         
			{ y: 2, label: 'www.fao.org' }
			
		]
	}
	else if (dtp=='200517')
	{
		dp = [                                         
			{ y: 2, label: 'news.google.com' },
			{ y: 1, label: 'http://www.google.com/' }
			
		]
	}
	else if (dtp=='200518')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.amazon.com' }
			
		]
	}
	else if (dtp=='200519')
	{
		dp = [                                         
			{ y: 1, label: 'http://svmlight.joachims.org/' }
			
		]
	}
	else if (dtp=='200520')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cs.ucd.ie/staff/tveale.html' }
			
		]
	}
	else if (dtp=='20080')
	{
		dp = [                                         
			{ y: 2, label: 'www.w3.org' }
			
		]
	}
	else if (dtp=='20081')
	{
		dp = [                                         
			{ y: 3, label: 'www.sighan.org' }
			
		]
	}
	else if (dtp=='20082')
	{
		dp = [                                         
			{ y: 3, label: 'icl.pku.edu.cn' },
			{ y: 1, label: 'http://ccl.pku.edu.cn:8080/ccl' },
			{ y: 1, label: 'http://sewm.pku.edu.cn/QA/reference/ICTCLAS/FreeICT-' }
			
		]
	}
	else if (dtp=='20083')
	{
		dp = [                                         
			{ y: 2, label: 'duc.nist.gov' },
			{ y: 8, label: 'www.nist.gov' },
			{ y: 2, label: 'trec.nist.gov' },
			{ y: 1, label: 'http://math.nist.gov/javanumerics/jama/' }
			
		]
	}
	else if (dtp=='20084')
	{
		dp = [                                         
			{ y: 5, label:  'chasen.naist.jp' }
			
		]
	}
	else if (dtp=='20085')
	{
		dp = [                                         
			{ y: 7, label: 'www.ldc.upenn.edu' },
			{ y: 2, label: 'www.cis.upenn.edu' },
			{ y: 2, label: 'projects.ldc.upenn.edu' },
			{ y: 1, label: 'http://acl.ldc.upenn.edu/eacl2006/ws06'}
			
		]
	}
	else if (dtp=='20086')
	{
		dp = [                                         
			{ y: 10, label: 'chasen.org' }
			
		]
	}
	else if (dtp=='20087')
	{
		dp = [                                         
			{ y: 1, label: 'http://i-explosion.ex.nii.ac.jp/i-explosion/ctr.php/m/Inde-' },
			{ y: 4, label: 'tsubaki.ixnlp.nii.ac.jp' },
			{ y: 2, label: 'research.nii.ac.jp' },
			{ y: 1, label: 'http://geta.ex.nii.ac.jp' },
			{ y: 2, label: 'biocaster.nii.ac.jp' }
			
		]
	}
	else if (dtp=='20088')
	{
		dp = [                                         
			{ y: 2, label: 'www.cs.waikato.ac.nz' }
			
		]
	}
	else if (dtp=='20089')
	{
		dp = [                                         
			{ y: 4, label: 'mallet.cs.umass.edu' },
			{ y: 1, label: 'http://www.cs.umass.edu/~mccallum/bow/rainbow' }
			
		]
	}
	else if (dtp=='200810')
	{
		dp = [                                         
			{ y: 5, label: 'en.wikipedia.org' },
			{ y: 2, label: 'ja.wikipedia.org' },
			{ y: 1, label: 'http://www.wikipedia.org' }
			
		]
	}
	else if (dtp=='200811')
	{
		dp = [                                         
			{ y: 4, label: 'svmlight.joachims.org' }
			
		]
	}
	else if (dtp=='200812')
	{
		dp = [                                         
			{ y: 3, label: 'gate.ac.uk' }
			
		]
	}
	else if (dtp=='200813')
	{
		dp = [                                         
			{ y: 2, label: 'www2.nict.go.jp' }
			
		]
	}
	else if (dtp=='200814')
	{
		dp = [                                         
			{ y: 1, label: 'http://flexcrfs.sourceforge.net/' },
			{ y: 1, label: 'http://maxent.sourceforge.net/' },
			{ y: 4, label: 'mecab.sourceforge.net' },
			{ y: 2, label: 'crfpp.sourceforge.net' },
			{ y: 2, label: 'sourceforge.net' },
			{ y: 1, label: 'http://opennlp.sourceforge.net/' },
			{ y: 1, label: 'http://festival-te.sourceforge.net/wiki/Main_Page' }
			
		]
	}
	else if (dtp=='200815')
	{
		dp = [                                         
			{ y: 2, label: 'www.keenage.com' }
			
		]
	}
	else if (dtp=='200816')
	{
		dp = [                                         
			{ y: 2, label: 'pub.hal3.name' }
			
		]
	}
	else if (dtp=='200817')
	{
		dp = [                                         
			{ y: 2, label: 'ltrc.deptagset.googlepages.com' }
			
		]
	}
	else if (dtp=='200818')
	{
		dp = [                                         
			{ y: 2, label: 'quebec-japon.com' }
			
		]
	}
	else if (dtp=='200819')
	{
		dp = [                                         
			{ y: 2, label: 'lucene.apache.org' }
			
		]
	}
	else if (dtp=='20090')
	{
		dp = [                                         
			{ y: 3, label: 'www.speech.sri.com' }
			
		]
	}
	else if (dtp=='20091')
	{
		dp = [                                         
			{ y: 2, label: 'www.flickr.com' }
			
		]
	}
	else if (dtp=='20092')
	{
		dp = [                                         
			{ y: 3, label:  'www.cs.pitt.edu' }
			
		]
	}
	else if (dtp=='20093')
	{
		dp = [                                         
			{ y: 9, label: 'nlp.stanford.edu' },
			{ y: 2, label: 'ai.stanford.edu' },
			{ y: 1, label: 'http://abbreviation.stanford.edu/' }
			
		]
	}
	else if (dtp=='20094')
	{
		dp = [                                         
			{ y: 3, label: 'verbs.colorado.edu' },
			{ y: 2, label: 'lsa.colorado.edu' }
			
		]
	}
	else if (dtp=='20095')
	{
		dp = [                                         
			{ y: 2, label: 'www.lsi.upc.edu' }
			
		]
	}
	else if (dtp=='20096')
	{
		dp = [                                         
			{ y: 3, label: 'ir.hit.edu.cn' },
			{ y: 1, label: 'http://mitlab.hit.edu.cn/' }
			
		]
	}
	else if (dtp=='20097')
	{
		dp = [                                         
			{ y: 2, label: 'w3.msi.vxu.se' }
			
		]
	}
	else if (dtp=='20098')
	{
		dp = [                                         
			{ y: 2, label: 'cwl-projects.cogsci.rpi.edu' }
			
		]
	}
	else if (dtp=='20099')
	{
		dp = [                                         
			{ y: 6, label: 'www.cis.upenn.edu' },
			{ y: 1, label: 'http://bioie.ldc.upenn.edu/' },
			{ y: 2, label: 'www.seas.upenn.edu' },
			{ y: 2, label: 'projects.ldc.upenn.edu' },
			{ y: 1, label: 'http://www.ldc.upenn.edu/' }
			
		]
	}
	else if (dtp=='200910')
	{
		dp = [
			{ y: 3, label: 'sourceforge.net' },
			{ y: 1, label: 'http://stardict.sourceforge.net/' },
			{ y: 1, label: 'http://lpsolve.sourceforge.net/5.5/' },
			{ y: 4, label: 'opennlp.sourceforge.net' },
			{ y: 2, label: 'crfpp.sourceforge.net' },
			{ y: 1, label: 'http://argmax.sourceforge.net/' },
			{ y: 1, label: 'http://maxent.sourceforge.net' },
			{ y: 1, label: 'http://jswarm-pso.sourceforge.net/' },
			{ y: 1, label: 'http://nltk.sourceforge.net/' }
			
		]
	}
	else if (dtp=='200911')
	{
		dp = [                                         
			{ y: 2, label: 'groups.csail.mit.edu' },
			{ y: 2, label: 'people.csail.mit.edu' },
			{ y: 1, label: 'http://tedlab.mit.edu/' }
			
		]
	}
	else if (dtp=='200912')
	{
		dp = [                                         
			{ y: 4, label: 'svmlight.joachims.org' }
			
		]
	}
	else if (dtp=='200913')
	{
		dp = [                                         
			{ y: 3, label: 'www.cs.cornell.edu' }
			
		]
	}
	else if (dtp=='200914')
	{
		dp = [                                         
			{ y: 3, label: 'nlp.kuee.kyoto-u.ac.jp' }
			
		]
	}
	else if (dtp=='200915')
	{
		dp = [                                         
			{ y: 5, label: 'code.google.com' },
			{ y: 1, label: 'http://translate.google.com/translate_t' },
			{ y: 1, label: 'http://labs.google.com/sets' },
			{ y: 1, label: 'http://directory.google.com' }
			
		]
	}
	else if (dtp=='200916')
	{
		dp = [                                         
			{ y: 4, label: 'www.cs.ualberta.ca' }
			
		]
	}
	else if (dtp=='200917')
	{
		dp = [                                         
			{ y: 4, label: 'lucene.apache.org' }
			
		]
	}
	else if (dtp=='200918')
	{
		dp = [                                         
			{ y: 8, label: 'www.statmt.org' }
			
		]
	}
	else if (dtp=='200919')
	{
		dp = [                                         
			{ y: 2, label: 'convinceme.net' }
			
		]
	}
	else if (dtp=='20110')
	{
		dp = [                                         
			{ y: 2, label: 'nlp.cs.qc.cuny.edu' }
			
		]
	}
	else if (dtp=='20111')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.aclweb.org/anthology' },
			{ y: 1, label: 'http://aclweb.org/anthology' }
			
		]
	}
	else if (dtp=='20112')
	{
		dp = [                                         
			{ y: 6, label: 'nlp.stanford.edu' }
			
		]
	}
	else if (dtp=='20113')
	{
		dp = [                                         
			{ y: 2, label: 'developer.yahoo.com' },
			{ y: 3, label: 'answers.yahoo.com' },
			{ y: 1, label: 'http://reseach.yahoo.com/Academic' },
			{ y: 1, label: 'http://webscope.sandbox.yahoo.com/'}
			
		]
	}
	else if (dtp=='20114')
	{
		dp = [                                         
			{ y: 1, label: 'http://lpsolve.sourceforge.net/' },
			{ y: 8, label: 'crfpp.sourceforge.net' },
			{ y: 10, label: 'sourceforge.net' },
			{ y: 4, label: 'mecab.sourceforge.net' },
			{ y: 1, label: 'http://champollion.sourceforge.net/' },
			{ y: 1, label: 'http://palmkit.sourceforge.net/' },
			{ y: 1, label: 'http://pybsddb.sourceforge.net/bsddb3.html' }
			
		]
	}
	else if (dtp=='20115')
	{
		dp = [                                         
			{ y: 7, label: 'chasen.org' }
			
		]
	}
	else if (dtp=='20116')
	{
		dp = [                                         
			{ y: 2, label: 'www-tsujii.is.s.u-tokyo.ac.jp' },
			{ y: 1, label: 'http://www.tkl.iis.u-tokyo.ac.jp/ynaga/opal/' }
			
		]
	}
	else if (dtp=='20117')
	{
		dp = [                                         
			{ y: 4, label:  'ntcir.nii.ac.jp' },
			{ y: 1, label:  'https://kaken.nii.ac.jp/ja/p/' },
			{ y: 2, label:  'research.nii.ac.jp' }
			
		]
	}
	else if (dtp=='20118')
	{
		dp = [                                         
			{ y: 5, label: 'www.statmt.org' }
			
		]
	}
	else if (dtp=='20119')
	{
		dp = [                                         
			{ y: 2, label: 'lucene.apache.org' },
			{ y: 2, label: 'uima.apache.org' },
			{ y: 1, label: 'http://incubator.apache.org/opennlp/' }
			
		]
	}
	else if (dtp=='201110')
	{
		dp = [                                         
			{ y: 3, label: 'projects.ldc.upenn.edu' },
			{ y: 2, label: 'www.seas.upenn.edu' },
			{ y: 1, label: 'http://www.ldc.upenn.edu' },
			{ y: 2, label: 'www.cis.upenn.edu' }
			
		]
	}
	else if (dtp=='201111')
	{
		dp = [                                         
			{ y: 6, label: 'homepages.inf.ed.ac.uk' }
			
		]
	}
	else if (dtp=='201112')
	{
		dp = [                                         
			{ y: 6, label: 'nlp.kuee.kyoto-u.ac.jp' },
			{ y: 4, label: 'nlp.ist.i.kyoto-u.ac.jp' }
			
		]
	}
	else if (dtp=='201113')
	{
		dp = [                                         
			{ y: 3, label: 'www.fjoch.com' }
			
		]
	}
	else if (dtp=='201114')
	{
		dp = [                                         
			{ y: 13, label: 'code.google.com' },
			{ y: 1, label: 'http://www.google.com' },
			{ y: 2, label: 'sites.google.com' },
			{ y: 1, label: 'http://labs.google.com/sets' }
			
		]
	}
	else if (dtp=='201115')
	{
		dp = [                                         
			{ y: 3, label: 'dumps.wikimedia.org' },
			{ y: 1, label: 'http://download.wikimedia.org.jawiki' }
			
		]
	}
	else if (dtp=='201116')
	{
		dp = [                                         
			{ y: 2, label: 'www.chokkan.org' }
			
		]
	}
	else if (dtp=='201117')
	{
		dp = [                                         
			{ y: 2, label: 'www.cs.cornell.edu' }
			
		]
	}
	else if (dtp=='201118')
	{
		dp = [                                         
			{ y: 5, label: 'www.csie.ntu.edu.tw' }
			
		]
	}
	else if (dtp=='201119')
	{
		dp = [                                         
			{ y: 9, label: 'en.wikipedia.org' },
			{ y: 1, label: 'http://download.wikipedia.org' }
			
		]
	}
	else if (dtp=='20130')
	{
		dp = [                                         
			
			{ y: 4, label: 'www.nlm.nih.gov' },
			{ y: 4, label:  'www.ncbi.nlm.nih.gov' },
			{ y: 1, label: 'http://metamap.nlm.nih.gov/' }
			
		]
	}
	else if (dtp=='20131')
	{
		dp = [                                         
			
			{ y: 15, label: 'en.wikipedia.org' },
			{ y: 2, label: 'wikipedia.org' },
			{ y: 1, label: 'http://www.wikipedia.org/' },
			{ y: 2, label: 'simple.wikipedia.org' },
			{ y: 2, label: 'ja.wikipedia.org' }
			
		]
	}
	else if (dtp=='20132')
	{
		dp = [                                         
			
			{ y: 3, label: 'opennlp.apache.org' },
			{ y: 1, label: 'http://uima.apache.org/sandbox.html' },
			{ y: 2, label: 'hadoop.apache.org' },
			{ y: 1, label: 'http://lucene.apache.org/' }
			
		]
	}
	else if (dtp=='20133')
	{
		dp = [                                         
			
			{ y: 3, label: 'www.keenage.com' }
			
		]
	}
	else if (dtp=='20134')
	{
		dp = [                                         
			
			{ y: 2, label: 'discussions.apple.com' }
			
		]
	}
	else if (dtp=='20135')
	{
		dp = [                                         
			
			{ y: 6, label: 'www.csie.ntu.edu.tw' },
			{ y: 1, label: 'http://nlg18.csie.ntu.edu.tw' }
			
		]
	}
	else if (dtp=='20136')
	{
		dp = [                                         
			
			{ y: 5, label:'sourceforge.net' },
			{ y: 1, label:'http://gibbslda.sourceforge.net' },
			{ y: 1, label:'http://cmusphinx.sourceforge.net/' },
			{ y: 1, label:'http://tashaphyne.sourceforge.net/' },
			{ y: 3, label:'crfpp.sourceforge.net' },
			{ y: 1, label:'http://mecab.sourceforge.net/' }
			
		]
	}
	else if (dtp=='20137')
	{
		dp = [                                         
			
			{ y: 11, label: 'nlp.stanford.edu' },
			{ y: 2, label: 'www-nlp.stanford.edu' },
			{ y: 1, label: 'http://ai.stanford.edu/amaas/data/sentiment/' }
			
		]
	}
	else if (dtp=='20138')
	{
		dp = [                                         
			
			{ y: 2, label: 'disi.unitn.it' }
			
		]
	}
	else if (dtp=='20139')
	{
		dp = [                                         
			
			{ y: 2, label: 'dbpedia.org' }
			
		]
	}
	else if (dtp=='201310')
	{
		dp = [                                         
			
			{ y: 9, label: 'nlp.ist.i.kyoto-u.ac.jp' },
			{ y: 1, label: 'http://nlp.kuee.kyoto-u.ac.jp/kuntt/' },
			{ y: 2, label: 'orchid.kuee.kyoto-u.ac.jp'}
			
		]
	}
	else if (dtp=='201311')
	{
		dp = [                                         
			
			{ y: 4, label: 'www.maltparser.org' }
			
		]
	}
	else if (dtp=='201312')
	{
		dp = [                                         
			
			{ y: 3, label: 'www.chokkan.org' }
			
		]
	}
	else if (dtp=='201313')
	{
		dp = [                                         
			
			{ y: 3, label: 'www.inf.u-szeged.hu' }
			
		]
	}
	else if (dtp=='201314')
	{
		dp = [                                         
			
			{ y: 8, label: 'www.statmt.org' }
			
		]
	}
	else if (dtp=='201315')
	{
		dp = [                                         
			
			{ y: 2, label: 'www.jst.go.jp' }
			
		]
	}
	else if (dtp=='201316')
	{
		dp = [                                         
			
			{ y: 8, label: 'ufal.mff.cuni.cz' },
			{ y: 1, label: 'http://ucnk.ff.cuni.cz/syn2005.php' },
			{ y: 1, label: 'http://utkl.ff.cuni.cz/~rosen/public/anotace.pdf' }
			
		]
	}
	else if (dtp=='201317')
	{
		dp = [                                         
			{ y: 1, label: 'http://google.com' },
			{ y: 16, label: 'code.google.com' },
			{ y: 1, label: 'http://www.google.com.tw' },
			{ y: 1, label: 'http://www.google.com/intl/zh-CN/ime/pinyin/' },
			{ y: 2, label: 'play.google.com' },
			{ y: 1, label:'http://w.google.com' },
			{ y: 1, label: 'http://news.google.com' },
			{ y: 1, label: 'https://developers.google.com/maps/' }
			
		]
	}
	else if (dtp=='201318')
	{
		dp = [                                         
			
			{ y: 2, label:  'aclweb.org' }
			
		]
	}
	else if (dtp=='201319')
	{
		dp = [                                         
			
			{ y: 3, label: 'www.cfilt.iitb.ac.in' }
			
		]
	}
	else if (dtp=='20150')
	{
		dp = [                                         
			
			{ y: 3, label: 'www.cs.cmu.edu' },
			{ y: 1, label: 'http://rtw.ml.cmu.edu/resources/ppa' },
			{ y: 6, label: 'www.ark.cs.cmu.edu' },
			{ y: 1, label: 'http://www.speech.cs.cmu.edu/cgi-bin/cmudict' },
			{ y: 1, label: 'http://cs.cmu.edu/'}
			
		]
	}
	else if (dtp=='20151')
	{
		dp = [                                         
			
			{ y: 2, label: 'www-lium.univ-lemans.fr' }
			
		]
	}
	else if (dtp=='20152')
	{
		dp = [                                         
			
			{ y: 70, label: 'github.com'},
			{ y: 1, label: 'http://www.github.com/jmielens/gpc-acl-2015' },
			{ y: 1, label: 'https://github.comw/yoonkim/CNN_sentence' }
			
		]
	}
	else if (dtp=='20153')
	{
		dp = [                                         
			
			{ y: 3, label: 'matrix.statmt.org' },
			{ y: 9, label: 'www.statmt.org' }
			
		]
	}
	else if (dtp=='20154')
	{
		dp = [                                         
			{ y: 2, label: 'restoa.github.io' },
			{ y: 2, label: 'lvdmaaten.github.io' },
			{ y: 1, label: 'http://hltfbk.github.io/Excitement-Open-Platform/' },
			{ y: 4, label: 'universaldependencies.github.io' },
			{ y: 1, label: 'http://conll.github.io/' },
			{ y: 5, label: 'taku910.github.io' },
			{ y: 1, label: 'http://knowitall.github.io/openie/' },
			{ y: 1, label: 'https://dkpro.github.io/dkpro-csniper' },
			{ y: 1, label: 'lvdmaaten.github.io' },
			{ y: 1, label: 'http://ghpaetzold.github.io/MorphAdornerToolkit/' }
			
		]
	}
	else if (dtp=='20155')
	{
		dp = [                                         
			
			{ y: 41, label: 'nlp.stanford.edu'},
			{ y: 1, label: 'http://nlp.stanford.edu:8080/parser/'},
			{ y: 3, label: 'www-nlp.stanford.edu'},
			{ y: 1, label: 'http://ai.stanford.edu/amaas/data/sentiment'},
			{ y: 1, label: 'http://snap.stanford.edu/'}
			
		]
	}
	else if (dtp=='20156')
	{
		dp = [                                         
			
			{ y: 9, label: 'research.microsoft.com' },
			{ y: 1, label: 'http://academic.research.microsoft.com' }
			
		]
	}
	else if (dtp=='20157')
	{
		dp = [                                         
			
			{ y: 4, label: 'cogcomp.cs.illinois.edu' }
			
		]
	}
	else if (dtp=='20158')
	{
		dp = [                                         
			
			{ y: 6, label: 'mallet.cs.umass.edu' },
			{ y: 1, label: 'http://people.umass.edu/scable/PNWSeminar/' }
			
		]
	}
	else if (dtp=='20159')
	{
		dp = [                                         
			
			{ y: 4, label: 'lucene.apache.org' },
			{ y: 1, label: 'https://tika.apache.org/' },
			{ y: 2, label: 'opennlp.apache.org' },
			{ y: 1, label: 'http://camel.apache.org/' },
			{ y: 1, label: 'https://uima.apache.org/ruta.html' },
			{ y: 1, label: 'http://activemq.apache.org/' },
			{ y: 1, label: 'http://cassandra.apache.org' }
			
		]
	}
	else if (dtp=='201510')
	{
		dp = [                                         
			
			{ y: 6, label: 'dumps.wikimedia.org' },
			{ y: 1, label: 'https://meta.wikimedia.org/wiki/Wiktionary' }
			
		]
	}
	else if (dtp=='201511')
	{
		dp = [                                         
			
			{ y: 4, label: 'www.natcorp.ox.ac.uk' }
			
		]
	}
	else if (dtp=='201512')
	{
		dp = [                                         
			
			{ y: 48, label: 'code.google.com' },
			{ y: 1, label: 'http://translate.google.com' },
			{ y: 1, label: 'http://books.google.com/ngrams/datasets' },
			{ y: 1, label: 'http://www.google.com' },
			{ y: 6, label: 'sites.google.com' },
			{ y: 1, label: 'https://drive.google.com/file/d/0B7XkCwpI5KDYNl' },
			{ y: 1, label: 'https://developers.google.com/' },
			{ y: 1, label: 'https://play.google.com/store/apps/details?id=com.oopsapp' },
			{ y: 1, label: 'https://groups.google.com/d/' }
			
		]
	}
	else if (dtp=='201513')
	{
		dp = [                                         
			
			{ y: 5, label: 'arxiv.org' }
			
		]
	}
	else if (dtp=='201514')
	{
		dp = [                                         
			
			{ y: 7, label: 'scikit-learn.org' }
			
		]
	}
	else if (dtp=='201515')
	{
		dp = [                                         
			
			{ y: 24, label: 'en.wikipedia.org' },
			{ y: 1, label: 'http://en.Wikipedia.org/wiki/' },
			{ y: 1, label: 'https://simple.wikipedia.org' },
			{ y: 1, label: 'http://zh.wikipedia.org/wiki/Template:CGroup'}
			
		]
	}
	else if (dtp=='201516')
	{
		dp = [                                         
			
			{ y: 4, label: 'labs.priberam.com' }
			
		]
	}
	else if (dtp=='201517')
	{
		dp = [                                         
			
			{ y: 4, label: 'clic.cimec.unitn.it' },
			{ y: 3, label: 'disi.unitn.it' },
			{ y: 1, label: 'http://ikernels-portal.disi.unitn.it/' }
			
		]
	}
	else if (dtp=='201518')
	{
		dp = [                                         
			
			{ y: 2, label: 'projects.ldc.upenn.edu'},
			{ y: 6, label: 'catalog.ldc.upenn.edu'},
			{ y: 2, label: 'www.cis.upenn.edu'},
			{ y: 1, label: 'http://www.sas.upenn.edu/'},
			{ y: 2, label: 'www.ldc.upenn.edu'},
			{ y: 1, label: 'http://bioie.ldc.upenn.edu'}
			
		]
	}
	else if (dtp=='201519')
	{
		dp = [                                         
			
			{ y: 7, label: 'sourceforge.net' },
			{ y: 1, label: 'http://jgibblda.sourceforge.net/' },
			{ y: 1, label: 'http://pyke.sourceforge.net/' },
			{ y: 1, label: 'http://kaldi.sourceforge.net/' },
			{ y: 1, label: 'http://htmlunit.sourceforge.net/' },
			{ y: 1, label: 'http://opennlp.sourceforge.net' }
			
		]
	}
	else if (dtp=='20170')
	{
		dp = [                                         
			
			{ y: 18, label: 'doi.org' }
			
		]
	}
	else if (dtp=='20171')
	{
		dp = [                                         
			
			{ y: 98, label: 'github.com' },
			{ y: 1, label: 'https://www.github.com/' }
			
		]
	}
	else if (dtp=='20172')
	{
		dp = [                                         
			
			{ y: 11, label: 'nlp.stanford.edu' },
			{ y: 2, label: 'snap.stanford.edu' }
			
		]
	}
	else if (dtp=='20173')
	{
		dp = [                                         
			
			{ y: 3, label: 'www.nltk.org' }
			
		]
	}else if (dtp=='20174')
	{
		dp = [                                         
			
			{ y: 7, label: 'radimrehurek.com' }
			
		]
	}
	else if (dtp=='20175')
	{
		dp = [                                         
			
			{ y: 19, label: 'dbpedia.org' },
			{ y: 1, label: 'http://wiki.dbpedia.org/' }
			
		]
	}
	else if (dtp=='20176')
	{
		dp = [                                         
			{ y: 7, label: 'catalog.ldc.upenn.edu' },
			{ y: 1, label: 'http://www.cis.upenn.edu/ccb/ppdb/' },
			{ y: 1, label: 'http://www.seas.upenn.edu/epavlick/data.html' },
			{ y: 1, label: 'https://www.ldc.upenn.edu/sites/www.ldc.upenn' },
			{ y: 1, label: 'https://project.ldc.upenn.edu/ace' }
			
		]
	}
	else if (dtp=='20177')
	{
		dp = [                                         
			
			{ y: 4, label: 'www.statmt.org' },
			{ y: 1, label: 'http://statmt.org/moses/' }
			
		]
	}
	else if (dtp=='20178')
	{
		dp = [                                         
			
			{ y: 18, label: 'code.google.com' },
			{ y: 1, label: 'https://translate.google.com/' },
			{ y: 1, label: 'https://sites.google.com/site/jinyipingnus/research' },
			{ y: 1, label: 'https://cloud.google.com/speech/' },
			{ y: 2, label: 'developers.google.com' },
			{ y: 1, label: 'https://docs.google.com/' }
			
		]
	}
	else if (dtp=='20179')
	{
		dp = [                                         
			
			{ y: 6, label: 'scikit-learn.org' }
			
		]
	}
	else if (dtp=='201710')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://academiasinicanlplab.github.io/' },
			{ y: 2, label: 'stanfordnlp.github.io'},
			{ y: 4, label: 'taku910.github.io' },
			{ y: 1, label: 'http://qats2016.github.io/shared.html' },
			{ y: 1, label: 'http://anoopkunchukuttan.github.io/indic_nlp_library' },
			{ y: 3, label: 'hltcoe.github.io' }
			
		]
	}
	else if (dtp=='201711')
	{
		dp = [                                         
			
			{ y: 4, label: 'www.cnts.ua.ac.be' }
			
		]
	}
	else if (dtp=='201712')
	{
		dp = [                                         
			
			{ y: 24, label: 'www.aclweb.org' },
			{ y: 14, label: 'aclweb.org' }
			
		]
	}
	else if (dtp=='201713')
	{
		dp = [                                         
			
			{ y: 9, label: 'dl.acm.org' },
			{ y: 1, label: 'http://doi.acm.org/10.1145/2588555.2612177' }
			
		]
	}
	else if (dtp=='201714')
	{
		dp = [                                         
			
			{ y: 11, label: 'arxiv.org' }
			
		]
	}
	else if (dtp=='201715')
	{
		dp = [                                         
			
			{ y: 6, label: 'bit.ly' }
			
		]
	}
	else if (dtp=='201716')
	{
		dp = [                                         
			
			{ y: 4, label: 'papers.nips.cc' }
			
		]
	}
	else if (dtp=='201717')
	{
		dp = [                                         
			
			{ y: 2, label: 'parser.iis.sinica.edu.tw' },
			{ y: 2, label: 'rocling.iis.sinica.edu.tw' },
			{ y: 1, label: 'http://ehownet.iis.sinica.edu.tw/index.php' },
			{ y: 1, label: 'http://asbc.iis.sinica.edu.tw/' },
			
		]
	}
	else if (dtp=='201718')
	{
		dp = [                                         
			
			{ y: 5, label: 'dumps.wikimedia.org' }
			
		]
	}
	else if (dtp=='201719')
	{
		dp = [                                         
			
			{ y: 10, label: 'en.wikipedia.org' },
			{ y: 1, label: 'http://simple.wikipedia.org' },
			{ y: 1, label: 'http://www.wikipedia.org/' }
			
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