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
		name: "CL: Long Papers",
		dataPoints: [
		
		
			{ y: 11, x: new Date(1974,0) },
			{ y: 23, x: new Date(1975,0) },
			{ y: 16, x: new Date(1976,0) },
			{ y: 6, x: new Date(1977,0) },
			{ y: 42, x: new Date(1978,0) },
			{ y: 3, x: new Date(1980,0) },
			{ y: 6, x: new Date(1981,0) },
			{ y: 6, x: new Date(1982,0) },
			{ y: 7, x: new Date(1983,0) },
			{ y: 7, x: new Date(1984,0) },
			{ y: 11, x: new Date(1985,0) },
			{ y: 17, x: new Date(1986,0) },
			{ y: 16, x: new Date(1987,0) },
			{ y: 43, x: new Date(1988,0) },
			{ y: 30, x: new Date(1989,0) },
			{ y: 25, x: new Date(1990,0) },
			{ y: 21, x: new Date(1991,0) },
			{ y: 23, x: new Date(1992,0) },
			{ y: 20, x: new Date(1993,0) },
			{ y: 24, x: new Date(1994,0) },
			{ y: 19, x: new Date(1995,0) },
			{ y: 19, x: new Date(1996,0) },
			{ y: 11, x: new Date(1997,0) },
			{ y: 24, x: new Date(1998,0) },
			{ y: 21, x: new Date(1999,0) },
			{ y: 21, x: new Date(2000,0) },
			{ y: 24, x: new Date(2001,0) },
			{ y: 3, x: new Date(2002,0) },
			{ y: 5, x: new Date(2003,0) },
			{ y: 2, x: new Date(2004,0) },
			{ y: 9, x: new Date(2005,0) },
			{ y: 28, x: new Date(2006,0) },
			{ y: 25, x: new Date(2007,0) },
			{ y: 18, x: new Date(2008,0) },
			{ y: 17, x: new Date(2009,0) },
			{ y: 13, x: new Date(2010,0) },
			{ y: 2, x: new Date(2011,0) },
			{ y: 1, x: new Date(2012,0) },
			{ y: 3, x: new Date(2013,0) },
			{ y: 11, x: new Date(2014,0) },
			{ y: 13, x: new Date(2015,0) },
			{ y: 9, x: new Date(2016,0) },
			{ y: 6, x: new Date(2017,0) },
			{ y: 11, x: new Date(2018,0) },
			{ y: 0, x: new Date(2019,0) }
				
				
		]
		},
		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Short Papers",
			color: "#e3f702",
			dataPoints: [
			
			
			
			{ y: 2, x: new Date(1974,0) },
			{ y: 38, x: new Date(1975,0) },
			{ y: 10, x: new Date(1976,0) },
			{ y: 7, x: new Date(1977,0) },
			{ y: 10, x: new Date(1978,0) },
			{ y: 9, x: new Date(1980,0) },
			{ y: 12, x: new Date(1981,0) },
			{ y: 8, x: new Date(1982,0) },
			{ y: 7, x: new Date(1983,0) },
			{ y: 6, x: new Date(1984,0) },
			{ y: 7, x: new Date(1985,0) },
			{ y: 8, x: new Date(1986,0) },
			{ y: 12, x: new Date(1987,0) },
			{ y: 10, x: new Date(1988,0) },
			{ y: 11, x: new Date(1989,0) },
			{ y: 9, x: new Date(1990,0) },
			{ y: 14, x: new Date(1991,0) },
			{ y: 17, x: new Date(1992,0) },
			{ y: 21, x: new Date(1993,0) },
			{ y: 20, x: new Date(1994,0) },
			{ y: 17, x: new Date(1995,0) },
			{ y: 19, x: new Date(1996,0) },
			{ y: 21, x: new Date(1997,0) },
			{ y: 18, x: new Date(1998,0) },
			{ y: 16, x: new Date(1999,0) },
			{ y: 18, x: new Date(2000,0) },
			{ y: 17, x: new Date(2001,0) },
			{ y: 18, x: new Date(2002,0) },
			{ y: 19, x: new Date(2003,0) },
			{ y: 16, x: new Date(2004,0) },
			{ y: 18, x: new Date(2005,0) },
			{ y: 15, x: new Date(2006,0) },
			{ y: 15, x: new Date(2007,0) },
			{ y: 18, x: new Date(2008,0) },
			{ y: 18, x: new Date(2009,0) },
			{ y: 24, x: new Date(2010,0) },
			{ y: 23, x: new Date(2011,0) },
			{ y: 25, x: new Date(2012,0) },
			{ y: 29, x: new Date(2013,0) },
			{ y: 25, x: new Date(2014,0) },
			{ y: 20, x: new Date(2015,0) },
			{ y: 22, x: new Date(2016,0) },
			{ y: 22, x: new Date(2017,0) },
			{ y: 23, x: new Date(2018,0) },
			{ y: 5, x: new Date(2019,0) }
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
		name: "CL: Old Authors",
		dataPoints: [
		
				 
				
				{ y: 0.0, x: new Date(1974,0) },
				{ y: 0.025, x: new Date(1975,0) },
				{ y: 0.041666666666666664, x: new Date(1976,0) },
				{ y: 0.23529411764705882, x: new Date(1977,0) },
				{ y: 0.15, x: new Date(1978,0) },
				{ y: 0.23529411764705882, x: new Date(1980,0) },
				{ y: 0.38095238095238093, x: new Date(1981,0) },
				{ y: 0.25, x: new Date(1982,0) },
				{ y: 0.391304347826087, x: new Date(1983,0) },
				{ y: 0.26666666666666666, x: new Date(1984,0) },
				{ y: 0.18518518518518517, x: new Date(1985,0) },
				{ y: 0.21875, x: new Date(1986,0) },
				{ y: 0.20930232558139536, x: new Date(1987,0) },
				{ y: 0.2542372881355932, x: new Date(1988,0) },
				{ y: 0.2608695652173913, x: new Date(1989,0) },
				{ y: 0.2653061224489796, x: new Date(1990,0) },
				{ y: 0.3877551020408163, x: new Date(1991,0) },
				{ y: 0.2033898305084746, x: new Date(1992,0) },
				{ y: 0.5084745762711864, x: new Date(1993,0) },
				{ y: 0.35714285714285715, x: new Date(1994,0) },
				{ y: 0.30357142857142855, x: new Date(1995,0) },
				{ y: 0.29508196721311475, x: new Date(1996,0) },
				{ y: 0.2765957446808511, x: new Date(1997,0) },
				{ y: 0.2153846153846154, x: new Date(1998,0) },
				{ y: 0.5416666666666666, x: new Date(1999,0) },
				{ y: 0.3484848484848485, x: new Date(2000,0) },
				{ y: 0.3142857142857143, x: new Date(2001,0) },
				{ y: 0.42857142857142855, x: new Date(2002,0) },
				{ y: 0.2653061224489796, x: new Date(2003,0) },
				{ y: 0.38235294117647056, x: new Date(2004,0) },
				{ y: 0.3333333333333333, x: new Date(2005,0) },
				{ y: 0.3018867924528302, x: new Date(2006,0) },
				{ y: 0.5087719298245614, x: new Date(2007,0) },
				{ y: 0.39344262295081966, x: new Date(2008,0) },
				{ y: 0.36363636363636365, x: new Date(2009,0) },
				{ y: 0.2682926829268293, x: new Date(2010,0) },
				{ y: 0.36065573770491804, x: new Date(2011,0) },
				{ y: 0.2777777777777778, x: new Date(2012,0) },
				{ y: 0.4111111111111111, x: new Date(2013,0) },
				{ y: 0.3373493975903614, x: new Date(2014,0) },
				{ y: 0.36, x: new Date(2015,0) },
				{ y: 0.2987012987012987, x: new Date(2016,0) },
				{ y: 0.24528301886792453, x: new Date(2017,0) },
				{ y: 0.2828282828282828, x: new Date(2018,0) },
				{ y: 0.25, x: new Date(2019,0) }
				
				
		]
		},
		
		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "New Authors",
			color: "#f70202",
			dataPoints: [
			
			
			
				{ y: 1.0, x: new Date(1974,0) },
				{ y: 0.975, x: new Date(1975,0) },
				{ y: 0.9583333333333334, x: new Date(1976,0) },
				{ y: 0.7647058823529411, x: new Date(1977,0) },
				{ y: 0.85, x: new Date(1978,0) },
				{ y: 0.7647058823529411, x: new Date(1980,0) },
				{ y: 0.6190476190476191, x: new Date(1981,0) },
				{ y: 0.75, x: new Date(1982,0) },
				{ y: 0.6086956521739131, x: new Date(1983,0) },
				{ y: 0.7333333333333333, x: new Date(1984,0) },
				{ y: 0.8148148148148148, x: new Date(1985,0) },
				{ y: 0.78125, x: new Date(1986,0) },
				{ y: 0.7906976744186046, x: new Date(1987,0) },
				{ y: 0.7457627118644068, x: new Date(1988,0) },
				{ y: 0.7391304347826086, x: new Date(1989,0) },
				{ y: 0.7346938775510204, x: new Date(1990,0) },
				{ y: 0.6122448979591837, x: new Date(1991,0) },
				{ y: 0.7966101694915254, x: new Date(1992,0) },
				{ y: 0.4915254237288136, x: new Date(1993,0) },
				{ y: 0.6428571428571429, x: new Date(1994,0) },
				{ y: 0.6964285714285714, x: new Date(1995,0) },
				{ y: 0.7049180327868853, x: new Date(1996,0) },
				{ y: 0.723404255319149, x: new Date(1997,0) },
				{ y: 0.7846153846153846, x: new Date(1998,0) },
				{ y: 0.4583333333333333, x: new Date(1999,0) },
				{ y: 0.6515151515151515, x: new Date(2000,0) },
				{ y: 0.6857142857142857, x: new Date(2001,0) },
				{ y: 0.5714285714285714, x: new Date(2002,0) },
				{ y: 0.7346938775510204, x: new Date(2003,0) },
				{ y: 0.6176470588235294, x: new Date(2004,0) },
				{ y: 0.6666666666666666, x: new Date(2005,0) },
				{ y: 0.6981132075471698, x: new Date(2006,0) },
				{ y: 0.49122807017543857, x: new Date(2007,0) },
				{ y: 0.6065573770491803, x: new Date(2008,0) },
				{ y: 0.6363636363636364, x: new Date(2009,0) },
				{ y: 0.7317073170731707, x: new Date(2010,0) },
				{ y: 0.639344262295082, x: new Date(2011,0) },
				{ y: 0.7222222222222222, x: new Date(2012,0) },
				{ y: 0.5888888888888889, x: new Date(2013,0) },
				{ y: 0.6626506024096386, x: new Date(2014,0) },
				{ y: 0.64, x: new Date(2015,0) },
				{ y: 0.7012987012987013, x: new Date(2016,0) },
				{ y: 0.7547169811320755, x: new Date(2017,0) },
				{ y: 0.7171717171717171, x: new Date(2018,0) },
				{ y: 0.75, x: new Date(2019,0) }
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
		name: "CL: Avg. number of Papers per Author",
		dataPoints: [
			
			
			
			{ y:0.6842105263157895, x: new Date(1974,0) },
			{ y:0.7176470588235294, x: new Date(1975,0) },
			{ y:0.896551724137931, x: new Date(1976,0) },
			{ y:0.5652173913043478, x: new Date(1977,0) },
			{ y:0.8387096774193549, x: new Date(1978,0) },
			{ y:0.7058823529411765, x: new Date(1980,0) },
			{ y:0.8181818181818182, x: new Date(1981,0) },
			{ y:0.7, x: new Date(1982,0) },
			{ y:0.6086956521739131, x: new Date(1983,0) },
			{ y:0.7647058823529411, x: new Date(1984,0) },
			{ y:0.6428571428571429, x: new Date(1985,0) },
			{ y:0.78125, x: new Date(1986,0) },
			{ y:0.6222222222222222, x: new Date(1987,0) },
			{ y:0.8153846153846154, x: new Date(1988,0) },
			{ y:0.8913043478260869, x: new Date(1989,0) },
			{ y:0.6415094339622641, x: new Date(1990,0) },
			{ y:0.6730769230769231, x: new Date(1991,0) },
			{ y:0.625, x: new Date(1992,0) },
			{ y:0.640625, x: new Date(1993,0) },
			{ y:0.7333333333333333, x: new Date(1994,0) },
			{ y:0.6, x: new Date(1995,0) },
			{ y:0.6129032258064516, x: new Date(1996,0) },
			{ y:0.64, x: new Date(1997,0) },
			{ y:0.6268656716417911, x: new Date(1998,0) },
			{ y:0.74, x: new Date(1999,0) },
			{ y:0.5909090909090909, x: new Date(2000,0) },
			{ y:0.5774647887323944, x: new Date(2001,0) },
			{ y:0.6, x: new Date(2002,0) },
			{ y:0.48, x: new Date(2003,0) },
			{ y:0.5, x: new Date(2004,0) },
			{ y:0.5869565217391305, x: new Date(2005,0) },
			{ y:0.7962962962962963, x: new Date(2006,0) },
			{ y:0.6896551724137931, x: new Date(2007,0) },
			{ y:0.5373134328358209, x: new Date(2008,0) },
			{ y:0.5, x: new Date(2009,0) },
			{ y:0.43529411764705883, x: new Date(2010,0) },
			{ y:0.4098360655737705, x: new Date(2011,0) },
			{ y:0.3611111111111111, x: new Date(2012,0) },
			{ y:0.3404255319148936, x: new Date(2013,0) },
			{ y:0.4235294117647059, x: new Date(2014,0) },
			{ y:0.42857142857142855, x: new Date(2015,0) },
			{ y:0.37349397590361444, x: new Date(2016,0) },
			{ y:0.25925925925925924, x: new Date(2017,0) },
			{ y:0.3238095238095238, x: new Date(2018,0) },
			{ y:0.20833333333333334, x: new Date(2019,0) }
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
		name: "CL: Avg. number of Authors per Paper per Year",
		dataPoints: [
			
			
			
			{ y:1.4615384615384615, x: new Date(1974,0) },
			{ y:1.3934426229508197, x: new Date(1975,0) },
			{ y:1.1153846153846154, x: new Date(1976,0) },
			{ y:1.7692307692307692, x: new Date(1977,0) },
			{ y:1.1923076923076923, x: new Date(1978,0) },
			{ y:1.4166666666666667, x: new Date(1980,0) },
			{ y:1.2222222222222223, x: new Date(1981,0) },
			{ y:1.4285714285714286, x: new Date(1982,0) },
			{ y:1.6428571428571428, x: new Date(1983,0) },
			{ y:1.3076923076923077, x: new Date(1984,0) },
			{ y:1.5555555555555556, x: new Date(1985,0) },
			{ y:1.28, x: new Date(1986,0) },
			{ y:1.6071428571428572, x: new Date(1987,0) },
			{ y:1.2264150943396226, x: new Date(1988,0) },
			{ y:1.1219512195121952, x: new Date(1989,0) },
			{ y:1.5588235294117647, x: new Date(1990,0) },
			{ y:1.4857142857142858, x: new Date(1991,0) },
			{ y:1.6, x: new Date(1992,0) },
			{ y:1.5609756097560976, x: new Date(1993,0) },
			{ y:1.3636363636363635, x: new Date(1994,0) },
			{ y:1.6666666666666667, x: new Date(1995,0) },
			{ y:1.631578947368421, x: new Date(1996,0) },
			{ y:1.5625, x: new Date(1997,0) },
			{ y:1.5952380952380953, x: new Date(1998,0) },
			{ y:1.3513513513513513, x: new Date(1999,0) },
			{ y:1.6923076923076923, x: new Date(2000,0) },
			{ y:1.7317073170731707, x: new Date(2001,0) },
			{ y:1.6666666666666667, x: new Date(2002,0) },
			{ y:2.0833333333333335, x: new Date(2003,0) },
			{ y:2.0, x: new Date(2004,0) },
			{ y:1.7037037037037037, x: new Date(2005,0) },
			{ y:1.255813953488372, x: new Date(2006,0) },
			{ y:1.45, x: new Date(2007,0) },
			{ y:1.8611111111111112, x: new Date(2008,0) },
			{ y:2.0, x: new Date(2009,0) },
			{ y:2.2972972972972974, x: new Date(2010,0) },
			{ y:2.44, x: new Date(2011,0) },
			{ y:2.769230769230769, x: new Date(2012,0) },
			{ y:2.9375, x: new Date(2013,0) },
			{ y:2.361111111111111, x: new Date(2014,0) },
			{ y:2.3333333333333335, x: new Date(2015,0) },
			{ y:2.6774193548387095, x: new Date(2016,0) },
			{ y:3.857142857142857, x: new Date(2017,0) },
			{ y:3.088235294117647, x: new Date(2018,0) },
			{ y:4.8, x: new Date(2019,0) }
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
		name: "CL: Long Papers",
		dataPoints: [
			
			
			
			{ y:0.5, x: new Date(1974,0) },
			{ y:1.263157894736842, x: new Date(1975,0) },
			{ y:0.2, x: new Date(1976,0) },
			{ y:0.0, x: new Date(1977,0) },
			{ y:3.0, x: new Date(1978,0) },
			{ y:5.222222222222222, x: new Date(1980,0) },
			{ y:5.916666666666667, x: new Date(1981,0) },
			{ y:7.375, x: new Date(1982,0) },
			{ y:18.0, x: new Date(1983,0) },
			{ y:23.666666666666668, x: new Date(1984,0) },
			{ y:13.285714285714286, x: new Date(1985,0) },
			{ y:4.25, x: new Date(1986,0) },
			{ y:19.583333333333332, x: new Date(1987,0) },
			{ y:12.0, x: new Date(1988,0) },
			{ y:15.363636363636363, x: new Date(1989,0) },
			{ y:3.3333333333333335, x: new Date(1990,0) },
			{ y:9.714285714285714, x: new Date(1991,0) },
			{ y:9.117647058823529, x: new Date(1992,0) },
			{ y:7.619047619047619, x: new Date(1993,0) },
			{ y:8.7, x: new Date(1994,0) },
			{ y:9.764705882352942, x: new Date(1995,0) },
			{ y:8.894736842105264, x: new Date(1996,0) },
			{ y:11.761904761904763, x: new Date(1997,0) },
			{ y:8.944444444444445, x: new Date(1998,0) },
			{y:11.125, x: new Date(1999,0) },
			{ y:8.777777777777779, x: new Date(2000,0) },
			{ y:8.764705882352942, x: new Date(2001,0) },
			{ y:13.38888888888889, x: new Date(2002,0) },
			{ y:9.947368421052632, x: new Date(2003,0) },
			{ y:13.9375, x: new Date(2004,0) },
			{ y:16.11111111111111, x: new Date(2005,0) },
			{ y:15.533333333333333, x: new Date(2006,0) },
			{ y:53.666666666666664, x: new Date(2007,0) },
			{ y:8.277777777777779, x: new Date(2008,0) },
			{ y:24.27777777777778, x: new Date(2009,0) },
			{ y:24.125, x: new Date(2010,0) },
			{ y:8.956521739130435, x: new Date(2011,0) },
			{ y:13.28, x: new Date(2012,0) },
			{ y:8.862068965517242, x: new Date(2013,0) },
			{ y:15.8, x: new Date(2014,0) },
			{ y:11.8, x: new Date(2015,0) },
			{ y:8.227272727272727, x: new Date(2016,0) },
			{ y:10.818181818181818, x: new Date(2017,0) },
			{ y:9.0, x: new Date(2018,0) },
			{ y:16.8, x: new Date(2019,0) }
		]
		},


		{        
			type: "stackedColumn",
			showInLegend: true,
			name: "Short Papers",
			color: "#C00C0C",
			dataPoints: [
			
			
			
			
			
			{ y:0.0, x: new Date(1974,0) },
			{ y:0.8695652173913043, x: new Date(1975,0) },
			{ y:0.25, x: new Date(1976,0) },
			{ y:2.5, x: new Date(1977,0) },
			{ y:2.1666666666666665, x: new Date(1978,0) },
			{ y:0.3333333333333333, x: new Date(1980,0) },
			{ y:0.5, x: new Date(1981,0) },
			{ y:3.0, x: new Date(1982,0) },
			{ y:5.0, x: new Date(1983,0) },
			{ y:6.428571428571429, x: new Date(1984,0) },
			{ y:1.8181818181818181, x: new Date(1985,0) },
			{ y:0.8823529411764706, x: new Date(1986,0) },
			{ y:3.625, x: new Date(1987,0) },
			{ y:7.27906976744186, x: new Date(1988,0) },
			{ y:3.1333333333333333, x: new Date(1989,0) },
			{ y:2.64, x: new Date(1990,0) },
			{ y:4.619047619047619, x: new Date(1991,0) },
			{ y:4.913043478260869, x: new Date(1992,0) },
			{ y:2.5, x: new Date(1993,0) },
			{ y:1.625, x: new Date(1994,0) },
			{ y:6.631578947368421, x: new Date(1995,0) },
			{ y:4.2631578947368425, x: new Date(1996,0) },
			{ y:2.909090909090909, x: new Date(1997,0) },
			{ y:2.5833333333333335, x: new Date(1998,0) },
			{ y:3.5238095238095237, x: new Date(1999,0) },
			{ y:4.190476190476191, x: new Date(2000,0) },
			{ y:6.791666666666667, x: new Date(2001,0) },
			{ y:5.333333333333333, x: new Date(2002,0) },
			{ y:6.6, x: new Date(2003,0) },
			{ y:5.5, x: new Date(2004,0) },
			{ y:4.333333333333333, x: new Date(2005,0) },
			{ y:3.5, x: new Date(2006,0) },
			{ y:3.76, x: new Date(2007,0) },
			{ y:2.9444444444444446, x: new Date(2008,0) },
			{ y:7.470588235294118, x: new Date(2009,0) },
			{ y:8.615384615384615, x: new Date(2010,0) },
			{ y:4.0, x: new Date(2011,0) },
			{ y:14.0, x: new Date(2012,0) },
			{ y:10.0, x: new Date(2013,0) },
			{ y:9.818181818181818, x: new Date(2014,0) },
			{ y:3.769230769230769, x: new Date(2015,0) },
			{ y:5.555555555555555, x: new Date(2016,0) },
			{ y:4.333333333333333, x: new Date(2017,0) },
			{ y:5.090909090909091, x: new Date(2018,0) },
			{ y:0, x: new Date(2019,0) }
			
			
			
			
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
		name: "CL: URLs per Paper 1974-2019",
		dataPoints: [
			
			
			
			{ y:0.0, x: new Date(1974,0) },
			{ y:0.0, x: new Date(1975,0) },
			{ y:0.0, x: new Date(1976,0) },
			{ y:0.0, x: new Date(1977,0) },
			{ y:0.0, x: new Date(1978,0) },
			{ y:0.0, x: new Date(1980,0) },
			{ y:0.0, x: new Date(1981,0) },
			{ y:0.0, x: new Date(1982,0) },
			{ y:0.0, x: new Date(1983,0) },
			{ y:0.0, x: new Date(1984,0) },
			{ y:0.0, x: new Date(1985,0) },	
			{ y:0.0, x: new Date(1986,0) },
			{ y:0.0, x: new Date(1987,0) },
			{ y:0.0, x: new Date(1988,0) },
			{ y:0.0, x: new Date(1989,0) },
			{ y:0.0, x: new Date(1990,0) },
			{ y:0.0, x: new Date(1991,0) },
			{ y:0.0, x: new Date(1992,0) },
			{ y:0.0, x: new Date(1993,0) },
			{ y:0.0, x: new Date(1994,0) },
			{ y:0.2978723404255319, x: new Date(1995,0) },
			{ y:0.2708333333333333, x: new Date(1996,0) },
			{ y:0.575, x: new Date(1997,0) },
			{ y:0.6938775510204082, x: new Date(1998,0) },
			{ y:0.851063829787234, x: new Date(1999,0) },
			{ y:1.2553191489361701, x: new Date(2000,0) },
			{ y:1.3958333333333333, x: new Date(2001,0) },
			{ y:1.3461538461538463, x: new Date(2002,0) },
			{ y:2.6666666666666665, x: new Date(2003,0) },
			{ y:1.6521739130434783, x: new Date(2004,0) },
			{ y:1.08, x: new Date(2005,0) },
			{ y:1.4, x: new Date(2006,0) },
			{ y:2.054054054054054, x: new Date(2007,0) },
			{ y:1.5625, x: new Date(2008,0) },
			{ y:2.096774193548387, x: new Date(2009,0) },
			{ y:2.119047619047619, x: new Date(2010,0) },
			{ y:2.395348837209302, x: new Date(2011,0) },
			{ y:1.9722222222222223, x: new Date(2012,0) },
			{ y:4.4411764705882355, x: new Date(2013,0) },
			{ y:4.121212121212121, x: new Date(2014,0) },
			{ y:3.75, x: new Date(2015,0) },
			{ y:2.5714285714285716, x: new Date(2016,0) },
			{ y:4.48, x: new Date(2017,0) },
			{ y:5.645161290322581, x: new Date(2018,0) },
			{ y:4.5, x: new Date(2019,0) }
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
		name: "CL : Avg. number of URLs in footnote per Paper per Year",
		dataPoints: [
			
			
			
			{ y:0.0, x: new Date(1974,0) },
			{ y:0.0, x: new Date(1975,0) },
			{ y:0.0, x: new Date(1976,0) },
			{ y:0.0, x: new Date(1977,0) },
			{ y:0.0, x: new Date(1978,0) },
			{ y:0, x: new Date(1979,0) },
			{ y:0.0, x: new Date(1980,0) },
			{ y:0.0, x: new Date(1981,0) },
			{ y:0.0, x: new Date(1982,0) },
			{ y:0.0, x: new Date(1983,0) },
			{ y:0.0, x: new Date(1984,0) },
			{ y:0.0, x: new Date(1985,0) },
			{ y:0.0, x: new Date(1986,0) },
			{ y:0.0, x: new Date(1987,0) },
			{ y:0.0, x: new Date(1988,0) },
			{ y:0.0, x: new Date(1989,0) },
			{ y:0.0, x: new Date(1990,0) },
			{ y:0.0, x: new Date(1991,0) },
			{ y:0.0, x: new Date(1992,0) },
			{ y:0.0, x: new Date(1993,0) },
			{ y:0.0, x: new Date(1994,0) },
			{ y:0.0, x: new Date(1995,0) },
			{ y:0.0, x: new Date(1996,0) },
			{ y:0.0, x: new Date(1997,0) },
			{ y:0.0, x: new Date(1998,0) },
			{ y:0.0, x: new Date(1999,0) },
			{ y:0.0, x: new Date(2000,0) },
			{ y:0.0, x: new Date(2001,0) },
			{ y:0.038461538461538464, x: new Date(2002,0) },
			{ y:0.037037037037037035, x: new Date(2003,0) },
			{ y:0.043478260869565216, x: new Date(2004,0) },
			{ y:0.0, x: new Date(2005,0) },
			{ y:0.0, x: new Date(2006,0) },
			{ y:0.1891891891891892, x: new Date(2007,0) },
			{ y:0.09375, x: new Date(2008,0) },
			{ y:0.1935483870967742, x: new Date(2009,0) },
			{ y:0.2619047619047619, x: new Date(2010,0) },
			{ y:0.6976744186046512, x: new Date(2011,0) },
			{ y:0.3611111111111111, x: new Date(2012,0) },
			{ y:1.2352941176470589, x: new Date(2013,0) },
			{ y:1.0303030303030303, x: new Date(2014,0) },
			{ y:1.2142857142857142, x: new Date(2015,0) },
			{ y:0.6428571428571429, x: new Date(2016,0) },
			{ y:0.88, x: new Date(2017,0) },
			{ y:1.1935483870967742, x: new Date(2018,0) },
			{ y:1.0, x: new Date(2019,0) }
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
		name: "CL : Avg. number of Tables per Paper per Year",
		dataPoints: [
			
			
			
			{ y:2.1666666666666665, x: new Date(1974,0) },
			{ y:0.5161290322580645, x: new Date(1975,0) },
			{ y:0.7428571428571429, x: new Date(1976,0) },
			{ y:1.0666666666666667, x: new Date(1977,0) },
			{ y:0.28, x: new Date(1978,0) },
			{ y:0, x: new Date(1979,0) },
			{ y:0.03125, x: new Date(1980,0) },
			{ y:0.3333333333333333, x: new Date(1981,0) },
			{ y:0.0, x: new Date(1982,0) },
			{ y:0.14814814814814814, x: new Date(1983,0) },
			{ y:0.21875, x: new Date(1984,0) },
			{ y:0.1388888888888889, x: new Date(1985,0) },
			{ y:0.04, x: new Date(1986,0) },
			{ y:0.0, x: new Date(1987,0) },
			{ y:0.2222222222222222, x: new Date(1988,0) },
			{ y:0.2222222222222222, x: new Date(1989,0) },
			{ y:0.32608695652173914, x: new Date(1990,0) },
			{ y:0.0, x: new Date(1991,0) },
			{ y:0.2916666666666667, x: new Date(1992,0) },
			{ y:1.56, x: new Date(1993,0) },
			{ y:0.9230769230769231, x: new Date(1994,0) },
			{ y:0.8297872340425532, x: new Date(1995,0) },
			{ y:1.5416666666666667, x: new Date(1996,0) },
			{ y:2.475, x: new Date(1997,0) },
			{ y:1.5510204081632653, x: new Date(1998,0) },
			{ y:1.127659574468085, x: new Date(1999,0) },
			{ y:2.1702127659574466, x: new Date(2000,0) },
			{ y:1.7291666666666667, x: new Date(2001,0) },
			{ y:4.115384615384615, x: new Date(2002,0) },
			{ y:5.703703703703703, x: new Date(2003,0) },
			{ y:6.043478260869565, x: new Date(2004,0) },
			{ y:6.0, x: new Date(2005,0) },
			{ y:3.85, x: new Date(2006,0) },
			{ y:3.2162162162162162, x: new Date(2007,0) },
			{ y:4.84375, x: new Date(2008,0) },
			{ y:4.774193548387097, x: new Date(2009,0) },
			{ y:3.761904761904762, x: new Date(2010,0) },
			{ y:4.651162790697675, x: new Date(2011,0) },
			{ y:4.944444444444445, x: new Date(2012,0) },
			{ y:9.147058823529411, x: new Date(2013,0) },
			{ y:6.606060606060606, x: new Date(2014,0) },
			{ y:3.607142857142857, x: new Date(2015,0) },
			{ y:6.071428571428571, x: new Date(2016,0) },
			{ y:7.36, x: new Date(2017,0) },
			{ y:5.612903225806452, x: new Date(2018,0) },
			{ y:12.5, x: new Date(2019,0) }
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
		name: "CL : Avg. number of Figures per Paper per Year",
		dataPoints: [
			
			
			
			{ y:1.8333333333333333, x: new Date(1974,0) },
			{ y:2.5483870967741935, x: new Date(1975,0) },
			{ y:2.4, x: new Date(1976,0) },
			{ y:5.666666666666667, x: new Date(1977,0) },
			{ y:1.08, x: new Date(1978,0) },
			{ y:0, x: new Date(1979,0) },
			{ y:0.28125, x: new Date(1980,0) },
			{ y:1.8611111111111112, x: new Date(1981,0) },
			{ y:0.9285714285714286, x: new Date(1982,0) },
			{ y:1.037037037037037, x: new Date(1983,0) },
			{ y:0.34375, x: new Date(1984,0) },
			{ y:0.3333333333333333, x: new Date(1985,0) },
			{ y:1.14, x: new Date(1986,0) },
			{ y:2.1621621621621623, x: new Date(1987,0) },
			{ y:1.3968253968253967, x: new Date(1988,0) },
			{ y:0.5, x: new Date(1989,0) },
			{ y:1.1304347826086956, x: new Date(1990,0) },
			{ y:1.2142857142857142, x: new Date(1991,0) },
			{ y:1.375, x: new Date(1992,0) },
			{ y:2.64, x: new Date(1993,0) },
			{ y:1.9615384615384615, x: new Date(1994,0) },
			{ y:1.9361702127659575, x: new Date(1995,0) },
			{ y:2.6875, x: new Date(1996,0) },
			{ y:3.55, x: new Date(1997,0) },
			{ y:3.0, x: new Date(1998,0) },
			{ y:2.723404255319149, x: new Date(1999,0) },
			{ y:2.425531914893617, x: new Date(2000,0) },
			{ y:2.1875, x: new Date(2001,0) },
			{ y:2.6153846153846154, x: new Date(2002,0) },
			{ y:3.8518518518518516, x: new Date(2003,0) },
			{ y:3.4347826086956523, x: new Date(2004,0) },
			{ y:5.2, x: new Date(2005,0) },
			{ y:1.75, x: new Date(2006,0) },
			{ y:2.891891891891892, x: new Date(2007,0) },
			{ y:4.375, x: new Date(2008,0) },
			{ y:4.387096774193548, x: new Date(2009,0) },
			{ y:4.0476190476190474, x: new Date(2010,0) },
			{ y:3.9767441860465116, x: new Date(2011,0) },
			{ y:3.5833333333333335, x: new Date(2012,0) },
			{ y:6.676470588235294, x: new Date(2013,0) },
			{ y:5.787878787878788, x: new Date(2014,0) },
			{ y:6.428571428571429, x: new Date(2015,0) },
			{ y:3.7142857142857144, x: new Date(2016,0) },
			{ y:7.04, x: new Date(2017,0) },
			{ y:5.935483870967742, x: new Date(2018,0) },
			{ y:9.75, x: new Date(2019,0) }
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
		name: "CL : Most Popular primary URL domains & their Frequencies",
		legendText: "",
		dataPoints: [
			{ y:35,  label:'github.com'  },
			{ y:18,  label:'www.cs.um.edu.mt'  },
			{ y:18,  label:'www.isi.edu'  },
			{ y:16,  label:'www.nist.gov'  },
			{ y:15,  label:'www.aclweb.org'  },
			{ y:15,  label:'www.cis.upenn.edu'  },
			{ y:15,  label:'wordnet.princeton.edu'  },
			{ y:14,  label:'code.google.com'  },
			{ y:13,  label:'catalog.ldc.upenn.edu'  },
			{ y:12,  label:'mitpress.mit.edu'  },
			{ y:12,  label:'nlp.stanford.edu'  },
			{ y:12,  label:'lcl.uniroma1.it'  },
			{ y:11,  label:'en.wikipedia.org'  },
			{ y:10,  label:'www.itl.nist.gov'  },
			{ y:9,  label:'trec.nist.gov'  },
			{ y:9,  label:'www.statmt.org'  },
			{ y:9,  label:'homepages.inf.ed.ac.uk'  },
			{ y:8,  label:'www.ldc.upenn.edu'  },
			{ y:8,  label:'www.csie.ntu.edu.tw'  },
			{ y:8,  label:'www.nlm.nih.gov'  },
			{ y:8,  label:'sites.google.com'  }
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
		name: "CL : Top Unique GitHub Pages",
		legendText: "",
		dataPoints: [ 
			{ y: 1, label: 'clab/lstm-' },
			{ y: 1, label: 'daormar/thot' },
			{ y: 6, label: 'kvarada/non-NA_Resources' },
			{ y: 1, label: 'knowitall/reverb-core/blob/master/core/src/main/java/edu/washington/' },
			{ y: 1, label: 'aalto-speech/morfessor' },
			{ y: 1, label: 'aalto-speech/flatcat' },
			{ y: 1, label: 'ibeltagy/pl-semantics' },
			{ y: 1, label: 'ibeltagy/rrr' },
			{ y: 1, label: 'clab/lstm-parser' },
			{ y: 1, label: 'clulab/releases/tree/master/cl2017-qa' },
			{ y: 1, label: 'dongpng/geo-independence-testing' },
			{ y: 1, label: 'ivendrov/order-embedding' },
			{ y: 1, label: 'seomoz/word2gauss' },
			{ y: 1, label: 'nmrksic/counter-fitting' },
			{ y: 1, label: 'mfaruqui/non-distributional' },
			{ y: 1, label: 'smartschat/art' },
			{ y: 1, label: 'burcu-can/TreeStructuredDP' },
			{ y: 1, label: 'apache/lucene-solr' },
			{ y: 1, label: 'riedlma/SECOS' },
			{ y: 1, label: 'jodaiber/semantic_compound_splitting' }
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
		name: "CL : Top University Pages",
		legendText: "",
		dataPoints: [   
			{ y: 26,  label: 'MIT' },
			{ y: 12,  label: 'UC Berkeley' },
			{ y: 52,  label: 'University of Edinburgh' },
			{ y: 39, label: 'University of Toronto' },                         
			{ y: 36,label: 'Clifford Allbutt Lecture Theatre' },
			{ y: 33,  label: 'Penn Museum' },
			{ y: 27,  label: 'Stanford University' },
			{ y: 25, label: 'University of Sussex' },
			{ y: 24,  label: 'University of Texas at Austin'},
			{ y: 24, label: 'Memorial Art Gallery' },
			{ y: 19,  label: 'Carnegie Mellon University Silicon Valley' },
			{ y: 16,  label: 'Microsoft Research' },
			{ y: 15,  label: 'Brown University' },
			{ y: 15,  label: 'University of Haifa' },
			{ y: 14, label: 'University of Delaware' },
			{ y: 14,  label: 'Radboud Universiteit' },
			{ y: 14,  label: 'University of Pittsburgh' },
			{ y: 13, label: 'Columbia University' },
			{ y: 13,  label: 'Université de Rennes 2 - Campus La Harpe' },
			{ y: 13,  label: 'Academiegebouw Universiteit Utrecht' },
			
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
		
		
		if (dt==1995)
		{
		
		dp = [                                         
			{ y: 3, label: 'mit.edu' },                         
			{ y: 1,  label: 'www.cup.org' },
			{ y: 1,  label: 'u-tokyo.ac.jp' },
			{ y: 1,  label: 'washington.edu' },
			{ y: 1,  label: 'rnit.edu' }
			
			
		]
		}
		else if (dt==1996)
		{
		
		dp = [  
			{ y: 1,  label: 'edu.mt' },
			{ y: 1, label: 'mdx.ac.uk' },                         
			{ y: 1,  label: 'uic.edu' },
			{ y: 1,  label: 'ulg.ac.be' },
			{ y: 2,  label: 'www.cup.org' },
			{ y: 1,  label: 'mit.edu' },
			
			
			
		]
		}
		else if(dt==1997)
		{
			dp= [ 
			{ y:2, label: 'mit.edu' },
			{ y:1, label: 'georgetown.edu' },
			{ y:4, label: 'um.edu.mt' },
			{ y:3, label: 'rug.nl:4321' },
			{ y:1, label: 'uni-tuebingen.de' },
			{ y:1, label: 'cnr.it' }
			
			
		]
		}
		else if(dt==1998)
		{
			dp= [ 
			{ y:3, label: 'mit.edu' },
			{ y:3, label: 'um.edu.mt' },
			{ y:1, label: 'princeton.edu' },
			{ y:1, label: 'u-net.com' },
			{ y:1, label: 'um.edu.mUacl' },
			{ y:4, label: 'columbia.edu' },
			{ y:1, label: 'saic.com' },
			{ y:1, label: 'uwaterloo.ca' },
			{ y:1, label: 'nlit.edutEVCO' },
			{ y:1, label: 'digital.com' },
			{ y:1, label: 'kuleuven.ac.be' },
			{ y:1, label: 'biomednet.cora' },
			{ y:1, label: 'uchicago.edu' },
			{ y:1, label: 'bell-labs.com' },
			{ y:1, label: 'biomednet.com' }
			
			
			
		]
		}
		else if(dt==1999)
		{
			dp= [ 
			{ y:3, label: 'mit.ed' },
			{ y:4, label: 'aclweb.org' },
			{ y:3, label: 'um.edu.mt' },			
			{ y:2, label: 'ogi.edu' },
			{ y:1, label: 'iiEdemokritos.gr' },
			{ y:1, label: 'princeton.edu' },
			{ y:1, label: 'um.edu.mffacl' },
			{ y:1, label: 'upenn.edu' },
			{ y:1, label: 'blackwellpublishers.co.uk' },
			{ y:1, label: 'nphil.uni-' },
			{ y:1, label: 'cl.cam' },
			{ y:1, label: 'harvard.edu' },
			{ y:1, label: 'inpg.fr' },
			{ y:1, label: 'uva.nl' },
			{ y:1, label: 'toronto.edu' },
			{ y:1, label: 'berkeley.edu' }
			
		]
		}
		else if(dt==2000)
		{
			dp= [                                         
			{ y: 10, label: 'mit.edu' },
			{ y: 4, label: 'um.edu.mt' },
			{ y: 4, label: 'aclweb.org' },
			{ y: 3, label: 'rug.nl' },
			{ y: 1, label: 'bas.bg' },
			{ y: 1, label: 'nist.gov' },
			{ y: 2, label: 'xerox.com' },
			{ y: 1, label: 'cogsci.ed.ac.uk' },
			{ y: 1, label: 'rutgers.edu' },
			{ y: 1, label: 'upc.es' },
			{ y: 1, label: 'colorado.edu' },
			{ y: 1, label: 'nzdl.org' },
			{ y: 1, label: 'lhsl.com' },
			{ y: 1, label: 'cam.sri.com' }
			
		]
		}
		else if(dt==2001)
		{
			dp= [                                         
			{ y: 4, label: 'mit.edu' },
			{ y: 4, label: 'um.edu.mt' },
			{ y: 4, label: 'aclweb.org' },
			{ y: 5, label: 'nist.gov' },
			{ y: 2, label: 'toronto.edu' },
			{ y: 2, label: 'kub.nl' },
			{ y: 2, label: 'rulequest.com' },
			{ y: 2, label: 'uni-sb.de' },
			{ y: 2, label: 'bestweb.net' },
			{ y: 2, label: 'att.com' },
			{ y: 1, label: 'rug.nl' },
			{ y: 2, label: 'stanford.edu' },
			{ y: 1, label: 'upenn.edu' },
			{ y: 1, label: 'masda.vxu.se' },
			{ y: 1, label: 'kuleuven.ac.be' },
			{ y: 1, label: 'unsw.edu.au' },
			{ y: 1, label: 'monash.edu.au' },
			{ y: 1, label: 'unige.ch' },
			{ y: 1, label: 'tufts.edu' },
			{ y: 1, label: 'clres.com' }
			
		]
		}
		else if(dt==2002)
		{
			dp= [                                         
			{ y: 2, label: 'ed.ac.uk' },
			{ y: 1, label: 'eskimo.com' },
			{ y: 1, label: 'postech.ac.kr' },
			{ y: 1, label: 'ucsc.edu' },
			{ y: 1, label: 'sharp.co.uk' },
			{ y: 1, label: 'berkeley.edu' },
			{ y: 1, label: 'cs.rutgers.edu' },
			{ y: 1, label: 'bbc.co.uk' },
			{ y: 1, label: 'lanl.gov' },
			{ y: 1, label: 'colorado.edu' },
			{ y: 1, label: 'princeton.edu' },
			{ y: 1, label: 'rt66.com' },
			{ y: 1, label: 'emerald-library.com' },
			{ y: 1, label: 'iit.nrc.ca' },
			{ y: 1, label: 'iee.org.uk' },
			{ y: 1, label: 'gespro.com' },
			{ y: 1, label: 'benton.org', },
			{ y: 1, label: 'cdcnpin.org' },
			{ y: 1, label: 'abdn.ac.uk' },
			{ y: 1, label: 'toronto.edu' }
			
		]
		}
		else if(dt==2003)
		{
			dp= [                                         
			{ y: 5, label: 'umd.edu' },
			{ y: 3, label: 'bton.ac.uk' },
			{ y: 3, label: 'upenn.edu' },
			{ y: 2, label: 'isi.edu' },
			{ y: 2, label: 'mysite.com' },
			{ y: 2, label: 'altavista.com' },
			{ y: 2, label: 'foo.ca' },
			{ y: 2, label: 'jhu.edu' },
			{ y: 1, label: 'informatik.rwth-' },
			{ y: 1, label: 'uchicago.edu' },
			{ y: 1, label: 'humanities' },
			{ y: 1, label: 'hcrc.ed.ac.uk' },
			{ y: 1, label: 'language-experiments.org' },
			{ y: 1, label: 'av.com' },
			{ y: 1, label: 'rulequest.com' },
			{ y: 1, label: 'freedict.com' },
			{ y: 2, label: 'archive.org' },
			{ y: 1, label: 'columbia.edu' },
			{ y: 1, label: 'google.com' }
			
		]
		}
		else if(dt==2004)
		{
			dp= [     
			{ y: 1, label: 'unt.edu' },
			{ y: 2, label: 'brighton.ac.uk' },
			{ y: 2, label: 'berkeley.edu' },
			{ y: 4, label: 'upenn.edu' },
			{ y: 2, label: 'uni-karlsruhe.de' },
			{ y: 2, label: 'nist.gov' },
			{ y: 1, label: 'mandarintools.com' },
			{ y: 1, label: 'aol.com' },
			{ y: 1, label: 'singladura.com' },
			{ y: 1, label: 'cordis.lu' },
			{ y: 1, label: 'utdallas.edu' },
			{ y: 1, label: 'brandeis.edu' },
			{ y: 1, label: 'unikarlsruhe.de' },
			{ y: 3, label: 'uni-karlsruhe.de' },
			{ y: 1, label: 'www-i6.Informatik' },
			{ y: 1, label: 'edres.org' },
			{ y: 1, label: 'harvard.edu' },
			{ y: 1, label: 'indiana.edu' },
			{ y: 1, label: 'essex.ac.uk' }
			
		]
		}
		else if(dt==2005)
		{
			dp= [
			{ y: 1, label: 'cmu.edu' },
			{ y: 4, label: 'upenn.edu' },
			{ y: 2, label: 'cornell.edu' },
			{ y: 3, label: 'nist.gov' },
			{ y: 1, label: 'utwente.nl' },
			{ y: 1, label: 'berkeley.edu' },
			{ y: 1, label: 'europa.eu.int' },
			{ y: 1, label: 'stanford.edu' },
			{ y: 1, label: 'gate.ac' },
			{ y: 1, label: 'google.com' },
			{ y: 1, label: 'upenn.edu' },
			{ y: 1, label: 'fjoch.com' },
			{ y: 1, label: 'usc.edu' },
			{ y: 1, label: 'microsoft.com' }
			
		]
		}
		else if(dt==2006)
		{
			dp= [                                         
			{ y: 3, label: 'isi.edu' },
			{ y: 2, label: 'senseval.org' },
			{ y: 2, label: 'umn.edu' },
			{ y: 2, label: 'uniroma1.it' },
			{ y: 2, label: 'csail.mit.edu' },
			{ y: 2, label: 'tc-star.org' },
			{ y: 1, label: 'xerox.com' },
			{ y: 1, label: 'filmsite.org' },
			{ y: 1, label: 'abdn.ac.uk' },
			{ y: 1, label: 'stanford.edu' },
			{ y: 1, label: 'www.m-w.com' },
			{ y: 1, label: 'hcu.ox.ac.uk' },
			{ y: 1, label: 'unsw.edu.au' },
			{ y: 1, label: 'macquariedictionary.com.au' },
			{ y: 1, label: 'harvard.edu' },
			{ y: 1, label: 'cam.ac.uk' },
			{ y: 1, label: 'nml.nih.gov' },
			{ y: 1, label: 'benjamin.umd.edu' },
			{ y: 1, label: 'informatics.susx.ac.uk' },
			{ y: 1, label: 'csie.ntu.edu.tw' }
			
		]
		}
		else if(dt==2007)
		{
			dp= [                                         
			{ y: 8, label: 'nist.gov' },
			{ y: 2, label: 'tc-star.org' },
			{ y: 2, label: 'princeton.edu' },
			{ y: 2, label: 'open.ac.uk' },
			{ y: 2, label: 'unifi.it' },
			{ y: 2, label: 'ualberta.ca' },
			{ y: 1, label: 'education.uiowa.edu' },
			{ y: 1, label: 'altavista.com' },
			{ y: 1, label: 'informatik.rwth-aachen.de' },
			{ y: 1, label: 'clsp.jhu.edu' },
			{ y: 1, label: 'atosorigin.es' },
			{ y: 1, label: 'iei.pi.cnr.it' },
			{ y: 1, label: 'research.nii.ac.jp' },
			{ y: 1, label: 'ics.mq.edu.au' },
			{ y: 1, label: 'cs.cmu.edu' },
			{ y: 1, label: 'dfki.de' },
			{ y: 1, label: 'mit.edu' },
			{ y: 1, label: 'ifi.unizh.ch' }
			
		]
		}
		else if(dt==2008)
		{
			dp= [                                         
			{ y: 3, label: 'upenn.edu' },
			{ y: 3, label: 'msi.vxu.se' },
			{ y: 3, label: 'isi.edu' },
			{ y: 2, label: 'informatics.susx.ac.uk' },
			{ y: 1, label: 'computing.dcu.ie' },
			{ y: 1, label: 'aclweb-org' },
			{ y: 1, label: 'utwente.nl' },
			{ y: 1, label: 'reuters.com' },
			{ y: 1, label: 'aljazeera.net' },
			{ y: 1, label: 'upc.edu' },
			{ y: 1, label: 'uniroma2.it' },
			{ y: 1, label: 'umass.edu' },
			{ y: 1, label: 'dashoptimization' },
			{ y: 1, label: 'nist.gov' },
			{ y: 1, label: 'rulequest.com' },
			{ y: 1, label: 'sourceforge.net' },
			{ y: 1, label: 'joachims.org' },
			{ y: 1, label: 'univ-lille3.fr' },
			{ y: 1, label: 'haifa.ac.il' },
			{ y: 1, label: 'ntu.edu.tw' }
			
		]
		}
		else if(dt==2009)
		{
			dp= [
			{ y: 2, label: 'isi.edu' },
			{ y: 3, label: 'rutgers.edu' },
			{ y: 5, label: 'nist.gov' },
			{ y: 2, label: 'delph-in.net' },
			{ y: 2, label: 'emmtee.net' },
			{ y: 2, label: 'pitt.edu' },
			{ y: 2, label: 'hawaii.edu' },
			{ y: 2, label: 'nltk.org' },
			{ y: 2, label: 'mitre.org' },
			{ y: 2, label: 'tedlab.mit' },
			{ y: 1, label: 'promo.net' },
			{ y: 1, label: 'uvigo.es' },
			{ y: 1, label: 'ntu.edu.tw' },
			{ y: 3, label: 'uio.no' },
			{ y: 1, label: 'www2003.org' },
			{ y: 1, label: 'nflrc.hawaii.edu' },
			{ y: 1, label: 'computing.dcu.ie' },
			{ y: 1, label: 'ilk.uvt' },
			{ y: 1, label: 'ssrn.com' }
			
		]
		}
		else if(dt==2010)
		{
			dp=[     
			{ y: 1, label: 'cnn.com' },
			{ y: 2, label: 'timeml.org' },
			{ y: 2, label: 'shef.ac.uk' },
			{ y: 2, label: 'homepages.inf.ed.ac.uk' },
			{ y: 1, label: 'princeton.edu' },
			{ y: 1, label: 'uci.edu' },
			{ y: 3, label: 'nist.gov' },
			{ y: 1, label: 'uwa.edu.au' },
			{ y: 1, label: 'jees.or.jp' },
			{ y: 1, label: 'sourceforge.net' },
			{ y: 1, label: 'lancs.ac.uk' },
			{ y: 1, label: 'readinga-z.com' },
			{ y: 1, label: 'time.com' },
			{ y: 1, label: 'yahoo.com' },
			{ y: 1, label: 'supanet.com' },
			{ y: 1, label: 'lemurproject.org' },
			{ y: 1, label: 'wumpus-' },
			{ y: 1, label: 'live.com' },
			{ y: 1, label: 'let.ru.nl' },
			{ y: 2, label: 'r-project.org' }
			
		]
		}
		else if(dt==2011)
		{
			dp= [
			{ y: 2, label: 'cia.gov' },
			{ y: 3, label: 'pitt.edu' },
			{ y: 4, label: 'homepages.inf.ed.ac.uk' },
			{ y: 4, label: 'upenn.edu' },
			{ y: 2, label: 'maltparser.org' },
			{ y: 5, label: 'sourceforge.net' },
			{ y: 2, label: 'muni.cz' },
			{ y: 2, label: 'blogspot.com' },
			{ y: 2, label: 'handle.net' },
			{ y: 2, label: 'icwsm.org' },
			{ y: 3, label: 'google.com' },
			{ y: 1, label: 'stanford.edu' },
			{ y: 1, label: 'ualberta.ca' },
			{ y: 1, label: 'cs.uic.edu' },
			{ y: 1, label: 'atmos-chem-phys.net' },
			{ y: 1, label: 'mpg.de' },
			{ y: 1, label: 'washington.edu' },
			{ y: 1, label: 'nyu.edu' },
			{ y: 1, label: 'nextens.uvt.nl' },
			{ y: 1, label: 'vxu.se' }
			
		]
		}
		else if(dt==2012)
		{
			dp= [ 
			{ y: 2, label: 'ub.edu' },
			{ y: 3, label: 'u-szeged.hu' },
			{ y: 3, label: 'sourceforge.net' },
			{ y: 2, label: 'biu.ac.il' },
			{ y: 2, label: 'timeml.org' },
			{ y: 4, label: 'nist.gov' },
			{ y: 2, label: 'codeproject.com' },
			{ y: 5, label: 'google.com' },
			{ y: 1, label: 'nih.gov' },
			{ y: 1, label: 'patrickpantel.com' },
			{ y: 2, label: 'umd.edu' },
			{ y: 1, label: 'nyu.edu' },
			{ y: 1, label: 'open.ac.uk' },
			{ y: 1, label: 'mq.edu.au' },
			{ y: 1, label: 'googlelabs.com' },
			{ y: 1, label: 'surveymonkey.com' },
			{ y: 1, label: 'tarrlab.org' },
			{ y: 1, label: 'peerpress.de' },
			{ y: 1, label: 'irishtimes.com' }
			
		]
		}
		else if(dt==2013)
		{
			dp= [   
			{ y: 2, label: 'ub.edu' },
			{ y: 8, label: 'uniroma1.it' },
			{ y: 6, label: 'stanford.edu' },
			{ y: 5, label: 'uni-stuttgart.de' },
			{ y: 7, label: 'nist.gov' },
			{ y: 6, label: 'google.com' },
			{ y: 3, label: 'princeton.edu' },
			{ y: 3, label: 'dianamccarthy.co.uk' },
			{ y: 3, label: 'purl.org' },
			{ y: 3, label: 'renater.fr' },
			{ y: 3, label: 'statmt.org' },
			{ y: 2, label: 'nyu.edu' },
			{ y: 2, label: 'technion.ac.il' },
			{ y: 3, label: 'sourceforge.net' },
			{ y: 2, label: 'upenn.edu' },
			{ y: 2, label: 'uni-saarland.de' },
			{ y: 2, label: 'dmoz.org' },
			{ y: 3, label: 'nih.gov' },
			{ y: 2, label: 'yippy.com' }
			
		]
		}
		else if(dt==2014)
		{
			dp= [                                         
			{ y: 5, label: 'cmu.edu' },
			{ y: 3, label: 'berkeley.edu' },
			{ y: 4, label: 'ehu.es' },
			{ y: 4, label: 'columbia.edu' },
			{ y: 2, label: 'uniroma1.it' },
			{ y: 2, label: 'princeton.edu' },
			{ y: 2, label: 'qamus.org' },
			{ y: 2, label: 'bbc.co.uk' },
			{ y: 2, label: 'natcorp.ox.ac.uk' },
			{ y: 8, label: 'upenn.edu' },
			{ y: 2, label: 'openfst.org' },
			{ y: 2, label: 'nus.edu.sg' },
			{ y: 2, label: 'tkuhn.ch' },
			{ y: 1, label: 'ibm.com' },
			{ y: 1, label: 'wisc.edu' },
			{ y: 1, label: 'upc.edu' },
			{ y: 1, label: 'metaoptimize.com' },
			{ y: 2, label: 'sourceforge.net' },
			{ y: 1, label: 'anc.org' },
			{ y: 2, label: 'stanford.edu' }
			
		]
		}
		else if(dt==2015)
		{
			dp= [     
			{ y: 1, label: 'unm.edu' },
			{ y: 2, label: 'princeton.edu' },
			{ y: 2, label: 'cs.ox.ac.uk' },
			{ y: 2, label: 'imdb.com' },
			{ y: 3, label: 'isi.edu' },
			{ y: 2, label: 'nltk.org' },
			{ y: 3, label: 'unitn.it' },
			{ y: 2, label: 'reddit.com' },
			{ y: 1, label: 'isti.cnr.it' },
			{ y: 1, label: 'google.com' },
			{ y: 1, label: 'statmt.org' },
			{ y: 1, label: 'berkeley.edu' },
			{ y: 1, label: 'globalwordnet.org' },
			{ y: 2, label: 'upenn.edu' },
			{ y: 1, label: 'dicts.info' },
			{ y: 1, label: 'keenage.com' },
			{ y: 1, label: 'ntu.edu.tw' },
			{ y: 1, label: 'oxforddictionaries.com' },
			{ y: 1, label: 'homepages.inf.ed.ac.uk' },
			{ y: 1, label: 'aclweb.org' }
			
		]
		}
		else if(dt==2016)
		{
			dp= [  
			{ y: 1, label: 'un.org' },
			{ y: 5, label: 'github.com' },
			{ y: 4, label: 'dx.doi.org' },
			{ y: 2, label: 'mq.edu.au' },
			{ y: 5, label: 'google.com' },
			{ y: 2, label: 'unibo.it' },
			{ y: 2, label: 'natcorp.ox.ac.uk' },
			{ y: 2, label: 'ntu.edu.tw' },
			{ y: 2, label: 'princeton.edu' },
			{ y: 2, label: 'cimec.unitn.it' },
			{ y: 1, label: 'cl.ut.ee' },
			{ y: 1, label: 'csail.mit.edu' },
			{ y: 1, label: 'ics.aalto.fi' },
			{ y: 1, label: 'blog.stata.com' },
			{ y: 1, label: 'ohchr.org' },
			{ y: 1, label: 'weibo.com' },
			{ y: 1, label: 'project-syndicate.org' },
			{ y: 1, label: 'bing.com' },
			{ y: 1, label: 'cs.cmu.edu' },
			{ y: 1, label: 'cs.stanford.edu' }
			
		]
		}
		else if(dt==2017)
		{
			dp= [ 
			{ y: 1, label: 'uva.nl' },
			{ y: 8, label: 'github.com' },
			{ y: 3, label: 'tu-darmstadt.de' },
			{ y: 5, label: 'google.com' },
			{ y: 3, label: 'facebook.com' },
			{ y: 3, label: 'uniroma1.it' },
			{ y: 2, label: 'babelnet.org' },
			{ y: 2, label: 'princeton.edu' },
			{ y: 2, label: 'wikipedia.org' },
			{ y: 2, label: 'cornell.edu' },
			{ y: 2, label: 'youtube.com' },
			{ y: 2, label: 'arxiv.org' },
			{ y: 1, label: 'bwaldvogel.de' },
			{ y: 2, label: 'sourceforge.net' },
			{ y: 1, label: 'unive.it' },
			{ y: 1, label: 'senseval.org' },
			{ y: 1, label: 'swarthmore.edu' },
			{ y: 1, label: 'york.ac.uk' },
			{ y: 1, label: 'mpi-inf.mpg.de' },
			{ y: 1, label: 'ox.ac.uk' }
			
			
		]
		}
		else if(dt==2018)
		{
			dp= [ 
			{ y: 3, label: 'isi.edu' },
			{ y: 18, label: 'github.com' },
			{ y: 12, label: 'upenn.edu' },
			{ y: 4, label: 'rochester.edu' },
			{ y: 4, label: 'reddit.com' },
			{ y: 4, label: 'ic.ac.uk' },
			{ y: 4, label: 'google.com' },
			{ y: 3, label: 'mq.edu.au' },
			{ y: 3, label: 'nih.gov' },
			{ y: 4, label: 'cuni.cz' },
			{ y: 3, label: 'cmu.edu' },
			{ y: 2, label: 'h-its.org' },
			{ y: 2, label: 'arxiv.org' },
			{ y: 3, label: 'stanford.edu' },
			{ y: 2, label: 'sussex.ac.uk' },
			{ y: 2, label: 'wiktionary.org' },
			{ y: 2, label: 'nist.gov' },
			{ y: 2, label: 'ucsb.edu' },
			{ y: 3, label: 'essex.ac.uk' },
			{ y: 2, label: 'clic.ub.edu' }
			
		]
		}
		else
		{
			dp = [
			{ y: 3, label: 'github.com' },
			{ y: 2, label: 'doi.org' },
			{ y: 2, label: 'google.com' },
			{ y: 1, label: 'aclweb.org' },
			{ y: 1, label: 'usyd.edu.au' },
			{ y: 1, label: 'nii.ac.jp' },
			{ y: 1, label: 'universaldependencies.org' },
			{ y: 1, label: 'digling.org' },
			{ y: 1, label: 'dropbox.com' },
			{ y: 1, label: 'douban.com' }
			
			
			];
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
	if (dtp=='19950')
	{
		dp = [                                         
			{ y: 2, label: 'www.mitpress.mit.edu'},
			{ y: 1, label: 'http://www-mitpress.mit.edu/jrnls-catalog/linguistic.html'}
			
		]
	}
	else if (dtp=='19951')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cup.org' }
			
		]
	}
	else if (dtp=='19952')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.sanpo.t.u-tokyo.ac.jp/people/nigel.html'}
			
		]
	}
	else if (dtp=='19953')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cs.washington.edu/research/jair'}
			
		]
	}
	else if (dtp=='19954')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.mitpress.rnit.edu'}
			
		]
	}
	else if (dtp=='19960')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cs.um.edu.mt/acl/'}
			
		]
	}
	else if (dtp=='19961')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cs.mdx.ac.uk/harold'}
			
		]
	}
	else if (dtp=='19962')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.uic.edu/orgs/tei/info/guide.html'}
			
		]
	}
	else if (dtp=='19963')
	{
		dp = [                                         
			{ y: 1, label: 'http://engdepl.philo.ulg.ac.be'}
			
		]
	}
	else if (dtp=='19964')
	{
		dp = [                                         
			{ y: 2, label: 'www.cup.org'}
			
		]
	}
	else if (dtp=='19965')
	{
		dp = [                                         
			{ y: 1, label: 'http://www-mitpress.mit,edu/j'}
			
		]
	}
	else if (dtp=='19970')
	{
		dp = [ 
			{ y: 2, label: 'www-mitpress.mit.edu'}
						
		]
	}
	else if (dtp=='19971')
	{
		dp = [
			{ y: 1, label: 'http://www.georgetown.edu/luperfoy/Discourse-Treebank/dri-home.html'}
						
		]
	}
	else if (dtp=='19972')
	{
		dp = [     
			{ y: 3, label: 'www.cs.um.edu.mt'},
			{ y: 1, label: 'http://www.es.um.edu.mt/ad/'}
						
		]
	}
	else if (dtp=='19973')
	{
		dp = [ 
			{ y: 3, label: 'odur.let.rug.nl:4321'}
						
		]
	}
	else if (dtp=='19974')
	{
		dp = [ 
			{ y: 1, label: 'http://www.sfs.nphil.uni-tuebingen.de/sfb'}
						
		]
	}
	else if (dtp=='19975')
	{
		dp = [  
			{ y: 1, label: 'http://www.ilc.pi.cnr.it/EAGLES96/home.html'}
						
		]
	}
	else if (dtp=='19980')
	{
		dp = [ 
			{ y: 3, label: 'mitpress.mit.edu' }
						
		]
	}
	else if (dtp=='19981')
	{
		dp = [ 
			{ y: 3, label: 'www.cs.um.edu.mt' }
						
		]
	}
	else if (dtp=='19982')
	{
		dp = [ 
			{ y: 1, label: 'http://www.cogsci.princeton.edu' }
						
		]
	}
	else if (dtp=='19983')
	{
		dp = [ 
			{ y: 1, label: 'http://www.grs.u-net.com' }
						
		]
	}
	else if (dtp=='19984')
	{
		dp = [ 
			{ y: 1, label: 'http://www.cs.um.edu.mUacl/' }
						
		]
	}
	else if (dtp=='19985')
	{
		dp = [ 
			{ y: 4, label: 'www.cs.columbia.edu' }
						
		]
	}
	else if (dtp=='19986')
	{
		dp = [ 
			{ y: 1, label: 'http://www.muc.saic.com' }
						
		]
	}
	else if (dtp=='19987')
	{
		dp = [ 
			{ y: 1, label: 'http://solo.uwaterloo.ca/trdbms/docs/' }
						
		]
	}
	else if (dtp=='19988')
	{
		dp = [ 
			{ y: 1, label: 'http://mitprsss.nlit.edutEVCO' }
						
		]
	}
	else if (dtp=='19989')
	{
		dp = [ 
			{ y: 1, label: 'http://altavista.digital.com' }
						
		]
	}
	else if (dtp=='199810')
	{
		dp = [ 
			{ y: 1, label: 'http://www.ccl.kuleuven.ac.be/,-~frank' }
						
		]
	}
	else if (dtp=='199811')
	{
		dp = [ 
			{ y: 1, label: 'http://biomednet.cora' }
						
		]
	}
	else if (dtp=='199812')
	{
		dp = [ 
			{ y: 1, label: 'http://humanities.uchicago.edu/' }
						
		]
	}
	else if (dtp=='199813')
	{
		dp = [ 
			{ y: 1, label: 'http://www.bell-labs.com/project/tts' }
						
		]
	}
	else if (dtp=='199814')
	{
		dp = [ 
			{ y: 1, label: 'http://biomednet.com' }
						
		]
	}
	else if (dtp=='19990')
	{
		dp = [                                         
			{ y: 2, label: 'http://mitpress.mit.edu/MLANG' },
			{ y: 1, label: 'http://cognet.mit.edu' }
			
		]
	}
	else if (dtp=='19991')
	{
		dp = [                                         
			{ y: 4, label: 'www.aclweb.org' }		
		]
	}
	else if (dtp=='19992')
	{
		dp = [                                         
			{ y: 3, label: 'www.cs.um.edu.mt' }			
		]
	}
	else if (dtp=='19993')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cse.ogi.edu/CSLU/HLTsurvey/HLTsurvey.html' },
			{ y: 1, label: 'http://cslu.cse.ogi.edu/HLTsurvey/' }
		]
	}
	else if (dtp=='19994')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.iiEdemokritos.gr/skel/edn/acai99' }			
		]
	}
	else if (dtp=='19995')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cogsci.princeton.edu/~wn/' }			
		]
	}
	else if (dtp=='19996')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cs.um.edu.mffacl/' }			
		]
	}
	else if (dtp=='19997')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cis.upenn.edu/~melamed/' }			
		]
	}
	else if (dtp=='19998')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.blackwellpublishers.co.uk' }			
		]
	}
	else if (dtp=='19999')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.sfs.nphil.uni-' }			
		]
	}
	else if (dtp=='199910')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cl.cam' }			
		]
	}
	else if (dtp=='199911')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.eecs.harvard.edu/' }			
		]
	}
	else if (dtp=='199912')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.icp.inpg.fr/ELRA' }			
		]
	}
	else if (dtp=='199913')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.hum.uva.nl/~ewn' }			
		]
	}
	else if (dtp=='199914')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cs.toronto.edu/~gh' }			
		]
	}
	else if (dtp=='199915')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.icsi.berkeley.edu/NTL/' }			
		]
	}
	else if (dtp=='20000')
	{
		dp = [                                         
			{ y: 5, label: 'mitpress.mit.edu' },
			{ y: 5, label: 'cognet.mit.edu' }	
		]
	}
	else if (dtp=='20001')
	{
		dp = [                                         
			{ y: 4, label: 'www.cs.um.edu.mt' }			
		]
	}
	else if (dtp=='20002')
	{
		dp = [                                         
			{ y: 4, label: 'www.aclweb.org' }			
		]
	}
	else if (dtp=='20003')
	{
		dp = [                                         
			{ y: 3, label: 'www.let.rug.nl' }			
		]
	}
	else if (dtp=='20004')
	{
		dp = [                                         
			{ y: 1, label: 'http://lml.bas.bg/,-~stoyan/' }			
		]
	}
	else if (dtp=='20005')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.itl.nist.gov/div894' }			
		]
	}
	else if (dtp=='20006')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.xrce.xerox.com/research/mltt/arabic' },
			{ y: 1, label: 'http://www.parc.xerox.com/istl/groups/nltt/pargram/'}
		]
	}
	else if (dtp=='20007')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cogsci.ed.ac.uk/sigphon/' }			
		]
	}
	else if (dtp=='20008')
	{
		dp = [                                         
			{ y: 1, label: 'http://ruccs.rutgers.edu/roa.html' }			
		]
	}
	else if (dtp=='20009')
	{
		dp = [                                         
			{ y: 1, label: 'http://www-lsi.upc.es/~morrill/' }			
		]
	}
	else if (dtp=='200010')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.colorado.edu/' }			
		]
	}
	else if (dtp=='200011')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.nzdl.org/cgi-bin/congb' }			
		]
	}
	else if (dtp=='200012')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.lhsl.com' }			
		]
	}
	else if (dtp=='200013')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cam.sri.com/tr' }			
		]
	}
	else if (dtp=='20010')
	{
		dp = [                                         
			{ y: 4, label: 'mitpress.mit.edu' }			
		]
	}
	else if (dtp=='20011')
	{
		dp = [                                         
			{ y: 4, label: 'www.cs.um.edu.mt' }			
		]
	}
	else if (dtp=='20012')
	{
		dp = [                                         
			{ y: 4, label: 'www.aclweb.org' }			
		]
	}
	else if (dtp=='20013')
	{
		dp = [                                         
			{ y: 4, label: 'www.itl.nist.gov' },
			{ y: 1, label: 'http://www.nist.gov/speech/' }	
		]
	}
	else if (dtp=='20014')
	{
		dp = [                                         
			{ y: 2, label: 'www.cs.toronto.edu' }			
		]
	}
	else if (dtp=='20015')
	{
		dp = [                                         
			{ y: 2, label: 'ilk.kub.nl'}			
		]
	}
	else if (dtp=='20016')
	{
		dp = [                                         
			{ y: 2, label: 'www.rulequest.com' }			
		]
	}
	else if (dtp=='20017')
	{
		dp = [                                         
			{ y: 2, label: 'www.coli.uni-sb.de' }			
		]
	}
	else if (dtp=='20018')
	{
		dp = [                                         
			{ y: 2, label:  'www.bestweb.net'}			
		]
	}
	else if (dtp=='20019')
	{
		dp = [                                         
			{ y: 2, label: 'www.research.att.com'}			
		]
	}
	else if (dtp=='200110')
	{
		dp = [                                         
			{ y: 1, label: 'http://odur.let.rug.nl/van-' }			
		]
	}
	else if (dtp=='200111')
	{
		dp = [                                         
			{ y: 1, label: 'http://www-csli.stanford.edu/'},
			{ y: 1, label: 'http://logic.stanford.edu/kif/'}
		]
	}
	else if (dtp=='200112')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cis.upenn.edu/~xtag/tech-' }			
		]
	}
	else if (dtp=='200113')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.masda.vxu.se/~nivre'}			
		]
	}
	else if (dtp=='200114')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cs.kuleuven.ac.be/~ldh' }			
		]
	}
	else if (dtp=='200115')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cse.unsw.edu.au/~quinlan/' }			
		]
	}
	else if (dtp=='200116')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.arts.monash.edu.au/ling/ka.shtml' }			
		]
	}
	else if (dtp=='200117')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.latl.unige.ch/latl/personal/paola.html' }			
		]
	}
	else if (dtp=='200118')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cs.tufts.edu/' }			
		]
	}
	else if (dtp=='200119')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.clres.com' }			
		]
	}
	else if (dtp=='20020')
	{
		dp = [                                         
			{ y: 2, label: 'www.ltg.ed.ac.uk' }			
		]
	}
	else if (dtp=='20021')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.eskimo.com/scs/C-faq/q13.20.html' }			
		]
	}
	else if (dtp=='20022')
	{
		dp = [                                         
			{ y: 1, label: 'http://nlp.postech.ac.kr/' }			
		]
	}
	else if (dtp=='20023')
	{
		dp = [                                         
			{ y: 1, label: 'http://ling.ucsc.edu/pullum' }			
		]
	}
	else if (dtp=='20024')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.sle.sharp.co.uk/senseval2'}			
		]
	}
	else if (dtp=='20025')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.icsi.berkeley.edu/framenet/' }			
		]
	}
	else if (dtp=='20026')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cs.rutgers.edu/mdstone' }			
		]
	}
	else if (dtp=='20027')
	{
		dp = [                                         
			{ y: 1, label: 'http://news.bbc.co.uk/hi/russian/world/default.htm'}			
		]
	}
	else if (dtp=='20028')
	{
		dp = [                                         
			{ y: 1, label: 'http://xxx.lanl.gov/cmp-lg' }			
		]
	}
	else if (dtp=='20029')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.colorado.edu/ling/jurafsky/ws97/' }			
		]
	}
	else if (dtp=='200210')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cogsci.princeton.edu/wn' }			
		]
	}
	else if (dtp=='200211')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.rt66.com/gcooke/SemanTag' }			
		]
	}
	else if (dtp=='200212')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.emerald-library.com' }			
		]
	}
	else if (dtp=='200213')
	{
		dp = [                                         
			{ y: 1, label: 'http://extractor.iit.nrc.ca/' }			
		]
	}
	else if (dtp=='200214')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.iee.org.uk/publish/inspec/'}			
		]
	}else if (dtp=='200215')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.gespro.com'}			
		]
	}
	else if (dtp=='200216')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.benton.org'}			
		]
	}else if (dtp=='200217')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cdcnpin.org/news/prevnews.htm' }			
		]
	}
	else if (dtp=='200218')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.csd.abdn.ac.uk/research/sumtime' }			
		]
	}
	else if (dtp=='200219')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cs.toronto.edu/gh' }			
		]
	}
	else if (dtp=='20030')
	{
		dp = [                                         
			{ y: 5, label: 'umiacs.umd.edu' }	
		]
	}
	else if (dtp=='20031')
	{
		dp = [                                         
			{ y: 3, label: 'www.itri.bton.ac.uk' }			
		]
	}
	else if (dtp=='20032')
	{
		dp = [                                         
			{ y: 3, label: 'www.ldc.upenn.edu' }			
		]
	}
	else if (dtp=='20033')
	{
		dp = [                                         
			{ y: 2, label: 'www.isi.edu' }			
		]
	}
	else if (dtp=='20034')
	{
		dp = [                                         
			{ y: 2, label: 'mysite.com' }			
		]
	}
	else if (dtp=='20035')
	{
		dp = [                                         
			{ y: 2, label: 'babelfish.altavista.com' }			
		]
	}
	else if (dtp=='20036')
	{
		dp = [                                         
			{ y: 2, label: 'www.foo.ca' }			
		]
	}
	else if (dtp=='20037')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.clsp.jhu.edu/ws99/projects' },
			{ y: 1, label: 'http://nlp.cs.jhu.edu/nasmith/cmsc-' }
		]
	}
	else if (dtp=='20038')
	{
		dp = [                                         
			{ y: 1, label: 'http://www-i6.informatik.rwth-' }			
		]
	}
	else if (dtp=='20039')
	{
		dp = [                                         
			{ y: 1, label: 'http://humanities.uchicago.edu/linguistics/students/dchiggin/' }			
		]
	}
	else if (dtp=='200310')
	{
		dp = [                                         
			{ y: 1, label: 'http://humanities.uchicago.edu/linguistics/students/dchiggin/' }			
		]
	}
	else if (dtp=='200311')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.hcrc.ed.ac.uk/web' }			
		]
	}
	else if (dtp=='200312')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.language-experiments.org/' }			
		]
	}
	else if (dtp=='200313')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.av.com' }			
		]
	}
	else if (dtp=='200314')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.rulequest.com/' }			
		]
	}
	else if (dtp=='200315')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.freedict.com' }			
		]
	}
	else if (dtp=='200316')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.archive.org/web/researcher/' },
			{ y: 1, label: 'http://web.archive.org/web/19970607032410' }
		]
	}
	else if (dtp=='200317')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cs.columbia.edu/acl/home.html' }
		]
	}
	else if (dtp=='200318')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.google.com/programming-contest/' }
		]
	}
	else if (dtp=='20040')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cs.unt.edu/rada/downloads.htm' }			
		]
	}
	else if (dtp=='20041')
	{
		dp = [                                         
			{ y: 2, label: 'www.itri.brighton.ac.uk' }			
		]
	}
	else if (dtp=='20042')
	{
		dp = [                                         
			{ y: 2, label: 'www.icsi.berkeley.edu' }			
		]
	}
	else if (dtp=='20043')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.ldc.upenn.edu/' },
			{ y: 2, label: 'www.cis.upenn.edu' },
			{ y: 1, label: 'http://morph.ldc.upenn.edu/Projects/Chinese/LDC' }
		]
	}
	else if (dtp=='20044')
	{
		dp = [                                         
			{ y: 1, label: 'ol2000.aifb.uni-karlsruhe.de' },
			{ y: 1, label: 'http://ol2001.aifb.uni-karlsruhe.de/' }	
		]
	}
	else if (dtp=='20045')
	{
		dp = [                                         
			{ y: 2, label: 'www.nist.gov' }			
		]
	}
	else if (dtp=='20046')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.mandarintools.com/segmenter.html' }			
		]
	}
	else if (dtp=='20047')
	{
		dp = [                                         
			{ y: 1, label: 'http://members.aol.com/jacksonpe/music1/home.htm' }			
		]
	}
	else if (dtp=='20048')
	{
		dp = [                                         
			{ y: 1, label: 'http://fetish.singladura.com/index.php' }			
		]
	}
	else if (dtp=='20049')
	{
		dp = [                                         
			{ y: 1, label: 'http://dbs.cordis.lu' }			
		]
	}
	else if (dtp=='200410')
	{
		dp = [                                         
			{ y: 1, label: 'http://xwn.hlt.utdallas.edu/papers.html' }			
		]
	}
	else if (dtp=='200411')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cs.brandeis.edu/paulb/CoreLex/corelex.html' }			
		]
	}
	else if (dtp=='200412')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.aifb.unikarlsruhe.de/WBS/ysu/publications/eon2002' }			
		]
	}
	else if (dtp=='200413')
	{
		dp = [                                         
			{ y: 2, label: 'ol2000.aifb.uni-karlsruhe.de' },
			{ y: 1, label: 'http://ol2001.aifb.uni-karlsruhe.de/' }
		]
	}
	else if (dtp=='200414')
	{
		dp = [                                         
			{ y: 1, label: 'http://www-i6.Informatik' }			
		]
	}
	else if (dtp=='200415')
	{
		dp = [                                         
			{ y: 1, label: 'http://edres.org/betsy/' }			
		]
	}
	else if (dtp=='200416')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.wjh.harvard.edu/' }			
		]
	}
	else if (dtp=='200417')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.indiana.edu/socpsy/ACT/' }			
		]
	}
	else if (dtp=='200418')
	{
		dp = [                                         
			{ y: 1, label: 'http://cswww.essex.ac.uk/staff/poesio/cbc/' }			
		]
	}
	else if (dtp=='20050')
	{
		dp = [                                         
			{ y: 1, label: 'http://www-2.cs.cmu.edu/lemur' }
		]
	}
	else if (dtp=='20051')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.ldc.upenn.edu' },
			{ y: 3, label: 'http://www.cis.upenn.edu/' },

		]
	}
	else if (dtp=='20052')
	{
		dp = [                                         
			{ y: 2, label: 'www.cs.cornell.edu' }			
		]
	}
	else if (dtp=='20053')
	{
		dp = [                                         
			{ y: 2, label: 'www.nist.gov'},
			{ y: 1, label: 'http://www.itl.nist.gov/iaui/894.02/related'}
		]
	}
	else if (dtp=='20054')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cs.utwente.nl/Etheune/GG/GG_index.html' }			
		]
	}
	else if (dtp=='20055')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.icsi.berkeley.edu/framenet/' }
		]
	}
	else if (dtp=='20056')
	{
		dp = [                                         
			{ y: 1, label:  'http://europa.eu.int/eur-lex/' }			
		]
	}
	else if (dtp=='20057')
	{
		dp = [                                         
			{ y: 1, label: 'http://cslipublications.stanford.edu/' }			
		]
	}
	else if (dtp=='20058')
	{
		dp = [                                         
			{ y: 1, label:  'http://gate.ac' }			
		]
	}
	else if (dtp=='20059')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.google.com' }			
		]
	}
	else if (dtp=='200510')
	{
		dp = [                                         
			{ y: 2, label: 'http://www.ldc.upenn.edu' }			
		]
	}
	else if (dtp=='200511')
	{
		dp = [                                         
			{ y: 2, label: 'http://www.fjoch.com/YASMET.html' }			
		]
	}
	else if (dtp=='200512')
	{
		dp = [                                         
			{ y: 2, label: 'http://www.usc.edu/hpcc' }			
		]
	}
	else if (dtp=='200513')
	{
		dp = [                                         
			{ y: 2, label: 'http://research.microsoft.com/jfgao' }			
		]
	}
	else if (dtp=='20060')
	{
		dp = [                                         
			{ y: 3, label: 'www.isi.edu' }			
		]
	}
	else if (dtp=='20061')
	{
		dp = [                                         
			{ y: 2, label: 'www.senseval.org' }
		]
	}
	else if (dtp=='20062')
	{
		dp = [                                         
			{ y: 2, label:  'www.d.umn.edu' }			
		]
	}
	else if (dtp=='20063')
	{
		dp = [                                         
			{ y: 2, label: 'lcl.di.uniroma1.it' }			
		]
	}
	else if (dtp=='20064')
	{
		dp = [                                         
			{ y: 2, label: 'people.csail.mit.edu' }			
		]
	}
	else if (dtp=='20065')
	{
		dp = [                                         
			{ y: 2, label: 'www.tc-star.org' }	
		]
	}
	else if (dtp=='20066')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.xrce.xerox.com/competencies/' }			
		]
	}
	else if (dtp=='20067')
	{
		dp = [                                         
			{ y: 1, label: 'http://filmsite.org/grea.html' }			
		]
	}
	else if (dtp=='20068')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.csd.abdn.ac.uk/kvdeemte/vague.html' }			
		]
	}
	else if (dtp=='20069')
	{
		dp = [                                         
			{ y: 1, label: 'http://plato.stanford.edu/' }			
		]
	}
	else if (dtp=='200610')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.m-w.com/cgi-bin/dictionary' }			
		]
	}
	else if (dtp=='200611')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.hcu.ox.ac.uk/BNC/' }			
		]
	}
	else if (dtp=='200612')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cse.unsw.edu.au/quinlan' }			
		]
	}
	else if (dtp=='200613')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.macquariedictionary.com.au/' }			
		]
	}
	else if (dtp=='200614')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.wjh.harvard.edu/inquirer/' }			
		]
	}
	else if (dtp=='200615')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cl.cam.ac.uk/Research/NL/acquilex/acqhome.html'}			
		]
	}
	else if (dtp=='200616')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.nml.nih.gov/research/umls/' }	
		]
	}
	else if (dtp=='200617')
	{
		dp = [                                         
			{ y: 1, label: 'http://benjamin.umd.edu/parallel/' }	
		]
	}
	else if (dtp=='200618')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.informatics.susx.ac.uk./research/nlp/carroll/morph.html' }			
		]
	}
	else if (dtp=='200619')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.csie.ntu.edu.tw/cjlin/' }
		]
	}
	else if (dtp=='20071')
	{
		dp = [                                         
			{ y: 2, label: 'www.tc-star.org' }
		]
	}
	else if (dtp=='20070')
	{
		dp = [                                         
			{ y: 2, label: 'nist.gov' },
			{ y: 1, label: 'math.nist.gov' },
			{ y: 3, label: 'trec.nist.gov' },
			{ y: 2, label: 'www.nist.gov' }
		]
	}
	else if (dtp=='20072')
	{
		dp = [                                         
			{ y: 2, label: 'wordnet.princeton.edu' }
		]
	}
	else if (dtp=='20073')
	{
		dp = [                                         
			{ y: 2, label: 'kmi.open.ac.uk' }
		]
	}
	else if (dtp=='20074')
	{
		dp = [                                         
			{ y: 2, label: 'www.ds.unifi.it' }
		]
	}
	else if (dtp=='20075')
	{
		dp = [                                         
			{ y: 2, label:  'www.cs.ualberta.ca' }
		]
	}
	else if (dtp=='20076')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.education.uiowa.edu/casma/GenovaPrograms.htm' }
		]
	}
	else if (dtp=='20077')
	{
		dp = [                                         
			{ y: 1, label: 'http://babelfish.altavista.com/tr' }
		]
	}
	else if (dtp=='20078')
	{
		dp = [                                         
			{ y: 1, label: 'www-i6.informatik.rwth-aachen.de' }
		]
	}
	else if (dtp=='20079')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.clsp.jhu.edu/ws2003/' }
		]
	}
	else if (dtp=='200710')
	{
		dp = [                                         
			{ y: 1, label: 'http://tt2.atosorigin.es/' } 
		]
	}
	else if (dtp=='200711')
	{
		dp = [                                         
			{ y: 1, label: 'http://clef.iei.pi.cnr.it/' }
		]
	}
	else if (dtp=='200712')
	{
		dp = [                                         
			{ y: 1, label: 'http://research.nii.ac.jp/ntcir/' }
		]
	}
	else if (dtp=='200713')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.ics.mq.edu.au/' }
		]
	}
	else if (dtp=='200714')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cs.cmu.edu/ehn/JAVELIN/' }
		]
	}
	else if (dtp=='200715')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.dfki.de/pas/f2w.cgi?ltp/quetal-e' }
		]
	}
	else if (dtp=='200716')
	{
		dp = [                                         
			{ y: 1, label: 'http://start.csail.mit.edu/' }
		]
	}
	else if (dtp=='200717')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.ifi.unizh.ch/cl/extrans/' }
		]
	}
	else if (dtp=='20080')
	{
		dp = [                                         
			{ y: 3, label:  'www.cis.upenn.edu' }
		]
	}
	else if (dtp=='20081')
	{
		dp = [                                         
			{ y: 3, label:  'w3.msi.vxu.se' }
		]
	}
	else if (dtp=='20082')
	{
		dp = [                                         
			{ y: 3, label:  'www.isi.edu' }
		]
	}
	else if (dtp=='20083')
	{
		dp = [                                         
			{ y: 2, label:  'www.informatics.susx.ac.uk' }
		]
	}
	else if (dtp=='20084')
	{
		dp = [                                         
			{ y: 1, label:  'http://nclt.computing.dcu.ie/gold105.txt' }
		]
	}
	else if (dtp=='20085')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.aclweb-org/anthology/P/' }
		]
	}
	else if (dtp=='20086')
	{
		dp = [                                         
			{ y: 1, label:  'http://hmi.ewi.utwente.nl/gala/' }
		]
	}
	else if (dtp=='20087')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.reuters.com/article/technologyNews/idUSN1921881520070328?feedType=RSS%20target=' }
		]
	}
	else if (dtp=='20088')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.aljazeera.net/news/archive/archive?ArchiveId=1037015' }
		]
	}
	else if (dtp=='20089')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.lsi.upc.edu/srlconll/' }
		]
	}
	else if (dtp=='200810')
	{
		dp = [                                         
			{ y: 1, label:  'http://ai-nlp.info.uniroma2.it/moschitti/' }
		]
	}
	else if (dtp=='200811')
	{
		dp = [                                         
			{ y: 1, label:  'http://mallet.cs.umass.edu' }
		]
	}
	else if (dtp=='200812')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.dashoptimization' }
		]
	}
	else if (dtp=='200813')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.itl.nist.gov/iad/894.01/tests/ace' }
		]
	}else if (dtp=='200814')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.rulequest.com/see5-info.html' }
		]
	}
	else if (dtp=='200815')
	{
		dp = [                                         
			{ y: 1, label:  'http://MaxEnt.sourceforge.net/' }
		]
	}
	else if (dtp=='200816')
	{
		dp = [                                         
			{ y: 1, label:  'http://svmlight.joachims.org/' }
		]
	}
	else if (dtp=='200817')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.grappa.univ-lille3.fr/tata' }
		]
	}
	else if (dtp=='200818')
	{
		dp = [                                         
			{ y: 1, label:  'http://cl.haifa.ac.il/' }
		]
	}
	else if (dtp=='200819')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.csie.ntu.edu.tw/' }
		]
	}
	else if (dtp=='20090')
	{
		dp = [                                         
			{ y: 2, label:  'www.isi.edu' }
		]
	}
	else if (dtp=='20091')
	{
		dp = [                                         
			{ y: 3, label:  'roa.rutgers.edu' }
		]
	}
	else if (dtp=='20092')
	{
		dp = [                                         
			{ y: 2, label:   'www.nist.gov' },
			{ y: 1, label:  'http://www-nlpir.nist.gov/projects/duc/data.html' },
			{ y: 1, label:   'http://cio.nist.gov/esd/emaildir/lists/mt' },
			{ y: 1, label:   'http://trec.nist.gov/pubs/trec15/t15' }
		]
	}
	else if (dtp=='20093')
	{
		dp = [                                         
			{ y: 2, label:  'www.delph-in.net' }
		]
	}
	else if (dtp=='20094')
	{
		dp = [                                         
			{ y: 2, label:  'www.emmtee.net' }
		]
	}
	else if (dtp=='20095')
	{
		dp = [                                         
			{ y: 2, label: 'www.cs.pitt.edu' }
		]
	}
	else if (dtp=='20096')
	{
		dp = [                                         
			{ y: 2, label:  'nflrc.hawaii.edu' }
		]
	}
	else if (dtp=='20097')
	{
		dp = [                                         
			{ y: 2, label:  'www.nltk.org' }
		]
	}
	else if (dtp=='20098')
	{
		dp = [                                         
			{ y: 1, label: 'www.mitre.org' },
			{ y: 1, label: 'http://nrrc.mitre.org/NRRC/publications.htm' }
		]
	}
	else if (dtp=='20099')
	{
		dp = [                                         
			{ y: 1, label:  'http://tedlab.mit' },
			{ y: 1, label:  'http://tedlab.mit.edu/dr/SVDLIBC/' }
		]
	}
	else if (dtp=='200910')
	{
		dp = [                                         
			{ y: 1, label:  'http://promo.net/pg'}
		]
	}
	else if (dtp=='200911')
	{
		dp = [                                         
			
			{ y: 1, label:  'http://sli.uvigo.es/CLUVI/' }
		]
	}
	else if (dtp=='200912')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.csie.ntu.edu.tw/cjlin/libsvm/' }
		]
	}
	else if (dtp=='200913')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.hf.uio.no/tekstlab/' },
			{ y: 1, label:  'http://www.tekstlab.uio.no/norsk/bokmaal/' },
			{ y: 1, label:  'http://wo.uio.no/' }
			
		]
	}else if (dtp=='200914')
	{
		dp = [                                         
			{ y: 1, label:  'http://www2003.org' }
		]
	}
	else if (dtp=='200915')
	{
		dp = [            
				{ y: 1, label:  'nflrc.hawaii.edu' }
			
		]
	}else if (dtp=='200916')
	{
		dp = [                                         
			{ y: 1, label:   'http://lfg-demo.computing.dcu.ie/lfgparser.html' }
		]
	}
	else if (dtp=='200917')
	{
		dp = [                                         
			{ y: 1, label:  'http://ilk.uvt' }
		]
	}
	else if (dtp=='200918')
	{
		dp = [                                         
			{ y: 1, label:  'http://ssrn.com/' }
		]
	}
	else if (dtp=='20100')
	{
		dp = [                                         
			{ y: 1, label:  'http://edition.cnn.com' }
		]
	}
	else if (dtp=='20101')
	{
		dp = [                                         
			{ y: 2, label:   'www.timeml.org'}
		]
	}
	else if (dtp=='20102')
	{
		dp = [                                         
			{ y: 2, label: 'www.dcs.shef.ac.uk' }
		]
	}
	else if (dtp=='20103')
	{
		dp = [                                         
			{ y: 2, label:  'homepages.inf.ed.ac.uk' }
		]
	}
	else if (dtp=='20104')
	{
		dp = [                                         
			{ y: 1, label:  'http://wordnet.princeton.edu/' }
		]
	}
	else if (dtp=='20105')
	{
		dp = [                                         
			{ y: 1, label:  'http://kdd.ics.uci.edu/' }
		]
	}else if (dtp=='20106')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.nist.gov/' },
			{ y: 1, label:  'http://duc.nist.gov/pubs/' },
			{ y: 1, label:  'http://nist.gov/speech/tests/mt/2006/doc/mt06eval' }
		]
	}
	else if (dtp=='20107')
	{
		dp = [                                         
			{ y: 1, label:   'http://www.psy.uwa.edu.au/' }
		]
	}
	else if (dtp=='20108')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.jees.or.jp/jlpt/en/' }
		]
	}
	else if (dtp=='20109')
	{
		dp = [                                         
			{ y: 1, label:  'http://mecab.sourceforge.net/' }
		]
	}
	else if (dtp=='201010')
	{
		dp = [                                         
			{ y: 1, label:   'http://www.comp.lancs.ac.uk/' }
		]
	}
	else if (dtp=='201011')
	{
		dp = [                                         
			{ y: 3, label:  'http://www.readinga-z.com/' }
		]
	}
	else if (dtp=='201012')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.time.com' }
		]
	}
	else if (dtp=='201013')
	{
		dp = [                                         
			{ y: 1, label:  'http://answers.yahoo.com/' }
		]
	}
	else if (dtp=='201014')
	{
		dp = [                                         
			{ y: 1, label:  'http://marlodge.supanet.com/museum/' }		]
	}
	else if (dtp=='201015')
	{
		dp = [                                         
			{ y: 1, label:   'http://www.lemurproject.org' }
		]
	}
	else if (dtp=='201016')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.wumpus-' }
		]
	}
	else if (dtp=='201017')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.live.com' }
		]
	}
	else if (dtp=='201018')
	{
		dp = [                                         
			{ y: 2, label:  'http://lands.let.ru.nl/projects/pelican/' }
		]
	}
	else if (dtp=='201019')
	{
		dp = [                                         
			{ y: 1, label:  'http://cran.r-project.org/web/packages/' },
			{ y: 1, label:  'http://www.r-project.org/' }
		]
	}
	else if (dtp=='20110')
	{
		dp = [                                         
			{ y: 2, label:  'www.cia.gov' }
		]
	}
	else if (dtp=='20111')
	{
		dp = [                                         
			{ y: 3, label:  'www.cs.pitt.edu' }
		]
	}
	else if (dtp=='20112')
	{
		dp = [                                         
			{ y: 4, label: 'homepages.inf.ed.ac.uk' }
		]
	}
	else if (dtp=='20113')
	{
		dp = [                                         
			{ y: 3, label:  'www.cis.upenn.edu' },
			{ y: 1, label:  'http://projects.ldc.upenn.edu/Chinese/LDC' }
		]
	}
	else if (dtp=='20114')
	{
		dp = [                                         
			{ y: 2, label: 'maltparser.org'}
		]
	}else if (dtp=='20115')
	{
		dp = [                                         
			{ y: 2, label:  'sourceforge.net' },
			{ y: 1, label:  'http://crfpp.sourceforge.net/' },
			{ y: 1, label:  'http://mstparser.sourceforge.net' },
			{ y: 1, label:  'http://swirl-parser.sourceforge.net' }
		]
	}
	else if (dtp=='20116')
	{
		dp = [                                         
			{ y: 2, label:  'nlp.fi.muni.cz' }
		]
	}
	else if (dtp=='20117')
	{
		dp = [                                         
			{ y: 2, label:  'behind-the-enemy-lines.blogspot.com' }
		]
	}
	else if (dtp=='20118')
	{
		dp = [                                         
			{ y: 2, label:  'hdl.handle.net' }
		]
	}
	else if (dtp=='20119')
	{
		dp = [                                         
			{ y: 2, label:  'www.icwsm.org' }
		]
	}else if (dtp=='201110')
	{
		dp = [                                         
			{ y: 2, label:  'translate.google.com' },
			{ y: 1, label:  'http://news.google.com/news/section?&topic=w' }
		]
	}
	else if (dtp=='201111')
	{
		dp = [                                         
			{ y: 1, label:  'http://nlp.stanford.edu/' }
		]
	}
	else if (dtp=='201112')
	{
		dp = [                                         
			{ y: 1, label:  'http://webdocs.cs.ualberta.ca/lindek/minipar.htm' }
		]
	}
	else if (dtp=='201113')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.cs.uic.edu/liub/FBS/sentiment-analysis.html' }
		]
	}
	else if (dtp=='201114')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.atmos-chem-phys.net/volumes' }
		]
	}
	else if (dtp=='201115')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.kyb.mpg.de/bs/people/pgehler/code/index.html' }
		]
	}
	else if (dtp=='201116')
	{
		dp = [                                         
			{ y: 1, label:  'http://depts.washington.edu/uwcl/twiki/bin/view.cgi/Main/TypeAddendum' }
		]
	}
	else if (dtp=='201117')
	{
		dp = [                                         
			{ y: 1, label:   'http://nlp.cs.nyu.edu/evalb/' }
		]
	}
	else if (dtp=='201118')
	{
		dp = [                                         
			{ y: 1, label:  'http://nextens.uvt.nl/conll/software.html' }
		]
	}
	else if (dtp=='201119')
	{
		dp = [                                         
			{ y: 1, label:  'http://w3.msi.vxu.se/users/nivre/research/MaltParser.html' }
		]
	}
	else if (dtp=='20120')
	{
		dp = [                                         

			{ y: 2, label:   'clic.ub.edu' }
		]
	}
	else if (dtp=='20121')
	{
		dp = [                                         
			{ y: 3, label:  'www.inf.u-szeged.hu' }
		]
	}
	else if (dtp=='20122')
	{
		dp = [                                         
			{ y: 2, label:  'lpsolve.sourceforge.net' },
			{ y: 1, label:  'http://opennlp.sourceforge.net' }
		]
	}
	else if (dtp=='20123')
	{
		dp = [                                         
			{ y: 2, label:  'u.cs.biu.ac.il' }
		]
	}
	else if (dtp=='20124')
	{
		dp = [                                         

			{ y: 2, label:  'www.timeml.org' }
		]
	}
	else if (dtp=='20125')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.itl.nist.gov/iad/mig/tests/mt/2008/doc/' },
			{ y: 2, label:  'www-nlpir.nist.gov' },
			{ y: 1, label:  'http://trec.nist.gov/data/reuters/reuters.html'}
		]
	}
	else if (dtp=='20126')
	{
		dp = [                                         
			{ y: 2, label:  'www.codeproject.com' }
		]
	}
	else if (dtp=='20127')
	{
		dp = [                                         
			{ y: 1, label:  'http://ngrams.googlelabs.com/' },
			{ y: 2, label:  'code.google.com'},
			{ y: 1, label:  'https://sites.google.com/site/bionlpst/' },
			{ y: 1, label:  'http://translate.google.com' }
		]
	}
	else if (dtp=='20128')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.nlm.nih.gov/research/umls' }
		]
	}
	else if (dtp=='20129')
	{
		dp = [                                         
			{ y: 1, label:  'http://demo.patrickpantel.com/demos/verbocean/' }
		]
	}
	else if (dtp=='201210')
	{
		dp = [                                         
			{ y: 1, label:  'http://clipdemos.umiacs.umd.edu/catvar/' },
			{ y: 1, label:  'http://www.umiacs.umd.edu/bonnie/' }
		]
	}
	else if (dtp=='201211')
	{
		dp = [                                         
			{ y: 1, label:  'http://nlp.cs.nyu.edu/nomlex/index.html' }
		]
	}
	else if (dtp=='201212')
	{
		dp = [                                         
			{ y: 1, label:  'http://mcs.open.ac.uk/sw6629/numgen' }
		]
	}
	else if (dtp=='201213')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.ics.mq.edu.au/lt-gdemo/StockReporter/' }
		]
	}
	else if (dtp=='201214')
	{
		dp = [                                         
			{ y: 1, label: 'http://ngrams.googlelabs.com/' }
		]
	}
	else if (dtp=='201215')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.surveymonkey.com/' }
		]
	}
	else if (dtp=='201216')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.tarrlab.org/' }
		]
	}
	else if (dtp=='201217')
	{
		dp = [                                         
			{ y: 1, label:  'http://peerpress.de/' }
		]
	}
	else if (dtp=='201218')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.irishtimes.com/newspaper/ireland/2011/' }
		]
	}
	else if (dtp=='20130')
	{
		dp = [                                         
			{ y: 2, label:  'clic.ub.edu' }
		]
	}
	else if (dtp=='20131')
	{
		dp = [                                         
			{ y: 8, label:  'lcl.uniroma1.it' }
		]
	}
	else if (dtp=='20132')
	{
		dp = [                                         
			{ y: 6, label:  'nlp.stanford.edu' }
		]
	}
	else if (dtp=='20133')
	{
		dp = [                                         
			{ y: 5, label:  'www.ims.uni-stuttgart.de' }
		]
	}
	else if (dtp=='20134')
	{
		dp = [                                         
			{ y: 5, label:  'www.nist.gov' },
			{ y: 2, label:  'duc.nist.gov' }
		]
	}
	else if (dtp=='20135')
	{
		dp = [                                         
			{ y: 1, label:  'https://sites.google.com/site/' },
			{ y: 1, label:  'http://translate.google.com/' },
			{ y: 4, label:  'code.google.com' }
		]
	}
	else if (dtp=='20136')
	{
		dp = [                                         
			{ y: 3, label:  'wordnet.princeton.edu' }
		]
	}
	else if (dtp=='20137')
	{
		dp = [                                         
			{ y: 3, label:   'www.dianamccarthy.co.uk' }
		]
	}
	else if (dtp=='20138')
	{
		dp = [                                         
			{ y: 3, label:  'www.purl.org' }
		]
	}
	else if (dtp=='20139')
	{
		dp = [                                         
			{ y: 3, label:  'sourcesup.renater.fr' }
		]
	}
	else if (dtp=='201310')
	{
		dp = [                                         
			{ y: 3, label: 'www.statmt.org' }
		]
	}
	else if (dtp=='201311')
	{
		dp = [                                         
			{ y: 2, label:  'nlp.cs.nyu.edu' }
		]
	}
	else if (dtp=='201312')
	{
		dp = [                                         
			{ y: 2, label:   'www.mila.cs.technion.ac.il' }
		]
	}
	else if (dtp=='201313')
	{
		dp = [                                         
			{ y: 2, label:  'sourceforge.net' },
			{ y: 1, label:  'http://crfpp.sourceforge.net/' }
		]
	}
	else if (dtp=='201314')
	{
		dp = [                                         
			{ y: 2, label:  'www.seas.upenn.edu' }
		]
	}
	else if (dtp=='201315')
	{
		dp = [                                         
			{ y: 2, label:  'www.coli.uni-saarland.de' }
		]
	}
	else if (dtp=='201316')
	{
		dp = [                                         
			{ y: 2, label:  'www.dmoz.org' }
		]
	}
	else if (dtp=='201317')
	{
		dp = [                                         
			{ y: 2, label:  'www.nlm.nih.gov' },
			{ y: 1, label:  'http://lexsrv3.nlm.nih.gov/Specialist/Summary/lexicon.html' }
		]
	}
	else if (dtp=='201318')
	{
		dp = [                                         
			{ y: 2, label:  'search.yippy.com' }
		]
	}
	else if (dtp=='20140')
	{
		dp = [                                         
			{ y: 5, label:  'www.ark.cs.cmu.edu' }
		]
	}
	else if (dtp=='20141')
	{
		dp = [                                         
			{ y: 3, label:  'framenet.icsi.berkeley.edu' }
		]
	}
	else if (dtp=='20142')
	{
		dp = [                                         
			{ y: 3, label:  'ixa2.si.ehu.es' },
			{ y: 1, label:  'http://ixa.si.ehu.es/Ixa/resources/sensecorpus' }
		]
	}
	else if (dtp=='20143')
	{
		dp = [                                         
			{ y: 1, label:  'http://nlp.ldeo.columbia.edu/amira/' },
			{ y: 3, label:  'www1.ccls.columbia.edu' }
		]
	}
	else if (dtp=='20144')
	{
		dp = [                                         
			{ y: 2, label:  'lcl.uniroma1.it' }
		]
	}
	else if (dtp=='20145')
	{
		dp = [                                         
			{ y: 2, label:  'wordnet.princeton.edu' }
		]
	}
	else if (dtp=='20146')
	{
		dp = [                                         
			{ y: 2, label:  'www.qamus.org'}
		]
	}
	else if (dtp=='20147')
	{
		dp = [                                         
			{ y: 2, label:  'www.bbc.co.uk' }
		]
	}
	else if (dtp=='20148')
	{
		dp = [                                         
			{ y: 2, label:  'www.natcorp.ox.ac.uk' }
		]
	}
	else if (dtp=='20149')
	{
		dp = [                                         
			
			{ y: 2, label:   'www.ldc.upenn.edu'},
			{ y: 1, label:  'http://projects.ldc.upenn'},
			{ y: 1, label:  'http://www.cis.upenn.edu/dbikel/software.html#comparator' },
			{ y: 1, label:  'http://bioie.ldc.upenn.edu/' },
			{ y: 1, label:  'http://projects.ldc.upenn.edu/gale/data/catalog.html' },
			{ y: 1, label:  'http://www.seas.upenn.edu/~pdtb' },
			{ y: 1, label:  'http://catalog.ldc.upenn.edu/LDC2004T14' }
		]
	}
	else if (dtp=='201410')
	{
		dp = [                                         
			{ y: 2, label:   'www.openfst.org' }
		]
	}
	else if (dtp=='201411')
	{
		dp = [                                         
			{ y: 2, label:  'nlp.comp.nus.edu.sg' }
		]
	}
	else if (dtp=='201412')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.tkuhn.ch'},
			{ y: 1, label:  'http://purl.org/tkuhn/cnlsurvey/data'}
		]
	}
	else if (dtp=='201413')
	{
		dp = [                                         
			{ y: 1, label:  'http://www-01.ibm.com/software/integration/optimization/cplex-optimizer' }

		]
	}
	else if (dtp=='201414')
	{
		dp = [                                         
			{ y: 1, label:  'http://pages.cs.wisc.edu/jerryzhu/' }
		]
	}
	else if (dtp=='201415')
	{
		dp = [                                         
			{ y: 1, label: 'http://nlp.lsi.upc.edu/tools/download-map.php' }
		]
	}
	else if (dtp=='201416')
	{
		dp = [                                         
			{ y: 1, label:  'http://metaoptimize.com/projects/wordreprs/' }
		]
	}
	else if (dtp=='201417')
	{
		dp = [                                         
			{ y: 1, label:  'http://crfpp.sourceforge.net/' },
			{ y: 1, label:  'http://sourceforge.net/projects/crf/' }
		]
	}
	else if (dtp=='201418')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.anc.org/OANC/' }
		]
	}
	else if (dtp=='201419')
	{
		dp = [                                         
			{ y: 1, label:  'http://nlp.stanford.edu/software/tagger.shtml' },
			{ y: 1, label:  'http://plato.stanford.edu/' }
		]
	}
	else if (dtp=='20150')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.cs.unm.edu/mccune/mace4/' }
			]
	}
	else if (dtp=='20151')
	{
		dp = [                                         
			{ y: 2, label:  'wordnet.princeton.edu' }
		]
	}
	else if (dtp=='20152')
	{
		dp = [                                         
			{ y: 2, label:  'www.cs.ox.ac.uk' }
		]
	}
	else if (dtp=='20153')
	{
		dp = [                                         
			{ y: 2, label:  'www.imdb.com' }
		]
	}
	else if (dtp=='20154')
	{
		dp = [                                         
			{ y: 2, label:  'www.isi.edu' },
			{ y: 1, label:  'http://amr.isi.edu' }
			]
	}
	else if (dtp=='20155')
	{
		dp = [                                         
			{ y: 2, label:  'nltk.org' }
		]
	}
	else if (dtp=='20156')
	{
		dp = [                                         
			{ y: 2, label:  'clic.cimec.unitn.it'},
			{ y: 1, label: 'http://disi.unitn.it/moschitti/' }
		]
	}
	else if (dtp=='20157')
	{
		dp = [                                         
			{ y: 2, label:  'www.reddit.com' }
			]
	}
	else if (dtp=='20158')
	{
		dp = [                                         
			{ y: 1, label:  'http://sentiwordnet.isti.cnr.it/' }
		]
	}
	else if (dtp=='20159')
	{
		dp = [                                         
			{ y: 1, label:  'http://translate.google.com/' }
		]
	}else if (dtp=='201510')
	{
		dp = [                                         

			{ y: 1, label:  'http://www.statmt.org/moses/giza/GIZA++.html' }
		]
	}
	else if (dtp=='201511')
	{
		dp = [                                         
			{ y: 1, label:  'http://nlp.cs.berkeley.edu' }
		]
	}
	else if (dtp=='201512')
	{
		dp = [                                         

			{ y: 1, label:  'http://www.globalwordnet.org/gwa/wordnet' },
		
		]
	}
	else if (dtp=='201513')
	{
		dp = [                                         
			{ y: 1, label:  'http://projects.ldc.upenn.edu/Chinese/LDC' },
			{ y: 1, label:  'http://www.cis.upenn.edu/dbikel/download/compare.pl' }
		]
	}
	else if (dtp=='201514')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.dicts.info/uddl.php' }
		]
	}
	else if (dtp=='201515')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.keenage.com/' }
		]
	}
	else if (dtp=='201516')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.csie.ntu.edu.tw/cjlin/libsvm/' }
		]
	}
	else if (dtp=='201517')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.oxforddictionaries.com/page/howmanywords' }
		]
	}else if (dtp=='201518')
	{
		dp = [                                         
			{ y: 1, label:  'http://homepages.inf.ed.ac.uk/s0453356/results' }
		]
	}
	else if (dtp=='201519')
	{
		dp = [                                         
			{ y: 1, label: 'http://aclweb.org/anthology/W10-4144' }
		]
	}
	else if (dtp=='20160')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.un.org/en/documents/udhr/index.shtml' }
		]
	}
	else if (dtp=='20161')
	{
		dp = [                                         
			{ y: 5, label:   'github.com' }
		]
	}
	else if (dtp=='20162')
	{
		dp = [                                         
			{ y: 4, label: 'dx.doi.org' }
		]
	}
	else if (dtp=='20163')
	{
		dp = [                                         
			{ y: 2, label:  'web.science.mq.edu.au' }
		]
	}
	else if (dtp=='20164')
	{
		dp = [                                         
			{ y: 2, label:  'code.google.com' },
			{ y: 2, label:  'translate.google.com' },
			{ y: 1, label:  'https://sites.google.com/'}
		]
	}
	else if (dtp=='20165')
	{
		dp = [                                         
			{ y: 2, label:  'wacky.sslmit.unibo.it' }
		]
	}
	else if (dtp=='20166')
	{
		dp = [                                         
			{ y: 2, label:  'www.natcorp.ox.ac.uk'}
		]
	}
	else if (dtp=='20167')
	{
		dp = [                                         
			{ y: 2, label:  'www.csie.ntu.edu.tw' }
		]
	}
	else if (dtp=='20168')
	{
		dp = [                                         
			{ y: 2, label:  'wordnet.princeton.edu' }
		]
	}
	else if (dtp=='20169')
	{
		dp = [                                         
			{ y: 1, label: 'http://www.cl.ut.ee/korpused/morfkorpus/index.php?lang=en' }
		]
	}
	else if (dtp=='201610')
	{
		dp = [                                         
			{ y: 1, label:  'http://people.csail.mit.edu/yklee/code.html' }
		]
	}
	else if (dtp=='201611')
	{
		dp = [                                         
			{ y: 1, label:  'http://users.ics.aalto.fi/tpruokol/' }
		]
	}
	else if (dtp=='201612')
	{
		dp = [                                         
			{ y: 1, label:  'http://blog.stata.com/2011/02/16/positive-log-likelihood-values-happen/' }
		]
	}
	else if (dtp=='201613')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.ohchr.org/EN/UDHR/Pages/SearchByLang.aspx' }
		]
	}
	else if (dtp=='201614')
	{
		dp = [                                         
			{ y: 1, label:  'http://open.weibo.com/wiki/API' }
		]
	}
	else if (dtp=='201615')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.project-syndicate.org/' }
		]
	}
	else if (dtp=='201616')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.bing.com/translator/' }
		]
	}
	else if (dtp=='201617')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.cs.cmu.edu/' }
		]
	}
	else if (dtp=='201618')
	{
		dp = [                                         
			{ y: 1, label:  'http://cs.stanford.edu/' }
		]
	}
	else if (dtp=='20170')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.illc.uva.nl/EuroWordNet/' }

		]
	}
	else if (dtp=='20171')
	{
		dp = [                                         
			{ y: 8, label:  'github.com' }
		]
	}
	else if (dtp=='20172')
	{
		dp = [                                         
			{ y: 3, label:  'www.ukp.tu-darmstadt.de' }
		]
	}
	else if (dtp=='20173')
	{
		dp = [                                         
			{ y: 1, label:  'translate.google.com' },
			{ y: 3, label:  'sites.google.com' },
			{ y: 1, label:  'http://code.google.com/p/word2vec/' }
		]
	}
	else if (dtp=='20174')
	{
		dp = [                                         
			{ y: 3, label:  'www.facebook.com' }
		]
	}
	else if (dtp=='20175')
	{
		dp = [                                         
			{ y: 2, label:  'lcl.uniroma1.it' },
			{ y: 1, label:  'http://acl.stilo.di.uniroma1.it/ACL-Additional-Materials.zip' }
		]
	}
	else if (dtp=='20176')
	{
		dp = [                                         

			{ y: 2, label:   'babelnet.org' }
		]
	}
	else if (dtp=='20177')
	{
		dp = [                                         
			{ y: 2, label:  'wordnet.princeton.edu' }
		]
	}
	else if (dtp=='20178')
	{
		dp = [                                         
			{ y: 2, label:  'en.wikipedia.org' }
		]
	}
	else if (dtp=='20179')
	{
		dp = [                                         

			{ y: 2, label:  'www.cs.cornell.edu' }
		]
	}
	else if (dtp=='201710')
	{
		dp = [                                         
			{ y: 2, label:  'www.youtube.com' }
		]
	}
	else if (dtp=='201711')
	{
		dp = [                                         

			{ y: 2, label:  'arxiv.org' }
		]
	}
	else if (dtp=='201712')
	{
		dp = [                                         
			{ y: 1, label:  'http://liblinear.bwaldvogel.de' }
		]
	}
	else if (dtp=='201713')
	{
		dp = [                                         
			{ y: 1, label:  'http://lpsolve.sourceforge.net' },
			{ y: 1, label:  'http://wn-similarity.sourceforge.net'}
		]
	}
	else if (dtp=='201714')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.dsi.unive.it/tripodi/wsd' }
		]
	}
	else if (dtp=='201715')
	{
		dp = [                                         

			{ y: 1, label:  'http://www.senseval.org/senseval3'}
		]
	}
	else if (dtp=='201716')
	{
		dp = [                                         

			{ y: 1, label:  'http://nlp.cs.swarthmore.edu/semeval/tasks/index.php'}
		]
	}
	else if (dtp=='201717')
	{
		dp = [                                         
			{ y: 1, label:  'https://www.cs.york.ac.uk/semeval-2013/task12/index.html' }
		]
	}
	else if (dtp=='201718')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.mpi-inf.mpg.de/departments/databases-and-information-' }
		]
	}
	else if (dtp=='201719')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.ota.ox.ac.uk/headers/2541.xml' }
		]
	}
	else if (dtp=='20180')
	{
		dp = [                                         
			
			{ y: 3, label:  'www.isi.edu' }
		]
	}
	else if (dtp=='20181')
	{
		dp = [                                         

			{ y: 18, label:  'github.com' }
		]
	}
	else if (dtp=='20182')
	{
		dp = [                                         

			{ y: 11, label:  'catalog.ldc.upenn.edu' },
			{ y: 1, label:  'http://languagelog.ldc.upenn.edu/' }
		]
	}
	else if (dtp=='20183')
	{
		dp = [                                         
			{ y: 4, label:  'www.cs.rochester.edu' }
		]
	}
	else if (dtp=='20184')
	{
		dp = [                                         
			{ y: 4, label:  'www.reddit.com' }
		]
	}
	else if (dtp=='20185')
	{
		dp = [                                         
			{ y: 4, label:  'www.doc.ic.ac.uk' }
		]
	}
	else if (dtp=='20186')
	{
		dp = [                                         
			{ y: 3, label:  'code.google.com' }, 
			{ y: 1, label:  'https://sites.google.com/site/nlisharedtask2013/home' }
		]
	}
	else if (dtp=='20187')
	{
		dp = [                                         
			{ y: 3, label:  'web.science.mq.edu.au' }
		]
	}
	else if (dtp=='20188')
	{
		dp = [                                         
			{ y: 3, label:  'www.nlm.nih.gov' }
		]
	}
	else if (dtp=='20189')
	{
		dp = [                                         
			
			{ y: 3, label:  'ufal.mff.cuni.cz' },
			{ y: 1, label:  'https://lindat.mff.cuni.cz/repository/xmlui/handle/11372/LRT-2614'}
		]
	}
	else if (dtp=='201810')
	{
		dp = [                                         
			{ y: 3, label:  'www.cs.cmu.edu' }
		]
	}
	else if (dtp=='201811')
	{
		dp = [                                         
			{ y: 2, label:  'www.h-its.org' }
		]
	}
	else if (dtp=='201812')
	{
		dp = [                                         
			
			{ y: 2, label:  'arxiv.org'}
		]
	}
	else if (dtp=='201813')
	{
		dp = [                                         
			{ y: 2, label:  'nlp.stanford.edu' },
			{ y: 1, label:  'https://plato.stanford.edu/' }
		]
	}
	else if (dtp=='201814')
	{
		dp = [                                         
			{ y: 2, label:  'users.sussex.ac.uk' }
		]
	}
	else if (dtp=='201815')
	{
		dp = [                                         
			{ y: 2, label:  'en.wiktionary.org' }
		]
	}
	else if (dtp=='201816')
	{
		dp = [                                         
			{ y: 2, label:  'trec.nist.gov' },
			{ y: 1, label:  'http://www.itl.nist.gov/iaui/894.02/related_projects/muc/proceedings/muc_7_toc.html'},
			{ y: 1, label:  'https://tac.nist.gov/2017/KBP/' }
		]
	}
	else if (dtp=='201817')
	{
		dp = [                                         
			{ y: 2, label:  'www.linguistics.ucsb.edu' }
		]
	}
	else if (dtp=='201818')
	{
		dp = [                                         
			{ y: 2, label:  'cswww.essex.ac.uk' },
			{ y: 1, label:  'http://anawiki.essex.ac.uk/dali/crac18/crac18_shared_task.html' }
		]
	}
	else if (dtp=='201819')
	{
		dp = [                                         
			{ y: 2, label:  'clic.ub.edu' }
		]
	}
	else if (dtp=='20190')
	{
		dp = [                                         
			{ y: 3, label:  'github.com' }
		]
	}
	else if (dtp=='20191')
	{
		dp = [                                         
			{ y: 2, label:  'doi.org' }
		]
	}
	else if (dtp=='20192')
	{
		dp = [                                         
			{ y: 1, label:  'http://developers.google.com/freebase/' },
			{ y: 1, label:  'https://code.google.com/archive/p/word2vec/' }
		]
	}
	else if (dtp=='20193')
	{
		dp = [                                         
			{ y: 1, label:  'http://www.aclweb.org/' }
		]
	}
	else if (dtp=='20194')
	{
		dp = [                                         
			{ y: 1, label:  'http://svn.ask.it.usyd.edu.au/trac/candc/' }
		]
	}
	else if (dtp=='20195')
	{
		dp = [                                         
			{ y: 1, label:  'http://kmcs.nii.ac.jp/enju/' }
		]
	}
	else if (dtp=='20196')
	{
		dp = [                                         
			{ y: 1, label:  'http://universaldependencies.org'}
		]
	}
	else if (dtp=='20197')
	{
		dp = [                                         
			{ y: 1, label:  'http://calc.digling.org' }
		]
	}
	else if (dtp=='20198')
	{
		dp = [                                         
			{ y: 1, label:  'https://www.dropbox.com/s/2fdn26rj6h9bpvl/ubuntudata.zip?dl=0' }
		]
	}
	else if (dtp=='20199')
	{
		dp = [                                         
			{ y: 1, label:  'https://www.douban.com/group/' }
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