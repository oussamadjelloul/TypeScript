"use strict";
let value;
let all;
all = 1;
all = true;
all = 'string';
let myFriends = ["Mark", "John", "Jane"];
for (let i = 0; i < myFriends.length; i++) {
    console.log(myFriends[i]);
}
console.log("**********************************");
let showMsg = true;
function showDetails(name, age, salars) {
    if (showMsg) {
        return "Hello " + name + " You are " + age + " years old. Your salery is " + salars + " $";
    }
    return "there is no data to show";
}
console.log(showDetails("Mark", 25, 2000));
function showData(name = "Un", age = 0, country) {
    return `${name}--${age}--${country}`;
}
function showData1(name = "Un", age = 0, country = "Un") {
    return `${name}--${age}--${country}`;
}
console.log(showData("oussama djelloul", 25, "algeria"));
console.log(showData(undefined, 25, "algeria"));
console.log(showData("oussama djelloul", 25));
console.log(showData1("oussama djelloul", 25));
console.log("**********************************");
function addAll(...nums) {
    let sum = 0;
    nums.forEach((num) => { sum += num; });
    return sum;
}
console.log(addAll(1, 2, 3, +true));
console.log("**********************************");
function move(direction) {
    console.log(direction.up);
    console.log(direction.down);
    console.log(direction.left);
    console.log(direction.right);
}
function move1(direction) {
    console.log(direction.up);
    console.log(direction.down);
    console.log(direction.left);
    console.log(direction.right);
    console.log(direction.center);
}
move({ up: "up", down: "down", left: "left", right: "right" });
move1({ up: "up", down: "down", left: "left", right: "right", center: "center" });
console.log("**********************************");
var articles = [];
articles.push({ id: 1, title: "title", body: "body", author: "author" });
console.log(articles);
console.log("**********************************");
function alwayLog(message) {
    while (true) {
        console.log(message);
    }
}
var Kids;
(function (Kids) {
    Kids[Kids["five"] = 25] = "five";
    Kids[Kids["seven"] = 20] = "seven";
    Kids[Kids["ten"] = 23] = "ten";
})(Kids || (Kids = {}));
var Level;
(function (Level) {
    Level[Level["kids"] = 23] = "kids";
    Level[Level["easy"] = 8] = "easy";
    Level[Level["medium"] = 6] = "medium";
    Level[Level["hard"] = 4] = "hard";
})(Level || (Level = {}));
let mylvl = "easy";
if (mylvl === 'easy')
    console.log(`your level is ${mylvl} and your score is ${Level.kids}`);
let dd = '1000';
console.log(dd.repeat(10));
console.log("**********************************************************************");
function getAct(btn) {
    console.log(`Hello ${btn.one}`);
    console.log(`Hello ${btn.two}`);
    console.log(`Hello ${btn.three}`);
}
getAct({ one: 'one', two: 1000, three: true });
let user = {
    id: 1,
    username: "oussama djelloul",
    country: "algeria",
    getName() {
        return this.username;
    },
    getId() {
        return this.id;
    },
    getNameCountry(name, country) {
        return `your name is ${name} and your country is : ${country}`;
    }
};
console.log(user.getNameCountry('oussama djelloul', "algeria"));
//# sourceMappingURL=index.js.map