// Un Promise está en uno de estos estados:

// pending (pendiente): estado inicial, ni cumplido ni rechazado.
// fulfilled (cumplida): lo que significa que la operación se completó con éxito.
// rejected (rechazada): lo que significa que la operación falló.

const promise = new Promise(function (resolve, rejected) {
  resolve('hola')
  
});

const vacas = 9;

const countCows = new Promise(function (resolve, rejected) {
  if (vacas > 10) {
    resolve(`tenemos Vacas suficientes tenemos: ${vacas} vacas em la granja`)
  } else {
     rejected("No tenemos suficientes vacas")
  }
});

countCows.then((result) => {
  console.log(result);
}).catch((error) => {
  console.error(error);
})