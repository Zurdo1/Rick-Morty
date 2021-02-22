// constantes
const URL = "https://rickandmortyapi.com/api/character/"
let height = 0
// selectores

let ignition = document.querySelector('#ignition')

let container = document.querySelector('.container')

// function

function getData() { 
    fetch(URL)
        .then(result => {
            return result.json()
        })
        .then(data => { 
            // ciclo
            for (let per of data.results) { 
                displayData(per.name, per.image)
            }
        })
} 

function displayData(name, image) { 
    //1.- crear nodo
    let div = document.createElement('div')
    div.className = "character"
    div.innerHTML = `<img src="${image}"/> <p>${name}</p>`
    //2.- vamos a manipular al padre
    //3.- vamos a insertar el nodo en el padre
    container.appendChild(div)
    div.addEventListener('click', e => {
        height += 455
        if(height>9000) height = 0
        container.style.transform = `translateY(-${height}px)`
        console.log(height)
    })
}

// listeners

ignition.addEventListener('click', getData)
getData( )