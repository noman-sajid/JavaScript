

// 👉 Task:
// Write a function that returns an array of names sorted by age (ascending).

// Expected output:

// ["Sara", "Noman", "Ali"]


const users = {
    a: { name: "Noman", age: 23 },
    b: { name: "Ali", age: 30 },
    c: { name: "Sara", age: 19 }
};

function getNamesSortedByAgeLoop(users) {
  const usersArray = Object.values(users);

  for (let i = 0; i < usersArray.length - 1; i++) {
    for (let j = 0; j < usersArray.length - 1 - i; j++) {
      if (usersArray[j].age > usersArray[j + 1].age) {
        let temp = usersArray[j];
        usersArray[j] = usersArray[j + 1];
        usersArray[j + 1] = temp;
      }
    }
  }

  const result = [];
  for (let i = 0; i < usersArray.length; i++) {
    result.push(usersArray[i].name);
  }

  return result;
}



//very basic problems

for(let i = 0; i<=10 ; i++){
   console.log(i)
}

for(let i = 1; i<= 100; i += 2){
   console.log(i)
}


for(let i = 0 ; i <=10 ; i++){
   let row = "7 *" + i + " =  " + 7 * i;
   console.log(row)
}

