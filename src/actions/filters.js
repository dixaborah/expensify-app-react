const setEndDateFilter = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})

const setStartDateFilter = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

const sortByAmountFilter = ( { amount }) => ( {
    type: 'SORT_BY_AMOUNT',
    amount
})

const sortByDateFilter = ({ date }) => ( {
    type: 'SORT_BY_DATE',
    date
})


export { setEndDateFilter, setStartDateFilter, setTextFilter, sortByAmountFilter, sortByDateFilter }