function sumar (num1, num2) {
  return num1 + num2;
}

function restar (num1, num2) {
  return num1 - num2;
}

function producto (num1, num2) {
  return num1 * num2;
}

function calular (a, b, fun_callback) {
  return fun_callback(a,b)
}



console.log(calular(10, 3, sumar));

console.log(calular(10, 3, restar));

console.log(calular(10,3,producto));


//^ Ejemplo 2 SET TIMEOUT

setTimeout(function () {
  console.log('Hola');
  
}, 4000
)


function saludo (name ) {
  // body
  console.log(`Hola ${name}`);
}
  
setTimeout(saludo, 2000, 'rafael');