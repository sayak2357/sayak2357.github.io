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
				{ y: 12, x: new Date(1983,0) },
				{ y: 15, x: new Date(1985,0) },
				{ y: 14, x: new Date(1987,0) },
				{ y: 30, x: new Date(1989,0) },
				{ y: 1, x: new Date(1991,0) },
				{ y: 38, x: new Date(1993,0) },
				{ y: 24, x: new Date(1995,0) },
				{ y: 54, x: new Date(1997,0) },
				{ y: 22, x: new Date(1999,0) },
				{ y: 49, x: new Date(2003,0) },
				{ y: 52, x: new Date(2006,0) },
				{ y: 89, x: new Date(2009,0) },
				{ y: 81, x: new Date(2012,0) },
				{ y: 78, x: new Date(2014,0) },
				{ y: 111, x: new Date(2017,0) }
		]
		},
		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Short Papers",
			color: "#e3f702",
			dataPoints: [
				{ y: 20, x: new Date(1983,0) },
				{ y: 26, x: new Date(1985,0) },
				{ y: 36, x: new Date(1987,0) },
				{ y: 12, x: new Date(1989,0) },
				{ y: 54, x: new Date(1991,0) },
				{ y: 32, x: new Date(1993,0) },
				{ y: 21, x: new Date(1995,0) },
				{ y: 19, x: new Date(1997,0) },
				{ y: 30, x: new Date(1999,0) },
				{ y: 39, x: new Date(2003,0) },
				{ y: 0, x: new Date(2006,0) },
				{ y: 11, x: new Date(2009,0) },
				{ y: 4, x: new Date(2012,0) },
				{ y: 0, x: new Date(2014,0) },
				{ y: 128, x: new Date(2017,0) }
			]
		},

		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Demo Paper",
			color: "#f70202",
			dataPoints: [
				{ y: 0, x: new Date(1983,0) },
				{ y: 0, x: new Date(1985,0) },
				{ y: 0, x: new Date(1987,0) },
				{ y: 0, x: new Date(1989,0) },
				{ y: 0, x: new Date(1991,0) },
				{ y: 0, x: new Date(1993,0) },
				{ y: 0, x: new Date(1995,0) },
				{ y: 0, x: new Date(1997,0) },
				{ y: 0, x: new Date(1999,0) },
				{ y: 17, x: new Date(2003,0) },
				{ y: 31, x: new Date(2006,0) },
				{ y: 17, x: new Date(2009,0) },
				{ y: 21, x: new Date(2012,0) },
				{ y: 26, x: new Date(2014,0) },
				{ y: 29, x: new Date(2017,0) }
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
				{ y: 0.0, x: new Date(1983,0) },
				{ y: 0.08695652173913043, x: new Date(1985,0) },
				{ y: 0.1368421052631579, x: new Date(1987,0) },
				{ y: 0.1518987341772152, x: new Date(1989,0) },
				{ y: 0.16494845360824742, x: new Date(1991,0) },
				{ y: 0.14634146341463414, x: new Date(1993,0) },
				{ y: 0.23943661971830985, x: new Date(1995,0) },
				{ y: 0.15671641791044777, x: new Date(1997,0) },
				{ y: 0.17857142857142858, x: new Date(1999,0) },
				{ y: 0.11721611721611722, x: new Date(2003,0) },
				{ y: 0.3142857142857143, x: new Date(2006,0) },
				{ y: 0.1676300578034682, x: new Date(2009,0) },
				{ y: 0.19704433497536947, x: new Date(2012,0) },
				{ y: 0.27040816326530615, x: new Date(2014,0) },
				{ y: 0.14002642007926025, x: new Date(2017,0) }
		]
		},
		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "New Authors",
			color: "#e3f702",
			dataPoints: [
				{ y: 1.0, x: new Date(1983,0) },
				{ y: 0.9130434782608695, x: new Date(1985,0) },
				{ y: 0.8631578947368421, x: new Date(1987,0) },
				{ y: 0.8481012658227848, x: new Date(1989,0) },
				{ y: 0.8350515463917526, x: new Date(1991,0) },
				{ y: 0.8536585365853658, x: new Date(1993,0) },
				{ y: 0.7605633802816901, x: new Date(1995,0) },
				{ y: 0.8432835820895522, x: new Date(1997,0) },
				{ y: 0.8214285714285714, x: new Date(1999,0) },
				{ y: 0.8827838827838828, x: new Date(2003,0) },
				{ y: 0.6857142857142857, x: new Date(2006,0) },
				{ y: 0.8323699421965318, x: new Date(2009,0) },
				{ y: 0.8029556650246306, x: new Date(2012,0) },
				{ y: 0.7295918367346939, x: new Date(2014,0) },
				{ y: 0.8599735799207398, x: new Date(2017,0) }
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
			
			
			
			{ y:0.5614035087719298, x: new Date(1983,0) },
			{ y:0.5857142857142857, x: new Date(1985,0) },
			{ y:0.5102040816326531, x: new Date(1987,0) },
			{ y:0.5060240963855421, x: new Date(1989,0) },
			{ y:0.5670103092783505, x: new Date(1991,0) },
			{ y:0.5384615384615384, x: new Date(1993,0) },
			{ y:0.6164383561643836, x: new Date(1995,0) },
			{ y:0.5328467153284672, x: new Date(1997,0) },
			{ y:0.45217391304347826, x: new Date(1999,0) },
			{ y:0.328125, x: new Date(2003,0) },
			{ y:0.7345132743362832, x: new Date(2006,0) },
			{ y:0.6324324324324324, x: new Date(2009,0) },
			{ y:0.49074074074074076, x: new Date(2012,0) },
			{ y:0.48826291079812206, x: new Date(2014,0) },
			{ y:0.2958057395143488, x: new Date(2017,0) }
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
			
			
			
			{ y:1.78125, x: new Date(1983,0) },
			{ y:1.7073170731707317, x: new Date(1985,0) },
			{ y:1.96, x: new Date(1987,0) },
			{ y:1.9761904761904763, x: new Date(1989,0) },
			{ y:1.7636363636363637, x: new Date(1991,0) },
			{ y:1.8571428571428572, x: new Date(1993,0) },
			{ y:1.6222222222222222, x: new Date(1995,0) },
			{ y:1.8767123287671232, x: new Date(1997,0) },
			{ y:2.2115384615384617, x: new Date(1999,0) },
			{ y:3.0476190476190474, x: new Date(2003,0) },
			{ y:1.3614457831325302, x: new Date(2006,0) },
			{ y:1.5811965811965811, x: new Date(2009,0) },
			{ y:2.0377358490566038, x: new Date(2012,0) },
			{ y:2.048076923076923, x: new Date(2014,0) },
			{ y:3.3805970149253732, x: new Date(2017,0) }
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
			
			
			
			{ y:2.0833333333333335, x: new Date(1983,0) },
			{ y:2.4, x: new Date(1985,0) },
			{ y:2.857142857142857, x: new Date(1987,0) },
			{ y:11.566666666666666, x: new Date(1989,0) },
			{ y:22.0, x: new Date(1991,0) },
			{ y:6.842105263157895, x: new Date(1993,0) },
			{ y:13.458333333333334, x: new Date(1995,0) },
			{ y:8.166666666666666, x: new Date(1997,0) },
			{ y:8.590909090909092, x: new Date(1999,0) },
			{ y:17.897959183673468, x: new Date(2003,0) },
			{ y:16.615384615384617, x: new Date(2006,0) },
			{ y:23.134831460674157, x: new Date(2009,0) },
			{ y:30.88888888888889, x: new Date(2012,0) },
			{ y:30.94871794871795, x: new Date(2014,0) },
			{ y:35.873873873873876, x: new Date(2017,0) }
		]
		},


		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Short Papers",
			color: "#C00C0C",
			dataPoints: [
			
			
			
			
			
			{ y:2.45, x: new Date(1983,0) },
			{ y:4.384615384615385, x: new Date(1985,0) },
			{ y:3.361111111111111, x: new Date(1987,0) },
			{ y:4.416666666666667, x: new Date(1989,0) },
			{ y:10.907407407407407, x: new Date(1991,0) },
			{ y:2.5, x: new Date(1993,0) },
			{ y:8.333333333333334, x: new Date(1995,0) },
			{ y:9.947368421052632, x: new Date(1997,0) },
			{ y:7.1, x: new Date(1999,0) },
			{ y:6.102564102564102, x: new Date(2003,0) },
			{ y:15.818181818181818, x: new Date(2009,0) },
			{ y:2.25, x: new Date(2012,0) },
			{ y:25.5390625, x: new Date(2017,0) }
			
			
			
			
			]
	},
	{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Demo Papers",
			color: "#309000",
			dataPoints: [
			
			
			
			
			{ y:0, x: new Date(1983,0) },
			{ y:0, x: new Date(1985,0) },
			{ y:0, x: new Date(1987,0) },
			{ y:0, x: new Date(1989,0) },
			{ y:0, x: new Date(1991,0) },
			{ y:0, x: new Date(1993,0) },
			{ y:0, x: new Date(1995,0) },
			{ y:0, x: new Date(1997,0) },
			{ y:0, x: new Date(1999,0) },
			{ y:17.0, x: new Date(2003,0) },
			{ y:9.258064516129032, x: new Date(2006,0) },
			{ y:11.058823529411764, x: new Date(2009,0) },
			{ y:15.80952380952381, x: new Date(2012,0) },
			{ y:8.807692307692308, x: new Date(2014,0) },
			{ y:10.517241379310345, x: new Date(2017,0) }
			
			
			
			
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
			
			
			
			{ y:0.0, x: new Date(1983,0) },
			{ y:0.0, x: new Date(1985,0) },
			{ y:0.0, x: new Date(1987,0) },
			{ y:0.0, x: new Date(1989,0) },
			{ y:0.0, x: new Date(1991,0) },
			{ y:0.0, x: new Date(1993,0) },
			{ y:0.0, x: new Date(1995,0) },
			{ y:0.2465753424657534, x: new Date(1997,0) },
			{ y:0.7307692307692307, x: new Date(1999,0) },
			{ y:1.1142857142857143, x: new Date(2003,0) },
			{ y:1.6024096385542168, x: new Date(2006,0) },
			{ y:2.5042735042735043, x: new Date(2009,0) },
			{ y:3.650943396226415, x: new Date(2012,0) },
			{ y:3.394230769230769, x: new Date(2014,0) },
			{ y:3.4029850746268657, x: new Date(2017,0) }
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
			
			
			{ y:0.0, x: new Date(1983,0) },
			{ y:0.0, x: new Date(1985,0) },
			{ y:0.0, x: new Date(1987,0) },
			{ y:0.0, x: new Date(1989,0) },
			{ y:0.0, x: new Date(1991,0) },
			{ y:0.0, x: new Date(1993,0) },
			{ y:0.0, x: new Date(1995,0) },
			{ y:0.2465753424657534, x: new Date(1997,0) },
			{ y:0.7307692307692307, x: new Date(1999,0) },
			{ y:1.1142857142857143, x: new Date(2003,0) },
			{ y:1.6024096385542168, x: new Date(2006,0) },
			{ y:2.5042735042735043, x: new Date(2009,0) },
			{ y:3.650943396226415, x: new Date(2012,0) },
			{ y:3.394230769230769, x: new Date(2014,0) },
			{ y:3.4029850746268657, x: new Date(2017,0) }
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
			
			
			
			{ y:0.0625, x: new Date(1983,0) },
			{ y:0.17073170731707318, x: new Date(1985,0) },
			{ y:0.24, x: new Date(1987,0) },
			{ y:0.40476190476190477, x: new Date(1989,0) },
			{ y:0.05454545454545454, x: new Date(1991,0) },
			{ y:0.37142857142857144, x: new Date(1993,0) },
			{ y:0.6666666666666666, x: new Date(1995,0) },
			{ y:2.5205479452054793, x: new Date(1997,0) },
			{ y:1.6730769230769231, x: new Date(1999,0) },
			{ y:1.8977272727272727, x: new Date(2003,0) },
			{ y:2.5185185185185186, x: new Date(2006,0) },
			{ y:3.9914529914529915, x: new Date(2009,0) },
			{ y:3.9056603773584904, x: new Date(2012,0) },
			{ y:3.855769230769231, x: new Date(2014,0) },
			{ y:4.186567164179104, x: new Date(2017,0) }
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
			
			
			
			{ y:1.6875, x: new Date(1983,0) },
			{ y:1.8780487804878048, x: new Date(1985,0) },
			{ y:1.78, x: new Date(1987,0) },
			{ y:1.2380952380952381, x: new Date(1989,0) },
			{ y:1.7272727272727273, x: new Date(1991,0) },
			{ y:2.3, x: new Date(1993,0) },
			{ y:2.7777777777777777, x: new Date(1995,0) },
			{ y:3.4794520547945207, x: new Date(1997,0) },
			{ y:2.230769230769231, x: new Date(1999,0) },
			{ y:1.7840909090909092, x: new Date(2003,0) },
			{ y:2.2839506172839505, x: new Date(2006,0) },
			{ y:2.6495726495726495, x: new Date(2009,0) },
			{ y:2.9716981132075473, x: new Date(2012,0) },
			{ y:2.5576923076923075, x: new Date(2014,0) },
			{ y:2.3582089552238807, x: new Date(2017,0) }
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
		name: "EACL: Most Popular primary URL domains & their Frequencies",
		legendText: "",
		dataPoints: [  
			{ y:7,  label:'w3.org'  },
			{ y:36,  label:'code.google.com'  },
			{ y:34,  label:'www.statmt.org'  },
			{ y:34,  label:'nlp.stanford.edu'  },
			{ y:19,  label:'www.ukp.tu-darmstadt.de'  },
			{ y:15,  label:'sourceforge.net'  },
			{ y:15,  label:'en.wikipedia.org'  },
			{ y:14,  label:'mallet.cs.umass.edu'  },
			{ y:12,  label:'www.nist.gov'  },
			{ y:12,  label:'ilk.uvt.nl'  },
			{ y:12,  label:'www.aclweb.org'  },
			{ y:10,  label:'www.csie.ntu.edu.tw'  },
			{ y:10,  label:'bitbucket.org'  },
			{ y:9,  label:'www.ims.uni-stuttgart.de'  },
			{ y:9,  label:'catalog.ldc.upenn.edu'  },
			{ y:8,  label:'dx.doi.org'  },
			{ y:8,  label:'dumps.wikimedia.org'  },
			{ y:7,  label:'www.ncbi.nlm.nih.gov'  },
			{ y:7,  label:'www.cis.upenn.edu'  },
			{ y:7,  label:'www.mturk.com'  }
			
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
		name: "EACL : Top Unique GitHub Pages",
		legendText: "",
		dataPoints: [   
			{ y: 2, label: 'bplank/' },
			{ y: 3, label: 'wlin12/JNN' },
			{ y: 3, label: 'nyu-dl/dl4mt-tutorial' },
			{ y: 3, label: 'rsennrich/nematus' },
			{ y: 2, label: 'jhclark/multeval' },
			{ y: 2, label: 'daormar/thot' },
			{ y: 2, label: 'UUDigitalHumanitieslab/' },
			{ y: 1, label: 'moses-smt/mosesdecoder' },
			{ y: 1, label: 'agesmundo/HadoopPerceptron' },
			{ y: 1, label: 'gabedoyle/' },
			{ y: 1, label: 'wmaier/rparse' },
			{ y: 1, label: 'jhlau/topic_' },
			{ y: 1, label: 'gracaninja/' },
			{ y: 1, label: 'ixa-ehu/kaflib' },
			{ y: 1, label: 'morfologik/morfologik-stemming' },
			{ y: 1, label: 'stephanschloegl/WebWOZ' },
			{ y: 1, label: 'beroth/' },
			{ y: 1, label: 'russianwordnet' }
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
		name: "EACL : Top University Pages",
		legendText: "",
		dataPoints: [
			{ y: 10, label: 'MIT' },
			{ y: 21, label: 'University of Edinburgh' },
			{ y: 19,label: 'Penn Museum' },
			{ y: 23,  label: 'UC Berkeley' },
			{ y: 11,  label: 'Johns Hopkins Hospital' },
			{ y: 10,  label: 'Institute for Logic' }, 
			{ y: 8, label: 'ICICS' },
			{ y: 8,  label: 'Stanford University'},
			{ y: 8, label: 'Clifford Allbutt Lecture Theatre' },
			{ y: 8,  label: 'University of Trento' },
			{ y: 7,  label: 'PH Ludwigsburg' },
			{ y: 7,  label: 'Columbia University' },
			{ y: 6,  label: 'Carnegie Mellon University Silicon Valley' },
			{ y: 6,  label: 'University of Sussex' },
			{ y: 6,  label: 'University of Sheffield' },
			{ y: 6, label: 'University of Washington' },
			{ y: 5,  label: 'Tilburg University' },
			{ y: 5,  label: 'University of Aberdeen' },
			{ y: 4,  label: 'Van Pelt Library' },
			{ y: 4,  label: 'UCL Institute of Education' },
			{ y: 4,  label: 'University of Texas at Austin' }
			
		
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
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		if (dt==1997)
		{
		
		dp = [ 
			{ y:1, label: 'systranmt.com' },
			{ y:1, label: 'att.com' },
			{ y:1, label: 'uni-freiburg.de' },
			{ y:1, label: 'stanford.edu' },
			{ y:2, label: 'rutgers.edu' },
			{ y:1, label: 'uni-stuttgart.de' },
			{ y:2, label: 'uni-sb.de' },
			{ y:1, label: 'globalink.com' },
			{ y:1, label: 'logos-ca.com' },
			
			
		]
		}
		else if(dt==1999){
			
			dp = [
			{ y:1, label: 'is.s.u-' },
			{ y:1, label: 'saic.cota' },
			{ y:1, label: 'kuleuven.ac.be' },
			{ y:3, label: 'saic.com' },
			{ y:1, label: 'rug.nl' },
			{ y:1, label: 'att.com' },
			{ y:1, label: 'tuwien.ac.at' },
			{ y:1, label: 'linguistik.uni-' },
			{ y:1, label: 'dolnet.gr' },
			{ y:1, label: 'kub.nl' },
			{ y:1, label: 'conexor.fi' },
			{ y:1, label: 'helsinki.fi' },
			{ y:1, label: 'svenska.gu.se' },
			{ y:1, label: 'cnr.it' },
			{ y:1, label: 'sri.com' },
			{ y:1, label: 'merl-com' },
			{ y:1, label: 'stanford.edu' },
			{ y:1, label: 'ehu.es' },
			{ y:1, label: 'nih.gov' },
			{ y:1, label: 'lpl.univ-' },
			{ y:1, label: 'vassar.edu' }
			
			
		]
		}
		else if(dt==2003){
			dp = [   
			{ y:1, label: 'isi.edu' },
			{ y:1, label: 'ruleauest.com' },
			{ y:2, label: 'nyu.edu' },
			{ y:1, label: 'microsoft.com' },
			{ y:1, label: 'cmu.edu' },
			{ y:1, label: 'bris.ac.uk' },
			{ y:1, label: 'caneer.eoy' },
			{ y:1, label: 'nih.eoy' },
			{ y:2, label: 'ai.sri' },
			{ y:2, label: 'russicon.ru' },
			{ y:2, label: 'upenn.edu' },
			{ y:2, label: 'sourceforge.net' },
			{ y:1, label: 'stanford.edu' },
			{ y:1, label: 'altavista.com' },
			{ y:2, label: 'nist.gov' },
			{ y:1, label: 'nii.ac.jp' },
			{ y:2, label: 'nuance.com' },
			{ y:1, label: 'jhu.edu' },
			{ y:1, label: 'uni-sb.de' },
			{ y:1, label: 'cornell.edu' }
						
			
		]
		}
		else if(dt==2006){
			dp = [                         
			{ y:2, label: 'cmu.edu' },
			{ y:1, label: 'isi.edu' },
			{ y:3, label: 'tc-star.org' },
			{ y:1, label: 'tartarus.org' },
			{ y:2, label: 'waikato.ac.nz' },
			{ y:1, label: 'speech.sri.com' },
			{ y:2, label: 'talk-project.org' },
			{ y:1, label: 'nuance.com' },
			{ y:3, label: 'ntu.edu.tw' },
			{ y:1, label: 'microsoft.com' },
			{ y:1, label: 'altavista.com' },
			{ y:2, label: 'princeton.edu' },
			{ y:1, label: 'umd.edu' },
			{ y:1, label: 'joachims.org' },
			{ y:1, label: 'jhu.edu' },
			{ y:4, label: 'nist.gov' },
			{ y:3, label: 'sourceforge.net' },
			{ y:2, label: 'upenn.edu' },
			{ y:2, label: 'jouy.inra.fr' },
			{ y:2, label: 'linguateca.pt' },
			{ y:2, label: 'ohsu.edu' },
			{ y:1, label: 'google.com' }
			
			
		]
		}
		else if(dt==2009){
			dp = [
			{ y:2, label: 'nih.gov' },
			{ y:8, label: 'statmt.org' },
			{ y:2, label: 'gla.ac.uk' },
			{ y:2, label: 'harvard.edu' },
			{ y:6, label: 'sourceforge.net' },
			{ y:3, label: 'ehu.es' },
			{ y:3, label: 'upc.es' },
			{ y:7, label: 'nist.gov' },
			{ y:2, label: 'google.com' },
			{ y:4, label: 'umass.edu' },
			{ y:3, label: 'yellowpages.com' },
			{ y:4, label: 'yahoo.com' },
			{ y:2, label: 'nndb.com' },
			{ y:3, label: 'wikipedia.org' },
			{ y:2, label: 'senseval.org' },
			{ y:2, label: 'princeton.edu' },
			{ y:3, label: 'stanford.edu' },
			{ y:1, label: 'svmlight.joachims.org' },
			{ y:2, label: 'upenn.edu' },
			{ y:3, label: 'ntu.edu.tw' },
			{ y:2, label: 'uvt.nl' }
			
			
		]
			
		}
		else if(dt==2012)
		{
			dp = [
			{ y:2, label: 'cnr.it' },
			{ y:3, label: 'uni-stuttgart.de' },
			{ y:2, label: 'lingfil.uu.se' },
			{ y:3, label: 'upenn.edu' },
			{ y:2, label: 'ntu.edu.tw' },
			{ y:13, label: 'google.com' },
			{ y:12, label: 'sourceforge.net' },
			{ y:13, label: 'statmt.org' },
			{ y:7, label: 'wikipedia.org' },
			{ y:3, label: 'nist.gov' },
			{ y:3, label: 'acm.org' },
			{ y:6, label: 'aclweb.org' },
			{ y:4, label: 'doi.org' },
			{ y:3, label: 'stanford.edu' },
			{ y:3, label: 'wiktionary.org' },
			{ y:13, label: 'tu-darmstadt.de' },
			{ y:4, label: 'github.com' },
			{ y:2, label: 'twitter.com' },
			{ y:2, label: 'colorado.edu' },
			{ y:4, label: 'isocat.org' },
			{ y:2, label: 'umass.edu' },
			{ y:9, label: 'elda.org' },
			{ y:4, label: 'nlplab.org' },
						
		]
		}
		else if(dt==2014)
		{
			dp = [     
			{ y:4, label: 'mit.edu' },
			{ y:12, label: 'stanford.edu' },
			{ y:2, label: 'tu-darmstadt.de' },
			{ y:2, label: 'unt.edu' },
			{ y:6, label: 'wikipedia.org' },
			{ y:4, label: 'wiktionary.org' },
			{ y:9, label: 'google.com' },
			{ y:2, label: 'ehu.es' },
			{ y:12, label: 'github.com' },
			{ y:6, label: 'cmu.edu' },
			{ y:3, label: 'umass.edu' },
			{ y:4, label: 'illinois.edu' },
			{ y:2, label: 'colorado.edu' },
			{ y:3, label: 'sourceforge.net' },
			{ y:2, label: 'googlecode.com' },
			{ y:5, label: 'nist.gov' },
			{ y:3, label: 'pitt.edu' },
			{ y:3, label: 'nytimes.com' },
			{ y:2, label: 'upenn.edu' },
			{ y:5, label: 'statmt.org' },
			{ y:3, label: 'mturk.com' }
			
			
		]
		}
		else if(dt==2017)
		{
			dp = [     
			{ y:6, label: 'lmu.de' },
			{ y:9, label: 'bitbucket.org' },
			{ y:23, label: 'stanford.edu' },
			{ y:3, label: 'scikit-learn.org' },
			{ y:129, label: 'github.com' },
			{ y:21, label: 'google.com' },
			{ y:6, label: 'wikimedia.org' },
			{ y:6, label: 'apache.org' },
			{ y:10, label: 'wikipedia.org' },
			{ y:3, label: 'arguana.com' },
			{ y:2, label: 'illinois.edu' },
			{ y:5, label: 'nist.gov' },
			{ y:16, label: 'statmt.org' },
			{ y:3, label: 'microsoft.com' },
			{ y:4, label: 'wiktionary.org' },
			{ y:5, label: 'ibm.com' },
			{ y:4, label: 'radimrehurek.com' },
			{ y:4, label: 'uvt.nl' },
			{ y:6, label: 'umass.edu' },
			{ y:3, label: 'u-szeged.hu' },
			{ y:14, label: 'aclweb.org' },
			{ y:11, label: 'upenn.edu' },
			{ y:4, label: 'tensorflow.org' },
			{ y:8, label: 'nih.gov' }
			
			
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
	
	
	
	
	if (dtp=='19970')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://systranmt.com/'}
			
		]
	}
	else if (dtp=='19971')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.research.att.com/lewis'}
			
		]
	}
	else if (dtp=='19972')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.coling.uni-freiburg.de/'}
			
		]
	}
	else if (dtp=='19973')
	{
		dp = [                                         
			{ y: 1, label: 'http://hpsg.stanford.edu/hpsg/sag.html'}
			
		]
	}
	else if (dtp=='19974')
	{
		dp = [                                         
			{ y: 2, label: 'ruccs.rutgers.edu'}
			
		]
	}
	else if (dtp=='19975')
	{
		dp = [                                         
			{ y: 1, label: "http://www.ims.uni-stuttgart.de/'jochen/CBSem"}
			
		]
	}
	else if (dtp=='19976')
	{
		dp = [                                         
			{ y: 2, label: 'www.ps.uni-sb.de'}
			
		]
	}
	else if (dtp=='19977')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.globalink.com/home.html'}
			
		]
	}
	else if (dtp=='19978')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.logos-ca.com/' }
			
		]
	}
	else if (dtp=='19990')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.is.s.u-' }
			
		]
	}
	else if (dtp=='19991')
	{
		dp = [                                         
			{ y: 1, label: 'http://w,r~.muc.saic.cota/' }
			
		]
	}
	else if (dtp=='19992')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.ccl.kuleuven.ac.be/LKR/dtr/' }
			
		]
	}
	else if (dtp=='19993')
	{
		dp = [                                         
			{ y: 3, label: 'www.muc.saic.com'}
			
		]
	}
	else if (dtp=='19994')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.let.rug.nl/-vannoord/Fsa/' }
			
		]
	}
	else if (dtp=='19995')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.research.att.com/lewis/reuters21578.html' }
			
		]
	}
	else if (dtp=='19996')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.ci.tuwien.ac.at/R' }
			
		]
	}
	else if (dtp=='19997')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.linguistik.uni-' }
			
		]
	}
	else if (dtp=='19998')
	{
		dp = [                                         
			{ y: 1, label: 'http://tovima.dolnet.gr/' }
			
		]
	}
	else if (dtp=='19999')
	{
		dp = [                                         
			{ y: 1, label: 'http://ilk.kub.nl' }
			
		]
	}
	else if (dtp=='199910')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.conexor.fi' }
			
		]
	}
	else if (dtp=='199911')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.ling.helsinki.fi/' }
			
		]
	}
	else if (dtp=='199912')
	{
		dp = [                                         
			{ y: 1, label: 'http://svenska.gu.se/aventinus' }
			
		]
	}
	else if (dtp=='199913')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.ilc.pi.cnr.it/EAGLES/' }
			
		]
	}
	else if (dtp=='199914')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cam.sri.com' }
			
		]
	}
	else if (dtp=='199915')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.merl-com/reports/TR96-' }
			
		]
	}
	else if (dtp=='199916')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.csli.stanford.edu/' }
			
		]
	}
	else if (dtp=='199917')
	{
		dp = [                                         
			{ y: 1, label: 'http://ixa.si.ehu.es' }
			
		]
	}
	else if (dtp=='199918')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.ncbi.nlm.nih.gov/PubMed/' }
			
		]
	}
	else if (dtp=='199919')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.lpl.univ-' }
			
		]
	}
	else if (dtp=='199920')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cs.vassar.edu/CES/' }
			
		]
	}
	else if (dtp=='20030')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://www.isi.edu/' }
			
		]
	}
	else if (dtp=='20031')
	{
		dp = [                                         
		
			{ y: 1, label: 'http://www.ruleauest.com' }
			
		]
	}
	else if (dtp=='20032')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cs.nyu.edu/cs/projects/proteus/evalb/' },
			{ y: 1, label: 'http://www.cs.nyu.eduks/projects/proteus/app/' }
			
		]
	}
	else if (dtp=='20033')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.research.microsoft.com/users/brill/' }
			
		]
	}
	else if (dtp=='20034')
	{
		dp = [                                         
			{ y: 1, label: 'http://www-2.cs.cmu.edu/webkb/' }
			
		]
	}
	else if (dtp=='20035')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cs.bris.ac.uk/-i1p99/'}
			
		]
	}
	else if (dtp=='20036')
	{
		dp = [                                         
			{ y: 1, label:'http://www.caneer.eoy/dictionary/' }
			
		]
	}
	else if (dtp=='20037')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.nlm.nih.eoy/mestilmeshhome.htnal' }
			
		]
	}
	else if (dtp=='20038')
	{
		dp = [                                         
			
			{ y: 2, label: 'www.ai.sri' }
			
		]
	}
	else if (dtp=='20039')
	{
		dp = [                                         
			{ y: 2, label: 'www.russicon.ru' }
			
		]
	}
	else if (dtp=='200310')
	{
		dp = [                                         
			{ y: 1, label: 'www.cis.upenn.edu' },
			{ y: 1, label: 'http://www.lirig.upenn.edu/miderig-' }
			
		]
	}
	else if (dtp=='200311')
	{
		dp = [                                         
			{ y: 1, label: 'http://grok.sourceforge.net/' },
			{ y: 1, label: 'http://sourceforge.net/projects/leonlp/'}
			
		]
	}
	else if (dtp=='200312')
	{
		dp = [                                         
			{ y: 1, label: 'http://lingo.stanford.edu' },
			{ y: 1, label: 'http://www-csli.stanford.edu/semlab/' }
			
		]
	}
	else if (dtp=='200313')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.altavista.com/' }
			
		]
	}
	else if (dtp=='200314')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.nist.gov/speechltests/mtl' },
			{ y: 1, label: 'http://www.itl.nist.gov/iaui/894.02/related_projects/muc/' }
			
		]
	}
	else if (dtp=='200315')
	{
		dp = [                                         
			{ y: 1, label: 'http://geta.ex.nii.ac.jp/' }
			
		]
	}
	else if (dtp=='200316')
	{
		dp = [                                         
			{ y: 2, label: 'www.nuance.com' }
			
		]
	}
	else if (dtp=='200317')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.clsp.jhu.edu/' }
			
		]
	}
	else if (dtp=='200318')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.coli.uni-sb.de/sfb378/negra-corpus/'}
			
		]
	}
	else if (dtp=='200319')
	{
		dp = [                                         
			{ y: 1, label: 'http://vivvv,.cs.cornell.edu/homeillee/datit/sim.html' }
			
		]
	}
	else if (dtp=='20060')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://www-2.cs.cmu.edu/mccallum/bow/' },
			{ y: 1, label: 'http://www.is.cs.cmu.edu/iwslt2005/' }
			
		]
	}
	else if (dtp=='200616')
	{
		dp = [                                         
			{ y: 1, label: 'http://openccg.sourceforge.net' },
			{ y: 1, label: 'http://wordlist.sourceforge.net/' },
			{ y: 1, label: 'http://senseclusters.sourceforge.net' }
			
		]
	}
	else if (dtp=='20062')
	{
		dp = [                                         
			
			{ y: 3, label: 'www.tc-star.org' }
			
		]
	}
	else if (dtp=='20063')
	{
		dp = [                                         
			{ y: 1, label: 'http://snowball.tartarus.org' }
			
		]
	}
	else if (dtp=='20064')
	{
		dp = [                                         
			{ y: 2, label: 'www.cs.waikato.ac.nz' }
			
		]
	}
	else if (dtp=='20065')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.speech.sri.com/projects/srilm' }
			
		]
	}
	else if (dtp=='20066')
	{
		dp = [                                         
			
			{ y: 2, label: 'www.talk-project.org' }
			
		]
	}
	else if (dtp=='20067')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.nuance.com' }
			
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
			{ y: 1, label:  'http://research.microsoft.com/' }
			
		]
	}
	else if (dtp=='200610')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.altavista.com/' }
			
		]
	}
	else if (dtp=='200611')
	{
		dp = [                                         
			{ y: 2, label: 'wordnet.princeton.edu' }
			
		]
	}
	else if (dtp=='200612')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://www.webuse.umd.edu:9090/'}
			
		]
	}
	else if (dtp=='200613')
	{
		dp = [                                         
			{ y: 1, label: 'http://svmlight.joachims.org/' }
			
		]
	}
	else if (dtp=='200614')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://nlp.cs.jhu.edu/rflorian/fntbl'}
			
		]
	}
	else if (dtp=='200615')
	{
		dp = [                                         
			{ y: 1, label: 'http://duc.nist.gov/duc2005/quality-' },
			{ y: 1, label: 'http://cio.nist.gov/esd/emaildir/lists/mt' },
			{ y: 1, label: 'http://www.nist.gov/speech/tests/mt/' },
			{ y: 1, label: 'http://trec.nist.gov' }
			
		]
	}
	else if (dtp=='20061')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.isi.edu/cyl/R' }
			
		]
	}
	else if (dtp=='200617')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://www.cis.upenn.edu/' },
			{ y: 1, label: 'http://www.ldc.upenn.edu/myl/morph/buckwalter.html' }
			
		]
	}
	else if (dtp=='200618')
	{
		dp = [                                         
			{ y: 2, label: 'genome.jouy.inra.fr' }
			
		]
	}
	else if (dtp=='200619')
	{
		dp = [                                         
			
			{ y: 2, label: 'www.linguateca.pt' }
			
			
		]
	}
	else if (dtp=='200620')
	{
		dp = [                                         
			
			{ y: 2, label: 'ir.ohsu.edu' }
			
			
		]
	}
	else if (dtp=='200621')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://www.google.com' }
			
			
		]
	}
	else if (dtp=='20090')
	{
		dp = [
			
			{ y: 2, label: 'www.nlm.nih.gov' }
			
		]
	}
	else if (dtp=='20091')
	{
		dp = [                                         
			{ y: 8, label:  'www.statmt.org' }
			
		]
	}
	else if (dtp=='20092')
	{
		dp = [                                         
			{ y: 2, label: 'ir.dcs.gla.ac.uk' }
			
		]
	}
	else if (dtp=='20093')
	{
		dp = [                                         
			{ y: 2, label: 'www.wjh.harvard.edu' }
			
		]
	}
	else if (dtp=='20094')
	{
		dp = [                                         
			{ y: 2, label: 'sourceforge.net' },
			{ y: 1, label: 'http://crfchunker.sourceforge.net/'},
			{ y: 1, label: 'http://opennlp.sourceforge.net' },
			{ y: 1, label: 'http://crfpp.sourceforge.net' },
			{ y: 1, label: 'http://infomap-nlp.sourceforge.net/' }
			
		]
	}
	else if (dtp=='20095')
	{
		dp = [                                         
			{ y: 2, label: 'ixa2.si.ehu.es' },
			{ y: 1, label: 'http://adimen.si.ehu.es/web/BLC' }
			
		]
	}
	else if (dtp=='20096')
	{
		dp = [                                         
			{ y: 1, label: 'http://nipadio.lsi.upc.es/nlp/meaning' },
			{ y: 1, label: 'http://www.lsi.upc.es/nlp/tools/download-map.php' },
			{ y: 1, label: 'http://gps-tsc.upc.es/veu/soft/soft/marie/'}
			
		]
	}
	else if (dtp=='20097')
	{
		dp = [                                         
			{ y: 1, label: 'http://www-nlpir.nist.gov/related' },
			{ y: 4, label: 'www.nist.gov' },
			{ y: 2, label: 'http://duc.nist.gov;' }
			
		]
	}
	else if (dtp=='20098')
	{
		dp = [                                         
			{ y: 2, label: 'code.google.com' },
			{ y: 1, label: 'http://translate.google.com' },
			{ y: 1, label: 'http://sites.google.com/site/garybaker/' }
			
		]
	}
	else if (dtp=='20099')
	{
		dp = [                                         
			{ y: 4, label: 'mallet.cs.umass.edu' }
			
		]
	}
	else if (dtp=='200910')
	{
		dp = [                                         
			{ y: 3, label: 'www.yellowpages.com' }
			
		]
	}
	else if (dtp=='200911')
	{
		dp = [                                         
			{ y: 2, label: 'finance.yahoo.com' },
			{ y: 2, label: 'http://biz.yahoo.com' }
			
		]
	}
	else if (dtp=='200912')
	{
		dp = [                                         
			{ y: 2, label: 'www.nndb.com' }
			
		]
	}
	else if (dtp=='200913')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://en.wikipedia.org/wiki/Bengali' },
			{ y: 1, label: 'http://bn.wikipedia.org' },
			{ y: 1, label: 'http://www.wikipedia.org' }

			
		]
	}else if (dtp=='200914')
	{
		dp = [                                         
			{ y: 2, label: 'www.senseval.org'}
			
			
		]
	}
	else if (dtp=='200915')
	{
		dp = [                                         
			{ y: 2, label: 'wordnet.princeton.edu' }
			
		]
	}else if (dtp=='200916')
	{
		dp = [                                         
			{ y: 2, label: 'nlp.stanford.edu' },
			{ y: 1, label: 'ai.stanford.edu' }
			
		]
	}
	else if (dtp=='200917')
	{
		dp = [                                         
			{ y: 1, label:'http://svmlight.joachims.org/' }
			
		]
	}
	else if (dtp=='200918')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.ldc.upenn.edu/Projects/' },
			{ y: 1, label: 'http://www.cis.upenn.edu/dbikel/software.html' }
			
		]
	}
	else if (dtp=='200919')
	{
		dp = [                                         
			{ y: 3, label: 'www.csie.ntu.edu.tw' }
			
		]
	}
	else if (dtp=='200920')
	{
		dp = [                                         
			{ y: 2, label: 'ilk.uvt.nl' }
			
		]
	}
	else if (dtp=='20120')
	{
		dp = [                                         
			{ y: 2, label: 'www.ilc.cnr.it' }
			
		]
	}
	else if (dtp=='20121')
	{
		dp = [                                         
			{ y: 3, label: 'www.ims.uni-stuttgart.de' }
			
		]
	}
	else if (dtp=='20122')
	{
		dp = [                                         
			
			{ y: 2, label: 'stp.lingfil.uu.se' }
			
		]
	}
	else if (dtp=='20123')
	{
		dp = [                                         
			{ y: 1, label: 'http://repository.upenn.edu/' },
			{ y: 1, label: 'http://projects.ldc.upenn.edu/ace/' },
			{ y: 1, label: 'http://www.ldc.upenn.edu/' }
			
		]
	}
	else if (dtp=='20124')
	{
		dp = [                                         
			{ y: 2, label: 'www.csie.ntu.edu.tw' }
			
		]
	}
	else if (dtp=='20125')
	{
		dp = [                                         
			{ y: 1, label:'http://translate.google.com/' },
			{ y: 12, label:'code.google.com' }
			
		]
	}
	else if (dtp=='20126')
	{
		dp = [                                         
			{ y: 2, label: 'sourceforge.net' },
			{ y: 2, label: 'maxent.sourceforge.net' },
			{ y: 1, label: 'http://opennlp.sourceforge.net' },
			{ y: 1, label: 'http://crfpp.sourceforge.net' },
			{ y: 1, label: 'http://jazzy.sourceforge.net/' },
			{ y: 1, label: 'http://opensmile.sourceforge.net/' },
			{ y: 1, label: 'http://gargantua.sourceforge.net' },
			{ y: 1, label: 'http://soaplab.sourceforge.net/' },
			{ y: 1, label: 'http://awstats.sourceforge.net' },
			{ y: 1, label: 'http://jpivot.sourceforge.net' }
			
		]
	}
	else if (dtp=='20127')
	{
		dp = [                                         
			{ y: 11, label: 'www.statmt.org' },
			{ y: 2, label: 'statmt.org' }
			
		]
	}
	else if (dtp=='20128')
	{
		dp = [                                         
			{ y: 1, label: 'http://ar.wikipedia.org' },
			{ y: 3, label: 'www.wikipedia.org' },
			{ y: 3, label: 'simple.wikipedia.org' }
			
		]
	}
	else if (dtp=='20129')
	{
		dp = [                                         
			{ y: 2, label: 'www.itl.nist.gov' },
			{ y: 1, label: 'http://trec.nist.gov/data/reuters/reuters.html' },
			{ y: 1, label: 'http://www.isd.mel.nist.gov/research_areas/' }
			
		]
	}
	else if (dtp=='201210')
	{
		dp = [                                         
			{ y: 3, label: 'dl.acm.org' }
			
		]
	}
	else if (dtp=='201211')
	{
		dp = [                                         
			{ y: 6, label: 'www.aclweb.org' }
			
		]
	}
	else if (dtp=='201212')
	{
		dp = [                                         
			{ y: 4, label: 'dx.doi.org' }
			
		]
	}
	else if (dtp=='201213')
	{
		dp = [                                         
			{ y: 3, label: 'nlp.stanford.edu'},
			{ y: 1, label: 'http://www.stanford.edu/class/'}
			
		]
	}
	else if (dtp=='201214')
	{
		dp = [                                         
			{ y: 1, label: 'http://pt.wiktionary.org/' },
			{ y: 2, label: 'www.wiktionary.org' }
			
		]
	}
	else if (dtp=='201215')
	{
		dp = [                                         
			{ y: 13, label: 'www.ukp.tu-darmstadt.de' }
			
		]
	}
	else if (dtp=='201216')
	{
		dp = [                                         
			{ y: 4, label: 'github.com' }
			
		]
	}
	else if (dtp=='201217')
	{
		dp = [                                         
			
			{ y: 2, label: 'dev.twitter.com' }
			
		]
	}
	else if (dtp=='201218')
	{
		dp = [                                         
			{ y: 2, label: 'verbs.colorado.edu' }
			
		]
	}
	else if (dtp=='201219')
	{
		dp = [                                         
			{ y: 4, label:  'www.isocat.org' }
			
		]
	}
	else if (dtp=='201220')
	{
		dp = [                                         
			{ y: 2, label: 'mallet.cs.umass.edu' }
			
		]
	}
	else if (dtp=='201221')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.elda.org/article125.html' },
			{ y: 4, label: 'myexperiment.elda.org' },
			{ y: 4, label: 'registry.elda.org' }
			
		]
	}
	else if (dtp=='201222')
	{
		dp = [                                         
			{ y: 3, label: 'brat.nlplab.org' },
			{ y: 1, label: 'http://nersuite.nlplab.org' }
			
		]
	}
	
	else if (dtp=='20140')
	{
		dp = [     
			{ y: 1, label: 'http://people.csail.mit' },
			{ y: 1, label: 'http://csc.media.mit.edu/' },
			{ y: 1, label: 'http://projects.csail.mit.edu/jwi' },
			{ y: 1, label: 'http://people.csail.mit.edu/francois/' },
			
			
		]
	}
	else if (dtp=='20141')
	{
		dp = [                                         
			{ y: 2, label: 'www-nlp.stanford.edu' },
			{ y: 9, label: 'nlp.stanford.edu' },
			{ y: 1, label: 'http://cs.stanford.edu/' }
			
		]
	}
	else if (dtp=='20142')
	{
		dp = [                                         
			
			{ y: 2, label: 'www.ukp.tu-darmstadt.de' }
			
		]
	}
	else if (dtp=='20143')
	{
		dp = [                                         
			{ y: 2, label: 'www.cse.unt.edu' }
			
		]
	}
	else if (dtp=='20144')
	{
		dp = [                                         
			{ y: 4, label: 'en.wikipedia.org' },
			{ y: 2, label: 'www.wikipedia.org' }
			
		]
	}
	else if (dtp=='20145')
	{
		dp = [                                         
			{ y: 2, label: 'www.wiktionary.org' },
			{ y: 1, label: 'http://simple.wiktionary.org/wiki/Wiktionary:BNC' },
			{ y: 1, label: 'http://ru.wiktionary.org/' }
			
		]
	}
	else if (dtp=='20146')
	{
		dp = [               
			
			{ y: 6, label:  'code.google.com' },
			{ y: 1, label:  'https://sites.google.com/site/fmchowdhury2/bioenex' },
			{ y: 1, label:  'http://translate.google.com' },
			{ y: 1, label:  'http://www.google.com/intl/en/chrome/demos/speech.html' }
			
		]
	}
	else if (dtp=='20147')
	{
		dp = [                                         
			
			{ y: 2, label: 'adimen.si.ehu.es' }
			
		]
	}
	else if (dtp=='20148')
	{
		dp = [                                         
			{ y: 12, label: 'github.com' }
			
		]
	}
	else if (dtp=='20149')
	{
		dp = [                                         
			{ y: 2, label: 'www.cs.cmu.edu' },
			{ y: 2, label: 'www.ark.cs.cmu.edu' },
			{ y: 1, label: 'http://reap.cs.cmu.edu' },
			{ y: 1, label: 'http://www.speech.cs.cmu.edu/cgi-bin/cmudict'}
			
		]
	}
	else if (dtp=='201410')
	{
		dp = [                                         
			{ y: 2, label: 'mallet.cs.umass.edu' },
			{ y: 1, label: 'http://www.cs.umass.edu/' }
			
		]
	}
	else if (dtp=='201411')
	{
		dp = [                                         
			{ y: 4, label: 'cogcomp.cs.illinois.edu' }
			
		]
	}
	else if (dtp=='201412')
	{
		dp = [                                         
			{ y: 2, label: 'verbs.colorado.edu' }
			
		]
	}
	else if (dtp=='201413')
	{
		dp = [                                         
			
			{ y: 2, label: 'crfpp.googlecode.com' }
			
		]
	}else if (dtp=='201414')
	{
		dp = [                                         
			{ y: 2, label: 'www.itl.nist.gov' },
			{ y: 3, label: 'www.nist.gov' },
			{ y: 1, label: 'http://duc.nist.gov' }
			
		]
	}
	else if (dtp=='201415')
	{
		dp = [                                         
			{ y: 3, label: 'mpqa.cs.pitt.edu' }
			
		]
	}
	else if (dtp=='201416')
	{
		dp = [                                         
			
			{ y: 3, label: 'www.nytimes.com'}
			
		]
	}else if (dtp=='201417')
	{
		dp = [                                         
			{ y: 1, label: 'catalog.ldc.upenn.edu' },
			{ y: 1, label: 'http://www.ldc.upenn.edu/Catalog/' },
			{ y: 1, label: 'http://www.cis.upenn.edu/' },
			{ y: 1, label: 'https://www.seas.upenn.edu/~hongkai1/regsum.html' }
			
		]
	}
	else if (dtp=='201418')
	{
		dp = [                                         
			{ y: 5, label: 'www.statmt.org' }
			
		]
	}
	else if (dtp=='201419')
	{
		dp = [                                         
			{ y: 3, label: 'www.mturk.com' }
			
		]
	}
	else if (dtp=='20170')
	{
		dp = [                                         
			
			{ y: 6, label: 'cistern.cis.lmu.de' }
			
		]
	}
	else if (dtp=='20171')
	{
		dp = [                                         
			
			{ y: 9, label: 'bitbucket.org' }
			
		]
	}
	else if (dtp=='20172')
	{
		dp = [                                         
			{ y: 20, label: 'nlp.stanford.edu' },
			{ y: 1, label: 'http://ai.stanford.edu/amaas/data/sentiment/' },
			{ y: 1, label: 'http://stanford.edu/lmthang/bivec/'},
			{ y: 1, label: 'http://www-nlp.stanford.edu/projects/glove/' }
			
		]
	}
	else if (dtp=='20173')
	{
		dp = [                                         
			{ y: 3, label: 'scikit-learn.org' }
			
		]
	}
	else if (dtp=='20174')
	{
		dp = [                                         
			
			{ y: 129, label: 'github.com' }
			
		]
	}
	else if (dtp=='20175')
	{
		dp = [                                         
			{ y: 2, label: 'drive.google.com' },
			{ y: 1, label: 'sites.google.com' },
			{ y: 16, label:  'code.google.com' },
			{ y: 2, label: 'https://books.google.com/ngrams/' }
			
		]
	}
	else if (dtp=='20176')
	{
		dp = [                                         
			{ y: 6, label: 'dumps.wikimedia.org' }
			
		]
	}
	else if (dtp=='20177')
	{
		dp = [                                         
			{ y: 1, label: 'https://opennlp.apache.org/' },
			{ y: 1, label: 'https://kafka.apache.org/' },
			{ y: 4, label: 'lucene.apache.org' }
			
		]
	}
	else if (dtp=='20178')
	{
		dp = [                                         
			
			{ y: 10, label: 'en.wikipedia.org'}
			
		]
	}
	else if (dtp=='20179')
	{
		dp = [                                         
			
			{ y: 3, label: 'www.arguana.com' }
			
		]
	}
	else if (dtp=='201710')
	{
		dp = [                                         
			
			{ y: 2, label: 'nlp.cs.illinois.edu'}
			
		]
	}
	else if (dtp=='201711')
	{
		dp = [                                         
			{ y: 2, label: 'duc.nist.gov' },
			{ y: 3, label: 'www.nist.gov' }
			
		]
	}
	else if (dtp=='201712')
	{
		dp = [                                         
			{ y: 1, label: 'http://matrix.statmt.org/' },
			{ y: 3, label: 'statmt.org' },
			{ y: 2, label: 'data.statmt.org' },
			{ y: 10, label: 'www.statmt.org' }
			
		]
	}
	else if (dtp=='201713')
	{
		dp = [                                         
			{ y: 2, label: 'research.microsoft.com' },
			{ y: 1, label: 'https://azure.microsoft.com/en-us/' }
			
		]
	}
	else if (dtp=='201714')
	{
		dp = [                                         
			{ y: 2, label: 'en.wiktionary.org' },
			{ y: 1, label: 'https://ja.wiktionary.org/wiki/%E3%82' },
			{ y: 1, label: 'http://www.wiktionary.org' }
			
		]
	}
	else if (dtp=='201715')
	{
		dp = [                                         
			{ y: 3, label: 'www.ibm.com' },
			{ y: 1, label: 'https://www.research.ibm.com/haifa/' },
			{ y: 1, label: 'http://researcher.ibm.com/researcher/' }
			
		]
	}
	else if (dtp=='201716')
	{
		dp = [                                         
		
			{ y: 4, label: 'radimrehurek.com' }
			
		]
	}else if (dtp=='201717')
	{
		dp = [                                         
			
			{ y: 4, label: 'ilk.uvt.nl' }
			
		]
	}
	else if (dtp=='201718')
	{
		dp = [                                         
			{ y: 6, label: 'mallet.cs.umass.edu' }
			
		]
	}
	else if (dtp=='201719')
	{
		dp = [                                         
			
			{ y: 3, label: 'rgai.inf.u-szeged.hu' }
			
		]
	}
	else if (dtp=='201720')
	{
		dp = [                                         
			{ y: 5, label: 'aclweb.org' },
			{ y: 9, label: 'www.aclweb.org' }
			
		]
	}
	else if (dtp=='201721')
	{
		dp = [                                         
			{ y: 1, label: 'http://nlpgrid.seas.upenn.edu/PPDB/eng/' },
			{ y: 1, label: 'https://www.ldc.upenn.edu' },
			{ y: 7, label: 'catalog.ldc.upenn.edu' },
			{ y: 2, label: 'www.cis.upenn.edu' }
			
		]
	}
	else if (dtp=='201722')
	{
		dp = [                                         
			{ y: 3, label: 'www.tensorflow.org' },
			{ y: 1, label: 'http://tensorflow.org/' }
			
		]
	}
	else if (dtp=='201723')
	{
		dp = [                                         
			{ y: 1, label: 'https://www.nlm.nih.gov/mesh/' },
			{ y: 6, label: 'www.ncbi.nlm.nih.gov' },
			{ y: 1, label: 'https://mbr.nlm.nih.gov/Background' }
			
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