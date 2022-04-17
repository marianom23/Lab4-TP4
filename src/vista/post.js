let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let dni = document.getElementById('dni');
let sector = document.getElementById('sector');
let fecha = document.getElementById('fecha');
let activo = document.getElementById('activo');

const addEmployee = async () => {
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    active = document.getElementById('activo').checked
    console.log("Active:", active)

    const url = `http://localhost:3000/empleados`;
    let postEmployee = {
        apellido: document.getElementById('apellido').value,
        nombre: document.getElementById('nombre').value,
        dni: document.getElementById('dni').value,
        sector: document.getElementById('sector').value,
        fecha: document.getElementById('fecha').value,
        activo: document.getElementById('activo').value
    }

    console.log("Employee form:",postEmployee)

    fetch(url, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json",
        },
        body: JSON.stringify(postEmployee)
    })
    .then((response) => {
        alert(response)
        response.json()})
    .then((data) => {
        if (!data){
            alert(data.message)
        }else {
            alert(data.message)
        }
        })
        .catch(err => console.log(err));
}
