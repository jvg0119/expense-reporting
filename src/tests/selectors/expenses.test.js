import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should filter by text value', () => {
  // console.error('>>> ', expenses)
  const filters = {
    text: 'bill',
    sortBy: 'date',  // this is the default
    startDate: undefined,
    endDate: undefined
  }
  const result = selectExpenses(expenses, filters)
  // console.error('result >>> ', result);
  expect(result.length).toBe(2);
  expect(result).toEqual([expenses[2], expenses[1]])
  // console.error('>>> ', result.map((expense) =>  expense.id ) )
  // console.error('>>> ', result[0].id )
})

test('should filter by start date', () => {
  const filters = {
    text: '',
    sortBy: 'date',  // this is the default
    // startDate: 0,
    startDate: moment(0),
    endDate: undefined
  }
  const result = selectExpenses(expenses, filters)
  expect(result.length).toBe(2);
  expect(result).toEqual([expenses[2], expenses[0]])
})

test('should filter by endDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',  // this is the default
    startDate: undefined,
    endDate: moment(0)
  }
  const result = selectExpenses(expenses, filters);
  // console.log('>>> ', result)
  expect(result.length).toBe(2);
  expect(result).toEqual([ expenses[0], expenses[1] ])
})

test('should sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',  // this is the default
    startDate: undefined,
    endDate: undefined
  }
  const result = selectExpenses(expenses, filters);
  expect(result.length).toBe(3);
  expect(result).toEqual([ expenses[2], expenses[0], expenses[1] ])
})

test('should sort by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount', 
    startDate: undefined,
    endDate: undefined
  }
  const result = selectExpenses(expenses, filters);
  expect(result.length).toBe(3);
  expect(result).toEqual([ expenses[0], expenses[2], expenses[1] ]);
})

