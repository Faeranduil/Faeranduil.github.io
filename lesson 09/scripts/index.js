const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
/*let h = new Headers({
    "Accept": "application/json",
    "User-Agent": "WDD-230 Test User Agent https://flig999.github.io",
    "Access-Control-Allow-Origin": "no-cors"
});*/

fetch(requestURL)
    .then(function (response) {
        return response.json();

    })
    .then(function (jsonObject) {
            console.log(jsonObject);
            console.table(jsonObject);
            const towns = jsonObject['towns'];
            let town = document.createElement('section');
            let h2 = document.createElement('h2');
            let h3 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let p4 = document.createElement('p');
            let image = document.createElement('img');

            h2.textContent = towns[5]["name"];
            h3.textContent = towns[5]["motto"];
            p2.textContent = "Year Founded: " + towns[5]["yearFounded"];
            p3.textContent = "Population: " + towns[5]["currentPopulation"];
            p4.textContent = "Annual Rainfall: " + towns[5]["averageRainfall"];
            image.textContent = towns[5]["photo"];

            town.appendChild(h2);
            town.appendChild(h3);
            town.appendChild(p2);
            town.appendChild(p3);
            town.appendChild(p4);
            town.appendChild(image);

            image.setAttribute('src', towns[5]["photo"]);

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

            h2.textContent = towns[6]["name"];
            h3.textContent = towns[6]["motto"];
            p2.textContent = "Year Founded: " + towns[6]["yearFounded"];
            p3.textContent = "Population: " + towns[6]["currentPopulation"];
            p4.textContent = "Annual Rainfall: " + towns[6]["averageRainfall"];
            image.textContent = towns[6]["photo"];

            town.appendChild(h2);
            town.appendChild(h3);
            town.appendChild(p2);
            town.appendChild(p3);
            town.appendChild(p4);
            town.appendChild(image);

            image.setAttribute('src', towns[6]["photo"]);

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

            h2.textContent = towns[1]["name"];
            h3.textContent = towns[1]["motto"];
            p2.textContent = "Year Founded: " + towns[1]["yearFounded"];
            p3.textContent = "Population: " + towns[1]["currentPopulation"];
            p4.textContent = "Annual Rainfall: " + towns[1]["averageRainfall"];
            image.textContent = towns[1]["photo"];

            town.appendChild(h2);
            town.appendChild(h3);
            town.appendChild(p2);
            town.appendChild(p3);
            town.appendChild(p4);
            town.appendChild(image);

            image.setAttribute('src', towns[1]["photo"]);

            document.querySelector('.fishHaven').appendChild(town);
        });
    