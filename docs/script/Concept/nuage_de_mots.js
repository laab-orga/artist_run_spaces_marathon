console.log('wordcloud');
function wordcloud(fichier,div){
	var requestURL = 'data/concept/'+fichier+'.json';
		var request = new XMLHttpRequest();
		request.open('GET', requestURL);
		request.responseType = 'json';	
		request.send();
		request.onload = function() {
			var data = request.response;

	Highcharts.chart('container_'+div, {
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
		data: data,
		name: 'Occurrences'
	    }],
	    title: {
		text: 'Nuage des mots clés du cluster'
	    }
	});

		}
}
