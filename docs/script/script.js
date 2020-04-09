
$(document).ready(function(){
  console.log('script');
  var fichier = $("#clust option:selected").val();
  global_graph(fichier);
  draw_graph(fichier);
    $('#clust').change(function(){
      console.log($("#clust option:selected").val());
      fichier = $("#clust option:selected").val();
      draw_graph(fichier);
      wordcloud(fichier);
      adjacence(fichier);
      Parametre(fichier);
	  global_graph(fichier);
      $('#content_lda').html(`<object class="w-100 lda" data="data/LDA/cluster`+fichier+`lda.html" type="text/html" > <!-- Mettre chemin vers fichier LDA-->`);
    });
  });
