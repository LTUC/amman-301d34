let people = ['Waleed', 'Ahmed', 'Mohammed', 'Fatima', 'Sedrah'];

// for (let i = 0; i < people.length; i++) {
//   if (people[i] === 'Mohammed') {
//     break;
//   }
//   console.log(people[i]);
// }

// for (let i = 0; i < people.length; i++) {
//   if (i === 2) {
//     continue;
//   }
//   console.log(people[i]);
// }


// function findIt(arr, pos = 0) {
//   for (let i = 0; i < arr.length; i++) {
//     if (i === pos) {
//       return arr[i];
//     }
//   }

//   return null;
// }

// console.log(findIt(people, 1));

// people.forEach((item, idx) => {
//   console.log(item)
// })

let process = (item, idx) => { console.log(item, idx) };

people.forEach(process)
