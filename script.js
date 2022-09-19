let kelimeler=["Lorem"," ipsum"," dolor"," sit"," amet"," consectetur"," adipiscing"," elit"];
let sonuc=document.getElementById("sonuc");
let normal=document.getElementById("btnNormal");
let duzgun=document.getElementById("duzgun");

sonuc.innerHTML=kelimeler.reverse();

normal.addEventListener("click", ()=>{
    duzgun.innerHTML=kelimeler.reverse();
});
