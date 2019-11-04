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
		name: "HLT: Long Papers",
		dataPoints: [
				{ y: 19, x: new Date(1986,0) },
				{ y: 4, x: new Date(1989,0) },
				{ y: 13, x: new Date(1990,0) },
				{ y: 4, x: new Date(1991,0) },
				{ y: 2, x: new Date(1992,0) },
				{ y: 1, x: new Date(1993,0) },
				{ y: 1, x: new Date(1994,0) },
				{ y: 5, x: new Date(2001,0) },
				{ y: 31, x: new Date(2003,0) },
				{ y: 42, x: new Date(2004,0) },
				{ y: 126, x: new Date(2005,0) },
				{ y: 59, x: new Date(2006,0) }
		]
		},
		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Short Papers",
			color: "#e3f702",
			dataPoints: [
				{ y: 5, x: new Date(1986,0) },
				{ y: 129, x: new Date(1989,0) },
				{ y: 90, x: new Date(1990,0) },
				{ y: 102, x: new Date(1991,0) },
				{ y: 122, x: new Date(1992,0) },
				{ y: 114, x: new Date(1993,0) },
				{ y: 120, x: new Date(1994,0) },
				{ y: 70, x: new Date(2001,0) },
				{ y: 44, x: new Date(2003,0) },
				{ y: 1, x: new Date(2004,0) },
				{ y: 1, x: new Date(2005,0) },
				{ y: 54, x: new Date(2006,0) }
			]
		},

		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Demo Paper",
			color: "#f70202",
			dataPoints: [
				{ y: 0, x: new Date(1986,0) },
				{ y: 0, x: new Date(1989,0) },
				{ y: 0, x: new Date(1990,0) },
				{ y: 0, x: new Date(1991,0) },
				{ y: 0, x: new Date(1992,0) },
				{ y: 0, x: new Date(1993,0) },
				{ y: 0, x: new Date(1994,0) },
				{ y: 0, x: new Date(2001,0) },
				{ y: 17, x: new Date(2003,0) },
				{ y: 12, x: new Date(2004,0) },
				{ y: 19, x: new Date(2005,0) },
				{ y: 11, x: new Date(2006,0) }
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
		name: "HLT: Old Authors",    
		dataPoints: [
				{ y: 0.0, x: new Date(1986,0) },
				{ y: 0.0851063829787234, x: new Date(1989,0) },
				{ y: 0.44680851063829785, x: new Date(1990,0) },
				{ y: 0.5028248587570622, x: new Date(1991,0) },
				{ y: 0.5619047619047619, x: new Date(1992,0) },
				{ y: 0.41810344827586204, x: new Date(1993,0) },
				{ y: 0.5145228215767634, x: new Date(1994,0) },
				{ y: 0.14056224899598393, x: new Date(2001,0) },
				{ y: 0.2457627118644068, x: new Date(2003,0) },
				{ y: 0.26704545454545453, x: new Date(2004,0) },
				{ y: 0.21367521367521367, x: new Date(2005,0) },
				{ y: 0.3469387755102041, x: new Date(2006,0) }
		]
		},
		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "New Authors",
			color: "#e3f702",
			dataPoints: [
				{ y: 1.0, x: new Date(1986,0) },
				{ y: 0.9148936170212766, x: new Date(1989,0) },
				{ y: 0.5531914893617021, x: new Date(1990,0) },
				{ y: 0.4971751412429379, x: new Date(1991,0) },
				{ y: 0.4380952380952381, x: new Date(1992,0) },
				{ y: 0.5818965517241379, x: new Date(1993,0) },
				{ y: 0.4854771784232365, x: new Date(1994,0) },
				{ y: 0.8594377510040161, x: new Date(2001,0) },
				{ y: 0.7542372881355932, x: new Date(2003,0) },
				{ y: 0.7329545454545454, x: new Date(2004,0) },
				{ y: 0.7863247863247863, x: new Date(2005,0) },
				{ y: 0.6530612244897959, x: new Date(2006,0) }
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
		name: "HLT: Avg. number of Papers per Author per Year",
		dataPoints: [
			
			
			
			{ y:0.36363636363636365, x: new Date(1986,0) },
			{ y:0.45084745762711864, x: new Date(1989,0) },
			{ y:0.3814814814814815, x: new Date(1990,0) },
			{ y:0.43983402489626555, x: new Date(1991,0) },
			{ y:0.4025974025974026, x: new Date(1992,0) },
			{ y:0.3951890034364261, x: new Date(1993,0) },
			{ y:0.39672131147540984, x: new Date(1994,0) },
			{ y:0.2568493150684932, x: new Date(2001,0) },
			{ y:0.3357664233576642, x: new Date(2003,0) },
			{ y:0.29411764705882354, x: new Date(2004,0) },
			{ y:0.3569682151589242, x: new Date(2005,0) },
			{ y:0.3768996960486322, x: new Date(2006,0) }
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
		name: "HLT: Avg. number of Authors per Paper per Year",
		dataPoints: [
			
			
			
			{ y:2.75, x: new Date(1986,0) },
			{ y:2.218045112781955, x: new Date(1989,0) },
			{ y:2.621359223300971, x: new Date(1990,0) },
			{ y:2.2735849056603774, x: new Date(1991,0) },
			{ y:2.4838709677419355, x: new Date(1992,0) },
			{ y:2.5304347826086957, x: new Date(1993,0) },
			{ y:2.520661157024793, x: new Date(1994,0) },
			{ y:3.8933333333333335, x: new Date(2001,0) },
			{ y:2.9782608695652173, x: new Date(2003,0) },
			{ y:3.4, x: new Date(2004,0) },
			{ y:2.8013698630136985, x: new Date(2005,0) },
			{ y:2.653225806451613, x: new Date(2006,0) }
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
		name: "HLT: Long Papers",
		dataPoints: [
			
			
			
			{ y:5.842105263157895, x: new Date(1986,0) },
			{ y:2.0, x: new Date(1989,0) },
			{ y:13.384615384615385, x: new Date(1990,0) },
			{ y:11.75, x: new Date(1991,0) },
			{ y:14.0, x: new Date(1992,0) },
			{ y:2.0, x: new Date(1993,0) },
			{ y:11.0, x: new Date(1994,0) },
			{ y:14.2, x: new Date(2001,0) },
			{ y:15.96774193548387, x: new Date(2003,0) },
			{ y:22.38095238095238, x: new Date(2004,0) },
			{ y:22.952380952380953, x: new Date(2005,0) },
			{ y:17.45762711864407, x: new Date(2006,0) }
		]
		},


		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Short Papers",
			color: "#C00C0C",
			dataPoints: [
			
			
			
			
			
			{ y:0.4, x: new Date(1986,0) },
			{ y:2.186046511627907, x: new Date(1989,0) },
			{ y:3.3555555555555556, x: new Date(1990,0) },
			{ y:4.196078431372549, x: new Date(1991,0) },
			{ y:4.368852459016393, x: new Date(1992,0) },
			{ y:5.701754385964913, x: new Date(1993,0) },
			{ y:4.216666666666667, x: new Date(1994,0) },
			{ y:7.585714285714285, x: new Date(2001,0) },
			{ y:8.681818181818182, x: new Date(2003,0) },
			{ y:16.0, x: new Date(2004,0) },
			{ y:21.0, x: new Date(2005,0) },
			{ y:11.314814814814815, x: new Date(2006,0) }
			
			
			
			
			]
	},
	{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Demo Papers",
			color: "#309000",
			dataPoints: [
			
			
			
			
			
			{ y:0, x: new Date(1986,0) },
			{ y:0, x: new Date(1989,0) },
			{ y:0, x: new Date(1990,0) },
			{ y:0, x: new Date(1991,0) },
			{ y:0, x: new Date(1992,0) },
			{ y:0, x: new Date(1993,0) },
			{ y:0, x: new Date(1994,0) },
			{ y:0, x: new Date(2001,0) },
			{ y:3.764705882352941, x: new Date(2003,0) },
			{ y:9.5, x: new Date(2004,0) },
			{ y:5.842105263157895, x: new Date(2005,0) },
			{ y:7.454545454545454, x: new Date(2006,0) }
			
			
			
			
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
		name: "HLT: Avg. number of URLs per Paper per Year",
		dataPoints: [
			
			
			
			{ y:0.0, x: new Date(1986,0) },
			{ y:0.0, x: new Date(1989,0) },
			{ y:0.0, x: new Date(1990,0) },
			{ y:0.0, x: new Date(1991,0) },
			{ y:0.0, x: new Date(1992,0) },
			{ y:0.0, x: new Date(1993,0) },
			{ y:0.0, x: new Date(1994,0) },
			{ y:1.12, x: new Date(2001,0) },
			{ y:0.9021739130434783, x: new Date(2003,0) },
			{ y:1.4727272727272727, x: new Date(2004,0) },
			{ y:1.9109589041095891, x: new Date(2005,0) },
			{ y:1.967741935483871, x: new Date(2006,0) }
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
		name: "HLT: Avg. number of URLs in Footnote per Paper per Year",
		dataPoints: [
			
			
			
			{ y:0.0, x: new Date(1986,0) },
			{ y:0.0, x: new Date(1989,0) },
			{ y:0.0, x: new Date(1990,0) },
			{ y:0.0, x: new Date(1991,0) },
			{ y:0.0, x: new Date(1992,0) },
			{ y:0.0, x: new Date(1993,0) },
			{ y:0.0, x: new Date(1994,0) },
			{ y:0.04, x: new Date(2001,0) },
			{ y:0.09782608695652174, x: new Date(2003,0) },
			{ y:0.3090909090909091, x: new Date(2004,0) },
			{ y:0.589041095890411, x: new Date(2005,0) },
			{ y:0.532258064516129, x: new Date(2006,0) }
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
		name: "HLT: Avg. number of Tables per Paper per Year",
		dataPoints: [
			
			
			
			{ y:0.125, x: new Date(1986,0) },
			{ y:0.6466165413533834, x: new Date(1989,0) },
			{ y:1.1568627450980393, x: new Date(1990,0) },
			{ y:1.2264150943396226, x: new Date(1991,0) },
			{ y:1.4193548387096775, x: new Date(1992,0) },
			{ y:1.0, x: new Date(1993,0) },
			{ y:1.43801652892562, x: new Date(1994,0) },
			{ y:1.63013698630137, x: new Date(2001,0) },
			{ y:1.696629213483146, x: new Date(2003,0) },
			{ y:3.425925925925926, x: new Date(2004,0) },
			{ y:3.0206896551724136, x: new Date(2005,0) },
			{ y:2.370967741935484, x: new Date(2006,0) }
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
		name: "HLT: Avg. number of Figures per Paper per Year",
		dataPoints: [
			
			
			
			{ y:1.5416666666666667, x: new Date(1986,0) },
			{ y:0.9924812030075187, x: new Date(1989,0) },
			{ y:1.107843137254902, x: new Date(1990,0) },
			{ y:1.0471698113207548, x: new Date(1991,0) },
			{ y:0.9919354838709677, x: new Date(1992,0) },
			{ y:0.8956521739130435, x: new Date(1993,0) },
			{ y:1.487603305785124, x: new Date(1994,0) },
			{ y:3.095890410958904, x: new Date(2001,0) },
			{ y:2.157303370786517, x: new Date(2003,0) },
			{ y:2.9074074074074074, x: new Date(2004,0) },
			{ y:2.5172413793103448, x: new Date(2005,0) },
			{ y:2.6048387096774195, x: new Date(2006,0) }
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
		name: "HLT: Most Popular primary URL domains & their Frequencies",
		legendText: "",
		dataPoints: [  
			{ y:19,  label:'www.nist.gov'  },
			{ y:17,  label:'www.ldc.upenn.edu'  },
			{ y:14,  label:'www.isi.edu'  },
			{ y:14,  label:'trec.nist.gov'  },
			{ y:11,  label:'www.itl.nist.gov'  },
			{ y:8,  label:'www.cs.cmu.edu'  },
			{ y:8,  label:'www.csie.ntu.edu.tw'  },
			{ y:6,  label:'www.clsp.jhu.edu'  },
			{ y:6,  label:'duc.nist.gov'  },
			{ y:6,  label:'www.lycos.com'  },
			{ y:5,  label:'www.icsi.berkeley.edu'  },
			{ y:5,  label:'infomap.stanford.edu'  },
			{ y:5,  label:'research.microsoft.com'  },
			{ y:5,  label:'l2r.cs.uiuc.edu'  },
			{ y:5,  label:'mallet.cs.umass.edu'  },
			{ y:5,  label:'www.senseval.org'  },
			{ y:4,  label:'www.dsic-web.net'  },
			{ y:4,  label:'ilk.kub.nl'  },
			{ y:4,  label:'www.research.att.com'  },
			{ y:4,  label:'newsblaster.cs.columbia.edu'  }
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
		name: "HLT : Top Unique GitHub Pages",
		legendText: "",
		dataPoints: [      
			
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
		name: "HLT : Top University Pages",
		legendText: "",
		dataPoints: [
			{ y: 5, label:'Lot 9' },
			{ y: 5, label:'Dero' },
			{ y: 25, label:'Penn Museum' },
			{ y: 30, label:'Carnegie Mellon University Silicon Valley' },
			{ y: 25, label:'Department of Computer Science' },
			{ y: 22, label:'School of Computer Science' },
			{ y: 16, label:'Massachusetts Institute of Technology' },
			{ y: 15, label:'Institutt for datateknikk og informasjonsvitenskap' },
			{ y: 13, label:'Association of Engineers Laboratory for Materials Testing' },
			{ y: 11, label:'MIT Lincoln Laboratory' },
			{ y: 11, label:'New York University' },
			{ y: 9, label:'IBM Yorktown research lab' },
			{ y: 7, label:'Computer Science Department' },
			{ y: 7, label:'National Institute of Standards and Technology' },
			{ y: 7, label:'New Mexico State University' },
			{ y: 7, label:'Boston University' },
			{ y: 6, label:'Memorial Art Gallery' },
			{ y: 5, label:'Carnegie Mellon University' },
			{ y: 4, label:'Brown University' },
			{ y: 4, label:'Artificial Intelligence Laboratory' }
			
		
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
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		if(dt==2001){
			
			dp = [
			{ y:1, label: 'w3.org' },
			{ y:1, label: 'lanl.gov' },
			{ y:3, label: 'upenn.edu' },
			{ y:1, label: 'excite.com' },
			{ y:2, label: 'c-star.org' },
			{ y:1, label: 'nespole.itc.it' },
			{ y:1, label: 'nyu.edu' },
			{ y:4, label: 'dsic-web.net' },
			{ y:3, label: 'colorado.edu' },
			{ y:1, label: 'kub.nl' },
			{ y:3, label: 'mitre.org' },
			{ y:1, label: 'darpa.mil' },
			{ y:7, label: 'cmu.edu' },
			{ y:1, label: 'nist.gov' },
			{ y:2, label: 'freedict.com' },
			{ y:3, label: 'jhu.edu' },
			{ y:3, label: 'umd.edu' },
			{ y:1, label: 'pjbpub.co.uk' },
			{ y:2, label: 'saic.com' }
			
			
		]
		}
		else if(dt==2003){
			dp = [
			{ y:1, label: 'att.com' },
			{ y:1, label: 'cornell.edu' },
			{ y:1, label: 'ldc.org' },
			{ y:1, label: 'umich.edu' },
			{ y:3, label: 'umd.edu' },
			{ y:1, label: 'keenage.com' },
			{ y:1, label: 'princeton.edu' },
			{ y:1, label: 'xerox.fr' },
			{ y:4, label: 'isi.edu' },
			{ y:1, label: 'sri.com' },
			{ y:4, label: 'nist.gov' },
			{ y:1, label: 'mit.edu' },
			{ y:1, label: 'arXiv.org' },
			{ y:1, label: 'upenn.edu' },
			{ y:4, label: 'stanford.edu' },
			{ y:1, label: 'yahoo.com' },
			{ y:1, label: 'washington.edu' },
			{ y:2, label: 'berkeley.edu' },
			{ y:2, label: 'columbia.edu' },
			{ y:1, label: 'saic.com' }
						
			
		]
		}
		else if(dt==2004){
			dp = [ 
			{ y:3, label: 'isi.edu' },
			{ y:8, label: 'nist.gov' },
			{ y:1, label: 'bbn.com' },
			{ y:4, label: 'upenn.edu' },
			{ y:1, label: 'iknowsys.org' },
			{ y:1, label: 'psychometricsociety.org' },
			{ y:1, label: 'goo.ne.jp' },
			{ y:2, label: 'parc.com' },
			{ y:2, label: 'mit.edu' },
			{ y:2, label: 'jhu.edu' },
			{ y:1, label: 'readinga-z.com' },
			{ y:2, label: 'festvox.org' },
			{ y:3, label: 'aist-nara.ac.jp' },
			{ y:2, label: 'u-tokyo.ac.jp' },
			{ y:1, label: 'columbia.edu' },
			{ y:1, label: 'umd.edu' },
			{ y:5, label: 'sourceforge.net' },
			{ y:2, label: 'microsoft.com' },
			{ y:2, label: 'cpan.org' },
			{ y:1, label: 'berkeley.edu' }
			
			
			
		]
		}
		else if(dt==2005){
			dp = [   
			{ y:1, label: 'cia.gov' },
			{ y:8, label: 'sourceforge.net' },
			{ y:24, label: 'nist.gov' },
			{ y:11, label: 'upenn.edu' },
			{ y:7, label: 'cmu.edu' },
			{ y:1, label: 'ling.gu.se' },
			{ y:2, label: 'lemurproject.org' },
			{ y:1, label: 'uci.edu' },
			{ y:2, label: 'chasen.org' },
			{ y:1, label: 'titech.ac.jp' },
			{ y:1, label: 'atr.co.jp' },
			{ y:1, label: 'intel.com' },
			{ y:1, label: 'columbia.edu' },
			{ y:1, label: 'cis.hut.fi' },
			{ y:5, label: 'ntu.edu.tw' },
			{ y:2, label: 'dyna.org' },
			{ y:1, label: 'brown.edu' },
			{ y:4, label: 'uiuc.edu' },
			{ y:3, label: 'mitre.org' },
			{ y:2, label: 'umass.edu' }
			
			
			
		]
		}
		else if(dt==2006){
			dp = [
			{ y:6, label: 'cmu.edu' },
			{ y:3, label: 'pascal-network.org' },
			{ y:4, label: 'microsoft.com' },
			{ y:5, label: 'wikipedia.org' },
			{ y:3, label: 'uiuc.edu' },
			{ y:1, label: 'rutgers.edu' },
			{ y:2, label: 'fjoch.com' },
			{ y:2, label: 'senseval.org' },
			{ y:2, label: 'aclweb.org' },
			{ y:6, label: 'lycos.com' },
			{ y:10, label: 'sourceforge.net' },
			{ y:3, label: 'umass.edu' },
			{ y:2, label: 'eml-research.de' },
			{ y:1, label: 'alias-i.com' },
			{ y:1, label: 'pitt.edu' },
			{ y:1, label: 'eupm.net' },
			{ y:1, label: 'informatik.rwth-aachen.de' },
			{ y:1, label: 'monash.edu.au' },
			{ y:5, label: 'upenn.edu' },
			{ y:3, label: 'ntu.edu.tw' },
			{ y:14, label: 'nist.gov' }
			
			
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
	
	
	
	
	if (dtp=='200112')
	{
		dp = [                                         
		
			{ y: 3, label: 'www.is.cs.cmu.edu' },
			{ y: 4, label: 'www.cs.cmu.edu' }
			
		]
	}
	else if (dtp=='20011')
	{
		dp = [                                         
			{ y: 1, label: 'http://xxx.lanl.gov/abs/cmp-lg/9707002' }
			
		]
	}
	else if (dtp=='20012')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.ldc.upenn.edu/' },
			{ y: 2, label: 'morph.ldc.upenn.edu' }
			
		]
	}
	else if (dtp=='20013')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.excite.com'}
			
		]
	}
	else if (dtp=='20014')
	{
		dp = [                                         
			{ y: 2, label: 'www.c-star.org' }
			
		]
	}
	else if (dtp=='20015')
	{
		dp = [                                         
			{ y: 1, label: 'http://nespole.itc.it/' }
			
		]
	}
	else if (dtp=='20016')
	{
		dp = [                                         
			{ y: 1, label: 'http://cs.nyu.edu/cs/projects/proteus/irex' }
			
		]
	}
	else if (dtp=='20017')
	{
		dp = [                                         
			{ y: 4, label: 'www.dsic-web.net' }
			
		]
	}
	else if (dtp=='20018')
	{
		dp = [                                         
			{ y: 1, label: 'http://stripe.colorado.edu/' },
			{ y: 1, label: 'http://communicator.colorado.edu' },
			{ y: 1, label: 'http://cumove.colorado.edu/' }
			
		]
	}
	else if (dtp=='20019')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://ilk.kub.nl/' }
			
		]
	}
	else if (dtp=='200110')
	{
		dp = [                                         
			
			{ y: 3, label: 'fofoca.mitre.org' }
			
		]
	}
	else if (dtp=='200111')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.darpa.mil/ito/research/com/index.html' }
			
		]
	}
	else if (dtp=='20010')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.w3.org/Voice' }
			
		]
	}
	else if (dtp=='200113')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.nist.gov/speech/tests/tdt/tdt99/' }
			
		]
	}
	else if (dtp=='200114')
	{
		dp = [                                         
			{ y: 2, label: 'www.freedict.com' }
			
		]
	}
	else if (dtp=='200115')
	{
		dp = [                                         
			{ y: 3, label: 'www.clsp.jhu.edu' }
			
		]
	}
	else if (dtp=='200116')
	{
		dp = [                                         
			
			{ y: 3, label: 'www.glue.umd.edu' }
			
		]
	}
	else if (dtp=='200117')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.pjbpub.co.uk' }
			
		]
	}
	else if (dtp=='200118')
	{
		dp = [                                         
			{ y: 2, label: 'www.saic.com' }
			
		]
	}
	else if (dtp=='20030')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.research.att.com/sw/tools/fsm/' }
			
		]
	}
	else if (dtp=='20031')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cs.cornell.edu/Info/Projects/' }
			
		]
	}
	else if (dtp=='20032')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.ldc.org' }
			
		]
	}
	else if (dtp=='20033')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.eecs.umich.edu/~qstout/586/bncfreq.html' }
			
		]
	}
	else if (dtp=='20034')
	{
		dp = [                                         
			{ y: 1, label: 'http://clipdemos.umiacs.umd.edu/catvar/' },
			{ y: 1, label: 'http://www.umiacs.umd.edu/' },
			{ y: 1, label: 'http://www.clis2.umd.edu/conferences/midas/papers/' }
			
		]
	}
	else if (dtp=='20035')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.keenage.com' }
			
		]
	}
	else if (dtp=='20036')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cogsci.princeton.edu/wn' }
			
		]
	}
	else if (dtp=='20037')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.xerox.fr' }
			
		]
	}
	else if (dtp=='20038')
	{
		dp = [                                         
			{ y: 4, label: 'www.isi.edu' }
			
		]
	}
	else if (dtp=='20039')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.speech.sri.com/projects/srilm/' }
			
		]
	}
	else if (dtp=='200310')
	{
		dp = [                                         
			{ y: 2, label: 'duc.nist.gov' },
			{ y: 2, label: 'trec.nist.gov' }
			
		]
	}
	else if (dtp=='200311')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.ai.mit.edu/' }
			
		]
	}
	else if (dtp=='200312')
	{
		dp = [                                         
			{ y: 1, label: 'http://arXiv.org/abs/cs/0105019' }
			
		]
	}
	else if (dtp=='200313')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.ldc.upenn.edu/Catalog/CatalogEntry.jsp?' }
			
		]
	}
	else if (dtp=='200314')
	{
		dp = [                                         
			{ y: 3, label: 'infomap.stanford.edu' },
			{ y: 1, label: 'http://www-psych.stanford.edu/' }
			
		]
	}
	else if (dtp=='200315')
	{
		dp = [                                         
			{ y: 1, label: 'http://fullcoverage.yahoo.com' }
			
		]
	}
	else if (dtp=='200316')
	{
		dp = [                                         
			{ y: 1, label: 'http://ssli.ee.washington.edu/' }
			
		]
	}
	else if (dtp=='200317')
	{
		dp = [                                         
			{ y: 2, label: 'www.icsi.berkeley.edu' }
			
		]
	}
	else if (dtp=='200318')
	{
		dp = [                                         
			{ y: 2, label: 'newsblaster.cs.columbia.edu' }
			
		]
	}
	else if (dtp=='200319')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.muc.saic.com/' }
			
		]
	}
	else if (dtp=='20040')
	{
		dp = [                                         
			{ y: 3, label: 'www.isi.edu' }
			
		]
	}
	else if (dtp=='20041')
	{
		dp = [                                         
			{ y: 3, label:  'www.nist.gov' },
			{ y: 4, label: 'www.itl.nist.gov' },
			{ y: 1, label: 'http://duc.nist.gov/' }
			
		]
	}
	else if (dtp=='20042')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://www.bbn.com/-' }
			
		]
	}
	else if (dtp=='20043')
	{
		dp = [                                         
			{ y: 2, label: 'www.cis.upenn.edu' },
			{ y: 2, label: 'www.ldc.upenn.edu' }
			
		]
	}
	else if (dtp=='20044')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.iknowsys.org/Download/' }
			
		]
	}
	else if (dtp=='20045')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.psychometricsociety.org/journal/online/A' }
			
		]
	}
	else if (dtp=='20046')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.goo.ne.jp' }
			
		]
	}
	else if (dtp=='20047')
	{
		dp = [                                         
			{ y: 2, label: 'www2.parc.com' }
			
		]
	}
	else if (dtp=='20048')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://www.sls.csail.mit.edu/regina/struct' },
			{ y: 1, label: 'http://www.ai.mit.edu/people/jrennie/WordNet' }
			
		]
	}
	else if (dtp=='20049')
	{
		dp = [                                         
			{ y: 2, label: 'www.clsp.jhu.edu' }
			
		]
	}
	else if (dtp=='200410')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.readinga-z.com/' }
			
		]
	}
	else if (dtp=='200411')
	{
		dp = [                                         
			{ y: 2, label: 'festvox.org' }
			
		]
	}
	else if (dtp=='200412')
	{
		dp = [                                         
			{ y: 3, label: 'cl.aist-nara.ac.jp' }
			
		]
	}
	else if (dtp=='200413')
	{
		dp = [                                         
			{ y: 2, label: 'www.kc.t.u-tokyo.ac.jp' }
			
		]
	}
	else if (dtp=='200414')
	{
		dp = [                                         
			{ y: 1, label: 'http://newsblaster.cs.columbia.edu/'}
			
		]
	}
	else if (dtp=='200415')
	{
		dp = [                                         
			{ y: 1, label: 'tides.umiacs.umd.edu' }
			
		]
	}
	else if (dtp=='200416')
	{
		dp = [                                         
			{ y: 2, label: 'senseclusters.sourceforge.net' },
			{ y: 2, label: 'wn-similarity.sourceforge.net' },
			{ y: 1, label: 'http://senserelate.sourceforge.net' }
			
		]
	}
	else if (dtp=='200417')
	{
		dp = [                                         
			
			{ y: 2, label: 'research.microsoft.com' }
			
		]
	}
	else if (dtp=='200418')
	{
		dp = [                                         
			{ y: 2, label: 'search.cpan.org' }
			
		]
	}
	else if (dtp=='200419')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.icsi.berkeley.edu/'}
			
		]
	}
	else if (dtp=='20050')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cia.gov/cia/publications/factbook' }
			
		]
	}
	else if (dtp=='20051')
	{
		dp = [ 
			{ y: 2, label: 'opennlp.sourceforge.net' },
			{ y: 1, label: 'http://maxent.sourceforge.net/' },
			{ y: 1, label: 'http://crf.sourceforge.net/' },
			{ y: 1, label: 'http://jbnc.sourceforge.net' },
			{ y: 1, label: 'http://aspell.sourceforge.net/' },
			{ y: 2, label: 'sourceforge.net' }
			
			
		]
	}
	else if (dtp=='20052')
	{
		dp = [ 
			{ y: 2, label: 'duc.nist.gov' },
			{ y: 5, label: 'www.itl.nist.gov' },
			{ y: 9, label: 'www.nist.gov' },
			{ y: 8, label: 'trec.nist.gov' }
			
		]
	}
	else if (dtp=='20053')
	{
		dp = [                                         
			{ y: 8, label: 'www.ldc.upenn.edu' },
			{ y: 1, label: 'http://ldc.upenn.edu/projects/tides/' },
			{ y: 1, label: 'http://www.cis.upenn.edu/' },
			{ y: 1, label: 'http://bioie.ldc.upenn.edu/' }
			
		]
	}
	else if (dtp=='20054')
	{
		dp = [ 
			{ y: 2, label: 'www.cs.cmu.edu' },
			{ y: 1, label: 'http://www.link.cs.cmu.edu/link/' },
			{ y: 1, label: 'http://www-2.cs.cmu.edu/~lemur'},
			{ y: 1, label: 'http://privacy.cs.cmu.edu/dataprivacy/' },
			{ y: 1, label: 'http://www.speech.cs.cmu.edu/cgi-bin/cmudict' },
			{ y: 1, label: 'http://lib.stat.cmu.edu/' }
			
		]
	}
	else if (dtp=='20055')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.ling.gu.se/lager/mutbl.html' }
			
		]
	}
	else if (dtp=='20056')
	{
		dp = [                                         
			{ y: 2, label:  'www.lemurproject.org' }
			
		]
	}
	else if (dtp=='20057')
	{
		dp = [                                         
			{ y: 1, label: 'http://kdd.ics.uci.edu/databases/-' }
			
		]
	}
	else if (dtp=='20058')
	{
		dp = [                                         
			{ y: 2, label: 'chasen.org' }
			
		]
	}
	else if (dtp=='20059')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.lr.titech.ac.jp/tsc' }
			
		]
	}
	else if (dtp=='200510')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.slt.atr.co.jp/IWSLT2004' }
			
		]
	}
	else if (dtp=='200511')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.intel.com/software/products/mkl/' }
			
		]
	}
	else if (dtp=='200512')
	{
		dp = [                                         
			{ y: 1, label: 'http://newsblaster.cs.columbia.edu' }
			
		]
	}
	else if (dtp=='200513')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cis.hut.fi/ahonkela/dippa/dippa.html' }
			
		]
	}
	else if (dtp=='200514')
	{
		dp = [                                         
			{ y: 5, label:  'www.csie.ntu.edu.tw' }
			
		]
	}
	else if (dtp=='200515')
	{
		dp = [                                         
			{ y: 2, label: 'dyna.org' }
			
		]
	}
	else if (dtp=='200516')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cog.brown.edu/mj/Software.htm' }
			
		]
	}
	else if (dtp=='200517')
	{
		dp = [                                         
			{ y: 4, label: 'l2r.cs.uiuc.edu' }
			
		]
	}
	else if (dtp=='200518')
	{
		dp = [                                         
			{ y: 3, label: 'nrrc.mitre.org' }
			
		]
	}
	else if (dtp=='200519')
	{
		dp = [                                         
			{ y: 2, label: 'mallet.cs.umass.edu' }
			
		]
	}
	else if (dtp=='20060')
	{
		dp = [         
			{ y: 2, label:  'www.cs.cmu.edu' },
			{ y: 1, label: 'http://www.radar.cs.cmu.edu/external.asp' },
			{ y: 1, label: 'http://penance.is.cs.cmu.edu/iwslt2005' },
			{ y: 1, label: 'http://www.link.cs.cmu.edu/link/' },
			{ y: 1, label: 'http://www.speech.cs.cmu.edu/comp.speech/' }
			
		]
	}
	else if (dtp=='20061')
	{
		dp = [                                         
			{ y: 3, label: 'www.pascal-network.org' }
			
		]
	}
	else if (dtp=='20062')
	{
		dp = [                                         
			{ y: 3, label: 'research.microsoft.com' },
			{ y: 1, label: 'http://office.microsoft.com/onenote' }
			
		]
	}
	else if (dtp=='20063')
	{
		dp = [                                         
			{ y: 3, label: 'en.wikipedia.org' },
			{ y: 2, label: 'www.wikipedia.org' }
			
		]
	}
	else if (dtp=='20064')
	{
		dp = [                                         
			{ y: 1, label: 'http://l2r.cs.uiuc.edu/' },
			{ y: 1, label: 'http://L2R.cs.uiuc.edu/U' },
			{ y: 1, label: 'http://niri.ncsa.uiuc.edu/partiview' }
			
		]
	}
	else if (dtp=='20065')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.stat.rutgers.edu/' }
			
		]
	}
	else if (dtp=='20066')
	{
		dp = [                                         
			
			{ y: 2, label: 'www.fjoch.com' }
			
		]
	}
	else if (dtp=='20067')
	{
		dp = [                                         
			{ y: 2, label: 'www.senseval.org' }
			
		]
	}
	else if (dtp=='20068')
	{
		dp = [                                         
			{ y: 2, label: 'www.aclweb.org' }
			
		]
	}
	else if (dtp=='20069')
	{
		dp = [                                         
			{ y: 6, label:  'www.lycos.com' }
			
		]
	}
	else if (dtp=='200610')
	{
		dp = [  
			{ y: 2, label: 'sourceforge.net' },
			{ y: 1, label: 'http://minorthird.sourceforge.net/' },
			{ y: 1, label: 'http://infomap-nlp.sourceforge.net'},
			{ y: 2, label: 'secondstring.sourceforge.net' },
			{ y: 2, label: 'bionlp.sourceforge.net' },
			{ y: 1, label: 'http://wordfreak.sourceforge.net' },
			{ y: 1, label: 'http://senseclusters.sourceforge.net' }
			
		]
	}
	else if (dtp=='200611')
	{
		dp = [                                         
			{ y: 3, label: 'mallet.cs.umass.edu' }
			
		]
	}
	else if (dtp=='200612')
	{
		dp = [                                         
			{ y: 1, label: 'http://mmax.eml-research.de/' },
			{ y: 1, label: 'http://www.eml-research.de/nlp' }
			
		]
	}
	else if (dtp=='200613')
	{
		dp = [                                         
			{ y: 1, label: 'http://alias-i.com/lingpipe' }
			
		]
	}
	else if (dtp=='200614')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://www.cs.pitt.edu/~wiebe/pubs/ardasummer02/' }
			
		]
	}
	else if (dtp=='200615')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.qualeg.eupm.net/my_spip/index.php' }
			
		]
	}
	else if (dtp=='200616')
	{
		dp = [                                         
			{ y: 1, label: 'http://wasserstoff.informatik.rwth-aachen.de/Colleag' }
			
		]
	}
	else if (dtp=='200617')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://www.csse.monash.edu.au/publications/2005/tr-' }
			
		]
	}
	else if (dtp=='200618')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cis.upenn.edu/' },
			{ y: 5, label: 'www.ldc.upenn.edu' }
			
		]
	}
	else if (dtp=='200619')
	{
		dp = [                                         
			
			{ y: 3, label: 'www.csie.ntu.edu.tw' }
			
		]
	}
	else if (dtp=='200620')
	{
		dp = [                                         
			{ y: 6, label: 'www.nist.gov' },
			{ y: 1, label: 'http://www.itl.nist.gov/iad/894.01/tests/ace/' },
			{ y: 1, label: 'http://duc.nist.gov' },
			{ y: 1, label: 'http://www-24.nist.gov/projects/aquaint/opinion.html' },
			{ y: 4, label: 'trec.nist.gov' },
			{ y: 1, label: 'http://www-nlpir.nist.gov/projects/trecvid/' }
			
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