const larger=(a,b)=>{
    (a>b)?console.log(a):console.log(b);
}
larger(1,2);
const sign1=(a)=>{
    let strr="";
    for (let i=0;i<=a.length;i++){
        (a[i]<0)?strr+="-":strr+="+";
    }
    window.alert(strr);
}
sign1([3, -7, 2])
const sort1=(a)=>{
    for (let i=0;i<a.length;i++){
        for (let j=0;j<a.length;j++){
           if (a[j]>a[j+1]){
            const temp=a[j];
            a[j]=a[j+1];
            a[j+1]=temp;
           }
        }
    }
    console.log(a)
}
sort1([0, -1, 4 ])
const largOFFive=(a)=>{
    let large1=a[0];
    for (let i=0;i<a.length;i++){
        if(a[i]>large1){
            large1=a[i];
        }
    }
    console.log(large1);
}
largOFFive([ -5, -2, -6, 0, -1 ]);
const diply=(x,y)=>{
    (x>y)?document.write("Hello World"):window.alert("Goodbye");
}
const rate=(x)=>{
    if(x<50){
        return 'fail'
    }else if(x>50&&x<=59){
        return 'E'
    }else if(x>60&&x<=69){
        return 'D'
    }else if(x>70&&x<=79){
        return 'C'
    }else if(x>80&&x<=89){
        return 'B'
    }else if(x>90&&x<=100){
        return 'A'
    }
}
console.log(rate(83))
const print2=(x)=>{
    for (let i=1;i<=x;i++){
        console.log(i);
    }
}
print2(10);
const isEven=(a)=>{
    const arr=[];
    for (let i=0;i<a.length;i++){
        if(a[i]%2==0){
            arr.push(a[i]);
        }
    }
    console.log(arr);
}
isEven([13,23,12,45,22,48,66,100]);
const per=(r)=>{
    for (let i = 1; i <= r; i++) {
        let n = '';
        for (let j = 1; j <= i; j++) {
            n += j + ' ';
        }
        console.log(n);
    }
}
per(9);
const isThereY=(a)=>{
    if(a.search("y")>0){
       console.log( "yes")
    }else{
        console.log("no")
    }

}
isThereY(" don’t know why")
