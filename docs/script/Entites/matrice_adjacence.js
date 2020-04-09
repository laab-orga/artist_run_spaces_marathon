console.log('Adjacence');
function adjacence(fichier){
	var requestURL = 'data/scrap_web_link/HEATMAP_ADJENCYWORD/'+fichier+'.csv';
	console.log(requestURL);
		var request = new XMLHttpRequest();
		request.open('GET', requestURL);
		request.responseType = 'csv';	
		request.send();
		request.onload = function() {
			var data = request.response;
			//console.log(data);
			//faire une liste des sommets du graphes.
			var listeSommet=[];
			var listeSommetId=[];
			for ( var i in data['nodes']){
				//console.log(data['nodes'][i]['id']);
				listeSommet.push(data['nodes'][i]['id']);
				var temporaire=[data['nodes'][i]['id'],i];
				listeSommetId.push(temporaire);
			}
			//console.log(listeSommet);
			//console.log(listeSommetId);
			var liste=[];
			for(var i in data['links']){
				var listeTemp=[listeSommet.indexOf(data['links'][i]['source']), listeSommet.indexOf(data['links'][i]['target']),data['links'][i]['value']];
				liste.push(listeTemp);
			}
			
			var listeNeutre=[];
			var j=0;
			var i = 0;
			while(i < listeSommet.length){
				//console.log(i);
				var j=0;
				while(j < listeSommet.length){
					var temp=[i,j,0];
					listeNeutre.push(temp);
					j=j+1;
				}
				i=i+1;
			}
			/*console.log(listeNeutre);
			console.log(listeSommet);
			console.log(listeSommet.length);*/
			
			var i =0;
			while(i < listeNeutre.length){
				var j=0; 
				while(j<liste.length){
					if(listeNeutre[i][0]==liste[j][0] && listeNeutre[i][1]==liste[j][1]){
						var test1= liste[j][2];
						var donnee=Math.round(test1*1000)/1000;
						listeNeutre[i][2]=donnee;
						//console.log(liste[j]);
						//console.log(valeurNeutre);
					}
					j=j+1;
				}
				
				i=i+1;
			}
			//console.log(liste);


		


function getPointCategoryName(point, dimension) {
    var series = point.series,
        isY = dimension === 'y',
        axis = series[isY ? 'yAxis' : 'xAxis'];
    return axis.categories[point[isY ? 'y' : 'x']];
}

Highcharts.chart('container2', {

    chart: {
        type: 'heatmap',
        marginTop: 40,
        marginBottom: 80,
        plotBorderWidth: 1
    },


    title: {
        text: 'Matrice d\'adjacence'
    },

    xAxis: {
        //categories: ['798 District Limited', 'ACC/CCA', 'Art Metropole', 'TOPO'],//mettre les sommets d'un cluster.
		categories: listeSommet,
    },

    yAxis: {
        //categories: ['798 District Limited', 'ACC/CCA', 'Art Metropole', 'TOPO'],//mettre les sommets d'un cluster.
		categories: listeSommet,
        title: null,
        reversed: true
    },

    accessibility: {
        point: {
            descriptionFormatter: function (point) {
                var ix = point.index + 1,
                    xName = getPointCategoryName(point, 'x'),
                    yName = getPointCategoryName(point, 'y'),
                    val = point.value;
                return ix + '. ' + xName + ' sales ' + yName + ', ' + val + '.';
            }
        }
    },

    colorAxis: {
        min: 0,
        minColor: '#FFFFFF',
        maxColor: Highcharts.getOptions().colors[0]
    },

    legend: {
        align: 'right',
        layout: 'vertical',
        margin: 0,
        verticalAlign: 'top',
        y: 25,
        symbolHeight: 280
    },

    tooltip: {
        formatter: function () {
            return '<b>' + getPointCategoryName(this.point, 'x') + '</b> sold <br><b>' +
                this.point.value + '</b> items on <br><b>' + getPointCategoryName(this.point, 'y') + '</b>'; //bulle quand on pase la souris dessus
        }
    },

    series: [{
        name: 'Sales per employee',
        borderWidth: 1,
        //data: [[0, 0, 0], [0, 1, 0], [0, 2, 0], [0, 3, 0], [1, 0, 0.0952], [1, 1, 0], [1, 2, 0.1111], [1, 3, 0], [2, 0, 0], [2, 1, 0], [2, 2, 0], [2, 3, 0], [3, 0, 0], [3, 1, 0], [3, 2, 0.1111], [3, 3, 0]],
		data: listeNeutre,
		dataLabels: {
            enabled: true,
            color: '#000000'
        }
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                yAxis: {
                    labels: {
                        formatter: function () {
                            return this.value.charAt(0);
                        }
                    }
                }
            }
        }]
    }

});




		}
}
