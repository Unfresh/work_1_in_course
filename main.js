'use strict';

let money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD", "2020-10-05");
    console.log(money);

const appData = {
    budget: money,
    timeData:  time,
    expenses : {},
    optionalExpenses: {},
    income: [],
    savings: false
}

let monthCost,
    totalCost;

for (let i = 0; i < 2; i++) {
    monthCost = prompt("Введите стятью расходов в этом месяце");
    totalCost = prompt("Во сколько обойдется?");
}



appData.expenses.monthCost = totalCost;

console.log(appData);

let costPerDay = Math.floor(money/30);

alert(costPerDay);


