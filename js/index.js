document.addEventListener('DOMContentLoaded', () => {

    const url = 'http://localhost:3000/camisetas'

    axios.get(url)
        .then(response => {

            console.log(response)
            camisetas = response.Datos
            let divCamisetas = document.getElementById('Sport App')
            let tarjetasCamisetas = '<div class="columns">'

            for (let i = 0; i < camisetas.length; i++) {
                tarjetasCamisetas += `
                    <div class="column is-one-fifth">
                        <div class="card">
                            <header class="card-header">
                                <p class="card-header-title">
                                    ${i + 1}. ${camisetas[i].name}
                                </p>
                            </header>
                            <div class="card-content">
                                <div class="box" style="background-color:${camisetas[i].hex}">
                                </div>
                            </div>
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
            tarjetasCamisetas += '</div>'
            console.log(tarjetasCamisetas)

            divCamisetas.innerHTML = tarjetasCamisetas

        })
})
