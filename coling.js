window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
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
			
			
			{ y: 17, x: new Date(1965,0) },
			{ y: 28, x: new Date(1967,0) },
			{ y: 1, x: new Date(1969,0) },
			{ y: 17, x: new Date(1973,0) },
			{ y: 43, x: new Date(1980,0) },
			{ y: 12, x: new Date(1982,0) },
			{ y: 2, x: new Date(1986,0) },
			{ y: 1, x: new Date(1988,0) },
			{ y: 2, x: new Date(1990,0) },
			{ y: 3, x: new Date(1992,0) },
			{ y: 6, x: new Date(1994,0) },
			{ y: 6, x: new Date(1998,0) },
			{ y: 1, x: new Date(2000,0) },
			{ y: 1, x: new Date(2002,0) },
			{ y: 4, x: new Date(2004,0) },
			{ y: 0, x: new Date(2006,0) },
			{ y: 145, x: new Date(2008,0) },
			{ y: 154, x: new Date(2010,0) },
			{ y: 194, x: new Date(2012,0) },
			{ y: 217, x: new Date(2014,0) },
			{ y: 335, x: new Date(2016,0) },
			{ y: 326, x: new Date(2018,0) }
		]
		},


		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Short Papers",
			color: "#e3f702",
			dataPoints: [
			
			
			
			
			{ y: 7, x: new Date(1965,0) },
			{ y: 9, x: new Date(1967,0) },
			{ y: 94, x: new Date(1969,0) },
			{ y: 13, x: new Date(1973,0) },
			{ y: 50, x: new Date(1980,0) },
			{ y: 57, x: new Date(1982,0) },
			{ y: 154, x: new Date(1986,0) },
			{ y: 82, x: new Date(1988,0) },
			{ y: 25, x: new Date(1990,0) },
			{ y: 61, x: new Date(1992,0) },
			{ y: 98, x: new Date(1994,0) },
			{ y: 111, x: new Date(1998,0) },
			{ y: 84, x: new Date(2000,0) },
			{ y: 169, x: new Date(2002,0) },
			{ y: 200, x: new Date(2004,0) },
			{ y: 147, x: new Date(2006,0) },
			{ y: 0, x: new Date(2008,0) },
			{ y: 1, x: new Date(2010,0) },
			{ y: 0, x: new Date(2012,0) },
			{ y: 4, x: new Date(2014,0) },
			{ y: 2, x: new Date(2016,0) },
			{ y: 4, x: new Date(2018,0) }
			
			
			
			
			]
	},
	{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Demo Papers",
			color: "#f70202",
			dataPoints: [
			
			
			
			
			{ y: 7, x: new Date(1965,0) },
			{ y: 9, x: new Date(1967,0) },
			{ y: 94, x: new Date(1969,0) },
			{ y: 13, x: new Date(1973,0) },
			{ y: 50, x: new Date(1980,0) },
			{ y: 57, x: new Date(1982,0) },
			{ y: 154, x: new Date(1986,0) },
			{ y: 82, x: new Date(1988,0) },
			{ y: 25, x: new Date(1990,0) },
			{ y: 61, x: new Date(1992,0) },
			{ y: 98, x: new Date(1994,0) },
			{ y: 111, x: new Date(1998,0) },
			{ y: 84, x: new Date(2000,0) },
			{ y: 169, x: new Date(2002,0) },
			{ y: 200, x: new Date(2004,0) },
			{ y: 147, x: new Date(2006,0) },
			{ y: 0, x: new Date(2008,0) },
			{ y: 1, x: new Date(2010,0) },
			{ y: 0, x: new Date(2012,0) },
			{ y: 4, x: new Date(2014,0) },
			{ y: 2, x: new Date(2016,0) },
			{ y: 4, x: new Date(2018,0) }
			
			
			
			
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
		name: "Old Authors",
		dataPoints: [
			
			
			{ y: 0.0, x: new Date(1965,0) },
			{ y: 0.08, x: new Date(1967,0) },
			{ y: 0.10434782608695652, x: new Date(1969,0) },
			{ y: 0.011627906976744186, x: new Date(1973,0) },
			{ y: 0.03289473684210526, x: new Date(1980,0) },
			{ y: 0.11061946902654868, x: new Date(1982,0) },
			{ y: 0.13307984790874525, x: new Date(1986,0) },
			{ y: 0.13541666666666666, x: new Date(1988,0) },
			{ y: 0.19753086419753085, x: new Date(1990,0) },
			{ y: 0.17302798982188294, x: new Date(1992,0) },
			{ y: 0.23076923076923078, x: new Date(1994,0) },
			{ y: 0.23483365949119372, x: new Date(1998,0) },
			{ y: 0.3333333333333333, x: new Date(2000,0) },
			{ y: 0.32044198895027626, x: new Date(2002,0) },
			{ y: 0.3389121338912134, x: new Date(2004,0) },
			{ y: 0.34195402298850575, x: new Date(2006,0) },
			{ y: 0.3900523560209424, x: new Date(2008,0) },
			{ y: 0.31072210065645517, x: new Date(2010,0) },
			{ y: 0.26627218934911245, x: new Date(2012,0) },
			{ y: 0.33706293706293705, x: new Date(2014,0) },
			{ y: 0.19870967741935483, x: new Date(2016,0) },
			{ y: 0.23266666666666666, x: new Date(2018,0) }
		]
		},


		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "New Authors",
			color: "#e83407",
			dataPoints: [
			
			
			
			
			{ y: 1.0, x: new Date(1965,0) },
			{ y: 0.92, x: new Date(1967,0) },
			{ y: 0.8956521739130435, x: new Date(1969,0) },
			{ y: 0.9883720930232558, x: new Date(1973,0) },
			{ y: 0.9671052631578947, x: new Date(1980,0) },
			{ y: 0.8893805309734514, x: new Date(1982,0) },
			{ y: 0.8669201520912547, x: new Date(1986,0) },
			{ y: 0.8645833333333334, x: new Date(1988,0) },
			{ y: 0.8024691358024691, x: new Date(1990,0) },
			{ y: 0.8269720101781171, x: new Date(1992,0) },
			{ y: 0.7692307692307693, x: new Date(1994,0) },
			{ y: 0.7651663405088063, x: new Date(1998,0) },
			{ y: 0.6666666666666666, x: new Date(2000,0) },
			{ y: 0.6795580110497238, x: new Date(2002,0) },
			{ y: 0.6610878661087866, x: new Date(2004,0) },
			{ y: 0.6580459770114943, x: new Date(2006,0) },
			{ y: 0.6099476439790575, x: new Date(2008,0) },
			{ y: 0.6892778993435449, x: new Date(2010,0) },
			{ y: 0.7337278106508875, x: new Date(2012,0) },
			{ y: 0.6629370629370629, x: new Date(2014,0) },
			{ y: 0.8012903225806451, x: new Date(2016,0) },
			{ y: 0.7673333333333333, x: new Date(2018,0) }
			
			
			
			
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
			
			
			{ y:0.75, x: new Date(1965,0) },
			{ y:0.7254901960784313, x: new Date(1967,0) },
			{ y:0.7851239669421488, x: new Date(1969,0) },
			{ y:0.6813186813186813, x: new Date(1973,0) },
			{ y:0.58125, x: new Date(1980,0) },
			{ y:0.6153846153846154, x: new Date(1982,0) },
			{ y:0.5512367491166078, x: new Date(1986,0) },
			{ y:0.5490196078431373, x: new Date(1988,0) },
			{ y:0.591304347826087, x: new Date(1990,0) },
			{ y:0.5178997613365155, x: new Date(1992,0) },
			{ y:0.4700665188470067, x: new Date(1994,0) },
			{ y:0.4377224199288256, x: new Date(1998,0) },
			{ y:0.41371158392434987, x: new Date(2000,0) },
			{ y:0.4106280193236715, x: new Date(2002,0) },
			{ y:0.37988826815642457, x: new Date(2004,0) },
			{ y:0.36117936117936117, x: new Date(2006,0) },
			{ y:0.3584474885844749, x: new Date(2008,0) },
			{ y:0.3281853281853282, x: new Date(2010,0) },
			{ y:0.3144578313253012, x: new Date(2012,0) },
			{ y:0.3007246376811594, x: new Date(2014,0) },
			{ y:0.21960569550930997, x: new Date(2016,0) },
			{ y:0.21159420289855072, x: new Date(2018,0) }
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
		name: "Avg number of Authors per Paper",
		dataPoints: [
			
			
			{ y:1.3333333333333333, x: new Date(1965,0) },
			{ y:1.3783783783783783, x: new Date(1967,0) },
			{ y:1.2736842105263158, x: new Date(1969,0) },
			{ y:1.467741935483871, x: new Date(1973,0) },
			{ y:1.7204301075268817, x: new Date(1980,0) },
			{ y:1.625, x: new Date(1982,0) },
			{ y:1.814102564102564, x: new Date(1986,0) },
			{ y:1.8214285714285714, x: new Date(1988,0) },
			{ y:1.6911764705882353, x: new Date(1990,0) },
			{ y:1.9308755760368663, x: new Date(1992,0) },
			{ y:2.1273584905660377, x: new Date(1994,0) },
			{ y:2.2845528455284554, x: new Date(1998,0) },
			{ y:2.4171428571428573, x: new Date(2000,0) },
			{ y:2.4352941176470586, x: new Date(2002,0) },
			{ y:2.6323529411764706, x: new Date(2004,0) },
			{ y:2.7687074829931975, x: new Date(2006,0) },
			{ y:2.789808917197452, x: new Date(2008,0) },
			{ y:3.0470588235294116, x: new Date(2010,0) },
			{ y:3.1800766283524906, x: new Date(2012,0) },
			{ y:3.325301204819277, x: new Date(2014,0) },
			{ y:4.553615960099751, x: new Date(2016,0) },
			{ y:4.726027397260274, x: new Date(2018,0) }
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
			
			
			{ y:1.7058823529411764, x: new Date(1965,0) },
			{ y:0.21428571428571427, x: new Date(1967,0) },
			{ y:0.0, x: new Date(1969,0) },
			{ y:1.5294117647058822, x: new Date(1973,0) },
			{ y:0.8604651162790697, x: new Date(1980,0) },
			{ y:2.1666666666666665, x: new Date(1982,0) },
			{ y:27.5, x: new Date(1986,0) },
			{ y:0.0, x: new Date(1988,0) },
			{ y:0.0, x: new Date(1990,0) },
			{ y:2.3333333333333335, x: new Date(1992,0) },
			{ y:3.5, x: new Date(1994,0) },
			{ y:18.5, x: new Date(1998,0) },
			{ y:0.0, x: new Date(2000,0) },
			{ y:36.0, x: new Date(2002,0) },
			{ y:17.0, x: new Date(2004,0) },
			{ y:0, x: new Date(2006,0) },
			{ y:23.24137931034483, x: new Date(2008,0) },
			{ y:21.616883116883116, x: new Date(2010,0) },
			{ y:42.922680412371136, x: new Date(2012,0) },
			{ y:27.474654377880185, x: new Date(2014,0) },
			{ y:29.47462686567164, x: new Date(2016,0) },
			{ y:34.16257668711656, x: new Date(2018,0) }
		]
		},


		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Short Papers",
			color: "#C00C0C",
			dataPoints: [
			
			
			
			
			{ y:6.285714285714286, x: new Date(1965,0) },
			{ y:0.0, x: new Date(1967,0) },
			{ y:0.6170212765957447, x: new Date(1969,0) },
			{ y:0.0, x: new Date(1973,0) },
			{ y:0.34, x: new Date(1980,0) },
			{ y:2.245614035087719, x: new Date(1982,0) },
			{ y:3.1233766233766236, x: new Date(1986,0) },
			{ y:4.951219512195122, x: new Date(1988,0) },
			{ y:4.64, x: new Date(1990,0) },
			{ y:10.245901639344263, x: new Date(1992,0) },
			{ y:3.9183673469387754, x: new Date(1994,0) },
			{ y:13.252252252252251, x: new Date(1998,0) },
			{ y:8.273809523809524, x: new Date(2000,0) },
			{ y:10.727810650887575, x: new Date(2002,0) },
			{ y:14.54, x: new Date(2004,0) },
			{ y:19.068027210884352, x: new Date(2006,0) },
			{ y:0, x: new Date(2008,0) },
			{ y:18.0, x: new Date(2010,0) },
			{ y:0, x: new Date(2012,0) },
			{ y:1.0, x: new Date(2014,0) },
			{ y:25.0, x: new Date(2016,0) },
			{ y:25.75, x: new Date(2018,0) }
			
			
			
			
			]
	},
	{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Demo Papers",
			color: "#309000",
			dataPoints: [
			
			
			
			
			{ y:0, x: new Date(1965,0) },
			{ y:0, x: new Date(1967,0) },
			{ y:0, x: new Date(1969,0) },
			{ y:0.375, x: new Date(1973,0) },
			{ y:0, x: new Date(1980,0) },
			{ y:0.32, x: new Date(1982,0) },
			{ y:0, x: new Date(1986,0) },
			{ y:3.7176470588235295, x: new Date(1988,0) },
			{ y:5.790960451977401, x: new Date(1990,0) },
			{ y:8.117647058823529, x: new Date(1992,0) },
			{ y:7.2592592592592595, x: new Date(1994,0) },
			{ y:9.821705426356589, x: new Date(1998,0) },
			{ y:9.222222222222221, x: new Date(2000,0) },
			{ y:0, x: new Date(2002,0) },
			{ y:0, x: new Date(2004,0) },
			{ y:0, x: new Date(2006,0) },
			{ y:6.916666666666667, x: new Date(2008,0) },
			{ y:6.466666666666667, x: new Date(2010,0) },
			{ y:21.746268656716417, x: new Date(2012,0) },
			{ y:8.964285714285714, x: new Date(2014,0) },
			{ y:10.28125, x: new Date(2016,0) },
			{ y:11.028571428571428, x: new Date(2018,0) }
			
			
			
			
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
		name: "COLING URLs per Paper 1965-2018 Click on bar for primary domains",
		dataPoints: [
			
			
			{ y:0.0, x: new Date(1965,0) },
			{ y:0.0, x: new Date(1967,0) },
			{ y:0.0, x: new Date(1969,0) },
			{ y:0.0, x: new Date(1973,0) },
			{ y:0.0, x: new Date(1980,0) },
			{ y:0.0, x: new Date(1982,0) },
			{ y:0.0, x: new Date(1986,0) },
			{ y:0.0, x: new Date(1988,0) },
			{ y:0.0, x: new Date(1990,0) },
			{ y:0.0, x: new Date(1992,0) },
			{ y:0.0, x: new Date(1994,0) },
			{ y:0.3780487804878049, x: new Date(1998,0) },
			{ y:0.3314285714285714, x: new Date(2000,0) },
			{ y:1.0411764705882354, x: new Date(2002,0) },
			{ y:1.3186274509803921, x: new Date(2004,0) },
			{ y:1.7006802721088434, x: new Date(2006,0) },
			{ y:3.267515923566879, x: new Date(2008,0) },
			{ y:2.6823529411764704, x: new Date(2010,0) },
			{ y:3.4406130268199235, x: new Date(2012,0) },
			{ y:4.534136546184739, x: new Date(2014,0) },
			{ y:4.12219451371571, x: new Date(2016,0) },
			{ y:4.739726027397261, x: new Date(2018,0) }
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
		name: "COLING : Avg. number of URLs in footnote per Paper per Year",
		dataPoints: [
			
			
			{ y:0.0, x: new Date(1965,0) },
			{ y:0.0, x: new Date(1967,0) },
			{ y:0.0, x: new Date(1969,0) },
			{ y:0.0, x: new Date(1973,0) },
			{ y:0.0, x: new Date(1980,0) },
			{ y:0.0, x: new Date(1982,0) },
			{ y:0.0, x: new Date(1986,0) },
			{ y:0.0, x: new Date(1988,0) },
			{ y:0.0, x: new Date(1990,0) },
			{ y:0.0, x: new Date(1992,0) },
			{ y:0.0, x: new Date(1994,0) },
			{ y:0.0, x: new Date(1998,0) },
			{ y:0.05714285714285714, x: new Date(2000,0) },
			{ y:0.18235294117647058, x: new Date(2002,0) },
			{ y:0.39215686274509803, x: new Date(2004,0) },
			{ y:0.6054421768707483, x: new Date(2006,0) },
			{ y:0.7197452229299363, x: new Date(2008,0) },
			{ y:1.1235294117647059, x: new Date(2010,0) },
			{ y:1.0153256704980842, x: new Date(2012,0) },
			{ y:1.144578313253012, x: new Date(2014,0) },
			{ y:1.3915211970074812, x: new Date(2016,0) },
			{ y:1.6136986301369862, x: new Date(2018,0) }
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
		name: "COLING : Avg. number of Tables per Paper per Year",
		dataPoints: [
			
			
			{ y:0.7058823529411765, x: new Date(1965,0) },
			{ y:0.2702702702702703, x: new Date(1967,0) },
			{ y:0.5108695652173914, x: new Date(1969,0) },
			{ y:0.3387096774193548, x: new Date(1973,0) },
			{ y:1.010752688172043, x: new Date(1980,0) },
			{ y:0.19444444444444445, x: new Date(1982,0) },
			{ y:0.23717948717948717, x: new Date(1986,0) },
			{ y:0.23809523809523808, x: new Date(1988,0) },
			{ y:0.11274509803921569, x: new Date(1990,0) },
			{ y:0.423963133640553, x: new Date(1992,0) },
			{ y:0.8443396226415094, x: new Date(1994,0) },
			{ y:1.7113821138211383, x: new Date(1998,0) },
			{ y:1.2882352941176471, x: new Date(2000,0) },
			{ y:2.0, x: new Date(2002,0) },
			{ y:2.872549019607843, x: new Date(2004,0) },
			{ y:3.8219178082191783, x: new Date(2006,0) },
			{ y:3.638709677419355, x: new Date(2008,0) },
			{ y:3.6568047337278107, x: new Date(2010,0) },
			{ y:4.582375478927203, x: new Date(2012,0) },
			{ y:3.629032258064516, x: new Date(2014,0) },
			{ y:3.7975, x: new Date(2016,0) },
			{ y:4.5479452054794525, x: new Date(2018,0) }
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
		name: "COLING : Avg. number of Figures per Paper per Year",
		dataPoints: [
			
			
			{ y:0.23529411764705882, x: new Date(1965,0) },
			{ y:0.3783783783783784, x: new Date(1967,0) },
			{ y:0.782608695652174, x: new Date(1969,0) },
			{ y:1.6290322580645162, x: new Date(1973,0) },
			{ y:1.989247311827957, x: new Date(1980,0) },
			{ y:0.5763888888888888, x: new Date(1982,0) },
			{ y:0.9871794871794872, x: new Date(1986,0) },
			{ y:1.755952380952381, x: new Date(1988,0) },
			{ y:1.4509803921568627, x: new Date(1990,0) },
			{ y:2.0092165898617513, x: new Date(1992,0) },
			{ y:2.1462264150943398, x: new Date(1994,0) },
			{ y:2.569105691056911, x: new Date(1998,0) },
			{ y:2.276470588235294, x: new Date(2000,0) },
			{ y:2.242603550295858, x: new Date(2002,0) },
			{ y:2.6470588235294117, x: new Date(2004,0) },
			{ y:3.1232876712328768, x: new Date(2006,0) },
			{ y:2.4387096774193546, x: new Date(2008,0) },
			{ y:2.6923076923076925, x: new Date(2010,0) },
			{ y:3.1724137931034484, x: new Date(2012,0) },
			{ y:2.6048387096774195, x: new Date(2014,0) },
			{ y:2.855, x: new Date(2016,0) },
			{ y:3.1123287671232878, x: new Date(2018,0) }
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
		name: "COLING : Most Popular primary URL domains & their Frequencies",
		legendText: "",
		dataPoints: [
			{ y:26,  label:'arxiv.org'  },
			{ y:591,  label:'github.com'  },
			{ y:552,  label:'creativecommons.org'  },
			{ y:121,  label:'code.google.com'  },
			{ y:106,  label:'nlp.stanford.edu'  },
			{ y:83,  label:'en.wikipedia.org'  },
			{ y:56,  label:'www.statmt.org'  },
			{ y:40,  label:'www.csie.ntu.edu.tw'  },
			{ y:29,  label:'www.ldc.upenn.edu'  },
			{ y:29,  label:'sourceforge.net'  },
			{ y:29,  label:'catalog.ldc.upenn.edu'  },
			{ y:25,  label:'www.cis.upenn.edu'  },
			{ y:25,  label:'www.nist.gov'  },
			{ y:25,  label:'mallet.cs.umass.edu'  },
			{ y:24,  label:'lucene.apache.org'  },
			{ y:24,  label:'www.aclweb.org'  },
			{ y:24,  label:'dumps.wikimedia.org'  },
			{ y:23,  label:'svmlight.joachims.org'  },
			{ y:22,  label:'www.isi.edu'  },
			{ y:22,  label:'www.ukp.tu-darmstadt.de'  }
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
		name: "COLING : Top Unique GitHub Pages",
		legendText: "",
		dataPoints: [
			{ y: 2, label: 'clab/cnn' },
			{ y: 8, label: 'fchollet/keras' },
			{ y: 4, label: 'tensorflow/nmt' },
			{ y: 3, label: 'miso-belica/sumy' },
			{ y: 3, label: 'glample/tagger' },
			{ y: 3, label: 'cservan/METEOR-E' },
			{ y: 3, label: 'seomoz/word2gauss' },
			{ y: 3, label: 'mfaruqui/retrofitting' },
			{ y: 3, label: 'nyu-dl/dl4mt-tutorial/tree/master/session2' },
			{ y: 3, label: 'moses-smt/mosesdecoder/blob/master/scripts/generic/multi-bleu' },
			{ y: 3, label: 'tensorflow/tensor2tensor' },
			{ y: 3, label: 'facebookresearch/fastText/blob/master/pretrained-vectors.md' },
			{ y: 3, label: 'fkunneman/Product_' },
			{ y: 2, label: 'saffsd/langid.py' },
			{ y: 2, label: 'schwa-lab/libschwa' },
			{ y: 2, label: 'SussexCompSem/learninghypernyms' },
			{ y: 2, label: 'ai-ku/upos_2014' },
			{ y: 2, label: 'rjm49/multistage_segmenter' },
			{ y: 2, label: 'yandex/faster-rnnlm' }
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
		name: "COLING : Top University Pages",
		legendText: "",
		dataPoints: [  
			{ y: 10, label:'UdS' },
			{ y: 34, label:'Department of Computer Science' },
			{ y: 17, label:'Academia' },
			{ y: 16, label:'Penn Museum' },
			{ y: 15, label:'The University of Tokyo Kashiwa Campus' },
			{ y: 14, label:'Microsoft Research Asia' },
			{ y: 13, label:'Carnegie Mellon University Silicon Valley' },
			{ y: 11, label:'Academiegebouw' },
			{ y: 10, label:'IBM' },
			{ y: 9, label:'University of Edinburgh' },
			{ y: 8, label:'Kyoto University' },
			{ y: 7, label:'Dept.of Computer Science' },
			{ y: 7, label:'Institutt for datateknikk og informasjonsvitenskap' },
			{ y: 7, label:'Department of Linguistics' },
			{ y: 7, label:'University' },
			{ y: 7, label:'New Mexico State University' },
			{ y: 7, label:'R.O.C.' },
			{ y: 6, label:'Tokyo Institute of Technology' },
			{ y: 5, label:'C-26' },
			{ y: 5, label:'Brandeis University' }
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
			
			
			{ y: 5, x: new Date(1979,0) },
			{ y: 12, x: new Date(1980,0) },
			{ y: 9, x: new Date(1981,0) },
			{ y: 1, x: new Date(1982,0) },
			{ y: 1, x: new Date(1983,0) },
			{ y: 20, x: new Date(1984,0) },
			{ y: 7, x: new Date(1985,0) },
			{ y: 5, x: new Date(1986,0) },
			{ y: 7, x: new Date(1987,0) },
			{ y: 6, x: new Date(1988,0) },
			{ y: 24, x: new Date(1989,0) },
			{ y: 24, x: new Date(1990,0) },
			{ y: 24, x: new Date(1991,0) },
			{ y: 35, x: new Date(1992,0) },
			{ y: 29, x: new Date(1993,0) },
			{ y: 34, x: new Date(1994,0) },
			{ y: 29, x: new Date(1995,0) },
			{ y: 32, x: new Date(1996,0) },
			{ y: 46, x: new Date(1997,0) },
			{ y: 13, x: new Date(1998,0) },
			{ y: 21, x: new Date(1999,0) },
			{ y: 10, x: new Date(2000,0) },
			{ y: 9, x: new Date(2001,0) },
			{ y: 6, x: new Date(2002,0) },
			{ y: 9, x: new Date(2003,0) },
			{ y: 17, x: new Date(2004,0) },
			{ y: 16, x: new Date(2005,0) },
			{ y: 21, x: new Date(2006,0) },
			{ y: 18, x: new Date(2007,0) },
			{ y: 33, x: new Date(2008,0) },
			{ y: 36, x: new Date(2009,0) },
			{ y: 50, x: new Date(2010,0) },
			{ y: 57, x: new Date(2011,0) },
			{ y: 33, x: new Date(2012,0) },
			{ y: 60, x: new Date(2013,0) },
			{ y: 69, x: new Date(2014,0) },
			{ y: 59, x: new Date(2015,0) },
			{ y: 70, x: new Date(2016,0) },
			{ y: 72, x: new Date(2017,0) },
			{ y: 98, x: new Date(2018,0) }
		]
		},


		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "UK",
			color: "#e3f702",
			dataPoints: [
			
			
			
			
			{ y: 1, x: new Date(1979,0) },
			{ y: 0, x: new Date(1980,0) },
			{ y: 0, x: new Date(1981,0) },
			{ y: 0, x: new Date(1982,0) },
			{ y: 0, x: new Date(1983,0) },
			{ y: 2, x: new Date(1984,0) },
			{ y: 0, x: new Date(1985,0) },
			{ y: 0, x: new Date(1986,0) },
			{ y: 1, x: new Date(1987,0) },
			{ y: 2, x: new Date(1988,0) },
			{ y: 0, x: new Date(1989,0) },
			{ y: 0, x: new Date(1990,0) },
			{ y: 4, x: new Date(1991,0) },
			{ y: 6 , x: new Date(1992,0) },
			{ y: 1, x: new Date(1993,0) },
			{ y: 5, x: new Date(1994,0) },
			{ y: 7, x: new Date(1995,0) },
			{ y: 8, x: new Date(1996,0) },
			{ y: 10, x: new Date(1997,0) },
			{ y: 1, x: new Date(1998,0) },
			{ y: 4, x: new Date(1999,0) },
			{ y: 4, x: new Date(2000,0) },
			{ y: 7, x: new Date(2001,0) },
			{ y: 4, x: new Date(2002,0) },
			{ y: 1, x: new Date(2003,0) },
			{ y: 2, x: new Date(2004,0) },
			{ y: 8, x: new Date(2005,0) },
			{ y: 4, x: new Date(2006,0) },
			{ y: 4, x: new Date(2007,0) },
			{ y: 5, x: new Date(2008,0) },
			{ y: 4, x: new Date(2009,0) },
			{ y: 23, x: new Date(2010,0) },
			{ y: 4, x: new Date(2011,0) },
			{ y: 2, x: new Date(2012,0) },
			{ y: 10, x: new Date(2013,0) },
			{ y: 5, x: new Date(2014,0) },
			{ y: 10, x: new Date(2015,0) },
			{ y: 13, x: new Date(2016,0) },
			{ y: 5, x: new Date(2017,0) },
			{ y: 16, x: new Date(2018,0) }
			
			
			
			
			]
	},
	
		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Australia",
			color: "#157539",
			dataPoints: [
			
			
			
			
			{ y: 0, x: new Date(1979,0) },
			{ y: 1, x: new Date(1980,0) },
			{ y: 1, x: new Date(1981,0) },
			{ y: 0, x: new Date(1982,0) },
			{ y: 0, x: new Date(1983,0) },
			{ y: 1, x: new Date(1984,0) },
			{ y: 0, x: new Date(1985,0) },
			{ y: 0, x: new Date(1986,0) },
			{ y: 1, x: new Date(1987,0) },
			{ y: 0, x: new Date(1988,0) },
			{ y: 0, x: new Date(1989,0) },
			{ y: 0, x: new Date(1990,0) },
			{ y: 0, x: new Date(1991,0) },
			{ y: 1 , x: new Date(1992,0) },
			{ y: 1, x: new Date(1993,0) },
			{ y: 2, x: new Date(1994,0) },
			{ y: 1, x: new Date(1995,0) },
			{ y: 0, x: new Date(1996,0) },
			{ y: 2, x: new Date(1997,0) },
			{ y: 0, x: new Date(1998,0) },
			{ y: 0, x: new Date(1999,0) },
			{ y: 0, x: new Date(2000,0) },
			{ y: 0, x: new Date(2001,0) },
			{ y: 0, x: new Date(2002,0) },
			{ y: 0, x: new Date(2003,0) },
			{ y: 0, x: new Date(2004,0) },
			{ y: 3, x: new Date(2005,0) },
			{ y: 0, x: new Date(2006,0) },
			{ y: 1, x: new Date(2007,0) },
			{ y: 2, x: new Date(2008,0) },
			{ y: 3, x: new Date(2009,0) },
			{ y: 1, x: new Date(2010,0) },
			{ y: 1, x: new Date(2011,0) },
			{ y: 1, x: new Date(2012,0) },
			{ y: 6, x: new Date(2013,0) },
			{ y: 0, x: new Date(2014,0) },
			{ y: 4, x: new Date(2015,0) },
			{ y: 1, x: new Date(2016,0) },
			{ y: 3, x: new Date(2017,0) },
			{ y: 7, x: new Date(2018,0) }
			
			
			
			
			]
	},
	{        
			type: "stackedColumn",
			showInLegend: true,
			name: "India",
			color: "#f70202",
			dataPoints: [
			
			
			
			
			{ y: 0, x: new Date(1979,0) },
			{ y: 0, x: new Date(1980,0) },
			{ y: 0, x: new Date(1981,0) },
			{ y: 0, x: new Date(1982,0) },
			{ y: 0, x: new Date(1983,0) },
			{ y: 0, x: new Date(1984,0) },
			{ y: 0, x: new Date(1985,0) },
			{ y: 1, x: new Date(1986,0) },
			{ y: 1, x: new Date(1987,0) },
			{ y: 0, x: new Date(1988,0) },
			{ y: 1, x: new Date(1989,0) },
			{ y: 3, x: new Date(1990,0) },
			{ y: 0, x: new Date(1991,0) },
			{ y: 10 , x: new Date(1992,0) },
			{ y: 1, x: new Date(1993,0) },
			{ y: 5, x: new Date(1994,0) },
			{ y: 1, x: new Date(1995,0) },
			{ y: 5, x: new Date(1996,0) },
			{ y: 2, x: new Date(1997,0) },
			{ y: 1, x: new Date(1998,0) },
			{ y: 0, x: new Date(1999,0) },
			{ y: 0, x: new Date(2000,0) },
			{ y: 2, x: new Date(2001,0) },
			{ y: 0, x: new Date(2002,0) },
			{ y: 1, x: new Date(2003,0) },
			{ y: 2, x: new Date(2004,0) },
			{ y: 0, x: new Date(2005,0) },
			{ y: 0, x: new Date(2006,0) },
			{ y: 0, x: new Date(2007,0) },
			{ y: 1, x: new Date(2008,0) },
			{ y: 4, x: new Date(2009,0) },
			{ y: 2, x: new Date(2010,0) },
			{ y: 5, x: new Date(2011,0) },
			{ y: 0, x: new Date(2012,0) },
			{ y: 5, x: new Date(2013,0) },
			{ y: 7, x: new Date(2014,0) },
			{ y: 0, x: new Date(2015,0) },
			{ y: 3, x: new Date(2016,0) },
			{ y: 1, x: new Date(2017,0) },
			{ y: 8, x: new Date(2018,0) }
			
			
			
			
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
		
		if(dt==1998){
			dp = [
			{ y:2, label: 'ijs.si' },
			{ y:1, label: 'collins.co.uk' },
			{ y:2, label: 'conexor.fi' },
			{ y:1, label: 'nist.gov' },
			{ y:1, label: 'biu.ac.il' },
			{ y:1, label: 'ims.uni-' },
			{ y:2, label: 'mitre.org' },
			{ y:1, label: 'uva.nl' },
			{ y:1, label: 'cs.j' },
			{ y:1, label: 'jhu.edu' },
			{ y:2, label: 'upenn.edu' },
			{ y:3, label: 'gmat.org' },
			{ y:2, label: 'toefl.org' },
			{ y:1, label: 'gmat.or~' },
			{ y:2, label: 'microsoft.com' },
			{ y:1, label: 'ee.umd' },
			{ y:2, label: 'vassar.edu' },
			{ y:1, label: 'echo.lu' },
			{ y:1, label: 'umass.edu' },
			{ y:2, label: 'morphologic.hu' },
			{ y:1, label: 'georgetown.edu' }
			
			
		]
		}
		else if(dt==2000){
			dp =  [                                         
			{ y:1, label: 'unu.edu' },
			{ y:1, label: 'iitp.ru' },
			{ y:1, label: 'ifrm.glocom' },
			{ y:1, label: 'lanl.gov' },
			{ y:1, label: 'translation.su.se' },
			{ y:3, label: 'muc.saic' },
			{ y:1, label: 'china-' },
			{ y:1, label: 'yahoo.com' },
			{ y:2, label: 'hcrc.ed.ac.uk' },
			{ y:1, label: 'nist.gov' },
			{ y:3, label: 'ilk.kub.nl' },
			{ y:1, label: 'cran.r-' },
			{ y:2, label: 'nyu.edu' },
			{ y:2, label: 'cmu.edu' },
			{ y:1, label: 'tuwien.ac.at' },
			{ y:1, label: 'iijnet.or.jp' },
			{ y:1, label: 'karc.crl.go.jp' },
			{ y:1, label: 'mnemonic.com' },
			{ y:1, label: 'brighton.ac.uk' },
			{ y:2, label: 'ltg.ed.ac.uk' }
			
		]
		}
		else if(dt==2002){
			dp =  [
			{ y:3, label: 'nyu.edu' },
			{ y:5, label: 'aist-nara.ac.jp' },
			{ y:2, label: 'isi.edu' },
			{ y:3, label: 'keenage.com' },
			{ y:2, label: 'hit.edu.cn' },
			{ y:6, label: 'nist.gov' },
			{ y:3, label: 'w3.org' },
			{ y:1, label: 'cu.edu.tw' },
			{ y:1, label: 'uia.ac.be' },
			{ y:1, label: 'encarta.msn.com' },
			{ y:1, label: 'google.com' },
			{ y:2, label: 'susx.ac.uk' },
			{ y:5, label: 'upenn.edu' },
			{ y:2, label: 'nii.ac.jp' },
			{ y:5, label: 'uiuc.edu' },
			{ y:1, label: 'toronto.edu' },
			{ y:1, label: 'ais.gmd.de' },
			{ y:2, label: 'worldtravelguide.net' },
			{ y:3, label: 'monash.edu.au' },
			{ y:1, label: 'joachims.org' },
			{ y:1, label: 'uga.edu' }
			
			
			
		]
		}
		else if(dt==2004){
			dp = [                                         
			{ y:3, label: 'sun.com' },
			{ y:3, label: 'stanford.edu' },
			{ y:8, label: 'upenn.edu' },
			{ y:2, label: 'mit.edu' },
			{ y:3, label: 'goo.ne.jp' },
			{ y:2, label: 'ctan.org' },
			{ y:2, label: 'nii.ac.jp' },
			{ y:6, label: 'isi.edu' },
			{ y:3, label: 'ualberta.ca' },
			{ y:3, label: 'aist-nara.ac.jp' },
			{ y:6, label: 'nih.gov' },
			{ y:2, label: 'hit.edu.cn' },
			{ y:2, label: 'uia.ac.be' },
			{ y:2, label: 'ntu.edu.tw' },
			{ y:2, label: 'umn.edu' },
			{ y:2, label: 'senseval.org' },
			{ y:2, label: 'kyoto-u.ac.jp' },
			{ y:2, label: 'waikato.ac.nz' },
			{ y:2, label: 'unt.edu' },
			{ y:11, label: 'nist.gov' }
			
			
		]
		}
		else if(dt==2006){
			dp = [
			{ y:9, label: 'nyu.edu' },
			{ y:9, label: 'nist.gov' },
			{ y:2, label: 'ualberta.ca' },
			{ y:2, label: 'uni-stuttgart.de' },
			{ y:2, label: 'keenage.com' },
			{ y:6, label: 'isi.edu' },
			{ y:2, label: 'natcorp.ox.ac.uk' },
			{ y:3, label: 'u-tokyo.ac.jp' },
			{ y:2, label: 'homepages.inf.ed.ac.uk' },
			{ y:8, label: 'chasen.org' },
			{ y:13, label: 'upenn.edu' },
			{ y:2, label: 'technion.ac.il' },
			{ y:2, label: 'ntu.edu.tw' },
			{ y:1, label: 'stanford.edu' },
			{ y:2, label: 'cnts.ua.ac.be' },
			{ y:3, label: 'pascal-network.org' },
			{ y:1, label: 'aozora.gr.jp' },
			{ y:2, label: 'bitterlemons.org' },
			{ y:2, label: 'aist-nara.ac.jp' },
			{ y:2, label: 'titech.ac.jp' }
			
			
		]
		}
		else if(dt==2008){
			dp = [ 
			{ y:1, label: 'isi.edu' },
			{ y:151, label: 'creativecommons.org' },
			{ y:2, label: 'statmt.org' },
			{ y:1, label: 'princeton.edu' },
			{ y:4, label: 'nih.gov' },
			{ y:2, label: 'unboundbible.org' },
			{ y:8, label: 'stanford.edu' },
			{ y:6, label: 'ntu.edu.tw' },
			{ y:1, label: 'auckland.ac.nz' },
			{ y:6, label: 'chasen.org' },
			{ y:2, label: 'cnts.ua.ac.be' },
			{ y:6, label: 'kyoto-u.ac.jp' },
			{ y:2, label: 'colorado.edu' },
			{ y:3, label: 'monash.edu.au' },
			{ y:4, label: 'nist.gov' },
			{ y:8, label: 'homepages.inf.ed.ac.uk' },
			{ y:1, label: 'icl.pku.edu' },
			{ y:1, label: 'sinica.edu.tw' },
			{ y:3, label: 'u-tokyo.ac.jp' },
			{ y:3, label: 'joachims.org' },
			{ y:8, label: 'upenn.edu' }
			
			
		]
		}
		else if(dt==2010){
			dp = [      
			{ y:3, label: 'vxu.se' },
			{ y:3, label: 'umass.edu' },
			{ y:10, label: 'wikipedia.org' },
			{ y:7, label: 'statmt.org' },
			{ y:2, label: 'msra.cn' },
			{ y:2, label: 'monash.edu.au' },
			{ y:5, label: 'joachims.org' },
			{ y:3, label: 'bing.com' },
			{ y:16, label: 'google.com' },
			{ y:3, label: 'postech.ac.kr' },
			{ y:5, label: 'colorado.edu' },
			{ y:4, label: 'chasen.org' },
			{ y:2, label: 'keenage.com' },
			{ y:2, label: 'fjoch.com' },
			{ y:4, label: 'princeton.edu' },
			{ y:18, label: 'sourceforge.net' },
			{ y:1, label: 'cornell.edu' },
			{ y:4, label: 'csie.ntu.edu' },
			{ y:13, label: 'stanford.edu' },
			{ y:4, label: 'hit.edu.cn' },
			{ y:2, label: 'nltk.org' }
			
			
		]
		}
		else if(dt==2012){
			dp = [                                         
			{ y:5, label: 'cuni.cz' },
			{ y:3, label: 'delph-in.net' },
			{ y:3, label: 'bing.com' },
			{ y:11, label: 'stanford.edu' },
			{ y:5, label: 'github.com' },
			{ y:3, label: 'questiongeneration.org' },
			{ y:4, label: 'lingfil.uu.se' },
			{ y:5, label: 'cpan.org' },
			{ y:18, label: 'upenn.edu' },
			{ y:38, label: 'wikipedia.org' },
			{ y:16, label: 'sourceforge.net' },
			{ y:11, label: 'statmt.org' },
			{ y:13, label: 'apache.org' },
			{ y:21, label: 'google.com' },
			{ y:5, label: 'tu-darmstadt.de' },
			{ y:14, label: 'ntu.edu.tw' },
			{ y:4, label: 'isi.edu' },
			{ y:15, label: 'twitter.com' },
			{ y:5, label: 'homepages.inf.ed.ac.uk' },
			{ y:5, label: 'nyu.edu' },
			
			
		]
		}
		else if(dt==2014){
			dp = [
			{ y:6, label: 'cmu.edu' },
			{ y:235, label: 'creativecommons.org' },
			{ y:10, label: 'statmt.org' },
			{ y:20, label: 'stanford.edu' },
			{ y:7, label: 'ntu.edu.tw' },
			{ y:10, label: 'umass.edu' },
			{ y:5, label: 'joachims.org' },
			{ y:31, label: 'github.com' },
			{ y:7, label: 'princeton.edu' },
			{ y:2, label: 'uottawa.ca' },
			{ y:6, label: 'nih.gov' },
			{ y:5, label: 'univ-paris3.fr' },
			{ y:3, label: 'twitter.com' },
			{ y:2, label: 'imdb.com' },
			{ y:21, label: 'sourceforge.net' },
			{ y:32, label: 'google.com' },
			{ y:5, label: 'yahoo.com' },
			{ y:18, label: 'apache.org' },
			{ y:9, label: 'wikipedia.org' },
			{ y:12, label: 'upenn.edu' },
			
			
			
			
			
		]
		}
		else if(dt==2016){
			dp = [ 
			{ y:7, label: 'qcri.org' },
			{ y:7, label: 'bitbucket.org' },
			{ y:15, label: 'upenn.edu' },
			{ y:182, label: 'github.com' },
			{ y:107, label: 'creativecommons.org' },
			{ y:9, label: 'ntu.edu.tw' },
			{ y:26, label: 'wikipedia.org' },
			{ y:20, label: 'statmt.org' },
			{ y:4, label: 'chokkan.org' },
			{ y:63, label: 'google.com' },
			{ y:6, label: 'universaldependencies.org' },
			{ y:5, label: 'umass.edu' },
			{ y:6, label: 'arxiv.org' },
			{ y:12, label: 'apache.org' },
			{ y:8, label: 'scikit-learn.org' },
			{ y:10, label: 'youtu.be' },
			{ y:8, label: 'wikimedia.org' },
			{ y:5, label: 'illinois.edu' },
			{ y:10, label: 'tu-darmstadt.de' },
			{ y:27, label: 'github.io' }
		]
		}
		else if(dt==2018){
			dp = [
			{ y:27, label: 'doi.org' },
			{ y:7, label: 'spacy.io' },
			{ y:7, label: 'nltk.org' },
			{ y:17, label: 'arxiv.org' },
			{ y:12, label: 'upenn.edu' },
			{ y:376, label: 'github.com' },
			{ y:59, label: 'creativecommons.org' },
			{ y:19, label: 'github.io' },
			{ y:39, label: 'stanford.edu' },
			{ y:13, label: 'wikimedia.org' },
			{ y:27, label: 'aclweb.org' },
			{ y:5, label: 'cornell.edu' },
			{ y:6, label: 'pytorch.org' },
			{ y:17, label: 'wikipedia.org' },
			{ y:6, label: 'bitbucket.org' },
			{ y:7, label: 'wikidata.org' },
			{ y:11, label: 'radimrehurek.com' },
			{ y:10, label: 'scikit-learn.org' },
			{ y:5, label: 'umass.edu' },
			{ y:46, label: 'google.com' }
		]
		}
	else
	{
		dp = 'sayak';
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
	
	
	
	
	
	if (dtp=='19980')
	{
		dp = [                                         
			{ y: 2, label: 'nl.ijs.si' }
			
		]
	}
	else if (dtp=='19981')
	{
		dp =  [                                         
			{ y: 1, label: 'http://titania.cobuild.collins.co.uk/boe_info.html' }
			
		]
	}
	else if (dtp=='19982')
	{
		dp =  [                                         
			{ y: 2, label: 'www.conexor.fi' }
			
		]
	}
	else if (dtp=='19983')
	{
		dp =  [                                         
			{ y: 1, label: 'http://www.itl.nist.gov/div894' }
			
		]
	}
	else if (dtp=='19984')
	{
		dp =  [                                         
			{ y: 1, label: 'http://www.cs.biu.ac.il/~yuvalk/MBSL' }
			
		]
	}
	else if (dtp=='19985')
	{
		dp =   [                                         
			{ y: 1, label: 'http://www.ims.uni-' }
			
		]
	}
	else if (dtp=='19986')
	{
		dp =   [                                         
			{ y: 2, label: 'www.mitre.org' }
			
		]
	}
	else if (dtp=='19987')
	{
		dp =   [                                         
			{ y: 1, label: 'http://earth.let.uva.nl/-rens' }
			
		]
	}
	else if (dtp=='19988')
	{
		dp =    [                                         
			{ y: 1, label: 'http://www.cs.j' }
			
		]
	}
	else if (dtp=='19989')
	{
		dp =   [                                         
			{ y: 1, label: 'http://www.cs.jhu.edu/-brill' }
			
		]
	}
	else if (dtp=='199810')
	{
		dp =   [                                         
			{ y: 1, label: 'http://www.cis.upenn.edu/~adwait' },
			{ y: 1, label: 'http://www.ldc.upenn.edu/ldc/online/treebank/REA' }
			
		]
	}
	else if (dtp=='199811')
	{
		dp =   [                                         
			{ y: 3, label: 'www.gmat.org' }
			
		]
	}
	else if (dtp=='199812')
	{
		dp =   [                                         
			{ y: 2, label: 'www.toefl.org' }
			
		]
	}
	else if (dtp=='199813')
	{
		dp =   [                                         
			{ y: 1, label: 'http://www.gmat.or~' }
			
		]
	}
	else if (dtp=='199814')
	{
		dp =  [                                         
			{ y: 1, label: 'http://research.microsoft.com/nlp/' },
			{ y: 1, label: 'http://www.microsoft.com/standards/cdf.htm' }
			
		]
	}
	else if (dtp=='199815')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.ee.umd' }
			
		]
	}
	else if (dtp=='199816')
	{
		dp = [                                         
			{ y: 2, label: 'www.cs.vassar.edu' }
			
		]
	}
	else if (dtp=='199817')
	{
		dp = [                                         
			{ y: 1, label: 'http://www2.echo.lu/langeng/en/' }
			
		]
	}
	else if (dtp=='199818')
	{
		dp = [                                         
			{ y: 1, label: 'http://ciir.cs.umass.edu/info/psfiles/tepubs/tepu' }
			
		]
	}
	else if (dtp=='199819')
	{
		dp = [                                         
			{ y: 2, label: 'www.morphologic.hu' }
			
		]
	}
	else if (dtp=='199820')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.georgetown.edu/luperfoy/Discourse-' }
			
		]
	}
	else if (dtp=='20000')
	{
		dp =  [                                         
			{ y: 1, label: 'http://www.unl.ias.unu.edu/' }
			
		]
	}
	else if (dtp=='20001')
	{
		dp =  [                                         
			{ y: 1, label: 'http://proling.iitp.ru/Deco' }
			
		]
	}
	else if (dtp=='20002')
	{
		dp =  [                                         
			{ y: 1, label: 'http://ifrm.glocom' }
			
		]
	}
	else if (dtp=='20003')
	{
		dp =  [                                         
			{ y: 1, label: 'http://xxx.lanl.gov/' }
			
		]
	}
	else if (dtp=='20004')
	{
		dp =  [                                         
			{ y: 1, label: 'http://www.translation.su.se/'}
			
		]
	}
	else if (dtp=='20005')
	{
		dp =  [                                         
			{ y: 2, label:  'www.muc.saic' },
			{ y: 1, label:  'http://www.muc.saic.com/' }
			
		]
	}
	else if (dtp=='20006')
	{
		dp =  [                                         
			{ y: 1, label: 'http://www.china-' }
			
		]
	}
	else if (dtp=='20007')
	{
		dp =  [                                         
			{ y: 1, label: 'http://www.yahoo.com' }
			
		]
	}
	else if (dtp=='20008')
	{
		dp =  [                                         
			{ y: 2, label: 'www.hcrc.ed.ac.uk' }
			
		]
	}
	else if (dtp=='20009')
	{
		dp =  [                                         
			{ y: 1, label: 'http://www.nist.gov/srd'}
			
		]
	}
	else if (dtp=='200010')
	{
		dp =  [                                         
			{ y: 3, label: 'ilk.kub.nl' }
			
		]
	}
	else if (dtp=='200011')
	{
		dp =  [                                         
			{ y: 1, label: 'http://cran.r-' }
			
		]
	}
	else if (dtp=='200012')
	{
		dp =  [                                         
			{ y: 2, label: 'cs.nyu.edu' }
			
		]
	}
	else if (dtp=='200013')
	{
		dp =  [                                         
			{ y: 2, label:  'www.cs.cmu.edu' }
			
		]
	}
	else if (dtp=='200014')
	{
		dp =  [                                         
			{ y: 1, label: 'http://www.ci.tuwien.ac.at/~hornik/R/' }
			
		]
	}
	else if (dtp=='200015')
	{
		dp =  [                                         
			{ y: 1, label: 'http://www.iijnet.or.jp/edr/E_TG.html' }
			
		]
	}
	else if (dtp=='200016')
	{
		dp =  [                                         
			{ y: 1, label: 'http://www-karc.crl.go.jp/ips/murata' }
			
		]
	}
	else if (dtp=='200017')
	{
		dp =  [                                         
			{ y: 1, label: 'http://www.mnemonic.com/' }
			
		]
	}
	else if (dtp=='200018')
	{
		dp =  [                                         
			{ y: 1, label: 'http://www.itri.brighton.ac.uk/research.htmlWYSIWYM' }
			
		]
	}
	else if (dtp=='200019')
	{
		dp =  [                                         
			{ y: 2, label: 'www.ltg.ed.ac.uk' }
			
		]
	}
	else if (dtp=='20020')
	{
		dp =   [                                         
			{ y: 2, label:  'cs.nyu.edu' },
			{ y: 1, label:  'http://www.cs.nyu.edu/cs/projects/proteus/' }
			
		]
	}
	else if (dtp=='20021')
	{
		dp =   [                                         
			{ y: 3, label:  'cl.aist-nara.ac.jp' },
			{ y: 2, label:  'chasen.aist-nara.ac.jp' }
			
		]
	}
	else if (dtp=='20022')
	{
		dp =   [                                         
			{ y: 2, label: 'www.isi.edu' }
			
		]
	}
	else if (dtp=='20023')
	{
		dp =   [                                         
			{ y: 3, label:  'www.keenage.com' }
			
		]
	}
	else if (dtp=='20024')
	{
		dp =   [                                         
			{ y: 2, label:  'mtlab.hit.edu.cn'}
			
		]
	}
	else if (dtp=='20025')
	{
		dp =   [                                         
			{ y: 2, label:  'www.nist.gov' },
			{ y: 2, label:  'www.itl.nist.gov' },
			{ y: 2, label:  'trec.nist.gov'}
			
		]
	}
	else if (dtp=='20026')
	{
		dp =   [                                         
			{ y: 3, label:  'www.w3.org' }
			
		]
	}
	else if (dtp=='20027')
	{
		dp =   [                                         
			{ y: 1, label:  'http://gais.cs.cu.edu.tw/' }
			
		]
	}
	else if (dtp=='20028')
	{
		dp =   [                                         
			{ y: 1, label: 'http://lcg-www.uia.ac.be/conll2000/chunking' }
			
		]
	}
	else if (dtp=='20029')
	{
		dp =   [                                         
			
			{ y: 1, label:  'http://encarta.msn.com/Default.asp' }
			
		]
	}
	else if (dtp=='200210')
	{
		dp =   [                                         
			{ y: 1, label:  'http://www.google.com' }
			
		]
	}
	else if (dtp=='200211')
	{
		dp =   [                                         
			{ y: 2, label:  'www.cogs.susx.ac.uk' }
			
		]
	}
	else if (dtp=='200212')
	{
		dp =   [                                         
			{ y: 4, label:  'www.ldc.upenn.edu' },
			{ y: 1, label:  'http://www.cis.upenn.edu/xtag' }
			
		]
	}
	else if (dtp=='200213')
	{
		dp =   [                                         
			{ y: 2, label:  'research.nii.ac.jp' }
			
		]
	}
	else if (dtp=='200214')
	{
		dp =   [                                         
			{ y: 2, label:  'l2r.cs.uiuc.edu' },
			{ y: 3, label:  'L2R.cs.uiuc.edu' }
			
		]
	}
	else if (dtp=='200215')
	{
		dp =   [                                         
			{ y: 1, label: 'http://www.cs.toronto.edu/kondrak' }
			
		]
	}
	else if (dtp=='200216')
	{
		dp =   [                                         
			{ y: 1, label:  'http://ais.gmd.de/~thorsten/svm_light/' }
			
		]
	}
	else if (dtp=='200217')
	{
		dp =   [                                         
			{ y: 2, label:  'www.worldtravelguide.net' }
			
		]
	}
	else if (dtp=='200218')
	{
		dp =   [                                         
			{ y: 3, label:  'www.csse.monash.edu.au' }
			
		]
	}
	else if (dtp=='200219')
	{
		dp =   [                                         
			{ y: 1, label:  'http://svmlight.joachims.org/' }
			
		]
	}
	else if (dtp=='200220')
	{
		dp =   [                                         
			{ y: 1, label:  'http://www.ai.uga.edu/~mc/ai199001.ps' }
			
		]
	}
	else if (dtp=='20040')
	{
		dp =  [                                         
			
			{ y: 3, label:  'java.sun.com' }
			
		]
	}
	else if (dtp=='20041')
	{
		dp =  [                                         
			{ y: 2, label:  'www-csli.stanford.edu' },
			{ y: 1, label:  'http://protege.stanford.edu/' }
			
		]
	}
	else if (dtp=='20042')
	{
		dp =  [                                         
			{ y: 4, label:  'www.ldc.upenn.edu' },
			{ y: 3, label:  'www.cis.upenn.edu' },
			{ y: 1, label:  'http://wave.ldc.upenn.edu/' }
			
		]
	}
	else if (dtp=='20043')
	{
		dp =  [                                         
			{ y: 2, label:  'www.ai.mit.edu' }
			
		]
	}
	else if (dtp=='20044')
	{
		dp =  [                                         
			{ y: 3, label: 'www.goo.ne.jp' }
			
		]
	}
	else if (dtp=='20045')
	{
		dp =  [                                         
			{ y: 2, label:  'www.ctan.org' }
			
		]
	}
	else if (dtp=='20046')
	{
		dp =  [                                         
			{ y: 2, label: 'research.nii.ac.jp' }
			
		]
	}
	else if (dtp=='20047')
	{
		dp =  [                                         
			{ y: 6, label:   'www.isi.edu' }
			
		]
	}
	else if (dtp=='20048')
	{
		dp =  [                                         
			{ y: 3, label:  'www.cs.ualberta.ca' }
			
		]
	}
	else if (dtp=='20049')
	{
		dp =   [                                         
			{ y: 2, label:  'cl.aist-nara.ac.jp' },
			{ y: 1, label:  'http://chasen.aist-nara.ac.jp/hiki/ChaSen/' }
			
		]
	}
	else if (dtp=='200410')
	{
		dp =[                                         
			{ y: 3, label:  'www.nlm.nih.gov' },
			{ y: 2, label:  'umlsks.nlm.nih.gov' },
			{ y: 1, label:  'http://www.ncbi.nlm.nih.gov/PubMed/' }
			
		]
	}
	else if (dtp=='200411')
	{
		dp = [                                         
			{ y: 2, label:  'mtlab.hit.edu.cn' }
			
		]
	}
	else if (dtp=='200412')
	{
		dp = [                                         
			{ y: 2, label:  'cnts.uia.ac.be' }
			
		]
	}
	else if (dtp=='200413')
	{
		dp = [                                         
			{ y: 2, label:  'www.csie.ntu.edu.tw' }
			
		]
	}
	else if (dtp=='200414')
	{
		dp = [                                         
			{ y: 2, label:   'www.d.umn.edu' }
			
		]
	}
	else if (dtp=='200415')
	{
		dp =  [                                         
			{ y: 2, label:  'www.senseval.org' }
			
		]
	}
	else if (dtp=='200416')
	{
		dp =  [                                         
			
			{ y: 2, label:  'www-lab25.kuee.kyoto-u.ac.jp' }
			
		]
	}
	else if (dtp=='200417')
	{
		dp =  [                                         
			{ y: 2, label:  'www.cs.waikato.ac.nz' }
			
		]
	}
	else if (dtp=='200418')
	{
		dp =  [                                         
			{ y: 2, label:  'www.cs.unt.edu'}
			
			
		]
	}
	else if (dtp=='200419')
	{
		dp =  [                                         
			{ y: 7, label:  'www.nist.gov' },
			{ y: 2, label:  'duc.nist.gov' },
			{ y: 1, label:  'http://math.nist.gov/javanumerics/jama/' },
			{ y: 1, label:  'http://trec.nist.gov/' }
			
		]
	}
	else if (dtp=='20060')
	{
		dp =  [                                         
			{ y: 9, label:  'nlp.cs.nyu.edu' }
			
		]
	}
	else if (dtp=='20061')
	{
		dp =  [                         
			{ y: 5, label:  'trec.nist.gov' },
			{ y: 2, label:  'www-nlpir.nist.gov' },
			{ y: 1, label:  'http://www.nist.gov/speech/tests/mt/resources/scoring.htm' },
			{ y: 1, label:  'http://www.itl.nist.gov/iaui/894.02/' }
			
		]
	}
	else if (dtp=='20062')
	{
		dp =  [                         
			{ y: 2, label:  'www.cs.ualberta.ca' }
			
		]
	}
	else if (dtp=='20063')
	{
		dp =  [                         
			{ y: 2, label:  'www.ims.uni-stuttgart.de' }
			
		]
	}
	else if (dtp=='20064')
	{
		dp =  [                         
		
			{ y: 2, label:  'www.keenage.com' }
			
		]
	}
	else if (dtp=='20065')
	{
		dp =  [                         
			
			{ y: 4, label:  'www.isi.edu' },
			{ y: 2, label:  'semantics.isi.edu' }			
		]
	}
	else if (dtp=='20066')
	{
		dp =  [                         
			{ y: 2, label: 'www.natcorp.ox.ac.uk' }			
		]
	}
	else if (dtp=='20067')
	{
		dp =  [                         
			{ y: 3, label: 'www-tsujii.is.s.u-tokyo.ac.jp' }			
		]
	}
	else if (dtp=='20068')
	{
		dp =  [                         
			{ y: 2, label:  'homepages.inf.ed.ac.uk' }			
		]
	}
	else if (dtp=='20069')
	{
		dp =  [                         
			{ y: 5, label:  'chasen.org' },
			{ y: 3, label:  'www.chasen.org' }
			
		]
	}
	else if (dtp=='200610')
	{
		dp =  [                         
			{ y: 4, label:  'www.ldc.upenn.edu' },
			{ y: 2, label:  'acl.ldc.upenn.edu' },
			{ y: 3, label:  'projects.ldc.upenn.edu' },
			{ y: 4, label:  'www.cis.upenn.edu' }
		]
	}
	else if (dtp=='200611')
	{
		dp =  [                         
			{ y: 2, label:  'mila.cs.technion.ac.il' }			
		]
	}
	else if (dtp=='200612')
	{
		dp =  [                         
			{ y: 2, label:  'www.csie.ntu.edu.tw'}			
		]
	}
	else if (dtp=='200613')
	{
		dp =  [                         
			{ y: 1, label:  'http://isomap.stanford.edu/' }			
		]
	}
	else if (dtp=='200614')
	{
		dp =  [                         
			{ y: 2, label:  'www.cnts.ua.ac.be' }			
		]
	}
	else if (dtp=='200615')
	{
		dp =  [                         
			{ y: 3, label:  'www.pascal-network.org' }			
		]
	}
	else if (dtp=='200616')
	{
		dp =  [                         
			{ y: 1, label:  'http://www.aozora.gr.jp/' }			
		]
	}
	else if (dtp=='200617')
	{
		dp =  [                         
			{ y: 2, label:  'www.bitterlemons.org' }			
		]
	}
	else if (dtp=='200618')
	{
		dp =  [                         
			{ y: 2, label:  'chasen.aist-nara.ac.jp' }			
		]
	}
	else if (dtp=='200619')
	{
		dp =  [                         
			{ y: 1, label:  'http://tanaka-www.cs.titech.ac.jp/' },
			{ y: 1, label:  'http://lr-www.pi.titech.ac.jp/tsc/tsc3-en.html' }
		]
	}
	else if (dtp=='20080')
	{
		dp =  [                                         
			{ y: 1, label: 'http://www.isi.edu/hdaume/megam/index.html' }
			
		]
	}
	else if (dtp=='20081')
	{
		dp =  [                                         
			
			{ y: 151, label: 'creativecommons.org'}
			
		]
	}
	else if (dtp=='20082')
	{
		dp =  [                                         
			{ y: 2, label: 'www.statmt.org' }
			
		]
	}
	else if (dtp=='20083')
	{
		dp =  [                                         
			{ y: 1, label: 'http://wordnet.princeton.edu' }
			
		]
	}
	else if (dtp=='20084')
	{
		dp =  [                                         
			{ y: 3, label: 'www.nlm.nih.gov' },
			{ y: 1, label: 'http://www.ncbi.nlm.nih.gov/' }
			
		]
	}
	else if (dtp=='20085')
	{
		dp =  [ 
			
			{ y: 2, label:  'www.unboundbible.org' }
			
		]
	}
	else if (dtp=='20086')
	{
		dp =  [                                         
			{ y: 1, label: 'http://infomap.stanford.edu/' },
			{ y: 1, label: 'http://www.stanford.edu/grenager/data/unsupie.tgz' },
			{ y: 5, label: 'nlp.stanford.edu' },
			{ y: 1, label: 'http://abbreviation.stanford.edu/' }
			
		]
	}
	else if (dtp=='20087')
	{
		dp =  [                                         
			{ y: 6, label: 'www.csie.ntu.edu.tw' }
			
		]
	}
	else if (dtp=='20088')
	{
		dp =  [                                         
			
			{ y: 1, label:  'http://www.engineers.auckland.ac.nz/vkec001' }
			
		]
	}
	else if (dtp=='20089')
	{
		dp =  [                                         
			
			{ y: 6, label:  'chasen.org' }
			
		]
	}
	else if (dtp=='200810')
	{
		dp =  [                                         
			{ y: 2, label: 'www.cnts.ua.ac.be' }
			
		]
	}
	else if (dtp=='200811')
	{
		dp =  [                                         
			{ y: 6, label: 'nlp.kuee.kyoto-u.ac.jp' }
			
		]
	}
	else if (dtp=='200812')
	{
		dp = [                                         
			
			{ y: 2, label:  'communicator.colorado.edu' }
			
		]
	}
	else if (dtp=='200813')
	{
		dp =  [                                         
			{ y: 3, label:  'www.csse.monash.edu.au' }
			
		]
	}
	else if (dtp=='200814')
	{
		dp =  [                                         
			{ y: 3, label:  'www.nist.gov' },
			{ y: 1, label:  'http://duc.nist.gov/' }
			
		]
	}
	else if (dtp=='200815')
	{
		dp =  [                                         
			{ y: 8, label:  'homepages.inf.ed.ac.uk' }
			
		]
	}
	else if (dtp=='200816')
	{
		dp =  [                                         
			{ y: 1, label:  'http://www.icl.pku.edu' }
			
		]
	}
	else if (dtp=='200817')
	{
		dp =  [                                         
			{ y: 1, label: 'http://rocling.iis.sinica.edu.tw/CKIP/index.htm' }
			
		]
	}
	else if (dtp=='200818')
	{
		dp =  [                                         
			{ y: 2, label:  'www-tsujii.is.s.u-tokyo.ac.jp' },
			{ y: 1, label:  'http://www.tkl.iis.u-tokyo.ac.jp/kaji/clustering' }
			
		]
	}
	else if (dtp=='200819')
	{
		dp =  [                                         
			{ y: 3, label:  'svmlight.joachims.org' }
			
		]
	}
	else if (dtp=='200820')
	{
		dp =  [                                         
			{ y: 1, label: 'http://www.cis.upenn.edu/chinese/' },
			{ y: 6, label: 'www.ldc.upenn.edu' },
			{ y: 1, label: 'http://projects.ldc.upenn.edu/ace/' }
			
		]
	}
	else if (dtp=='20100')
	{
		dp = [                                         
			
			{ y: 3, label:  'w3.msi.vxu.se' }
			
			
		]
	}
	else if (dtp=='20101')
	{
		dp = [                                         
			
			{ y: 3, label:  'mallet.cs.umass.edu' },
			
		]
	}
	else if (dtp=='20102')
	{
		dp = [                                         
			{ y: 5, label:  'en.wikipedia.org' },
			{ y: 1, label:  'http://ja.wikipedia.org/' },
			{ y: 1, label:  'http://www.wikipedia.org/'},
			{ y: 1, label:  'http://download.wikipedia.org' },
			{ y: 2, label:  'simple.wikipedia.org' }
			
		]
	}
	else if (dtp=='20103')
	{
		dp = [                                         
			{ y: 5, label:  'www.statmt.org' },
			{ y: 2, label:  'statmt.org' }
			
		]
	}
	else if (dtp=='20104')
	{
		dp = [    
			
			{ y: 2, label:  'needleseek.msra.cn' }
			
		]
	}
	else if (dtp=='20105')
	{
		dp = [                                         
			{ y: 2, label:   'www.csse.monash.edu.au' }
			
		]
	}
	else if (dtp=='20106')
	{
		dp = [                                         
			
			{ y: 5, label:  'svmlight.joachims.org' }
			
		]
	}
	else if (dtp=='20107')
	{
		dp = [                                         
			
			{ y: 3, label:  'www.bing.com' }
			
		]
	}
	else if (dtp=='20108')
	{
		dp = [                                         
			{ y: 5, label:   'www.google.com' },
			{ y: 8, label:   'code.google.com' },
			{ y: 1, label:   'http://news.google.com' },
			{ y: 1, label:   'http://sites.google.com/site/ldaspoiler/' },
			{ y: 1, label:   'http://blogsearch.google.com' }
			
		]
	}
	else if (dtp=='20109')
	{
		dp = [                                         
			{ y: 3, label:  'isoft.postech.ac.kr' }
			
		]
	}
	else if (dtp=='201010')
	{
		dp = [                                         
			{ y: 4, label:  'verbs.colorado.edu' },
			{ y: 1, label:  'http://stripe.colorado.edu/~jurafsky/' }
			
		]
	}
	else if (dtp=='201011')
	{
		dp = [                                         
			{ y: 4, label:  'chasen.org' }
			
		]
	}
	else if (dtp=='201012')
	{
		dp = [                                         
			{ y: 2, label:  'www.keenage.com' }
			
		]
	}
	else if (dtp=='201013')
	{
		dp = [                                         
			{ y: 2, label:  'www.fjoch.com' }
			
		]
	}
	else if (dtp=='201014')
	{
		dp = [                                         
			{ y: 4, label: 'wordnet.princeton.edu' }
			
		]
	}
	else if (dtp=='201015')
	{
		dp = [                                         
			{ y: 6, label:  'sourceforge.net' },
			{ y: 4, label:  'opennlp.sourceforge.net' },
			{ y: 1, label:  'http://stardict.sourceforge.net/' },
			{ y: 1, label:  'http://crfchunker.sourceforge.net/' },
			{ y: 1, label:  'mecab.sourceforge.net' },
			{ y: 1, label:  'maxent.sourceforge.net' },
			{ y: 1, label:  'crfpp.sourceforge.net' },
			{ y: 1, label:  'http://mstparser.sourceforge.net' },
			{ y: 1, label:  'http://jena.sourceforge.net/' },
			{ y: 1, label:  'http://lpsolve.sourceforge.net/' }
			
		]
	}
	else if (dtp=='201016')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.cs.cornell.edu/People/' }
			
		]
	}
	else if (dtp=='201017')
	{
		dp = [                                         
			{ y: 3, label:  'www.csie.ntu.edu.tw' },
			{ y: 1, label:  'http://www.csie.ntu.edu' }
			
		]
	}
	else if (dtp=='201018')
	{
		dp = [                                         
			{ y: 12, label:  'nlp.stanford.edu' },
			{ y: 1, label:  'http://protege.stanford.edu/' }
			
		]
	}
	else if (dtp=='201019')
	{
		dp = [                                         
			{ y: 3, label: 'ir.hit.edu.cn' },
			{ y: 1, label: 'http://mitlab.hit.edu.cn/index.php/resources.html' }
			
		]
	}
	else if (dtp=='201020')
	{
		dp = [                                         
			
			{ y: 2, label: 'www.nltk.org' }
			
		]
	}
	else if (dtp=='20120')
	{
		dp = [                                         
			{ y: 4, label:  'ufal.mff.cuni.cz' },
			{ y: 1, label:  'https://ufal-point.mff.cuni.cz/xmlui/handle/11858/00-097C-0000-0005-BF95-B' },
		]
	}
	else if (dtp=='20121')
	{
		dp = [                                         
			
			{ y: 3, label:  'www.delph-in.net' }
			
		]
	}
	else if (dtp=='20122')
	{
		dp =[                                         
			{ y: 3, label:  'www.bing.com' }
			
		]
	}
	else if (dtp=='20123')
	{
		dp = [                                         
			{ y: 1, label:  'http://plato.stanford.edu/entries/implicature/' },
			{ y: 9, label:  'nlp.stanford.edu' },
			{ y: 1, label:  'http://www-nlp.stanford.edu/nlp/javadoc/javanlp/edu/stanford/nlp/process/Morphology.html' }
			
		]
	}
	else if (dtp=='20124')
	{
		dp = [                                         
			{ y: 5, label:  'github.com' }
			
		]
	}
	else if (dtp=='20125')
	{
		dp = [                                         
			
			{ y: 3, label:  'www.questiongeneration.org' }
			
		]
	}
	else if (dtp=='20126')
	{
		dp = [                                         
			
			{ y: 4, label:  'opus.lingfil.uu.se' }
			
		]
	}
	else if (dtp=='20127')
	{
		dp = [                                         
			{ y: 5, label:  'search.cpan.org' }
			
		]
	}
	else if (dtp=='20128')
	{
		dp = [
			
			{ y: 4, label:  'www.ldc.upenn.edu' },
			{ y: 8, label:  'www.cis.upenn.edu' },
			{ y: 1, label:  'http://projects.ldc.upenn.edu/TDT3/' },
			{ y: 1, label:  'http://www.seas.upenn.edu/~strctlrn/MSTParser/MSTParser.html' },
			{ y: 1, label:  'http://acl.ldc.upenn.edu/muc7/M98-' },
			{ y: 1, label:  'http://bioie.ldc.upenn.edu' },
			{ y: 2, label:  'nltk.ldc.upenn.edu:9090' }
			
			
		]
	}
	else if (dtp=='20129')
	{
		dp = [     
			{ y: 2, label:  'www.wikipedia.org' },
			{ y: 34, label:  'en.wikipedia.org' },
			{ y: 2, label:  'simple.wikipedia.org' }
			
			
		]
	}
	else if (dtp=='201210')
	{
		dp = [                                         
			{ y: 1, label:  'http://arabic-unknowns.sourceforge.net/' },
			{ y: 1, label:  'http://lpsolve.sourceforge.net/5.5/' },
			{ y: 5, label:  'sourceforge.net' },
			{ y: 2, label:  'gibbslda.sourceforge.net' },
			{ y: 1, label:  'http://minion.sourceforge.net' },
			{ y: 1, label:  'http://libots.sourceforge.net/' },
			{ y: 1, label:  'http://mecab.sourceforge.net/' },
			{ y: 1, label:  'opennlp.sourceforge.net' },
			{ y: 1, label:  'crfpp.sourceforge.net' },
			{ y: 1, label: 'http://stardict.sourceforge.net/' },
			{ y: 1, label: 'http://cwb.sourceforge.net/' }
			
		]
	}
	else if (dtp=='201211')
	{
		dp = [                                         
			{ y: 9, label:  'www.statmt.org' },
			{ y: 2, label:  'statmt.org' }
			
		]
	}
	else if (dtp=='201212')
	{
		dp = [                                         
			{ y: 1, label: 'http://mahout.apache.org/' },
			{ y: 5, label:  'opennlp.apache.org' },
			{ y: 1, label:  'http://uima.apache.org/' },
			{ y: 4, label:  'lucene.apache.org' },
			{ y: 2, label:  'incubator.apache.org' }
			
		]
	}
	else if (dtp=='201213')
	{
		dp = [                                         
			{ y: 14, label:  'code.google.com' },
			{ y: 1, label:  'http://www.google.com/trends/' },
			{ y: 3, label:  'translate.google.com' },
			{ y: 1, label:  'https://developers.google.com/transliterate/' },
			{ y: 1, label:  'http://sites.google.com/site/masayua/p/naist-edic' },
			{ y: 1, label:  'http://books.google.com/ngrams' }
			
		]
	}
	else if (dtp=='201214')
	{
		dp = [                                         
			{ y: 5, label:  'www.ukp.tu-darmstadt.de' }
			
		]
	}
	else if (dtp=='201215')
	{
		dp = [                                         
			{ y: 14, label:  'www.csie.ntu.edu.tw' }
			
		]
	}
	else if (dtp=='201216')
	{
		dp = [                                         
			{ y: 4, label:  'www.isi.edu' }
			
		]
	}
	else if (dtp=='201217')
	{
		dp = [                                         
			{ y: 3, label:  'blog.twitter.com' },
			{ y: 3, label:  'www.twitter.com' },
			{ y: 3, label:  'twitter.com' },
			{ y: 2, label:  'dev.twitter.com' },
			{ y: 3, label:  'pic.twitter.com' },
			{ y: 1, label:  'https://support.twitter.com/articles/49309' }
			
		]
	}
	else if (dtp=='201218')
	{
		dp = [                                         
			{ y: 5, label:  'homepages.inf.ed.ac.uk' }
			
		]
	}
	else if (dtp=='201219')
	{
		dp = [                                         
			{ y: 4, label:  'nlp.cs.nyu.edu' },
			{ y: 1, label:  'http://nlp.nyu.edu/oak' }
			
		]
	}
	else if (dtp=='20140')
	{
		dp = [                                         
			{ y: 4, label:   'www.cs.cmu.edu' },
			{ y: 1, label:   'http://www.ark.cs.cmu.edu/TweetNLP/' },
			{ y: 1, label:   'http://childes.psy.cmu.edu/data/EastAsian/Japanese/Miyata/' }
			
		]
	}
	else if (dtp=='20141')
	{
		dp = [                                         
			{ y: 235, label:  'creativecommons.org' },
		]
	}
	else if (dtp=='20142')
	{
		dp = [                                         
			{ y: 10, label:   'www.statmt.org' }
			
		]
	}
	else if (dtp=='20143')
	{
		dp = [                                         
			{ y: 18, label:   'nlp.stanford.edu' },
			{ y: 1, label:  'http://ai.stanford.edu/' },
			{ y: 1, label:  'http://www-nlp.stanford.edu/' }
			
		]
	}
	else if (dtp=='20144')
	{
		dp = [                                         
			{ y: 5, label:   'www.csie.ntu.edu.tw' },
			{ y: 2, label:   'nlg.csie.ntu.edu.tw'}
			
		]
	}
	else if (dtp=='20145')
	{
		dp =[                                         
			{ y: 7, label:    'mallet.cs.umass.edu' },
			{ y: 2, label:    'people.cs.umass.edu' },
			{ y: 1, label:    'http://www.cs.umass.edu/vdang/ranklib.html' }
			
		]
	}
	else if (dtp=='20146')
	{
		dp = [                                         
			{ y: 5, label:   'svmlight.joachims.org' }
			
		]
	}
	else if (dtp=='20147')
	{
		dp = [                                         
			
			{ y: 31, label:  'github.com' }
			
		]
	}
	else if (dtp=='20148')
	{
		dp = [                                         
			{ y: 6, label:   'wordnet.princeton.edu' },
			{ y: 1, label:   'http://wordnet.cs.princeton.edu/downloads.html' }
			
		]
	}
	else if (dtp=='20149')
	{
		dp = [                                         
			
			{ y: 2, label:   'www.eecs.uottawa.ca' }
			
		]
	}
	else if (dtp=='201410')
	{
		dp = [                                         
			
			{ y: 2, label:  'www.ncbi.nlm.nih.gov' },
			{ y: 4, label:  'www.nlm.nih.gov' }
			
			
		]
	}
	else if (dtp=='201411')
	{
		dp = [                                         
			{ y: 1, label:   'http://cfpp2000.univ-paris3.fr/CFPP2000.pdf' },
			{ y: 4, label:   'www.tal.univ-paris3.fr' }
			
		]
	}
	else if (dtp=='201412')
	{
		dp = [                                         
			{ y: 3, label:   'dev.twitter.com' },
			{ y: 1, label:   'https://blog.twitter.com/' },
			{ y: 1, label:   'https://twitter.com' },
			{ y: 1, label:   'http://yearinreview.twitter.com/en/tps' }
			
		]
	}
	else if (dtp=='201413')
	{
		dp = [                                         
			{ y: 2, label:    'www.imdb.com' }
			
		]
	}
	else if (dtp=='201414')
	{
		dp = [                                         
			{ y: 11, label:   'sourceforge.net' },
			{ y: 1, label:  'http://wn-similarity.sourceforge.net/' },
			{ y: 4, label:  'cwb.sourceforge.net'},
			{ y: 1, label:  'http://mecab.sourceforge.net/' },
			{ y: 1, label:  'http://crfpp.sourceforge.net' },
			{ y: 1, label:  'http://maxent.sourceforge.net/about.html' },
			{ y: 1, label:  'http://jvntextpro.sourceforge.net/' },
			{ y: 1, label:  'http://ngram.sourceforge.net/' }
			
		]
	}
	else if (dtp=='201415')
	{
		dp = [
			{ y: 25, label:   'code.google.com' },
			{ y: 1, label:   'https://developers.google.com/freebase/v1/search' },
			{ y: 1, label:   'https://books.google.com/ngrams' },
			{ y: 3, label:   'sites.google.com' },
			{ y: 2, label:   'docs.google.com' }
			
			
		]
	}
	else if (dtp=='201416')
	{
		dp = [
			{ y: 2, label:  'answers.yahoo.com' },
			{ y: 2, label:   'developer.yahoo.com' },
			{ y: 1, label:   'http://sandbox.yahoo.com/' }
			
		]
	}
	else if (dtp=='201417')
	{
		dp = [                                         
			{ y: 7, label:   'lucene.apache.org'},
			{ y: 6, label:   'opennlp.apache.org'},
			{ y: 1, label:   'http://thrift.apache.org/'},
			{ y: 3, label:   'uima.apache.org'},
			{ y: 1, label:   'https://hbase.apache.org'}
			
		]
	}
	else if (dtp=='201418')
	{
		dp = [                                         
			{ y: 8, label:   'en.wikipedia.org' },
			{ y: 1, label:   'http://www.wikipedia.org' }
			
		]
	}
	else if (dtp=='201419')
	{
		dp = [                                         
			{ y: 6, label:   'catalog.ldc.upenn.edu' },
			{ y: 3, label:   'www.cis.upenn.edu' },
			{ y: 3, label:  'www.ldc.upenn.edu' }
			
		]
	}
	else if (dtp=='20160')
	{
		dp = [                                         
			{ y: 7, label:   'alt.qcri.org' }
			
		]
	}
	else if (dtp=='20161')
	{
		dp = [                                         
			
			{ y: 7, label:   'bitbucket.org' }
			
			
		]
	}
	else if (dtp=='20162')
	{
		dp = [                                         
			{ y: 12, label:   'catalog.ldc.upenn.edu' },
			{ y: 1, label:   'http://www.cis.upenn.edu/~chi-' },
			{ y: 2, label:   'www.seas.upenn.edu' }
			
		]
	}
	else if (dtp=='20163')
	{
		dp = [                                         
			{ y: 181, label:   'github.com' },
			{ y: 1, label:   'http://www.github.com/neubig/lamtram' }
			
		]
	}
	else if (dtp=='20164')
	{
		dp = [                                         
			
			{ y: 107, label:    'creativecommons.org' }
			
		]
	}
	else if (dtp=='20165')
	{
		dp = [                                         
			{ y: 4, label:  'www.csie.ntu.edu.tw' },
			{ y: 5, label:  'nlg.csie.ntu.edu.tw' }
			
		]
	}
	else if (dtp=='20166')
	{
		dp = [                                         
			{ y: 23, label:   'en.wikipedia.org' },
			{ y: 2, label:   'simple.wikipedia.org' },
			{ y: 1, label:   'https://www.wikipedia.org' }
			
		]
	}
	else if (dtp=='20167')
	{
		dp = [                                         
			{ y: 18, label:  'www.statmt.org' },
			{ y: 2, label:   'statmt.org' }
			
		]
	}
	else if (dtp=='20168')
	{
		dp = [                                         
			{ y: 4, label:    'www.chokkan.org'}
			
		]
	}
	else if (dtp=='20169')
	{
		dp = [                                         
			{ y: 42, label:   'code.google.com' },
			{ y: 3, label:   'play.google.com' },
			{ y: 5, label:   'sites.google.com' },
			{ y: 1, label:   'https://groups.google.com/d/forum/word2vec-toolkit' },
			{ y: 2, label:   'www.google.com' },
			{ y: 1, label:   'https://research.google.com/research-outreach.html#/research-outreach/research-datasets' },
			{ y: 2, label:   'translate.google.com' },
			{ y: 1, label:   'http://www.code.google.com/p/word2vec' },
			{ y: 4, label:   'drive.google.com' },
			{ y: 1, label:   'http://scholar.google.com' },
			{ y: 1, label:   'http://docs.google.com/Doc?id=ddshp584_46gqkkjng4' }
		]
	}
	else if (dtp=='201610')
	{
		dp = [                                         
			
			{ y: 6, label:   'universaldependencies.org' }
			
			
		]
	}
	else if (dtp=='201611')
	{
		dp = [                                         
			{ y: 5, label:   'mallet.cs.umass.edu' }
			
		]
	}
	else if (dtp=='201612')
	{
		dp = [                                         
			{ y: 1, label:   'http://lanl.arxiv.org/abs/math.GM/0701393' },
			{ y: 6, label:   'arxiv.org' }
			
		]
	}
	else if (dtp=='201613')
	{
		dp = [                 
			{ y: 5, label:   'lucene.apache.org' },
			{ y: 5, label:   'opennlp.apache.org' },
			{ y: 2, label:  'uima.apache.org' }
			
		]
	}
	else if (dtp=='201614')
	{
		dp = [                                         
			
			{ y: 8, label:   'scikit-learn.org' }
			
		]
	}
	else if (dtp=='201615')
	{
		dp = [                                         
			{ y: 10, label:   'youtu.be' }
			
		]
	}
	else if (dtp=='201616')
	{
		dp = [                                         
			{ y: 8, label:   'dumps.wikimedia.org' }
			
		]
	}
	else if (dtp=='201617')
	{
		dp = [                                         
			{ y: 5, label:   'cogcomp.cs.illinois.edu' }
			
		]
	}
	else if (dtp=='201618')
	{
		dp = [                                         
			{ y: 7, label:   'www.ukp.tu-darmstadt.de' },
			{ y: 2, label:   'www.aiphes.tu-darmstadt.de' },
			{ y: 1, label:   'http://uby.ukp.informatik.tu-darmstadt.de/blunder/' }
			
		]
	}
	else if (dtp=='201619')
	{
		dp = [
			{ y: 3, label:   'dkpro.github.io' },
			{ y: 1, label:   'https://universaldependencies.github.io/docs/' },
			{ y: 6, label:  'stanfordnlp.github.io' },
			{ y: 2, label:  'ghpaetzold.github.io' },
			{ y: 1, label:  'http://nlpchina.github.io/ansj' },
			{ y: 1, label:  'https://networkx.github.io/' },
			{ y: 1, label:  'stanfordnlp.github.io' },
			{ y: 1, label:  'http://colah.github.io' },
			{ y: 1, label:  'https://gnosygnu.github.io/xowa/' },
			{ y: 1, label:  'http://hltfbk.github.io/Excitement-Open-Platform/' },
			{ y: 1, label:  'http://karpathy.github.io/2015/05/21/rnn-effectiveness/' },
			{ y: 6, label:  'taku910.github.io' },
			{ y: 1, label:  'http://getao.github.io' },
			{ y: 1, label:  'https://webanno.github.io/webanno/' }
			
		]
	}
	else if (dtp=='20180')
	{
		dp = [                                         
			{ y: 19, label:   'doi.org' },
			{ y: 8, label:   'dx.doi.org' }
			
		]
	}
	else if (dtp=='20181')
	{
		dp = [                                         
			
			{ y: 7, label:   'spacy.io' }
			
		]
	}
	else if (dtp=='20182')
	{
		dp = [                                         
			{ y: 7, label:   'www.nltk.org' }
			
		]
	}
	else if (dtp=='20183')
	{
		dp = [                                         
			
			{ y: 17, label:   'arxiv.org' }
			
		]
	}
	else if (dtp=='20184')
	{
		dp = [                                         
			{ y: 11, label:   'catalog.ldc.upenn.edu' },
			{ y: 1, label:   'http://www.cis.upenn.edu/' }
			
		]
	}
	else if (dtp=='20185')
	{
		dp = [                                         
			{ y: 374, label:   'github.com' },
			{ y: 1, label:   'https://gist.github.com/jamiew/1112488' },
			{ y: 1, label:   'http://www.github.com/neubig/lamtram' }
			
		]
	}
	else if (dtp=='20186')
	{
		dp = [                                         
			{ y: 59, label:   'creativecommons.org' }
			
		]
	}
	else if (dtp=='20187')
	{
		dp = [                                         
			{ y: 5, label:   'taku910.github.io' },
			{ y: 1, label:   'https://uhh-lt.github.io/par4sim/' },
			{ y: 6, label:    'stanfordnlp.github.io' },
			{ y: 1, label:   'https://vista-unitn-uva.github.io' },
			{ y: 1, label:   'https://webanno.github.io/webanno/' },
			{ y: 1, label:   'http://noisy-text.github.io/2016' },
			{ y: 1, label:   'https://abhilasharavichander.github.io/NLI_StressTest/' },
			{ y: 1, label:   'https://badripatro.github.io/Question-Paraphrases/' },
			{ y: 1, label:   'https://propbank.github.io' },
			{ y: 1, label:   'http://elsevierlabs.github.io/OA-STM-Corpus/' }
			
		]
	}
	else if (dtp=='20188')
	{
		dp = [                                         
			{ y: 31, label:  'nlp.stanford.edu' },
			{ y: 2, label:  'www-nlp.stanford.edu' },
			{ y: 3, label:  'web.stanford.edu' },
			{ y: 1, label:  'http://ai.stanford.edu/' },
			{ y: 1, label:  'https://plato.stanford.edu/archives/spr2015/entries/computational-linguistics/' },
			{ y: 1, label:  'https://cslipublications.stanford.edu/FG/2008/maier.pdf' }
			
		]
	}
	else if (dtp=='20189')
	{
		dp = [                                         
			{ y: 11, label:   'dumps.wikimedia.org' },
			{ y: 1, label:   'https://commons.wikimedia.org/wiki/File:WMF_editing_tasks_survey_July_2015.pdf' },
			{ y: 1, label:   'https://meta.wikimedia.org/wiki/List_of_Wikipedias' }
			
		]
	}
	else if (dtp=='201810')
	{
		dp = [                                         
			{ y: 1, label:   'http://anthology.aclweb.org/attachments/P/P17/P17-2064.Datasets.zip' },
			{ y: 23, label:   'www.aclweb.org'},
			{ y: 3, label:   'aclweb.org' }
			
		]
	}
	else if (dtp=='201811')
	{
		dp = [                                         
			{ y: 5, label:   'www.cs.cornell.edu' }
			
		]
	}
	else if (dtp=='201812')
	{
		dp = [                                         
			
			{ y: 6, label:   'pytorch.org' }
			
		]
	}
	else if (dtp=='201813')
	{
		dp = [                                         
			{ y: 1, label:   'https://es.wikipedia.org/wiki/Portal:' },
			{ y: 13, label:   'en.wikipedia.org' },
			{ y: 3, label:  'www.wikipedia.org' }
			
		]
	}
	else if (dtp=='201814')
	{
		dp = [                                         
			
			{ y: 6, label:   'bitbucket.org' }
			
		]
	}
	else if (dtp=='201815')
	{
		dp = [                                         
			{ y: 6, label:   'www.wikidata.org' },
			{ y: 1, label:   'http://wikidata.org' }
			
		]
	}
	else if (dtp=='201816')
	{
		dp = [                                         
			
			{ y: 11, label:  'radimrehurek.com' }
			
			
		]
	}
	else if (dtp=='201817')
	{
		dp = [                                         
			{ y: 10, label:   'scikit-learn.org' }
			
		]
	}
	else if (dtp=='201818')
	{
		dp = [                                         
			{ y: 5, label:   'mallet.cs.umass.edu' }
			
		]
	}
	else if (dtp=='201819')
	{
		dp = [                                         
			{ y: 1, label:   'https://play.google.com/store/apps/details?id=com.SimplesoftMx.Didxazapp&hl=es' },
			{ y: 31, label:   'code.google.com' },
			{ y: 2, label:   'developers.google.com' },
			{ y: 3, label:   'sites.google.com' },
			{ y: 1, label:   'https://translate.google.com' },
			{ y: 3, label:   'drive.google.com' },
			{ y: 1, label:   'https://books.google.com/ngrams' },
			{ y: 1, label:   'https://cloud.google.com/natural-language/' },
			{ y: 1, label:   'https://docs.google.com/spreadsheets/d/19wJtQjt6D4CtoQH4drrpdsw4jiSkzj24U9L4W7Ob4vc/' },
			{ y: 2, label:   'bigquery.cloud.google.com' }
			
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









