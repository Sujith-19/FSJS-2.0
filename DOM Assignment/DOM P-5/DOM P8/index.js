let aSide = document.querySelector("aside")
aSide.style.overflowY = "scroll"
let hrLine = document.createElement('hr')
hrLine.setAttribute("class", "hr-line")
let newH2 = document.createElement('h2')
newH2.setAttribute("class", "new-head")
newH2.textContent = "This is my custom Heading"
let newP2 = document.createElement('p')
newP2.setAttribute("class", "new-p")
newP2.textContent = "Scroll down description"
aSide.append(hrLine,newH2,newP2)


let body = document.querySelector("body")
body.style.backgroundImage = "none"

let hamburger = document.querySelector(".navbar-toggler")
hamburger.removeAttribute("data-toggle")
