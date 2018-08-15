import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment'; 

test('should set default state', () => {
  const currentState = undefined; 
  const action = { type: '@@INIT' }
  const result = expensesReducer(currentState, action);
  // console.log('..>>>', result)
  expect(result).toEqual([])
})

test('should addExpense properly', () => {
  const newExpense = {
    id: '10',
    description: 'adding new expense',
    note: '',
    amount: '50000',
    createdAt: moment().add(3, 'days')
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense: newExpense
  }; 
  const result = expensesReducer(expenses, action);
  // console.error('result >>>', result)
  expect(result.length).toBe(4);
  expect(result).toEqual([...expenses, newExpense]) 
  expect(result[3]).toEqual(newExpense)
})

test('should removeExpense by id', () => {
  // console.error('>>>> ', expenses)
  const id = expenses[0].id
  const action = {type: 'REMOVE_EXPENSE', id}
  // const action = {type: 'REMOVE_EXPENSE', id: '1'}
  // console.error('action >>> ', action)
  const result = expensesReducer(expenses, action)
  // console.error('>>>> ', result)
  expect(result.length).toEqual(2)
  expect(result).toEqual([expenses[1], expenses[2]])
})

test('should NOT removeExpense if id NOT found', () => {
  // console.error('>>>> ', expenses)
  const id = '4'; //expenses[0].id
  const action = {type: 'REMOVE_EXPENSE', id}
  // const action = {type: 'REMOVE_EXPENSE', id: '1'}
  // console.error('action >>> ', action)
  const result = expensesReducer(expenses, action)
  // console.error('>>>> ', result)
  expect(result.length).toEqual(3)
  expect(result).toEqual([expenses[0], expenses[1], expenses[2]])
  expect(result).toEqual(expenses)
})


test('should editExpense properly', () => {
  const updates = {description: 'new updates'};
  const action = {type: 'EDIT_EXPENSE', id: '1', updates: updates}
  // console.error('updates >>>> ', action)
  const result = expensesReducer(expenses, action);
  // console.error('result >>> ', result)
  expect(result[0].description).toEqual(updates.description)
})

test('should NOT editExpense if expense NOT found', () => {
  const updates = {description: 'new updates'};
  const action = {type: 'EDIT_EXPENSE', id: '5', updates: updates}
  // console.error('updates >>>> ', action)
  const result = expensesReducer(expenses, action);
  // console.error('result >>> ', result)
  expect(result[0].description).not.toEqual(updates.description)
  expect(result).toEqual(expenses)
})


