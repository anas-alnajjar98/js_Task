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

 