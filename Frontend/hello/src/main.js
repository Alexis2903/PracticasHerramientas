let message = document.querySelector('#message')
let pingButton = document.querySelector('#pingButton')

pingButton.addEventListener('click', getPingFromWebService)

function getPingFromWebService(){
  const url = 'http://localhost:3000/ping'
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      message.innerHTML = data.respuesta; 
    })
    .catch(function(error){
      console.log(error)
      message.innerHTML = "No se encontró el servidor"
    })
}
