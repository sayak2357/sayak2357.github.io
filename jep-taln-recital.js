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
		name: "JEP-TALN-RECITAL: Long Papers",
		dataPoints: [
		
		
				{ y: 185, x: new Date(2012,0) },
				{ y: 36, x: new Date(2013,0) },
				{ y: 33, x: new Date(2014,0) }
				
				
		]
		},
		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Short Papers",
			color: "#e3f702",
			dataPoints: [
			
			
			
				{ y: 2, x: new Date(2012,0) },
				{ y: 35, x: new Date(2013,0) },
				{ y: 36, x: new Date(2014,0) }
			]
		},
		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Demo Paper",
			color: "#f70202",
			dataPoints: [
				{ y: 10, x: new Date(2012,0) },
				{ y: 13, x: new Date(2013,0) },
				{ y: 14, x: new Date(2014,0) }
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
		name: "JEP-TALN-RECITAL: Old Authors",
		dataPoints: [
		
				{ y: 0.0, x: new Date(2012,0) },
				{ y: 0.2774869109947644, x: new Date(2013,0) },
				{ y: 0.36180904522613067, x: new Date(2014,0) }
				
				
		]
		},
		
		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "New Authors",
			color: "#f70202",
			dataPoints: [
			
			
			
				{ y: 1.0, x: new Date(2012,0) },
				{ y: 0.7225130890052356, x: new Date(2013,0) },
				{ y: 0.6381909547738693, x: new Date(2014,0) }
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
		name: "JEP-TALN-RECITAL: Avg. number of Papers per Author",
		dataPoints: [
			
			
			
			{ y:0.3456140350877193, x: new Date(2012,0) },
			{ y:0.37668161434977576, x: new Date(2013,0) },
			{ y:0.3593073593073593, x: new Date(2014,0) }
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
		name: "JEP-TALN-RECITAL: Avg. number of Authors per Paper per Year",
		dataPoints: [
			
			
			
			{ y:2.8934010152284264, x: new Date(2012,0) },
			{ y:2.6547619047619047, x: new Date(2013,0) },
			{ y:2.783132530120482, x: new Date(2014,0) }
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
		name: "JEP-TALN-RECITAL: Long Papers",
		dataPoints: [
			
			
			
			{ y:14.016216216216216, x: new Date(2012,0) },
			{ y:17.25, x: new Date(2013,0) },
			{ y:28.78787878787879, x: new Date(2014,0) }
		]
		},


		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Short Papers",
			color: "#C00C0C",
			dataPoints: [
			
			
			
			
			
			{ y:0.0, x: new Date(2012,0) },
			{ y:10.885714285714286, x: new Date(2013,0) },
			{ y:19.72222222222222, x: new Date(2014,0) }
			
			
			
			
			]
		},
		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Demo Papers",
			color: "#309000",
			dataPoints: [
			
			
			
			
			
			{ y:2.4, x: new Date(2012,0) },
			{ y:0.0, x: new Date(2013,0) },
			{ y:4.428571428571429, x: new Date(2014,0) }
			
			
			
			
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
		name: "JEP-TALN-RECITAL: URLs per Paper 2012-2014",
		dataPoints: [
			
			
			
			{ y:1.5583756345177664, x: new Date(2012,0) },
			{ y:1.7380952380952381, x: new Date(2013,0) },
			{ y:2.891566265060241, x: new Date(2014,0) }
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
		name: "JEP-TALN-RECITAL : Avg. number of URLs in footnote per Paper per Year",
		dataPoints: [
			
			
			
			{ y:0.1065989847715736, x: new Date(2012,0) },
			{ y:0.047619047619047616, x: new Date(2013,0) },
			{ y:0.18072289156626506, x: new Date(2014,0) }
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
		name: "JEP-TALN-RECITAL : Avg. number of Tables per Paper per Year",
		dataPoints: [
			
			
			
			{ y:1.4111675126903553, x: new Date(2012,0) },
			{ y:1.880952380952381, x: new Date(2013,0) },
			{ y:2.253012048192771, x: new Date(2014,0) }
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
		name: "JEP-TALN-RECITAL : Avg. number of Figures per Paper per Year",
		dataPoints: [
			
			
			
			{ y:2.299492385786802, x: new Date(2012,0) },
			{ y:1.4404761904761905, x: new Date(2013,0) },
			{ y:1.9879518072289157, x: new Date(2014,0) }
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
		name: "JEP-TALN-RECITAL : Most Popular primary URL domains & their Frequencies",
		legendText: "",
		dataPoints: [
			{ y:6,  label:'github.com'  },
			{ y:6,  label:'aclweb.org'  },
			{ y:13,  label:'www.statmt.org'  },
			{ y:10,  label:'code.google.com'  },
			{ y:10,  label:'alpage.inria.fr'  },
			{ y:9,  label:'www.jeuxdemots.org'  },
			{ y:8,  label:'www.ims.uni-stuttgart.de'  },
			{ y:8,  label:'hal.inria.fr'  },
			{ y:7,  label:'www.llf.cnrs.fr'  },
			{ y:6,  label:'redac.univ-tlse2.fr'  },
			{ y:6,  label:'translate.google.com'  },
			{ y:6,  label:'nlp.stanford.edu'  },
			{ y:6,  label:'dumps.wikimedia.org'  },
			{ y:5,  label:'catalog.elra.info'  },
			{ y:5,  label:'www.quaero.org'  },
			{ y:5,  label:'www.nlm.nih.gov'  },
			{ y:5,  label:'search.cpan.org'  },
			{ y:4,  label:'www.praat.org'  },
			{ y:4,  label:'www.atala.org'  },
			{ y:4,  label:'wapiti.limsi.fr'  }
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
		name: "JEP-TALN-RECITAL : Top Unique GitHub Pages",
		legendText: "",
		dataPoints: [
			{ y: 1, label: 'jhlau/' },
			{ y: 2, label: 'boudinfl/kea' },
			{ y: 1, label: 'cental/patternsim' },
			{ y: 1, label: 'jfaucon/corpus-LING_GEOP' },
			{ y: 1, label: 'jhlau/hdp-wsi' }
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
		name: "JEP-TALN-RECITAL : Top University Pages",
		legendText: "",
		dataPoints: [
			{ y: 2, label:'iut 3' },
			{ y: 1, label:'GreEn-ER' },
			{ y: 3, label:'Université Paris-Sud' },
			{ y: 2, label:'École Nationale Supérieure des Industries Chimiques' },
			{ y: 2, label:'Université de Montréal' },
			{ y: 1, label:'Université de Bordeaux - Collège DSPEG' },
			{ y: 1, label:'Hochschule für Technik' },
			{ y: 1, label:'Penn Museum' },
			{ y: 1, label:'Universität der Vereinten Nationen' },
			{ y: 1, label:'Université - Ribay' },
			{ y: 1, label:'Restaurant universitaire Tohannic' },
			{ y: 1, label:'Max Planck Institute for Psycholinguistics' },
			{ y: 1, label:'Московский государственный технический университет им. Н. Э. Баумана' },
			{ y: 1, label:'Uppsala universitets tentamenslokal Fyrislundsgatan' },
			{ y: 1, label:'Padua' },
			{ y: 1, label:'Université François-Rabelais de Tours' },
			{ y: 1, label:'Gières Gare Univ' }
			
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
		
		
		
		if(dt==2012)
		{
			dp= [  
			{ y:2, label: 'anl.gov' },
			{ y:3, label: 'nist.gov' },
			{ y:5, label: 'cnrs.fr' },
			{ y:2, label: 'gnu.org' },
			{ y:2, label: 'inpg.fr' },
			{ y:4, label: 'praat.org' },
			{ y:10, label: 'google.com' },
			{ y:6, label: 'uni-stuttgart.de' },
			{ y:3, label: 'gc.ca' },
			{ y:5, label: 'statmt.org' },
			{ y:5, label: 'inria.fr' },
			{ y:6, label: 'upenn.edu' },
			{ y:3, label: 'limsi.fr' },
			{ y:2, label: 'projet-pfc.net' },
			{ y:3, label: 'quaero.org' },
			{ y:2, label: 'philosophie.uni-stuttgart.de' },
			{ y:2, label: 'personnels.univ-paris3.fr' },
			{ y:2, label: 'microsoft.com' },
			{ y:2, label: 'yahoo.com' },
			{ y:3, label: 'stanford.edu' }
			
		]
		}
		else if(dt==2013)
		{
			dp= [  
			{ y:2, label: 'cnrs.fr' },
			{ y:5, label: 'inria.fr' },
			{ y:4, label: 'univ-mlv.fr' },
			{ y:1, label: 'nyu.edu' },
			{ y:2, label: 'github.com' },
			{ y:3, label: 'elra.info' },
			{ y:2, label: 'duden.de' },
			{ y:2, label: 'nih.gov' },
			{ y:4, label: 'univ-nantes.fr' },
			{ y:5, label: 'google.com' },
			{ y:2, label: 'quaero.org' },
			{ y:2, label: 'wikipedia.org' },
			{ y:2, label: 'apache.org' },
			{ y:1, label: 'archive.org' },
			{ y:2, label: 'upenn.edu' },
			{ y:3, label: 'cpan.org' },
			{ y:4, label: 'uni-stuttgart.de' },
			{ y:2, label: 'statmt.org' },
			{ y:2, label: 'wikimedia.org' },
			{ y:3, label: 'loria.fr' }
			
		]
		}
		else if(dt==2014)
		{
			dp= [
			{ y:3, label: 'nih.gov' },
			{ y:2, label: 'cnrtl.fr' },
			{ y:2, label: 'lexique.org' },
			{ y:4, label: 'atilf.fr' },
			{ y:14, label: 'inria.fr' },
			{ y:4, label: 'inist.fr' },
			{ y:5, label: 'cnrs.fr' },
			{ y:2, label: 'metaoptimize.com' },
			{ y:6, label: 'google.com' },
			{ y:6, label: 'wiktionary.org' },
			{ y:2, label: 'kyloo.net' },
			{ y:2, label: 'iptc.org' },
			{ y:5, label: 'univ-tlse2.fr' },
			{ y:2, label: 'frantext.fr' },
			{ y:9, label: 'aclweb.org' },
			{ y:7, label: 'jeuxdemots.org' },
			{ y:4, label: 'wikimedia.org' },
			{ y:8, label: 'statmt.org' },
			{ y:4, label: 'github.com' },
			{ y:2, label: 'nyu.edu' }
			
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
	
	
	
	if (dtp=='20120')
	{
		dp = [                                         
			
			{ y: 2, label: 'www.mcs.anl.gov' }
		]
	}
	else if (dtp=='20121')
	{
		dp = [                                         
			
			{ y: 2, label:  'www.itl.nist.gov' },
			{ y: 1, label:  'http://trec.nist.gov/data/qamain.html' }
		]
	}
	else if (dtp=='20122')
	{
		dp = [                                         
			{ y: 3, label:  'www.llf.cnrs.fr'},
			{ y: 1, label:  'http://liris.cnrs.fr/cirdo/'},
			{ y: 1, label:  'http://www.lapsyd.ddl.ish-lyon.cnrs.fr/'}
		]
	}
	else if (dtp=='20123')
	{
		dp = [                                         
			
			{ y: 2, label:  'www.gnu.org' }
		]
	}
	else if (dtp=='20124')
	{
		dp = [                                         
			
			{ y: 2, label:  'www.gipsa-lab.inpg.fr' }
		]
	}
	else if (dtp=='20125')
	{
		dp = [                                         
			
			{ y: 4, label:  'www.praat.org' }
		]
	}
	else if (dtp=='20126')
	{
		dp = [                                         
			{ y: 3, label:  'code.google.com' },
			{ y: 1, label:  'http://code.google.come/' },
			{ y: 4, label:  'translate.google.com' },
			{ y: 1, label:  'http://news.google.com' },
			{ y: 1, label:  'http://picasaweb.google.com/lh/photo/Pp3EyPQcQH1DaduXJK_9Mw' }
		]
	}
	else if (dtp=='20127')
	{
		dp = [                                         
			
			{ y: 4, label:  'www.ims.uni-stuttgart.de' },
			{ y: 2, label:  'margaux.philosophie.uni-stuttgart.de' }
		]
	}
	else if (dtp=='20128')
	{
		dp = [                                         
			
			{ y: 2, label:  'www.hc-sc.gc.ca' },
			{ y: 1, label:  'http://www.afghanistan.gc.ca/canada-afghanistan' }
		]
	}
	else if (dtp=='20129')
	{
		dp = [                                         
			
			{ y: 2, label:  'statmt.org' },
			{ y: 3, label:  'www.statmt.org' }
		]
	}
	else if (dtp=='201210')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://bonzaiboost.gforge.inria.fr/' },
			{ y: 3, label:  'alpage.inria.fr' },
			{ y: 1, label:  'https://gforge.inria.fr/projects/lingwb' }
		]
	}
	else if (dtp=='201211')
	{
		dp = [                                         
			
			{ y: 2, label:   'www.cis.upenn.edu' },
			{ y: 3, label:   'www.ldc.upenn.edu' },
			{ y: 1, label:   'http://www.ircs.upenn.edu/arabic/' }
		]
	}
	else if (dtp=='201212')
	{
		dp = [                                         
			
			{ y: 2, label:  'wapiti.limsi.fr' },
			{ y: 1, label:  'http://perso.limsi.fr/filhol/zebedee' }
		]
	}
	else if (dtp=='201213')
	{
		dp = [                                         
			
			{ y: 2, label:  'www.projet-pfc.net' }
		]
	}
	else if (dtp=='201214')
	{
		dp = [                                         
			
			{ y: 3, label:  'www.quaero.org' }
		]
	}
	else if (dtp=='201215')
	{
		dp = [                                         
			
			{ y: 2, label:  'margaux.philosophie.uni-stuttgart.de' }
		]
	}
	else if (dtp=='201216')
	{
		dp = [                                         
			
			{ y: 2, label: 'www.personnels.univ-paris3.fr' }
		]
	}
	else if (dtp=='201217')
	{
		dp = [                                         
			
			{ y: 2, label:  'research.microsoft.com' }
		]
	}
	else if (dtp=='201218')
	{
		dp = [                                         
			
			{ y: 2, label:  'developer.yahoo.com' }
		]
	}
	else if (dtp=='2012019')
	{
		dp = [                                         
			
			{ y: 3, label:  'nlp.stanford.edu' }
		]
	}
	else if (dtp=='20130')
	{
		dp = [                                         
			
			{ y: 2, label:  'www.llf.cnrs.fr' }
		]
	}
	else if (dtp=='20131')
	{
		dp = [                                         
			
			{ y: 2, label:   'www.rocq.inria.fr' },
			{ y: 2, label:   'alpage.inria.fr' },
			{ y: 1, label:   'http://hal.inria.fr/hal-00650644' }
		]
	}
	else if (dtp=='20132')
	{
		dp = [                                         
			{ y: 2, label:  'www-igm.univ-mlv.fr' },
			{ y: 2, label:  'infolingu.univ-mlv.fr' }
		]
	}
	else if (dtp=='20133')
	{
		dp = [                                         
			{ y: 1, label:  'http://nlp.nyu.edu/oak' }
		]
	}
	else if (dtp=='20134')
	{
		dp = [                                         
			
			{ y: 2, label:   'github.com' }
		]
	}
	else if (dtp=='20135')
	{
		dp = [                                         
			
			{ y: 3, label:  'catalog.elra.info' }
		]
	}
	else if (dtp=='20136')
	{
		dp = [                                         
			{ y: 2, label:  'www.duden.de' }
		]
	}
	else if (dtp=='20137')
	{
		dp = [                                         
			{ y: 2, label:  'www.nlm.nih.gov' }
		]
	}
	else if (dtp=='20138')
	{
		dp = [                                         
			
			{ y: 3, label:  'www.lina.univ-nantes.fr' },
			{ y: 1, label:  'http://taln.lina.univ-nantes.fr/apopsis/' }
		]
	}
	else if (dtp=='20139')
	{
		dp = [
			{ y: 2, label:  'code.google.com' },
			{ y: 1, label:  'https://sites.google.com/site/' },
			{ y: 1, label:  'http://scholar.google.com' },
			{ y: 1, label:  'http://translate.google.com/\\#es/fr/' }
		]
	}
	else if (dtp=='201310')
	{
		dp = [                                         
			
			{ y: 2, label: 'www.quaero.org' }
		]
	}
	else if (dtp=='201311')
	{
		dp = [                                         
			{ y: 1, label:  'http://en.wikipedia.org/wiki/Wikipedia:Manual_of_Style' },
			{ y: 1, label:  'http://fr.wikipedia.org/wiki/Six_Degrees_of_Kevin_Bacon' }
		]
	}
	else if (dtp=='201312')
	{
		dp = [                                         
			{ y: 1, label:  'http://opennlp.apache.org/' },
			{ y: 1, label:  'http://pdfbox.apache.org/' }
		]
	}
	else if (dtp=='201313')
	{
		dp = [                                         
			{ y: 1, label:  'http://web.archive.org/web/20081215041844/http://freebank.loria.fr/' }
		]
	}
	else if (dtp=='201314')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.ldc.upenn.edu/Catalog/catalogEntry.jsp?catalogId=LDC99T42' },
			{ y: 1, label:  'http://www.cis.upenn.edu/~treebank/tokenization.html'}
		]
	}
	else if (dtp=='201315')
	{
		dp = [                                         
			
			{ y: 3, label:  'search.cpan.org' }
		]
	}
	else if (dtp=='201316')
	{
		dp = [                                         
			{ y: 4, label: 'www.ims.uni-stuttgart.de' }
		]
	}
	else if (dtp=='201317')
	{
		dp = [                                         
			{ y: 2, label:  'www.statmt.org' }
		]
	}
	else if (dtp=='201318')
	{
		dp = [                                         
			
			{ y: 2, label:  'dumps.wikimedia.org' }
		]
	}
	else if (dtp=='201319')
	{
		dp = [                                         
			{ y: 1, label: 'http://leopar.loria.fr' },
			{ y: 2, label: 'wikilligramme.loria.fr' }
		]
	}
	else if (dtp=='20140')
	{
		dp = [                                         
			
			{ y: 2, label:  'www.nlm.nih.gov'},
			{ y: 1, label:  'http://www.ncbi.nlm.nih.gov/pubmed/15360870?dopt=Abstract'}
		]
	}
	else if (dtp=='20141')
	{
		dp = [                                         
			
			{ y: 2, label: 'www.cnrtl.fr' }
		]
	}
	else if (dtp=='20142')
	{
		dp = [                                         
			
			{ y: 2, label:  'www.lexique.org' }
		]
	}
	else if (dtp=='20143')
	{
		dp = [                                         
			
			{ y: 3, label:  'www.atilf.fr' },
			{ y: 1, label:  'https://apps.atilf.fr/smarties/' }
		]
	}
	else if (dtp=='20144')
	{
		dp = [                                         
			{ y: 5, label:  'alpage.inria.fr' },
			{ y: 7, label:  'hal.inria.fr' },
			{ y: 2, label:  'gforge.inria.fr' }
		]
	}
	else if (dtp=='20145')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://www.inist.fr' },
			{ y: 3, label:  'cat.inist.fr' }
		]
	}
	else if (dtp=='20146')
	{
		dp = [                                         
			
			{ y: 2, label:  'www.llf.cnrs.fr' },
			{ y: 3, label:  'www.lattice.cnrs.fr' }
		]
	}
	else if (dtp=='20147')
	{
		dp = [                                         
			
			
			{ y: 2, label:  'metaoptimize.com' }
		]
	}
	else if (dtp=='20148')
	{
		dp = [                                         
			{ y: 5, label:  'code.google.com' },
			{ y: 1, label:  'http://translate.google.com/' }
		]
	}
	else if (dtp=='20149')
	{
		dp = [                                         
			{ y: 3, label:  'www.wiktionary.org' },
			{ y: 3, label:  'fr.wiktionary.org' }
		]
	}
	else if (dtp=='201410')
	{
		dp = [                                         
			{ y: 2, label:    'www.kyloo.net' }
		]
	}
	else if (dtp=='201411')
	{
		dp = [                                         
			
			{ y: 2, label:  'www.iptc.org' }
		]
	}
	else if (dtp=='201412')
	{
		dp = [                                         
			
			{ y: 5, label:  'redac.univ-tlse2.fr' }
		]
	}
	else if (dtp=='201413')
	{
		dp = [                                         
			
			{ y: 2, label:  'www.frantext.fr' }
		]
	}
	else if (dtp=='201414')
	{
		dp = [                                         
			{ y: 5, label:  'aclweb.org' },
			{ y: 4, label:  'www.aclweb.org' }
		]
	}
	else if (dtp=='201415')
	{
		dp = [                                         
			{ y: 7, label:   'www.jeuxdemots.org' }
		]
	}
	else if (dtp=='201416')
	{
		dp = [                                         
			{ y: 3, label:  'dumps.wikimedia.org' },
			{ y: 1, label:  'https://meta.wikimedia.org/wiki/List_of_Wikipedias' }
		]
	}
	else if (dtp=='201417')
	{
		dp = [                                         
			
			{ y: 8, label:  'www.statmt.org' }
		]
	}
	else if (dtp=='201418')
	{
		dp = [                                         
			{ y: 4, label:   'github.com' }
		]
	}
	else if (dtp=='201419')
	{
		dp = [                                         
			
			{ y: 2, label:  'nlp.cs.nyu.edu' }
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