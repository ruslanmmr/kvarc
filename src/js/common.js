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
      block = $('.header__numbers-dropdown'),
      flag = 1;

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
    if(innerWidth<769 && flag==1) {
      block.removeClass('header__numbers-dropdown_visible');
      stateCheck();
      flag=2;
    } else if(innerWidth>768 && flag==2) {
      block.addClass('header__numbers-dropdown_visible');
      stateCheck();
      flag=1;
    }
  }
  
  if(innerWidth>769) {
    flag=2;
  } else {
    flag=1;
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

