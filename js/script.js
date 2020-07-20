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

    sendMessage(txt, '#verde');
    setTimeout(sendAnswer, 1000);
  }
};

function sendClick(){
  var input = $('#messaggio-input');
  var txt = input.val();

  input.val('');

  sendMessage(txt, '#verde');
  setTimeout(sendAnswer, 1000);
}

function sendMessage(txt, type){
  var template = $('#template-messaggi-inviati > div').clone();
  var target = $('#messaggi');

  template.addClass(type);
  template.find('#testo').html(txt);
  template.find('#orario').html(getHour());

  target.append(template);
};

function getHour(){
  var ora = new Date();
  return ora.getHours() + ':' + ora.getMinutes();
};

// MILESTONE 2

function sendAnswer(){
  var template = $('#template-messaggi-ricevuti > div').clone();
  var target = $('#messaggi');

  template.find('#testo').html('ok');
  template.find('#orario').html(getHour());

  target.append(template);
}

// L'utente ricerca un contatto tra la sua lista contatti
function addSearchListner(){
  var target = $('#ricerca');
  target.keyup(searchKeyUp);
}

function searchKeyUp(){

  var input = $(this);
  var txt = input.val();

  var contacts = $('.lista .contatto');
  contacts.each(function (){

    var contact = $(this);
    var name = contact.find('#nome').text();

    // name.indexOf(txt);
    if (name.toLowerCase().includes(txt.toLowerCase())) {
      contact.show();
    } else {
      contact.hide();
    }
  })

}
// MILESTONE 3

function addContactClickListener(){
  var contatti = $('.lista .contatto');
  contatti.click(contactClick);
}

function contactClick(){
  var contattoSelezionato = $(this);
  var id = contattoSelezionato.data('id');
  var contatti = $('.lista .contatto');

  var conversazione = $('#messaggi');
  var selezionaConversazione = $('#messaggi[data-id= ' + id + ' ]');

  var utente = $('#utente');
  var selezionaUtente = $('#utente[data-id=' + id + ']');

  contatti.removeClass('active');
  contattoSelezionato.addClass('active');

  conversazione.removeClass('active');
  selezionaConversazione.addClass('active');

  utente.removeClass('active');
  selezionaUtente.addClass('active');
}

function init(){
  addContactClickListener();
  addSearchListner();
  addSendListner();
};

$(document).ready(init);
