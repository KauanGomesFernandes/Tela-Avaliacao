function selectStar() {

    inputStars = document.getElementsByName('input-star');
    stars = document.getElementsByClassName('fa-star')

    removeStar = false;

    /*
    if (typeof inputStarChecked == "undefined"){
        console.log("/")
    }*/

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

}