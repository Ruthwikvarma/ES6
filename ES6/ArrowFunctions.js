//arrow function
let arrow=()=>{
    console.log("hiiiiiiiiiiiiiiiii");
}

arrow()
//1.explicit return arrow function
let explicit=(a,b)=>{
    return a*b;
}
console.log(explicit(2,3));
//2.implicit return arrow function
let implicit=(a,b)=>
    a*b;
console.log(implicit(2,3));

//behavior of this in arrow function
//1.single parameter
let singleParam=msg=>msg
console.log(singleParam("hello"));

//no parameter
let noParam=()=>"bye"
console.log(noParam());
