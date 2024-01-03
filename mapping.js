let _map = new Map().set("abdul", 826)
console.log(_map)

let fruit = new Map()

const _fruit = fruit.set(22, "light", "dark")
const _fruit1 = fruit.set("carrot", 23)

for(n of fruit){
    console.log(n)
}
console.log(_fruit)

let l = 0
while(l < fruit){
    console.log(l)
    l++;
}

console.log(l)

const car = new Map([
    ["Bmw", 500],
    ["toyota", 42],
    ["volvo", 23],
])

let del = car.delete("Bmw")

console.log(del)
console.log(car)

const DATA = [
    {id : 1, title : "first"},
    {id : 2, title : "second"},
    {id : 3, title : "third"},
    {id : 4, title : "fourth"},
    {id : 5, title : "fifth"}
]
console.table(DATA)

const upperData = DATA.map(el => el.title.toUpperCase())
console.table(upperData)

const modeloData = DATA.filter(el => el.id % 2)
const modeloData1 = DATA.filter(el => el.id % 2 === 0)

console.table(modeloData)
console.table(modeloData1)

const caracterArr = [
    "header",
    "goat",
    "grace",
    "yocks"
]

const copyArr = [...caracterArr]
copyArr.splice()

console.table(copyArr)
