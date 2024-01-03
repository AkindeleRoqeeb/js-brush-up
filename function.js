function my_func(fx, fy){
    return fx * fy
}

console.log(my_func(2, 4))

console.log("############################################################")
let x = names(2, 4, 80)

function names(param1, param2, param3){
    return param1 * param3 + param2
    // console.log(param1 * param3 + param2)
}

console.log(x)
let cls = names(23, 5,2)
console.log("life of the bread winner " + cls )

console.log("############################################################")

const jack = (cal1, cal2) => {
    return cal1 + cal2
}

console.log(jack("nelly ", "aisha"))

function local(){
    let carName = "light of the new year "
    const carlocation = 6764
    const join = carName + carlocation
    console.log(join)
}
console.log(local())

const multiplefunc = function multi_cal(gym, time){
    return gym * time
}

let m_c = multiplefunc(23, 9)
console.log(m_c)

// ##########################################################

function callback(f, l, caller){
    var result = f * l
    console.log(result)
}

function logResult(result){
    console.log(result)
}

callback(3, 10, logResult)

console.log("#########################################################")

function calls(n, callers){
    let join = n * 12
    console.log(join)
}
function incoming(join){
    console.log(join)
}

console.log(calls(3, incoming))

console.log("#########################################################")
function execute() {
    return function() {
        console.log("i'm roqeeb coder")
        let cal = 35 + 23
        console.log(cal)
    }
}

const result = execute()
result()

console.log("#########################################################")

const d_fault = function d_parameter(n_mer = "gogo"){
    let greet = "Hello " + n_mer
    return greet
    // console.log(greet)
}
d_fault("client")

console.log(d_fault())
console.log(d_fault("life"))

// const _parameter = d_fault()
// console.log(_parameter)

console.log("#########################################################")
function person(name, age){
    this.name = name
    this.age = age
}

let _person = new person("handy man", 43)

for (i in _person){
    console.log(_person[i])
}
console.log(_person.name)
console.log(_person.age)

console.log("#########################################################")

function createCounter(){
    let count = 1
    return function(){
        return count++;
    }
}

const myCounter = createCounter()
console.log(myCounter())
console.log(myCounter())
console.log(myCounter())
console.log(myCounter())


function performOperation(a, b, operation){
    return operation(a, b)
}
function addNumber(a, b){
    return a + b
}

let _result = performOperation(4, 2, addNumber)
console.log(_result)
