const requestURL = "getPerson.json";
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
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const person = jsonObject['person'];
            let fullName = document.createElement('h1');
            let password = document.createElement('p');
            let emailAddy = document.createElement('p');
            let eyeColor = document.createElement('p');
            let cityCountry = document.createElement('p');
            let children = document.createElement('p');
            let ipAddy = document.createElement('p');
            let image = document.createElement('img');

            fullName.textContent = person.personal.name + ' ' + person.personal.lastname;
            password.textContent = person.online_info.password;
            emailAddy.textContent = person.online_info.email;
            eyeColor.textContent = person.personal.eye_color;
            cityCountry.textContent = person.personal.city + ' ' + person.personal.country;
            children.textContent = person.marriage.children;
            ipAddy.textContent = person.online_info.ip_address;
            image.textContent = images\image.jpg;

            card.appendChild(fullName);
            card.appendChild(image);
            card.appendChild(eyeColor);
            card.appendChild(cityCountry);
            card.appendChild(children);
            card.appendChild(emailAddy);
            card.appendChild(password);
            card.appendChild(ipAddy);
            

            image.setAttribute('src', images\image.jpg);

            document.querySelector('div.cards').appendChild(card);
        };
    });