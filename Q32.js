let array = [10, 20, 70, 40, 60,  30, 20, 40, 10, 50];
let sets = new Set(array);
console.log("Elements after removing duplicates:");

sets.forEach(function(value) {
    console.log(value);
});