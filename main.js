"use strict"

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];


function GetPairs(students, themes) {
   //міняю послідовність імен в масиві так шоб була послідовність хлопець,дівчина..
   students.splice(1, 2, "Олена", "Ігор");
   let pairs = [];
   for (let i = 0; i < students.length / 2; i++) {
      pairs.push([students[i * 2] + " i " +
         students[i * 2 + 1], themes[i], getRandom()]);
   }
   return pairs;
}
function getRandom() {
   return Math.round(Math.random() * (5 - 1) + 1);
}
function GetMarks(marks) {
   let StudentMark = [];
   for (let i = 0; i < students.length; i++) {
      StudentMark.push([students[i], marks[i]]);
   }
   return StudentMark;
}
console.log(GetPairs(students, themes));
console.log(GetMarks(marks));



