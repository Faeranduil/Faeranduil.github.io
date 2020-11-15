const requestURL = 'lesson 09\scripts\index.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();

    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const city = jsonObject['towns'];
        for (let i = 0; i < prophets.length; i++) {
            let card = document.createElement('section');
            let cityN = document.createElement('h2');
            let slogan = document.createElement('p');
            let found = document.createElement('p');
            let pop = document.createElement('img');
            let rain = document.createElement('img');
            let img = document.createElement('img');

            cityN.textContent = towns.name;
            slogan.textContent = towns.motto;
            found.textContent = "Year Founded: " + towns.yearFounded;
            pop.textContent = "Population: " + towns.currentPopulation;
            rain.textContent = "Annual Rainfall: " + towns.averageRainfall;

            card.appendChild(h2);
            card.appendChild(slogan);
            card.appendChild(found);
            card.appendChild(pop);
            card.appendChild(rain);
            card.appendChild(image);
            card.appendChild(image);

            image.setAttribute('src', prophets[i].imageurl);

            document.querySelector('div.cards').appendChild(card);
        };
    });