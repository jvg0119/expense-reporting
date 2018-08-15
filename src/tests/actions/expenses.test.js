import React from 'react';
import { addExpense, removeExpense, editExpense } from '../../actions/expenses'; 

test('should setup addExpense action object with provided values', () => {
  const expense = {
    description: 'my rent', 
    amount: '500',
    note: 'my note for the rent',
    createdAt: 0,
  }
  expect(addExpense(expense)).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: 'my rent', 
      amount: '500',
      note: 'my note for the rent',
      createdAt: 0,
      id: expect.anything()
    }   
  }) 
})

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

test('should setup addExpense action object with provided values -- 2', () => {
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


test('should setup addExpense action object without values', () => {
  const action = addExpense({});
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '', 
      amount: 0,
      note: '',
      createdAt: 0,
      id: expect.anything()
    }
  }) 
})


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
