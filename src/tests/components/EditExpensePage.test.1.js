import React from 'react';
import { shallow } from 'enzyme';
// import EditExpensePage from '../../components/EditExpensePage';
import {EditExpensePage} from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, history, removeExpense, wrapper;
  beforeEach(() => {
    editExpense = jest.fn(),
    history = {push: jest.fn()},
    removeExpense = jest.fn(),
    wrapper = shallow(
      <EditExpensePage 
        editExpense={editExpense} 
        removeExpense={removeExpense} 
        history={history} 
        expense={expenses[0]}
      />)
  })

test('should render editExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
})

it('should handle editExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);//(expenses[0].id, expenses[0])
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0])
    // expenses[0].id, {
    //   description: expenses[0].description,
    //   amount: expenses[0].amount,
    //   createdAt: expenses[0].createdAt,
    //   note: expenses[0].note,
    //   id: expenses[0].id      
    // }
  // )
})

it('should handle removeExpense', () => {
  // wrapper.find('ExpenseForm').prop('removeExpense')(expenses[0].id);
  // wrapper.find('button').simulate('click', expenses[0].id)
  wrapper.find('button').simulate('click')
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeExpense).toHaveBeenLastCalledWith({id: expenses[0].id});

})

// this.props.removeExpense({ id: this.props.expense.id });