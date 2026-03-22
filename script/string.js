let thana = new String('bahubal');


// test

// let str = "i love bangladesh very much.";
// let count =0;
// for (const char of str){
//   if(char.includes("a")){
//     count++
//   }
// }
// console.log(count);




function count_vw(sentence_3){
    let vowel =0;
    for(const char of sentence_3){
        if("aeiou".includes(char)){
            vowel++;
        }
    }
    return "vowel -> "+ vowel;
}

console.log(count_vw("Helo Bangladesh"));