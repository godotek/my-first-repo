const employee = {
  name: 'Евгений',
  position: 'Разработчик',
  department: 'IT',
  showCard() {
      console.log(this.name, this.position, this.department);
  }
};

employee.showCard();

let separateMethod = employee.showCard;
separateMethod();

let boundMethod = employee.showCard.bind(employee);
boundMethod();

function showCardInCity(city) {
  console.log(this.name, this.position, this.department, city);
}

showCardInCity.call(employee, 'Москва');
showCardInCity.apply(employee, ['Питер']);

let button = document.querySelector('#testBtn');

button.addEventListener('click', function(event) {
  console.log(this);
  console.log(event.currentTarget);
});

button.addEventListener('click', (event) => { //функция с обрабьоткой клика
  console.log(this);
  console.log(event.currentTarget);
});
