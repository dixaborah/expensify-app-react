import moment from 'moment'


const filters = {
    text: '',
    sortBy: 'date_recent',
    startDate: undefined,
    endDate: undefined
}


const altFilters = {
    text: 'm',
    sortBy: 'amount_lowest',
    startDate: moment(0).add(44, 'years'),
    endDate: moment(0).add(50, 'years')
}


export { altFilters, filters}