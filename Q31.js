let string = "MY NAME IS VANSH GUPTA";
let map = new Map();

for (let character of string) {
    let count = map.get(character) || 0;
    map.set(character, count + 1);
}
console.log("Frequency of each character:");

map.forEach((count, character) => {
    console.log(character + " = " + count);
});