const navbarPosition = document.getElementById('navbar-position')
const navbar = document.getElementById('navbar')

const cardDayTime = document.getElementById('card-daytime')
const cardName = document.getElementById('card-name')
const formName = document.getElementById('form-name')
const formAge = document.getElementById('form-age')
const formGender = document.getElementById('form-gender')
const formWeight = document.getElementById('form-weight')
const formHeight = document.getElementById('form-height')

const calculator = document.getElementById('calculator')

const name = localStorage.getItem('name')
const nickname = name.split(" ")[0]
const age = localStorage.getItem('age')
const gender = localStorage.getItem('gender')
const weight = localStorage.getItem('weight')
const height = localStorage.getItem('height')

cardName.innerText = name
formName.innerText = nickname
formAge.innerText = age
formGender.innerText = gender
formWeight.innerText = weight
formHeight.innerText = height

window.onscroll = () => {
  if(window.scrollY > 600) {
    navbarPosition.classList.add('center')
    navbar.classList.add('change-background')
  } else if(window.scrollY > 0) {
    navbarPosition.classList.remove('center')
    navbar.classList.remove('change-background')
  } else {
    calculator.setAttribute('style','display:none')
  }
}

setInterval(function () {
  const date = new Date()
  const hours = date.getHours()

  if(hours >= 18) {
    cardDayTime.innerText = "Selamat Malam,"
  } else if(hours >= 15) {
    cardDayTime.innerText = "Selamat Sore,"
  } else if(hours >= 12) {
    cardDayTime.innerText = "Selamat Siang,"
  } else if(hours >= 6) {
    cardDayTime.innerText = "Selamat Pagi,"
  } else {
    cardDayTime.innerText = "Selamat Malam,"
  }
}, 1000)

function scrollCalculator() {
  const dataBerat = localStorage.getItem("weight");
  const dataTinggi = localStorage.getItem("height");
  const dataUmur = localStorage.getItem("age");
  const dataGender = localStorage.getItem("gender");

  const sisa = document.getElementById(`sisaKal`)

  let dataKalori = 0

  if(dataGender === "Male") {
    dataKalori = 66.5 + (13.7 * dataBerat) + (5 * dataTinggi) - (6.8 * dataUmur)
  } else {
    dataKalori = 65.5 + (9.6 * dataBerat) + (1.8 * dataTinggi) - (4.7 * dataUmur)
  }

  const kalori = dataKalori.toFixed(2)
  sisa.innerText = kalori

  calculator.setAttribute('style','display:block')
}