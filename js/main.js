
let alire = document.getElementById("alire");
let lu = document.getElementById("lu");

document.getElementById("ajouter").addEventListener("click",function(){
 
    let lien = document.getElementById('lien').value;
    let titre = document.getElementById('titre').value;
    if(lien=="" || titre==""){
      alert ("les deux doivent etre rempli");
    }
    else{
        alire.insertAdjacentHTML ("afterbegin",`<li>${titre}<i id=${titre} onClick=supprimer(this.id) class="fa-solid fa-trash-can"></i><a href=${lien} target="blank"><i class="fa-sharp fa-solid fa-cart-shopping"></i></a><i class="fa-solid fa-check" onClick=marquerLu(this.id)></i></li>`);
        document.getElementById('lien').value=""
        document.getElementById('titre').value=""
    }

    
})
function supprimer(id){

    document.getElementById(id).parentElement.outerHTML="";
}

function marquerLu(id){
    supprimer(id);
    lu.insertAdjacentHTML ("afterbegin",`<li>${id}<i id=${id} onClick=supprimer(this.id) class="fa-solid fa-trash-can"></i><a href=${id} target="blank"><i class="fa-sharp fa-solid fa-cart-shopping"></i></a><i class="fa-solid fa-check" onClick=marquerLu(this.id)></i></li>`);


}