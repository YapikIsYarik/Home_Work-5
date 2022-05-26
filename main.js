"use strict"

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];


function GetPairs (students ,themes){
    //міняю послідовність імен в масиві так шоб була послідовність хлопець,дівчина..
    students.splice(1 , 2 ,"Олена", "Ігор");
    let pairs = [];
    for (let i = 0 ;i < 3 ; i++){
        let pair = [];
        pair.push(students[i *2] + " i " +students[i*2+1]);
        pair.push(themes[i])
        pair.push(getRandom())
        pairs.push(pair);
    }
    return pairs;
}

function getRandom() {
    return Math.round(Math.random() * (5 - 1) + 1) ;
}

function GetMarks(marks){
    let StudentMark = [];
    for (let i = 0 ;i < students.length ; i++){
        let mark = [];
        mark.push(students[i]);
        mark.push( marks[i]);
        StudentMark.push(mark);
    }
    return StudentMark
}

console.log(GetPairs(students,themes));
console.log(GetMarks(marks));

