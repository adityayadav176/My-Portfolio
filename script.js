  // Setup and start animation! //
 
 var typed = new Typed('#element', {
      strings: ['Web developer', 'Grafic designer','Web Designer'],
      typeSpeed: 50,
    });
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let mailTo = "mailto:ay6598aditya@gmail.com"
               + "?subject=" + encodeURIComponent("New Portfolio Message")
               + "&body=" 
               + encodeURIComponent("Name: " + name)
               + "%0A"
               + encodeURIComponent("Email: " + email)
               + "%0A"
               + encodeURIComponent("Message: " + message);

    window.location.href = mailTo;
});
