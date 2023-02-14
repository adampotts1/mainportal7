const myTown = document.querySelector('#town')
const myGraphic = document.querySelector('#graphic')
const myDescription = document.querySelector('#description')
const myTemp = document.querySelector('#temp')

//const townName = "Salt Lake City"
const myKey = "a6c9ce73aafbb03d344fa6bf16f5e4da"
const myLat = "40.76098583326302"
const myLong = "-111.89370771481825"

const myURL = '//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial'

fetch(myURL)
    .then((response) => response.json())
    .then((data) => displayData(data));

    function displayData (data) {
        console.log(data)
        myTown.innerHTML = data.name
        myGraphic.src='http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png'
        myGraphic.alt=data.weather[0].main
        myDescription.innerHTML = data.weather[0].description
        myTemp.innerHTML = '${data.main.temp}&deg;F'
    }   