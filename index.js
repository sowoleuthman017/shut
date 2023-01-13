
function sendEmail() {
    var params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        number : document.getElementById("number").value,
        date : document.getElementById("date").value,
        eventdetails : document.getElementById("eventdetails").value,
    }
    const serviceID = "service_ok2vcm8";
    const  templateID = "template_w52h7d7";

    emailjs.send(serviceID, templateID, params)
    .then (
        res => {
            document.getElementById("name").value= "";
            document.getElementById("email").value ="";
            document.getElementById("number").value = "";
            document.getElementById("date").value = "";
            document.getElementById("eventdetails").value = "";
            document.getElementById("hidden").innerHTML = "Thank You For Choosing ShutterCrib!!!";
        }
    )
}
  