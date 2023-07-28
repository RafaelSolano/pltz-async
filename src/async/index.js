const fnAsync = () =>{
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Async'), 2000)
      : reject(new Error('Error'));
  });
}


const fnother = async () => {
  const some = await fnAsync();
  console.log(some);
  console.log('Hello');
}

console.log("Antes");
fnother();
console.log('Despues');