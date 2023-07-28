const API = "https://api.escuelajs.co/api/v1"

async function fetchData(urlApi) {
  const response = await fetch(urlApi); //Va por los datos
  const data = await response.json(); // Los combierte en tipo Json
  return data;
}

//SEgunda forma de Usar Async
const anotherFunction = async (urlApi) => {
  
  //Solicitudes
  try {
    const products = await fetchData(`${urlApi}/products`);
    const product = await fetchData(`${urlApi}/products/${products[0].id}`)
    const category = await fetchData(`${urlApi}/categories/${product.category.id}`)

    console.log(products);
    console.log(product.title);
    console.log(category.name);
  } catch(error) {
    console.log(error);
    
  }
  
}

anotherFunction(API);