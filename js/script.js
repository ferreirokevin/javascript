let nombre;
let nuevaContraseña;
let saldo = 0;

function crearCuenta(){
  nombre = prompt("ingrese su numbre");
  nuevaContraseña = prompt("ingrese su nueva contraseña");

}
function ingresar(){
  const usuario = prompt("ingrese su nombre/usuario");
  const contraseña = prompt("ingrese su contraseña");

  if (usuario === nombre && contraseña === nuevaContraseña){
    alert("Bienvenido");
    abrirMenu();
  } else {
    alert("contraseña incorrecta");
  }
}

function abrirMenu(){
  alert("elige un de las siguientes opciones")
  const opciones = Number(prompt("1-Ingresar dinero ; 2-Ver saldo ; 3-pedir un prestamo"));
  switch (opciones){
    case 1:
      depositar();
      break;
    case 2:
      verSaldo();
      break;
    case 3:
      prestamo();
      break;
    default:
      alert("Opcion incorrecta");
      break;
  }
}

function depositar(){
  const nuevoMontoIngresado = Number(prompt ("Ingrese el monto a depositar"));
  saldo += nuevoMontoIngresado
  alert ("Ha ingresado $" + nuevoMontoIngresado);
  abrirMenu();

  
}

function verSaldo(){
  alert("su saldo es $" + saldo)
  abrirMenu()

}

