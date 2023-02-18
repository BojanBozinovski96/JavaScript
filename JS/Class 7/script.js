

// console.log("First");


// setTimeout(() =>{
// console.log("This happends after 3 sec")
// },3000);

// console.log("Last");

// function simulateCallback(success, error){
//     let num = Math.random() * 10;

//     if(num > 8){
//         success();
//     }else {
//         error();
//     }
    

// }

// simulateCallback(() => console.log("success"), ()  => console.log("error"));


setTimeout(() => {
    console.log('2000');
    setTimeout(() => {
        console.log('1000')
    },1000)
},2000)