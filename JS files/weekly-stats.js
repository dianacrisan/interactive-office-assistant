var values = [ 5, 6, 8, 7, 5, 6, 1 ];  
drawGraph(values);

function drawGraph(array) {  
    var canvas = document.getElementById( "stats-chart-canvas" );  
    var context = canvas.getContext( "2d" );  
  
    var GRAPH_TOP = 25;  
    var GRAPH_BOTTOM = 375;  
    var GRAPH_LEFT = 25;  
    var GRAPH_RIGHT = 475;  
  
    var GRAPH_HEIGHT = 350;  
    var GRAPH_WIDTH = 450;  
  
    var arrayLength = array.length;  
  
    var largest = 0;  
    for( var i = 0; i < arrayLength; i++ ){  
        if( array[ i ] > largest ){  
            largest = array[ i ];  
        }  
    }  
  
    context.clearRect( 0, 0, 500, 400 );  
    // set font for fillText()  
    context.font = "16px Arial";  
       
    // draw X and Y axis  
    context.beginPath();  
    context.moveTo( GRAPH_LEFT, GRAPH_BOTTOM );  
    context.lineTo( GRAPH_RIGHT, GRAPH_BOTTOM );  
    context.lineTo( GRAPH_RIGHT, GRAPH_TOP );  
    context.stroke();  
       
    // draw reference line  
    context.beginPath();  
    context.strokeStyle = "#BBB";  
    context.moveTo( GRAPH_LEFT, GRAPH_TOP );  
    context.lineTo( GRAPH_RIGHT, GRAPH_TOP );  
    // draw reference value for hours  
    context.fillText( largest, GRAPH_RIGHT + 15, GRAPH_TOP);  
    context.stroke();  
   
    // draw reference line  
    context.beginPath();  
    context.moveTo( GRAPH_LEFT, ( GRAPH_HEIGHT ) / 4 * 3 + GRAPH_TOP );  
    context.lineTo( GRAPH_RIGHT, ( GRAPH_HEIGHT ) / 4 * 3 + GRAPH_TOP );  
    // draw reference value for hours  
    context.fillText( largest / 4, GRAPH_RIGHT + 15, ( GRAPH_HEIGHT ) / 4 * 3 + GRAPH_TOP);  
    context.stroke();  
   
    // draw reference line  
    context.beginPath();  
    context.moveTo( GRAPH_LEFT, ( GRAPH_HEIGHT ) / 2 + GRAPH_TOP );  
    context.lineTo( GRAPH_RIGHT, ( GRAPH_HEIGHT ) / 2 + GRAPH_TOP );  
    // draw reference value for hours  
    context.fillText( largest / 2, GRAPH_RIGHT + 15, ( GRAPH_HEIGHT ) / 2 + GRAPH_TOP);  
    context.stroke();  
   
    // draw reference line  
    context.beginPath();  
    context.moveTo( GRAPH_LEFT, ( GRAPH_HEIGHT ) / 4 + GRAPH_TOP );  
    context.lineTo( GRAPH_RIGHT, ( GRAPH_HEIGHT ) / 4 + GRAPH_TOP );  
    // draw reference value for hours  
    context.fillText( largest / 4 * 3, GRAPH_RIGHT + 15, ( GRAPH_HEIGHT ) / 4 + GRAPH_TOP);  
    context.stroke();  
  
    // draw titles  
    context.fillText( "Day of the week", GRAPH_RIGHT / 3, GRAPH_BOTTOM + 50);  
    context.fillText( "Hours", GRAPH_RIGHT + 30, GRAPH_HEIGHT / 2);  
  
    context.beginPath();  
    context.lineJoin = "round";  
    context.strokeStyle = "black";  
  
    context.moveTo( GRAPH_LEFT, ( GRAPH_HEIGHT - array[ 0 ] / largest * GRAPH_HEIGHT ) + GRAPH_TOP );  
    // draw reference value for day of the week  
    context.fillText( "1", 15, GRAPH_BOTTOM + 25);  
    for( var i = 1; i < arrayLength; i++ ){  
        context.lineTo( GRAPH_RIGHT / arrayLength * i + GRAPH_LEFT, ( GRAPH_HEIGHT - array[ i ] / largest * GRAPH_HEIGHT ) + GRAPH_TOP );  
        // draw reference value for day of the week  
        context.fillText( ( i + 1 ), GRAPH_RIGHT / arrayLength * i, GRAPH_BOTTOM + 25);  
    }  
    context.stroke();  
}   

function incEltNbr(id) {
  elt = document.getElementById(id);
  endNbr = Number(document.getElementById(id).innerHTML);
  incNbrRec(0, endNbr, elt);
}

/*A recursive function to increase the number.*/
var speed = 10;
function incNbrRec(i, endNbr, elt) {
  if (i <= endNbr) {
    elt.innerHTML = i;
    setTimeout(function() {             //Delay a bit before calling the function again.
      incNbrRec(i + 1, endNbr, elt);
    }, speed);
  }
}

/*Function called on button click*/
function increasingNumbers(){
  incEltNbr("firstNumberStat");
  incEltNbr("secondNumberStat");
  incEltNbr("thirdNumberStat");
  incEltNbr("fourthNumberStat");
}

