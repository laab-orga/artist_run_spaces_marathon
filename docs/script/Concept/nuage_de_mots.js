console.log('wordcloud');
function wordcloud(fichier,div){
	var requestURL = 'data/scrap_web_link/CLOUD/'+fichier+'.json';
		var request = new XMLHttpRequest();
		request.open('GET', requestURL);
		request.responseType = 'json';	
		request.send();
		request.onload = function() {
			var data = request.response;
			console.log('data/scrap_web_link/CLOUD/'+fichier+'.json');
			console.log(data);




	Highcharts.chart('container_'+div, {
	    accessibility: {
		screenReaderSection: {
		    beforeChartFormat: '<h5>{chartTitle}</h5>' +
			'<div>{chartSubtitle}</div>' +
			'<div>{chartLongdesc}</div>' +
			'<div>{viewTableButton}</div>'
		}
	    },
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