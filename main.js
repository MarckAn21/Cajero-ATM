let cuentas = [
    { nombre: 'Mali', contraseña: '123', saldoC1: '200' },
    { nombre: 'Gera', contraseña:'132', saldoC1: '290' },
    { nombre: 'Maui', contraseña: '321', saldoC1: '67' }
  ];
  function cambiadepagina() {
    location='index2.html'
    
  }

  const formHtmlindex = document.getElementById('enterpassword')
  
  formHtmlindex.addEventListener('submit', (e) => {

    e.preventDefault();

    let passwordHtml = document.getElementById('inputPasswordHtml').value

    validarDatos(passwordHtml)

})
function validarDatos(pass) {
if (pass === cuentas[0].contraseña) {
  location = 'index3.html'
}
else if (pass == cuentas[1].contraseña) {
  location = 'index3.html'
}
else if (pass == cuentas[2].contraeña) {
  location = 'index3.html'
} 
  else if (pass == '') {
    alert('Ingresa tu contraseña')
  }
 else {
  alert('ERROR DE CONTRASEÑA')
}
}

function depositar() {
    let cantidadtotal = parseInt(document.getElementById('Ingresar').value)
    let cantidadsaldo = parseInt(document.getElementById('saldoindex').value)
    document.getElementById('saldoindex').value = cantidadsaldo + cantidadtotal

}
function retirar() {
  let cantidadtotal = parseInt(document.getElementById('Retirar').value)
  let cantidadsaldo = parseInt(document.getElementById('saldoindex').value)
  document.getElementById('saldoindex').value = cantidadsaldo - cantidadtotal
}
