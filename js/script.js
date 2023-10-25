const carregaLista = lista => lista.reduce((acum, item) => acum = acum + `<li>${item}</li>`,"")

const getId = (id, lista) => lista.filter(elem => elem.id == id)

const carregaRestaurant = (restaurant, lista) => {



    let resp = `
        <div class="restaurant">
            <img src="" alt="${restaurant.name}" width="200px" height="200px">
            <div class="pricebola"><p>R${restaurant.price}<p></div><h3>${restaurant.name}</h3>
        </div>`
    const divResp = document.querySelector("#restaurant")
    divResp.innerHTML += resp
}
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