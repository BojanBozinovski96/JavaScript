let peoplePage = 1;
let shipPage = 1;
let dataSort = false;
let isAsc = null;

function getPeople(url, sortByName = false, isAsc = null) {

    fetch(url)
        .then(response => response.json())
        .then(data => {

            toggleNextPrevious(data);
            let people = [];
            if (sortByName) {
                if(isAsc !== null){
                    ships = isAsc ?
                    data.results.sort((a,b) => a.name.localeCompare(b.name)) :
                    data.results.sort((a,b) => b.name.localeCompare(a.name))
                }
            } else {
                people = data.results
            }
            
            

            printPeople(people);
        })
        .catch(error => console.log(error));
}

function getShips(url, sortByName = false, isAsc = null) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            toggleNextPreviousSpaceShip(data);
            let ships = [];
            if (sortByName) {
                if(isAsc !== null) {
                    ships = isAsc ? 
                            data.results.sort((a,b) => a.name.localeCompare(b.name)) :
                            data.results.sort((a,b) => b.name.localeCompare(a.name))
                }
            } else {
                ships = data.results
            }

            printSpaceShips(ships);




        })

        .catch(error => console.log(error));
}



function printSpaceShips(ships) {
    let table = document.getElementById("ship");

    table.innerHTML = `<tr>
    <th class="tabledata" id='shipName'>Name</th>
    <th class="tabledata">Height</th>
    <th class="tabledata">Mass</th>
    <th class="tabledata">Gender</th>
    <th class="tabledata">Birth Year</th>
    <th class="tabledata">Appearances</th>
</tr>`;
    for (let i = 0; i < 10; i++) {
        let ship = ships[i];
        let row = `
        <tr>
          <td style="color:rgba(90, 255, 255, 1)">${ship.name}</td>
          <td style="color:rgba(90, 129, 255, 1)">${ship.model}</td>
          <td style="color:rgba(255, 81, 14, 0.71)">${ship.manufacturer}</td>
          <td style="color:rgba(127, 255, 0, 1.00)">${ship.cost_in_credits}</td>
          <td style="color:rgba(90, 129, 255, 1)">${ship.passengers}</td>
          <td style="color:rgba(90, 129, 255, 1)">${ship.starship_class}</td>
        </tr>
      `;
        table.innerHTML += row;


    }

}

function printPeople(people) {
    let table = document.getElementById("person");

    table.innerHTML = `<tr>
    <th class="tabledata" id='sortName'>Name</th>
    <th class="tabledata">Model</th>
    <th class="tabledata">Manufacturer</th>
    <th class="tabledata">Cost</th>
    <th class="tabledata">People Capacity</th>
    <th class="tabledata">Class</th>
</tr>`;
    for (let i = 0; i < 10; i++) {
        let person = people[i];
        let row = `
        <tr>
          <td style="color:rgba(90, 255, 255, 1)">${person.name}</td>
          <td style="color:rgba(90, 129, 255, 1)">${person.height}</td>
          <td style="color:rgba(255, 81, 14, 0.71)">${person.mass}</td>
          <td style="color:rgba(90, 129, 255, 1)">${person.gender}</td>
          <td style="color:rgba(90, 129, 255, 1)">${person.birth_year}</td>
          <td style="color:rgba(90, 129, 255, 1)">${person.films.length}</td>
        </tr>
      `;
        table.innerHTML += row;


    }

}
function showPeopleButton() {
    let table = document.getElementById('person');
    table.style.display = 'none';
    let showPeopleBtn = document.getElementById("btn");
    showPeopleBtn.onclick = function () {
        table.style.display = 'inline-table'

        getPeople('https://swapi.dev/api/people');
        // showPeopleBtn.onclick = null;
    }
}
showPeopleButton();

// function showNameByAlphabeticOrder(){
//     document.getElementById('name').addEventListener('click',function(){
//         data.sort(function(a,b){
//             return b.name.localeCompare(a.name);
//         }) 

//     })
// }
// showNameByAlphabeticOrder();
function showSpaceships() {
    let table = document.getElementById('ship');
    table.style.display = 'none';
    let showSpaceShipsBtn = document.getElementById("btn2");
    showSpaceShipsBtn.onclick = function () {
        table.style.display = 'inline-table';
        getShips('https://swapi.dev/api/starships');

    }
}
showSpaceships();
document.getElementById("next-people-btn").addEventListener("click", function () {
    peoplePage++;


    getPeople('https://swapi.dev/api/people/?page=' + peoplePage);
});

document.getElementById("next-ships-btn").addEventListener("click", function () {
    shipPage++;

    getShips('https://swapi.dev/api/starships/?page=' + shipPage);





});
document.getElementById("previous-people-btn").addEventListener("click", function () {
    peoplePage--;

    getPeople('https://swapi.dev/api/people/?page=' + peoplePage);

});
document.getElementById("previous-ships-btn").addEventListener("click", function () {
    shipPage--;

    getShips('https://swapi.dev/api/starships/?page=' + shipPage);
});

function toggleNextPrevious(data) {


    if (data.next === null) {
        document.getElementById("next-people-btn").style.display = 'none';
    } else {
        document.getElementById("next-people-btn").style.display = 'block';
    }

    if (data.previous === null) {
        document.getElementById("previous-people-btn").style.display = 'none';
    } else {
        document.getElementById("previous-people-btn").style.display = 'block';
    }
}

function toggleNextPreviousSpaceShip(data) {


    if (data.next === null) {
        document.getElementById("next-ships-btn").style.display = 'none';
    } else {
        document.getElementById("next-ships-btn").style.display = 'block';
    }

    if (data.previous === null) {
        document.getElementById("previous-ships-btn").style.display = 'none';
    } else {
        document.getElementById("previous-ships-btn").style.display = 'block';
    }
}

// function display(person,ship){
//    let person = document.getElementById('person')
//     let ship = document.getElementById('ship')


// }
// function displayBlock(){
//     if(document.getElementById('person').style.display = 'block'){
//      return
//     }
//     else if(document.getElementById('ship').style.display = 'block') {
//      return
//     }
//  }

document.getElementById('person').addEventListener('click', function (e) {
    console.log(e.target.id);
    if (e.target.id === 'personName') {
    if(isAsc === null) {
        isAsc = true;
    }else {
        isAsc = !isAsc;
    }
        
        getPeople('https://swapi.dev/api/people/', true, isAsc)
    }
        
})

document.getElementById('ship').addEventListener('click', function (e) {
    console.log(e.target.id);
    if (e.target.id === 'shipName') {
        if(isAsc === null) {
            isAsc = true;
        }else {
            isAsc = !isAsc;
        }
        getShips('https://swapi.dev/api/starships/', true, isAsc);
    }
})


// function getPlanets(url) {
//     fetch(url)
//       .then(response => response.json())
//       .then(data => {
//         let planets = data.results;
//         printPlanets(planets);
//       })
//       .catch(error => console.log(error));
//   }

//   function printPlanets(planets) {
//     let table = document.getElementById("planetsTable");
//     for (let i = 0; i < 10; i++) {
//       let planet = planets[i];
//       let row = `
//         <tr>
//           <td style="color:rgba(90, 255, 255, 1)">${planet.name}</td>
//           <td style="color:rgba(90, 129, 255, 1)">${planet.population}</td>
//           <td style="color:rgba(255, 81, 14, 0.71)">${planet.climate}</td>
//           <td style="color:rgba(90, 129, 255, 1)">${planet.gravity}</td>
//         </tr>
//       `;
//       table.innerHTML += row;
     

//     }
//   }
//   window.onload = function() {
//     let showPlanetsBtn = document.getElementById("showPlanetsBtn");
//     showPlanetsBtn.onclick = function() {
//       getPlanets('https://swapi.dev/api/planets/?page=1');
//       showPlanetsBtn.onclick = null;
//     }
//   }