let table = document.querySelector('data');
let id = document.getElementById('idEmployee');


const getEmployeeByID =  async() => {
    const url = `http://localhost:3000/empleados/${id.value}`;
    fetch(url, {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json",
        },
    })
    .then((response) => response.json())
    .then((data) => {
            showEmployees(data);
        })
        .catch(err => console.log(err));
}

const readEmployees =  async() => {
    console.log('readEmployees FDSAFSDAFSADFSDAFSD');
    const url = "http://localhost:3000/empleados";
    fetch(url, {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json",
        },
    })
    .then((response) => response.json())
    .then((data) => {
            showEmployees(data);
        })
        .catch(err => console.log(err));
}

const showEmployees = async (data) => {
    console.log('showEmployees FDSAFSDAFSADFSDAFSD')
    console.log("Data:",data)
    let body = ''
    let backGroundColor = ''
    data.forEach(employee => {
        body += `<tr><td>${employee.legajo}</td>  
             <td>${employee.apellido}</td>
             <td>${employee.nombre}</td>
             <td>${employee.dni}</td>
             <td>${employee.sector}</td>
             <td>${employee.fecha}</td>
             <td>${employee.activo}</td>
             <td onclick="deleteEmployee(${employee.legajo});"><input type="button" id="deleteEmployee" value="Eliminar"></td>
             <td onclick="viewUpdateEmployees(${employee.legajo});"><input type="button" id="viewUpdateEmployee" value="Actualizar"></td>
             </tr>`
    });
    if (body == '') {
        alert('No se encontraron coincidencias')
        body = "No se encontraron coincidencias"
        document.getElementById('data').innerHTML = body
    } else {
        document.getElementById('data').innerHTML = body
    }
}

const deleteEmployee = async (legajo) => {
    const url = `http://localhost:3000/empleados/${legajo}`;
    fetch(url, {
        method: "DELETE",
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json",
        },
    }).then((data) => {
        if (data.ok) {
            alert('Elemento borrado correctamente')
            readEmployees();
        } else {
            alert('No se ha podido eliminar')
        }
    })
}

function viewUpdateEmployees(legajo) {
        document.location.href = `/src/vista/update.html`
}

const updateEmployee = async () => {
    const url = `http://localhost:3000/empleados/`;

    let updateEmployee = {
        apellido: document.getElementById('apellido').value,
        nombre: document.getElementById('nombre').value,
        dni: document.getElementById('dni').value,
        sector: document.getElementById('sector').value,
        fecha: document.getElementById('fecha').value,
        activo: document.getElementById('activo').value,
        legajo: document.getElementById('legajo').value,
    }
    await fetch(url, {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updateEmployee)
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



