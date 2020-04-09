///////////////////////////////////////////////////////////////////////Page 3 
function parametre_concept_pro(){
	var requestURL = 'data/concept/info_concept_project.json';
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


			tableau += "<titre> Tableau des paramètres concept projet</titre><table><tr><TH>Paramètre</TH><TH>Valeur</TH><TH>Name</TH></tr><tr><TH> Taille du Graphe </TH><td>"+TailleGraph+"</td><td></td></tr><tr><TH> Degré moyen </TH><td>"+degréMoyen+"</td><td></td></tr><tr><th>Degré max</th><td>"+degréMax+"</td><td>"+degréMaxName+"</td></tr><tr><th>Degré min</th><td>"+degréMin+"</td><td>"+degréMinName+"</td></tr><tr><th>Coefficient de Clustering Moyen</th><td>"+coefClusterMoyen+"</td><td></td></tr></table>";

		
		var ex = document.getElementById('param_concept_pro');
		ex.innerHTML= tableau;
	}
}

function parametre_concept_words(){
	var requestURL = 'data/concept/INFO_FOR_WORD_concept_final.json';
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


			tableau += "<titre> Tableau des paramètres concept WORDS</titre><table><tr><TH>Paramètre</TH><TH>Valeur</TH><TH>Name</TH></tr><tr><TH> Taille du Graphe </TH><td>"+TailleGraph+"</td><td></td></tr><tr><TH> Degré moyen </TH><td>"+degréMoyen+"</td><td></td></tr><tr><th>Degré max</th><td>"+degréMax+"</td><td>"+degréMaxName+"</td></tr><tr><th>Degré min</th><td>"+degréMin+"</td><td>"+degréMinName+"</td></tr><tr><th>Coefficient de Clustering Moyen</th><td>"+coefClusterMoyen+"</td><td></td></tr></table>";

		
		var ex = document.getElementById('param_concept_words');
		ex.innerHTML= tableau;
	}
}