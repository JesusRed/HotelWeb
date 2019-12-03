$(document).ready(function () {
    $('.datepicker').datepicker({ format: 'dd/mm/yyyy' });
    $('select').formSelect();
    $('.dropdown-trigger').dropdown();
    $('.sidenav').sidenav();
    $('#sidenav-1').sidenav({ edge: 'left' });
    $('.carousel').carousel({ duration: 100, dist: 0, shift: 50, padding: 50 });
    $('.collapsible').collapsible();
    
    // end of jQuery name space
}); // end of document ready
window.setInterval(function () { $(".carousel").carousel('next') }, 4500);

//{ duration: 100, dist: 0, shift: 50, padding: 50} AIzaSyAE-LlSkfSIpXI6TBVsuPPLRyvF5qA9oME