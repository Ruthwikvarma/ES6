let reasonsForLate=["traffic","food","sleep"]

//1.forEach
reasonsForLate.forEach((element,index,array)=>{
    console.log(element.length);

})

//2.map
reasonsForLate.forEach((element,index,array)=>{
    console.log(element.length);

})

//forEach vs map

let forEachOutput = reasonsForLate.forEach((ele) => {
    return ele + "~"; 
});

console.log(forEachOutput);//undefined

let mapOutput = reasonsForLate.map((ele) => {
    return ele + "~"; 
});

console.log(mapOutput);//gives output

//3.filter

let numbers=[60,90,120]
let filteredOutput=numbers.filter((num)=>{
    return num>75
})
console.log(filteredOutput);

//4.find
let naturalnumbers=[40,60,300]
let findOutput=naturalnumbers.find((naturalnum)=>{
    return naturalnum<50
})
console.log(findOutput);

//5.reduce
let realNumbers=[10,20,30,40,50]
let reduceOutput=realNumbers.reduce((accumulator,element,index,array)=>{
    return accumulator+=element

},0)
console.log(reduceOutput);






