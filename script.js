//you fuckbob you're like joe biden eating ass
const badWords = ['fuck','shit','bitch','ass','dick','cunt'];
const secondaryBadWords = ['hole','head','suck','bozo','fart','bag'];
const persons = ['joe biden','liver king','donald trump','joey diaz'];
const actions = ['eating ass','licking balls','sniffing coke']

const pickRandom = (array) => {
    let randomNumberForArrayLength = Math.floor(Math.random()*(array.length));
    return array[randomNumberForArrayLength]
}

let statement1 = `you ${pickRandom(badWords)} ${pickRandom(secondaryBadWords)}`;
let statement2 = `you're worse than ${pickRandom(persons)} ${pickRandom(actions)}`;

console.log(statement1);
console.log(statement2);

console.log(`you ${pickRandom(badWords)} ${pickRandom(secondaryBadWords)}`)
console.log(`you're worse than ${pickRandom(persons)} ${pickRandom(actions)}`)

console.log(`you ${pickRandom(badWords)} ${pickRandom(secondaryBadWords)}`)
console.log(`you're worse than ${pickRandom(persons)} ${pickRandom(actions)}`)

console.log(`you ${pickRandom(badWords)} ${pickRandom(secondaryBadWords)}`)
console.log(`you're worse than ${pickRandom(persons)} ${pickRandom(actions)}`)

console.log(`you ${pickRandom(badWords)} ${pickRandom(secondaryBadWords)}`)
console.log(`you're worse than ${pickRandom(persons)} ${pickRandom(actions)}`)

console.log(`you ${pickRandom(badWords)} ${pickRandom(secondaryBadWords)}`)
console.log(`you're worse than ${pickRandom(persons)} ${pickRandom(actions)}`)

console.log(`you ${pickRandom(badWords)} ${pickRandom(secondaryBadWords)}`)
console.log(`you're worse than ${pickRandom(persons)} ${pickRandom(actions)}`)


// let test = badwords[1];
// console.log(`yes there is a problem ${test}`);