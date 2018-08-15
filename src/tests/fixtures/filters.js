
import moment from 'moment'; 

export const filtersFixture = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

export const altfiltersFixture = {
  text: 'some text',
  sortBy: 'amount', 
  startDate: moment(0),
  endDate: moment(0).add(3, 'days')
}





