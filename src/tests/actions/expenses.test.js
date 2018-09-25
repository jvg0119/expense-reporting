
// cleaned up

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import React from 'react';
import { startAddExpense, addExpense, removeExpense, editExpense } from '../../actions/expenses'; 
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

test('should setup addExpense action object with provided values', () => {
  // const action = addExpense(expenseData);
  const action = addExpense(expenses[0]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[0]
  }) 
})

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

  // store.dispatch(startAddExpense(expenseData)).then(() => {
  //   const actions = store.getActions();
  //   expect(actions[0]).toEqual({
  //     type: "ADD_EXPENSE",
  //     expense: {
  //       id: expect.any(String),
  //       ...expenseData
  //     }
  //   });

  //   // to verify the content of   actions[0].expense.id  see above console.log 
  //   database.ref(`expenses/${actions[0].expense.id}`).once('value').then((snapshot) => {
  //     expect(snapshot.val()).toEqual(expenseData)
  //     done();
  //   });
  // });


  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "ADD_EXPENSE",
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });
  
    // to verify the content of   actions[0].expense.id  see above console.log 
    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData)
    done();
  });
});



// this will replace the default test we removed above 
test('should add expense with defaults to database and store', (done) => {
  const store = createMockStore({});
  const expenseDefaults = {  // this is the default expense 
    description: "",
    amount: 0,
    note: "",
    createdAt: 0
  };
  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "ADD_EXPENSE",
      expense: {
        id: expect.any(String),
        ...expenseDefaults
      }
    });
    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    // console.error('snapshot.val() >>> ', snapshot.val());
    // console.error('expenseDefaults >>> ', expenseDefaults);
    expect(snapshot.val()).toEqual(expenseDefaults)
    done();
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
