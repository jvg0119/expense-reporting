import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilters extends React.Component {
  
  state = {
    calendarFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    // this.props.dispatch(setStartDate(startDate));
    // this.props.dispatch(setEndDate(endDate));
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = (calendarFocused) => {
    // console.log('from onFocusChange >>> ', calendarFocused)
    // below are different versions of setState 
    // this.setState({ calendarFocused })
    // this.setState({ calendarFocused: calendarFocused })
    // this.setState(() => {
    //   return {
    //     calendarFocused: calendarFocused
    //   }
    // })
    // this.setState(() => ({ calendarFocused: calendarFocused }) );
    this.setState(() => ({ calendarFocused }));
  }
  
  onTextChange = (e) => {
    // this.props.dispatch(setTextFilter(e.target.value));
    this.props.setTextFilter(e.target.value);
    // console.log('onTextChange is running !!!')
  }

  onSortBy = (e) => {
    if (e.target.value === 'date') {
      // this.props.dispatch(sortByDate());
      this.props.sortByDate();
    } else if (e.target.value === 'amount') {
      this.props.sortByAmount();
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          // onChange={(e) => {
          //   this.props.dispatch(setTextFilter(e.target.value));
          // }}
          onChange={this.onTextChange}
        />
        <select
          value={this.props.filters.sortBy}
          // onChange={(e) => {
          //   if (e.target.value === 'date') {
          //     this.props.dispatch(sortByDate());
          //   } else if (e.target.value === 'amount') {
          //     this.props.dispatch(sortByAmount());
          //   }
          // }}
          onChange={this.onSortBy}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);

// refactor these from    ExpenseListFilters.js 
//   break out the inline functions 
//   add mapDispatchToProps


