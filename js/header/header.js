


<div class="header">
    <div class="nav">
        <h3 class="logo">Moftah med</h3>

    <nav>
        <ul class="ul-menu">
            <li class="li-me active"> Home</li>
            <li class="li-me" >About</li>
            <li class="li-me" >Service</li>
            <li class="li-me" >Contact</li>
        </ul>

        <div class="icon-m">
            <div class="icon-menu">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </nav>
    </div>
</div>

let header = document.querySelector(".header");
let div1 = document.createElement("div")
let logo = document.createElement("h3")

let nav = document.createElement("nav")
let ul = document.createElement("ul")
ul.className = "ul-menu";
let li = document.createElement("li")
let divIcon = document.createElement("div")
divIcon.className = "icon-m";
let divIconM = document.createElement("div")
divIconM.className = "icon-menu";


let logoText = document.createTextNode("Moftah med")
logo.className = "logo";
logo.appendChild(logoText)

for(let i = 0 ; i < 4 ; i++){
    li.className = "li-me"
   let litext = "";
    if(i == 0){
        li.className = "active"
        litext.createTextNode("Home")
        ul.appendChild(li)
    }else if(i == 1){
        litext.createTextNode("About")
        ul.appendChild(li)
    }else if(i == 2){
        litext.createTextNode("Service")
        ul.appendChild(li)
    }else if(i == 3){
        litext.createTextNode("Contact")
        ul.appendChild(li)
    }

}

for(let i = 0 ; i < 3 ; i++){
    let line = document.createElement("div")
    divIconM.appendChild(line)
}
divIcon.appendChild(divIconM)

nav.appendChild(ul)
nav.appendChild(divIcon)
div1.appendChild(nav)

document.body.appendChild(div1)


