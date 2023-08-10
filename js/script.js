let nombre;
let nuevaContraseña;
let saldo = 0;

function crearCuenta() {
  nombre = prompt("Ingrese su nombre");
  nuevaContraseña = prompt("Ingrese su nueva contraseña");
}

function ingresar() {
  const usuario = prompt("Ingrese su nombre");
  const contraseña = prompt("Ingrese su contraseña");

  if (usuario === nombre && contraseña === nuevaContraseña) {
    alert("Bienvenido " + usuario);
    abrirMenu();
  } else {
    alert("Contraseña incorrecta, vuelve a intentarlo");
  }
}

function abrirMenu() {
  let continuar = true;

  while (continuar) {
    alert("Por favor, elige una de las siguientes opciones");
    const opciones = Number(
      prompt("1-Ingresar dinero ; 2-Ver saldo ; 3-Pedir un préstamo")
    );

    switch (opciones) {
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
        alert("Opción incorrecta, vuelve a intentarlo");
        break;
    }

    continuar = confirm("¿Desea realizar otra operación?");
  }
}

function depositar() {
  const nuevoMontoIngresado = prompt("Ingrese el monto que desea depositar");
  const montoNumerico = parseFloat(nuevoMontoIngresado);
  
  if (!isNaN(montoNumerico)) {
    saldo += montoNumerico;
    alert("Ha ingresado $" + montoNumerico.toFixed(2));
  } else {
    alert("Por favor, debe ingresar un monto numérico válido");
  }
  abrirMenu();
}

function verSaldo() {
  alert("Su saldo es $" + saldo.toFixed(2));
  abrirMenu();
}

function prestamo() {
  const interesPorcentaje = (155/mes);
  const tasaMensual = 1 + interesPorcentaje / 100;
  let montoPrestamo = Number(prompt("¿Cuánto quiere pedir prestado?"));
  let mes = Number(prompt("¿En cuántos meses desea hacer la devolución?"));
  let montoTotal = 0;

  alert("Su préstamo tendrá un interés mensual del " + interesPorcentaje + "% actualizado cada mes al nuevo monto");

  for (let i = 0; i < mes; i++) {
    let cuotaMensual = montoPrestamo / mes;
    cuotaMensual *= tasaMensual;
    montoTotal += cuotaMensual;
  }

  saldo += montoPrestamo;

  alert("El monto total a devolver es de $" + montoTotal.toFixed(2));

  for (let i = 0; i < mes; i++) {
    let cuotaMensual = montoPrestamo / mes;
    cuotaMensual *= tasaMensual;
    alert("Su cuota n°" + (i + 1) + " es de $" + cuotaMensual.toFixed(2));
  }

  verSaldo();
  abrirMenu();
}