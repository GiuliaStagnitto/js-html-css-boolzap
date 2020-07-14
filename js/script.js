// INVIO MESSAGGI MILESTONE 1
function addSendListner(){
 var target = $('#messaggio-input');
 target.keyup(sendKeyUp);

 var button = $('#invio');
 button.click(sendClick);
};

function sendKeyUp(event){
  var key = event.which;

  if ( key === 13) {
    var input = $(this);
    var txt = input.val();

    input.val('');

    sendMessage(txt);
    setTimeout(sendAnswer, 1000);
  }
};

function sendClick(){
  var input = $('#messaggio-input');
  var txt = input.val();

  input.val('');

  sendMessage(txt);
  setTimeout(sendAnswer, 1000);
}

function sendMessage(txt){
  var template = $('#template-messaggi-inviati > div').clone();
  var target = $('#messaggi');

  template.find('#testo').html(txt);
  template.find('#orario').html(getHour());

  target.append(template);
};

function getHour(){
  var ora = new Date();
  return ora.getHours() + ':' + ora.getMinutes();
};

// MILESTONE 2

//  l'interlocutore manderà un 'ok' come risposta

function sendAnswer(){
  var template = $('#template-messaggi-ricevuti > div').clone();
  var target = $('#messaggi');

  template.find('#testo').html('ok');
  template.find('#orario').html(getHour());

  target.append(template);
}

// la risposta arriva dopo l'invio del messaggio, dopo un secondo
// FATTO

// function setTimeout(sendAnswer, 1000){
//
// }




function init(){
  addSendListner();
};

$(document).ready(init);
