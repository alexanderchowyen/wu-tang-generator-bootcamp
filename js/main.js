 console.log('Wutang clan aint nothin to node with')
 const button = document.querySelector("button")
 const firstName = document.querySelector('[name ="firstName"]')
 const firstNameArray = ["mike", "john", "luke", ]
 const secNameArray = ["just", "in", "time","link" ]
 const h1 = document.querySelector ("h1")
 button.addEventListener('click', getNames)
 function getNames(){
  let name = firstName.value
  let date = document.querySelector('[name ="date"]').value
  const animals = document.querySelector('[name ="animals"]').value
  const cars= document.querySelector('[name ="cars"]').value
  const colors = document.querySelector('[name ="colors"]').value
  console.log(name,date,cars,animals,colors);
  fetch(`/api?name=${name}&date=${date}&cars=${cars}&animals=${animals}&colors=${colors}`)
  .then(response => response.json())
  .then((data) => { 
     h1.innerHTML = data.wutangName
    console.log("server response", data.wutangName);
  });


}
//http://localhost:8000/api?name=john&date=04281999&cars=audi&animals=dog&colors=red