// Basic Types
let id: number = 5
let company: string = 'Some Media'
let isPublished: boolean = true

let x: any = 'string'
x = false;

let age: number
age = 54

let ids: number[] = [1,2,3,4,5,6]

// ids.push('hello')

let arr: any[] = [45, '58']

//Tuple
let person: [number, string, boolean] = [1, 'Brad', true]
//Tuple array
let employe: [number, string][]

employe = [
    [1, 'jam'],
    [4, 'vol'],
    [5, 'five']
]

//Union

let p_id: string | number = 22
p_id = '45'

// Enum
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
}

enum Direction2 {
    Up = 'Up',
    Down = 'down',
    Left = 'left',
    Right = 'right'
}

console.log(Direction2.Up)


//Objets
const user: {
    id: number,
    name: string
} = {
    id: 1,
    name: 'John'
}

type User = {
    id: number,
    name: string
}

const myUser: User = {
    id: 345,
    name: 'Vaga'
}

//Type Assertion
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

//Functions 
function addNumber (x: number, y: number) : number {
    return x + y
}

console.log(addNumber(1, 5))

function log(message: string | number): void {
    console.log(message)
}
log(56)

//Interface
interface UserInterface {
    readonly id: number, //can not change value
    name: string,
    age?: number //optional
}

const myUser2: UserInterface = {
    id: 345,
    name: 'Vaga'
}

type Point = number | string
const p1: Point = 34

//-------------------------

interface MathFunc {
    (x:number, y:number):number
    // interface for function that takes two numbers and return number
}

const add: MathFunc = (x:number, y:number):number => x+y
const sub: MathFunc = (x:number, y:number):number => x-y


interface PersonInterface {
    id: number, 
    name: string,
    register(): string
}

//Classes
class Person implements PersonInterface  {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id,
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}

const brad = new Person(23, 'Brad')
const mike = new Person(54, 'Mike')

brad.id = 2

console.log(brad, mike)
console.log(mike.register())


//Subclasses
class Employe extends Person {
    position: string 

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employe(34, 'Shaun', 'Developer')
console.log(emp.register())


//GENERICS

function getArray<T>(items: T[]): T[] {
    return Array().concat(items)
}

// <T> is a placeholder for the type that is defined later on function call


let numAray = getArray<number>([1,2,3,4])
let strAray = getArray<string>(['brad', 'john', 'jill'])





























