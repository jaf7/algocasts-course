// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//     let steps = [];


//     for (let row = 1; row <= n; row++) {
//         let step = '';
//         while (step.length < row) {
//             step += '#';
//         }
//         while (step.length < n) {
//             step += ' ';
//         }
//         steps.push(step)
//     }
//     steps.forEach( step => console.log(step));
// }


// function steps(n) {
// let steps = [];


//     for (let row = 0; row < n; row++) {
//         let step = '';

//         for (let col = 0; col < n; col++) {
//             if (col <= row) {
//                 step += '#';
//             } else {
//                 step += ' ';
//             }
//         }
//         steps.push(step);
//     }
//     steps.forEach( step => console.log(step) );
// }


// function steps(n) {

//     for (let row = 0; row < n; row++) {
//         let step = '';

//         for (let col = 0; col < n; col++) {
//             if (col <= row) {
//                 step += '#';
//             } else {
//                 step += ' ';
//             }
//         }
//         console.log (step)
//     }
// }

// a for loop can be replaced w a recursive fn calling itself til done

function steps(n, row=0, step='') {

  if (row === n) {
    return;
  }

  if (step.length === n) {
    console.log(step)
    return steps(n, row+1); // return?
  }

//   if (step.length <= row) {
//     step += '#';
//   } else {
//     step += ' ';
//   }
    const add = step.length <= row ? '#' : ' ';

// steps(n, row, step)
  steps(n, row, step+add)
}

module.exports = steps;


