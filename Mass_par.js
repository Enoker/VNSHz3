var har = []; //Вид-0; Порода-1; Кличка.-2; Год р.-3; Кол. лет-4.
var i = 0;
var contin;
while (i<5) {
har[i*5] = prompt("Введите вид домашнего животного", "кошка");
console.log(har[i*5]);
alert("У Вас " + har[i*5]);
har[1+(i*5)] = prompt("Введите породу животного:","британская" );
console.log(har[1+(i*5)]);
alert("Порода вашего питомца: " + har[1+(i*5)]);
har[2+(i*5)] = prompt("Введите кличку животного");
console.log(har[2+(i*5)]);
alert("Кличка животного " + har[2+(i*5)]);
har[3+(i*5)] = prompt("Введите год рождения");
console.log(har[3+(i*5)]);
har[4+(i*5)] = 2022 - har[3+(i*5)];
alert("Вашему животному " + har[4+(i*5)] + " лет");
console.log(har[4+(i*5)]);
contin = confirm("Хотите продолжить?");
if (contin==0) break;
i++;
}
var j = 0;
while (j<=i) {
    alert("У Вас " + har[i*5] + ", породы " + har[1+(i*5)] + " по кличке " + har[2+(i*5)] + ", которому "+ har[4+(i*5)] + " лет.");
    i--
}