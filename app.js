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


// // 6 get the even, odd, and not number elements in array 
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

// higher order function exercises 
// Ex7:
console.log('Ex7: -------------->');
let names = ["Rawan", "Jafar", "Hind", "Muhammad", "Esraa", "Dareen"];
names.forEach(element => {
    console.log(element);
})

// array used in exercises 8, 9, and 10
let newSeries = [
    {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    },
    {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id: 432534, time: 65876586 }]
    },
    {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    },
    {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id: 432534, time: 65876586 }]
    }
];

// Ex8
console.log('Ex8: -------------->');
function projectSeries(series) {
    let idNTitle = [];
    series.forEach(element => {
        let inputs = {
            id: element.id,
            title: element.title,
        }
        idNTitle.push(inputs);
    });
    return idNTitle;
}
let idNTitle = projectSeries(newSeries);
idNTitle.forEach(element => {
    console.log(`Series ID: ${element.id} and Title: ${element.title}`);
});

// Ex9
// same as exercise 8 but using map instead of forEach
console.log('Ex9: -------------->');
function projectSeries2(series) {
    let idNTitle = series.map(element => {
        let inputs = {
            id: element.id,
            title: element.title,
        }
        return inputs;
    });
    return idNTitle;
}
let idNTitle2 = projectSeries2(newSeries);
idNTitle2.forEach(element => {
    console.log(`Series ID: ${element.id} and Title: ${element.title}`);
});

// Ex10
// using the same array as ex8 and ex9 filter only series with rating under 5
console.log('Ex10: -------------->');
function projectSeries2(series) {
    let ratingUnder5 = series.filter(element => {
        input = {
            id: element.id,
            title: element.title,
            boxart: element.boxart,
            uri: element.uri,
            rating: element.rating,
            bookmark: element.bookmark,
        }
        return element.rating[0]<5;
    });
    return ratingUnder5;
}
let ratingUnder5 = projectSeries2(newSeries);
console.log(ratingUnder5);

// Ex11
console.log('Ex11: -------------->');
let languages = ["Java", "JavaScript", "Python", "C++", "PHP"];
const longest = languages.reduce(function (accumulator, currentValue) {
    if(accumulator.length<currentValue.length){
        accumulator = currentValue;
    }else if(accumulator.length == currentValue.length){
        accumulator += `, ${currentValue}`;
    }
    return accumulator;
  });
console.log(`The longest word in coding languages array is: ${longest}`);

//Ex12
console.log('Ex12: -------------->');
let pokemonData =[
    {
      "game_index": 76,
      "version": {
        "name": "red",
        "url": "https://pokeapi.co/api/v2/version/1/"
      }
    },
    {
      "game_index": 76,
      "version": {
        "name": "blue",
        "url": "https://pokeapi.co/api/v2/version/2/"
      }
    },
    {
      "game_index": 76,
      "version": {
        "name": "yellow",
        "url": "https://pokeapi.co/api/v2/version/3/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "gold",
        "url": "https://pokeapi.co/api/v2/version/4/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "silver",
        "url": "https://pokeapi.co/api/v2/version/5/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "crystal",
        "url": "https://pokeapi.co/api/v2/version/6/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "ruby",
        "url": "https://pokeapi.co/api/v2/version/7/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "sapphire",
        "url": "https://pokeapi.co/api/v2/version/8/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "emerald",
        "url": "https://pokeapi.co/api/v2/version/9/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "firered",
        "url": "https://pokeapi.co/api/v2/version/10/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "leafgreen",
        "url": "https://pokeapi.co/api/v2/version/11/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "diamond",
        "url": "https://pokeapi.co/api/v2/version/12/"
      }
    }
];
function displayNames(arr){
    let initialValue = [];
    let names = arr.reduce(function (accumulator, currentValue) {
        accumulator.push(currentValue.version.name);
        return accumulator;
    }, initialValue);
    return names;
}
let pokemonNames = displayNames(pokemonData);
console.log(`Pokemon Names: ${pokemonNames}`);

// Ex13
console.log('Ex13: -------------->');
// a) 
var employee = {
    firstName: 'Rawan',
    sayHi: function(){
        console.log("Hi Coach ! " + this.firstName);
    }
}
employee.sayHi() // ?
// The result is: Hi Coach ! Rawan
// because the sayHi properity in employee is a function that type the previous statement
// with the first name of employee (it got the first name using 'this' keyword)


// b) 
var employee = {
    firstName: 'Rawan',
    info: {
        hasCar: true,
        hasPet: true
    },
    printInfo: function(){
        console.log("Car owner? " + this.hasCar);
    }
}
employee.printInfo() // ?
// The result is: Car owner? Undefined
// because to get the value type this.info.hasCar otherwise its not gonna read it or recognize it 


// c) 
var employee = {
    firstName: 'Rawan',
    info: {
        hasCar: true,
        hasPet: true,
        printAddress: function(){
            return this.data.address;
        },
        data: {
            address: "Zarqa"
        }
    },
}
employee.info.printAddress() // ?
// The result is: Zarqa
// same as (a) explanation
// it gets the address from data properity and return it when printAddress() is called