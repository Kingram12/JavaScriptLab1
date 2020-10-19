const name = "Kayla Ingram"
let age = 26;
const birthday = "November 1st"

let detroitGC = true;

let lifeEvents = ["I was born in Angola, Indiana.", "I have no siblings.", "My previous job was an office manager for a Budweiser Distributor.", "I love to travel."]

if (detroitGC === true) {
    console.log (`My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
} else if (detroitGC === false) {
    console.log (`My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
}

for(i = 0; i < lifeEvents.length; i++){
    console.log (lifeEvents[i]);
}

let counter = 0;

while (true) {
    let randomNumber = (Math.floor(Math.random() * 11));
if (randomNumber!==5) {
    counter++;
    console.log (`${randomNumber} !==5`);
} else {
    counter++;
    console.log (`5===5. It took ${counter} iterations to randomly generate the number 5`);
break;}
} 
