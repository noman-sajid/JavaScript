//Write a function to print the marks of students in an object using a for looop

let studentMarks = {
    Alice: 85,
    Bob: 92,
    Charlie: 78,
    David: 90
};

function printMarks(marks){
    for (let student in marks){
        console.log(`The marks of the ${student} are :${marks[student]}`)
    }
}

printMarks(studentMarks)

