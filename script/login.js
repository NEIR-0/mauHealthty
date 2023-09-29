function plus(id) {
  const field = document.getElementById(id)
  let value = field.value

  value++

  field.value = value
}

function minus(id) {
  const field = document.getElementById(id)
  let value = field.value

  if(value > 1) {
    value--
  }

  if(!value) {
    value = 1
  }

  field.value = value
}

function changeGender() {
  const gender = document.getElementById('gender')

  if(gender.value === "Male") {
    gender.value = "Female"
  } else {
    gender.value = "Male"
  }
}

function setBiodata() {
  const formName = document.getElementById(`username`)
  const formHeight = document.getElementById(`height`)
  const formWeight = document.getElementById(`weight`)
  const formAge = document.getElementById(`age`)
  const formGender = document.getElementById(`gender`)
  
  const button = document.getElementById(`confirmation`)

  const name = formName.value
  if(!name) {
    return alert("Mohon isi nama terlebih dahulu!")
  }

  const height = formHeight.value
  if(!height) {
    return alert("Mohon isi tinggi terlebih dahulu!")
  }

  const weight = formWeight.value
  if(!weight) {
    return alert("Mohon isi berat terlebih dahulu!")
  }

  const age = formAge.value
  if(!age) {
    return alert("Mohon isi umur terlebih dahulu!")
  }
  
  localStorage.setItem("name", name)
  localStorage.setItem("height", height)
  localStorage.setItem("weight", weight)
  localStorage.setItem("age", age)
  localStorage.setItem("gender", gender.value)

  button.setAttribute("href","result.html")
}