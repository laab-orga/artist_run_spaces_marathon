
$(document).ready(function(){
  
  $('#clust').change(function(){
    console.log($("#clust option:selected").val());
    var fichier = $("#clust option:selected").val();
    draw_graph(fichier);
  });
});
