/* Masked Input */

new InputMask();


/* Open Close modal */

var link = document.querySelector('.open-modal');
var modalId = link.getAttribute('href');
var popup = document.querySelector(modalId);
var overlay = document.querySelector('.modal__overlay');
var close = document.querySelector('.modal-close');

var form = popup.querySelector('form');
var submitBtn = popup.querySelector('.js-modal-submit');
var firstInput = popup.querySelector('input[name=name]');
var requiredFields = popup.querySelectorAll('[required]');

link.addEventListener('click', function(event) {
    event.preventDefault();
    overlay.classList.add('show');
    popup.classList.add('active');
    firstInput.focus();
});

close.addEventListener('click', function(event) {
  event.preventDefault();
  popup.classList.remove('active');
  overlay.classList.remove('show');
});

/* Close by Esc button */

window.addEventListener('keydown', function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains('active')) {
      popup.classList.remove('active');
      overlay.classList.remove('show');
    }
  }
});

/* Card Input Tabbing */

var cardInputs = popup.querySelectorAll('.card__digit');

for (var i = 0; i < cardInputs.length; i++) {

  cardInputs[i].addEventListener('keydown', function(event) {

    var digitCount = event.target.value.length;
    var nextFieldId = event.target.dataset.next;
    var prevFieldId = event.target.dataset.prev;

    if (digitCount >= 4 && nextFieldId != '') {
      var nextInput = popup.querySelector('#' + nextFieldId);
      nextInput.focus();
    }

    if (digitCount == 0 && prevFieldId != '') {
      var prevInput = popup.querySelector('#' + prevFieldId);
      prevInput.focus();
    }

  });
}