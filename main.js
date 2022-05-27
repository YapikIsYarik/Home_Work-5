"use strict"

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];


function GetPairs(students, themes) {
   let sortStud = students.slice(0);
   //let sortStud = students.concat(); //робить те саме що і slice(0) але працює повільніше
   //міняю послідовність імен в масиві так шоб була послідовність хлопець,дівчина..
   sortStud.splice(1, 2, "Олена", "Ігор");
   let pairs = [];
   for (let i = 0; i < sortStud.length / 2; i++) {
      pairs.push([sortStud[i * 2] + " i " +
         sortStud[i * 2 + 1], themes[i], getRandom()]);
   }
   return pairs;
}
function getRandom() {
   return Math.round(Math.random() * (5 - 1) + 1);
}
function GetMarks(marks) {
   let studentMark = [];
   for (let i = 0; i < students.length; i++) {
      studentMark.push([students[i], marks[i]]);
   }
   return studentMark;
}
console.log(GetPairs(students, themes));
console.log(GetMarks(marks));
