//-------------------------------FORM---------------------------------//

//Función 
form.onsubmit = (event) => {

    //Método para que no se vuelva a cargar la web al hacer click en submit
    event.preventDefault();

    //Declaración de variables asignando el valor que entra el usuario por el formulario
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let phone = document.querySelector("#phone").value;
    let message = document.querySelector("#message").value;

    //En caso de que alguno de los campos este vacío
    if (name === "" || message === "" || phone === "" || email === "") {
        // alert("Porfavor rellene todos los campos para poder enviar el formulario");
        if (name === "") {
            document.querySelector("#name").classList.add('border');
        }
        if (email === "") {
            document.querySelector("#email").classList.add('border');
        }
        if (phone === "") {
            document.querySelector("#phone").classList.add('border');
        }
        if (message === "") {
            document.querySelector("#message").classList.add('border');
        }

        document.querySelector("#fail").classList.remove('message-form-fail');
        document.querySelector("#fail").classList.add('message-form-fail-active');

        document.querySelector("#succes").classList.add('message-form-succes');
        document.querySelector("#succes").classList.remove('message-form-succes-active');

    } 
    else {
        console.log(`Name: ${name}`);
        console.log(`Phone: ${phone}`);
        console.log(`Email: ${email}`);
        console.log(`Message: ${message}`);
    
        document.querySelector("#succes").classList.remove('message-form-succes');
        document.querySelector("#succes").classList.add('message-form-succes-active');

        document.querySelector("#fail").classList.remove('message-form-fail-active');
        document.querySelector("#fail").classList.add('message-form-fail');


        document.querySelector("#name").classList.remove('border');
        document.querySelector("#email").classList.remove('border');
        document.querySelector("#phone").classList.remove('border');
        document.querySelector("#message").classList.remove('border');
    }
};
  