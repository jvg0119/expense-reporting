import React from 'react'
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should render ExpenseForm properly', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with data properly', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
  const a = wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  expect(wrapper.state('error')).toBe("Please provide description and amount.");
  expect(wrapper.state('error').length).toBeGreaterThan(0) // it's a string 
  expect(wrapper).toMatchSnapshot();
})

test('should set description on input change', () => {
  const value = "bingo";
  const wrapper = shallow(<ExpenseForm />);
  // const a = wrapper.find('input').at('0').simulate( 'change', {target: {value: 'bingo'}} )  //this works also 
  const a = wrapper.find('input').at('0').simulate( 'change', {target: {value} } ) // need to add const value above
  // this is    e.target.value    target.value is  "bingo"
  // console.error('input >>> ', a);
  // console.error('description >>> ', wrapper.state('description'))
  expect(wrapper.state('description')).toEqual('bingo');
  expect(wrapper.state('description')).toEqual(value)
})

test('should set note on textarea change', () => {
  const value = "new note";
  const wrapper = shallow(<ExpenseForm />);
  // wrapper.find('textarea').simulate('change', {target: {value} });  // OK 
  wrapper.find('textarea').at('0').simulate('change', {target: {value} });
  // console.error('wrapper >>> ', wrapper.state('note'));
  expect(wrapper.state('note')).toBe(value)
})

// should set amount if valid input   // 123.12 
// should NOT set amout if invalid input   // 12.222 
test('should set amount if valid input', () => {
  const value = '123.12';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at('1').simulate('change', {
    target: {value}
  })
  expect(wrapper.state('amount')).toBe(value)
})

test('should NOT set amount if invalid input', () => {
  const value = '123.122';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at('1').simulate('change', {
    target: {value}
  })
  expect(wrapper.state('amount')).toBe('')
})


///////////////////////////////////////////////////// 
// Lecture 123:  Testing Spies 

test('testing spies', () => {
  const onSubmitSpy = jest.fn();
  onSubmitSpy();
  expect(onSubmitSpy).toHaveBeenCalled();
  onSubmitSpy('bingo', 123);
  expect(onSubmitSpy).toHaveBeenCalledWith('bingo', 123);
  onSubmitSpy({name: "Jimmy"});
  expect(onSubmitSpy).toHaveBeenLastCalledWith({name: "Jimmy"});
})



test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {} // needs a function called preventDefault; just a dummy file (does nothing)
  }); 
  expect(wrapper.state('error')).toBe('');
  //expect(onSubmitSpy).toHaveBeenLastCalledWith(expenses[0]); // does not work because 
                                                             // bec we do not iclude "id" in the form so we can use it for edit also

  // expect(onSubmitSpy).toHaveBeenLastCalledWith({
  //   "amount": 80000, 
  //   "createdAt": 0, 
  //   "description": "Rent", 
  //   "note": "this month rent"
  // });

  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount, //80000, // why it does not work ??? because the fixture needs to be number not a string
    createdAt: expenses[0].createdAt,
    note: expenses[0].note
  });
})


// onDateChange 
test('should set new date onDateChange', () => {
  const now = moment()
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onDateChange')(now)
  // console.error('>>> ', wrapper.state('createdAt') )
  // console.error('moment >>> ', moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))
  // console.error('now >>>' , now.format("dddd, MMMM Do YYYY, h:mm:ss a"))
  expect(wrapper.state('createdAt')).toBe(now)
  // expect(wrapper.state('createdAt')).toBe('')
})

// onFocusChange 
test('should set calendarFocused on change', () => {
  const focused = true
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('SingleDatePicker').prop('onFocusChange')({focused})
  // wrapper.find('SingleDatePicker').prop('onFocusChange')({focused: true})
  expect(wrapper.state('calendarFocused')).toBe(true)
})





