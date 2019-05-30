$(document).ready(function () {
  headerNumbers();
  personalNumber();
  circles();
  mobileNav();
  date();
  modalMagnificBasket();
  autoBtnHeight();
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
function personalNumber() {
  var button = $('.personal-number__button'),
      block = $('.personal-number__dropdown-container');
  button.on('click', function() {
    block.slideToggle();
    $(this).toggleClass('personal-number__button_active');
  })
}
function circles() {
  $(function(){
    $(".services__item-circle-net").circliful({
      animation: 1,
      animationStep: 5,
      foregroundBorderWidth: 12,
      backgroundBorderWidth: 12,
      foregroundColor: '#66BF30',
      backgroundColor: '#dcdcdc',
      animateInView: true
    });
    $(".services__item-circle-cashback").circliful({
      animation: 1,
      animationStep: 5,
      foregroundBorderWidth: 12,
      backgroundBorderWidth: 12,
      foregroundColor: '#66BF30',
      backgroundColor: '#dcdcdc',
      animateInView: true
    });
    $(".circliful").attr('viewBox', '37 37 127 127');
  });
}
function mobileNav() {
  var closeButton = $('.mobile-nav__nav-close'),
      openButton = $('.mobile-head__nav-open'),
      nav = $('.mobile-nav');

  openButton.on('click', function() {
    nav.fadeIn();
  }) 
  closeButton.on('click', function() {
    nav.fadeOut();
  })  
}
function date() {
  $('.date-input').datepicker({
    // Можно выбрать тольо даты, идущие за сегодняшним днем, включая сегодня
    minDate: new Date()
  })
}
function popup() {
  $('.popup').magnificPopup(
);
}
function modalMagnificBasket() {
	$('.popup_link').magnificPopup({
		closeBtnInside: true,
		midClick: true,
    fixedContentPos: true,
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });
  $('.popup-close').on('click', function() {
    $.magnificPopup.close();
  });
}

//buttons
function autoBtnHeight() {
  resize();
  $(window).resize(function () {
    resize();
  });

  function resize() {
    var mh = 0,
    $btn = $(".services__item-link");

    $btn.css('height', 'auto');
    $btn.each(function () {
      var h_block = parseInt($(this).height());
      if(h_block > mh) {
        mh = h_block;
      };
    });
    $btn.height(mh);
  }
}

