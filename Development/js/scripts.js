// السؤال الاول
let web= ['menawar','nancy','moudhi','hussain','rahaf']

function logger(web) {
for(let i = 0; i < web.length; i++ ) {
 console.log(web[i]);
}
}

logger(web);

//السؤال الثاني
let temps1 = [20 , 30 , 50 ,60]
let value = 40
temps2 = [];

function hottestdays(array, TH, empty_array) {
    for(let i = 0; i < array.length; i++) {
        if(array[i]> TH) {
            empty_array.push(array[i]);
        }
    }
    return temps2;
}
console.log( hottestdays(temps1,value ,temps2));

// السؤال الثالث
let books = [
    {
        name: "book1",
        ID:1,
    },

    {
        name: "book2",
        ID:2,
    },
    {
        name: "book3",
        ID:3,
    },
    {
        name: "book4",
        ID:4,
    },
];

function getBookById(){
let holder = false;
let bookID = prompt("إدخل رقم الكتاب")
    for (let i = 0; i< books.length; i++){
        if (books[i].ID == bookID) {
            // return books[i];
            console.log("وجدته")
        holder = true ;
        } 
    }
        if (holder == false){
            console.log("error");
        
    }
}



// السؤال الرابع
let userInput = "";
let output =[];
userInput = prompt("السلعه");

while (userInput != "انتهيت"){
let price =  prompt("السعر");
let quantity = prompt("الكميه");


let object = {
  name: userInput,
  price: price,
  quantity:quantity,
}; 

output.push(object);

 userInput = prompt("السلعة");
}

// let totalprice = 0;

 for (let i = 0; i < output.length; i++) {
    console.log(
        output[i].quantity + 
        " "  +
        output[i].name + 
        " " 
        + output[i].quantity * output[i].price);
     

totalprice =+ output[i].quantity * output[i].price
}

console.log(totalprice);
