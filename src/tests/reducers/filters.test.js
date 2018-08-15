import filtersReducer from '../../reducers/filters';
// import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should setup default filter values', () => {
  // const state = undefined;
  // const action = {type: '@@INIT'};//{type: 'ADD_EXPENSE'}
  // const result = filtersReducer(state, action)
  // expect(result).toEqual({
  const state = filtersReducer(undefined, {type: '@@INIT'})
  expect(state).toEqual({    
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})

test('should set sortBy to amount', () => {
  // const state = filtersReducer(, {type: 'SORT_BY_AMOUNT'} )
  const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'})
  // console.error('sortByAmount >>> ', state);
  expect(state).toEqual({
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
  // or 
  expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  }
  // const state = filtersReducer(undefined, {type: 'SORT_BY_DATE'})
  const state = filtersReducer(currentState, {type: 'SORT_BY_DATE'})
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
  // or 
  expect(state.sortBy).toBe('date')
})
// challenge 
test('should set text filter', () => {
  // const expenseState = {
  //   text: '',
  //   sortBy: 'date',
  //   startDate: undefined, // moment().startOf('month'),
  //   endDate: undefined// moment().endOf('month')
  // }
  const text = 'new text';
  const action = { type: 'SET_TEXT_FILTER' , text }
  const state = filtersReducer(undefined, action)
  // console.error('...>>> ', state.text)
  expect(state.text).toBe(text)
})

test('should set startDate filter', () => {
  const startDatef = moment();
  const action = { type: 'SET_START_DATE', startDate: startDatef}
  const state = filtersReducer(undefined, action)
  expect(state.startDate).toBe(startDatef) 
})

test('should set endDate filter', () => {
  const endDate = moment()
  const action = { type: 'SET_END_DATE', endDate: endDate}
  const state = filtersReducer(undefined, action)
  expect(state.endDate).toBe(endDate)
})

