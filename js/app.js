// Q1
document.querySelector('.artemis').innerHTML = "TEAM-ARTEMIS";
document.querySelector('.artemis').style.color = '#f4af1b';
document.querySelector('.artemis').style.fontWeight = 'bold';
document.querySelector('.team-members').style.borderRadius = '0 0 18px 18px';
document.querySelector('.team-members').style.padding = '10px 30px 10px 30px';
document.querySelector('.team-members').style.backgroundColor = '#fafafa';
document.querySelector('h1').style.borderRadius = '18px 18px 0 0';
document.querySelector('h1').style.padding = '18px';
document.querySelector('h1').style.backgroundColor = '#1560bd';
document.querySelector('h1').style.color = '#fafafa';

// Q2
console.log('QUESTION 2')
let teamMembers = ['Merit', 'Abdulsamad', 'Comely', 'Gabriel-Eta Ekpo', 'Emmanuel Stephen', 'Emmanuel Stephen', 'Danny']
console.log(teamMembers[0]);

// Q3
console.log('QUESTION 3')
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
console.log('QUESTION 4')
let noun = 'Bara';
let verb = 'is';
let adjective = 'calm';
console.log(noun + ' ' + verb+ ' a boy');
console.log(noun + ' '+ verb + ' a '+ adjective + ' boy');
console.log('Be ' + adjective +' like '+ noun);
console.log('Tammy is as '+ adjective + ' as '+ noun);
console.log(noun + ' '+ verb + ' the calmest of all my students!');

// Q5
console.log('QUESTION 5')
function remainder (x,y) {
    console.log(x % y);
}
remainder(1890, 67);

// Q6
console.log('QUESTION 6')
console.log('QUESTION 6A')
function calculate (a,b,c){
    let positiveResult = (-1*b + Math.sqrt(Math.pow(b, 2)-(4*a*c)))/(2*a);

    return positiveResult;
}
console.log(calculate (2, 3, -1));

console.log('QUESTION 6B')
function solve (a,b,c){
    let negativeResult = (-1*b - Math.sqrt(Math.pow(b, 2)-(4*a*c)))/(2*a);

    return negativeResult;
}
console.log(solve (2, 3, -1));

// Q7
console.log('QUESTION 7')
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks = "The";
console.log(wordBlanks+ ' '+ myAdjective+ ' '+ myNoun+ ' '+ myVerb+ ' '+myAdverb);

// Q8
console.log('QUESTION 8')
function area(r){
    const PI= 3.142;

    return PI * Math.pow(r,2);
}
console.log(area(9));

// Q9
console.log('QUESTION 9')
let p = 8200;
let r = 17.5;
let t = 2.5;
let simpleInterest = (p * r * t)/100;
console.log(simpleInterest);

// Q10
console.log('QUESTION 10')
let result = 10 % 4;
console.log(result);

// Q11
// DATA 1
console.log('DATA 1')
let meritWeight1 = 78;
let meritHeight1 = 1.69;
let meritBMI1Formula1 = meritWeight1/Math.pow(meritHeight1, 2);
let meritBMI1Formular2 = meritWeight1/(meritHeight1 * meritHeight1);

let nutjobWeight1 = 92;
let nutjobHeight1 = 1.95;
let nutjobBMI1Formula1 = nutjobWeight1/Math.pow(nutjobHeight1, 2);
let nutjobBMI1Formular2 = nutjobWeight1/(nutjobHeight1 * nutjobHeight1);

console.log('QUESTION 11B')
console.log("Merit's BMI using formular 1 = " + meritBMI1Formula1);
console.log("Merit's BMI using formular 2 = " + meritBMI1Formular2);

console.log("Nutjob's BMI using formular 1 = " + nutjobBMI1Formula1);
console.log("Nutjob's BMI using formular 2 = " + nutjobBMI1Formular2);

console.log('QUESTION 11C')
let meritHigherBMI1 = meritBMI1Formula1 > nutjobBMI1Formula1;
console.log(meritHigherBMI1);

// DATA 2
console.log('DATA 2')
let meritWeight2 = 85;
let meritHeight2 = 1.76;
let meritBMI2Formula1 = meritWeight2/Math.pow(meritHeight2, 2);
let meritBMI2Formular2 = meritWeight2/(meritHeight2 * meritHeight2);

let nutjobWeight2 = 95;
let nutjobHeight2 = 1.88;
let nutjobBMI2Formula1 = nutjobWeight2/Math.pow(nutjobHeight2, 2);
let nutjobBMI2Formular2 = nutjobWeight2/(nutjobHeight2 * nutjobHeight2);

console.log('QUESTION 11B')
console.log("Merit's BMI using formular 1 = " + meritBMI2Formula1);
console.log("Merit's BMI using formular 2 = " + meritBMI2Formular2);

console.log("Nutjob's BMI using formular 1 = " + nutjobBMI2Formula1);
console.log("Nutjob's BMI using formular 2 = " + nutjobBMI2Formular2);

console.log('QUESTION 11C')
let meritHigherBMI2 = meritBMI2Formula1 > nutjobBMI2Formula1;
console.log(meritHigherBMI2);
