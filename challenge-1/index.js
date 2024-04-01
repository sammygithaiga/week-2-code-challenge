function firstTrial(str) {
    let mapped = '';
    for (let x = 0; x < str.length; x++) {
        let nje = str[x];
        if (nje == nje.toUpperCase()) {
            mapped += nje.toLowerCase();
        } else {
            mapped += nje.toUpperCase();
        }
    }
return mapped;
}



let input = 'The Boy Was Good Until He Was Killed By the Teacher';
let output = firstTrial(input);
console.log(output);

let main = 'The Quick Brown Fox'
let unmain= firstTrial(main)
console.log(unmain);

let teacher ='Nelson Teaches Very Well'
let student = firstTrial(teacher)
console.log(student);

