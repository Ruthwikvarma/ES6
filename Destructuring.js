let luguagge=["clothes","jug","books"]
let [a,b,c]=luguagge
console.log(a);
console.log(b);
console.log(c);

//skipping elements using(,)

let items=["pad","bat","wickets"]
let [,p,]=items
console.log(p);

//objects

let obj={
    trainer:"ruthwik",
    age:23,
    isMarried:true
}

//extracting all properties

let {trainer,age,isMarried}=obj
console.log(trainer);
console.log(age);
console.log(isMarried);

//renaming properties 

let {trainer:proffesor}=obj
console.log(proffesor);

//nested object
let loc={
    adress1:{
        area:"hyd",
        place:{
            pg:"rrr",
            pinCode:12345
        }
    }
}
let { adress1:{area} } = loc;
console.log(area);

//combining array and object 

let restaurant=[
    {
        name1:"mefhil",
        foofItems:["biryani","haleem","water",{
            price:{
                amount:200
            }
        }
    ]
    }
]
let [{foofItems:[,,,{price:{amount}}]}]=restaurant
console.log(amount);





