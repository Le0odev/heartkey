const btn = document.querySelector("#btn")

const usuario = document.querySelector(".usuario").value;

const senha = document.querySelector(".senha").value;


function send(){

const usuario = document.querySelector(".usuario").value;

const senha = document.querySelector(".senha").value;

const preencha = document.querySelector("#preencha")

const sucesso = document.querySelector("#sucesso")


if(usuario.length <1 || senha.length <1){
    
    preencha.style.display = ('inline')

    setTimeout(() => {

        preencha.style.display = ('none')
    
        }, 1000);

    return false;
}

if(usuario == "Bruna Mirella" && senha == "040921" 
|| usuario == "bruna mirella" && senha == "040921"
|| usuario == "Bruna" && senha == "040921"
|| usuario == "bruna" && senha == "040921"
|| usuario == "Bruna Mirella Paladino da Silva" && senha == "040921"
|| usuario == "bruna mirella paladino da silva" && senha == "040921"){

    sucesso.style.display = ('inline')

    setTimeout(() => {

    location.href = "http://127.0.0.1:5500/home/home.html";

    }, 500);
    
} else{

    negado.style.display = ('inline')

    setTimeout(() => {

        location.href = "http://127.0.0.1:5500/error/erro.html";
    
        }, 500);

};


};