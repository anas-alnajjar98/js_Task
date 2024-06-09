document.getElementById("first1").addEventListener("mouseover",f1);
document.getElementById("first").addEventListener("mouseout",f2);
function f1(){
    document.getElementById("first1").innerHTML="Can i help you!";
}
function f2(){
    document.getElementById("first1").innerHTML="Hello World !";
}
let ad = document.getElementById("flags");
let img = document.getElementById("img1");

ad.addEventListener("change", function() {
img.src = ad.value;
 });
let fonts1S = document.getElementById("fonts");
let p = document.getElementById("para1");

fonts1S.addEventListener("change", function() {
p.style.fontFamily = fonts1S.value;
 });
let s = document.getElementById("size");
size.addEventListener("change", function() {
p.style.fontSize = size.value;
 });
 let s1=document.getElementById('s1');
 let s2=document.getElementById('s2');
 let s3=document.getElementById('s3');
 s1.addEventListener("change",function s11(){
    if(this.checked){
        p.style.fontStyle=s1.value;
    }else{
        p.style.fontStyle="normal";
    }
 });
 s2.addEventListener("change",function s12(){
    if(this.checked){
        p.style.fontWeight=s2.value;
    }else{
        p.style.fontWeight="normal";
    }
 });
 s3.addEventListener("change",function s13(){
    if(this.checked){
        p.style.textDecoration=s3.value;
    }else{
        p.style.textDecoration="none";
    }
 });
let s4=document.getElementById("div_cont");
 s4.style.width="200px";
 s4.style.height="200px";
 s4.style.backgroundColor="#0000ff";
 s4.addEventListener('click',function s14(){
    s4.style.backgroundColor="#ff0000";

 });
 let pss=document.getElementById('pass1');
 let pss2=document.getElementById('pass2');
 let spss=document.getElementById('sp1');
 let spss1=document.getElementById('sp2');
 pss.addEventListener('change',function(){
    if (pss.value.length<=6){
        spss.innerHTML="Too short";
        spss.style.color="#f00"

    }

 })
 pss2.addEventListener('change',function(){
    if (pss.value!=pss2.value){
        spss1.innerHTML="The two password dont match";
        spss1.style.color="#f00"

    }else{
        document.getElementById('sub').style.display='block'

    }

 })
 let btn=document.getElementById('song-btn');
 let inp=document.getElementById('input-song');
 btn.addEventListener('click', function(){
    const newp=document.createElement('p');
    newp.innerHTML=inp.value;
    newp.classList.add("p-cls");
    document.getElementById('song_cont').appendChild(newp);
 });

 
