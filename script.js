$(document).ready(function(){
//pagNext
  $("#pagNext").click(function(){
    $("#pag01").text(Number($("#pag01").text())+10);
    $("#pag02").text(Number($("#pag02").text())+10);
    $("#pag03").text(Number($("#pag03").text())+10);
    $("#pag04").text(Number($("#pag04").text())+10);
    $("#pag05").text(Number($("#pag05").text())+10);
    $("#pag06").text(Number($("#pag06").text())+10);
    $("#pag07").text(Number($("#pag07").text())+10);
    $("#pag08").text(Number($("#pag08").text())+10);
    $("#pag09").text(Number($("#pag09").text())+10);
    $("#pag10").text(Number($("#pag10").text())+10);
  })
  
//pagPrevious
  $("#pagPrevious").click(function(){
    if ($("#pag01").text() != 1) {
      if((Number($("#pag01").text())-10) == 1) {
        $("#pag01").text("01");
        $("#pag02").text("02");
        $("#pag03").text("03");
        $("#pag04").text("04");
        $("#pag05").text("05");
        $("#pag06").text("06");
        $("#pag07").text("07");
        $("#pag08").text("08");
        $("#pag09").text("09");
        $("#pag10").text("10");
      } else{
        $("#pag01").text(Number($("#pag01").text())-10);
        $("#pag02").text(Number($("#pag02").text())-10);
        $("#pag03").text(Number($("#pag03").text())-10);
        $("#pag04").text(Number($("#pag04").text())-10);
        $("#pag05").text(Number($("#pag05").text())-10);
        $("#pag06").text(Number($("#pag06").text())-10);
        $("#pag07").text(Number($("#pag07").text())-10);
        $("#pag08").text(Number($("#pag08").text())-10);
        $("#pag09").text(Number($("#pag09").text())-10);
        $("#pag10").text(Number($("#pag10").text())-10);
      }
    } else {
      $("#pag01").text("01");
      $("#pag02").text("02");
      $("#pag03").text("03");
      $("#pag04").text("04");
      $("#pag05").text("05");
      $("#pag06").text("06");
      $("#pag07").text("07");
      $("#pag08").text("08");
      $("#pag09").text("09");
      $("#pag10").text("10");
    }
  })
  
  // onclick
  $("#pag01").click(function(){
    $("#test").text($("#pag01").text());
  })
  $("#pag02").click(function(){
    $("#test").text($("#pag02").text());
  })
  $("#pag03").click(function(){
    $("#test").text($("#pag03").text());
  })
  $("#pag04").click(function(){
    $("#test").text($("#pag04").text());
  })
  $("#pag05").click(function(){
    $("#test").text($("#pag05").text());
  })
  $("#pag06").click(function(){
    $("#test").text($("#pag06").text());
  })
  $("#pag07").click(function(){
    $("#test").text($("#pag07").text());
  })
  $("#pag08").click(function(){
    $("#test").text($("#pag08").text());
  })
  $("#pag09").click(function(){
    $("#test").text($("#pag09").text());
  })
  $("#pag10").click(function(){
    $("#test").text($("#pag10").text());
  })
  
});