
import database from '../src/firebase/firebase';
import { firebase } from '../src/firebase/firebase';



console.log('running promise.js in playground !');

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is my RESOLVE data.');
    // reject('This is my REJECT data.');
  },0);
})

console.log('before promise');

promise.then((data) => {
  console.log('running the promise then : ', data)
  return "Returning data from then"
  // return (
  //   setTimeout(() => {
  //     console.log("from second setTimeout ***");
  //   }, 5000)
}).then((me) => {
  console.log('running the promise return data !!! : ',me);
  return "SECOND DATA returned by then"
}).then((data) => {
  console.log('running the promise return data again ### : ', data);
}).catch((error) => {
  console.log('running the promise catch :', error)
});

console.log('after promise')





/////////////////////////////////

console.log('practice destructuring !!!')

/*
const person = {
  name: "John",
  location: {
    // city: 'San Diego',
    st: 'CA'
  }
}

// console.log(`${person.name} lives in ${person.location.city}, ${person.location.st}.`)
const {name='anonymous'} = person
const {city: currentCity='bingo', st='bongo'} = person.location;
console.log(`${name} lives in ${currentCity}, ${st} !!! %%%`)
console.log('pppp ',  person['name'])

const num = [1,2,3,4]
console.log('this is first >>>> n', num[0])
const [,,third] = num
console.log('again >>> ', third)

*/

/*
function makeItem() {
  return {
    data: {
      item: {
        name: 'shoes',
        size: {
          US: 10,
          EU: 44
        }
      }
    },
    status: 'live'
  }
}

const { data: {item: {name}}, status } = makeItem();
const { data: {item: {size: {US, EU}}} } = makeItem();
// const { data: {item: {size: {EU}}} } = makeItem();
// console.log('data = ',  data)
// console.log('data = ',  data.item.name)
console.log('name = ',  name)
console.log('US = ',  US)
console.log('EU = ',  EU)

*/


/*
const add = (data) => {
  return data.a + data.b ;
}

const addMore = ({c,d}) => {
  return c + d
}

const result = add({a: 10, b: 30})
console.log('result = ', result)

const moreResult = addMore({c: 50, d: 30})
console.log('result = ', moreResult)

const greet = ({name})  => {
  console.log('My name is : ', name)
}

greet({name: "Willy Boy"})
*/



/*
const res = makeItem();
console.log('res = ',res);
console.log('res.status =', res.status);
console.log('res.data.item = ', res.data.item);

const {name: itemName} = res.data.item;
const {US, EU} = res.data.item.size;
console.log('itemName = ', itemName);
console.log('itemName = ', US);
console.log('itemName = ', EU);
*/

/*
const item = makeItem();
const {name: myShoes="adidas"} = item.data.item 
const {US, EU} = item.data.item.size 
const {status} = item

// console.log('>>>> **** ', mI.data.item.name)
// console.log('>>>> **** ', makeItem().data.item.name)
console.log('>>> ', myShoes)
console.log(`${US} and ${EU}` )
console.log('>>> ', status)

const array = makeArrayOfItems().data.items 
const [first, second] = array
console.log(`${first.name} are $${first.price}`)
console.log(`${second.name} are $${second.price}`)
*/



/*
function makeArrayOfItems() {
  return {
    data: {
      items: [
        {name: 'Shoes', price: 100}, 
        {name: 'Shirt', price: 250}
      ]
    },
    status: 'live'
  }
}

const array = makeArrayOfItems()
const [one, two] = array.data.items

console.log(`array >>>> ${one.name} cost $${one.price} and ${two.name} cost ${two.price}. `, )


function myArray () {
  return ['apple', 'cherry', 'banana', 'pear']
}
console.log(myArray())
const [,,c,d] = myArray()
console.log('**** = ', c,d);


function person () {
  return {
    name: "Mike",
    location: {
      addr: {
        num: 123,
        street: 'First St.'
      },
      city: "San Jose",
      st: "CA"
    },
    age: 30
  }
}

const {name, location:{ addr: {num, street}, city, st}} = person() 
console.log('>>> *', name, num, street, city, st)
// console.log( {name, location} = person() )

// const personObj = { myName: "Jimmy" }
// const {myName} = personObj
// console.log( myName )

*/







//////////////////////////// 
// test only delete later or use as notes 
console.log('==============================')
console.log('==============================')


/*

const c = 'global'

const makeData = ({otherObj: newName } ) => {
  const c = 'local to makeData'
  const something = {b:c}
  return (something) => {
    const somethingElse = {obj: 'this is something else'}
    const {obj} = somethingElse
    // console.log('*** Returning a function inside a function !!!')
    
    console.log(' something from returned function >>> ', obj)
    console.log('bingo from makdData>>> ', newName)
  }
}

const other = {otherObj: "other object !!!"}
// makeData(other)();
makeData(other)();



const testing = ({obj}) => {
  console.log('testing >>> ', obj)
}

const myObj = {obj: "new testing"}
testing(myObj)
*/

/*
const person = {
  bingo: "some",
  // yourName: "Mike",
  location: {
    city: "San Jose",
    st: "CA"
  },
  status: "single",
  attributes: {
    height: '5 9',
    weight: 150,
    feet: {
      size: 10,
      kind: 'adidas'
    }
  }
}

// const {bingo} = person

const myFunc = ({attributes: {feet: {kind}}}) => {
  console.log('>>>> ', kind)
}

myFunc(person);

const otherFunc = ({size}) => {
  console.log('other >>>> ', size)
}

otherFunc(person.attributes.feet);


const makeData = () => {
  return () => {
    console.log('return of makeData $$$')
    const myObj = {
      rank: "first"
    }
    console.log('myObj is >>> ', myObj.rank)
  }
}
makeData()()
*/

/*
const createData  = () => {
  return {
    // animal: 'dog',
    attributes: {
      // size: 'large',
      color: 'brown'
    },
    // status: 'active',
  }
}

const {animal: myAnimal = 'bingo', attributes: {size=0}, attributes: {color='blue'}, status='wild'} = createData()
console.log(myAnimal, size, color , status) 
*/


/*
const createCars = () => {
  return {
    make: "Ford",
    model: 'F150',
    attributes: {
      // size: "large",
      color: "blue",
      amenities: {
        package: "sports"
      }
    },
    doors: 4
    }
  }

const {make} = createCars()
console.log(make)
// const {attributes:{size}} = createCars();
// console.log(size)
// const {size: big = "OK-large", color} = createCars().attributes;
// console.log(color)
// console.log(big)

const {size = 'bin'} = createCars().attributes;
console.log(size)
*/


/*
const myFunc = (person) => {
  console.log('running myFunc function ');
  return () => {
    const {
      yourName = 'default name',
      location = 'default location'
    } = person; 
    const people = { yourName, location };

    console.log('myFunc is returning newFunc !!!')
    // console.log('>>> ',people.yourName)
    // console.log('>>> ', yourName)
  };
}

const person = {
  yourName: "Mikey",
  location: "San Josey"
}
myFunc()({person});
*/



// this example is similar to the expenses.js    startAddExpense  function 
const person = {
  yourName: "Mikey",
  yourLocation: "San Josey",
  youLocation: 'bingo'
}

const myFunc = (people) => {
  console.log('running the myFunc @@@')

  // this const below is destructuring the person object above; 
  // if these names here are present in the object above 
  // then they are variables for the object
  const {                         
    yourName = 'def name',
    youLocation = 'def location'
  } = people;
  const thisPerson = { yourName, youLocation };  // thisPerson is just a variable for the destructured object above 

  return () => {
    // these 2 below are similar 
    // in   actions/expenses   function startAddExpense 
    // we used {...thisPerson}   because we are passing another object 
    // id: ref.key       this way we can pass these 2 argumens at the same time 

    console.log('running the return function !!!', thisPerson)
    console.log('**>>> -- ', {...thisPerson})



    console.log('**))>> ', youLocation)
    console.log('**))>> ', thisPerson.yourName)
    console.log('::>>> ', database.ref('expenses/-L8jFzSawt338QUN1LrF').key);
    console.log('::>>> ', database.ref('expenses').key);
    console.log('::pp>>> ',database.ref('expenses').ref.key);
    
  }
}

myFunc(person)();

// console.log('))>>', myFunc(person));

// console.log('>> ', database.ref('expenses/-LM44I709XzMhsiW5W_a').value)

// console.log('>> ',  firebase.database().ref());

// database.ref('expenses/-LM44I709XzMhsiW5W_a').on('value', (snapshot) => {
//   const myExpense = snapshot.val();
//   console.log('PPPPP',  myExpense.description);
// })

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val(

console.log('++++++++++++++++++ * +++++++++++++++++++')
console.log('+++++++++++++++++ * ++++++++++++++++++++')

const newPromise = new Promise((yes, no) => {
  yes('this is YES!')
}).then((data) => {
  console.log('then # 1 >>> ', data)
  return "this is the return from the   then ***"
}).then((newData)=> {
  console.log('then # 2 >>>', newData)
  return () => {console.log(newData)}
}).then((moreData) => { 
  moreData();
})

