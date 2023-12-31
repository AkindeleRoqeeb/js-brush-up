for(let i = 0; i < 10; i++){
    console.log(i)
    // break
}

for(let x = 1; x < 10; x += 2){
    if(x < 10 ){
        console.log("it equal " + x)
        break
    }
    console.log("Total Alphabet " + x)
}

// #############################################################

const items = [2, 3, 4, 5, 6]

for(let m = 0; m <= items.length - 1; m ++ ){
    console.log(items[m])
}

// ################################################################

const property = ["eyes", "leg", "nose", "head", "stomech"]
for(t in property){
    console.log(t)
    console.log(property[t])
}

const capital = {
    a : "brave",
    b : "lonely",
    c : "credited",
    d : "home alone"
}

for( let key in capital){
    // console.log(key + capital[key])
    // console.log(capital[key])
    console.log(key + " : " + capital[key])
}

for(const key in capital){
    console.log(key + " : " + capital[key])
}

const num = [23, 52, 98, 60, 41]
for(const y in num){
    console.log(num[y])
}

console.log("####################################################")
const num1 = [2, 5, 8, 6, 4]

Array.prototype.someMethod = true

for(const y in num1){
    console.log(num1[y])
    console.log(y)
}
console.log("#######################################################")

const arr = ["fred", "bob", "tom"]
console.log(arr)
for(r of arr){
    console.log(r)
}

console.log("#####################################################")

const m = new Map([[3,"black"]])
m.set(1, "black")
m.set(2, "red")

console.log(m)

for(mp of m){
    console.log(mp)
}


const s = new Set()
s.add(1)
s.add(3)
s.add("love")
s.add("tight")

for(st of s){
    console.log(st)
}

console.log("#####################################################################")

let w = 0;
while ( w < 10) {
    // text += "the number is " + w;
    console.log(w);
    w++;
}

let n = 0
let txt = "";
do {
    txt += "the number is " + n;
    n++;
}
while (n < 8)

console.log("#####################################################################")

const car = ["BMW", "volvo", "saab", "ford"];
console.log(car)
let z = 0;
let txt1 = "";

for (;car[z];) {
    txt1 += car[z];
    z++;
}

const carses = ["volvo", "saab", "ford", "BMW"]
let h = 0;
let tdt = "";
// console.log(tdt)

while (carses[h]) {
    tdt += carses[h];
    h++;
}
