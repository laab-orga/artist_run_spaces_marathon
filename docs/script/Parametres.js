function Parametre(fichier){ 
	var requestURL = 'data/INFO_JSONV4.json';
	var request = new XMLHttpRequest();
	request.open('GET', requestURL);
	request.responseType = 'json';
	request.send();
	request.onload = function() {
		var data = request.response;
	// définition des variables 
		var cluster = 'cluster'+fichier; 
		var degréMoyen=data[cluster][0]["degree_moyen"];
		var degréMax=data[cluster][0]['degree_max'];
		var degréMaxName=data[cluster][0]['noeud_max_degree'];
		var degréMin=data[cluster][0]['degree_min'];
		var degréMinName=data[cluster][0]['noeud_min_degree'];
		var coefClusterMoyen=data[cluster][0]['coefficient_clustering'];
		var TailleGraph=data[cluster][0]['size'];
		var connectivitéMoyenneGraph =data[cluster][0]['moy_connect_noeud'];
	

		
// Création du tableau 
			var tableau = "";
			
			titre = 'Paramètres du ' ;
			titre+=cluster;
			//tableauHTML = document.getElementById("tableau_ULIS");
			//tableauHTML.hidden = false;
			// TABLEAU DEGRÉ 

			/*tableau += "<titre> Tableau des paramètres du "+cluster+"</titre>";*/
			tableau += "<table id='tableSarah'>";
			tableau += "<tr>";
				tableau += "<th>Paramètre</th>";
				tableau += "<th>Valeur</th>";
				tableau +="<th>Variable</th>";
			tableau +="</tr>";
			tableau +="<tr>";
				tableau +="<td> Taille du Graphe </td>";
				tableau +="<td>"+TailleGraph+"</td>";
				tableau +="<td></td>";
			tableau +="</tr>";
			tableau +="<tr>";
				tableau +="<td> Degré moyen </td>";
				tableau +="<td>"+Math.round(degréMoyen*1000)/1000+"</td>";//arrondi au troisieme chiffre apres la virgule
				/*tableau +="<td>"+degréMoyen+"</td>";*/
				tableau +="<td></td>";
			tableau +="</tr>";
			tableau +="<tr>";
				tableau +="<td>Degré max</td>";
				tableau +="<td>"+degréMax+"</td>";
				tableau +="<td>"+degréMaxName+"</td>";
			tableau +="</tr>";
			tableau +="<tr>";
				tableau +="<td>Degré min</td>";
				tableau +="<td>"+degréMin+"</td>";
				tableau +="<td>"+degréMinName+"</td>";
			tableau +="</tr>";
			tableau +="<tr>";
				tableau +="<td>Coefficient de Clustering Moyen</td>";
				tableau +="<td>"+Math.round(coefClusterMoyen*1000)/1000+"</td>";
				/*tableau +="<td>"+coefClusterMoyen+"</td>";*/
				tableau +="<td></td>";
			tableau +="</tr>";
			tableau +="<tr>";
				tableau +="<td> Connectivité moyen </td>";
				tableau +="<td>"+Math.round(connectivitéMoyenneGraph*1000)/1000+"</td>";
				/*tableau +="<td>"+connectivitéMoyenneGraph+"</td>";*/
				tableau +="<td></td>";
			tableau +="</tr>";
			tableau +="</table>";


// Ajustement HTML
		var ex = document.getElementById("param");
		ex.innerHTML = tableau;
		}
	}	