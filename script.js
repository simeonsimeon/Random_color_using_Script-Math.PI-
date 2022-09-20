let div=document.createElement("div");
div.className+="bg";
document.body.appendChild(div);
let btn=document.createElement("button");
btn.innerHTML="Click To Change"
document.body.appendChild(btn);
btn.className+="bt"
console.log(btn);

function random(){
    let ran=Math.ceil(Math.random()*16774555).toString();
    div.style.backgroundColor="#"+ran;
}
btn.addEventListener("click",function(){
    random();
})

