//! Exercise 8800;
// alert(`Hello, Python!`)



//! Exercise 8801;
// function addNumber(num1){
//     if(num1 < Math.pow(10, 18) ){
//         alert(num1 + 1);
//         console.log(num1 + 1);
//     }
// else{
//     alert(`Add number`);
// }
// }
// let result = addNumber(10)



//! Exercise 8802;
// function addNumber(num1){
//     if(num1 < Math.pow(10, 18) ){
//         alert(num1 - 1);
//         console.log(num1 - 1);
//     }
// else{
//     alert(`Add number`);
// }
// }
// let result = addNumber(10)



//! Exercise 8803;
// function addNumber(num1){
//     if(num1 < Math.pow(10, 18) && num1 > 0 ){
//         alert(num1 + 1);
//         console.log(num1 + 1);
//     }
// else{
//     alert(`Add Lena's number`);
// }
// }
// let result = addNumber(20)



//! Exercise 8804;
// function plusNumbers (num1, num2){
//     if(+num1 && +num2){
//         alert(+num1 + +num2);
//         console.log(num1 + num2);
//     }
//     else{
//         alert(`Add number`);
//         console.log(`Add number`);
//     }
// }
// plusNumbers(12, 9)



//! Exercise 8805;
// function plusNumbers (num1, num2){
//     if(+num1 && +num2 ){
//         alert(+num1 + +num2);
//         console.log(num1 + num2);
//     }
//     else{
//         alert(`Add number`);
//         console.log(`Add number`);
//     }
// }
// plusNumbers(12, 9)



//! Exercise 8806;
// function plusNumbers (num1, num2){
//     if(+num1 && +num2 && num1 <= Math.pow(10, 18) && num2 <= Math.pow(10, 18)){
//         alert(+num1 + +num2);
//         console.log(num1 + num2);
//     }
//     else{
//         alert(`Add number`);
//         console.log(`Add number`);
//     }
// }
// plusNumbers(12, 9)




//! Exercise 8807;
// function oppositeNumber(num1){
//     if(num1 <= Math.pow(10, 18)){
//         alert(10 * (-1));
//         console.log(10 * (-1));
//     }
//     else{
//         alert(`Add number`);
//         console.log(`Add number`);
//     }
// }
// oppositeNumber(10)



//! Exercise 8808;
// let a = +prompt(`Add first number`);
// let b = +prompt(`Add first number`);

// if(+a && +b){
//     alert(a - b);
//     console.log(a- b);
// }
// else{
//     alert(`Add number`);
//     console.log(`Add number`)
// }



//! Exercise 8809;

// let a = +prompt(`Add first number`);
// let b = +prompt(`Add first number`);

// if(+a && +b){
//     alert(a - b);
//     console.log(a- b);
// }
// else{
//     alert(`Add number`);
//     console.log(`Add number`)
// }



//! Exercise 8810;
// let a = +prompt(`Add first number`);
// let b = +prompt(`Add second number`);
// let c = +prompt(`Add third number`);
// let d ;
// let e;
// function findStudents(){
//     if(a <= Math.pow(10, 18) && b <= Math.pow(10, 18) && c <= Math.pow(10, 18)){
//         if(a > 0 && b > 0 && c > 0){
//             d = a - c;
//             e = b - c;
//             alert( d+ e + c);
//             console.log(d + e + c)
//            }
//            else{
//             alert(`Must be less than 10^18`);
//             console.log(`Must be less than 10^18`)
//            }
//     }
//     else{
//         alert(`Add a number`);
//         console.log(`Add a number`)
//        }

// }
// findStudents();



//! Exercise 8812;

// let a = +prompt(`Add first number`);
// let b = +prompt(`Add second number`);
// let p = 2 * ( a + b);
// let s = a * b;
// function calculateSquare(){
//     if( a <=Math.pow(10, 9) && b <= Math.pow(10, 9) && a > 0 && b > 0){
//         alert("P value: " + p +" S value: " + s);
//         console.log(p, s);
//     }
//     else{
//         alert(`Add correct number`);
//         console.log(`Add correct number`)
//     }
// }
// calculateSquare();



//! Exercise 8813;

// function rectangularParallelpiped(){
//     let a = +prompt(`Add first number`);
//     let b = +prompt(`Add second number`);
//     let c = +prompt(`Add third number`);
//     let s = 2 * ( (a * b) + (b * c) + (a * c));
//     let v = a * b * c;
//     if(a <=Math.pow(10, 6) && a >0 && b<=Math.pow(10, 6) && b > 0 && c<=Math.pow(10, 6) && c>0){
//         alert("S value: " + s +" V value: " + v);
//         console.log(s, v)
//     }
//     else{
//         alert(`Add correct number`);
//         console.log(`Add correct number`)
//     }
// }
// rectangularParallelpiped();



//! Exercise 8814;
// function findSandV(){
//     let a = +prompt(`Add first number`);
//     let p = 4 * a;
//     let s = Math.pow(a, 2);
//     if(a > 0){  
//         alert("p value: " + p + "\ns value: " + s);
//          console.log(p, s)
//     }
//     else{
//         alert(`Add number`)
//     }
// }
// findSandV();




//! Exercise 8815;
// function formule(){
//     let a = +prompt(`Add number`);
//     let s = 6 * Math.pow(a, 2);
//     let v = Math.pow(a, 3);
//     if( a <= Math.pow(10, 6) && a > 0){
//         alert("s value: " + s + "\nv value : " + v);
//         console.log(s, v);
//     }
//     else{
//         alert(`Add a number`)
//     }
// }
// formule();



//! Exercise 8816;
// function findPow (){
//     let a = +prompt(`Add number`);
//     let n = +prompt(`Add pow`);
//     let result = Math.pow(a, n);
//     alert(result);
//     console.log(result);
// }
// findPow()




// //! Exercise 8817;
// let n = +prompt();
// if(n > 0){
//     alert(9*(Math.pow(10, n-1)))
//     console.log(9*(Math.pow(10, n-1)));
// }








//! Exercise 8825;

// function formule8825(){
//     let x = +prompt();
//     let a = Math.pow(x, 3);
//     let b = (5 * Math.pow(x, 2)) / 7;
//     let c = 9 * x;
//     let d = 3 / x;
//     let y = a - b + c - d + 1;
//     alert(y.toFixed(3));
//     console.log(y.toFixed(3))
// }
// formule8825()



//! Exercise 8827;
// function formule2 (){
//     let x = +prompt();
//     let a = Math.pow(x, 2) + (3 * x) - 4;
//     let b = 2 * x - 3;
//     let c = x + 2;
//     let d = Math.pow(x, 2) - ( 5 * x) + 7;
//     let y = (a / b) - (c / d);
//     alert(y.toFixed(3))
//     console.log(y.toFixed(3));
// }
// formule2()




//! Exercise 8831;
// function formule3 (){
//     let x = +prompt(`Add x value`);
//     let y = +prompt(`Add y value`);
//     let a = 2 * Math.pow(x, 2);
//     let b = 4 * x * y ;
//     let c = 3 * Math.pow(y, 2);
//     let d = (x + y) / 7;
//     let result = a - b + c + d;
//     alert(result.toFixed(3));
//     console.log(result.toFixed(3));
// }
// formule3();




//! Exercise 8838;
// function findParsint(){
//     let m = +prompt(`Add m value`);
//     let n = +prompt(`Add n value`);
//     let result = parseInt(m / n)
//     alert(result);
//     console.log(result)
// }
// findParsint();





//! Exercise 8839;
// function findRemainder    (){
//     let m = +prompt(`Add m value`);
//     let n = +prompt(`Add n value`);
//     let result = (m % n)
//     alert(result);
//     console.log(result)
// }
// findRemainder();




//! Exercise 8840;
// let x = +prompt();
// let result = x % 10;
// alert(result);
// console.log(result)




//! Exercise 8841;
// let x = +prompt();
// let result = parseInt(x / 10)
// alert(result);
// console.log(result)



//! Exercise 8844;
// let x = +prompt()
// let arr = String(x).split("").map(x => Number(x));
// if(x > 9){
//     let newArr = arr.splice(arr.length-2, 1);
//     console.log(newArr);
//     let change = parseInt(arr.map(String).join(""));
//     alert(change)
//     console.log(change);
//     console.log(typeof change);
// }
// else{
//     alert(`Add a number > 99`)
// }





//! Exercise 8845;
// let x = +prompt()
// let arr = String(x).split("").map(x => Number(x));
// if(x > 99){
//     let newArr = arr.splice(arr.length-3, 1);
//     console.log(newArr);
//     let change = parseInt(arr.map(String).join(""));
//     alert(change)
//     console.log(change);
//     console.log(typeof change);
// }
// else{
//     alert(`Add a number > 99`)
// }




//! Exercise 8849;
// let x = +prompt();
// if(x>=10 && x < 100){
//    let a = parseInt(x/10) * 1000;
//    let b = parseInt(x / 10) * 100 ;
//    let c = (x % 10) *10;
//    let d = (x%10);
//    let result =  a + b + c + d;
//    alert(result);
//    console.log(result);
// }
// else{
//     alert(`Add number`);
//     console.log(`Add number`)
// }



//! Exercise 8850;

// let x = +prompt();
// let strX= String(x);
// console.log(strX);
// console.log(typeof strX);
// let sum = 0;
// for(let i = 0; i < strX.length; i++){
//     sum +=Number(strX[i]);
// }
// alert(sum);






//! Exercise 8851;
// let x = +prompt();
// let arrayX= String(x).split("").map(Number);
// console.log(arrayX);
// let reverseArr = arrayX.reverse();
// console.log(reverseArr);
// let reverseNumber = parseInt(reverseArr.map(String).join(""));
// console.log(reverseNumber);
// console.log( typeof reverseNumber);
// alert(reverseNumber);


//! Exercise 8852;
// let x= +prompt();
// let arrayX = String(x).split("").map(Number);
// console.log(arrayX);
// if(x>=Math.pow(10, 3)){
//     arrayX.splice(1, 1);
//     console.log(arrayX);
//     arrayX.splice(2, 1);
//     console.log(arrayX);
//     let newNumber = parseInt(arrayX.map(String).join(""))
//     alert(newNumber)
// }
// else{
//     alert(`Wrong`)
// }


//! Exercise 8853;
// let x = +prompt()
// let arrayX = String(x).split("").map(Number);
// console.log(arrayX);
// if(x >= 10000){
//     arrayX.splice(0, 1);// 2345
//     arrayX.splice(1, 1);//245
//     arrayX.splice(arrayX.length-1, 1);//24
//     let newNumber = parseInt(arrayX.map(String).join(""))
//     alert(newNumber)
// }
// else{
//     alert(`wrong`)
// }

//! Exercise 8854;
// function findReverseNumber(){
//     let x = +prompt();
//     let arrayX = String(x).split("").map(Number);
//     console.log(arrayX);
//     let reverseNumber = parseInt(arrayX.reverse().map(String).join(""));
//     console.log(reverseNumber);
// }
// findReverseNumber()





//! Exercise 8860;
// let abc = +prompt();
// //abc = 123;
// if(abc >= 100 && abc < 1000){
//     let arrayAbc = String(abc).split("").map(Number);
//     let cba = parseInt(arrayAbc.reverse().map(String).join(""));
//     console.log(arrayAbc);// [3,2,1]
//     // abc = 123; cba = 321
//     // abc ve cba tapildi
    
    
//     let b = arrayAbc.splice(1,1);//     [2]
//     console.log(arrayAbc);//        [3,1];
//     arrayAbc.push(...b);
//     console.log(arrayAbc);// [3,1,2]
//     let cab = parseInt(arrayAbc.map(String).join(""))
//     let bac = parseInt(arrayAbc.reverse().map(String).join(""))
//     //cab ve bac tapildi
//     //cab =312  bac = 213;
    
    
//     //arrayAbc = [2, 1, 3]
//     // acb [1, 3, 2]
//     let a = arrayAbc.splice(0, 1); // 
//     console.log(a); // [2];
//     console.log(arrayAbc);// [ 1, 3]
//     arrayAbc.push(...a);
//     console.log(arrayAbc);
//     let acb = parseInt(arrayAbc.map(String).join(""));
//     let bca = parseInt(arrayAbc.reverse().map(String).join(""))
    
    
//     console.log(abc)
//     console.log(cba);//321
//     console.log(cab);// 312
//     console.log(bac);//213
//     console.log(acb);// 132
//     console.log(bca);// 231
//     console.log(typeof abc);
//     console.log(typeof acb);
//     console.log(typeof bca);
//     console.log(typeof bac);
//     console.log(typeof cab);
//     console.log(typeof cba);
    
//     let result = abc + cba + cab + bac + acb + bca ;
//     console.log(result);
//     alert(result)
// }
// else{
//     alert(`wrong number`)
// }




//! Exercise 8862;
// function findNumberSign(){
//     let number = +prompt();
//     if(number > 0){
//         alert(1)
//     }
//     else if (number < 0){
//         alert(-1)
//     }
//     else if(number == 0) {
//         alert(0)
//     }
//     else{
//         alert(`add a number `)
//     }
// }
// findNumberSign()



//! Exercise 8864;
// function findNumberSign_2 (){
//     let x = +prompt();
// let y = +prompt();
// if(x <=Math.pow(10, 9) && y <= Math.pow(10, 9)){
//     if((x < 0 &&  y < 0) || (x >= 0 && y >= 0)){
//         alert(1)
//     }
//     else if ((x < 0 && y > 0) || (x > 0 && y < 0)){
//         alert(0)
//     }
// }
// else{
//     alert(`Add a number`)
// }
// }
// findNumberSign_2()




//! Exercise 8870;
// let num1 = +prompt();
// let num2 = +prompt();
// let num3 = +prompt();
// let totalNum = [num1, num2, num3];
// let minimumNum = totalNum[0];

// for(let i = 0; i<totalNum.length; i++){
//     if(totalNum[i] < minimumNum){
//         minimumNum = totalNum[i]
//     }
// }
// alert(`Minimum number is ${minimumNum}`)



//! Exercise 8871;
// let num1 = +prompt();
// let num2 = +prompt();
// let num3 = +prompt();
// let totalNum = [num1, num2, num3];
// let maxNum = totalNum[0];
// for(let i =0; i< totalNum.length; i++){
//     if(totalNum[i] > maxNum){
//         maxNum = totalNum[i]
//     }
// }
// alert(`The biggest number is ${maxNum}`)



//! Exercise 8872;
// function listTheNumber(){
//     let num1 = +prompt();
//     let num2 = +prompt()
//     let num3 = +prompt()
//     let totalNum = [num1, num2, num3];
//     console.log(totalNum);
//     console.log(totalNum.sort((a,b)=> a -b));
//     alert(totalNum.sort((a, b) => a - b))
// }
// listTheNumber()




//! Exercise 8876;
// let a = +prompt();
// if(parseInt(a) == a){
//    alert(`Ok`)
// }
// else{
//     alert(`No`)
// }





//! Exercise 8877;
// function findSqrtNumb(){
//     let powNumb = +prompt()
//     let sqrtNumb = Math.sqrt(powNumb, 2);
//     if(sqrtNumb == parseInt(sqrtNumb)){
//         alert(`Yes`)
//         console.log(`Yes`);
//     }
//     else{
//         alert(`No`)
//         console.log(`No`);
//     }
// }
// findSqrtNumb()


//! Exercise 8878;
// let num = 1000;
// let n = 0;

// while (num % 10 === 0) {
//     n++;
//     num = num / 10;
// }
// num = 1000;
// console.log(n);
// console.log(num);
// console.log(typeof n);

// if (num == Math.pow(10, n)){
//     console.log(n);
// }
// else{
//     console.log(`Wrong`);
// }


//! Exercise 8879;
// function findAreaOfTriangle(){
//     let num1 = +prompt();
//     let num2 = +prompt();
//     let num3 = +prompt();
//     let totalNum = num1 + num2 + num3
//     if (num1 > 0 && num2 > 0 && num3 > 0){
//         if((num1 < (num2 + num3)) && (num2 < (num1 + num3)) && (num3 < (num1 + num2))){
//             alert(totalNum);
//         }
//         else{
//             alert(`No`);
//         }
//     }
//     else{
//       alert(`Add a number > 0`);
//     }
// }
// findAreaOfTriangle();




//! Exercise 8880;
// function findPow2 (){
//     let num1 = +prompt();
//     let num2 = +prompt();
//     let num3 = +prompt();

//     if(num1 === num2 && num1 === num3 && num1 <= Math.pow(10, 9) && num1 > 0){
//         let totalNum = Math.pow(num1, 2);
//         alert(totalNum)
//         console.log(totalNum);
//     }
//     else{
//         alert(`No`)
//         console.log(`No`);
//     }
// }
// findPow2()


//! Exercise 8881;
// let num1 = +prompt();
// let num2 = +prompt();
// let num3 = +prompt();
// if((num1 < (num2 + num3)) && (num2 < (num1 + num3)) && (num3 < (num1 + num2)) && (num1 > 0 && num2 > 0 && num3 > 0)){
//         if(num1 === num2 || num1 === num3 || num2 === num3){
//             alert(num1 + num2 + num3)
//         }
//         else{
//             alert(`No`);
//         }
// }
// else{
//     alert(`It is not triangle`)
// }




//! Exercise 8882;
// let num1 = +prompt();
// let num2 = +prompt();
// let num3 = +prompt();
// let num4 = +prompt();
// let totalNum = [num1, num2, num3, num4];
// let result = 0;

// if(num1 > 0 && num2 >0 && num3 > 0 && num4 > 0){
//     for(let i = 0;  i < totalNum.length; i++){
//         if(totalNum[i] == totalNum[0]){
//             result++ ;
//         }
//     }
//     if(result == 4){
//         alert(Math.pow(num1, 2));
//     }
//     else{
//        alert(`wrong`)
//     }
// }
// else{
//     alert(`Add a number > 0`)
// }



//! Exercise 8883;
// function findRectangle (array){
//     let sum = 0;
//     if((array[0] == array[3]) &&(array[1] == array[2])){
//         for(let i = 0; i < array.length; i++){
//             sum+= array[i]
//         }
//     }
//     else{
//         alert(`No`)
//         console.log(`No`);
//     }
//     return sum
// }
// alert(findRectangle([7,4,4,7]))




//! Exercise 8884;
// function whichTypeTriangle(array){
//     if((+array[0] > 0) && (+array[1] > 0) && (+array[2] > 0)){
//         if((array[0] + array[1] > array[2]) && (array[0] + array[2] > array[1]) && (array[1] + array[2] > array[0])){
//             if( (array[0] === array[1]) &&  (array[1] === array[2])){
//                 alert(`equilateral`)
//             }
//             else if (((array[0] == array[1]) && (array[0] !== array[2])) || ((array[0] == array[2]) && (array[0] !== array[1])) || ((array[1] == array[2]) && (array[1] !== array[0]))){
//                 alert(`isosceles`)
//             }
//             else if((array[0] !== array[1]) && (array[0] !== array[2])){
//                 alert(`versatile`)
//             }
//         }

//         else{
//             alert(`Invalid`)
//         }
//     }
//     else{
//         console.log(`wrong`);
//     }
// }
// whichTypeTriangle([2,3,5])







//! Exercise 8885;

// function findOddNumber (){
//     let oddNumber = +prompt();
//     if((oddNumber % 2) == 0){
//         alert(oddNumber - 1)
//     }
//     else{
//         alert(oddNumber - 2)
//     }
//     return oddNumber;
// }
// findOddNumber();






//! Exercise 8886;
// function findEvenNumber () {
//     let evenNumber = +prompt();
//     if(evenNumber % 2 == 0){
//         alert(evenNumber - 2)
//     }
//     else{
//         alert(evenNumber - 1)
//     }
//     return evenNumber
// }
// findEvenNumber()





//! Exercise 8889; ededin içindeki tek ededlerin sayini tap

// function countOddNumber(num1){
//     let arr = String(num1).split("").map(Number);
//     let result = 0;
//     for(let i = 0; i< arr.length; i++){
//         if(arr[i] % 2 !== 0){
//             result++;
//         }
//     }
//     return result;
// }
// console.log(countOddNumber(12345));





//! Exercise 8890; Beşrəqəmli natural ədədi verilir. Bu ədədin cüt rəqəmlərini  1 vahid artirin

// function finNewNumber (num1){
//     let arrNum1 = String(num1).split("").map(Number);
//     let result = [];
//     for(let i = 0; i< arrNum1.length; i++){
//         if(arrNum1[i] % 2 == 0){
//             arrNum1[i]++
//         }
//         result.push(arrNum1[i])
//     }
//     let newNumber =parseInt(result.map(String).join(""));
//     return newNumber
// }
// console.log(finNewNumber(12345));





//! Exercise 8893;

// function findNumber (num1){
//     if(num1 == +num1){
//         if(num1 < 100 && num1 > -100){
//             if((num1 % 2 == 0) && (num1 % 3 == 0)){
//                 console.log(`YES`);
//             }
//             else{
//                 console.log(`NO`)
//             }
//         }
//         else{
//             console.log(`add -100 <  number < 100`);
//         }
//     }
//     else{
//         console.log(`add number`);
//     }
//     return num1
// }
// findNumber(12)







//! Exercise 8895;       a, b, və c tam ədədləri verilir. Bu ədədlərdən ən azı biri müsbət və ən azı biri mənfidirsə çıxışa YES, əks halda NO verin.
// let arr = [1, -2, 3]           
// let negativeNum = true;
// let positiveNum = true;
// for(let i = 0; i<arr.length; i++){
//     if(arr[i] >= 0){
//         positiveNum = false;
//     }
//     else{
//         negativeNum = false
//     }
// }
// if(negativeNum == false && positiveNum == false){
//     alert(`yes`)
//  }
//  else{
//     alert(`no`)
//  }











//! Exercise 8896;      Proqram üçrəqəmli N ədədi daxil edir. N ədədinin bütün rəqəmləri fərqlidirsə çıxışa YES, əks halda NO verin.

// let num1 = +prompt();
// let arr = String(num1).split("").map(Number);
// console.log(arr);
// if(num1 < 1000 && num1 > -1000){
//     if((arr[0] !== arr[1]) && (arr[1] !== arr[2])){
//         alert(`YES`)
//     }
//     else{
//         alert(`NO`)
//     }
// }
// else{
//     alert(`WRONG`)
// }





//! Exercise 8897;        Tam n ədədi verilir. n-dən böyük və 10-a tam bölünən ən kiçik ədədi tapın.
// let num1 = -19;

// if(num1 >= 0){
//     console.log(num1 + (10 - (num1 % 10)));
// }
// else if ( num1 < 0){
//     console.log(num1 + (10 + (num1 % 10)));
// }




//! Exercise 8898;  Proqram natural n ədədini daxil edir. n-dən böyük və tam kvadrat olan ən kiçik ədədi tapın.
// let n = 7;
// while (true) {
//   n++;
//     if(Math.sqrt(n, 2) === Math.ceil(Math.sqrt(n, 2))){
//         break;
//     }

// }
// console.log(n);




//! Exercise 8899;  Proqram n natural ədədini daxil edir. n-dən böyük və ikinin qüvvəti olan ən kiçik ədədi tapın.
// let n = 10;
// while (true) {
//   n++;
//     if(Math.pow(n, 1/3) === Math.ceil(Math.pow(n, 1/3))){
//         break;
//     }

// }
// console.log(n);





//! Exercise 8900;  n tam ədədi verilir. n-dən böyük olan və 7-yə tam bölünən ədədlərdən ən kiçiyini tapın.


// let num = 14;
// while(true){
//     num++;
//     if(num % 7 == 0){
//         break
//     }
// }
// console.log(num);





//! Exercise 8901 ;   Natural n ədədi verilmişdir. Rəqəmlərinin sayı n ədədinin rəqəmlərinin sayından çox olan ilk ən kiçik ədədi çap edin.


// let n = 77;
// let result = 0;
// while(n > 0){
//     n = Math.floor(n / 10);
//     result++;
// }
// console.log(Math.pow(10, result))


//! Exercise 8902   n natural ədədi verilmişdir. n-dən böyük olan, 2, 3 və 5-ə bölünməyən ən kiçik natural ədədi çap edin. 

// let n = 4;
// while(true){
//     n++;
//     if((n % 2 !== 0) && (n % 3 !==0) && (n % 5 !== 0)){
//         break
//     }
// }
// console.log(n);