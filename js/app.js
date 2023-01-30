// Declaraciones
// -------------

let allTarjetas


// Query de elementos
//-------------------

const contenedorTarjetas = document.querySelector("#contenedorTarjetas")



// Funciones
//----------

const renderizarTarjetas = () => {
    allTarjetas.forEach((tarjetas) => {
        const tarjetasArticle = document.createElement('article')
        tarjetasArticle.className = 'cartas'
        tarjetasArticle.innerHTML =
            `
        <img src="${tarjetas.img}" alt="">
        `
        contenedorTarjetas.append(tarjetasArticle)
    })
}










const cargarListaTarjetas = async () => {
    const res = await fetch('./data/data.json')
    const {
        data
    } = await res.json()
    allTarjetas = data
    renderizarTarjetas(allTarjetas)


}


cargarListaTarjetas()