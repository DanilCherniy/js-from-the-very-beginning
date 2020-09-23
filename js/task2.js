//let elementWidth = '50px';
//const result = Number.parseInt(elementWidth);
//console.log(result);//50

//let elementWidth = '50px';
//console.log(elementWidth); - 50px

//let elementHeight = '383.32px';
//elementHeight = Number.parseFloat(elementHeight);
//console.log('height is', elementHeight); //383.32

//let salary = 45636.54763876274628754;
//salary = salary.toFixed(2);
//console.log('salary is', salary); //45636.55- it is a string

//let salary = 45636.54763876274628754;
//salary = salary.toFixed(2);
//salary = Number(salary);
//console.log('salary is', salary); // now it is a number))

//false = 0
//true = 1

//let value = 'it could not be a number';
//console.log(Number(value)); // NaN

//const base = 4;
//const power = 2;

//const result = Math.pow(base, power);
//console.log(result); // 4 v kvagrate
//console.log(4 ** 2); // the same

/*Скрипт который просит пользователя ввести
 * число в степень
 * и в консоль
 */

//let base = prompt('give me a number');
//base = Number(base);
//console.log(base);

//let power = prompt('give me a power');
//power = Number(power);
//console.log(power);

//const result = base ** power;
//console.log(result);

//console.log(Math.random() * (50 - 30) + 30); // random number

//const max = 100;
//const min = 20;

//console.log(Math.round(Math.random() * (max - min) + min));

//let begin = confirm('Are you redy to choose your side');
//const marvel = ['spiderman', 'venom', 'carnage', 'octopus'];
//const colors = ['red', 'black', 'violet'];
//const max = marvel.length - 1;
//const min = 0;
//const max2 = colors.length - 1;
//const index = Math.round(Math.random() * (max - min) + min);
//console.log(index); // random number of array
//const marvels = marvel[index];
//const color = colors[index];
//console.log(color);
//console.log(marvels);

//document.body.style.backgroundColor = color; // mini game to choose player with color

//const message = 'in this sentense 25 words';
//console.log(message.length);

//const firstName = 'Danial';
//const lastName = 'Cherniy';
//const fullName = firstName + ' ' + lastName;
//console.log(fullName); // concat of strings

//const room = 666;
//const type = 'special place';

//const welcomeMsg = `Guest ${firstName} ${lastName} is going to ${type} in the room ${room}`;
//console.log(welcomeMsg); //Guest Danial Cherniy is going to special place in the room 666

//const mobile = `Iphone`;
//const normalizedMobile = mobile.toLowerCase();
//const bigMobile = mobile.toUpperCase();
//console.log(normalizedMobile); //iphone
//console.log(bigMobile);  //IPHONE

//let game = 'WiTCheR';
//console.log(game[3]); // C
//console.log(game.slice(4).toLowerCase()); //her

//game = game[0] + game.slice(1).toLowerCase();
//console.log(game);// Witcher
