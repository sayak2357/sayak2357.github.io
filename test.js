var chart = new CanvasJS.Chart("chartContainer10", {
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
		name: "ACL : Most Popular primary URL domains & their Frequencies",
		dataPoints: [
			
			
			{ y: 1529, x: 'www.aclweb.org' },
			{ y: 685, x: 'github.com' },
			{ y: 368, x: 'arxiv.org' },
			{ y: 195, x: 'nlp.stanford.edu' },
			{ y: 191, x: 'code.google.com' },
			{ y: 146, x: 'dl.acm.org' },
			{ y: 112, x: 'en.wikipedia.org' },
			{ y: 89, x: 'www.statmt.org' },
			{ y: 85, x: 'www.nist.gov' },
			{ y: 92, x: 'papers.nips.cc' },
			{ y: 52, x: 'www.cs.cmu.edu' },
			{ y: 51, x: 'mallet.cs.umass.edu' },
			{ y: 48, x: 'www.csie.ntu.edu.tw' },
			{ y: 116, x: 'upenn.edu' }.
			{ y: 40, x: 'sourceforge.net' },
			{ y: 36, x: 'www.isi.edu' },
			{ y: 35, x: 'dx.doi.org' },
			{ y: 33, x: 'homepages.inf.ed.ac.uk' },
			{ y: 29, x: 'nlp.cs.nyu.edu' },
			{ y: 28, x: 'svmlight.joachims.org' }
			
		]
		},
		]
});
chart.render();


