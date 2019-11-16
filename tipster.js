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
		name: "TIPSTER: Long Papers",
		dataPoints: [
		
		
				{ y: 13, x: new Date(1993,0) },
				{ y: 19, x: new Date(1996,0) },
				{ y: 12, x: new Date(1998,0) }
				
				
		]
		},
		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Short Papers",
			color: "#e3f702",
			dataPoints: [
			
			
			
				{ y: 11, x: new Date(1993,0) },
				{ y: 42, x: new Date(1996,0) },
				{ y: 19, x: new Date(1998,0) }
			]
		},
		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Demo Paper",
			color: "#f70202",
			dataPoints: [
				{ y: 0, x: new Date(1993,0) },
				{ y: 0, x: new Date(1996,0) },
				{ y: 0, x: new Date(1998,0) }
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
		name: "TIPSTER: Old Authors",
		dataPoints: [
		
				{ y: 0.0, x: new Date(1993,0) },
				{ y: 0.15730337078651685, x: new Date(1996,0) },
				{ y: 0.2835820895522388, x: new Date(1998,0) }
				
				
		]
		},
		
		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "New Authors",
			color: "#f70202",
			dataPoints: [
			
			
			
				{ y: 1.0, x: new Date(1993,0) },
				{ y: 0.8426966292134831, x: new Date(1996,0) },
				{ y: 0.7164179104477612, x: new Date(1998,0) }
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
		name: "TIPSTER: Avg. number of Papers per Author",
		dataPoints: [
			
			
			
			{ y:0.36363636363636365, x: new Date(1993,0) },
			{ y:0.488, x: new Date(1996,0) },
			{ y:0.40789473684210525, x: new Date(1998,0) }
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
		name: "TIPSTER: Avg. number of Authors per Paper per Year",
		dataPoints: [
			
			
			
			{ y:2.75, x: new Date(1993,0) },
			{ y:2.0491803278688523, x: new Date(1996,0) },
			{ y:2.4516129032258065, x: new Date(1998,0) }
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
		name: "TIPSTER: Long Papers",
		dataPoints: [
			
			
			
			{ y:7.153846153846154, x: new Date(1993,0) },
			{ y:2.5789473684210527, x: new Date(1996,0) },
			{ y:12.333333333333334, x: new Date(1998,0) }
		]
		},


		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Short Papers",
			color: "#C00C0C",
			dataPoints: [
			
			
			
			
			
			{ y:1.1818181818181819, x: new Date(1993,0) },
			{ y:1.4761904761904763, x: new Date(1996,0) },
			{ y:1.6842105263157894, x: new Date(1998,0) }
			
			
			
			
			]
		},
		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Demo Papers",
			color: "#309000",
			dataPoints: [
			
			
			
			
			
			{ y:0, x: new Date(1993,0) },
			{ y:0, x: new Date(1996,0) },
			{ y:0, x: new Date(1998,0) }
			
			
			
			
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
		name: "TIPSTER: URLs per Paper 1993-1998",
		dataPoints: [
			
			
			
			{ y:0.0, x: new Date(1993,0) },
			{ y:0.18032786885245902, x: new Date(1996,0) },
			{ y:0.3870967741935484, x: new Date(1998,0) }
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
		name: "TIPSTER : Avg. number of URLs in footnote per Paper per Year",
		dataPoints: [
			
			
			
			{ y:0.0, x: new Date(1993,0) },
			{ y:0.0, x: new Date(1996,0) },
			{ y:0.0, x: new Date(1998,0) }
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
		name: "TIPSTER : Avg. number of Tables per Paper per Year",
		dataPoints: [
			
			
			
			{ y:3.0416666666666665, x: new Date(1993,0) },
			{ y:0.8524590163934426, x: new Date(1996,0) },
			{ y:1.032258064516129, x: new Date(1998,0) }
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
		name: "TIPSTER : Avg. number of Figures per Paper per Year",
		dataPoints: [
			
			
			
			{ y:5.291666666666667, x: new Date(1993,0) },
			{ y:1.901639344262295, x: new Date(1996,0) },
			{ y:2.5483870967741935, x: new Date(1998,0) }
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
		name: "TIPSTER : Most Popular primary URL domains & their Frequencies",
		legendText: "",
		dataPoints: [
			{ y:2,  label:'www.tipster.org'  },
			{ y:1,  label:'www.yahoo.com'  },
			{ y:1,  label:'www.lycos.com'  },
			{ y:1,  label:'altavista.digital.corrg'  },
			{ y:1,  label:'websom.hut.fffwebsom'  },
			{ y:1,  label:'crl.nmsu.edu'  },
			{ y:1,  label:'www.sra.com'  },
			{ y:1,  label:'www.ai.sri.com'  },
			{ y:1,  label:'gopher.sil.org'  },
			{ y:1,  label:'www.tipster.orJ'  },
			{ y:1,  label:'www.nytimes.com'  },
			{ y:1,  label:'www.archive.org'  }
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
		name: "TIPSTER : Top Unique GitHub Pages",
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
		name: "TIPSTER : Top University Pages",
		legendText: "",
		dataPoints: [
			{ y: 1, label:'Building 11' },
			{ y: 1, label:'Bailey Hall' },
			{ y: 1, label:'Penn Museum' },
			{y: 10, label:'Department of Defense' },
			{ y: 7, label:'National Institute of Standards and Technology' },
			{ y: 7, label:'Office of Research and Development' },
			{ y: 7, label:'Lockheed Corporate Offices, At Tahrir, Amanat Al' },
			{ y: 7, label:'New York University' },
			{ y: 3, label:'New Mexico State University' },
			{ y: 2, label:'Cold Spring Orchard' },
			{ y: 2, label:'Science Applications International Corporation' },
			{ y: 2, label:'Center for Science and Technology' },
			{ y: 2, label:'National Taiwan University' },
			{ y: 2, label:'Institute of Scientific Information on Social Sciences of the Russian Academy of Sciences' },
			{ y: 1, label:'Defense Advanced Research Projects Agency' },
			{ y: 1, label:'University of Massachusetts Amherst' },
			{ y: 1, label:'Syracuse University' },
			{ y: 1, label:'D Building, Institute of Physics, Chinese Academy of Sciences' },
			{ y: 1, label:'University of Sheffield' },
			{ y: 1, label:'University of Surrey' }
			
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
		
		
		
		if(dt==1996)
		{
			dp= [  
				{ y:1, label: 'tipster.org' },
				{ y:1, label: 'yahoo.com' },
				{ y:1, label: 'lycos.com' },
				{ y:1, label: 'digital.corrg' },
				{ y:1, label: 'hut.fffwebsom' },
				{ y:1, label: 'nmsu.edu' },
				{ y:1, label: 'sra.com' }
			
			
		]
		}
		else if(dt==1998)
		{
			dp= [  
				{ y:1, label: 'sri.com' },
				{ y:1, label: 'tipster.org' },
				{ y:1, label: 'sil.org' },
				{ y:1, label: 'nytimes.com' },
				{ y:1, label: 'archive.org' }
			
			
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
	
	
	
	if (dtp=='19960')
	{
		dp = [                                         
			
			{ y:1, label: 'http://www.tipster.org' }
			
		]
	}
	else if (dtp=='19961')
	{
		dp = [                                         
			{ y:1, label: 'http://www.yahoo.com/' }
			
		]
	}
	else if (dtp=='19962')
	{
		dp = [                                         
			{ y:1, label: 'http://www.lycos.com/' }
			
		]
	}
	else if (dtp=='19963')
	{
		dp = [                                         
			
			{ y:1, label: 'http://altavista.digital.corrg' }
		]
	}
	else if (dtp=='19964')
	{
		dp = [                                         
			
			{ y:1, label: 'http://websom.hut.fffwebsom/' }
		]
	}
	else if (dtp=='19965')
	{
		dp = [                                         
			{ y:1, label: 'http://crl.nmsu.edu/ANG/ML/ml.html' }
			
		]
	}
	else if (dtp=='19966')
	{
		dp = [                                         
			{ y:1, label: 'http://www.sra.com' }
			
		]
	}
	else if (dtp=='19980')
	{
		dp = [                                         
			
			{ y:1, label: 'http://www.ai.sri.com/-appelt/TextPro/' }
		]
	}
	else if (dtp=='19981')
	{
		dp = [                                         
			
			{ y:1, label: 'http://www.tipster.org/summcall.htm'}
		]
	}
	else if (dtp=='19982')
	{
		dp = [                                         
			
			{ y:1, label: 'http://gopher.sil.org/sgml/metadata.html' }
		]
	}
	else if (dtp=='19983')
	{
		dp = [                                         
			
			{ y:1, label: 'http://www.nytimes.com' }
		]
	}
	else if (dtp=='19984')
	{
		dp = [  
			{ y:1, label: 'http://www.archive.org' }		
			
			
		]
	}
	else
	{
		dp = [                                         
			
			
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