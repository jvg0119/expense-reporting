import React from 'react'; 
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { shallow } from 'enzyme';
import { filters, altfilters } from '../fixtures/filters';
// import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;
beforeEach(() =>{
  setTextFilter = jest.fn(),
  sortByDate = jest.fn(),
  sortByAmount = jest.fn(),
  setStartDate = jest.fn(),
  setEndDate = jest.fn(),
  wrapper = shallow(
  <ExpenseListFilters    
    setTextFilter={setTextFilter}
    sortByDate={sortByDate}
    sortByAmount={sortByAmount}
    setStartDate={setStartDate}
    setEndDate={setEndDate}
    filters={filters.text}
  />)
})

test('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseListFilters with altfilters data correctly', () => {
  wrapper.setProps({ filters: altfilters });  // use setProps method for ths altfilters is from above
  expect(wrapper).toMatchSnapshot();
})


// Challenge
test('should handle text change', () => {
  const value = altfilters.text;
  wrapper.find('input').at('0').simulate( 'change', {target: {value} } ) 
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
  // or 
  // wrapper.find('input').simulate( 'change', {target: {value: altfilters.text }} ) 
  // expect(setTextFilter).toHaveBeenLastCalledWith(altfilters.text);
})

test('should sortBy Date', () => {
  wrapper.setProps({ filters: altfilters }); 
  const value = 'date';
  wrapper.find('select').simulate('change', {target: {value} })
  expect(sortByDate).toHaveBeenCalled();
})

test('should sortBy Amount', () => {
  const value = 'amount';
  wrapper.find('select').simulate('change', {target: {value} })
  expect(sortByAmount).toHaveBeenCalled();
})

test('handle date changes', () => {
  const startDate = altfilters.startDate;
  const endDate = altfilters.endDate;
  wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate});
  // console.error('date changes >>> ', startDate)
  // console.error('date changes >>> ', endDate)
  expect(setStartDate).toHaveBeenLastCalledWith(startDate)
  expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})


// last one 

test('should handle date focus changes', () => {
  const calendarFocused = 'startDate';
  wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused)
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused) 
})






