
// this is the original 
// tests/expenses.test.js   with the notes

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import React from 'react';
import { startAddExpense, addExpense, removeExpense, editExpense } from '../../actions/expenses'; 
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

test('should setup addExpense action object with provided values', () => {
  // we'll use one fo our fixture's dummy data instead since it's going to have an id
  // because firebase will be passing an id now 
  // const expenseData = {
  //   description: 'my rent', 
  //   amount: '500',
  //   note: 'my note for the rent',
  //   createdAt: 0
  // }

  // const action = addExpense(expenseData);
  const action = addExpense(expenses[0]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[0]

    // this would work 
    // type: 'ADD_EXPENSE',
    // expense: {
    //   ...expenses[0],
    //   id: expect.any(String)
    // }

    // this is the original
    // expense: expenses[0]
    // no need for adding the   .any(String)   we are now passing an id 
    // ...expenseData          // using the spread operator 
    //   id: expect.any(String)  // this is the correct form 
    // }
  }) 
})


/*
// original test 
test('should setup addExpense action object with provided values', () => {
  const expenseData = {
    description: 'my rent', 
    amount: '500',
    note: 'my note for the rent',
    createdAt: 0
  }
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,          // using the spread operator 
      id: expect.any(String)  // this is the correct form 
    }
  }) 
})
*/

/*
// alt test for the original test 
test('should setup addExpense action object with provided values -- 2', () => {
  const expenseData = {
    description: 'my rent', 
    amount: '500',
    note: 'my note for the rent',
    createdAt: 0
  }
  const action = addExpense(expenseData)
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: 'my rent', 
      amount: '500',
      note: 'my note for the rent',
      createdAt: 0,
      // id: expect.anything() // verify this??
      id: expect.any(String) // this is the correct form
    }
  })
});
*/


// addExpense will no longer be responsible for the default values
// default is not handled by startAddExpense function 
// write a new test for   startAddExpense 
// test('should setup addExpense action object without values (default values)', () => {
//   const action = addExpense({});
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       description: '', 
//       amount: 0,
//       note: '',
//       createdAt: 0,
//       id: expect.anything()
//     }
//   }) 
// })



// new test 
// need to craete a fake redux store for testing
test('should add expense to database and store !!!', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: "this one is better",
    createdAt: 1000
  };

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    // console.error('actions 1 >>>', actions)
    // console.error('actions 2 >>>', actions[0])
    // console.error('actions 3 >>>', actions[0].expense.id)
    // console.error('actions 4 >>>', actions[0].expense.description)
    // .getActions()  outputs an array of the action that was generated 
    expect(actions[0]).toEqual({
      type: "ADD_EXPENSE",
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });

    // to verify the content of   actions[0].expense.id  see above console.log 
    database.ref(`expenses/${actions[0].expense.id}`).once('value').then((snapshot) => {
      // console.error('inside database >>>', snapshot.val() ) // to verify the content of snapshot from firebase
      // expect(snapshot.val()).toEqual({ 
      //   amount: 3000,
      //   createdAt: 1000,
      //   description: 'Mouse',
      //   note: 'this one is better' 
      // })
      // shorter version
      expect(snapshot.val()).toEqual(expenseData)
      done();
    });
  });
});




// this will replace the default test we removed above 
test('should add expense with defaults to database and store', () => {
  const store = createMockStore({});
  const expenseData = {
    description: "",
    amount: 0,
    note: "",
    createdAt: 0
  };
  store.dispatch(startAddExpense()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "ADD_EXPENSE",
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });
  })
})







////////////////////////////////////////////////// 
// below are existing test that are passing 

// test('should generate removeExpense action object', () => {
test('should setup removeExpense action object', () => {  
  expect(removeExpense({id: '1'})).toEqual({
    id: '1', 
    "type": "REMOVE_EXPENSE"
  })
})


// export const removeExpense = ({ id } = {}) => ({
//   type: 'REMOVE_EXPENSE',
//   id
// });

test('should setup editExpense action object', () => {
  // console.error('checking >>> ', editExpense('2', {note: "testing"}) )
  const updates = {
    description: 'test description', 
    note: "test note"
  }
  expect(editExpense('123abc', updates)).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates
  })
})

test('should setup editExpense action object -- 2 ', () => {
  const action = editExpense('123abc', {description: 'my description'})
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      description: 'my description'
    }
  })
})


// export const editExpense = (id, updates) => ({
//   type: 'EDIT_EXPENSE',
//   id,
//   updates
// });
