$(document).ready(function () {
  $('.dropbtn').click(function(){
    $('.dropdown-content').toggleClass('show')
  
  
    $(document).mouseup(function(e) {
      var $target = $(e.target);
      if ($target.closest(".menu").length == 0) {
          $(".dropdown-content").removeClass("show");
      }
  
      });
  
  });
  
});