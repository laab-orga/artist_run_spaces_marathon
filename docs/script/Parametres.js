function Parametre(fichier){ 
	var requestURL = 'data/INFO_JSONV4.json';
	var request = new XMLHttpRequest();
	request.open('GET', requestURL);
	request.responseType = 'json';
	request.send();
	request.onload = function() {
		var data = request.response;
	// définition des variables 
		var cluster = 'cluster'+(fichier); 
		var degréMoyen=data[cluster][0]["degree_moyen"];
		var degréMax=data[cluster][0]['degree_max'];
		var degréMaxName=data[cluster][0]['noeud_max_degree'];
		var degréMin=data[cluster][0]['degree_min'];
		var degréMinName=data[cluster][0]['noeud_min_degree'];
		var coefClusterMoyen=data[cluster][0]['coefficient_clustering'];
		var TailleGraph=data[cluster][0]['size'];
		var connectivitéMoyenneGraph =data[cluster][0]['moy_connect_noeud'];
	

		
// Création du tableau 
			var tableaudegre = "";
			
			titre = 'Paramètres du ' ;
			titre+=cluster;
			//tableauHTML = document.getElementById("tableau_ULIS");
			//tableauHTML.hidden = false;
			// TABLEAU DEGRÉ 

			tableaudegre += "<titre> Tableau des paramètres du "+cluster+"</titre><table><tr><TH>Paramètre</TH><TH>Valeur</TH><TH>Name</TH></tr><tr><TH> Taille du Graphe </TH><td>"+TailleGraph+"</td><td></td></tr><tr><TH> Degré moyen </TH><td>"+degréMoyen+"</td><td></td></tr><tr><th>Degré max</th><td>"+degréMax+"</td><td>"+degréMaxName+"</td></tr><tr><th>Degré min</th><td>"+degréMin+"</td><td>"+degréMinName+"</td></tr><tr><th>Coefficient de Clustering Moyen</th><td>"+coefClusterMoyen+"</td><td></td></tr><tr><TH> Connectivité moyen </TH><td>"+connectivitéMoyenneGraph+"</td><td></td></tr></table>";


// Ajustement HTML
		var ex = document.getElementById("param");
		ex.innerHTML = tableaudegre;
		}
	}	