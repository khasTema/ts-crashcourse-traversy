"use strict";
let id = 5;
let company = 'Some Media';
let isPublished = true;
let x = 'string';
x = false;
let age;
age = 54;
let ids = [1, 2, 3, 4, 5, 6];
let arr = [45, '58'];
let person = [1, 'Brad', true];
let employe;
employe = [
    [1, 'jam'],
    [4, 'vol'],
    [5, 'five']
];
let p_id = 22;
p_id = '45';
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "down";
    Direction2["Left"] = "left";
    Direction2["Right"] = "right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Up);
const user = {
    id: 1,
    name: 'John'
};
const myUser = {
    id: 345,
    name: 'Vaga'
};
let cid = 1;
let customerId = cid;
function addNumber(x, y) {
    return x + y;
}
console.log(addNumber(1, 5));
function log(message) {
    console.log(message);
}
log(56);
const myUser2 = {
    id: 345,
    name: 'Vaga'
};
const p1 = 34;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id,
            this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(23, 'Brad');
const mike = new Person(54, 'Mike');
brad.id = 2;
console.log(brad, mike);
console.log(mike.register());
class Employe extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employe(34, 'Shaun', 'Developer');
console.log(emp.register());
function getArray(items) {
    return Array().concat(items);
}
let numAray = getArray([1, 2, 3, 4]);
let strAray = getArray(['brad', 'john', 'jill']);
