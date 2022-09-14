document.addEventListener('DOMContentLoaded', () => {

    const url = 'http://localhost:3000/shorts'

    axios.get(url)
        .then(respuesta => {
            botines = respuesta.data
            console.log(respuesta)
            let divShorts = document.getElementById('shorts')
            let tarjetasShorts = '<div class="columns">'

            for (let i = 0; i < shorts.length; i++) {
                tarjetasBotines += `
                    <div class="column is-one-fifth">
                        <div class="card">
                            <header class="card-header">
                                <p class="card-header-title">
                                <a href="Botines/${botines[i].nombre.replace(/ /g, '_')}.html">${botines[i].nombre}</a>
                                
                                    ${botines[i].fecha}
                                    ${botines[i].categoria}
                                </p>
                            </header>
                            <div class="card-content">
                            <a href="Botines/${botines[i].nombre.replace(/ /g, '_')}.html"><img src="${botines[i].imagen}" alt="Placeholder image">
                            </div>
                            <header class="card-header">
                                <p class="card-header-title -2 are-medium">
                                    ${botines[i].precio}
                                </p>
                            </header>  
                        </div>
                    </div>
                `
                if ((i + 1) % 5 == 0 && i > 0) {
                    tarjetasBotines += `
                    </div> 
                    <div class="columns">
                    `
                }
            }
            
            console.log(tarjetasBotines)

            divBotines.innerHTML = tarjetasBotines

        })
})