
// code voor op de korte verhalen pagina - anders komt code in conflict

//check of code werkt ..
console.log('ikwerk');




//Functie voor het filteren op de categoriepagina - korteverhalen..
var filterbtn = document.getElementsByClassName("filter-btn");

var wrapper = document.getElementById("wrapper");

var wrapperChildren = wrapper.children;



// zoekveld openen

function openZoekveld (){
    document.body.classList.toggle("activeer");

}

var searchSubmit = document.getElementById("search_submit");

searchSubmit.addEventListener("click", openZoekveld);






// function voor pagina filter
// hier worden alle buttons naar geluisterd een voor een gecontroleerd op classname
for (var i = 0; i < filterbtn.length; i++) {
    filterbtn[i].addEventListener('click', executeClassCheck);
}


// dit is de functie vervolgens word uitgevoerd vanuit de eventlistener
function executeClassCheck(event) {

    var btnClass = event.currentTarget.classList.item(1);

    var wrapperChildren = document.getElementById("wrapper").children;


    for (i = 0; i < wrapperChildren.length; i++) {

        var iets = wrapperChildren[i].classList.item(1)

        if (wrapperChildren[i].classList.item(1) !== btnClass) {
            wrapperChildren[i].style.display = "none";
        } else {
            wrapperChildren[i].style.display = "";
        }

        // bij deze functie word gekeken of de class matcht van de button met de verhalen
        // als dit klopt dan worden alleen de verhalen laten zien die matchen met de button
        

    }
    
}



// het toevoegen van een verhaal

var plusbutton = document.querySelector(".add");

plusbutton.addEventListener("click", toevoegen);

function toevoegen (){
    document.body.classList.toggle("toevoegen");

}