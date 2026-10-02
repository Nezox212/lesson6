//1) Создайте массив из 5 чисел.
const numbers = [-3,10,-23,190,17];
//- Добавьте число в конец массива.
numbers.push(18);
//- Удалите число из начала массива.
numbers.shift();
//- Отфильтруйте только чётные числа.
const filtered = numbers.filter((el) => {
    return el % 2 === 0;
});
console.log(filtered);
//- Создайте новый массив, где каждое число умножено на 5.
const mapped = numbers.map((el) => {
    return el * 5;
});
console.log(mapped);
//- Найдите среднее арифметическое всех чисел.
const sumOfNumbers = numbers.reduce((prev, el) => {
    return prev + el;
},0);
console.log( " Среднее арифметическое число массива Numbers = "+ sumOfNumbers / numbers.length);
const sumOfMapped = mapped.reduce((prev, el) => {
    return prev + el;
},0);
console.log( " Среднее арифметическое число массива Mapped = "+ sumOfMapped / numbers.length);
//- Отсортируйте массив по возрастанию.
const sortedNumbers = [...numbers].sort((a, b) => {
    return a - b;
} );
console.log(sortedNumbers);



//2) Создайте массив из 10 знаменитостей (объектов). У каждой знаменитости должны быть ключи name,
// age, role (роль знаменитости, например “singer” если это Майкл Джексон). Знаменитостей подберите
// на своё усмотрение и выполните с массивом текущие действия:

const favorites = [
    {
        name: "Роналду", age: 40, role:"footballPlayer"},
    {
        name: "Майкл Джексон", age: 30, role:"singer"},
    {
        name:"Кристофер Нолан", age:56, role:"screenwriter"},
    {
        name: "Джастин Стейджи", age:38, role:"fighter"},
    {
        name: "Ислам Махачев", age: 34, role:"fighter"},
    {
        name:"Чарльз Оливейра", age:36 , role:"fighter"},
     {
        name:"Пушкин", age:33, role:"writer"},
    {
        name:"Макс Холловей", age:34, role:"fighter"},
    {
        name:"Илия Топурия", age:29, role:"fighter"},
    {
        name:"Джимми Дональдсон", age:28, role:"YouTuber"}]

//- Выведите массив, состоящий только из имён знаменитостей.
const mappedName = favorites.map((el) => {
    return el.name

});

console.log(mappedName);

//- Создайте массив строк в формате: "Michael Jackson is a singer".
const mappedRole = favorites.map((el) => {
    return `${el.name} is a ${el.role}`;
});

console.log(mappedRole);
//- Найдите самого старшего и самого младшего знаменитостей и вычислите разницу в возрасте между ними.

const min = [...favorites].sort((a, b) => a.age - b.age);
const max = [...favorites].sort((a, b) => b.age - a.age);
console.log(max[0].name + " " + max[0].age +" - " + min[0].name + " " + min[0].age + " = " + (max[0].age - min[0].age) + " лет разница");

//- Проверьте есть ли среди них несовершеннолетний.
const ageSome = favorites.some((el) => {
    return el.age < 18;
});
console.log(ageSome);

//- Выведите знаменитостей которым больше 20.
const ageFilter = favorites.filter((el) => {
    return  el.age > 20
});
console.log(ageFilter);