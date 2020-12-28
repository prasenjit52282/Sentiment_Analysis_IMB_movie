function plotData(){
  review=document.getElementById('Rev').value;
  console.log(review)
  var data=$.get( "http://127.0.0.1:5000/?review="+review);
  setTimeout(function(){
    console.log("hi",data.responseJSON)
    var layout={
                width: 400,
                height: 400,
                margin: { l: 60, b: 60, r: 20, t: 80 },
                title: 'Sentiment Score'
              };
    Plotly.newPlot( 'plot',data.responseJSON, layout);
    document.getElementById('plot').hidden=false;
  },
  300);
}
