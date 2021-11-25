//!! Files in both codebases but very different !!

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
setInterval(countDown, 2000);

// store input numbers
const num1 = parseInt(prompt('Enter the first number '));
const num2 = parseInt(prompt('Enter the second number '));

//add two numbers
const sum = num1 + num2;

// display the sum
console.log(`The sum of ${num1} and ${num2} is ${sum}`);


function reverseString(str) {
    return str;
}
reverseString("hello");

function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}
 
reverseString("hello");
