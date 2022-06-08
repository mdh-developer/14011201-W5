
//Week 5

// // Challenge 3

// //Method 1

const foodPet = function (animal, age) {
    if (animal == "rabbit" && age >= 5) {
        console.log("Pet eat carrots")
    } else {
        console.log("Pet eat water!!")
    }
}

foodPet("rabbit", "6")






// // Method 2

const animalFood = (name, age) => {
    if (name == "dog" && age >= 3) {
        return "Animal eat meat"
    } else {
        return "Animal eat milk"
    }
}

const returnedFood = animalFood("dog", "2");
console.log(returnedFood)







// // Method 3

function pet (animal, age, color){
    if (animal == "goat" && age >= 6 || color == "white"){
        console.log("Eat alfalfa !!!")
    }else{
        console.log("Eat milk")
    }
}

pet ("goat", "7", 'blak')









// Challenge 4

const numbers = [53, 38, 120, 333, 18, 101, 13, 98];
let sum = 0;

for (const i in numbers){
    sum += numbers[i];
}

console.log(sum)




//جدا کردن اعداد زوج و فرد رو تا اینجا تونستم 
// اگر این کد رو میبینید یک بار دیگه خودتون   
//              انجام بدید



const even = [38,120, 18, 98];
const odd =  [53, 333, 101, 13];

for (let i = 0 ; i < numbers.length; i++){
    if(numbers[i] % 2 == 0){
        even.push(numbers[i]);
    }else{
        odd.push(numbers[i]);
    }
    
}

console.log(even);
console.log(odd);


// چالش جدا کردن اعداد زوج و فرد با استفاده از تابع


function evenNumbers(even){
    for (let i = 0; i<= even; i++){
        if(i % 2 === 0){
            console.log(i, "Even");
        }else{
            console.log(i, "Odd")
        }
    }
}

evenNumbers(15);