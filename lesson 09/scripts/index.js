const requestURL = 'https://github.com/Faeranduil/Faeranduil.github.io/blob/master/lesson%2009/scripts/index.json';
let h = new Headers({
    "Accept": "application/json",
    "User-Agent": "WDD-230 Test User Agent https://flig999.github.io"
    "Access-Control-Allow-Origin": "no-cors"
});

fetch(requestURL, {headers:h})
    .then(function (response) {
        return response.json();

    })
    .then(function (jsonObject) {
            console.log(jsonObject[0]);
            console.table(jsonObject[0]);
            const towns = jsonObject['towns'];
            let town = document.createElement('section');
            let h2 = document.createElement('h2');
            let h3 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let p4 = document.createElement('p');
            let image = document.createElement('img');

            h2.textContent = towns[4].name;
            h3.textContent = towns[4].motto;
            p2.textContent = "Year Founded: " + towns[4].yearFounded;
            p3.textContent = "Population: " + towns[4].currentPopulation;
            p4.textContent = "Annual Rainfall: " + towns[4].averageRainfall;

            town.appendChild(h2);
            town.appendChild(h3);
            town.appendChild(p2);
            town.appendChild(p3);
            town.appendChild(p4);
            town.appendChild(image);

            image.setAttribute('src', preston.jpg);

            document.querySelector('.preston').appendChild(town); 
    });

    fetch(requestURL)
    .then(function (response) {
        return response.json();
    
    })
    .then(function (jsonObject) {
            console.table(jsonObject);
            const towns = jsonObject['towns'];
            let town = document.createElement('section');
            let h2 = document.createElement('h2');
            let h3 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let p4 = document.createElement('p');
            let image = document.createElement('img');

            h2.textContent = towns[5].name;
            h3.textContent = towns[5].motto;
            p2.textContent = "Year Founded: " + towns[5].yearFounded;
            p3.textContent = "Population: " + towns[5].currentPopulation;
            p4.textContent = "Annual Rainfall: " + towns[5].averageRainfall;

            card.appendChild(h2);
            card.appendChild(h3);
            card.appendChild(p2);
            card.appendChild(p3);
            card.appendChild(p4);
            card.appendChild(image);

            image.setAttribute('src', soda.jpg);

            document.querySelector('.sodaSprings').appendChild(town);
        }); 

    fetch(requestURL)
    .then(function (response) {
        return response.json();
    
    })

    .then(function (jsonObject) {
            console.table(jsonObject);
            const towns = jsonObject['towns'];
            let town = document.createElement('section');
            let h2 = document.createElement('h2');
            let h3 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let p4 = document.createElement('p');
            let image = document.createElement('img');

            h2.textContent = towns[1].name;
            h3.textContent = towns[1].motto;
            p2.textContent = "Year Founded: " + towns[1].yearFounded;
            p3.textContent = "Population: " + towns[1].currentPopulation;
            p4.textContent = "Annual Rainfall: " + towns[1].averageRainfall;

            card.appendChild(h2);
            card.appendChild(h3);
            card.appendChild(p2);
            card.appendChild(p3);
            card.appendChild(p4);
            card.appendChild(image);

            image.setAttribute('src', fish.jpg);

            document.querySelector('.fishHaven').appendChild(town);
        });
    