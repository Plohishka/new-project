let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
let a1 = ("Введите обязательную статью расходов в этом месяце", ""),
    a2 = ("Во сколько обойдется?", ""),
    a3 = ("Введите обязательную статью расходов в этом месяце", ""),
    a4 = ("Во сколько обойдется?", "");
    appData.expenses.a1 = a2;
    appData.expenses.a3 = a4;
    alert(appData.budget / 30);
