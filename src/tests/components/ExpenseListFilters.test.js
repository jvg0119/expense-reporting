import React from 'react'; 
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filtersFixture, altfiltersFixture } from '../fixtures/filters';
import moment from 'moment'; // 

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;
beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn(); 
  wrapper = shallow(
  <ExpenseListFilters 
    setTextFilter={setTextFilter}
    sortByDate={sortByDate}
    sortByAmount={sortByAmount}
    setStartDate={setStartDate}
    setEndDate={setEndDate}
    filters={filtersFixture}   // value={this.props.filters.text} ; it gets the text from here (from value) checkout the onTextChange function 
  />)
})

test('should render ExpenseListFilters default values correctly', () => {
  expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseListFilters new values correctly', () => {
  wrapper.setProps(altfiltersFixture);
  // console.log('wrapper = ', wrapper)
  expect(wrapper).toMatchSnapshot();
})

/*
notes: 
analyzing what needs to be passed as props to  ExpenseListFilters 
and where these props will be comming from: 
  need to mock the functions that are inside the functions ran from render() 
  from render() we get these functions below that will run 
    onChange={this.onTextChange}                 
    onChange={this.onSortBy                     
    onDatesChange={this.onDatesChange}          
    onFocusChange={this.onFocusChange}     
  inside each of these functions will be other functions that comes from the store 
  these subfunctions are accessed by ExpesneListFilters.js component through   connect() 
  w/c we don't ahve access to    so we need to mock these functions: 
    setTextFilter
    sortByDate
    sortByAmount
    setStartDate
    setEndDate     
  onFocusChange is not mocked
*/

test('should handle text change', () => {
  const value = 'new text'
  wrapper.find('input').simulate('change', {target: {value}} );
  // wrapper.find('input').at('0').prop('onTextChange', {target: {value}} )   // does not work 
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
})

test('should handle sortByDate', () => {
  const value = 'date';
  wrapper.find('select').simulate('change', {target: {value} } );
  expect(sortByDate).toHaveBeenCalled()
})

test('should handle sortByAmount', () => {    /////////////////////// 
  const value = 'amount';
  wrapper.find('select').simulate('change', {target: {value} } );  
  // wrapper.find('select').prop('onDatesChange')({target: {value} })   ;    // cannot make prop() work here
  expect(sortByAmount).toHaveBeenCalled()
})

test('should set startDate', () => {
  const startDate = altfiltersFixture.startDate;
  wrapper.find('DateRangePicker').prop('onDatesChange')({startDate});
  expect(setStartDate).toHaveBeenLastCalledWith(startDate)
})

test('should set endDate', () => {
  const endDate = altfiltersFixture.endDate; //OK
  // const endDate = {startDate: moment(0)}; // OK
  wrapper.find('DateRangePicker').prop('onDatesChange')({endDate});
  // wrapper.find('DateRangePicker').simulate('change', {endDate}) // couldn't make this to work 
  expect(setEndDate).toHaveBeenLastCalledWith(endDate)
  // expect(setEndDate).toHaveBeenCalled()
})

test('should handle date focus change', () => {
  const calendarFocused =  'startDate';
  // console.log('calendarFocused >>> ', calendarFocused);
  // console.log('wapper.debug() >>> ', (wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused)).debug());
  wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused)
  // wrapper.find('DateRangePicker').simulate('change', calendarFocused)  // this works also together w/ the const calendayFocused above 
})







