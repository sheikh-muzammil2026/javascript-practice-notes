
// js-problems-part2-practice-tasks


// Task -1:
// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

// function lowest_number(numbers){
//     let min =numbers[0];
//     for(let x=1; x < numbers.length; x++ ){
//         if(numbers[x] < min){
//             min = numbers[x];
//         }
//     }
//     return min;
// }

// let numbers = [167, 190, 120, 165, 137];
// console.log(lowest_number(numbers));

// tip-2
let max = Math.max(167, 190, 120, 165, 137,200);
console.log(max);

// Task -2:
// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallest_name(friends)
{
    let smallest = friends[0];

    for (let x =1; x < friends.length; x++){

        if(smallest.toLowerCase().length > friends[x].toLowerCase().length){   // ০ নং ইন্ডেক্স এর লেন্থ থেকে যদি এক্স ইন্ডেক্সের লেন্থ ছোট হয় ( তাহলে এক্স ইন্ডেক্সকেই প্রিন্ট কর। )
            smallest = friends[x];   //  friends[x] মানে হল, এক্স নং ইন্ডেকের নেইম ভেলু আকারে সেট করে দাও।  
        }
    }
    return smallest;
}
let friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
console.log(smallest_name(friends));


/**
 * Task-3:
Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
 **/ 

// // bigginer
// function calculateElectronicsBudget(num1, num2, num3){
//     let laptop = 35000;
//     let tablet = 15000;
//     let mobile = 20000; 
//     return (laptop * num1) + (tablet * num2) + (mobile * num3);

// }

// console.log(calculateElectronicsBudget(2,3,4));

// advance solution

function calculateElectronicsBudget(products){
    let electronicsPrice = 0;
    for(const product of products){
       
        electronicsPrice += product.price;
    }

    return electronicsPrice;

}

let totalBudget = [
    {name: 'leptop', price: 35000},
    {name: 'tablet', price: 15000}, 
    {name: 'mobile', price: 20000},
 ];

console.log(calculateElectronicsBudget(totalBudget));


/**
 * Task-4:
You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

Input


    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];
*/ 

function findAveragePhonePrice(phonesdetails){
    let total =0;
    for (const perprice of phonesdetails){
        total += perprice.price;
        
    }

    return total /phonesdetails.length;
}

const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];

console.log(findAveragePhonePrice(phones));


/**
 * Task -5: (Hard)
For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];

*/ 

function getTotalSalary(employeesDetails){
    let totalExpenses =0;
    for(const perEmployeeDetails of employeesDetails){
        totalExpenses += perEmployeeDetails.starting + (perEmployeeDetails.experience * perEmployeeDetails.increment)
    }
    return totalExpenses;
}


const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];

console.log(getTotalSalary(employees));
