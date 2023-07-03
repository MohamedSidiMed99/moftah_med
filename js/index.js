$(document).ready(function(){

    $(".drawer-button").click(function(){
    
        let btnDrawer =  $(".drawer-button").position();
    
        if(btnDrawer.left == 0){
            $(".drawer-button").css("left","300px")
            $(".drawer-button").html("&cross;")
            $(".drawer").css("left","0px")
        }else{
            $(".drawer-button").css("left","0px")
            $(".drawer-button").html("&rArr;")
            $(".drawer").css("left","-300px")
        }
            
        
    })




    //   $(".open").click(function(){
//     let p = $(".social-media").position()

//     console.log(p.left)
//     if(p.left == 392.79998779296875){

//     }
//   })





 
});

///-----------------scrolling -----------------------
let scrollUp = document.querySelector(".scroll-up");
window.onscroll = function(){
   
    if(window.scrollY >= 600){
        scrollUp.style.display = "block"
    }else{
        scrollUp.style.display = "none"
    }
}
scrollUp.addEventListener("click",function(){
    scrollTo({
        left:0,
        top:0,
        behavior:"smooth"
    })
})

///--------------------header ------------------------------

let uls = document.querySelectorAll("ul .li-me")

// console.log(uls)

uls.forEach((e)=>{
    e.addEventListener("click",function(){
        uls.forEach((e)=>{e.classList.remove("active")})
        e.classList.add("active")
    })

})

///---------------change colors ---------------------

let changeColors = document.querySelectorAll(".change-colors .color")
let allxmenu = document.querySelectorAll(".ul-close-menu .li-close-me") 

let me = document.querySelectorAll("h1 span")

changeColors.forEach((e)=>{
    e.addEventListener("click",function(el){

        let col = el.target.dataset.color;
        document.querySelector(".header").style.backgroundColor = `${col}` 
        document.querySelector(".drawer").style.backgroundColor = `${col}`
        scrollUp.style.backgroundColor = `${col}` 
        document.querySelector(".drawer-button").style.backgroundColor = `${col}`
        allxmenu.forEach((e)=>{e.style.backgroundColor = `${col}`})
        me[0].style.color = `${col}`
        me[1].style.color = `${col}`
        document.querySelectorAll(".bar-color").forEach((e)=>{
            e.style.backgroundColor = `${col}`
            
        })
        document.querySelector(".skills-title").style.borderBottom = `${col} solid 4px`
        document.querySelector(".about-title").style.borderBottom = `${col} solid 4px`
        document.querySelector(".service-title").style.borderBottom = `${col} solid 4px`
        document.querySelector(".contact-title").style.borderBottom = `${col} solid 4px`

        document.querySelector(".btn-send").style.backgroundColor = `${col}`
        document.querySelector(".footer").style.backgroundColor = `${col}`
        document.querySelector(".social").style.backgroundColor = `${col}`
    })
})

///--------------------------window.innerWidth------------------------------
let iconMenu = document.querySelector(".icon-menu") 
let allicon = document.querySelectorAll(".icon-menu div") 
let xmenu = document.querySelector(".ul-close-menu") 

let ulMenu = document.querySelector(".ul-menu") 

console.log(window.innerWidth);
// window.onload = function(){
//     console.log("list----------")
//     if(window.innerWidth >= 630 ){
//         console.log("list")
//         ulMenu.style.display = "block"
//         iconMenu.style.display = "none"
//     }else{
//         ulMenu.style.display = "none"
//         iconMenu.style.display = "block"
//         console.log("icon")
//     }
// }
window.onresize = function(){


   
    if(window.innerWidth >= 630){
  
        ulMenu.style.display = "block"
        iconMenu.style.display = "none"
       
    }else{
     
        ulMenu.style.display = "none"
        iconMenu.style.display = "block"
    }
 } 



 iconMenu.addEventListener("click",function(){

    if(allicon[1].style.display == "none"){
        allicon[0].style.transform = 'rotate(0deg)'
        allicon[1].style.display = "block"
        allicon[2].style.transform = 'rotate(0deg)'
        xmenu.style.top = "-180px"
        allicon.forEach((e)=>{
            e.classList.remove("icon-close")
        })
    }else{
        allicon[0].style.transform = 'rotate(65deg)'
        allicon[1].style.display = "none"
        allicon[2].style.transform = 'rotate(130deg)'
        xmenu.style.top = "43px"
        allicon.forEach((e)=>{
            e.classList.add("icon-close")
        })
    }

 })


 ///----------------------- skills--------------------

  let languages = document.querySelector(".skills")

  for(let i = 0 ; i < 9 ; i++){
     languages.innerHTML += 
     `  <div class="lang">
                <h3>${
                    i==0?"HTML"
                    :i==1?"CSS"
                    :i == 2? "JS"
                    : i == 3 ? "Flutter" 
                    : i == 4? "Dart"
                    :i == 5?"C++"
                    :i == 6? "JAVA"
                    :i == 7?"PHP"
                    :"MySql"}</h3>
                <div class="bar"><div class="bar-color"></div></div>
        </div> `
  }

function barlangColor(){
    let barColor = document.querySelectorAll(".bar-color")
    barColor[0].style.width = "95%"
    barColor[1].style.width = "92%"
    barColor[2].style.width = "90%"
    barColor[3].style.width = "95%"
    barColor[4].style.width = "90%"
    barColor[5].style.width = "60%"
    barColor[6].style.width = "75%"
    barColor[7].style.width = "85%"
    barColor[8].style.width = "95%"
    
    console.log(barColor)
  }
 window.onload =  barlangColor

///--------------------send message ---------------------


let form = document.querySelector("form");
let uname = document.querySelector(".name");
let email = document.querySelector(".email");
let msg = document.querySelector(".msg");

form.onsubmit = function(e){
    e.preventDefault()

    let reg = /\w+@\w+.(com|org|net|ru)/ig;
    let n = /\w+/ig;
    // let n = /[a-zA-Z0-9]/ig;
    // console.log("mof@".match(n));
    if(email.value.match(reg) && uname.value.match(n)){
        console.log(uname.value)
        console.log(email.value)
        console.log(msg.value)

        alert("Hello "+uname.value+" your message has been sented successfully!!")
        uname.value = ""
        email.value = ""
        msg.value = ""


    }
  
}





//  regular exp 
//  let url1 = "elzero.org";
//  let url2 = "http://elzero.org";
//  let url3 = "https://elzero.org";
//  let url4 = "https://www.elzero.org";
//  let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";
// let reg = /(https?:\/\/)?(www.)?\w+.(org)(:\d{4}\/\w+.(php)\?\w+=\d{3}&\w+=\w+)?/ig;
//  console.log(url1.match(reg))
//  console.log(url2.match(reg))
//  console.log(url3.match(reg))
//  console.log(url4.match(reg))
//  console.log(url5.match(reg))
 
//  let email ="mohamedmoftah1995@gmail.com";
//  let re = /\w+@\w+.(com|org|net|ru)/ig;
//  console.log(email.match(re))