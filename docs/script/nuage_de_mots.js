function wordcloud(fichier){
	var requestURL = 'data/comptage/graphe1.json';
		var request = new XMLHttpRequest();
		request.open('GET', requestURL);
		request.responseType = 'json';	
		request.send();
		request.onload = function() {
			var data = request.response;
			console.log(data);




	Highcharts.chart('container', {
	    accessibility: {
		screenReaderSection: {
		    beforeChartFormat: '<h5>{chartTitle}</h5>' +
			'<div>{chartSubtitle}</div>' +
			'<div>{chartLongdesc}</div>' +
			'<div>{viewTableButton}</div>'
		}
	    },
		colors: [
        '#000000'
		],
	    series: [{
		type: 'wordcloud',
		data: data["cluster"+fichier],
		name: 'Occurrences'
	    }],
	    title: {
		text: ''
	    }
	});

		}
}
