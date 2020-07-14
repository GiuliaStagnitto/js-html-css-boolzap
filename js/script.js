
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
  }

};

function sendClick(){
  var input = $('#messaggio-input');
  var txt = input.val();

  input.val('');

  sendMessage(txt);
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

function init(){

  addSendListner();

};

$(document).ready(init);
