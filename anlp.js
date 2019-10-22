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
				{ y: 33, x: new Date(1983,0) },
				{ y: 34, x: new Date(1988,0) },
				{ y: 47, x: new Date(1992,0) },            
				{ y: 47, x: new Date(1994,0) },
				{ y: 77, x: new Date(1997,0) },
				{ y: 89, x: new Date(2000,0) }
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
				{ y: 0, x: new Date(1983,0) },
				{ y: 0.047619047619047616, x: new Date(1988,0) },
				{ y: 0.05970149253731343, x: new Date(1992,0) },            
				{ y: 0.09574468085106383, x: new Date(1994,0) },
				{ y: 0.07881773399014778, x: new Date(1997,0) },
				{ y: 0.21428571428571427, x: new Date(2000,0) }
		]
		},
		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "New Authors",
			color: "#e3f702",
			dataPoints: [   
				{ y: 1.0, x: new Date(1983,0) },
				{ y: 0.9523809523809523, x: new Date(1988,0) },     
				{ y: 0.9402985074626866, x: new Date(1992,0) },                       
				{ y: 0.9042553191489362, x: new Date(1994,0) },
				{ y: 0.9211822660098522, x: new Date(1997,0) },
				{ y: 0.7857142857142857, x: new Date(2000,0) }
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
			
			
			
			{ y: 0.515625, x: new Date(1983,0) },
			{ y: 0.53125, x: new Date(1988,0) },
			{ y: 0.34814814814814815, x: new Date(1992,0) },
			{ y: 0.46078431372549017, x: new Date(1994,0) },
			{ y: 0.3515981735159817, x: new Date(1997,0) },
			{ y: 0.4635416666666667, x: new Date(2000,0) }
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
			
		
			
			{ y: 1.9393939393939394, x: new Date(1983,0) },
			{ y: 1.8823529411764706, x: new Date(1988,0) },
			{ y: 2.872340425531915, x: new Date(1992,0) },
			{ y: 2.1702127659574466, x: new Date(1994,0) },
			{ y: 2.844155844155844, x: new Date(1997,0) },
			{ y:  2.157303370786517, x: new Date(2000,0) }
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
			name: "Short Papers",
			color: "#2200c9",
			dataPoints: [
			
			
			{ y: 1.45, x: new Date(1983,0) },
			{ y: 6.17, x: new Date(1988,0) },
			
			{ y: 4.91, x: new Date(1992,0) },
			{ y: 7.34, x: new Date(1994,0) },
			
			{ y: 6.48, x: new Date(1997,0) },
			{ y: 8.23, x: new Date(2000,0) }
			
			
			
			
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
		name: "ANLP: avg. number of URLs per Paper per Year",
		dataPoints: [
			
			
			
			{ y: 0, x: new Date(1983,0) },
			{ y: 0, x: new Date(1988,0) },
			
			{ y: 0, x: new Date(1992,0) },   
			{ y: 0, x: new Date(1994,0) },
			
			{ y: 0.285, x: new Date(1997,0) },
			{ y: 0.7, x: new Date(2000,0) }
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
		name: "ANLP: avg. number of URLs in Footnote per Paper per Year",
		dataPoints: [
			
			
			
			{ y: 0, x: new Date(1983,0) },
			{ y: 0, x: new Date(1988,0) },
			
			{ y: 0, x: new Date(1992,0) },   
			{ y: 0, x: new Date(1994,0) },
			
			{ y: 0, x: new Date(1997,0) },
			{ y: 0, x: new Date(2000,0) }
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
		name: "ANLP: avg. number of Tables per Paper per Year",
		dataPoints: [
			
			
			
			{ y: 0.27, x: new Date(1983,0) },
			{ y: 0.52, x: new Date(1988,0) },
			
			{ y: 0.74, x: new Date(1992,0) },   
			{ y: 0.85, x: new Date(1994,0) },
			
			{ y: 1.2, x: new Date(1997,0) },
			{ y: 2.22, x: new Date(2000,0) }
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
		name: "ANLP: avg. number of Figures per Paper per Year",
		dataPoints: [
			
			
			
			
			{ y: 1.63, x: new Date(1983,0) },
			{ y: 2.55, x: new Date(1988,0) },
			
			{ y: 2.17, x: new Date(1992,0) },   
			{ y: 2.38, x: new Date(1994,0) },
			
			{ y: 2.55, x: new Date(1997,0) },
			{ y: 3.38, x: new Date(2000,0) }
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
		name: "ANLP: Most Popular primary URL domains & their Frequencies",
		legendText: "",
		dataPoints: [ 
			{ y: 2,label: 'nist.gov' },
			{ y: 3, label: 'www.ling.helsinki.fi' },   
			{ y: 2,  label: 'www.muc.saic.com' },
			{ y: 2,  label: 'www.hum.uva.nl'  },
			{ y: 2,  label: 'lcg-www.uia.ac.be' },
			{ y: 2, label: 'www.coli.uni-sb.de' },
			{ y: 1,  label: 'www.cse.ogi.edu' },
			{ y: 1, label: 'www-lsi.upc.es' },
			{ y: 1,  label: 'research.microsoR.com' },
			{ y: 1,  label: 'xxx.lanl.gov' },
			{ y: 1,  label: 'www.info.unicaen.fr' },
			{ y: 1,  label: 'www.logos-ca.com' },
			{ y: 1, label: 'www.research.microsoft.com ' },
			{ y: 1,  label: 'www.sra.com' },
			{ y: 1,  label: 'www.clis.umd.edu' },
			{ y: 1, label: 'sunrain.net' },
			{ y: 1,  label: 'www.readworld.com' },
			{ y: 1,  label: 'www.mindspring.com' },
			{ y: 1,  label: 'www.ida.liu.se' },
			{ y: 1,  label: 'cslu.cse.ogi.edu' }
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
		name: "ANLP : Top Unique GitHub Pages",
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
		name: "ANLP : Top University Pages",
		legendText: "",
		dataPoints: [   
			{ y: 5, label: 'NYU' },
			{ y: 7,  label: 'Penn Museum' },
			{ y: 3,  label: 'The Grand Garage' },
			{ y: 3,  label: 'Helsingin yliopisto' },
			{ y: 10, label: 'Carnegie Mellon University Silicon Valley' },
			{ y: 10,label: 'Cat B - University Car Park' },
			{ y: 7,  label: 'Columbia University' },
			{ y: 6,  label: 'University of Edinburgh' }, 
			{ y: 4,  label: 'Institutt for datateknikk og informasjonsvitenskap' },
			{ y: 3, label: 'The MITRE Corporation' },
			{ y: 3,  label: 'West Balcones Center Drive' },
			{ y: 3,  label: 'Van Pelt Library' },
			{ y: 3,  label: 'University of Central Florida' },
			{ y: 3, label: 'New Mexico State University' },
			{ y: 3,  label: 'University of Sussex' },
			{ y: 3, label: 'University of Southern California' },
			{ y: 3,  label: 'Southern Methodist University' }
			
		
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
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		if (dt==1997)
		{
		
		dp = [                                         
			{ y: 3, label: 'helsinki.fi' },                                             
			{ y: 1, label: 'ogi.edu' },
			{ y: 1, label: 'upc.es' },
			{ y: 1, label: 'research.microsoR.com' },
			{ y: 1, label: 'xxx.lanl.gov' },
			{ y: 1, label: 'unicaen.fr' },
			{ y: 1, label: 'logos-ca.com' },
			{ y: 1, label: 'research.microsoft.com' },
			{ y: 1, label: 'www.sra.com' }
			
		]
		}
		
		else if(dt==2000)
		{
			dp = [     
			{ y: 3, label: 'nist.gov' },
			{ y: 2, label: 'saic.com' },
			{ y: 2, label: 'hum.uva.nl' },
			{ y: 2, label: 'uia.ac.be' },
			{ y: 2, label: 'uni-sb.de' },
			{ y: 1, label: 'clis.umd.edu' },
			{ y: 1, label:  'sunrain.net' },
			{ y: 1, label: 'readworld.com' },
			{ y: 1, label: 'mindspring.com' },
			{ y: 1, label: 'liu.se' },
			{ y: 1, label: 'www.pitt' },
			{ y: 1, label: 'ogi.edu' },
			{ y: 1, label: 'nuance.com' },
			{ y: 1, label: 'nasa.gov' },
			{ y: 1, label: 'sgi.com' },
			{ y: 1, label: 'sun.com' },
			{ y: 1, label: 'nyu.edu' },            
			{ y: 1, label: 'jussieu.fr' },
			{ y: 1, label: 'onelook.com' },
			{ y: 1, label: 'jstor.org' }
			
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
			{ y: 3, label: 'www.ling.helsinki.fi' }
			
		]
	}
	else if (dtp=='19971')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cse.ogi.edu/CHCC' }
			
		]
	}else if (dtp=='19972')
	{
		dp = [                                         
			{ y: 1, label: 'http://www-lsi.upc.es/-lluisp/anlp97.html' }
			
		]
	}
	else if (dtp=='19973')
	{
		dp = [                                         
			{ y: 1, label: 'http://research.microsoR.com/research/nlp' }
			
		]
	}
	else if (dtp=='19974')
	{
		dp = [                                         
			{ y: 1, label: 'http://xxx.lanl.gov/list/cmp.lg/9410026' }
			
		]
	}
	else if (dtp=='19975')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.info.unicaen.fr/~iguet' }
			
		]
	}
	else if (dtp=='19976')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.logos-ca.com' }
			
		]
	}
	else if (dtp=='19977')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.research.microsoft.com/' }
			
		]
	}
	else if (dtp=='19978')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.sra.com' }
			
		]
	}
	else if (dtp=='20000')
	{
		dp = [                                         
			{ y: 2, label: 'trec.nist.gov' },
			{ y: 1, label: 'http://www-nlpir.nist.gov/related-' }
			
		]
	}
	else if (dtp=='20001')
	{
		dp = [                                         
			{ y: 2, label: 'www.muc.saic.com' }
			
		]
	}
	else if (dtp=='20002')
	{
		dp = [                                         
			{ y: 2, label: 'www.hum.uva.nl' }
			
		]
	}
	else if (dtp=='20003')
	{
		dp = [                                         
			{ y: 2, label: 'lcg-www.uia.ac.be' }
			
		]
	}
	else if (dtp=='20004')
	{
		dp = [                                         
			{ y: 2, label: 'www.coli.uni-sb.de' }
			
		]
	}
	else if (dtp=='20005')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.clis.umd.edu/dlrg/filter/sss/papers' }
			
		]
	}
	else if (dtp=='20006')
	{
		dp = [                                         
			{ y: 1, label: 'http://sunrain.net/r_ecdict' }
			
		]
	}else if (dtp=='20007')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.readworld.com/translate.htm' }
			
		]
	}else if (dtp=='20008')
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
			{ y: 1, label: 'http://www.pitt' }
			
		]
	}
	else if (dtp=='200011')
	{
		dp = [                                         
			{ y: 1, label: 'http://cslu.cse.ogi.edu/HLTsurvey/HLTsurvey.html' }
			
		]
	}
	else if (dtp=='200012')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.nuance.com' }
			
		]
	}
	else if (dtp=='200013')
	{
		dp = [                                         
			{ y: 1, label: 'http://ic.arc.nasa.gov/ic/psa/' }
			
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
	}else if (dtp=='200019')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.jstor.org/' }
			
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