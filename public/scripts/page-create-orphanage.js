// create map
const map = L.map('mapid').setView([-4.1327695,-38.254493], 15)

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

// create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker;
// create and add marker
map.on('click', (event) =>{
    const lat = event.latlng.lat
    const lng = event.latlng.lng
    
    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng

    // remove marker
    marker && map.removeLayer(marker)
    // add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
    
})

// adicionar o campo de fotos
function addPhotoField(){
    // pegar o container de fotos #images
    const container = document.querySelector('#images')
    // pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // realizar do clone da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    // verificar se o campo está vazio, se sim, não adicionar ao container de imagens
    const input = newFieldContainer.children[0]
    if(input.value == ""){
        return
    }
    // limpar o campo antes de adicionar ao container de imagens
    input.value=""    
    // adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}

function deleteField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll(".new-upload")

    if(fieldsContainer.length < 2){
        // limpar o campo
        span.parentNode.children[0].value=""
        return
    }

    // deletar o campo
    span.parentNode.remove()
}

// select yes or no
function toggleSelect(event){
    // pegar o botão clicado atual
    actualBtn = event.currentTarget

    // pegar todos os botoes
    const buttons = document.querySelectorAll(".button-select button")

    // função para remover a classe active de todos os botoes
    function removeActiveClass(button){
        button.classList.remove("active")
    }

    // aplicar a função nos botoes para remover a classe active
    buttons.forEach(removeActiveClass)

    // adicionar a classe active no botão atual
    actualBtn.classList.add("active")

    // atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    // atualizar o valor do data-value do input hidden para o backend
    input.value = actualBtn.dataset.value


}

