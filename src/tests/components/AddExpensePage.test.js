import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let addExpense, history, wrapper;
beforeEach(() => {
  addExpense = jest.fn();
  history = {push: jest.fn()};
  wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />);
})

test('should render AddExpensePage properly', () => {
  // const addExpense = jest.fn();
  // const history = {push: jest.fn()};
  // const wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />);
  // const wrapper = shallow(<AddExpensePage />);
  expect(wrapper).toMatchSnapshot();
})


test('should handle onSubmit', () => {
  // const addExpense = jest.fn();
  // const history = {push: jest.fn()};
  // const wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />);
  // const a = wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
  // console.error('>>>> ', a)
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
  expect(addExpense).toHaveBeenLastCalledWith(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith('/')
})


