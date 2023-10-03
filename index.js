listeItem = []

function additioner(){
    let item = document.getElementById("item").value

    if(item==""){
    alert("Add an item")
 }else{
    if(listeItem.indexOf(item) < 0){
        listeItem.push(item)
        netoyer()
        imprimer()
       // if(listeItem.indexOf(item) < 0){
          //  listeItem.push(item)
          //  netoyer()
          //  imprimer()   
       // }
    }else{
        alert("This item is already in the array")
    }
    
 }

}

function netoyer(){
    document.getElementById("item").value = ""
}

function imprimer(){
    document.getElementById("liste").innerText = listeItem.join(" / ")
}