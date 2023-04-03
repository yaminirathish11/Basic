
//right aligned
const arr2 = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < arr2.length; i++) {
  let output = '';
  for (let j = arr2.length - 1; j >= 0; j--) {
    output += (j > i ? '  ' : `${arr2[j]} `);
  }
  console.log(output);
}

console.log("\n");




//left aligned
const arr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < arr.length; i++) {
  let output = '';
  for (let j = i; j >= 0; j--) {
    output += `${arr[j]} `;
  }
  while (output.length < arr.length * 2 - 1) {
    output += ' ';
  }
  console.log(output);
}






//center aligned
const arr1 = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < arr1.length; i++) {
  let output = '';
  for (let j = i; j >= 0; j--) {
    output += `${arr1[j]} `;
  }
  for (let k = arr1.length - i; k > 1; k--) {
    output = ` ${output}`;
  }
  console.log(output);
}
