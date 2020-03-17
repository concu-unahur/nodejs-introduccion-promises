const { promises } = require('fs');

promises.readFile('./assets/gatitosssss.txt', 'utf8')
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.log('No funcionó, fijate si el archivo existe')
    console.log(error)
  })
