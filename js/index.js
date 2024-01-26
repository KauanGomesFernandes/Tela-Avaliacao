var inputStarChecked
var erroSubmit = false

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

    if(inputStarChecked == undefined){

        erroSubmit = true

        let starCheckedErro = document.getElementById("container-erro-stars");

        if(starCheckedErro.textContent == undefined || starCheckedErro.textContent == ""){
            text = document.createTextNode("Selecione uma estrela");    
            starCheckedErro.appendChild(text)
        }

    }

    if(inputStarChecked != undefined){

        erroSubmit = false

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

    console.log(comentario)
    console.log(chars)
    

    if(erroSubmit){
        env.preventDefault();
    }
}