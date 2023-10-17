window.onload = function() {
  window.scrollTo(0, 0);
};

$(".nav-logo").click(function() {
  $('html,body').animate({
      scrollTop: $("html").offset().top},
      'slow');
});

$("#float-logo").click(function() {
  $('html,body').animate({
      scrollTop: $("html").offset().top},
      'slow');
});

$("#nav-aboutMe").click(function() {

  var navHeight = $('.nav-logo').outerHeight();

  $('html,body').animate({
      scrollTop: $("#aboutMe-section").offset().top - navHeight},
      'slow');
});

$("#nav-skills").click(function() {

  var navHeight = $('.nav-logo').outerHeight();

  $('html,body').animate({
      scrollTop: $("#skill-section").offset().top - navHeight},
      'slow');
});

$("#nav-works").click(function() {

  var navHeight = $('.nav-logo').outerHeight();

  $('html,body').animate({
      scrollTop: $("#portfolio-section").offset().top - navHeight},
      'slow');
});

$("#nav-cert").click(function() {

  var navHeight = $('.nav-logo').outerHeight();

  $('html,body').animate({
      scrollTop: $("#certificates-section").offset().top - navHeight},
      'slow');
});

$("#nav-contact").click(function() {

  var navHeight = $('.nav-logo').outerHeight();

  $('html,body').animate({
      scrollTop: $("#contact-me-section").offset().top - navHeight},
      'slow');
});

