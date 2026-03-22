

// let sentence = "I love Bangladesh very much. JS is fun. coding is fun Fun fun";

// let arrayOfSentence = sentence.toLowerCase().trim().split(" ");
// function word_freq_counter(Sentence){

//     let objectOfWords = {};
// for (const word of Sentence){

//     if(objectOfWords.hasOwnProperty(word)){
//         objectOfWords[word] ++; // এখানে [] ব্রেকেট কেন আসল বুঝি নি । 
//     }else{
//         objectOfWords[word] = 1;
//     }
// }
// return objectOfWords;

// }

// console.log(word_freq_counter(arrayOfSentence));


// Problem 2: Student Marks Analyzer
// Function name: analyzeMarks(marksObj)
// Statement:
//  Return total marks, average marks, highest scoring subject, and lowest scoring subject.
// Test case 1
// Input: { math: 78, english: 65, physics: 88, bangla: 55 }
// Output: { total: 286, average: 71.5, highest: "physics", lowest: "bangla" }


// function analyzMarks(marksObj){
//     let output = {};
//     let total =0;
//     let average = 0;
//     let highest = -Infinity;
//     let highest_subject =null;
//     let lowest = Infinity;
//     let lowest_subject = null;
    
//     for(const subject in marksObj){
//         let mark = marksObj[subject];
//         // console.log(mark);
//         // console.log(subject);
//         total += marksObj[subject];
//        average = total / Object.keys(marksObj).length;  // অব্জেক্টের মধ্যে লেন্থ বলে কোন প্রোপার্টি নেই। তাই এভাবে আমরা অব্জেক্টকে এরে বানিয়ে এরপরে সেটার লেন্থ নিচ্ছি। 
//       if(mark > highest ){
//         highest = mark;
//         highest_subject = subject; // compare হবে number এর সাথে number. name store হবে string হিসেবে অন্য property-তে
        
//       }
//       if(mark < lowest){
//         lowest = mark;
//         lowest_subject = subject;
//       }
//     }
//     return output = {
//         total,
//         average,
//         highest_subject,
//         lowest_subject
//     };
// }

// let marks = { math: 78, english: 65, physics: 88, bangla: 55 };

// console.log(analyzMarks(marks));


/**
 * Problem 3: Password Strength Checker
Function name: checkPassword(password)
Rules:
Length must be at least 8


Must contain at least 1 number


Must contain at least 1 uppercase letter


Must not contain spaces


Test case 1
Input:  "helloWorld"
Output:
{ valid: false, reasons: ["missing number"] }

*/

// function checkPassword(inputedPassword){
//   let output = {};
//   let valid = false;
//   let reasons =[];
//   let hasNumber = false;
//   let hasUpperCase = false;
//   let hasNoSpace = false;
//   let hasLength = false;

//   // Validation rules independent হয়, তাই if–else না, আলাদা আলাদা if ব্যবহার করতে হয়।

//   if(inputedPassword.length >= 8){  // at least 8 মানে >= 8, > 8 না — boundary value include করতে হয়।
//         hasLength = true;
//     }
//      if(!inputedPassword.includes(" ")){
//        hasNoSpace = true;
//     }

//   for(const char of inputedPassword){
//     // console.log(char);
//       if(char >= "0" && char <= "9"){  // String কে number এর সাথে compare করা যায় না (char >= 0 ভুল)।
//         hasNumber = true;
//       }
//        if(char >= "A" && char <= "Z"){
//         hasUpperCase = true;
//     }
//   }

//   // 

//   if(hasNumber === false){
//     reasons.push("Missing number");

//   }
//   if(hasUpperCase === false){
//     reasons.push("Must use at least 1 upercase.");
//   }
  
//   if(hasNoSpace === false){
//     reasons.push("Space not alowed in password.");
//   }
//    if(hasLength === false){
//       reasons.push("Must use at least 8 characters.");
//   }

//   // সব rule check শেষ না হওয়া পর্যন্ত valid set করা যাবে না।
//   if(reasons.length === 0){   // Array খালি কিনা check করতে হয় length দিয়ে
//     valid = true;  // Loop এ কাজ detect করা, decision নেওয়া loop এর বাইরে।
//   }

//   return output = {
//     valid,
//     reasons,
//   }
// }

// let inputedPassword = "helloWorld9";
// console.log(checkPassword(inputedPassword));  // function-এর ভেতরে loop string দিয়েই করা যায়। ejonny split dorkar nei. 



/**
 * Problem 4: Shopping Bill Calculator
Function name: calcBill(prices, items)
Statement:  Calculate total bill amount and count how many times each item appears.
Test case 1
Input: 
     prices = { rice: 70, oil: 180, egg: 12, sugar: 90 };
     items = ["egg", "egg", "rice", "oil", "egg", "sugar"];

Output:
{
  total: 376,
  itemCount: { egg: 3, rice: 1, oil: 1, sugar: 1 }
}

*/

// function calcBill(prices, items){
//     let totalBill =0;
//     let item_quantity ={};
//     let output = {};
//     for(const item_name in prices){ // অব্জেক্টে ফর অফ লুপ চালানো যায় না। ফর ইন চালাতে হয়। 
//       // console.log(price);
//        totalBill += prices[item_name];
      
//     }

//     for(const item of items){
//       console.log(item);
//       if(item_quantity.hasOwnProperty(item)){  // item_quantity এর মধ্যে আগে থেকেই যদি লুপ থেকে আসা item এর অনুরুপ থাকে, তাহলে item_quantity এর মান ১ বাড়াও। 
//         item_quantity[item] ++;
//       }else{
//         item_quantity[item] = 1;
//       }
//     }
//   return output = {
//     totalBill,
//     item_quantity
//   };
// }

//   let prices = { rice: 70, oil: 180, egg: 12, sugar: 90 };
//   let items = ["egg", "egg", "rice", "oil", "egg", "sugar"];

//   console.log(calcBill(prices, items));

  /**
   * Problem 5: Remove Duplicates From Array
Function name: removeDuplicates(arr)
Statement:
 Return a new array where duplicate values are removed, keeping the original order.
Test case 1
Input:
 [5, 3, 5, 2, 3, 9, 2, 7]
Output:
[5, 3, 2, 9, 7]

Test case 2
Input:
 [1, 1, 1, 1]
Output:
[1]
   * */ 

// function removeDuplicates(arr){
//   let output =[];
//   for(const number of arr){
//     if(output.hasOwnProperty(number)){
//       output.replace(number);
//     }else{
//       output.push(number);
//     }
//   }
// return output;
// }

// let inputNumber = [5, 3, 5, 2, 3, 9, 2, 7];
// console.log(removeDuplicates(inputNumber));

// Problem 6: Phonebook Prefix Search


// problem-7

function textStats(text){
  let output = {};
  let totalVowel =0;
  let totalConst =0;
  let totalWords = 0;
  let totalCharacters =0;

  for(const char of text){
    
    if(char.trim().length !== 0){  // খালি বাদ দেয়ার পরে যে লেন্থ থাকবে সেটার পরিমান যদি ০ না হয়, তাহলে পরের কাজ কর। আর ভেলু ০ হলে ইনভেলিড। 
      totalCharacters ++;
      "aeiou".includes(char) ? totalVowel++ :  totalConst ++;  // if সরাসরি ternary-এ লেখা যায় না।

    }
  }
 
  let words = text.split(" ");
  for(const word of words){
    totalWords++;
  }

  return output = {
    totalCharacters,
    totalWords,
    totalVowel,
    totalConst
  };

}

let str = "JavaScript is fun to learn" ;

console.log(textStats(str));