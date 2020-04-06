let time;
let name;
/*const password1 = 333;
const password2 = 666;
const password3 = 0000;
const username1 = "ivan";
const username2 = "ssss";
const username3 = "gibs";*/
let num1, num2, num3;

time = prompt("enter your time:");
while (time > 24 || time < 0) {
    alert("please, enter valid number.");
    time = prompt("enter your time:");
}
alert(time > 17 ? "Good evening!" : "Good day!");

//////////////////2

name = prompt("enter your name:");
if (name == "Jonh" || name == "jonh") {
    alert("Hello, Jonh");
} else {
    alert(name + " go away!");
}

/////////////////3
function UserCreds(username, password) {
    this.username = username;
    this.password = password;
}

const usersCreds = [
    new UserCreds('ivan', '333'),
    new UserCreds('ssss', '666'),
    new UserCreds('gibs', '0000')
]
const checkCreds = (first, second) =>
    first.username === second.username && first.password === second.password;
const creds = new UserCreds(prompt("enter your username: "), prompt("enter your password: "))
alert(usersCreds
    .reduce((previousValue, currentValue) => previousValue |= checkCreds(currentValue, creds), false) ?
    "Welcome!" :
    "user is not finded!");

/////////////////////// 4

num1 = prompt("Enter first number: ");
num2 = prompt("Enter second number: ");
num3 = prompt("Enter third number: ");


if (num1 > num2 && num1 > num3) {
    alert("First number is the bigest one!")
}
if (num2 > num1 && num2 > num3) {
    alert("Second number is the bigest one!")
}
if (num3 > num2 && num3 > num1) {
    alert("Third number is the bigest one!")
} else if (num1 == num2) {
    if (num1 > num3) {
        alert("First and second number are the bigest!")
    }
} else if (num1 == num3) {
    if (num1 > num2) {
        alert("First and third number are the bigest!")
    }
} else if (num2 == num3) {
    if (num3 > num1) {
        alert("Second and third number are the bigest!")
    }
} else //случай, когда все 3 одинаковые
{
    alert("you enter 3 identical numbers.")
}
