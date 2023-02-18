// function generateArrayDivisableBy3() {
//     let emptyArray = [];
//     for (let i = 1; i <= 1000; i++) {
//         if (i % 3 === 0) {
//             emptyArray.push(i);
//         }
//     }
//     return emptyArray;
// }
// function generateArrayDivisableBy4() {
//     let emptyArray = [];
//     for (let i = 1; i <= 1000; i++) {
//         if (i % 4 === 0) {
//             emptyArray.push(i);
//         }
//     }
//     return emptyArray;
// }
// function generateArrayWithNumbersThatEndDigitOne() {
//     let emptyArray = [];
//     for (let i = 1; i <= 1000; i++) {
//         if (i % 10 === 1) {
//             emptyArray.push(i);
//         }
//         if (i.toString().endsWith(`1`)) {
//             emptyArray.push(i);
//         }
//     }
//     return emptyArray;
// }

// let first = generateArrayDivisableBy3();
// let second = generateArrayDivisableBy4();
// let last = generateArrayWithNumbersThatEndDigitOne();

// console.log(first);
// console.log(second);
// console.log(last);


// function clearArrayLeaveOnlyString(input) {
//     let emptyArray = [];
//     for (let item of input) {
//         if (typeof (item) === `string`) {
//             emptyArray.push(item);
//         }
//     }
//     return emptyArray;
// }

// function clearArrayLeaveOnlyNumbers(input) {
//     let emptyArray = [];
//     let index = 0;
//     while (index < input.length) {
//         if (Number.isNaN(input[index])) {
//             index++;
//             continue;
//         }
//         if (typeof (input[index]) === 'number') {
//             emptyArray.push(input[index]);
//         }
//         index++;
//     }
//     return emptyArray;

// }

// function clearArray(input) {
//     let emptyArray = [];

//     for (let item of input) {
//         if (item === undefined || item === "" || item === null) {
//             // emptyArray.push(item);
//             continue;
//         }
//         if (typeof (item) === 'number' && Number.isNaN(item)) {
//             continue;
//         }
//         emptyArray.push(item);

//     }
//     return emptyArray;
// }
// console.log(clearArrayLeaveOnlyNumbers(test));
// console.log(clearArrayLeaveOnlyString(test));
// console.log(clearArray(test));


// function generateRandomRGB() {
//     let emptyArray = [];

//     for (let i = 0; i < 3; i++) {
//         let num = Math.floor(Math.random() * 255);
//         emptyArray.push(num);
//     }
//     let rgb = `rgb(${emptyArray[0]} ${emptyArray[1]} ${emptyArray[2]})`;
//     return rgb;
// }


// function changeBodyBackgroundColor() {
//     let body = document.querySelector('body');
//     let rgb = generateRandomRGB();
//     body.style.backgroundColor = rgb;
//     body.innerText = rgb;
// }

// changeBodyBackgroundColor();
// console.log(generateRandomRGB());

// document
//     .getElementById('h1-btn')
//     .addEventListener('click', function () {
//         let color = document.getElementById('color').value;
//         let fontSize = document.getElementById('font-size').value;
//         let text = document.getElementById('text').value;

//         let h1 = document.createElement('h1');
//         h1.style.color = color;
//         h1.style.fontSize = fontSize + 'px';
//         h1.innerText = text;

//         document.querySelector('body').appendChild(h1);
//     });

let movieRentingApp = {
    movies: [
        'Dumb and Dumber',
        'Starswars',
        'Black adam',
        'Avatar',
        'Top gun',
        'Invkova Slava'
    ],

    searchMovies: function (searchInput, movies) {
        for (let movie of movies) {
            if (movie.toLocaleLowerCase() === searchInput.toLocaleLowerCase()) {
                return true;
            }
            // if(movie.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase)){

            // }
        }
        return false;
    },

    generateMassage: function (isMovieAvailable) {
        //    if(isMovieAvailable){
        //     return "The movie can be rented";
        //    } else {
        //     "The movie can't be rented";
        //    }
        return isMovieAvailable ?
            "The movie can be rented" :
            "The movie can't be rented";
    },

    init: function () {
        let _that = this;
        let searchInput = document.getElementById('search-input');
        let massageElement = document.getElementById('massege');
        // let searchFnc = this.searchMovies;
        // let generateMassage = this.generateMassage;
        document.getElementById('search').addEventListener('click', function () {
            let isMovieAvailable = _that.searchMovies(searchInput.value, _this.movies);
            let massege = _that.generateMassage(_that.searchMovies(searchInput.value));
            let color = isMovieAvailable ? 'green' : 'red';

            massageElement.innerText = massege;
            massageElement.style.color = color;


        });
    }
}

movieRentingApp.init();

