
function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "ayokaz11@gmail.com",
        Password : "2D64806845CD49B2714BC2A6128A5A10276C",
        To : 'ayokaz11@gmail.com',
        From : "ayokaz11@gmail.com",
        Subject : "BOOK SHUTTERCRIB",
        Body : "NAME: " + document.getElementById("name").value
        + "<br> EMAIL: " + document.getElementById("email").value
        + "<br> PHONE NUMBER: " + document.getElementById("number").value
        +"<br> EVENT DATE: " + document.getElementById("date").value
        +"<br> EVENT DETAILS: " + document.getElementById("eventdetails").value
    }).then(
      document.getElementById("hidden").innerHTML = "Thank You For Choosing ShutterCrib Photography!!!"
    );
}
  