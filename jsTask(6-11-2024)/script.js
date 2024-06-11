const url="https://66681676f53957909ff67af8.mockapi.io/users/Animals";
let ad = document.getElementById("animals");
let img = document.getElementById("img1");
async function load(){
    const  res=await fetch(url);
    const jonres=await res.json();
    for(let i=0;i<jonres.length;i++){
        const newop=document.createElement('option');
        newop.innerHTML=jonres[i].name;
        newop.value=jonres[i].image
        ad.appendChild(newop);
    }
    img.src = ad.value;
}
ad.addEventListener("change", function() {
    img.src = ad.value;
     });
load();
document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const ckBx = [];
    const check = document.querySelectorAll('input[type="checkbox"]');
    check.forEach(function(x) {
        if (x.checked) {
            ckBx.push(x.value);
        }
    });

    const data1 = {
        name: document.getElementById('Name').value,
        Age: document.getElementById('Age').value,
        Gender: document.getElementById('Gender').value,
        Barth: document.getElementById('Birth').value,
        image: document.getElementById('Image').value
    };

    const data2 = {
        description: document.getElementById('des').value, 
        Majo: document.getElementById('major').value, 
        programmingLanguage: ckBx
    };

    const data3 = {
        SiblingsNUmber: document.getElementById('sibNum').value, 
        Siblingsdesc: document.getElementById('sibDesc').value 
    };

    localStorage.setItem('card1', JSON.stringify(data1));
    localStorage.setItem('card2', JSON.stringify(data2));
    localStorage.setItem('card3', JSON.stringify(data3));

    creation(data1,"card1");
    creation(data2,"card2");
    creation(data3,"card3");
    
});
function creation(ob,cardid) {
    const container = document.getElementById(cardid); 
    const p = document.createElement('p');
    for (let key in ob) {
        const line = document.createElement('p');
        line.innerHTML = ob[key];
        p.appendChild(line);
    }
    container.appendChild(p);
}
const Fname = document.getElementById("inp1");
const Lname = document.getElementById("inp2");
const Bdate = document.getElementById("inp3");
const email = document.getElementById("inp4");
const emailConf = document.getElementById("inp5");
const pass = document.getElementById("inp6");
const passConf = document.getElementById("inp7");
const namePat = /^[a-zA-Z]+/;
const datePat = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/\d{4}$/;
const EmailPat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passPat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const sp1 = document.getElementById("sp1");
const sp2 = document.getElementById("sp2");
const sp3 = document.getElementById("sp3");
const sp4 = document.getElementById("sp4");
const sp5 = document.getElementById("sp5");
const sp6 = document.getElementById("sp6");
const sp7 = document.getElementById("sp7");

Fname.addEventListener('input', function () {
    const inp_V = Fname.value.trim();
    if (!namePat.test(inp_V)) {
        sp1.innerHTML = "Numbers and Symbols are not allowed";
        sp1.style.color = "red";
    } else {
        sp1.innerHTML = "";
    }
});

Lname.addEventListener('input', function () {
    const inp_V = Lname.value.trim();
    if (!namePat.test(inp_V)) {
        sp2.innerHTML = "Numbers and Symbols are not allowed";
        sp2.style.color = "red";
    } else {
        sp2.innerHTML = "";
    }
});

Bdate.addEventListener('input', function () {
    if (!datePat.test(Bdate.value)) {
        sp3.innerHTML = "The format should be DD/MM/YY";
        sp3.style.color = "red";
    } else {
        sp3.innerHTML = "";
    }
});

email.addEventListener('input', function () {
    if (!EmailPat.test(email.value)) {
        sp4.innerHTML = "The e-mail is not valid";
        sp4.style.color = "red";
    } else {
        sp4.innerHTML = "";
    }
});

emailConf.addEventListener('input', function () {
    if (email.value !== emailConf.value) {
        sp5.innerHTML = "The e-mail not matching";
        sp5.style.color = "red";
    } else {
        sp5.innerHTML = "";
    }
});

pass.addEventListener('input', function () {
    if (!passPat.test(pass.value)) {
        sp6.innerHTML = "The passwords not valid";
        sp6.style.color = "red";
    } else {
        sp6.innerHTML = "";
    }
});

passConf.addEventListener('input', function () {
    if (pass.value !== passConf.value) {
        sp7.innerHTML = "The passwords not matching";
        sp7.style.color = "red";
    } else {
        sp7.innerHTML = "";
    }
});

