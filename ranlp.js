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
		name: "RANLP: Long Papers",
		dataPoints: [
		
		
				{ y: 1, x: new Date(2009,0) },
				{ y: 31, x: new Date(2011,0) },
				{ y: 59, x: new Date(2013,0) },
				{ y: 60, x: new Date(2015,0) },
				{ y: 62, x: new Date(2017,0) }
				
				
		]
		},
		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Short Papers",
			color: "#e3f702",
			dataPoints: [
			
			
			
				{ y: 86, x: new Date(2009,0) },
				{ y: 84, x: new Date(2011,0) },
				{ y: 40, x: new Date(2013,0) },
				{ y: 35, x: new Date(2015,0) },
				{ y: 45, x: new Date(2017,0) }
			]
		},
		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Demo Paper",
			color: "#f70202",
			dataPoints: [
				{ y: 0, x: new Date(2009,0) },
				{ y: 0, x: new Date(2011,0) },
				{ y: 0, x: new Date(2013,0) },
				{ y: 0, x: new Date(2015,0) },
				{ y: 0, x: new Date(2017,0) }
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
		name: "RANLP: Old Authors",
		dataPoints: [
		
				{ y: 0.0, x: new Date(2009,0) },
				{ y: 0.10943396226415095, x: new Date(2011,0) },
				{ y: 0.18181818181818182, x: new Date(2013,0) },
				{ y: 0.21495327102803738, x: new Date(2015,0) },
				{ y: 0.20527859237536658, x: new Date(2017,0) }
				
				
		]
		},
		
		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "New Authors",
			color: "#f70202",
			dataPoints: [
			
			
			
				{ y: 1.0, x: new Date(2009,0) },
				{ y: 0.8905660377358491, x: new Date(2011,0) },
				{ y: 0.8181818181818182, x: new Date(2013,0) },
				{ y: 0.7850467289719626, x: new Date(2015,0) },
				{ y: 0.7947214076246334, x: new Date(2017,0) }
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
		name: "RANLP: Avg. number of Papers per Author",
		dataPoints: [
			
			
			
			{ y:0.41232227488151657, x: new Date(2009,0) },
			{ y:0.3685897435897436, x: new Date(2011,0) },
			{ y:0.33559322033898303, x: new Date(2013,0) },
			{ y:0.36398467432950193, x: new Date(2015,0) },
			{ y:0.25970873786407767, x: new Date(2017,0) }
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
		name: "RANLP: Avg. number of Authors per Paper per Year",
		dataPoints: [
			
			
			
			{ y:2.425287356321839, x: new Date(2009,0) },
			{ y:2.7130434782608694, x: new Date(2011,0) },
			{ y:2.9797979797979797, x: new Date(2013,0) },
			{ y:2.7473684210526317, x: new Date(2015,0) },
			{ y:3.850467289719626, x: new Date(2017,0) }
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
		name: "RANLP: Long Papers",
		dataPoints: [
			
			
			{ y:18.0, x: new Date(2009,0) },
			{ y:26.193548387096776, x: new Date(2011,0) },
			{ y:25.966101694915253, x: new Date(2013,0) },
			{ y:24.283333333333335, x: new Date(2015,0) },
			{ y:27.338709677419356, x: new Date(2017,0) }
		]
		},


		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Short Papers",
			color: "#C00C0C",
			dataPoints: [
			
			
			
			
			
			{ y:16.988372093023255, x: new Date(2009,0) },
			{ y:16.321428571428573, x: new Date(2011,0) },
			{ y:17.675, x: new Date(2013,0) },
			{ y:20.34285714285714, x: new Date(2015,0) },
			{ y:19.133333333333333, x: new Date(2017,0) }
			
			
			
			
			]
		},
		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Demo Papers",
			color: "#309000",
			dataPoints: [
			
			
			
			
			
			{ y:0, x: new Date(2009,0) },
			{ y:0, x: new Date(2011,0) },
			{ y:0, x: new Date(2013,0) },
			{ y:0, x: new Date(2015,0) },
			{ y:0, x: new Date(2017,0) }
			
			
			
			
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
		name: "RANLP: URLs per Paper 2009-2017",
		dataPoints: [
			
			
			
			{ y:2.689655172413793, x: new Date(2009,0) },
			{ y:2.6956521739130435, x: new Date(2011,0) },
			{ y:3.0202020202020203, x: new Date(2013,0) },
			{ y:3.442105263157895, x: new Date(2015,0) },
			{ y:8.355140186915888, x: new Date(2017,0) }
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
		name: "RANLP : Avg. number of URLs in footnote per Paper per Year",
		dataPoints: [
			
			
			
			{ y:1.0574712643678161, x: new Date(2009,0) },
			{ y:1.0260869565217392, x: new Date(2011,0) },
			{ y:1.2222222222222223, x: new Date(2013,0) },
			{ y:1.4842105263157894, x: new Date(2015,0) },
			{ y:1.6168224299065421, x: new Date(2017,0) }
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
		name: "RANLP : Avg. number of Tables per Paper per Year",
		dataPoints: [
			
			
			
			{ y:3.2758620689655173, x: new Date(2009,0) },
			{ y:3.3859649122807016, x: new Date(2011,0) },
			{ y:3.808080808080808, x: new Date(2013,0) },
			{ y:4.631578947368421, x: new Date(2015,0) },
			{ y:4.158878504672897, x: new Date(2017,0) }
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
		name: "RANLP : Avg. number of Figures per Paper per Year",
		dataPoints: [
			
			
			
			{ y:2.045977011494253, x: new Date(2009,0) },
			{ y:1.9385964912280702, x: new Date(2011,0) },
			{ y:2.101010101010101, x: new Date(2013,0) },
			{ y:2.0526315789473686, x: new Date(2015,0) },
			{ y:2.0093457943925235, x: new Date(2017,0) }
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
		name: "RANLP : Most Popular primary URL domains & their Frequencies",
		legendText: "",
		dataPoints: [
			{ y:15,  label:'arxiv.org'  },
			{ y:58,  label:'github.com'  },
			{ y:48,  label:'dl.acm.org'  },
			{ y:26,  label:'aclweb.org'  },
			{ y:68,  label:'www.aclweb.org'  },
			{ y:21,  label:'code.google.com'  },
			{ y:18,  label:'nlp.stanford.edu'  },
			{ y:17,  label:'www.statmt.org'  },
			{ y:13,  label:'en.wikipedia.org'  },
			{ y:11,  label:'wordnet.princeton.edu'  },
			{ y:10,  label:'dx.doi.org'  },
			{ y:9,  label:'sourceforge.net'  },
			{ y:9,  label:'nlp.pwr.wroc.pl'  },
			{ y:8,  label:'www.cs.waikato.ac.nz'  },
			{ y:8,  label:'www.ir-facility.org'  },
			{ y:7,  label:'ilk.uvt.nl'  },
			{ y:7,  label:'gate.ac.uk'  },
			{ y:7,  label:'www.ldc.upenn.edu'  },
			{ y:7,  label:'nlp.cs.nyu.edu'  },
			{ y:7,  label:'hdl.handle.net'  }
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
		name: "RANLP : Top Unique GitHub Pages",
		legendText: "",
		dataPoints: [
			{ y: 4, label: 'GateNLP/' },
			{ y: 2, label: 'assulan/STRANDAligner' },
			{ y: 2, label: 'jrs026/STRANDAligner' },
			{ y: 2, label: 'ahmetaker/' },
			{ y: 2, label: 'slavpetrov/' },
			{ y: 2, label: 'MeDarina/SameSame' },
			{ y: 1, label: 'aritter/twitter' },
			{ y: 1, label: 'williamgunn/' },
			{ y: 1, label: 'pmarcis/mp-aligner' },
			{ y: 1, label: 'badc0re/sent-lex' },
			{ y: 1, label: 'jodaiber/' },
			{ y: 1, label: 'hltfbk/EOP-' },
			{ y: 1, label: 'apache/lucene-solr' },
			{ y: 1, label: 'asoroa/naf_ukb' },
			{ y: 1, label: 'liuhaixiachina/Sentiment-Analysis-' },
			{ y: 1, label: 'manexagirrezabal/' },
			{ y: 1, label: 'bncolorado/' },
			{ y: 1, label: 'jakevdp/pyCRFsuite' },
			{ y: 1, label: 'glample/tagger' },
			{ y: 1, label: 'karpathy/char-rnn/' }
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
		name: "RANLP : Top University Pages",
		legendText: "",
		dataPoints: [
			{ y: 8, label:'Sofia University' },
			{ y: 6, label:'Bicycle Shelter' },
			{ y: 16, label:'University of Wolverhampton' },
			{ y: 15, label:'Indiana University East' },
			{ y: 12, label:'University of Sheffield' },
			{ y: 9, label:'University of Ottawa' },
			{ y: 8, label:'Universitatea Tehnică a Moldovei' },
			{ y: 8, label:'Indiana University Bloomington' },
			{ y: 6, label:'Campus Ciutadella Universitat Pompeu Fabra' },
			{ y: 5, label:'Göteborgs Universitet' },
			{ y: 4, label:'Campus Middelheim Universiteit Antwerpen' },
			{ y: 4, label:'Universität Hamburg' },
			{ y: 4, label:'Zurich University of Applied Sciences' },
			{ y: 4, label:'Bulgarian Academy of Sciences' },
			{ y: 4, label:'Faculty of Veterinary Medicine of University of Zagreb' },
			{ y: 4, label:'National Autonomous University of Mexico' },
			{ y: 4, label:'Arcada University of Applied Sciences' },
			{ y: 4, label:'School of Information Systems' },
			{ y: 3, label:'Herchel Smith Building for Brain and Mind Sciences' },
			{ y: 3, label:'University of North Texas' }
			
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
		
		
		if(dt==2009)
		{
			dp= [
			{ y:4, label: 'upc.es' },
			{ y:3, label: 'www-tsujii.is.s.u' },
			{ y:10, label: 'sourceforge.net' },
			{ y:2, label: 'uvt.nl' },
			{ y:6, label: 'nist.gov' },
			{ y:2, label: 'nii.ac.jp' },
			{ y:2, label: 'ualberta.ca' },
			{ y:3, label: 'umn.edu' },
			{ y:2, label: 'tartarus.org' },
			{ y:4, label: 'shef.ac.uk' },
			{ y:2, label: 'apache.org' },
			{ y:3, label: 'ua.ac.be' },
			{ y:3, label: 'mitre.org' },
			{ y:2, label: 'experienceproject.com' },
			{ y:3, label: 'senseval.org' },
			{ y:3, label: 'unt.edu' },
			{ y:7, label: 'princeton.edu' },
			{ y:2, label: 'berkeley.edu' },
			{ y:3, label: 'google.com' },
			{ y:2, label: 'wikimedia.org' }
			
		]
		}
		if(dt==2011)
		{
			dp= [
			{ y:5, label: 'jrc.it' },
			{ y:4, label: 'bbn.com' },
			{ y:9, label: 'dfki.de' },
			{ y:10, label: 'sourceforge.net' },
			{ y:6, label: 'stanford.edu' },
			{ y:6, label: 'statmt.org' },
			{ y:3, label: 'newsbrief.eu' },
			{ y:5, label: 'europa.eu' },
			{ y:2, label: 'umass.edu' },
			{ y:2, label: 'nlpado.de' },
			{ y:8, label: 'google.com' },
			{ y:2, label: 'uni-stuttgart.de' },
			{ y:3, label: 'upenn.edu' },
			{ y:2, label: 'gutenberg.org' },
			{ y:2, label: 'unige.ch' },
			{ y:8, label: 'nist.gov' },
			{ y:2, label: 'joachims.org' },
			{ y:2, label: 'princeton.edu' },
			{ y:2, label: 'sri.com' },
			{ y:3, label: 'nih.gov' }
			
		]
		}
		else if(dt==2013)
		{
			dp= [ 
			{ y:2, label: 'nyu.edu' },
			{ y:3, label: 'upenn.edu' },
			{ y:1, label: 'columbia.edu' },
			{ y:4, label: 'gate.ac.uk' },
			{ y:5, label: 'stanford.edu' },
			{ y:10, label: 'google.com' },
			{ y:1, label: 'waikato.ac.nz' },
			{ y:6, label: 'wikipedia.org' },
			{ y:6, label: 'apache.org' },
			{ y:2, label: 'ntu.edu.tw' },
			{ y:3, label: 'github.com' },
			{ y:5, label: 'statmt.org' },
			{ y:2, label: 'natcorp.ox.ac.uk' },
			{ y:3, label: 'ipipan.waw.pl' },
			{ y:3, label: 'w3.org' },
			{ y:3, label: 'joachims.org' },
			{ y:6, label: 'wroc.pl' },
			{ y:8, label: 'ir-facility.org' },
			{ y:2, label: 'wndomains.fbk.eu' },
			{ y:2, label: 'bultreebank.org' }
			
		]
		}
		else if(dt==2015)
		{
			dp= [
			{ y:3, label: 'sf.net' },
			{ y:4, label: 'acm.org' },
			{ y:4, label: 'sourceforge.net' },
			{ y:9, label: 'github.com' },
			{ y:3, label: 'nist.gov' },
			{ y:6, label: 'upenn.edu' },
			{ y:6, label: 'nyu.edu' },
			{ y:8, label: 'wikipedia.org' },
			{ y:5, label: 'github.io' },
			{ y:2, label: 'pdev.org.uk' },
			{ y:4, label: 'googlecode.com' },
			{ y:10, label: 'google.com' },
			{ y:3, label: 'wroc.pl' },
			{ y:2, label: 'r-project.org' },
			{ y:2, label: 'utexas.edu' },
			{ y:2, label: 'excitement-project.eu' },
			{ y:3, label: 'ntu.edu.sg' },
			{ y:3, label: 'stanford.edu' },
			{ y:4, label: 'statmt.org' },
			{ y:2, label: 'apple.com' }
			
			
		]
		}
		else if(dt==2017)
		{
			dp= [
			{ y:252, label: 'doi.org' },
			{ y:3, label: 'wiktionary.org' },
			{ y:11, label: 'google.com' },
			{ y:46, label: 'github.com' },
			{ y:3, label: 'statmt.org' },
			{ y:5, label: 'qcri.org' },
			{ y:4, label: 'wikipedia.org' },
			{ y:93, label: 'aclweb.org' },
			{ y:5, label: 'sourceforge.net' },
			{ y:3, label: 'universaldependencies.org' },
			{ y:48, label: 'acm.org' },
			{ y:15, label: 'arxiv.org' },
			{ y:7, label: 'goo.gl' },
			{ y:4, label: 'qatarliving.com' },
			{ y:4, label: 'nips.cc' },
			{ y:8, label: 'github.io' },
			{ y:4, label: 'crowdflower.com' },
			{ y:6, label: 'clarin-pl.eu' },
			{ y:7, label: 'stanford.edu' },
			{ y:7, label: 'cuni.cz' }
			
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
	
	if (dtp=='20090')
	{
		dp = [                                         
			
			{ y: 3, label: 'garraf.epsevg.upc.es' },
			{ y: 1, label: 'http://www.lsi.upc.es/' }
		]
	}
	else if (dtp=='20091')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://www-tsujii.is.s.u' },
			{ y: 1, label: 'http://www-tsujii.is.s.u-' },
			{ y: 1, label: 'http://www-tsujii.is.s.u-tokyo.ac.jp/GENIA/' }
		]
	}
	else if (dtp=='20092')
	{
		dp = [                                         
			
			{ y: 2, label: 'opennlp.sourceforge.net' },
			{ y: 1, label: 'http://trove4j.sourceforge.net/' },
			{ y: 1, label: 'http://cloc.sourceforge.net/' },
			{ y: 1, label: 'http://nltk.sourceforge.net/' },
			{ y: 1, label: 'http://wordlist.sourceforge.net/' },
			{ y: 1, label: 'http://senseclusters.sourceforge.net/' },
			{ y: 1, label: 'http://text-similarity.sourceforge.net' },
			{ y: 2, label: 'sourceforge.net' }
		]
	}
	else if (dtp=='20093')
	{
		dp = [                                         
			
			{ y: 2, label: 'ilk.uvt.nl' }
		]
	}
	else if (dtp=='20094')
	{
		dp = [                                         
			
			{ y: 2, label:'www.nist.gov' },
			{ y: 1, label:'http://duc.nist.gov' },
			{ y: 1, label:'http://trec.nist.gov' },
			{ y: 1, label:'http://www-nlpir.nist.gov/works/papers/zp2/psearch' },
			{ y: 1, label:'http://www.itl.nist.gov/div897/sqg/dads/HTML/rootedtree.html' }
		]
	}
	else if (dtp=='20095')
	{
		dp = [                                         
			
			{ y: 2, label: 'research.nii.ac.jp' }
		]
	}
	else if (dtp=='20096')
	{
		dp = [                                         
			
			{ y: 2, label: 'www.cs.ualberta.ca' }
		]
	}
	else if (dtp=='20097')
	{
		dp = [                                         
			
			{ y: 3, label: 'www.d.umn.edu' }
		]
	}
	else if (dtp=='20098')
	{
		dp = [                                         
			
			{ y: 2, label: 'snowball.tartarus.org' }
		]
	}
	else if (dtp=='20099')
	{
		dp = [                                         
			
			{ y: 3, label: 'www.dcs.shef.ac.uk' },
			{ y: 1, label: 'http://nlp.shef.ac.uk/result/software.html' }
		]
	}
	else if (dtp=='200910')
	{
		dp = [                                         
			
			{ y: 2, label: 'lucene.apache.org' }
		]
	}
	else if (dtp=='200911')
	{
		dp = [                                         
			
			{ y: 3, label: 'www.cnts.ua.ac.be' }
		]
	}
	else if (dtp=='200912')
	{
		dp = [                                         
			
			{ y: 3, label: 'fofoca.mitre.org' }
		]
	}
	else if (dtp=='200913')
	{
		dp = [                                         
			
			{ y: 2, label:  'www.experienceproject.com' }
		]
	}
	else if (dtp=='200914')
	{
		dp = [                                         
			
			{ y: 3, label: 'www.senseval.org' }
		]
	}
	else if (dtp=='200915')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://lit.csci.unt.edu/index.php/Downloads' },
			{ y: 2, label: 'www.cse.unt.edu' }
		]
	}
	else if (dtp=='200916')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://wordnetweb.princeton.edu/perl/webwn' },
			{ y: 6, label:  'wordnet.princeton.edu'}
		]
	}
	else if (dtp=='200917')
	{
		dp = [                                         
			
			{ y: 2, label: 'framenet.icsi.berkeley.edu' }
		]
	}
	else if (dtp=='200918')
	{
		dp = [                                         
			
			{ y: 2, label: 'code.google.com' },
			{ y: 1, label: 'http://www.google.com/' }
		]
	}
	else if (dtp=='200919')
	{
		dp = [                                         
			
			{ y: 2, label: 'download.wikimedia.org' }
		]
	}
	else if (dtp=='20110')
	{
		dp = [                                         
			
			{ y: 2, label: 'langtech.jrc.it' },
			{ y: 1, label: 'http://press.jrc.it' },
			{ y: 1, label: 'http://emm-labs.jrc.it/CLEventResources.csv' },
			{ y: 1, label: 'http://wt.jrc.it/lt/Acquis/' }
		]
	}
	else if (dtp=='20111')
	{
		dp = [                                         
			
			{ y: 2, label: 'www.bbn.com' },
			{ y: 2, label: 'conll.bbn.com' }
		]
	}
	else if (dtp=='20112')
	{
		dp = [                                         
			
			{ y: 3, label: 'www.dfki.de' },
			{ y: 4, label: 'dare.dfki.de' },
			{ y: 1, label: 'http://th-ordo.dfki.de/TechWatch_' },
			{ y: 1, label: 'http://sprout.dfki.de/index.html' }
		]
	}
	else if (dtp=='20113')
	{
		dp = [                                         
			
			{ y: 3, label: 'opennlp.sourceforge.net' },
			{ y: 2, label: 'crfpp.sourceforge.net' },
			{ y: 1, label: 'http://mecab.sourceforge.net/' },
			{ y: 1, label: 'http://libots.sourceforge.net/' },
			{ y: 1, label: 'http://tadm.sourceforge.net/' },
			{ y: 1, label: 'http://cwb.sourceforge.net/' },
			{ y: 1, label: 'http://sourceforge.net/projects/masayu-a/' }
		]
	}
	else if (dtp=='20114')
	{
		dp = [                                         
			
			{ y: 5, label: 'nlp.stanford.edu' },
			{ y: 1, label: 'http://cs.stanford.edu/people/nc/schemas' }
		]
	}
	else if (dtp=='20115')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://statmt.org/wmt09/training-monolingual.tar' },
			{ y: 5, label: 'www.statmt.org' }
		]
	}
	else if (dtp=='20116')
	{
		dp = [                                         
			
			{ y: 3, label: 'emm.newsbrief.eu' }
		]
	}
	else if (dtp=='20117')
	{
		dp = [                                         
			
			{ y: 5, label: 'langtech.jrc.ec.europa.eu' }
		]
	}
	else if (dtp=='20118')
	{
		dp = [                                         
			
			{ y: 2, label: 'mallet.cs.umass.edu' }
		]
	}
	else if (dtp=='20119')
	{
		dp = [                                         
			
			{ y: 2, label: 'www.nlpado.de' }
		]
	}
	else if (dtp=='201110')
	{
		dp = [                                         
			
			{ y: 2, label: 'sites.google.com' },
			{ y: 2, label: 'translate.google.com' },
			{ y: 1, label: 'http://code.google.come/p/' },
			{ y: 1, label: 'http://code.google.com/p/berkeleyparser/downloads/list' },
			{ y: 1, label: 'http://adwords.google.com/support/' },
			{ y: 1, label: 'http://www.google.com/cse/' }
		]
	}
	else if (dtp=='201111')
	{
		dp = [                                         
			
			{ y: 2, label: 'www.ims.uni-stuttgart.de' }
		]
	}
	else if (dtp=='201112')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://projects.ldc.upenn.edu/ace/docs/English-' },
			{ y: 2, label: 'www.ldc.upenn.edu'}
		]
	}
	else if (dtp=='201113')
	{
		dp = [                                         
			
			{ y: 2, label: 'www.gutenberg.org' }
		]
	}
	else if (dtp=='201114')
	{
		dp = [                                         
			
			{ y: 2, label: 'un2sg4.unige.ch' }
		]
	}
	else if (dtp=='201115')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://duc.nist.gov/duc2007/quality-questions.txt' },
			{ y: 2, label: 'www.itl.nist.gov' },
			{ y: 3, label: 'www.nist.gov' },
			{ y: 2, label: 'http://www.nist.gov.tac' }
		]
	}
	else if (dtp=='201116')
	{
		dp = [                                         
			
			{ y: 2, label: 'svmlight.joachims.org' }
		]
	}
	else if (dtp=='201117')
	{
		dp = [                                         
			
			{ y: 2, label: 'wordnet.princeton.edu' }
		]
	}
	else if (dtp=='201118')
	{
		dp = [                                         
			
			{ y: 2, label: 'www.speech.sri.com' }
		]
	}
	else if (dtp=='201119')
	{
		dp = [                                         
			
			{ y: 3, label:  'www.nlm.nih.gov' }
		]
	}
	else if (dtp=='20130')
	{
		dp = [                                         
			
			{ y: 2, label:  'nlp.cs.nyu.edu' }
		]
	}
	else if (dtp=='20131')
	{
		dp = [                                         
			
			{ y: 1, label:   'http://www.ldc.upenn.edu/Catalog/' },
			{ y: 1, label:   'http://projects.ldc.upenn.edu/gale/' },
			{ y: 1, label:   'http://www.cis.upenn.edu/' }
		]
	}
	else if (dtp=='20132')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www1.ccls.columbia.edu/MADA' }
		]
	}
	else if (dtp=='20133')
	{
		dp = [                                         
			{ y: 4, label:  'gate.ac.uk' }
		]
	}
	else if (dtp=='20134')
	{
		dp = [                                         
			
			{ y: 3, label:   'nlp.stanford.edu' },
			{ y: 1, label:   'http://www-nlp.stanford.edu/software/lex-parser.shtml' },
			{ y: 1, label:   'http://www.nlp.stanford.edu/software/tagger.shtml' }
		]
	}
	else if (dtp=='20135')
	{
		dp = [                                         
			
			{ y: 3, label:  'translate.google.com' },
			{ y: 3, label:  'code.google.com' },
			{ y: 1, label:  'http://www.google.com/trends/' }
		]
	}
	else if (dtp=='20136')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.cs.waikato.ac.nz/ml/weka' }
		]
	}
	else if (dtp=='20137')
	{
		dp = [                                         
			{ y: 6, label:  'en.wikipedia.org' }
		]
	}
	else if (dtp=='20138')
	{
		dp = [                                         
			
			{ y: 2, label:  'lucene.apache.org' },
			{ y: 1, label:  'http://hadoop.apache.org/' },
			{ y: 1, label:  'http://pig.apache.org/' },
			{ y: 1, label:  'http://svn.apache.org/repos/asf/opennlp/sandbox/' },
			{ y: 1, label:  'http://incubator.apache.org/opennlp/documentatio' }
		]
	}
	else if (dtp=='20139')
	{
		dp = [
			
			{ y: 2, label:  'www.csie.ntu.edu.tw' }
		]
	}
	else if (dtp=='201310')
	{
		dp = [                                         
			
			{ y: 3, label: 'github.com' }
		]
	}
	else if (dtp=='201311')
	{
		dp = [                                         
			{ y: 1, label:  'http://matrix.statmt.org/matrix' },
			{ y: 4, label:  'www.statmt.org' }
		]
	}
	else if (dtp=='201312')
	{
		dp = [                                         
			
			{ y: 2, label:  'www.natcorp.ox.ac.uk' }
		]
	}
	else if (dtp=='201313')
	{
		dp = [                                         
			{ y: 1, label:  'http://nlp.ipipan.waw.pl/ppjp/' },
			{ y: 2, label:  'zil.ipipan.waw.pl' }
		]
	}
	else if (dtp=='201314')
	{
		dp = [                                         
			
			
			{ y: 3, label:  'www.w3.org'}
		]
	}
	else if (dtp=='201315')
	{
		dp = [                                         
			
			{ y: 3, label:   'svmlight.joachims.org' }
		]
	}
	else if (dtp=='201316')
	{
		dp = [                                         
			{ y: 2, label: 'www.nlp.pwr.wroc.pl' },
			{ y: 4, label: 'nlp.pwr.wroc.pl' }
		]
	}
	else if (dtp=='201317')
	{
		dp = [                                         
			{ y: 8, label:  'www.ir-facility.org' }
		]
	}
	else if (dtp=='201318')
	{
		dp = [                                         
			
			{ y: 2, label:  'wndomains.fbk.eu' }
		]
	}
	else if (dtp=='201319')
	{
		dp = [                                         
			
			{ y: 2, label: 'www.bultreebank.org' }
		]
	}
	else if (dtp=='20150')
	{
		dp = [                                         
			
			
			{ y: 3, label:  'svn.code.sf.net'}
		]
	}
	else if (dtp=='20151')
	{
		dp = [                                         
			
			{ y: 4, label: 'doi.acm.org' }
		]
	}
	else if (dtp=='20152')
	{
		dp = [                                         
			
			{ y: 3, label:  'sourceforge.net' },
			{ y: 1, label:  'http://crfpp.sourceforge.net/' }
		]
	}
	else if (dtp=='20153')
	{
		dp = [                                         
			
			
			{ y: 9, label:  'github.com' }
		]
	}
	else if (dtp=='20154')
	{
		dp = [                                         
			
			{ y: 3, label:  'www.itl.nist.gov' }
		]
	}
	else if (dtp=='20155')
	{
		dp = [                                         
			
			{ y: 3, label:  'www.ldc.upenn.edu' },
			{ y: 1, label:  'http://www.cis.upenn.edu/~xwe/semeval2015pit/' },
			{ y: 2, label:  'catalog.ldc.upenn.edu' },
		]
	}
	else if (dtp=='20156')
	{
		dp = [                                         
			
			{ y: 4, label:  'cs.nyu.edu' },
			{ y: 2, label:  'nlp.cs.nyu.edu' }
		]
	}
	else if (dtp=='20157')
	{
		dp = [                                         
			
			
			{ y: 2, label:  'en.wikipedia.org' },
			{ y: 2, label:  'bg.wikipedia.org' },
			{ y: 2, label:  'www.wikipedia.org' },
			{ y: 1, label:  'https://simple.wikipedia.org/wiki/Main' },
			{ y: 1, label:  'http://ar.wikipedia.org/wiki/:' }
		]
	}
	else if (dtp=='20158')
	{
		dp = [                                         
			{ y: 1, label:  'https://rdflib.github.io/sparqlwrapper/' },
			{ y: 2, label:  'hltfbk.github.io' },
			{ y: 1, label:  'http://bkapukaranov.github.io/' },
			{ y: 1, label:  'http://proycon.github.io/' }
		]
	}
	else if (dtp=='20159')
	{
		dp = [                                         
			
			{ y: 2, label:   'pdev.org.uk' }
		]
	}
	else if (dtp=='201510')
	{
		dp = [                                         
			{ y: 3, label:    'crfpp.googlecode.com' },
			{ y: 1, label:    'http://mecab.googlecode.com/svn/trunk/mecab/doc/index.html' }
		]
	}
	else if (dtp=='201511')
	{
		dp = [                                         
			
			{ y: 9, label:  'code.google.com' },
			{ y: 1, label:  'http://translate.google.com/translate_t' }
		]
	}
	else if (dtp=='201512')
	{
		dp = [                                         
			
			{ y: 3, label:  'nlp.pwr.wroc.pl' }
		]
	}
	else if (dtp=='201513')
	{
		dp = [                                         
			
			{ y: 2, label:  'cran.r-project.org' }
		]
	}
	else if (dtp=='201514')
	{
		dp = [                                         
			
			{ y: 2, label:  'www.cs.utexas.edu' }
		]
	}
	else if (dtp=='201515')
	{
		dp = [                                         
			{ y: 2, label:   'www.excitement-project.eu' }
		]
	}
	else if (dtp=='201516')
	{
		dp = [                                         
			
			{ y: 3, label:  'compling.hss.ntu.edu.sg' }
		]
	}
	else if (dtp=='201517')
	{
		dp = [                                         
			
			{ y: 3, label:  'nlp.stanford.edu' }
		]
	}
	else if (dtp=='201518')
	{
		dp = [                                         
			{ y: 4, label:   'www.statmt.org' }
		]
	}
	else if (dtp=='201519')
	{
		dp = [                                         
			
			{ y: 2, label:  'itunes.apple.com' }
		]
	}
	else if (dtp=='20170')
	{
		dp = [                                         
			
			{ y: 243, label:  'doi.org' },
			{ y: 9, label:   'dx.doi.org' }
		]
	}
	else if (dtp=='20171')
	{
		dp = [                                         
			
			{ y: 3, label:  'www.wiktionary.org' }
		]
	}
	else if (dtp=='20172')
	{
		dp = [                                         
			
			{ y: 6, label:  'code.google.com' },
			{ y: 3, label:  'sites.google.com' },
			{ y: 1, label:  'http://www.google.com/patents/US8832205' },
			{ y: 1, label:  'https://news.google.com/' }
		]
	}
	else if (dtp=='20173')
	{
		dp = [                                         
			
			{ y: 46, label:  'github.com' }
		]
	}else if (dtp=='20174')
	{
		dp = [                                         
			
			{ y: 3, label:  'www.statmt.org' }
		]
	}
	else if (dtp=='20175')
	{
		dp = [                                         
			
			{ y: 5, label:  'alt.qcri.org' }
		]
	}
	else if (dtp=='20176')
	{
		dp = [                                         
			
			{ y: 4, label:  'en.wikipedia.org' }
		]
	}
	else if (dtp=='20177')
	{
		dp = [                                         
			
			{ y: 25, label:   'aclweb.org' },
			{ y: 66, label:   'www.aclweb.org' },
			{ y: 1, label:   'http://anthology.aclweb.org/P16-2047' },
			{ y: 1, label:   'http://www.anthology.aclweb.org/P/P14/' }
		]
	}
	else if (dtp=='20178')
	{
		dp = [                                         
			
			{ y: 2, label:  'sourceforge.net' },
			{ y: 2, label:  'jgrapht.sourceforge.net' },
			{ y: 1, label:  'http://gibbslda.sourceforge.net/' }
		]
	}
	else if (dtp=='20179')
	{
		dp = [                                         
			
			{ y: 3, label:  'universaldependencies.org' }
		]
	}
	else if (dtp=='201710')
	{
		dp = [                                         
			
			{ y: 48, label:  'dl.acm.org' }
		]
	}
	else if (dtp=='201711')
	{
		dp = [                                         
			
			{ y: 15, label:   'arxiv.org' }
		]
	}
	else if (dtp=='201712')
	{
		dp = [                                         
			
			{ y: 7, label:  'goo.gl' }
		]
	}
	else if (dtp=='201713')
	{
		dp = [                                         
			
			{ y: 4, label:  'www.qatarliving.com' }
		]
	}
	else if (dtp=='201714')
	{
		dp = [                                         
			
			{ y: 4, label:  'papers.nips.cc' }
		]
	}
	else if (dtp=='201715')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://hackatal.github.io/2016/' },
			{ y: 3, label:  'taku910.github.io' },
			{ y: 3, label:  'stanfordnlp.github.io' },
			{ y: 1, label:  'https://elki-project.github.io/' }
		]
	}
	else if (dtp=='201716')
	{
		dp = [                                         
			
			{ y: 4, label:   'www.crowdflower.com' }
		]
	}
	else if (dtp=='201717')
	{
		dp = [                                         
			
			{ y: 6, label:  'clarin-pl.eu' }
		]
	}
	else if (dtp=='201718')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://langlotzlab.stanford.edu/' },
			{ y: 5, label:  'nlp.stanford.edu' },
			{ y: 1, label:  'http://cs229.stanford.edu/proj2010/HsuSeeWu-' }
		]
	}
	else if (dtp=='201719')
	{
		dp = [                                         
			
			{ y: 4, label:  'ufal.mff.cuni.cz' },
			{ y: 3, label:  'lindat.mff.cuni.cz' }
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