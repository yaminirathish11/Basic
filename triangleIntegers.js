const arr = [1,2,3,4,5,6];
let final = "";
for (let i=0; i <= arr.length ; i++){
    for (let j = 0; j < i ;j++){
      final += arr[j] + " " ;
    }
    final += "\n";
}
console.log(final);

