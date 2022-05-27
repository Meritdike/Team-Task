// Q1
document.querySelector('.artemis').innerHTML = "Team-artemis";
document.querySelector('.artemis').style.color = '#ffe78e';
document.querySelector('.card').style.borderRadius = '18px';

// Q2
let teamMembers = ['Merit', 'Abdulsamad', 'Comely', 'Gabriel-Eta Ekpo', 'Emmanuel Stephen', 'Emmanuel Stephen', 'Danny']
console.log(teamMembers[0]);

// Q3
let teamMember = {
    firstName: 'Merit',
    lastName: 'Dike',
    bestMovie: 'Greatest Showman',
    bestFood: 'Yam and chicken peppersoup',
    complexion: 'fair',
    birthMonth: 'June',
    state: 'Rivers State',
    groupName: 'Artemis',
}
console.log(teamMember.bestMovie);

// Q4
let noun = 'Bara';
let verb = 'is';
let adjective = 'calm';
console.log(noun + ' ' + verb+ ' a boy');
console.log(noun + ' '+ verb + ' a '+ adjective + ' boy');
console.log('Be ' + adjective +' like '+ noun);
console.log('Tammy is as '+ adjective + ' as '+ noun);
console.log(noun + ' '+ verb + ' the calmest of all my students!');

// Q5
function remainder (x,y) {
    console.log(x % y);
}
remainder(1890, 67);

// Q6
function calculate (a,b,c){
    let positiveResult = (-1*b + Math.sqrt(Math.pow(b, 2)-(4*a*c)))/(2*a);

    return positiveResult;
}
console.log(calculate (2, 3, -1));

function solve (a,b,c){
    let negativeResult = (-1*b - Math.sqrt(Math.pow(b, 2)-(4*a*c)))/(2*a);

    return negativeResult;
}
console.log(solve (2, 3, -1));

// Q7
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks = "The";
console.log(wordBlanks+ ' '+ myAdjective+ ' '+ myNoun+ ' '+ myVerb+ ' '+myAdverb);

// Q8
function area(r){
    const PI= 3.142;

    return PI * Math.pow(r,2);
}
console.log(area(9));

// Q9


// Q10
let result = 10 % 4;
console.log(result);

// Q11
