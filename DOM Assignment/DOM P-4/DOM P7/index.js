let toRemove = document.querySelectorAll(".main__languages a")
console.log(toRemove)
for(let i=1; i<toRemove.length; i=i+2){
  toRemove[i].remove()
}

let formInput = document.querySelector("form input")
formInput.removeAttribute("disabled")
formInput.value = "iNeuron"

let submitButton = document.querySelector(".main__form-btn")
submitButton.removeAttribute("disabled")
submitButton.click()