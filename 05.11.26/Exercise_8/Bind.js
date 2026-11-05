const employee = {
    name: 'Евгений',
    position: 'Веб разработчик',
    showInfo() {
        console.log(this.name, this.position);
    }
};

employee.showInfo();

let separateFunc = employee.showInfo;
separateFunc();

let boundFunc = employee.showInfo.bind(employee);
boundFunc();

const employee2 = {
    name: 'Эля',
    position: 'Тестировщик'
};

let boundFunc2 = employee.showInfo.bind(employee2);
boundFunc2();
