// function simulateCallback(success, error) {
//     let num = Math.random() * 10;

//     if(num > 5){
//         success();
//     }else{
//         error();
// //     }
// }


// simulateCallback(() => console.log('Success'), () => console.log('Error'));



// function simulatePromise() {
//     let num = Math.random() * 10;

//     return new Promise((resolve, reject) => {
//         if (num > 5) {
//             setTimeout(() => {
//                 resolve('Promise resolved');
//             }, 2000);

//         } else {
//             reject('Promise rejected');
//         };
//     });
// };


// simulatePromise()
//     .then(response => console.log(response))
//     .catch(reject => console.log(error))


let data = [{
    name: 'Gele',
    lastName: 'Gelco'
},
{

    name: 'Gele',
    lastName: 'Gelco'
},
{
    name: 'Gele',
    lastName: 'Gelco'
}
];


function getData() {
    let num = Math.random() * 10;

    return new Promise((resolve, reject) => {
        if (num > 7) {
            setTimeout(() => {
                reject('Something has happend. Please try again!');
            }, 2000);
        } else {
            setTimeout(() => {
                resolve(data);
            }, 3000);
        }
    })
}


getData()
.then(response => {
    response.filter(x => x.name.startsWith(`T`)).forEach(z => console.log(z))
    .catch(error =>  console.log(error))
    

    
    
})