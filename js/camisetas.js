document.addEventListener('DOMContentLoaded', () => {

    const url = 'http://localhost:3000/camisetas'

    axios.get(url)
        .then(respuesta => {
            camisetas = respuesta.data
            console.log(respuesta)
            let divCamisetas = document.getElementById('camisetas')
            let tarjetasCamisetas = '<div class="columns">'

            for (let i = 0; i < camisetas.length; i++) {
                tarjetasCamisetas += `
                    <div class="column is-one-fifth">
                        <div class="card">
                            <header class="card-header">
                                <p class="card-header-title">
                                <a href="Camisetas/${camisetas[i].nombre.replace(/ /g, '_')}.html">${camisetas[i].nombre}</a>
                                
                                    ${camisetas[i].fecha}
                                    ${camisetas[i].categoria}
                                </p>
                            </header>
                            <div class="card-content">
                            
                                <img src="${camisetas[i].imagen}" alt="Placeholder image">
                            </div>
                            <header class="card-header">
                                <p class="card-header-title -2 are-medium">
                                    ${camisetas[i].precio}
                                </p>
                            </header>  
                        </div>
                    </div>
                `
                if ((i + 1) % 5 == 0 && i > 0) {
                    tarjetasCamisetas += `
                    </div> 
                    <div class="columns">
                    `
                }
            }
            
            console.log(tarjetasCamisetas)

            divCamisetas.innerHTML = tarjetasCamisetas

        })
})
