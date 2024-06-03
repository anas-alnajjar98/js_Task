let x = 250;
let zakat = x*0.025;
console.log(zakat);
const Array0 =[ 1,7,9,45, ];
console.log(Array0)
const Array1= ["Str", "alex","moh",'the','fox', 'over', 'lazy', 'dog', ];
console.log(Array1);
var fruits=["Tomato","Banana","Watermelon"];
console.log(fruits.indexOf("Banana"));
console.log(fruits.indexOf("Tomato"));
const Favorite_Food=["food1","food2"];
const Favorite_Sport=["sport1","sport2","sport3"];
const Favorite_Movie=["movie1","movie2"];
const arr=[4,5,6,7];
console.log(arr[0]);
const arr1=["t","u","g","x"];
console.log(arr1[-1]);
var array2 = [0,5,7,9];
array2.pop();
array2.pop();
for (let i=6;i<=10;i++){
    if (i==7){
        continue
    }
    array2.push(i)
}
 array2.shift();
 for(let j=4;j>=1;j--){
    array2.unshift(j);
 }
console.log(array2);
const array3=[5,9,-7,3.5];
console.log(`push method add value to the end of the array`);
console.log(array3.push(3))//return the number of element after the push op
console.log(array3)// print the array  on  the console 
console.log(`pop method delete the last element from array`);
console.log(array3.pop());//return the deleted element(3) 
console.log(array3);// print the array  on  the console 
console.log(`unshift method add value to the start of the array`);
console.log(array3.unshift(3))//return the number of element after the unshift op
console.log(array3);// print the array  on  the console
console.log(`shift method delete the first element from array`);
console.log(array3.shift(3))//return the number of element after the shift op
console.log(array3);// print the array  on  the console
const rr = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
const sort1=rr=>{
    for(let i=0;i<rr.length;i++){
        for(let z=0;z<rr.length;z++){
            if(rr[z]>rr[z+1]){
                const temp=rr[z];
                rr[z]=rr[z+1];
                rr[z+1]=temp;
            }

        }
    }
    return rr
};
console.log(rr);
sort1(rr);
console.log(rr);