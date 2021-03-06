window.addEventListener('load', (event) => {
  // add code here to run when page loads
  const hambutton = document.querySelector('.ham');
  const mainnav = document.querySelector('.navigationBar')

  hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive')
  }, false);

  // To solve the mid resizing issue with responsive class on
  window.onresize = () => {
    if (window.innerWidth > 760) mainnav.classList.remove('responsive')
  };

  const cd = document.querySelector('#currentDate');
  cd.textContent = new Date().toDateString();

  const cry = document.querySelector('#copyrightyear');
  cry.textContent = new Date().getFullYear();

})

const requestURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=3282517940169cc2ec517af5aa5f93e2';
const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=3282517940169cc2ec517af5aa5f93e2';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    console.log(jsonObject);
    const stations = jsonObject;
    let rex = document.createElement('section');
    let curr = document.createElement('h3');
    let humid = document.createElement('h3');
    let winds = document.createElement('h3');
    let maxTemp = document.createElement('h3');
    let image = document.createElement('img');

    curr.textContent = "Currently: " + stations.weather[0].main;
    humid.textContent = "Humidity: " + stations.main.humidity;
    winds.textContent = "Wind Speed: " + stations.wind.speed + "MPH";
    maxTemp.textContent = "Temperature: " + Math.round(stations.main.temp_max) + '°';

    rex.appendChild(curr);
    rex.appendChild(maxTemp);
    rex.appendChild(humid);
    rex.appendChild(winds);
    rex.appendChild(image);


    image.setAttribute('src', 'https://openweathermap.org/img/w/' + stations.weather[0].icon + '.png');

    document.querySelector('.coord').appendChild(rex);
  });

fetch(forecastURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.log(jsonObject);
    const stations = jsonObject;
    const idCount = 0;
    for (i = 0; i < stations.list.length; i++) {
      if (stations.list[i].dt_txt.includes("18:00:00")) {
        let rex2 = document.createElement('section');
        let rex3 = document.createElement('section');
        let rex4 = document.createElement('section');
        let h3 = document.createElement('h2');
        let h6 = document.createElement('h2');
        let image = document.createElement('img');

        var days = ['Sunday', 'Monday', 'Tuesday',
          'Wednesday', 'Thursday', 'Friday', 'Saturday'
        ];
        var month = stations.list[i].dt_txt.substr(5, 2);
        var date = stations.list[i].dt_txt.substr(8, 2);
        var d = new Date(2020, month, date);
        if (d.getDay() + 5 > 6) {
          var newD = d.getDay() + 5 - 7;
        } else {
          var newD = d.getDay() + 5;
        }

        h3.textContent = Math.round(stations.list[i].main.temp_max) + "°";
        h6.textContent = days[newD];

        image.setAttribute('src', 'https://openweathermap.org/img/w/' + stations.list[i].weather[0].icon + '.png');
        image.setAttribute('alt', stations.list[i].weather[0].icon + '.png');

        rex2.appendChild(h3);
        rex3.appendChild(h6);
        rex4.appendChild(image);

        /*rex2.setAttribute("id","tempId" + idCount);
        rex3.setAttribute("id","dateId" + idCount);
        rex4.setAttribute("id","iconId" + idCount);

        idCount = idCount + 1;
        */
        document.querySelector('.days').appendChild(rex3);
        document.querySelector('.temps').appendChild(rex2);
        document.querySelector('.icons').appendChild(rex4);
      }
    }

  });
const townURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(townURL)
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

        image.setAttribute("src", "images/" + towns[i].photo);
        image.setAttribute('alt', towns[i].name + ".jpg");

        town.appendChild(h2);
        town.appendChild(h3);
        town.appendChild(p2);
        town.appendChild(p3);
        town.appendChild(p4);
        town.appendChild(image);
       

        


        document.querySelector('.townie').appendChild(town);        
      }
    }
  });

  function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}