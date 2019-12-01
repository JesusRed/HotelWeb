$(document).ready(function(){

    $('.sidenav').sidenav();
    $('.carousel').carousel({ duration: 100, dist: 0, shift: 50, padding: 50});
    // end of jQuery name space
}); // end of document ready
window.setInterval(function() { $(".carousel").carousel('next') }, 4500);

//{ duration: 100, dist: 0, shift: 50, padding: 50} AIzaSyAE-LlSkfSIpXI6TBVsuPPLRyvF5qA9oME