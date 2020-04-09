
$(document).ready(function(){
  var fichier = $("#clust option:selected").val();
  global_graph(fichier);
  draw_graph(fichier);
    $('#clust').change(function(){
      console.log(fichier);
      fichier = $("#clust option:selected").val();
      draw_graph(fichier);
      wordcloud(fichier);
      adjacence(fichier);
      Parametre(fichier);
      global_graph(fichier);
      if(fichier!='Global'){
        $('.container3').hide();
        console.log('hide');
      }
      else{
        $('.container3').show();
        console.log('show');
      }
      $('#content_lda').html(`<object class="w-100 lda" data="data/LDA/cluster`+fichier+`lda.html" type="text/html" > <!-- Mettre chemin vers fichier LDA-->`);
    });
  });
