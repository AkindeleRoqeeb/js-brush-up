// const object = {name: 'abdul', age : 8675, course : 'medicine'}

// console.log(object);
// console.log(object.name)

// const get = document.getElementById('Javascript').innerHTML = object.name

// console.log(get)


// const h1 = document.createElement("h1")
// h1.textContent = "man is always awake"
// h1.className = "name"

// console.log(h1)

// function cal(a, b){
//     return a + b
// }

// cal(23,45)

// const fruits = ["orange", "pawpaw", "mango"]

// const [fruit1, fruit2, fruit3] = fruits
// console.log(fruit1)
// console.log(fruit2)
// console.log(fruit3)


// class className {
//     constructor(name, year){
//         this.name = name;
//         this.year = year;
//     }
// }

// const class1 = new className("toyota", 2334)
// const class2 = new className("honder", 2022)

// console.log(class1)
// console.log(class2)

class rooms{
    constructor(name, duration){
        this.name = name
        this.duration = duration
    }

    new(){
        // const add = 23 + 78
        const date = new Date()
        return date.getFullYear() - this.duration
    }
}

const r1 = new rooms("lateef", 2001)
console.log(r1)

const r2 = document.querySelector(".demo").innerHTML = "helping other get you " + r1.new() + " years"
console.log(r2)


class Cars{
    constructor(name, year){
        this.name = name
        this.year = year
    }

    update(run){
        return run - this.year;
    }
}

const date = new Date()
let years = date.getFullYear()

c1 = new Cars("baul", 2021)
// c2 = c1.update()
console.log(c1)
console.log(c1.year)
// console.log(c2);

document.querySelector(".cars").innerHTML = `we have only  ${c1.update(years)} remaining`

function execute() {
    return function() {
        console.log("i'm roqeeb coder")
        let cal = 35 + 23
        console.log(cal)
    }
}

const result = execute()
result()


switch(new Date().getDay()){
    case 0:
        day = "it's sunday"
        break
    case 1:
        day = "it's monday"
        break
    case 2:
        day = "it's tuesday"
        break
    case 3:
        day = "it's wenesday"
        break
    case 4:
        day = "it's thurday"
        break
    case 5:
        day = "it's friday"
        break
    case 6:
        day = "it's saturday"

}

console.log(day)

date = new Date()
days = date.getDay()

switch(days){
    case 0:
        day = "it's sunday"
        break
    case 1:
        day = "it's monday"
        break
    case 2:
        day = "it's tuesday"
        break
    case 3:
        day = "it's wenesday"
        break
    case 4:
        day = "it's thurday"
        break
    case 5:
        day = "it's friday"
        break
    case 6:
        day = "it's saturday"

}

console.log(day)


switch(new Date().getDay()){
    // case 3:
    // case 4:
    case 6:
        resent_day = "weekend ahead"
        break
    // case 5:
    // case 2:
    case 0:
        resent_day = "today is friday"
        break
    default:
        resent_day = "it's sunday"
}
// document.querySelector(".dome").innerHTML = resent_day
console.log(resent_day)

names = "normal"
sin = "none"

num = 10

switch(num){
    default:
        tell = "it's less the bro"
        break
    case num > 20:
        tell = "you're high"
        break
    case num != 50:
        tell = "not close"
}
console.log(tell)


let d = 0
switch (d) {
    case 0:
        light = "OFF"
        break;
    case 1:
        light = "ON"
    default:
        light = "NONE ONE"
}

console.log(light)

let n
switch (n = 2){
    case n === 3:
        console.log("lighter mood")
        break
    case n != 3:
        console.log("mumu man")
        break
    default:
        console.log("man man ")
}


