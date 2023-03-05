
let button=document.createElement("a");
button.innerHTML="Pro Subscription";
button.setAttribute("class","btn");
button.setAttribute("href","");
let navdiv=document.querySelector(".nav-center div:last-child");
navdiv.appendChild(button);

let tagContainer=document.querySelector(".tags-container div")
let chinese=document.createElement("a")
chinese.setAttribute("href","#")
chinese.textContent="Chinese(7)"
tagContainer.appendChild(chinese)

let recipeText = document.querySelectorAll(".recipe-text")
recipeText.forEach((text) => {
    text.style.color = "blueviolet"
})

let recipeGallery=document.querySelector(".recipe-gallery")
let card=document.createElement("div")
card.setAttribute("class","card")
let heading=document.createElement("h5")
heading.setAttribute("class","recipe-name")
heading.textContent="Add 6th card here"
card.append(heading)
recipeGallery.append(card)



