function myFunction(){
    var txt = "Google is Alphabet's leading subsidiary and will continue to be the umbrella company for Alphabet's Internet interests. Sundar Pichai was appointed CEO of Google, replacing Larry Page, who became the CEO of Alphabet.";
    document.getElementById("demo").innerHTML = txt;
}


function multiplyMe(p1, p2){
    return p1 + p2;
}
document.getElementById("demo1").innerHTML = multiplyMe(12,14);
var txt = "this is me.";
document.getElementById("string").innerHTML = txt.slice(2, 4);
var txt1 = "How are you???";
document.getElementById("string").innerHTML = txt1.slice(0, 4);
var txt2 = "You are Beautiful.";
document.getElementById("string").innerHTML = txt2.slice(8, 17);
var txt3 = "There are seven members.";
document.getElementById("string").innerHTML = txt3.slice(0, 5);
var txt4 = "string is collection of texts.";
document.getElementById("string").innerHTML = txt4.substring(0, 6);
document.getElementById("string").innerHTML = txt4.toUpperCase();
document.getElementById("string").innerHTML = txt4.toLowerCase();
var txt5 = "this is my life.";
document.getElementById("string").innerHTML = txt5.toUpperCase();
document.getElementById("string").innerHTML = txt5.toLowerCase();
document.getElementById("string").innerHTML = txt5.concat("", txt4, txt3);
var fruits = ['Mango', 'Orange', 'Pineapple', 'Avocado'];
document.getElementById("array").innerHTML = fruits;
fruits.splice(0, 0, "Banana", "Coconut");
document.getElementById("array").innerHTML = fruits;
var numbers = [1, 2, 3, 4, 5, 6, 7];
document.getElementById("array").innerHTML = numbers;
numbers.splice(1, 0, 12, 13, 14);
document.getElementById("array").innerHTML = numbers;
var alpha = ['a', 'b', 'c', 'd'];
document.getElementById("array").innerHTML = alpha;
alpha.splice(1, 0, 'x', 'y', 'z');
document.getElementById("array").innerHTML = alpha;
document.getElementById("array").innerHTML = numbers.concat(alpha);
var myArr = [1, 2,3, 4, 5, 6, 7];
document.getElementById("array").innerHTML = myArr;
var slice = myArr.slice(1,4 );
document.getElementById("array").innerHTML = slice;
var myNum = [1, 2, 3, 4, 5, 6, 7];
var txt = "";
function addMe(value, index, array){
    txt = txt + value+ "<br>";
}
myNum.forEach(addMe);
document.getElementById("array").innerHTML = txt;






var x = [12, 13, 14, 15];
var x1 = x.map(multiMe);
function multiMe(value){
    return value * 2;
}
document.getElementById("array1").innerHTML = x1;

// filter method;

var x = [1, 3, 5, 7, 9];
var x1 = x.filter(filterX);
function filterX(value){
    return value >4;
}
document.getElementById("array2").innerHTML = x1;

var p = [12, 13, 14, 15];
var p1 = p.reduce(sum);
function sum(total, value){
    return total + value;
}

document.getElementById("array3").innerHTML = p1;

var q = [12, 21, 23, 34];
var q1 = q.reduceRight(myHello);
function myHello(total, value){
    return  total + value;
}
document.getElementById("array4").innerHTML = q1;

// every method 
var b = [21, 22, 23, 24];
var b1 = b.every(bFunction);
function bFunction(value){
    return value > 20;
}
document.getElementById("array4").innerHTML = b1;

// Math methods;

document.getElementById("math").innerHTML = Math.round(12.12);
document.getElementById("math").innerHTML = Math.pow(2, 2);
document.getElementById("math").innerHTML = Math.round(12.3);
document.getElementById("math").innerHTML = Math.sqrt(64);
document.getElementById("math").innerHTML = Math.abs(-123);
document.getElementById("math").innerHTML = Math.ceil(12.3);
document.getElementById("math").innerHTML = Math.floor(12.9);
document.getElementById("math").innerHTML = Math.floor(Math.random() * 10);