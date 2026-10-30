const students = [
  { name: 'Anna', grade: 5 },
  { name: 'Ivan', grade: 4 },
  { name: 'Anna', grade: 5 },
  { name: 'Petr', grade: 3 },
  { name: 'Olga', grade: 4 },
  { name: 'Ivan', grade: 4 }
];

const jsonStudents = students.map(function(student) {
  return JSON.stringify(student);
});
const uniqueSet = new Set(jsonStudents);
const uniqueStudents = [...uniqueSet].map(function(str) {
  return JSON.parse(str);
});
console.log(uniqueStudents);

const gradeMap = new Map();

uniqueStudents.forEach(function(student) {
  if (!gradeMap.has(student.grade)) {
    gradeMap.set(student.grade, []);
  }
  gradeMap.get(student.grade).push(student.name);
});

gradeMap.forEach(function(names, grade) {
  console.log("Оценка " + grade + ": " + names.join(", "));
});

const uniqueGrades = [...gradeMap.keys()];
console.log(uniqueGrades);