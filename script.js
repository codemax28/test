const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minEl = document.getElementById("min");
const secEl = document.getElementById("sec");
const myBirthday = "12/02/2021"; //mois,jours,années


function countDown () {

    const newMyBirthday = new Date(myBirthday);
    const currentDate = new Date();

    let seconde = (newMyBirthday-currentDate) / 1000;

    const days = Math.floor(seconde / 86400);
    const hours = Math.floor(seconde / 3600) % 24;
    const min = Math.floor(seconde / 60) % 60;
    const sec = Math.floor(seconde%60)


    

    console.log(hours)



    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minEl.innerHTML = min;
    secEl.innerHTML = sec;
    
  



}

countDown();
setInterval(countDown, 1000);
