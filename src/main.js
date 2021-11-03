fetch('./data/rickandmorty/rickandmorty.json')
    .then(function(info){ //primer then establece la coneccion con el archivo
        return info.json();
    })

    
    .then(function(data){ //segundo then me llama la data de .json
    let person = data.results;  
    let persP=''//declaramos una variable que recopila el perfil de cada personaje
    person.forEach(function(element){
        persP+= `<div class="card">
        <div class="front">
        <img src=${element.image}></img>
        <h2>${element.name}</h2>
        </div>
        <div class="info">
        <ul>
        <li>Estado: ${element.status}</li>
        <li>Especie: ${element.species}</li>
        <li>Genero: ${element.gender}</li>
        <li>Origen: ${element.origin.name}</li>
        <li>Locacion: ${element.location.name}</li>
        </ul>
        </div>
        </div>`       
         
    })
    
    document.getElementById("profiles").innerHTML=persP


   
let getResults=document.getElementById("applyFilters")
getResults.addEventListener('click',() =>{
let filterGender = document.getElementById("gender");//filtrar por genero
let genderChoice=filterGender.value
let genderResults=person.filter((gen)=>{
    if(gen.gender===genderChoice){//comparamos el genero del personaje con el valor de genero elegido
        return true
    }else{
        if(genderChoice==="none")
        return person
    }
})

console.log(genderResults)
let filterSpecies = document.getElementById("species");//filtrar por especie
let speciesChoice=filterSpecies.value
let speciesResults=genderResults.filter((spe)=>{
    if(spe.species==speciesChoice){
        return true
    }else{
        if(speciesChoice==="none")
        return person
    }
})
console.log(speciesResults)
let orderAlpha=document.getElementById("alphabet")//ordenar por orden alfabetico
    let alphaChoice=orderAlpha.value
    let alphaResults=speciesResults.sort((a,b)=>{//funcion sort
        if(alphaChoice==="ascend"){//usamos ifs para saber si ordenamos de forma ascendente o descendente
                if(a.name<b.name){
                    return -1
                }if(a.name>b.name){
                    return 1
                }
                return 0
            }if(alphaChoice==="descend"){
                if(a.name<b.name){
                    return 1
                }if(a.name>b.name){
                    return -1
                }
                return 0
            }else{
            if(alphaChoice==="none"){//si no se elige un orden, se filtra como en el inicio, con el orden de id
                if(a.id<b.id){
                    return -1
                }if(a.id>b.id){
                    return 1
                }
                return 0
            }
            }
    })  
    console.log(alphaResults)
    
   
    let list=''//declaramos una variable que recopila el perfil de cada personaje
    alphaResults.forEach(function(element){
        list+= `<div class="card">
        <div class="front">
        <img src=${element.image}></img>
        <h2>${element.name}</h2>
        </div>
        <div class="info">
        <ul>
        <li>Estado: ${element.status}</li>
        <li>Especie: ${element.species}</li>
        <li>Genero: ${element.gender}</li>
        <li>Origen: ${element.origin.name}</li>
        <li>Locacion: ${element.location.name}</li>
        </ul>
        </div>
        </div>`       
         
    })
    
    document.getElementById("profiles").innerHTML=list
   
    })
    
})

let clean = document.getElementById("clean");
clean.addEventListener('click',() => { 
    
    location.reload() })



//Poner las funciones de filtrar y ordenar en data.js
//Pensar como hacer busqueda multiple
//Ordenar cards
//Hacer otros HTML