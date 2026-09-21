let form = document.querySelector("form")
let allinps = document.querySelectorAll("input")
let main = document.querySelector(".main")

form.addEventListener("submit", function(dets){
    dets.preventDefault();
    console.log(dets)
    let card = document.createElement("div")
    card.classList.add("card")
    
    let profile = document.createElement("div")
    profile.classList.add("Profile", "card-ele")
    
    let img = document.createElement("img")
    img.classList.add("p-pic")
    img.setAttribute("alt", "Profile Pic")
    img.setAttribute("src", allinps[0].value)
    
    let Name = document.createElement("h2")
    Name.classList.add("name", "card-ele")
    Name.textContent.allinps[1].value
    
    let age = document.createElement("h5")
    age.classList.add("age", "card-ele")
    age.textContent.allinps[2].value
    
    let p1 = document.createElement("p")
    p1.classList.add("p1", "card-ele")
    p1.textContent.allinps[3].value
    
    let p2 = document.createElement("p")
    p2.classList.add("p2", "card-ele")
    p2.textContent.allinps[4].value
    
    profile.appendChild(img)
    card.appendChild(profile)
    card.appendChild(Name)
    card.appendChild(age)
    card.appendChild(p1)
    card.appendChild(p2)
    console.log(card)
    main.appendChild(card)
})
console.log(allinps)
