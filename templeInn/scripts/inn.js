window.addEventListener('load',(event)=>{
    // add code here to run when page loads
    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('.navigationBar')
    
    hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
    
    window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};
  
    const cd = document.querySelector('#currentDate');
      cd.textContent = new Date().toDateString();
  
      const cry = document.querySelector('#copyrightyear');
      cry.textContent = new Date().getFullYear();
  });

  const innjs = "https://github.com/Faeranduil/Faeranduil.github.io/blob/master/templeInn/scripts/inn.json";
  fetch(innjs)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    console.log(jsonObject);
    const temples = jsonObject;
    let tmp = document.createElement('section');
    let tname = document.createElement('h3');
    let taddress = document.createElement('h3');
    let ttelephone = document.createElement('h3');
    let tdedicate = document.createElement('h3');
    

    tname.textContent = "Currently: " + temples.name;
    taddress.textContent = "Humidity: " + temples.address;
    ttelephone.textContent = "Wind Speed: " + temples.telephone;
    fhmaxTemp.textContent = "Temperature: " + temples.yearDedicated;

    tmp.appendChild(tname);
    tmp.appendChild(taddress);
    tmp.appendChild(ttelephone);
    tmp.appendChild(tdedicate);

    document.querySelector('.templ').appendChild(tmp);
  });