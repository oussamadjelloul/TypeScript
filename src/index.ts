let value; // any type
let all: (number | boolean | string); // variable of number or boolean or string

all = 1;
all = true;
all = 'string';

let myFriends: string[] = ["Mark", "John", "Jane"];


for (let i = 0; i < myFriends.length; i++) {
    console.log(myFriends[i]);
}

console.log("**********************************");

let showMsg = true;
function showDetails(name: string, age: number, salars: number): string {
    if (showMsg) {
        return "Hello " + name + " You are " + age + " years old. Your salery is " + salars + " $"
    }
    return "there is no data to show"
}

console.log(showDetails("Mark", 25, 2000));

function showData(name: string = "Un", age: number = 0, country?: string) {
    return `${name}--${age}--${country}`
}

function showData1(name: string = "Un", age: number = 0, country: string = "Un") {
    return `${name}--${age}--${country}`
}
console.log(showData("oussama djelloul", 25, "algeria"));
console.log(showData(undefined, 25, "algeria"));
console.log(showData("oussama djelloul", 25));
console.log(showData1("oussama djelloul", 25));


console.log("**********************************");

function addAll(...nums: number[]): number {
    let sum = 0;
    // for (let i in nums) {
    //     sum += nums[i];
    // }
    nums.forEach((num: number) => { sum += num });
    return sum;
}
console.log(addAll(1, 2, 3, +true));

console.log("**********************************");

type direction = {
    up: string,
    down: string,
    left: string,
    right: string
}
type directions = direction & {
    center: string
}


function move(direction: direction) {
    console.log(direction.up);
    console.log(direction.down);
    console.log(direction.left);
    console.log(direction.right);
}

function move1(direction: directions) {
    console.log(direction.up);
    console.log(direction.down);
    console.log(direction.left);
    console.log(direction.right);
    console.log(direction.center);
}

move({ up: "up", down: "down", left: "left", right: "right" });
move1({ up: "up", down: "down", left: "left", right: "right", center: "center" });


console.log("**********************************");

// tuple type
type article = { id: number, title: string, body: string, author: string }
var articles: article[] = [];
// when we use readonly we can't change the value of the variable
articles.push({ id: 1, title: "title", body: "body", author: "author" });

console.log(articles)


console.log("**********************************");


function alwayLog(message: string) {
    while (true) {
        console.log(message);
    }
    // this code will never run
    // return "done";
}

enum Kids {
    five = 25,
    seven = 20
    , ten = seven + 3
}


enum Level {
    kids = Kids.ten,
    easy = 8,
    medium = 6,
    hard = 4
}


let mylvl: string = "easy"
if (mylvl === 'easy')
    console.log(`your level is ${mylvl} and your score is ${Level.kids}`);

// let myImg = <HTMLImageElement><unknown>document.getElementsByClassName('elm-img')

let dd: any = '1000';
console.log((dd as string).repeat(10))

// let al_l :string |number =100 ; 
console.log("**********************************************************************")
type A = {
    one: string,
    two: number,
    three: boolean
}

function getAct(btn: A): void {
    console.log(`Hello ${btn.one}`)
    console.log(`Hello ${btn.two}`)
    console.log(`Hello ${btn.three}`)
}
getAct({ one: 'one', two: 1000, three: true });

interface User {
    id: number,
    username: string,
    country: string,
    getName(): string,
    getId: () => number,
    getNameCountry(name: string, country: string): string
}
//// i use extends ;
interface Moderator extends User {
    role: string | boolean;
}

/// this exemple you can use when you are in another page of your sit web . 


interface User {
    age?: number
}



let user: User = {
    id: 1,
    username: "oussama djelloul",
    country: "algeria",
    getName() {
        return this.username
    },
    getId() {
        return this.id
    },
    getNameCountry(name, country) {
        return `your name is ${name} and your country is : ${country}`
    }
}

console.log(user.getNameCountry('oussama djelloul', "algeria"))


console.log("**********************************************************************")

enum COUTNRY {
    algeria = "Algeria",
    tunisia = "Tunisia",
    morroco = "Morroco",
    egypt = "Egypt",
    libya = "Libya"
}

class User1 {
    // private u: string;
    // private s: number;
    // private c: COUTNRY;
    public static creater: number = 0;
    constructor(private _userName: string, private _salery: number, protected country: COUTNRY) {
        this._userName = _userName;
        this._salery = _salery;
        this.country = country;
        User1.creater++;
        // this.creater++;
    }
    public getCreater(): void {
        console.log('your nomber of object ', User1.creater)
    }
    public get userName(): string {
        return this._userName;
    }
    public set userName(value: string) {
        this._userName = value;
    }
    Ms(): string {
        return `your name is ${this._userName} and your salery is ${this._salery} and your country is ${this.country}`
    }
}

const user1 = new User1("oussama djelloul", 2000, COUTNRY.algeria);
const user2 = new User1("oussama djelloul", 2000, COUTNRY.algeria);

console.log(user1.Ms());

console.log('your nomber of object ', User1.creater);
user1.getCreater();





console.log("*************************************************************************");

class Player {

    constructor(public name: string) {
        this.name = name
    }
    attck(): void {
        console.log("attacker ")
    }
}


class Amazon extends Player {
    constructor(name: string, public spears: number) {
        super(name)
    }
    override attck(): void {
        console.log("attacking by spears ")
    }
}

function returnType<T>(arg: T): T {
    return arg;
}

function returnMultiType<T, S>(arg1: T, arg2: S): string {
    return `${typeof arg1} and ${typeof arg2}`;
}
console.log(returnType<number>(1000));
console.log(returnType<number[]>([1, 2, 3, 4]));
console.log(returnMultiType<number[], string>([1, 2, 3, 4], "oussama"));

class Emply<T> {
    constructor(public name: T) { }
    public Ms(v: T) {
        return v
    }
}

let e1 = new Emply<string | number>("oussama");
console.log(e1.Ms(1000))

console.log("*********************************************************************************");

interface Book {
    itemName: string,
    price: number,
    isb: number
}
interface Game {
    itemName: string,
    price: number,
    style: string
}

class Collection<T>{
    public data: T[] = []
    constructor(item: T) {
        this.data.push(item)
    }
}

let item1 = new Collection<Book>({ itemName: "book", price: 1000, isb: 100 })
let item2 = new Collection<Game>({ itemName: "game", price: 1999, style: "Action" })

console.log(item1.data)
console.log(item2.data)

