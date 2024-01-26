var inputStarChecked
var erroStarSubmit = false
var erroComentarioSubmit = false

function selectStar() {

    inputStars = document.getElementsByName('input-star');
    stars = document.getElementsByClassName('fa-star');


    for (let i = 0; i < inputStars.length; i++) {

        if(stars[i].classList.contains('fa-solid')){
            stars[i].classList.remove('fa-solid')
            stars[i].classList.add('fa-regular')
        }

        if(stars[i].classList.contains('stars-icon-select')){
            stars[i].classList.remove('stars-icon-select')
        }
        
        if(inputStars[i].checked){
            inputStarChecked = i;
        }
    }

    for (let i = 0; i <= inputStarChecked; i++) {
        stars[i].classList.remove('fa-regular')
        stars[i].classList.add('fa-solid')
        stars[i].classList.add('stars-icon-select')
    }

}

function submitComentario(env){

    form = document.getElementById("form-avaliacao");
    comentario = document.getElementsByName("textComentario")[0].value;

    if(inputStarChecked === undefined){

        erroStarSubmit = true

        let starCheckedErro = document.getElementById("container-erro-stars");

        if(starCheckedErro.textContent == undefined || starCheckedErro.textContent == ""){
            text = document.createTextNode("Selecione uma estrela");    
            starCheckedErro.appendChild(text)
        }

    }

    if(inputStarChecked != undefined){

        erroStarSubmit = false

        let starCheckedErro = document.getElementById("container-erro-stars");

        if(starCheckedErro.textContent != ""){
            starCheckedErro.textContent = ""
        }

    }

    let chars = 0;
    for(const char of comentario){
        if (char !== " ") {
            chars++;
        }
    }

    console.log(chars)

    if(chars <= 0){
        erroComentarioSubmit = true
        comentarioErro = document.getElementById("container-erro-comentario");

        text = document.createTextNode("Deixe seu comentário");    
        comentarioErro.appendChild(text)
    }

    if(chars >= 250){
        erroComentarioSubmit = true

        comentarioErro = document.getElementById("container-erro-comentario");
        comentarioErro.textContent = "";

        text = document.createTextNode("Quantidade de caracteres permitidos 250");    
        comentarioErro.appendChild(text)
    }

    
    if(chars >= 3 && chars <= 250){
        erroComentarioSubmit = false
        comentarioErro = document.getElementById("container-erro-comentario");

        comentarioErro.textContent = "";
    }


    if(erroStarSubmit || erroComentarioSubmit){
        env.preventDefault();
    }
}