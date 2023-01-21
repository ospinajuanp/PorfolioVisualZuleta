function sendEmail (){
    Email.send({
      SecureToken : "",
      To : '',
      From : document.getElementById('email').value,
      Subject : "This is the subject",
      Body : 
      `Name: ${document.getElementById('name').value}
      Email: ${document.getElementById('email').value}
      Phone: ${document.getElementById('phone').value}
      Message: ${document.getElementById('message').value}
      `
    }).then(
      message => alert('Mensaje Enviado Con Exito')
    );
  }