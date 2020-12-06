const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
    .then(function (response) {
        return response.json();

    })
    .then(function (jsonObject) {
        console.log(jsonObject);
        console.table(jsonObject);
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == "Preston" || towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs") {
                let town = document.createElement('section');
                let h2 = document.createElement('h2');
                let h3 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                let p4 = document.createElement('p');
                let image = document.createElement('img');

                h2.textContent = towns[i].name;
                h3.textContent = towns[i].motto;
                p2.textContent = "Year Founded: " + towns[i].yearFounded;
                p3.textContent = "Population: " + towns[i].currentPopulation;
                p4.textContent = "Annual Rainfall: " + towns[i].averageRainfall;
                image.textContent = towns[i].photo;

                town.appendChild(h2);
                town.appendChild(h3);
                town.appendChild(p2);
                town.appendChild(p3);
                town.appendChild(p4);
                town.appendChild(image);

                image.setAttribute('src', towns[i].photo);
                /*town.setAttribute(towns[i].photo.substring(0,this.src.length-4);*/


                document.querySelector('.townie').appendChild(town);
            }
        }
    });