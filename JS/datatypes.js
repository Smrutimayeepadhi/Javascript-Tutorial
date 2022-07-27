// var a = 3;
// console.log(a); 
/*const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ' a ' + (year -birthYear) + ' year old ' + job + '!';
console.log(jonas);*/
//type CONVERSION 
/*const inputYear = '1991';
console.log(inputYear + 18);//it's taken as string
console.log(Number(inputYear), inputYear);//coverts to a number
console.log(Number(inputYear) + 18);//the first letter should be in caps otherwise it will not work.
console.log(Number('jonas'));//javascript understands both string and number
console.log(typeof(NaN));
console.log(typeof(Number));
console.log(String(23), 23);*/
//type COERSION
/*console.log( 'I am' + 24 + 'years old'); //here js automatically taken 24 as string.
console.log('24' - '14' - 5);//here string coverted to number automatically that is called coersion
console.log('24' + '14' + 5);//concatination process
console.log('24'/ 2);
console.log(2+3+4+'5'); //9+'5'
let n = '1' + 1;//'11'
n = n-1;//11 - 1 = 10
console.log(n);*/
//FALSY and Thuthy values
/*console.log(Boolean(0));//false bcoz its a falsy value
console.log(Boolean(''));
console.log(Boolean('jonas'));//truthy value
console.log(Boolean({}));
console.log(Boolean(undefined));
//example-1:
const money = 0;
if (money) 
{
  console.log("Don't spend at all");//if we put money = 100 or any number it will execute if part bcoz its a truthy value its true
}
else
{
    console.log('You should get a job.');//at money = 0, else part get executed bcoz 0 is a falsy value output =false part/else part
}
//example-2
let height; //remember: const value alwys should be initilised
if (height) 
{
console.log('YAY! Height is defined.');
}
else
{
    console.log('Height is not defined.');//ouput= else part bcoz height is not defined and we know undefined value is a falsy value.
}
const age =18;
if (age===18) // === comparision operatior means it turns a true false value thats boolean value where both values exactly same 
  console.log('you just became an adult(strict) :D');  //if you want to execute one line code then no need to put {} you can wrote directly
if (age==18)
console.log('you just became an adult(loose)');*/
//e.g: '10' == 10 output = false bcoz it compare the type of the value which is a string and number
//this means that this loose equality operator if we introduce into our program this will inroduce many hard to find bugs into our code.
//for clean code, its better to avoid loose equality operator as much we can
//for comparing values its always better to use ===
//even we can assume == doesnot exist

//const favorite = prompt("what's your favorite number?");
//console.log(favorite);
//console.log(typeof favorite);
// /*let favorite = '23';
// if (favorite === 23) //it checks type of value tht's why output is false
// {
//   console.log("23 is an amazing number.");
// }
// if (favorite == 23) 
// {
//   console.log('23 is a number.');
// }*/

//BOOLEAN LOGIC
//STATEMENTS AND EXPRESSIONS

console.log( 3+4 ); //3+4 is called a expression.
5 + 6
if (23>7) //from if to } called statement
{
  const str = '23 is bigger.';
}
const me = 'Rosy'; //me is a variable
console.log(`I'm ${2037-1991} years old ${me}.`); //and ${2037-1991} called a expression
//we cannot keep statement and expressions together, it remains in different places
//e.g console.log(`I'm ${2037-1991} years old ${if (23>7) //from if to } called statement
//{
 // const str = '23 is bigger.';
//}}`); we cannot keep like this.
