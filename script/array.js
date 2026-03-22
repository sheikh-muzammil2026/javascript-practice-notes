
/**
 * Task 1
Write a JavaScript code to reverse the array colors without using the reverse method.

Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']
*/
console.clear();
const colors = ['red', 'blue', 'green', 'yellow', 'orange']
console.log(colors.reverse());

/**
 * Task 2
Write a JavaScript code to get the even numbers from an array using any looping technique.

Input: const numbers = [12, 98, 5, 41, 23, 78, 46];
*/
let numb = [12, 98, 5, 41, 23, 78, 46];
for (const num of numb){
    if(num % 2 == 0){
        console.log(num);
    }
}

/**
 * Task 3
Use a for...of loop to concatenate all the elements of an array into a single string.

Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
*/

let sum = ['Tom', 'Tim', 'Tin', 'Tik'];
let khali ="";
for(const som of sum){  
    khali +=som;
}
console.log(khali);

/**
 * Task 4 (Hard)
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
*/

const statement = 'I am a hard working person';

let stm1 = statement.split(" ");
let part = stm1.reverse();
let output = "";
for (const out of part){
    output += out + " ";
}
console.log(output);

// reverse করার পর join() লাগে string বানাতে

