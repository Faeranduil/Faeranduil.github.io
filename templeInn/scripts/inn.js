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