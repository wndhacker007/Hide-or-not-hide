const input = document.querySelector('input')
const img = document.querySelector('img')
// img.addEventListener('click', () =>{
//     if (input.type === "password") {
//         input.type = "text"
//     }

//     else{
//         input.type = "password"
//         img = "./images/eye-close-4-48.png"

//     }
// })
// img.addEventListener("click", () => {
//     input.type = input.type === "password" ? "text" : "password";
//     img.src = "./images/eye-22-48.png" ? "./images/eye-close-4-48.png" : "./images/eye-22-48.png";
// });

img.addEventListener("click", () => {
    input.type = input.type === "password" ? "text" : "password";
    img.src = input.type === "password" ? "./images/eye-close-4-48.png" : "./images/eye-22-48.png";
});







