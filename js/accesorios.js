document.addEventListener('DOMContentLoaded', () => {

    const url = 'http://localhost:3000/accesorios'

    axios.get(url)
        .then(respuesta => {
            accesorios = respuesta.data
            console.log(respuesta)
            let divAccesorios = document.getElementById('accesorios')
            let tarjetasAccesorios = '<div class="columns">'

            for (let i = 0; i < accesorios.length; i++) {
                tarjetasAccesorios += `
                    <div class="column is-one-fifth">
                        <div class="card">
                            <header class="card-header">
                                <p class="card-header-title">
                                <a href="Camisetas/${accesorios[i].nombre.replace(/ /g, '_')}.html">${accesorios[i].nombre}</a>
                                
                                    ${accesorios[i].fecha}
                                    ${accesorios[i].categoria}
                                </p>
                            </header>
                            <div class="card-content">
                            <a href="Camisetas/${accesorios[i].nombre.replace(/ /g, '_')}.html"><img src="${accesorios[i].imagen}" alt="Placeholder image">
                            </div>
                            <header class="card-header">
                                <p class="card-header-title -2 are-medium">
                                    ${accesorios[i].precio}
                                </p>
                            </header>  
                        </div>
                    </div>
                `
                if ((i + 1) % 5 == 0 && i > 0) {
                    tarjetasAccesorios += `
                    </div> 
                    <div class="columns">
                    `
                }
            }
            
            console.log(tarjetasAccesorios)

            divAccesorios.innerHTML = tarjetasAccesorios

        })
})
