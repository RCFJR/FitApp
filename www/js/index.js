var segundo = 0+"0";
var minuto = 0+"0";
var hora = 0+"0";
var run;
var context = "run";

window.onload = function() {
  getDate();

  $('#btnRun').click(function(){
    if(context === "run"){
      $('#btnClear').attr("disabled","disabled");
      $('#btnSave').attr("disabled","disabled");
      context = "stop";
      $('#btnRun').html("Stop");
      start();
    } else
    {
      $('#btnClear').removeAttr("disabled");
      $('#btnSave').removeAttr("disabled");
      context = "run";
      $('#btnRun').html("Go");
      stop();
    }
  });

  $('#btnClear').click(function(){
    $('#cronometro').html("00:00:00");
  });
};

function getDate(){

  var today = new Date();
  var d = new Date(today);
  var dd = d.toString().split(' ')[2];
  var dayOfWeek = d.toString().split(' ')[0];
  var mo = d.toString().split(' ')[1];
  var yy = d.toString().split(' ')[3];

  $('#spnDay').html('Day '+dd);
  $('#dayOfWeek').html(dayOfWeek);
  $('#spnDt').html(mo + ' ' + yy);
}

function start(){
  run = setInterval(tempo, 983);
}

function stop(){
  clearInterval(run);
}

function tempo(){
   if (segundo < 59){
      segundo++
      if(segundo < 10){segundo = "0"+segundo}
   }else
      if(segundo == 59 && minuto < 59){
         segundo = 0+"0";
	minuto++;
	if(minuto < 10){minuto = "0"+minuto}
      }
   if(minuto == 59 && segundo == 59 && hora < 23){
      segundo = 0+"0";
      minuto = 0+"0";
      hora++;
      if(hora < 10){hora = "0"+hora}
   }else
      if(minuto == 59 && segundo == 59 && hora == 23){
         segundo = 0+"0";
	minuto = 0+"0";
	hora = 0+"0";
      }
   $('#cronometro').html(hora +":"+ minuto +":"+ segundo);
}
