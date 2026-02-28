

# 📘 JavaScript Basics Notes

## 🔰 1. JavaScript কী?

JavaScript হলো একটি programming language যা ওয়েব পেজকে dynamic ও interactive করে।

✔ ব্যবহার:

- Button click handling

- Form validation

- DOM manipulation

- API থেকে data আনা



---

## 🔰 2. JavaScript কোথায় লেখা হয়?

- ✔ HTML এর ভিতরে

<script>
  console.log("Hello");
</script>

- ✔ External file

<script src="script.js"></script>


---

## 🔰 3. Output দেখানোর উপায়
```
console.log("Hello");      // Console
alert("Hi");               // Popup
document.write("Text");    // Web page
```

---

## 🔰 4. Variables (ভ্যারিয়েবল)

ডাটা সংরক্ষণ করতে ব্যবহার হয়।
```
let name = "Rahim";
const age = 25;
var city = "Dhaka";
```
✔ পার্থক্য

- Keyword	পরিবর্তনযোগ্য	Scope

- let	✔	Block
- const	❌	Block
- var	✔	Function



---

## 🔰 5. Data Types
```
let name = "Ali";      // String
let age = 20;          // Number
let isStudent = true;  // Boolean
let x = null;          // Null
let y;                 // Undefined
```

---

## 🔰 6. Operators

✔ Arithmetic
```
+  -  *  /  %  **
```
✔ Comparison
```
==   ===   !=   !==   >   <
```
✔ Logical
```
&&   ||   !
```

---

## 🔰 7. Condition (শর্ত)
```
let age = 18;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```
✔ else if
```
if (score >= 80) {
  console.log("A");
} else if (score >= 60) {
  console.log("B");
} else {
  console.log("Fail");
}
```

---

## 🔰 8. Loops (লুপ)

✔ for loop
```
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```
✔ while loop
```
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

---

## 🔰 9. Functions

✔ Function Declaration
```
function greet() {
  console.log("Hello");
}
greet();

✔ Parameter & Return

function add(a, b) {
  return a + b;
}
console.log(add(2, 3));
```
✔ Arrow Function
```
const add = (a, b) => a + b;
```

---

## 🔰 10. Arrays
```
let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits[0]);   // Apple
fruits.push("Orange");    // add
fruits.pop();             // remove
```

---

## 🔰 11. Objects
```
let person = {
  name: "Rahim",
  age: 25,
  city: "Dhaka"
};

console.log(person.name);
```

---

## 🔰 12. DOM (Document Object Model)

✔ Element ধরার উপায়
```
document.getElementById("id");
document.getElementsByClassName("class");
document.querySelector(".class");
document.querySelectorAll("p");
```
✔ Content পরিবর্তন
```
document.getElementById("title").innerText = "New Title";
```

---

## 🔰 13. Event Handling
```
document.getElementById("btn").addEventListener("click", function() {
  alert("Button clicked");
});
```

---

## 🔰 14. Class Manipulation
```
element.classList.add("active");
element.classList.remove("active");
element.classList.toggle("active");
```

---

## 🔰 15. Template Strings

```let name = "Ali";
console.log(`Hello ${name}`);
```

---

## 🔰 16. ES6 Features (Basic)

- ✔ let & const
- ✔ Arrow functions
- ✔ Template strings
- ✔ Destructuring
- ✔ Spread operator

```let arr = [1, 2, 3];
let newArr = [...arr];
```

---

## 🔰 17. Nested Concepts

- ✔ Nested if
- ✔ Nested loop
- ✔ Nested object
```
let user = {
  name: "Ali",
  address: {
    city: "Dhaka"
  }
};
```

---

## 🔰 18. Common Errors

- ❌ = instead of ==
- ❌ ভুল selector
- ❌ script আগে load না হওয়া
- ❌ null element access


---

## 🔰 19. Best Practices

- ✔ meaningful variable names
- ✔ const ব্যবহার করো
- ✔ console দিয়ে debug করো
- ✔ code ছোট ছোট function এ ভাগ করো
