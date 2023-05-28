const close = document.querySelector("#close"),
menu = document.querySelector("#menu");
close.addEventListener("click", (e) => {

menu.classList.toggle("active");
document.body.classList.toggle("opacity");});


// Slider imagenes

let slideBtnLeft = document.getElementById("slider-btn-left")
let slideBtnRight= document.getElementById("slider-btn-right")
let imgItem = document.querySelectorAll(".imagen-item")

console.log(imgItem.length-1)

let startSlider = 0
let endSlider = (imgItem.length - 1) * 100 // 700

slideBtnLeft.addEventListener("click",()=>{
  if(startSlider < 0){
    startSlider = startSlider + 100
  }
  imgItem.forEach(element =>{
    element.style.transform = `translateX(${startSlider}%)`;
  })
})

slideBtnRight.addEventListener("click",()=>{
  if(startSlider >= -endSlider+100){
    startSlider = startSlider - 100;
  }
  imgItem.forEach(element =>{
    element.style.transform = `translateX(${startSlider}%)`;
  })

})

let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e)=>{
    let arrowParent = e.target.parentElement.parentElement;
    console.log(arrowParent);
    arrowParent.classList.toggle("showMenu");
    });    
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("close");
});

 /* formulario de contacto  */

// document.getElementById("loginForm").addEventListener("submit", function(event) {
//   event.preventDefault(); // Evita el envío del formulario por defecto
//   var username = document.getElementById("username").value;
//   var password = document.getElementById("password").value;
  
//   // Aquí puedes agregar la lógica de verificación del usuario y contraseña
//   // Por ejemplo, puedes hacer una solicitud a un servidor para autenticar al usuario
  
//   if (username === "admin" && password === "admin") {
//     alert("Ingreso exitoso");
//     // Aquí puedes redirigir a otra página o realizar alguna acción adicional
//   } else {
//     alert("Usuario o contraseña incorrectos");
//   }
// });

//  formulario de contacto 






// API

// 