//1
function message() {
    console.log("Я учу JavaScript!");
}
message();

//2
const i = "Я учу";
const JS = "JavaScript!";
let lern = function () {
    return i + " " + JS;
};
console.log(lern())

//3
let mes = (i, JS) => i + " " + JS;
console.log(mes("Я учу","JavaScript!"))