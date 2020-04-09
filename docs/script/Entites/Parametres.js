//////////////////////////////////////////////////////////////Page 2////////////////////////////////////////////////

function parametre_Scrap_projet(){
	var requestURL = 'scrap_web_link/INFOGRAPHE/info_scrap_project.json'; // a changer 
	var request = new XMLHttpRequest();
	request.open('GET', requestURL);
	request.responseType = 'json';
	request.send();
	request.onload = function() {
		var data = request.response;
	// définition des variables 
		var degréMoyen=data["degree_moyen"];
		var degréMax=data['degree_max'];
		var degréMaxName=data['noeud_max_degree'];
		var degréMin=data['degree_min'];
		var degréMinName=data['noeud_min_degree'];
		var coefClusterMoyen=data['coefficient_clustering'];
		var TailleGraph=data['size'];
		
// Création du tableau 
			var tableau = "";
			tableau += "<titre> Tableau des paramètres Scrap Projet </titre><table><tr><TH>Paramètre</TH><TH>Valeur</TH><TH>Name</TH></tr><tr><TH> Taille du Graphe </TH><td>"+TailleGraph+"</td><td></td></tr><tr><TH> Degré moyen </TH><td>"+degréMoyen+"</td><td></td></tr><tr><th>Degré max</th><td>"+degréMax+"</td><td>"+degréMaxName+"</td></tr><tr><th>Degré min</th><td>"+degréMin+"</td><td>"+degréMinName+"</td></tr><tr><th>Coefficient de Clustering Moyen</th><td>"+coefClusterMoyen+"</td><td></td></tr></table>";


// Ajustement HTML
		var ex = document.getElementById("param_scrap_pro");
		ex.innerHTML = tableau;
	}

}


//////////////////////////////////////////////////////////////////////////////////////////// POUR LES SCRAP WORDS
function parametre_Scrap_words(){
	var requestURL = 'scrap_web_link/INFOGRAPHE/INFO_FOR_WORD_SCRAP.json'; //a changer
	var request = new XMLHttpRequest();
	request.open('GET', requestURL);
	request.responseType = 'json';
	request.send();
	request.onload = function() {
		var data = request.response;
	// définition des variables 
		var degréMoyen=data["degree_moyen"];
		var degréMax=data['degree_max'];
		var degréMaxName=data['noeud_max_degree'];
		var degréMin=data['degree_min'];
		var degréMinName=data['noeud_min_degree'];
		var coefClusterMoyen=data['coefficient_clustering'];
		var TailleGraph=data['size'];

// Création du tableau 
			var tableau = "";


			tableau += "<titre> Tableau des paramètres Scrap des Mots</titre><table><tr><TH>Paramètre</TH><TH>Valeur</TH><TH>Name</TH></tr><tr><TH> Taille du Graphe </TH><td>"+TailleGraph+"</td><td></td></tr><tr><TH> Degré moyen </TH><td>"+degréMoyen+"</td><td></td></tr><tr><th>Degré max</th><td>"+degréMax+"</td><td>"+degréMaxName+"</td></tr><tr><th>Degré min</th><td>"+degréMin+"</td><td>"+degréMinName+"</td></tr><tr><th>Coefficient de Clustering Moyen</th><td>"+coefClusterMoyen+"</td><td></td></tr></table>";

		
		var ex = document.getElementById('param_scrap_words');
		ex.innerHTML= tableau;
	}
}