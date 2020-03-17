function siguiente(x) {
  console.log(`Ejecutando siguiente de ${x}`)
  return Promise.resolve(x + 1)
}

function doble(x) {
  console.log(`Ejecutando doble de ${x}`)
  return Promise.resolve(x * 2);
}

function triple(x) {
  return x * 3
}

siguiente(2)
  .then(resultado => {
    const resultado2 = doble(resultado).then();
    console.log('sigo...')
    return resultado2;
  })
  .then(doble)
  .then(triple)
  .then(doble)
  .then(resultado => {
    console.log(`Todo bien, el resultado es ${resultado}`)
  })
  .catch(error => {
    console.log(error)
  })
