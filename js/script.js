const carregaLista = lista => lista.reduce((acum, item) => acum = acum + `<li>${item}</li>`,"")

const getId = (id, lista) => lista.filter(elem => elem.id == id)

const carregaRestaurant = (restaurant, lista) => {


    let resp = `
        <div class="restaurant">
        <h3>${restaurant.name}</h3>
            <img width="300px" height="200px" src="https://rafaelescalfoni.github.io/desenv_web/restaurante/${restaurant.photo}" alt="${restaurant.name}"
            <div class="ballPrice">
                <p>R${restaurant.price}<p>
            </div>
        </div>`
    const divResp = document.querySelector("#restaurant")
    divResp.innerHTML += resp
    
}

let contaAPagar = document.querySelector("contaComida")


const xhttp = new XMLHttpRequest()
const url = "https://rafaelescalfoni.github.io/desenv_web/restaurante/items.json"


xhttp.open("GET", url)

xhttp.send()

xhttp.onreadystatechange = function(){
    if(this.readyState == 4){
        if(this.status == 200){
            let resposta = this.responseText
            let restaurants = JSON.parse(resposta)

            restaurants.forEach(restaurant => {
               carregaRestaurant(restaurant, restaurants) 
            });
        }
    }else{
        //deu bigode
    }
}