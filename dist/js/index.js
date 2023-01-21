function sendMail(){
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    
    emailjs
    .send('service_qn9srvb', 'template_4kqsu5o', params)
    .then(function(res){
            console.log("success", res.status);
            alert("Your Message Sent !");
    })
    .catch((err) => console.log(err));
}
