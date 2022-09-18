document.addEventListener('DOMContentLoaded', () => {

    const url = 'http://localhost:3000/mochilas'

    axios.get(url)
        .then(respuesta => {
            mochilas = respuesta.data
            console.log(respuesta)
            let divMochilas = document.getElementById('mochilas')
            let tarjetasMochilas = '<div class="columns">'

            for (let i = 0; i < mochilas.length; i++) {
                tarjetasMochilas += `
                    <div class="column is-one-fifth">
                        <div class="card">
                            <header class="card-header">
                                <p class="card-header-title">
                                <a href="Mochilas/${mochilas[i].nombre.replace(/ /g, '_')}.html">${mochilas[i].nombre}</a>
                                
                                    ${mochilas[i].fecha}
                                    ${mochilas[i].marca}
                                </p>
                            </header>
                            <div class="card-content">
                            <a href="Mochilas/${mochilas[i].nombre.replace(/ /g, '_')}.html"><img src="${mochilas[i].imagen}" alt="Placeholder image">
                            </div>
                            <header class="card-header">
                                <p class="card-header-title -2 are-medium">
                                    ${mochilas[i].precio}
                                </p>
                            </header>  
                        </div>
                    </div>
                `
                if ((i + 1) % 5 == 0 && i > 0) {
                    tarjetasMochilas += `
                    </div> 
                    <div class="columns">
                    `
                }
            }
            
            console.log(tarjetasMochilas)

            divMochilas.innerHTML = tarjetasMochilas

        })
})
