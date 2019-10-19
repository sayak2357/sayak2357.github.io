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
		
		
			{ y: 1, x: new Date(1998,0) },
			{ y: 0, x: new Date(2001,0) },
			{ y: 10, x: new Date(2004,0) },
			{ y: 3, x: new Date(2007,0) },
			{ y: 3, x: new Date(2010,0) },
			{ y: 35, x: new Date(2012,0) },
			{ y: 43, x: new Date(2013,0) },
			{ y: 28, x: new Date(2014,0) },
			{ y: 49, x: new Date(2015,0) },
			{ y: 49, x: new Date(2016,0) },
			{ y: 38, x: new Date(2017,0) },
			{ y: 48, x: new Date(2018,0) },
			{ y: 43, x: new Date(2019,0) }
				
				
		]
		},
		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Short Papers",
			color: "#e3f702",
			dataPoints: [
			
			
			
			{ y: 0, x: new Date(1998,0) },
			{ y: 40, x: new Date(2001,0) },
			{ y: 54, x: new Date(2004,0) },
			{ y: 107, x: new Date(2007,0) },
			{ y: 97, x: new Date(2010,0) },
			{ y: 74, x: new Date(2012,0) },
			{ y: 115, x: new Date(2013,0) },
			{ y: 143, x: new Date(2014,0) },
			{ y: 149, x: new Date(2015,0) },
			{ y: 190, x: new Date(2016,0) },
			{ y: 173, x: new Date(2017,0) },
			{ y: 177, x: new Date(2018,0) },
			{ y: 221, x: new Date(2019,0) }
			]
		},

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
		
		
				{ y: 0.0, x: new Date(1998,0) },
				{ y: 0.015384615384615385, x: new Date(2001,0) },
				{ y: 0.1565217391304348, x: new Date(2004,0) },
				{ y: 0.16374269005847952, x: new Date(2007,0) },
				{ y: 0.24157303370786518, x: new Date(2010,0) },
				{ y: 0.21142857142857144, x: new Date(2012,0) },
				{ y: 0.22879177377892032, x: new Date(2013,0) },
				{ y: 0.27882599580712786, x: new Date(2014,0) },
				{ y: 0.3309982486865149, x: new Date(2015,0) },
				{ y: 0.41237113402061853, x: new Date(2016,0) },
				{ y: 0.23096774193548386, x: new Date(2017,0) },
				{ y: 0.3213166144200627, x: new Date(2018,0) },
				{ y: 0.20263424518743667, x: new Date(2019,0) }
				
				
		]
		},
		
		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "New Authors",
			color: "#f70202",
			dataPoints: [
			
			
			
				{ y: 1.0, x: new Date(1998,0) },
				{ y: 0.9846153846153847, x: new Date(2001,0) },
				{ y: 0.8434782608695652, x: new Date(2004,0) },
				{ y: 0.8362573099415205, x: new Date(2007,0) },
				{ y: 0.7584269662921348, x: new Date(2010,0) },
				{ y: 0.7885714285714286, x: new Date(2012,0) },
				{ y: 0.7712082262210797, x: new Date(2013,0) },
				{ y: 0.7211740041928721, x: new Date(2014,0) },
				{ y: 0.6690017513134852, x: new Date(2015,0) },
				{ y: 0.5876288659793815, x: new Date(2016,0) },
				{ y: 0.7690322580645161, x: new Date(2017,0) },
				{ y: 0.6786833855799373, x: new Date(2018,0) },
				{ y: 0.7973657548125633, x: new Date(2019,0) }
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
			
			
			
			{ y:0.5, x: new Date(1998,0) },
			{ y:0.5882352941176471, x: new Date(2001,0) },
			{ y:0.44755244755244755, x: new Date(2004,0) },
			{ y:0.5583756345177665, x: new Date(2007,0) },
			{ y:0.5025125628140703, x: new Date(2010,0) },
			{ y:0.5117370892018779, x: new Date(2012,0) },
			{ y:0.3284823284823285, x: new Date(2013,0) },
			{ y:0.2943201376936317, x: new Date(2014,0) },
			{ y:0.28989751098096633, x: new Date(2015,0) },
			{ y:0.4185639229422067, x: new Date(2016,0) },
			{ y:0.2336655592469546, x: new Date(2017,0) },
			{ y:0.2886334610472541, x: new Date(2018,0) },
			{ y:0.22837370242214533, x: new Date(2019,0) }
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
			
			
			
			{ y:2.0, x: new Date(1998,0) },
			{ y:1.7, x: new Date(2001,0) },
			{ y:2.234375, x: new Date(2004,0) },
			{ y:1.790909090909091, x: new Date(2007,0) },
			{ y:1.99, x: new Date(2010,0) },
			{ y:1.9541284403669725, x: new Date(2012,0) },
			{ y:3.0443037974683542, x: new Date(2013,0) },
			{ y:3.3976608187134505, x: new Date(2014,0) },
			{ y:3.4494949494949494, x: new Date(2015,0) },
			{ y:2.3891213389121337, x: new Date(2016,0) },
			{ y:4.279620853080568, x: new Date(2017,0) },
			{ y:3.4646017699115044, x: new Date(2018,0) },
			{ y:4.378787878787879, x: new Date(2019,0) }
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
			
			
			
			{ y:0, x: new Date(1998,0) },
			{ y:0, x: new Date(2001,0) },
			{ y:57.1, x: new Date(2004,0) },
			{ y:15.0, x: new Date(2007,0) },
			{ y:16.333333333333332, x: new Date(2010,0) },
			{ y:23.914285714285715, x: new Date(2012,0) },
			{ y:28.906976744186046, x: new Date(2013,0) },
			{ y:28.142857142857142, x: new Date(2014,0) },
			{ y:27.489795918367346, x: new Date(2015,0) },
			{ y:39.83673469387755, x: new Date(2016,0) },
			{ y:37.81578947368421, x: new Date(2017,0) },
			{ y:35.979166666666664, x: new Date(2018,0) },
			{ y:44.0, x: new Date(2019,0) }
		]
		},


		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Short Papers",
			color: "#C00C0C",
			dataPoints: [
			
			
			
			
			
			{ y:0, x: new Date(1998,0) },
			{ y:4.7, x: new Date(2001,0) },
			{ y:14.055555555555555, x: new Date(2004,0) },
			{ y:8.906542056074766, x: new Date(2007,0) },
			{ y:9.618556701030927, x: new Date(2010,0) },
			{ y:16.39189189189189, x: new Date(2012,0) },
			{ y:15.860869565217392, x: new Date(2013,0) },
			{ y:14.643356643356643, x: new Date(2014,0) },
			{ y:16.348993288590606, x: new Date(2015,0) },
			{ y:16.457894736842107, x: new Date(2016,0) },
			{ y:17.53179190751445, x: new Date(2017,0) },
			{ y:18.741573033707866, x: new Date(2018,0) },
			{ y:44.0, x: new Date(2019,0) }
			
			
			
			
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
		name: "SEMEVAL URLs per Paper 199682018",
		dataPoints: [
			
			
			
			{ y:0.0, x: new Date(1998,0) },
			{ y:0.9, x: new Date(2001,0) },
			{ y:0.546875, x: new Date(2004,0) },
			{ y:2.118181818181818, x: new Date(2007,0) },
			{ y:2.59, x: new Date(2010,0) },
			{ y:2.761467889908257, x: new Date(2012,0) },
			{ y:3.3860759493670884, x: new Date(2013,0) },
			{ y:4.076023391812866, x: new Date(2014,0) },
			{ y:3.2323232323232323, x: new Date(2015,0) },
			{ y:3.9456066945606696, x: new Date(2016,0) },
			{ y:7.672985781990521, x: new Date(2017,0) },
			{ y:3.8584070796460175, x: new Date(2018,0) },
			{ y:3.5303030303030303, x: new Date(2019,0) }
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
		name: "SEMEVAL : Avg. number of URLs in footnote per Paper per Year",
		dataPoints: [
			
			
			
			{ y:0.0, x: new Date(1998,0) },
			{ y:0.125, x: new Date(2001,0) },
			{ y:0.078125, x: new Date(2004,0) },
			{ y:0.7818181818181819, x: new Date(2007,0) },
			{ y:1.01, x: new Date(2010,0) },
			{ y:1.1376146788990826, x: new Date(2012,0) },
			{ y:1.5126582278481013, x: new Date(2013,0) },
			{ y:1.432748538011696, x: new Date(2014,0) },
			{ y:1.3838383838383839, x: new Date(2015,0) },
			{ y:1.7238493723849373, x: new Date(2016,0) },
			{ y:1.6208530805687205, x: new Date(2017,0) },
			{ y:1.3805309734513274, x: new Date(2018,0) },
			{ y:1.518939393939394, x: new Date(2019,0) }
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
		name: "CONLL : Avg. number of Tables per Paper per Year",
		dataPoints: [
			
			
			
			{ y:0, x: new Date(1998,0) },
			{ y:1.8, x: new Date(2001,0) },
			{ y:2.388888888888889, x: new Date(2004,0) },
			{ y:3.1, x: new Date(2007,0) },
			{ y:2.7474747474747474, x: new Date(2010,0) },
			{ y:3.302752293577982, x: new Date(2012,0) },
			{ y:3.778481012658228, x: new Date(2013,0) },
			{ y:3.6315789473684212, x: new Date(2014,0) },
			{ y:3.742424242424242, x: new Date(2015,0) },
			{ y:3.3891213389121337, x: new Date(2016,0) },
			{ y:3.7285714285714286, x: new Date(2017,0) },
			{ y:4.274336283185841, x: new Date(2018,0) },
			{ y:4.038022813688213, x: new Date(2019,0) }
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
		name: "CONLL: Avg. number of Figures per Paper per Year",
		dataPoints: [
			
			
			
			{ y:0, x: new Date(1998,0) },
			{ y:0.9, x: new Date(2001,0) },
			{ y:2.7777777777777777, x: new Date(2004,0) },
			{ y:0.7727272727272727, x: new Date(2007,0) },
			{ y:0.7474747474747475, x: new Date(2010,0) },
			{ y:1.3761467889908257, x: new Date(2012,0) },
			{ y:1.0, x: new Date(2013,0) },
			{ y:1.0175438596491229, x: new Date(2014,0) },
			{ y:1.2373737373737375, x: new Date(2015,0) },
			{ y:1.2552301255230125, x: new Date(2016,0) },
			{ y:1.380952380952381, x: new Date(2017,0) },
			{ y:1.8893805309734513, x: new Date(2018,0) },
			{ y:1.8935361216730038, x: new Date(2019,0) }
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
		name: "SEMEVAL : Most Popular primary URL domains & their Frequencies",
		legendText: "",
		dataPoints: [
			{ y:33,  label:'spacy.io'  },
			{ y:637,  label:'github.com'  },
			{ y:330,  label:'www.aclweb.org'  },
			{ y:183,  label:'alt.qcri.org'  },
			{ y:177,  label:'nlp.stanford.edu'  },
			{ y:135,  label:'code.google.com'  },
			{ y:126,  label:'aclweb.org'  },
			{ y:109,  label:'creativecommons.org'  },
			{ y:101,  label:'arxiv.org'  },
			{ y:86,  label:'www.nltk.org'  },
			{ y:78,  label:'scikit-learn.org'  },
			{ y:69,  label:'en.wikipedia.org'  },
			{ y:52,  label:'sites.google.com'  },
			{ y:51,  label:'www.csie.ntu.edu.tw'  },
			{ y:50,  label:'competitions.codalab.org'  },
			{ y:49,  label:'www.cs.york.ac.uk'  },
			{ y:48,  label:'dl.acm.org'  },
			{ y:32,  label:'radimrehurek.com'  },
			{ y:32,  label:'keras.io'  },
			{ y:31,  label:'www.cs.waikato.ac.nz'  }
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
		name: "SEMEVAL : Top Unique GitHub Pages",
		legendText: "",
		dataPoints: [   
			{ y: 15, label: 'cbaziotis/' },
			{ y: 7, label: 'dmlc/xgboost' },
			{ y: 7, label: 'google-research/bert' },
			{ y: 6, label: 'alvations/pywsd' },
			{ y: 6, label: 'fchollet/keras' },
			{ y: 5, label: 'percyliang/' },
			{ y: 5, label: 'jaredks/tweetokenize' },
			{ y: 5, label: 'google-research/' },
			{ y: 5, label: 'cbaziotis/ekphrasis' },
			{ y: 4, label: 'seinecle/Umigon/blob/master/src/java/Heur' },
			{ y: 4, label: 'coastalcph/' },
			{ y: 4, label: 'ma-sultan/' },
			{ y: 4, label: 'cltl/' },
			{ y: 4, label: 'felipebravom/AffectiveTweets' },
			{ y: 4, label: 'mmihaltz/word2vec-GoogleNews-' },
			{ y: 4, label: 'tensorflow/nmt' },
			{ y: 4, label: 'huggingface/pytorch-pretrained-' },
			{ y: 4, label: 'huggingface/' },
			{ y: 3, label: 'CNGLdlab/LORG-Release' }
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
		name: "SEMEVAL : Top University Pages",
		legendText: "",
		dataPoints: [      
			{ y: 12,  label: 'ZHAW' },
			{ y: 29, label: 'Campus of Biscay' },                         
			{ y: 28,label: 'Academiegebouw Universiteit Utrecht' },
			{ y: 15,  label: 'University of Warwick' },
			{ y: 14,  label: 'Penn Museum' },
			{ y: 13,  label: 'Columbia University' },
			{ y: 12, label: 'University of Trento' },
			{ y: 11,  label: 'Aix-Marseille University' },
			{ y: 10, label: 'Brandeis University' },
			{ y: 10,  label: 'University of North Texas' },
			{ y: 9,  label: 'University of Sheffield' },
			{ y: 8,  label: 'University College Dublin' },
			{ y: 8,  label: 'Institute for Logic' },
			{ y: 8, label: 'George Washington University' },
			{ y: 8,  label: 'University of Pittsburgh' },
			{ y: 8,  label: 'University of Arizona' },
			{ y: 8, label: 'Sofia University' },
			{ y: 7,  label: 'Stanford University' },
			{ y: 8,  label: 'Know-Center GmbH' },
			{ y: 7,  label: 'Johns Hopkins Hospital' },
			{ y: 7,  label: 'Jadavpur University' }
			
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
		
		
		
		
		
		if(dt==2001)
		{
		
		dp = [                           
			{ y:1, label: 'uva.nl' },
			{ y:1, label: 'bton.ac.uk' },
			{ y:1, label: 'upc.es' },
			{ y:1, label: 'ub.es' },
			{ y:1, label: 'uned.es' },
			{ y:1, label: 'ling.lu.se' },
			{ y:4, label: 'spraakdata.gu.se' },
			{ y:1, label: 'svenska.gu.se' },
			{ y:1, label: 'ualberta.car' },
			{ y:1, label: 'promo.net' },
			{ y:1, label: 'sharp.co.ukl' },
			{ y:3, label: 'ling.gu.se' },
			{ y:1, label: 'clres.com' },
			{ y:1, label: 'smu.edu;-rada' },
			{ y:1, label: 'aist-nara.ac.jp' },
			{ y:1, label: 'info.ox.ac.uk' }
			
			
		]
		}
		else if(dt==2004)
		{
			dp= [                                         
			
				{ y:2, label: 'summarization.com' },
				{ y:2, label: 'canlii.org' },
				{ y:1, label: 'parliament.uk' },
				{ y:1, label: 'lawreports.co.uk' },
				{ y:1, label: 'waikato.ac.nz' },
				{ y:1, label: 'cogsci.ed.ac' },
				{ y:1, label: 'ltg.ed.ac' },
				{ y:1, label: 'diagrams.org' },
				{ y:1, label: 'neu.edu' },
				{ y:1, label: '.useit.com' },
				{ y:4, label: 'nist.gov' },
				{ y:3, label: 'isi.edu' },
				{ y:1, label: 'nii.ac.jp' },
				{ y:1, label: 'kuleuven.ac.be' },
				{ y:1, label: 'coli.uni-' },
				{ y:1, label: 'itc.org.uk' },
				{ y:1, label: 'kuleuven.ac.be' },
				{ y:1, label: 'elib.cs' }
			
		]
		}
		else if(dt==2007)
		{
			dp= [                                         
			{ y:2, label: 'ehu.es' },
			{ y:2, label: 'wikipedia.org' },
			{ y:4, label: 'clres.com' },
			{ y:7, label: 'princeton.edu' },
			{ y:3, label: 'uned.es' },
			{ y:3, label: 'timeml.org' },
			{ y:2, label: 'upenn.edu' },
			{ y:2, label: 'nist.gov' },
			{ y:3, label: 'chasen.org' },
			{ y:3, label: 'uniroma2.it' },
			{ y:5, label: 'upc.es' },
			{ y:3, label: 'upenn.edu' },
			{ y:2, label: 'uni-stuttgart.de' },
			{ y:3, label: 'joachims.org' },
			{ y:4, label: 'homepages.inf.ed.ac.uk' },
			{ y:4, label: 'ntu.edu.tw' },
			{ y:2, label: 'waikato.ac.nz' },
			{ y:3, label: 'reference.com' },
			{ y:2, label: 'sourceforge.net' },
			{ y:3, label: 'senseval.org' },
			{ y:3, label: 'ualberta.ca' }
			
		]
		}
		else if(dt==2010)
		{
			dp=[                                         
			{ y:4, label: 'upc.edu' },
			{ y:3, label: 'textpro.fbk.eu' },
			{ y:3, label: 'maltparser.org' },
			{ y:4, label: 'statmt.org' },
			{ y:2, label: 'colorado.edu' },
			{ y:5, label: 'timeml.org' },
			{ y:6, label: 'semeval2.fbk.eu' },
			{ y:3, label: 'kyoto-project.eu' },
			{ y:8, label: 'google.com' },
			{ y:4, label: 'yahoo.com' },
			{ y:3, label: 'uni-stuttgart.de' },
			{ y:16, label: 'sourceforge.net' },
			{ y:5, label: 'waikato.ac.nz' },
			{ y:2, label: 'nus.edu.sg' },
			{ y:3, label: 'princeton.edu' },
			{ y:5, label: 'stanford.edu' },
			{ y:4, label: 'ntu.edu.tw' },
			{ y:2, label: 'umass.edu' },
			{ y:3, label: 'ualberta.ca' },
			{ y:4, label: 'mitre.org' }
			
		]
		}
		else if(dt==2012)
		{
			dp= [                                         
			
			{ y:8, label: 'stanford.edu' },
			{ y:4, label: 'wikipedia.org' },
			{ y:5, label: 'sourceforge.net' },
			{ y:3, label: 'technion.ac.il' },
			{ y:5, label: 'apache.org' },
			{ y:3, label: 'illinois.edu' },
			{ y:4, label: 'ntu.edu.tw' },
			{ y:3, label: 'unibo.it' },
			{ y:2, label: 'github.com' },
			{ y:3, label: 'nist.gov' },
			{ y:4, label: 'cmu.edu' },
			{ y:11, label: 'google.com' },
			{ y:4, label: 'upc.edu' },
			{ y:4, label: 'clips.ua.ac.be' },
			{ y:6, label: 'umass.edu' },
			{ y:4, label: 'cpan.org' },
			{ y:10, label: 'york.ac.uk' },
			{ y:3, label: 'statmt.org' },
			{ y:5, label: 'bit.ly' },
			{ y:3, label: 'uni-stuttgart.de' },
			{ y:3, label: 'iitb.ac.in' }			
		]
		}
		else if(dt==2013)
		{
			dp= [                                         
			{ y:3, label: 'upenn.edu' },
			{ y:9, label: 'ntu.edu.tw' },
			{ y:9, label: 'wikipedia.org' },
			{ y:4, label: 'bit.ly' },
			{ y:18, label: 'stanford.edu' },
			{ y:16, label: 'google.com' },
			{ y:12, label: 'apache.org' },
			{ y:5, label: 'unitn.it' },
			{ y:5, label: 'cmu.edu' },
			{ y:31, label: 'york.ac.uk' },
			{ y:8, label: 'sourceforge.net' },
			{ y:24, label: 'github.com' },
			{ y:5, label: 'nltk.org' },
			{ y:5, label: 'waikato.ac.nz' },
			{ y:3, label: 'scikit-learn.org' },
			{ y:4, label: 'uniroma1.it' },
			{ y:2, label: 'arxiv.org' },
			{ y:4, label: 'statmt.org' },
			{ y:3, label: 'doi.org' },
			{ y:4, label: 'whocc.no' },
			{ y:7, label: 'nih.gov' },
			{ y:9, label: 'twitter.com' }
		]
		}
		else if(dt==2014)
		{
			dp= [                                         
			{ y:28, label: 'github.com' },
			{ y:9, label: 'cmu.edu' },
			{ y:5, label: 'waikato.ac.nz' },
			{ y:6, label: 'ntu.edu.tw' },
			{ y:104, label: 'creativecommons.org' },
			{ y:19, label: 'wikipedia.org' },
			{ y:6, label: 'tartarus.org' },
			{ y:33, label: 'stanford.edu' },
			{ y:16, label: 'google.com' },
			{ y:21, label: 'qcri.org' },
			{ y:8, label: 'sourceforge.net' },
			{ y:12, label: 'nltk.org' },
			{ y:4, label: 'twitter.com' },
			{ y:8, label: 'apache.org' },
			{ y:4, label: 'christopherpotts.net' },
			{ y:3, label: 'harvard.edu' },
			{ y:7, label: 'cnr.it' },
			{ y:6, label: 'uic.edu' },
			{ y:6, label: 'googlecode.com' },
			{ y:3, label: 'umd.edu' },
			{ y:4, label: 'upc.edu' },
			{ y:5, label: 'princeton.edu' },
			{ y:6, label: 'nih.gov' }
			
			
		]
		}
		else if(dt==2015)
		{
			dp= [    
			{ y:23, label: 'stanford.edu' },
			{ y:4, label: 'unitn.it' },
			{ y:12, label: 'wikipedia.org' },
			{ y:29, label: 'google.com' },
			{ y:6, label: 'nist.gov' },
			{ y:6, label: 'umass.edu' },
			{ y:47, label: 'github.com' },
			{ y:4, label: 'aclweb.org' },
			{ y:7, label: 'ntu.edu.tw' },
			{ y:3, label: 'columbia.edu' },
			{ y:5, label: 'cmu.edu' },
			{ y:3, label: 'nltk.org' },
			{ y:4, label: 'upenn.edu' },
			{ y:33, label: 'qcri.org' },
			{ y:5, label: 'babelnet.org' },
			{ y:8, label: 'scikit-learn.org' },
			{ y:5, label: 'princeton.edu' },
			{ y:8, label: 'sourceforge.net' },
			{ y:13, label: 'apache.org' },
			{ y:6, label: 'newsreader-project.eu' },
			{ y:4, label: 'yelp.com' }
			
		]
		}
		else if(dt==2016)
		{
			dp= [
			{ y:107, label: 'github.com' },
			{ y:65, label: 'qcri.org' },
			{ y:7, label: 'ntu.edu.tw' },
			{ y:4, label: 'crowdflower.com' },
			{ y:9, label: 'saifmohammad.com' },
			{ y:42, label: 'google.com' },
			{ y:30, label: 'stanford.edu' },
			{ y:9, label: 'cmu.edu' },
			{ y:12, label: 'radimrehurek.com' },
			{ y:22, label: 'nltk.org' },
			{ y:18, label: 'wikipedia.org' },
			{ y:14, label: 'scikit-learn.org' },
			{ y:6, label: 'pitt.edu' },
			{ y:6, label: 'uic.edu' },
			{ y:7, label: 'sentiment140.com' },
			{ y:3, label: 'york.ac.uk' },
			{ y:9, label: 'princeton.edu' },
			{ y:6, label: 'waikato.ac.nz' },
			{ y:6, label: 'arxiv.org' },
			{ y:5, label: 'aclweb.org' },
			{ y:7, label: 'yelp.com' },
			{ y:4, label: 'doi.org' },
			{ y:16, label: 'github.io' },
			{ y:10, label: 'apache.org' },
			{ y:9, label: 'wikimedia.org' }
			
		]
		}
		else if(dt==2017)
		{
			dp= [ 
			{ y:106, label: 'github.com' },
			{ y:10, label: 'radimrehurek.com' },
			{ y:70, label: 'arxiv.org' },
			{ y:18, label: 'scikit-learn.org' },
			{ y:35, label: 'acm.org' },
			{ y:181, label: 'doi.org' },
			{ y:399, label: 'aclweb.org' },
			{ y:11, label: 'saifmohammad.com' },
			{ y:6, label: 'codalab.org' },
			{ y:7, label: 'ntu.edu.tw' },
			{ y:43, label: 'google.com' },
			{ y:21, label: 'stanford.edu' },
			{ y:7, label: 'nips.cc' },
			{ y:6, label: 'jmlr.org' },
			{ y:4, label: 'spacy.io' },
			{ y:16, label: 'github.io' },
			{ y:4, label: 'microsoft.com' },
			{ y:5, label: 'uniroma1.it' },
			{ y:2, label: 'lingfil.uu.se' },
			{ y:49, label: 'qcri.org' },
			{ y:4, label: 'statmt.org' },
			{ y:9, label: 'tensorflow.org' },
			
		]
		}
		else if(dt==2018)
		{
			dp= [  
			{ y:48, label: 'doi.org' },	
			{ y:6, label: 'cmu.edu' },
			{ y:5, label: 'waikato.ac.nz' },
			{ y:2, label: 'statista.com' },
			{ y:154, label: 'github.com' },
			{ y:14, label: 'saifmohammad.com' },
			{ y:34, label: 'stanford.edu' },
			{ y:7, label: 'spacy.io' },
			{ y:5, label: 'w3.org' },
			{ y:21, label: 'google.com' },
			{ y:15, label: 'nltk.org' },
			{ y:3, label: 'zcu.cz' },
			{ y:3, label: 'ntu.edu.tw' },
			{ y:4, label: 'sentiment140.com' },
			{ y:13, label: 'scikit-learn.org' },
			{ y:43, label: 'aclweb.org' },
			{ y:4, label: 'semanticscholar.org' },
			{ y:14, label: 'arxiv.org' },
			{ y:23, label: 'codalab.org' },
			{ y:11, label: 'muni.cz' }
			
			
		]
		}
		else if(dt==2019)
		{
			dp= [    
			{ y:12, label: 'doi.org' },
			{ y:5, label: 'allennlp.org' },
			{ y:5, label: 'tfhub.dev' },
			{ y:179, label: 'github.com' },
			{ y:3, label: 'pytorch.org' },
			{ y:7, label: 'arxiv.org' },
			{ y:17, label: 'aclweb.org' },
			{ y:16, label: 'stanford.edu' },
			{ y:4, label: 'mturk.com' },
			{ y:19, label: 'nltk.org' },
			{ y:5, label: 'muni.cz' },
			{ y:3, label: 'acm.org' },
			{ y:7, label: 'bit.ly' },
			{ y:6, label: 'geonames.org' },
			{ y:21, label: 'codalab.org' },
			{ y:22, label: 'spacy.io' },
			{ y:6, label: 'kaggle.com' },
			{ y:5, label: 'fasttext.cc' },
			{ y:11, label: 'qcri.org' },
			{ y:43, label: 'google.com' }
			
			
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
	
	
	if (dtp=='20011')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.itri.bton.ac.uk/events/senseval' }			
		]
	}
	else if (dtp=='20010')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.hum.uva.nl/~ewn' }			
		]
	}
	else if (dtp=='20012')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.lsi.upc.es/.-vnlp' }			
		]
	}
	else if (dtp=='20013')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.ub.es/ling/labing.htm' }			
		]
	}
	else if (dtp=='20014')
	{
		dp = [                                         
			{ y: 1, label: 'http://rayuela.ieec.uned.es/' }			
		]
	}
	else if (dtp=='20015')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.ling.lu.se/projects/Swordnet' }			
		]
	}
	else if (dtp=='20016')
	{
		dp = [                                         
			{ y: 4, label: 'spraakdata.gu.se' }			
		]
	}
	else if (dtp=='20017')
	{
		dp = [                                         
			{ y: 1, label: 'http://svenska.gu.se/-svedk/resrapp/konfront.pdf' }			
		]
	}
	else if (dtp=='20018')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cs.ualberta.car' }			
		]
	}
	else if (dtp=='20019')
	{
		dp = [                                         
			{ y: 1, label: 'http://promo.net/pg' }			
		]
	}
	else if (dtp=='200110')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.sle.sharp.co.ukl' }			
		]
	}
	else if (dtp=='200111')
	{
		dp = [                                         
			{ y: 3, label: 'www.ling.gu.se' }			
		]
	}
	else if (dtp=='200112')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.clres.com' }			
		]
	}
	else if (dtp=='200113')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.seas.smu.edu;-rada/semcor' }			
		]
	}
	else if (dtp=='200114')
	{
		dp = [                                         
			{ y: 1, label: 'http://cl.aist-nara.ac.jp/' }			
		]
	}
	else if (dtp=='200115')
	{
		dp = [                                         
			{ y: 1, label: 'http://info.ox.ac.uk/bnc' }			
		]
	}
	else if (dtp=='200416')
	{
		dp = [                                         
			{ y: 2, label: 'www.summarization.com'}			
		]
	}
	else if (dtp=='20041')
	{
		dp = [                                         
			{ y: 2, label:  'www.canlii.org' }			
		]
	}
	else if (dtp=='20042')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.parliament.uk/judicial_work/' }			
		]
	}
	else if (dtp=='20043')
	{
		dp = [                                         

			{ y: 1, label: 'http://www.lawreports.co.uk/'}
		]
	}
	else if (dtp=='20044')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cs.waikato.ac.nz/ml/weka/' }			
		]
	}
	else if (dtp=='20045')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cogsci.ed.ac' }			
		]
	}
	else if (dtp=='20046')
	{
		dp = [                                         
			
			{ y: 1, label: 'http://www.ltg.ed.ac' }	
		]
	}
	else if (dtp=='20047')
	{
		dp = [                                         
			{ y: 1, label: 'http://diagrams.org/figpages/f00022.htm'}			
		]
	}
	else if (dtp=='20048')
	{
		dp = [                                         
			{ y: 3, label: 'http://www.icss.neu.edu/' }			
		]
	}
	else if (dtp=='20049')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.useit.com/alertbox/20031222.html' }			
		]
	}else if (dtp=='200410')
	{
		dp = [                                         
			{ y: 2, label: 'www-nlpir.nist.gov'},
			{ y: 2, label: 'duc.nist.gov'}			
		]
	}
	else if (dtp=='200411')
	{
		dp = [                                         
			{ y: 3, label: 'www.isi.edu' }			
		]
	}
	else if (dtp=='200412')
	{
		dp = [                                         
			{ y: 1, label: 'http://research.nii.ac.jp/ntcir/'}			
		]
	}
	else if (dtp=='200413')
	{
		dp = [                                         
			{ y: 1, label: 'http://atranos.esat.kuleuven.ac.be/' },
			{ y: 1, label: 'http://www.ccl.kuleuven.ac.be/Papers/' }
		]
	}
	else if (dtp=='200414')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.coli.uni-' }			
		]
	}
	else if (dtp=='200415')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.itc.org.uk/'}			
		]
	}
	else if (dtp=='20040')
	{
		dp = [                                         
			{ y: 1, label: 'http://elib.cs'}			
		]
	}
	else if (dtp=='20070')
	{
		dp = [                  
		
			{ y: 2, label: 'ixa2.si.ehu.es' },
			{ y: 2, label: 'ixa.si.ehu.es' }
			
		]
	}
	else if (dtp=='20071')
	{
		dp = [                                         
			
			{ y: 2, label: 'en.wikipedia.org' }
		]
	}
	else if (dtp=='20072')
	{
		dp = [                                         
			
			{ y: 4, label:  'www.clres.com' }
		]
	}
	else if (dtp=='20073')
	{
		dp = [                                         
			
			{ y: 7, label: 'wordnet.princeton.edu' },
			{ y: 1, label: 'http://www.cogsci.princeton.edu/wn' },
			{ y: 1, label: 'http://www.cs.princeton.edu/blei/lda-c/' }
		]
	}
	else if (dtp=='20074')
	{
		dp = [                                         
			
			{ y: 3, label: 'nlp.uned.es' }
		]
	}
	else if (dtp=='20075')
	{
		dp = [                                         
			{ y: 3, label: 'www.timeml.org' }
		]
	}
	else if (dtp=='20076')
	{
		dp = [                                         
			{ y: 2, label: 'www.nist.gov' },
			{ y: 1, label: 'http://trec.nist.gov/' }
		]
	}
	else if (dtp=='20077')
	{
		dp = [                                         

			{ y: 3, label: 'chasen.org' }
		]
	}
	else if (dtp=='20078')
	{
		dp = [                                         
			{ y: 3, label: 'ai-nlp.info.uniroma2.it' }
		]
	}
	else if (dtp=='20079')
	{
		dp = [                                         
			
			{ y: 5, label: 'www.lsi.upc.es' }
		]
	}
	else if (dtp=='200710')
	{
		dp = [                                         
			{ y: 3, label: 'www.ldc.upenn.edu' },
			{ y: 2, label: 'www.cis.upenn.edu' }

		]
	}
	else if (dtp=='200711')
	{
		dp = [                             
			{ y: 2, label: 'www.ims.uni-stuttgart.de' }
		]
	}
	else if (dtp=='200712')
	{
		dp = [                                         
			
			{ y: 3, label: 'svmlight.joachims.org' }
		]
	}
	else if (dtp=='200713')
	{
		dp = [                                         
			{ y: 4, label: 'homepages.inf.ed.ac.uk' }
		]
	}
	else if (dtp=='200714')
	{
		dp = [                                         
			
			{ y: 4, label: 'www.csie.ntu.edu.tw' }
		]
	}
	else if (dtp=='200715')
	{
		dp = [                                         
			{ y: 2, label:  'www.cs.waikato.ac.nz' }
		]
	}
	else if (dtp=='200716')
	{
		dp = [                                         
			
			{ y: 3, label: 'thesaurus.reference.com' }
		]
	}
	else if (dtp=='200717')
	{
		dp = [                                         
			{ y: 2, label: 'maxent.sourceforge.net' },
			{ y: 2, label: 'sourceforge.net' },
			{ y: 1, label: 'http://opennlp.sourceforge.net' },
			{ y: 1, label: 'http://jbnc.sourceforge.net'},
			{ y: 1, label: 'http://senserelate.sourceforge.net'},
			{ y: 1, label: 'http://wn-similarity.sourceforge.net'},
			{ y: 1, label: 'http://senseclusters.sourceforge.net'}
		]
	}
	else if (dtp=='200718')
	{
		dp = [                                         

			{ y: 3, label:  'www.senseval.org' }
		]
	}
	else if (dtp=='200719')
	{
		dp = [                                         
			
			{ y: 2, label: 'www.cs.ualberta.ca' }
		]
	}
	else if (dtp=='20100')
	{
		dp = [                                         
			{ y: 4, label:  'www.lsi.upc.edu' }
		]
	}
	else if (dtp=='20101')
	{
		dp = [                                         
			{ y: 3, label:   'textpro.fbk.eu'}
		]
	}
	else if (dtp=='20102')
	{
		dp = [                                         
			
			{ y: 3, label:  'maltparser.org' }
		]
	}
	else if (dtp=='20103')
	{
		dp = [                                         
			
			{ y: 4, label:  'www.statmt.org' }
		]
	}
	else if (dtp=='20104')
	{
		dp = [                                         
		
			{ y: 2, label:  'verbs.colorado.edu' }
		]
	}
	else if (dtp=='20105')
	{
		dp = [                                         
			
			{ y: 5, label:  'www.timeml.org' }
		]
	}else if (dtp=='20106')
	{
		dp = [                                         
			
			{ y: 6, label:  'semeval2.fbk.eu' }
		]
	}
	else if (dtp=='20107')
	{
		dp = [                                         
			
			{ y: 3, label:    'www.kyoto-project.eu' }
		]
	}
	else if (dtp=='20108')
	{
		dp = [                                         
			{ y: 2, label:   'www.google.com' },
			{ y: 1, label:   'http://translate.google.com.mx/' },
			{ y: 2, label:   'translate.google.com' },
			{ y: 3, label:   'code.google.com' }
		]
	}
	else if (dtp=='20109')
	{
		dp = [                                         
			{ y: 1, label:  'http://developer.yahoo.com/search/' },
			{ y: 1, label:  'http://education.yahoo.com/reference/' },
			{ y: 2, label:  'babelfish.yahoo.com' }
		]
	}
	else if (dtp=='201010')
	{
		dp = [                                         
			{ y: 3, label:  'www.ims.uni-stuttgart.de' }
		]
	}
	else if (dtp=='201011')
	{
		dp = [                                         
			{ y: 2, label:  'sourceforge.net'},
			{ y: 5, label:  'opennlp.sourceforge.net'},
			{ y: 1, label:  'http://jgibblda.sourceforge.net/'},
			{ y: 1, label:  'http://wikipedia-miner.sourceforge.net'},
			{ y: 1, label:  'http://jgrapht.sourceforge.net/'},
			{ y: 2, label:   'crfpp.sourceforge.net'},
			{ y: 1, label:  'http://senseclusters.sourceforge.net'},
			{ y: 1, label:  'http://mecab.sourceforge.net/'},
			{ y: 1, label:  'http://gibbslda.sourceforge.net/'},
			{ y: 1, label:  'http://wn-similarity.sourceforge.net/'}
		]
	}
	else if (dtp=='201012')
	{
		dp = [                                         
			{ y: 5, label:  'www.cs.waikato.ac.nz' }
		]
	}
	else if (dtp=='201013')
	{
		dp = [                                         
			
			{ y: 2, label:  'wing.comp.nus.edu.sg' }
		]
	}
	else if (dtp=='201014')
	{
		dp = [                                         
			
			{ y: 2, label:  'wordnet.princeton.edu' },
			{ y: 1, label:  'http://www.cogsci.princeton.edu/' }
		]
	}
	else if (dtp=='201015')
	{
		dp = [                                         
			
			{ y: 5, label:  'nlp.stanford.edu'}
		]
	}
	else if (dtp=='201016')
	{
		dp = [                                         
			{ y: 3, label: 'www.csie.ntu.edu.tw' },
			{ y: 1, label: 'http://nlg18.csie.ntu.edu.tw:8080/opinion/index.html' }
		]
	}
	else if (dtp=='201017')
	{
		dp = [                                         
			

			{ y: 2, label:  'mallet.cs.umass.edu' }
		]
	}
	else if (dtp=='201018')
	{
		dp = [                                         
			
			{ y: 3, label:  'webdocs.cs.ualberta.ca'}
		]
	}
	else if (dtp=='201019')
	{
		dp = [                                         
			{ y: 2, label:   'fofoca.mitre.org' },
			{ y: 2, label:   'timex2.mitre.org' }
		]
	}
	else if (dtp=='20120')
	{
		dp = [                                         
			{ y: 8, label:  'nlp.stanford.edu'},
			{ y: 2, label:   'www.stanford.edu' },
			{ y: 1, label:   'http://nlp.stanford' },
			{ y: 1, label:   'http://www.cs.stanford.edu/' }
		]
	}
	else if (dtp=='20121')
	{
		dp = [                                         

			{ y: 3, label: 'en.wikipedia.org'  },
			{ y: 1, label: 'http://he.wikipedia.org'  }
		]
	}
	else if (dtp=='20122')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://jung.sourceforge.net/' },
			{ y: 3, label:  'sourceforge.net' },
			{ y: 1, label:  'http://wn-similarity.sourceforge.net' }
		]
	}
	else if (dtp=='20123')
	{
		dp = [                                         
			{ y: 3, label:  'mila.cs.technion.ac.il' },
			{ y: 1, label:  'http://www.cs.technion.ac.il/' }
		]
	}
	else if (dtp=='20124')
	{
		dp = [                                         
			
			{ y: 4, label:  'lucene.apache.org' },
			{ y: 1, label:  'http://opennlp.apache.org/' }
		]
	}
	else if (dtp=='20125')
	{
		dp = [                                         
			{ y: 3, label:  'cogcomp.cs.illinois.edu' }
		]
	}
	else if (dtp=='20126')
	{
		dp = [                                         
			
			{ y: 4, label:   'www.csie.ntu.edu.tw'}
		]
	}
	else if (dtp=='20127')
	{
		dp = [                                         
			{ y: 3, label:  'wacky.sslmit.unibo.it'}
		]
	}
	else if (dtp=='20128')
	{
		dp = [                                         
			
			{ y: 2, label:  'github.com' }
		]
	}
	else if (dtp=='20129')
	{
		dp = [                                         
			{ y: 3, label:  'www.nist.gov' },
			{ y: 1, label:  'http://trec.nist.gov/data/qamain.html' }
		]
	}
	else if (dtp=='201210')
	{
		dp = [                                         
			{ y: 1, label:   'http://www.cs.cmu.edu/afs/cs/project/theo-' },
			{ y: 2, label:   'www.ark.cs.cmu.edu' },
			{ y: 1, label:   'http://artigas.lti.cs.cmu.edu/rite/Main_Page'}
		]
	}
	else if (dtp=='201211')
	{
		dp = [                                         
			{ y: 3, label:  'sites.google.com' },
			{ y: 3, label:  'code.google.com' },
			{ y: 3, label:  'translate.google.com' },
			{ y: 1, label:  'http://books.google.com/ngrams/datasets' },
			{ y: 1, label:  'http://translate.google.com.mx/' }
		]
	}
	else if (dtp=='201212')
	{
		dp = [                                         
			{ y: 3, label:  'www.lsi.upc.edu' },
			{ y: 1, label:  'http://nlp.lsi.upc.edu/asiya/' }
		]
	}
	else if (dtp=='201213')
	{
		dp = [                                         
			{ y: 4, label:  'www.clips.ua.ac.be' }
		]
	}
	else if (dtp=='201214')
	{
		dp = [                                         
			{ y: 6, label:  'mallet.cs.umass.edu' }
		]
	}
	else if (dtp=='201215')
	{
		dp = [                                         
			{ y: 4, label:  'search.cpan.org' }
		]
	}
	else if (dtp=='201216')
	{
		dp = [                                         

			{ y: 10, label:   'www.cs.york.ac.uk' }
		]
	}
	else if (dtp=='201217')
	{
		dp = [                                         
			
			{ y: 3, label:  'www.statmt.org' }
		]
	}
	else if (dtp=='201218')
	{
		dp = [                                         
			{ y: 5, label: 'bit.ly' }
		]
	}
	else if (dtp=='201219')
	{
		dp = [                                         
			{ y: 3, label:  'www.ims.uni-stuttgart.de' }
		]
	}
	else if (dtp=='201220')
	{
		dp = [                                         
			{ y: 3, label:  'www.cfilt.iitb.ac.in' }
		]
	}
	else if (dtp=='20130')
	{
		dp = [                                         
			
			{ y: 3, label:  'www.ldc.upenn.edu' }
		]
	}
	else if (dtp=='20131')
	{
		dp = [                                         
			
			
			{ y: 9, label:  'www.csie.ntu.edu.tw' }
		]
	}
	else if (dtp=='20132')
	{
		dp = [                                         
			{ y: 8, label: 'en.wikipedia.org' },
			{ y: 1, label: 'http://simple.wikipedia.org' }
		]
	}
	else if (dtp=='20133')
	{
		dp = [                                         
			{ y: 4, label:  'bit.ly' }
		]
	}
	else if (dtp=='20134')
	{
		dp = [                                         
			{ y: 17, label:  'nlp.stanford.edu' },
			{ y: 1, label:  'http://nlp.stanford.edu:8080/parser/'}
		]
	}
	else if (dtp=='20135')
	{
		dp = [                                         
			{ y: 11, label:  'code.google.com' },
			{ y: 4, label:  'translate.google.com' },
			{ y: 1, label:  'https://groups.google.com/d/topic/tempeval/' }
		]
	}
	else if (dtp=='20136')
	{
		dp = [                                         
			{ y: 5, label:  'lucene.apache.org' },
			{ y: 4, label:  'opennlp.apache.org' },
			{ y: 1, label:  'http://mahout.apache.org' },
			{ y: 1, label:  'http://uima.apache.org/uima-specification.html' },
			{ y: 1, label:  'http://incubator.apache.org/opennlp' }
		]
	}
	else if (dtp=='20137')
	{
		dp = [                                         
			
			{ y: 5, label:  'disi.unitn.it' }
		]
	}
	else if (dtp=='20138')
	{
		dp = [                                         

			{ y: 5, label: 'www.ark.cs.cmu.edu' }
		]
	}
	else if (dtp=='20139')
	{
		dp = [                                         
		
			{ y: 31, label:  'www.cs.york.ac.uk' }
		]
	}
	else if (dtp=='201310')
	{
		dp = [                                         
			{ y: 3, label: 'sourceforge.net' },
			{ y: 1, label: 'http://neuroph.sourceforge.net' },
			{ y: 1, label: 'http://prdownloads.sourceforge.net/weka/' },
			{ y: 1, label: 'http://senseclusters.sourceforge.net' },
			{ y: 1, label: 'http://wordlist.sourceforge.net' },
			{ y: 1, label: 'http://chebi.cvs.sourceforge.net/' }
		]
	}
	else if (dtp=='201311')
	{
		dp = [                                         
			{ y: 3, label:  'jbjorne.github.com' },
			{ y: 21, label:  'github.com' }
		]
	}
	else if (dtp=='201312')
	{
		dp = [                                         
			{ y: 4, label:  'nltk.org' },
			{ y: 1, label:  'http://www.nltk.org/book' }
		]
	}
	else if (dtp=='201313')
	{
		dp = [                                         
			{ y: 4, label:  'www.cs.waikato.ac.nz' },
			{ y: 1, label:  'http://wikipedia-miner.cms.waikato.ac.nz/ser-' }
		]
	}
	else if (dtp=='201314')
	{
		dp = [                                         

			
			{ y: 3, label:  'scikit-learn.org' }
		]
	}
	else if (dtp=='201315')
	{
		dp = [                                         
			
			{ y: 4, label:  'lcl.uniroma1.it' }
		]
	}
	else if (dtp=='201316')
	{
		dp = [                                         
			{ y: 2, label:  'arxiv.org' }
		]
	}
	else if (dtp=='201317')
	{
		dp = [                                         
			{ y: 4, label:  'www.statmt.org' }
		]
	}
	else if (dtp=='201318')
	{
		dp = [                                         
			{ y: 3, label:  'dx.doi.org'}
		]
	}
	else if (dtp=='201319')
	{
		dp = [                                         
			
			{ y: 4, label:  'www.whocc.no' }
		]
	}
	else if (dtp=='201320')
	{
		dp = [                                         
			{ y: 3, label:  'www.ncbi.nlm.nih.gov' },
			{ y: 2, label:  'www.nlm.nih.gov' },
			{ y: 1, label:  'http://pubchem.ncbi.nlm.nih.gov/' },
			{ y: 1, label:  'http://metamap.nlm.nih.gov/' }
		]
	}
	else if (dtp=='201321')
	{
		dp = [                                         
			{ y: 1, label:  'http://search.twitter.com/api' },
			{ y: 3, label:  'twitter.com' },
			{ y: 4, label:  'www.twitter.com' },
			{ y: 1, label:  'https://dev.twitter.com/docs/' }
		]
	}
	else if (dtp=='20140')
	{
		dp = [                                         
			{ y: 26, label:  'github.com' },
			{ y: 1, label:  'https://gist.github.com/alexbowe/879414' },
			{ y: 1, label:  'http://networkx.github.com/' }
		]
	}
	else if (dtp=='20141')
	{
		dp = [                                         
			{ y: 7, label:  'www.ark.cs.cmu.edu' },
			{ y: 1, label:  'http://lti.cs.cmu.edu/sites/' },
			{ y: 1, label:  'https://www.cs.cmu.edu/' }
		]
	}
	else if (dtp=='20142')
	{
		dp = [                                         
			{ y: 5, label:  'www.cs.waikato.ac.nz' }
		]
	}
	else if (dtp=='20143')
	{
		dp = [                                         
			{ y: 6, label:  'www.csie.ntu.edu.tw' }
		]
	}
	else if (dtp=='20144')
	{
		dp = [                                         
			{ y: 104, label:  'creativecommons.org' }
		]
	}
	else if (dtp=='20145')
	{
		dp = [                                         
	
			{ y: 19, label:  'en.wikipedia.org' }
		]
	}
	else if (dtp=='20146')
	{
		dp = [                                         
	
			{ y: 4, label:   'snowball.tartarus.org' },
			{ y: 2, label:   'tartarus.org' }
		]
	}
	else if (dtp=='20147')
	{
		dp = [                                         
			
			{ y: 30, label:  'nlp.stanford.edu' },
			{ y: 1, label:  'http://www-nlp.stanford.edu/software/corenlp.shtml' },
			{ y: 1, label:  'http://cs.stanford.edu/people/alecmgo/trainingandtestdata.zip' },
			{ y: 1, label:  'http://nlp.stanford.edu:8080/parser/' }
		]
	}
	else if (dtp=='20148')
	{
		dp = [                                         
			{ y: 4, label:  'sites.google.com' },
			{ y: 10, label:  'code.google.com' },
			{ y: 1, label:  'https://books.google.com/ngrams/datasets' },
			{ y: 1, label:  'http://translate.google.com' }
		]
	}
	else if (dtp=='20149')
	{
		dp = [                                         
			{ y: 21, label:  'alt.qcri.org' }
		]
	}
	else if (dtp=='201410')
	{
		dp = [                                         
			{ y: 3, label:   'opennlp.sourceforge.net' },
			{ y: 1, label:  'http://umls-similarity.sourceforge.net' },
			{ y: 1, label:   'http://crfpp.sourceforge.net' },
			{ y: 1, label:  'http://weka.sourceforge.net/doc.stable/weka/classifiers/' },
			{ y: 2, label:   'sourceforge.net'}
		]
	}
	else if (dtp=='201411')
	{
		dp = [                                         
			{ y: 3, label:   'nltk.org' },
			{ y: 9, label:   'www.nltk.org' }
		]
	}
	else if (dtp=='201412')
	{
		dp = [                                         
	
			{ y: 4, label:  'twitter.com' }
		]
	}
	else if (dtp=='201413')
	{
		dp = [                                         
		
			{ y: 4, label:  'lucene.apache.org' },
			{ y: 3, label:  'opennlp.apache.org' },
			{ y: 1, label:  'https://ctakes.apache.org/' }
		]
	}
	else if (dtp=='201414')
	{
		dp = [                                         
			{ y: 4, label:  'sentiment.christopherpotts.net' }
		]
	}
	else if (dtp=='201415')
	{
		dp = [                                         
			{ y: 3, label:  'www.wjh.harvard.edu' }
		]
	}
	else if (dtp=='201416')
	{
		dp = [                                         
			{ y: 7, label:  'sentiwordnet.isti.cnr.it' }
		]
	}
	else if (dtp=='201417')
	{
		dp = [                                         
			
			{ y: 6, label:  'www.cs.uic.edu' }
		]
	}
	else if (dtp=='201419')
	{
		dp = [                                         
			{ y: 6, label:  'crfpp.googlecode.com' }
		]
	}
	else if (dtp=='201418')
	{
		dp = [                                         
			
			{ y: 3, label:  'www.umiacs.umd.edu' }
		]
	}
	else if (dtp=='201419')
	{
		dp = [ 
			{ y: 4, label:  'nlp.lsi.upc.edu' }
			
			]
	}
	else if (dtp=='201420')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.cs.princeton.edu/' },
			{ y: 4, label:  'wordnet.princeton.edu' }
		]
	}
	else if (dtp=='201421')
	{
		dp = [                                         
			
			{ y: 1, label:  'https://uts.nlm.nih.gov/home.html' },
			{ y: 1, label:  'http://lexsrv2.nlm.nih.gov/' },
			{ y: 1, label:  'http://mmtx.nlm.nih.gov/' },
			{ y: 3, label:  'www.nlm.nih.gov' }
		]
	}
	else if (dtp=='20150')
	{
		dp = [                                         
			{ y: 21, label:  'nlp.stanford.edu' },
			{ y: 1, label:  'http://snap.stanford.edu/data/' },
			{ y: 1, label:  'http://www-nlp.stanford.edu/projects/glove/' }
		]
	}
	else if (dtp=='20151')
	{
		dp = [                                         
			{ y: 3, label:  'clic.cimec.unitn.it' },
			{ y: 1, label:  'http://disi.unitn.it/moschitti/Tree-Kernel.htm'}
		]
	}
	else if (dtp=='20152')
	{
		dp = [                                         
			{ y: 9, label:  'en.wikipedia.org' },
			{ y: 1, label:  'http://fr.wikipedia.org/wiki/Red' },
			{ y: 1, label:  'http://it.wikipedia.org/wiki/Emoticon' },
			{ y: 1, label:  'http://de.wikipedia.org/wiki/Emoticon' }
		]
	}
	else if (dtp=='20153')
	{
		dp = [                                         
			{ y: 24, label:  'code.google.com' },
			{ y: 2, label:  'sites.google.com' },
			{ y: 1, label:  'http://translate.google.com' },
			{ y: 2, label:  'www.google.com' }
		]
	}
	else if (dtp=='20154')
	{
		dp = [                                         
			{ y: 5, label:   'www.nist.gov' },
			{ y: 1, label:  'http://www-nlpir.nist.gov/projects/duc/duc2007/tasks.html' }
			]
	}
	else if (dtp=='20155')
	{
		dp = [                                         
			
			{ y: 6, label:  'mallet.cs.umass.edu' }
		]
	}
	else if (dtp=='20156')
	{
		dp = [                                         

			{ y: 46, label:  'github.com' },
			{ y: 1, label:  'http://networkx.github.com' }
		]
	}
	else if (dtp=='20157')
	{
		dp = [                                         
			{ y: 2, label: 'anthology.aclweb.org' },
			{ y: 2, label: 'aclweb.org' }
			]
	}
	else if (dtp=='20158')
	{
		dp = [                                         

			{ y: 7, label:  'www.csie.ntu.edu.tw' }
		]
	}
	else if (dtp=='20159')
	{
		dp = [                                         
			
			{ y: 3, label:  'www.cs.columbia.edu'}
		]
	}else if (dtp=='201510')
	{
		dp = [                                         
		
			{ y: 3, label:  'www.ark.cs.cmu.edu' },
			{ y: 2, label:  'www.cs.cmu.edu' }
		]
	}
	else if (dtp=='201511')
	{
		dp = [                                         
			{ y: 3, label: 'nltk.org'},
			{ y: 4, label: 'www.nltk.org'}
		]
	}
	else if (dtp=='201512')
	{
		dp = [                                         
			
			{ y: 4, label:  'catalog.ldc.upenn.edu' },
			{ y: 1, label:  'http://www.cis.upenn.edu/' },
			{ y: 1, label:  'http://www.seas.upenn.edu/' }
		]
	}
	else if (dtp=='201513')
	{
		dp = [                                         
			{ y: 33, label:  'alt.qcri.org' }
		]
	}
	else if (dtp=='201514')
	{
		dp = [                                         
			{ y: 5, label:  'babelnet.org' }
		]
	}
	else if (dtp=='201515')
	{
		dp = [                                         
			{ y: 8, label:  'scikit-learn.org' }
		]
	}
	else if (dtp=='201516')
	{
		dp = [                                         
			{ y: 5, label:  'wordnet.princeton.edu' }
		]
	}
	else if (dtp=='201517')
	{
		dp = [                                         
			{ y: 1, label: 'http://lpsolve.sourceforge.net/5.5/' },
			{ y: 1, label: 'http://sourceforge.net/projects/jwordnet/' },
			{ y: 2, label: 'senseclusters.sourceforge.net' },
			{ y: 1, label: 'http://ngram.sourceforge.net'},
			{ y: 3, label: 'jazzy.sourceforge.net'}
		]
	}else if (dtp=='201518')
	{
		dp = [                                         
		
			{ y: 7, label:   'opennlp.apache.org' },
			{ y: 4, label:   'lucene.apache.org' },
			{ y: 1, label:   'https://spark.apache.org/mllib/' },
			{ y: 1, label:   'https://ctakes.apache.org' }
		]
	}
	else if (dtp=='201519')
	{
		dp = [                                         
			{ y: 6, label:  'www.newsreader-project.eu' }
		]
	}
	else if (dtp=='201520')
	{
		dp = [                                         
			{ y: 4, label:  'www.yelp.com' }
		]
	}
	else if (dtp=='20160')
	{
		dp = [
			{ y: 104, label:  'github.com' },
			{ y: 3, label:  'www.github.com'}
			
		]
	}
	else if (dtp=='20161')
	{
		dp = [                                         
	
			{ y: 65, label:   'alt.qcri.org' }
		]
	}
	else if (dtp=='20162')
	{
		dp = [                                         
			
			{ y: 7, label:  'www.csie.ntu.edu.tw'}
		]
	}
	else if (dtp=='20163')
	{
		dp = [                                         
			
			{ y: 4, label:  'www.crowdflower.com'}
		]
	}
	else if (dtp=='20164')
	{
		dp = [                                         
			
			{ y: 3, label: 'www.saifmohammad.com' },
			{ y: 6, label: 'saifmohammad.com' }
		]
	}
	else if (dtp=='20165')
	{
		dp = [                                         
			
			{ y: 34, label:  'code.google.com' },
			{ y: 1, label:  'https://developers.google.com/web-search/docs/' },
			{ y: 1, label:  'https://cloud.google.com/translate/' },
			{ y: 1, label:  'https://translate.google.com/' },
			{ y: 1, label:  'https://books.google.com/ngrams' },
			{ y: 2, label:  'drive.google.com' },
			{ y: 2, label:  'www.google.com' }
		]
	}
	else if (dtp=='20166')
	{
		dp = [                                         
			{ y: 27, label:  'nlp.stanford.edu' },
			{ y: 1, label:   'https://cs224d.stanford.edu/reports/WangBo.pdf' },
			{ y: 1, label:   'http://deepdive.stanford.edu' },
			{ y: 1, label:   'https://snap.stanford.edu/data/' }
		]
	}
	else if (dtp=='20167')
	{
		dp = [                                         
			{ y: 2, label:  'www.ark.cs.cmu.edu' },
			{ y: 9, label:  'www.cs.cmu.edu' }
		]
	}
	else if (dtp=='20168')
	{
		dp = [                                         
			{ y: 12, label:  'radimrehurek.com' }
		]
	}
	else if (dtp=='20169')
	{
		dp = [                                         
			{ y: 2, label:  'nltk.org' },
			{ y: 20, label: 'www.nltk.org' }
		]
	}
	else if (dtp=='201610')
	{
		dp = [                                         
			{ y: 14, label:  'en.wikipedia.org' },
			{ y: 1, label:  'https://it.wikipedia.org/wiki/Emoticon' },
			{ y: 1, label:  'http://wikipedia.org/' },
			{ y: 1, label:  'https://simple.wikipedia.org/' },
			{ y: 1, label:  'https://zh.wikipedia.org' }
		]
	}
	else if (dtp=='201611')
	{
		dp = [                                         
			{ y: 14, label:  'scikit-learn.org'}
		]
	}
	else if (dtp=='201612')
	{
		dp = [                                         
			{ y: 5, label:  'mpqa.cs.pitt.edu'},
			{ y: 1, label:  'http://www.cs.pitt.edu/mpqa/'}
		]
	}
	else if (dtp=='201613')
	{
		dp = [                                         
			{ y: 6, label:  'www.cs.uic.edu' }
		]
	}
	else if (dtp=='201614')
	{
		dp = [                                         
			
			{ y: 7, label:  'help.sentiment140.com' }
		]
	}
	else if (dtp=='201615')
	{
		dp = [                                         
			{ y: 3, label:  'www.cs.york.ac.uk' }
		]
	}
	else if (dtp=='201616')
	{
		dp = [                                         
			{ y: 8, label:  'wordnet.princeton.edu' },
			{ y: 1, label:  'http://www.cs.princeton.edu/' }
		]
	}
	else if (dtp=='201617')
	{
		dp = [                                         
			{ y: 6, label:  'www.cs.waikato.ac.nz' }
		]
	}
	else if (dtp=='201618')
	{
		dp = [                                         
			
			{ y: 6, label:  'arxiv.org' }
		]
	}
	else if (dtp=='201619')
	{
		dp = [                                         
			
			{ y: 4, label:   'anthology.aclweb.org' },
			{ y: 1, label:   'http://aclweb.org/anthology/D15-1304' }
		]
	}
	else if (dtp=='201620')
	{
		dp = [                                         
			
			{ y: 7, label:  'www.yelp.com' }
		]
	}
	else if (dtp=='201621')
	{
		dp = [                                         
			
			{ y: 4, label:  'doi.org' }
		]
	}
	else if (dtp=='201622')
	{
		dp = [                                         
			{ y: 6, label:  'stanfordnlp.github.io'},
			{ y: 1, label:  'https://pystruct.github.io/index.html'},
			{ y: 4, label: 'dimsum16.github.io'},
			{ y: 1, label:  'http://hunspell.github.io/'},
			{ y: 2, label:  'taku910.github.io'},
			{ y: 1, label: 'https://dkpro.github.io/dkpro-core/'},
			{ y: 1, label: 'http://tudarmstadt-lt.github.io/taxi'}
		]
	}
	else if (dtp=='201623')
	{
		dp = [                                         
			{ y: 1, label:  'http://spark.apache.org/mllib/' },
			{ y: 5, label:  'lucene.apache.org' },
			{ y: 2, label:   'wiki.apache.org' },
			{ y: 1, label:   'https://opennlp.apache.org/' },
			{ y: 1, label:   'https://commons.apache.org/proper/commons-' }
		]
	}
	else if (dtp=='201624')
	{
		dp = [                                         
			
			{ y: 9, label:  'dumps.wikimedia.org' }
		]
	}
	else if (dtp=='20170')
	{
		dp = [                                         
			 
			{ y: 106, label:  'github.com'}
		]
	}
	else if (dtp=='20171')
	{
		dp = [                                         
			
			{ y: 10, label:  'radimrehurek.com' }
		]
	}
	else if (dtp=='20172')
	{
		dp = [                                         
			
			{ y: 70, label:  'arxiv.org' }
		]
	}
	else if (dtp=='20173')
	{
		dp = [                                         
			
			{ y: 18, label:  'scikit-learn.org' }
		]
	}
	else if (dtp=='20174')
	{
		dp = [                                         
			
			{ y: 35, label:  'dl.acm.org' },
			{ y: 1, label:  'http://doi.acm.org/10.1145/2930663' },
			{ y: 2, label:  'portal.acm.org'}
		]
	}
	else if (dtp=='20175')
	{
		dp = [                                         
			
			{ y: 173, label:  'doi.org' },
			{ y: 8, label:  'dx.doi.org' }
		]
	}
	else if (dtp=='20176')
	{
		dp = [                                         
			
			{ y: 287, label:   'www.aclweb.org'},
			{ y: 106, label:   'aclweb.org'},
			{ y: 4, label:   'anthology.aclweb.org'},
			{ y: 2, label:  'www.anthology.aclweb.org'}
		]
	}
	else if (dtp=='20177')
	{
		dp = [                                         
			{ y: 10, label:  'saifmohammad.com' },
			{ y: 1, label:  'http://www.saifmohammad.com/WebPages/lexicons.html' }
		]
	}
	else if (dtp=='20178')
	{
		dp = [                                         

			{ y: 6, label:  'competitions.codalab.org' }
		]
	}
	else if (dtp=='20179')
	{
		dp = [                                         
			
			{ y: 7, label: 'www.csie.ntu.edu.tw' }
		]
	}
	else if (dtp=='201710')
	{
		dp = [                                         
			{ y: 27, label:  'code.google.com'},
			{ y: 3, label:  'translate.google.com'},
			{ y: 1, label:  'https://books.google.com/books?id=Rehu8OOzMIMC'},
			{ y: 9, label:  'sites.google.com'},
			{ y: 1, label:  'https://cloud.google.com/translate/'},
			{ y: 1, label:  'https://trends.google.com/trends/'},
			{ y: 1, label:  'https://drive.google.com/file/d/0B7XkCwpI5KDYNlN'}
		]
	}
	else if (dtp=='201711')
	{
		dp = [                                         
			
			{ y: 20, label:  'nlp.stanford.edu' },
			{ y: 1, label:  'https://plato.stanford.edu/archives/win2016/entries/' }
		]
	}
	else if (dtp=='201712')
	{
		dp = [                                         
			
			{ y: 7, label:  'papers.nips.cc'}
		]
	}
	else if (dtp=='201713')
	{
		dp = [                                         
			{ y: 6, label:  'jmlr.org' }
		]
	}
	else if (dtp=='201714')
	{
		dp = [                                         
			{ y: 4, label:  'spacy.io' }
		]
	}
	else if (dtp=='201715')
	{
		dp = [                                         
			
			{ y: 9, label: 'stanfordnlp.github.io'},
			{ y: 5, label: 'taku910.github.io'},
			{ y: 1, label: 'http://jrtom.github.io/jung/'},
			{ y: 1, label: 'https://xinru1414.github.io/HumorDetection-'}
		]
	}
	else if (dtp=='201716')
	{
		dp = [                                         
		
			{ y: 4, label:  'www.microsoft.com' }
		]
	}
	else if (dtp=='201717')
	{
		dp = [                                         
			{ y: 5, label:  'lcl.uniroma1.it' }
		]
	}
	else if (dtp=='201718')
	{
		dp = [                                         
			
			{ y: 2, label: 'opus.lingfil.uu.se' }
		]
	}
	else if (dtp=='201719')
	{
		dp = [                                         
			
			{ y: 49, label:  'alt.qcri.org' }
		]
	}
	else if (dtp=='201720')
	{
		dp = [                                         
			{ y: 4, label:  'www.statmt.org' }
		]
	}
	else if (dtp=='201721')
	{
		dp = [                                         
			{ y: 5, label:  'tensorflow.org' },
			{ y: 4, label:  'www.tensorflow.org' }
		]
	}
	else if (dtp=='201818')
	{
		dp = [                                         
	
			{ y: 23, label:  'competitions.codalab.org' }
		]
	}
	else if (dtp=='20185')
	{
		dp = [                                         
		
			{ y: 10, label:  'saifmohammad.com' },
			{ y: 4, label:   'www.saifmohammad.com' }
		]
	}
	else if (dtp=='20182')
	{
		dp = [                                         

			{ y: 3, label:  'affectivetweets.cms.waikato.ac.nz' },
			{ y: 2, label:  'www.cs.waikato.ac.nz' }
		]
	}
	else if (dtp=='20183')
	{
		dp = [                                         
			
			{ y: 2, label:  'www.statista.com' }
		]
	}
	else if (dtp=='20184')
	{
		dp = [                                         
			{ y: 153, label:  'github.com' },
			{ y: 1, label:  'http://www.github.com/deepmind/rc-data/' }
		]
	}
	else if (dtp=='20181')
	{
		dp = [                                         
			
			
			{ y: 6, label:  'www.cs.cmu.edu' }
		]
	}
	else if (dtp=='20186')
	{
		dp = [                                         
			 
			{ y: 33, label:  'nlp.stanford.edu' },
			{ y: 1, label:  'http://dbpubs.stanford.edu:8091/' }
		]
	}
	else if (dtp=='20187')
	{
		dp = [                                         
			{ y: 7, label:  'spacy.io' }
		]
	}
	else if (dtp=='20188')
	{
		dp = [                                         
			{ y: 5, label:  'www.w3.org' }
		]
	}
	else if (dtp=='20189')
	{
		dp = [                                         
			
			{ y: 16, label:   'code.google.com' },
			{ y: 1, label:   'https://docs.google.com/sp' },
			{ y: 1, label:   'https://code.google.com/p/word2vec' },
			{ y: 2, label:   'books.google.com' },
			{ y: 1, label:   'https://drive.google.com/' }
		]
	}
	else if (dtp=='201810')
	{
		dp = [                                         
			{ y: 15, label:  'www.nltk.org' }
		]
	}
	else if (dtp=='201811')
	{
		dp = [                                         
			{ y: 3, label:  'nlp.kiv.zcu.cz' }
		]
	}
	else if (dtp=='201812')
	{
		dp = [                                         
			
			{ y: 3, label:  'www.csie.ntu.edu.tw'}
		]
	}
	else if (dtp=='201813')
	{
		dp = [                                         
			{ y: 4, label:  'help.sentiment140.com' }
		]
	}
	else if (dtp=='201814')
	{
		dp = [                                         
			{ y: 13, label:  'scikit-learn.org' }
		]
	}
	else if (dtp=='201815')
	{
		dp = [                                         
			
			{ y: 11, label:  'aclweb.org'},
			{ y: 32, label:  'www.aclweb.org'}
		]
	}
	else if (dtp=='201816')
	{
		dp = [                                         
			{ y: 3, label:  'pdfs.semanticscholar.org' },
			{ y: 1, label:  'http://labs.semanticscholar.org/corpus/' }
		]
	}
	else if (dtp=='201817')
	{
		dp = [                                         
			{ y: 14, label:   'arxiv.org' }
		]
	}
	else if (dtp=='20180')
	{
		dp = [                                         
			{ y: 48, label:  'doi.org' }
		]
	}
	else if (dtp=='201819')
	{
		dp = [                                         
			{ y: 11, label:  'is.muni.cz' }
		]
	}
	else if (dtp=='20197')
	{
		dp = [                                         
			{ y: 15, label:  'nlp.stanford.edu' },
			{ y: 1, label:  'http://cs224d.stanford.edu/' },
			
		]
	}
	else if (dtp=='20191')
	{
		dp = [                                         
			{ y: 5, label:  'allennlp.org' }
		]
	}
	else if (dtp=='20192')
	{
		dp = [                                         
			{ y: 5, label:  'tfhub.dev' }
		]
	}
	else if (dtp=='20193')
	{
		dp = [                                         
			{ y: 1, label:  'https://www.github.com/cbaziotis/' },
			{ y: 178, label:  'github.com' }
		]
	}
	else if (dtp=='20194')
	{
		dp = [                                         
			{ y: 3, label:  'pytorch.org' }
		]
	}
	else if (dtp=='20195')
	{
		dp = [                                         
			{ y: 7, label:  'arxiv.org' }
		]
	}
	else if (dtp=='20196')
	{
		dp = [                                         
			{ y: 11, label:   'www.aclweb.org' },
			{ y: 5, label:   'aclweb.org' },
			{ y: 1, label:   'http://anthology.aclweb.org/' }

		]
	}
	else if (dtp=='20190')
	{
		dp = [                                         
			{ y: 9, label:  'doi.org' },
			{ y: 3, label:  'dx.doi.org' }
		]
	}
	else if (dtp=='20198')
	{
		dp = [                                         
			{ y: 3, label:  'www.mturk.com' },
			{ y: 1, label:  'https://requester.mturk.com/' }
		]
	}
	else if (dtp=='20199')
	{
		dp = [                                         
			{ y: 19, label:  'www.nltk.org' }
		]
	}
	else if (dtp=='201910')
	{
		dp = [                                         
			{ y: 5, label:  'is.muni.cz' }
		]
	}
	else if (dtp=='201911')
	{
		dp = [                                         
			{ y: 3, label:  'dl.acm.org' }
		]
	}
	else if (dtp=='201912')
	{
		dp = [                                         
			{ y: 7, label:  'bit.ly' }
		]
	}
	else if (dtp=='201913')
	{
		dp = [                                         
			{ y: 6, label:  'www.geonames.org' },
			{ y: 1, label:  'https://geonames.org' },
			{ y: 1, label:  'http://download.geonames.org/export/' }
		]
	}
	else if (dtp=='201914')
	{
		dp = [                                         
			{ y: 21, label:  'competitions.codalab.org' }
		]
	}
	else if (dtp=='201915')
	{
		dp = [                                         
			{ y: 11, label:  'spacy.io' },
			{ y: 1, label:  'https://spaCy.io' }
		]
	}
	else if (dtp=='201916')
	{
		dp = [                                         
			{ y: 5, label:  'www.kaggle.com' },
			{ y: 1, label:  'http://kaggle.com/c/jigsaw-toxic-comment-classification-challenge' }
		]
	}
	else if (dtp=='201917')
	{
		dp = [                                         
			{ y: 5, label:  'fasttext.cc' }
		]
	}
	else if (dtp=='201918')
	{
		dp = [                                         
			{ y: 2, label:  'tanbih.qcri.org' },
			{ y: 9, label:  'alt.qcri.org' }
		]
	}
	else if (dtp=='201919')
	{
		dp = [                                         
			{ y: 34, label:  'sites.google.com' },
			{ y: 2, label: 'docs.google.com' },
			{ y: 7, label:  'code.google.com' }
		]
	}
	else
	{
		dp = [                                         
			{ y: 2, label: 'sayak'}
			
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