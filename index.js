
function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "conew34@gmail.com",
        Password : "25F8E39EAC7E487B41B0355E57085C76F59E",
        To : 'conew34@gmail.com',
        From : "conew34@gmail.com",
        Subject : "BOOK SHUTTERCRIB",
        Body : "Name: " + document.getElementById("name").value
        + "<br> Email: "  + document.getElementById("email").value
        + "<br> Number: "  + document.getElementById("number").value
        + "<br> Date: "  + document.getElementById("date").value
        + "<br> Details: "  + document.getElementById("eventdetails").value
        
    }).then(
        document.getElementById("hidden").innerHTML = "Thank You For Choosing ShutterCrib!!!"
 );
}
 