// Array
// 1 gets index of a number
console.log('1 -------------->');
function search(arr, num){
    let index =-1;
    for(let i=0; i<arr.length; i++){
        if(arr[i] == num){
            index=i;
            break;
        }else{
            index=-1;
        }
    }
    return index;
}
let arr = [1,3,5,2,7,3,6,4,9];
console.log('index: '+ search(arr, 4));

// 2 gets the missing value from a 1 to 100 elements in array
console.log('2 -------------->');
function fill(arr){
    randomNum = Math.floor(Math.random() * (100-1+1)) + 1;
    for(let i=0; i<100; i++){
        if(i+1 == randomNum){
            arr[i]=0;
            continue;
        }
        arr[i] = i+1;
    }
    return arr;
}
function getMissing(arr){
    let missing = 0;
    for(let i=0; i<100; i++){
        if(arr[i]==0){
            missing = i + 1;
        }
    }
    return missing;
}
let arr1 = [];
arr1 = fill(arr1);
console.log(arr1);
console.log(getMissing(arr1));

// 3 remove duplicated elements in an array
console.log('3 -------------->');
function removeDuplicate(arr){
    let newarr = [];
    let duplicate = false;
    for(let i=arr.length-1; i>=0; i--){
        for(let j=i-1; j>=0; j--){
            if(arr[i] == arr[j]){
                duplicate = true;
            }
        }

        if(!duplicate){
            newarr.push(arr[i]);
        }
        duplicate = false;
    }
    return newarr.reverse();
}
let arr2 = Number([4,3,5,2,4,7,5,6,15,42,15,60]);
console.log(`original array: ${arr2}`)
console.log(`array without duplicate: ${removeDuplicate(arr2)}`);

// 4 get the average of array elements
console.log('4 -------------->');
function average(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    let avg = sum/arr.length;
    return avg;
}
let arr3 = [2,8,1,7,3,5,5];
console.log(`average of the array elements is: ${average(arr3)}`);

// 5 set the array element as a power to 2 (2 to the power 'element')
console.log('5 -------------->');
function power(){
    let numbers = prompt("Enter numbers seperated by a comma (,)");
    let arr = numbers.split(',');
    let newarr = [];
    for(i=0;i<arr.length;i++){
        newarr[i] = Math.pow(2, arr[i]);
    }
    console.log(`Original array: ${arr}`);
    console.log(`Using for: ${newarr}`);
    return arr;
}
// using for
let arr4 = power();
// using map 
let newarr1 = arr4.map(function(element) {
    return Math.pow(2, element); 
 });
console.log(`Using map: ${newarr1}`);
// using foreach 
let newarr = arr4.forEach(function(element) {
    return Math.pow(2, element); 
 });
console.log(`Using foreach: ${newarr}`);
// foreach and map has the same code but map returns the elements in a new array with
// the same length as the original array while foreach doesnt return anything nor changes
// the original array

// 6 get the even, odd, and not number elements in array 
console.log('6 -------------->');
function evenOrOdd(){
    let numbers = prompt("Enter even or odd numbers seperated by a comma (,)");
    let arr = numbers.split(',');
    let newarr = arr.map(function(element) {
        if(element % 2 == 0){
            return "Even";
        } 
        else if(element % 2 == 1){
            return "Odd";
        }
        else{
            return "N/A";
        }
     });
    console.log(`Original array: ${arr}`);
    console.log(`Even or odd array: ${newarr}`);
    return arr;
}
evenOrOdd();

// 7 fizz buzz array where fizz is for numbers divided by 3 and buzz is for numbers divided by 5
console.log('7 -------------->');
function fizzbuzz(arr){
    let newarr = arr.map(element => {
        if(element % 3 == 0 && element % 5 == 0){
            return "Fiz Buzz";
        }else if(element % 3 == 0){
            return "Fizz";
        }else if(element % 5 == 0){
            return "Buzz";
        }else{
            return element;
        }
    });
    return newarr;
}
let arr5 = [1,15,21,10,4,20,30];
console.log(`Original array: ${arr5}`);
console.log(`FizzBuzz array: ${fizzbuzz(arr5)}`);