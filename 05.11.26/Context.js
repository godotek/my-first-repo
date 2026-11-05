const student1 = { name: 'Евгений', group: 'ВЕБ-25' };
const student2 = { name: 'Степан', group: 'ВЕБ-26' };

function showInfo() {
    console.log(this.name, this.group);
}

student1.showInfo = showInfo;
student2.showInfo = showInfo;

student1.showInfo();
student2.showInfo();

let lostContext = student1.showInfo;
lostContext();