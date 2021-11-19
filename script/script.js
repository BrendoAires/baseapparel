const btn = document.querySelector('#button');
const  email = document.getElementById("email").value;
const inputemail = document.querySelector('#email');
btn.addEventListener('click', pegaCampo)
function pegaCampo() {
    let btn = document.getElementById("button");
    let email = document.getElementById("email").value;
    
    validarEmail(email);

}


function validarEmail(emailCapturadoDoFormulario){
    let validarREGexNoEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailCapturadoDoFormulario.match(validarREGexNoEmail)){
        
        document.getElementById("msgErro").style.display = "none";
        document.getElementById("email").value = "";
        alert("Email cadastrado com sucesso")
        return true;

    } else{
        
        inputemail.classList.add('inputerro');
        document.getElementById("msgErro").style.color = "red";
        
        document.getElementById("msgErro").style.display = "block"; 
        
        return false;

    }

}
    
    function limpaErro(){
    document.getElementById("msgErro").style.display = "none";
    inputemail.classList.remove('inputerro');
    }