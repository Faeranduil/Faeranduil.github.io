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
    let h2 = document.createElement('h2');
    let h3 = document.createElement('p');
    let p2 = document.createElement('p');
    let image = document.createElement('img');

    h2.textContent = stations.weather[0].main;
    h3.textContent = stations.name;
    p2.textContent = Math.round(stations.main.temp_max) + '°';

    rex.appendChild(h3);
    rex.appendChild(h2);
    rex.appendChild(image);
    rex.appendChild(p2);
    

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

    /*** Programming Notes **************************************
      Arrow Functions - es6 syntactically compact alternative to a regular function expression
      see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
      or https://www.w3schools.com/js/js_arrow_function.asp
    
      classList property - https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
      */

  });