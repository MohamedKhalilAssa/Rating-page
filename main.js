// styling

let ratings= document.querySelectorAll(".ratings");
for (let i = 0;i < ratings.length;i++){
    ratings[i].setAttribute("num",`${i+1}`);
}
let rate;
console.log("testt")
ratings.forEach((ele)=> {
    let width =getComputedStyle(ele);
    ele.style.height = `${width.width}`;
    ele.addEventListener("click",function(){
        rate = ele.getAttribute("num");

        ratings.forEach((ele)=> ele.classList.remove("active"));
        for(let i = 0; ratings[i-1] != ele; i++)
        {
            ratings[i].classList.toggle("active");
        }
    });
})


//form to thanks message

let form = document.querySelector("#form");
let container1=document.querySelector(".container");
let span=document.querySelector("#changeable");
form.onsubmit=(e) => {
    e.preventDefault();
    container1.style.display='none';
    span.textContent = `${rate}`;
}