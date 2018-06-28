$(document).ready(function() {

const $login = $('.loginButton');
$login.on('click', function () {
  $('.bg-modal-login').css({display: 'flex'});
});

const $signup = $('.signupButton');
$signup.on('click', function () {
  $('.bg-modal-signup').css({display: 'flex'});
});

const $close = $('.close');
$close.on('click', function () {
  $('.bg-modal-login').css({display: 'none'});
  $('.bg-modal-signup').css({display: 'none'});
});

});
