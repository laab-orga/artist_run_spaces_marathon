$.getJSON('data/miserables.json',function(data){
    var nodes = new vis.DataSet(['nodes']);
    var edges = new vis.DataSet(data['links']);
});
/*
  // create an array with nodes
  var nodes = new vis.DataSet([
    {id: 1, city: 'Node 1',label:'Montpellier'},
    {id: 2, city: 'Node 2',label:'Paris'},
    {id: 3, city: 'Node 3',label:'Nice'},
    {id: 4, city: 'Node 4',label:'Lyon'},
    {id: 5, city: 'Node 5',label:'Marseille'}
  ]);

  // create an array with edges
  var edges = new vis.DataSet([
    {from: 1, to: 3, width: 1 , label:'13'},
    {from: 1, to: 2, width: 6 , label:'12'},
    {from: 2, to: 4, width: 1 , label:'24'},
    {from: 2, to: 5, width: 3 , label:'25'},
    {from: 2, to: 3, width: 1 , label:'23'},
  ]);
*/
  // create a network
  var container = document.getElementById('mynetwork');
  var data = {
    nodes: nodes,
    edges: edges
  };
  var options = {interaction:{hover:true}};
  var network = new vis.Network(container, data, options);
  
network.on('hoverNode',function(params) {
               console.log(params.node);
               console.log(network['body']['data']['nodes']['_data'][params.node]['city']);
           }
          );
network.on('hoverEdge',function(params) {
               console.log(params);
               //console.log(network['body']['data']['edge']['_data'][params.node]['word']);
           }
          );


function focus() {
    nodeId = vis.network._getSelectedNode().id;
    var offsetx = 0;
    var offsety = 0;
    var duration = 3000;
    var scale = 1;
    var easingFunction = 'linear';

    var options = {
                      // position: {x:positionx,y:positiony}, // this is not relevant when focusing on nodes
                  scale: scale,
                  offset: {x:offsetx,y:offsety},

                  animation: {
                  duration: duration,
                  easingFunction: easingFunction
                      }
                  };

    network.focusOnNode(nodeId, options);
}
function zoom() {

    var offsetx = 0;
    var offsety = 0;
    var duration = 3000;
    var easingFunction = 'linear';

var options = {offset: {x:offsetx,y:offsety},
               duration: duration,scale:0,
               easingFunction: easingFunction
                  };

    network.zoomExtent(options);

}
