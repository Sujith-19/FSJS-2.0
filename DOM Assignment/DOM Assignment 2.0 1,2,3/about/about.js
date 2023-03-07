let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

let accordian1 = document.querySelectorAll(".accordian h3");
accordian1.forEach((element) => {
  element.style.background = "#d3deff"
})

let skill = document.querySelector(".accordian:last-child")
let div = document.createElement("div")
div.setAttribute("class", "accordian")
let h3 = document.createElement("h3")
h3.style.background = "#d3deff"
h3.append("Skills")
let p = document.createElement("p")
p.append("I posses a very good command over the Full stack webdevelopment technologies like Mern which can be seen in my work over the Github")
div.append(h3,p)
p.style.display = "block";
skill.parentNode.insertBefore(div, skill.nextSibling)