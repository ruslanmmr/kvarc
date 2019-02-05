$(document).ready(function () {
  headerNumbers();
});
$(window).resize(function () {
  innerWidth = $('body').innerWidth();
});

//global
var innerWidth = $('body').innerWidth();

function headerNumbers() {
  var button = $('.header__numbers-button'),
      block = $('.header__numbers-dropdown');

  function stateCheck() {
    block.each(function() {
      if($(this).hasClass('header__numbers-dropdown_visible')) {
        button.addClass('header__numbers-button_active');
      } else {
        button.removeClass('header__numbers-button_active');
      }
    });
  }
  function toggleHidden() {
    if(innerWidth<769) {
      block.removeClass('header__numbers-dropdown_visible');
      stateCheck();
    } else {
      block.addClass('header__numbers-dropdown_visible');
      stateCheck();
    }
  }

  toggleHidden();
  $(window).resize(function () {
    toggleHidden();
  });
  stateCheck();

  button.on('click', function() {
    block.toggleClass('header__numbers-dropdown_visible');
    stateCheck();
  });
}

