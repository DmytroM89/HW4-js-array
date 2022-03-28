console.log('------------- # 5');
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}
ask(
    "Вы согласны?",
    () => console.log("Вы согласились."), // нужно обновить данное место
    () => console.log("Вы отменили выполнение.") // нужно обновить данное место
);

console.log('------------- # 6');
console.log('my-short-string'.split('-'));

console.log('------------- # 7');
console.log(['JavaScript', 2015].join(' '));

console.log('------------- # 8');
let users = [
    {id: 1, name: "Vic", age: 21},
    {id: 2, name: "Petya", age: 30},
    {id: 3, name: "Jon", age: 5}
];
console.log(users.filter((user, idx, arr) => user.age < 20));

console.log('------------- # 9');
// Массив users есть выше, чтобы не повторять
let names = users.map((user) => user.name);
console.log(names);

console.log('------------- # 10');
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (a <= arr[i] <= b) {
            arr.splice(i, 1);
        }
    }
    /*arr.forEach((item, i, arr) => {
        if (a <= item <= b) {
            arr.splice(i, 1);
        }
    });*/
}
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
console.log(arr) ;

console.log('------------- # 11');
function strToArr(str, separator) {
    return str.split(separator);
}
console.log(strToArr('Лишние аргументы не вызовут ошибку', ' '));

console.log('------------- # 12');
function slArray(arr, startIndex, endIndex) {
    return arr.slice(startIndex, endIndex);
}
let arrT12 = [5, 3, 8, 1];
let range = slArray(arrT12, 1, 4);

console.log( range );
console.log( arrT12 );

console.log('------------- # 13');
function sum(...args) {
    let calc = 0;
    for (let arg of args) calc += arg;
    return calc;
}
console.log(sum(1, 5, 4, 9, 2, 6, 50));
