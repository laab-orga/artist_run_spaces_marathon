console.log('script');
$(document).ready(function(){
    draw_graph('TOTALY_scrap',1);
    draw_graph('Word_scrap',2);
    wordcloud('wordcountscrap',1);
    //wordcloud('wordcountscrap',2);
    adjacence('HEATMAP_SCRAP_PROJET');
});
