
// Simple function Related Practice Tasks


// task-1

function multiply (num1, num2, num3, num4){
    return num1 * num2 * num3 * num4;

}

console.log(multiply (2,3,4,5));


// task-2

function task_2(number){
    if(number % 2 == 0){
        return number / 2;
    }else {
        return number * 2;
    }

}

console.log(task_2(33));

// Task-2 ভুলগুলো

// Even number check-এ % ব্যবহার করেছো কিন্তু divide (/) করা দরকার ছিল।

// Odd check-এ !number % 2 == 0 ভুল → সঠিক হবে number % 2 !== 0।

// Extra else { return "zero"; } দরকার নেই → সব number হয় odd বা even।


function make_avg(arr) {
    let add = 0;
    for (let x=0; x <arr.length; x++){
        add += arr[x];
    }
    return add / arr.length;

}

let arr = [10,20,30,40,50,60];
console.log(make_avg(arr));



// Task-3:
// Write a function to count the number of vowels in a string.

function count_vowel(str){
    let vowelList = "aeiou";
    let count= 0;
    for(let x=0; x <str.length; x++){
        if(str.includes(x) === vowelList.includes(str[x])){
            count++;
        }
    }

    return count;
}

let str = "Helo Bnangladesh"

console.log(count_vowel(str));



// homework; smallest number by for of loop

function min_number(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(min < num)
            min = num;

    }
    return min;
}

let totalnumers = [10,20,30,40,50,60,70,80];
console.log(min_number(totalnumers));




// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(binary){

    let count =0;
    for (let x =0; x < binary.length; x++){
       
        if( binary[x] === "0"){   //binary[x] মানে হলো: string binary এর x নাম্বার index-এ থাকা character।
            count ++;
        }
        
    }
    
     return count;
}

let binary = "10101010101010101";
console.log(count_zero(binary));


//Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd


// function odd_even(number){
//     return (number % 2 == 0) ? "Even" : "Odd";

// }
// let number = 90;

// console.log(odd_even(number));


// js-problems-part1-practice-tasks
// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.
// sample-input: numbers = [5,6,11,12,98, 5]
// find: 5
// output: 2
// sample-input:
// numbers = [5,6,11,12,98, 5]
// find: 25
// output: 0

function repeated_number(numbers,find){
    let count =0;
    for(let x=0; x < numbers.length; x ++){
        if(numbers[x] === find){
            count++;
        }

    }
    return count;
}

let numbers = [5,6,11,12,98, 5];
console.log(repeated_number(numbers,5));

