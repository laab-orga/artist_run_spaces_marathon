function global_graph(fichier){
	console.log(fichier);
	if(fichier=="Global"){
var requestURL = 'data/kmeans/radial_index.json';
		var request = new XMLHttpRequest();
		request.open('GET', requestURL);
		request.responseType = 'json';	
		request.send();
		request.onload = function() {
			var data = request.response;
			console.log(data);






Highcharts.chart('container3', {

    title: {
        text: ''
    },

    accessibility: {
        point: {
            valueDescriptionFormat: '{index}. From {point.from} to {point.to}: {point.weight}.'
        }
    },
	colors: [
        '#e1e1e1',
		'#d0d0d0',
		'#bdbdbd',
		'#a1a1a1',
		'#919191',
		'#808080',
		'#6a6a6a'
		],

    series: [{
        keys: ['from', 'to', 'weight'],
        data: data,
        type: 'dependencywheel',
        name: 'Dependency wheel series',
        dataLabels: {
            color: '#333',
            textPath: {
                enabled: true,
                attributes: {
                    dy: 5
                }
            },
            distance: 10
        },
        size: '95%'
    }]

});


		}
}
}