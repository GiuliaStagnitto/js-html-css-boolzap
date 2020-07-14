
function addSendListner(){
 var target = $('#messaggio');
 target.keyup(sendKeyUp);
};

function sendKeyUp(event){
  var key = event.which;

  if ( key === 13) {
    var input = $(this);
    var txt = input.val();

    input.val('');

    sendMessage(txt);
  }

};

function sendMessage(txt){
  var template = $('#template-messaggi-inviati > div').clone();
  var target = $('#verde');

  template.find('#testo').txt(txt);
  template.find('#orario').text(getHour());

  target.append(template);
};

function getHour(){
  var ora = new Date();
  return ora.getHours() + ':' + ora.getMinutes();
};

function init(){

  addSendListner();

};

$(document).ready(init);
