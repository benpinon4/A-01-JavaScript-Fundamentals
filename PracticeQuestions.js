
////////////////////////////////////////////////////////////
//// JAVASCRIPT JS BASICS
////////////////////////////////////////////////////////////


const x = 6

// 1. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x" using without using arrow functions.

function sumFunc1(num1, num2){
  let sum = 0
  // console.log(num1)
  // console.log(num2)
  // console.log(x)
  sum =+ num1 + num2 + x
  // console.log(sum)
  return sum
}
console.log()
console.log(sumFunc1(1,2))

// 2. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x", using arrow functions.

const sumFunc2 = (num1, num2) => {
  let sum  = 0
  // let addBoth = num1 + num2
  // console.log(addBoth)
  sum =+ num1 + num2 + x
  // console.log(sum + addBoth)
  return sum
}

console.log(sumFunc2(1,2))

// 3. Write a function that returns another function. (use arrow functions please)

const returnOtherFunctionFunc = (num)=>{

  const greatThanZeroCheckFunc = (num) => {
    if(num > 0){
      return true
    } else {
      return false
    }
  }
  return greatThanZeroCheckFunc(num)
}

console.log(returnOtherFunctionFunc(5))

// 4. Given the following code explain why the function that returns from getFunction still has access to variable "y" even when "y" is not a global variable.

// Because insideFunc is created within the getFunction function. It has access to all local data within the function getFunction.


const getFunction = () => {
  const y = 5;

  const insideFunc = (a) => y + a;

  return insideFunc;
};

console.log(getFunction()(2))

// 5. write a function that takes "couldThrowError()" as a callback argument.
// within that function call "couldThrowError" and and log the result to the console.
// Make sure to handle errors that could be thrown by "couldThrowError()"
// If there is an error log "sorry, there was an error" to the console.

// const couldThrowError = () => {
  
//   if(Math.ceil(Math.random() * 2) < 2){
//     throw new Error("Sorry you have error");
//   }
  
//   return 'success'
// }

// const errorCheckFunc = (callBack) => {

//   try {
//     if (callBack == "success"){
//       return "yay a success"
//     }
    
//   } catch (error) {
//     // if(error !== undefined){
   
//       console.log(error) 
//           // }
//   }

// }

// console.log(errorCheckFunc(couldThrowError()))



////////////////////////////////////////////////////////////
//// Handling data:
////////////////////////////////////////////////////////////


const userData = [
  {
    id: '111',
    name: 'Peter',
    favorites: {
      food: ['burgers', 'pizza'],
      activites: ['basketball', "baseball"]
    },
  },
  {
    id: '222',
    name: 'John',
    favorites: {
      food: ['burgers', 'tacos'],
      activites: ['football', "golf"]
    },
  },
  {
    id: '333',
    name: 'Mary',
    favorites: {
      food: ['pizza', 'tacos', 'fried chicken'],
      activites: ['volleyball', "softball"]
    },
  }
];

// 5. Given the data above, use ".map" to make an array of objects.
// Each object should have the id of the user and the amount of favorite foods they have.
// example: [{id: '111', favoriteFoods: 2}]

const favFood = userData.map((element)=>{
  
  const favarr = element.favorites
  const favfoodarr = favarr.food


  const newData = {
    id: element.id,
    favorite_food_count: favfoodarr.length
  }
  
  return newData
})

console.log(favFood)



// 6. Given the data above, use ".reduce" to make an array of all the names
// of the people who have pizza as one of their favorite foods.
// example: ['Peter', 'Mary']


const nameCount = userData.reduce((accumulator, element)=>{

  const pizzaCheck = element.favorites.food.includes('pizza')
  console.log(pizzaCheck)
 if( pizzaCheck === true){
  console.log(element.name)
  accumulator = [...accumulator, element.name]
 
 }
 return accumulator
 
},[])
 console.log(nameCount)



// 7. Show an an example of a switch statement being used

const mathSwitchTest = (number)=>{

console.log(number)
  switch (true) {
    case number > 0 && number < 10:
      
      return 'great than zero'
    case number < 0:
      
      return 'less than zero'

    case number > 10 && number < 100:
          
          return 'inbetween 10 and 100'
    case number >= 100:
          
          return 'greater than or equal to 100'  
  
    default:

    return 'sorry not working'
      
  }

}

console.log(mathSwitchTest(25))
////////////////////////////////////////////////////////////
//// OBJECT AND ARRAY DESTRUCTURING
////////////////////////////////////////////////////////////


const userPersonalData = {
  name: 'peter',
  age: '56',
  birthday: 'jan 1st',
 };
 const userGameData = {
  score: 4546,
  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
 };
  

// 8. Combine the personalData and userGameData into a user object that is equal to the object below, by using the spread operator:
// const user = {
//  name: 'peter',
//  age: '56',
//  birthday: 'jan 1st',
//  score: 4546,
//  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
// }

const newObject = {
  ...userPersonalData,
  ...userGameData
}

console.log(newObject)





// 9. Make a copy of your new user object but override the birthday to december 31st
 const copiedObc = {
  name: newObject.name,
  age: newObject.age,
  birthday: 'dec 31st',
  score: newObject.score,
  accomplisments: newObject.accomplishments
 }

// 10. Use the spread operator to make a copy of the accomplishments array and store it in a new variable

const awardsSpread = [...newObject.accomplishments]

console.log(awardsSpread)


//  11.Given the object bellow, use object destructuring to get the favorite food value (user.favoriteThings.food)
//  and store it in a variable name food

var user = {
  name: 'pete',
  age: '32',
  favoriteThings: {
    food: ['pizza', 'tacos', 'burgers', 'italian'],
    movies: [],
  },
 };

 const food1 = [...user.favoriteThings.food]

 console.log(food1)

 
// 12. Once you have grabbed the favorite foods. Destructure the food array to grab only the first 2 values. //
const destructFood = [food1[0], food1[1]]

console.log(destructFood)

// 13. use object destructuring and the rest operator to transform the following array into 3 variables: name, age, and food. 
//    the food variable should have all the array items starting from the third one.
const data = ['peter', '34', 'apple', 'oranges', 'pizza', 'tacos'];


let name, age, food;

[name, age, ...food] = data



console.log(name, age)

console.log(food)

// const desrtuctArray = (...Arr) => {

// Arr.forEach((element, index)=>{
//   let name = ""
//   if(index < 0){
//      name = element
    
//   }
//   console.log(name)
//   console.log(element)
// })


// }

// desrtuctArray(data)    
// 14. use object destructuring to grab the following from the userInfo object: 
// - The user's name and in a constant named userName.
// - The user's favorite food array and name it favoriteFood.
// - The users first favorite thing (cars) and name it favoriteThing
// - The users second favorite thing (jewelry) and name it secondfavoriteThing

const userInfo = {
  name: 'Peter',
  favorites: {
    needs: {
      food:  ['burger', 'pizza', 'tacos', 'fried chicken', 'sushi'],
    },
    wants: {
      things: ['cars', 'jewelry'],
    },
  },
};


// let userName, favoriteFoodArray, favoriteThing, secondfavoriteThing;

const question14 = {
    userName: userInfo.name,
    favfood: userInfo.favorites.needs.food,
    favThing: userInfo.favorites.wants.things[0],
    secondFavThing: userInfo.favorites.wants.things[1]
  }

console.log(question14)  




var fetchData = () => new Promise((resolve, reject) => {
  console.log('fetchingData from imaginary database')
  setTimeout(() => {
       try {
         // fetchingData from imaginary database
         if((Math.ceil(Math.random() * 2)) < 2){
           throw new Error('Error!')
         }
         resolve({name: 'john', age:42})
        } catch(error) {
          reject(error);
        }
  }, 5000);
});


module.exports =  fetchData;


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Promises:
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function that returns a promise.
var fetchData = () => new Promise((resolve, reject) => {
  console.log('fetchingData from imaginary database')
  setTimeout(() => {
       try {
         // fetchingData from imaginary database
         if((Math.ceil(Math.random() * 2)) < 2){
           throw new Error('Error!')
         }
         resolve({name: 'john', age:42})
        } catch(error) {
          reject(error);
        }
  }, 5000);
});


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 15. Call fetchData (which returns a promise) and use the .then()  method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



fetchData().then((value)=>{
  console.log(value)
  
}).catch((value) => {
  console.log(value)
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 16. Call fetchData (which returns a promise) and use the async/await method to log the value the promise resolves with to the javascript console.
///////////////////////////////////////////////////////////////////////////////////////////  

const question16 = async () => {
  const response = await fetchData()

  console.log(response)
}

question16()