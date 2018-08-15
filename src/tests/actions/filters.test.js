import { 
  setTextFilter, 
  sortByDate, 
  sortByAmount, 
  setStartDate, 
  setEndDate } from '../../actions/filters';
import moment from 'moment';

test('should setup setTextFilter action object with text value',() => {
  // console.error('setTextFilter >>> ', setTextFilter('new text'));
  const text = 'new text'
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    // text: text   
    text // short form below
  })
})

test('should setup setTextFilter action object without text value',() => {
  // console.error('setTextFilter >>> ', setTextFilter('new text'));
  // const text = 'new text'
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: '' 
  })
})

test('should setup sortByDate action object', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  })
}) 

test('should setup sortByAmount action object', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  })
})

test('should generate setStartDate action object', () => {
  const startDate = moment(0); 
  const action = setStartDate(startDate)
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate
  })
})

test('should generate setEndDate action object', () => {
  const endDate = moment(0); 
  const action = setEndDate(endDate)
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate
  })
})


