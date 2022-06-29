import React from 'react'
import FilterItem from './FilterItem/FilterItem'
import './Filters.css'

const Filters = ({filterList}) => {
  return (
    <div className='filters'>
        {filterList && filterList.map((filter) => {
            return <div> <FilterItem filter={filter} key={filter.id} /> </div>
        })}
    </div>
  )
}

export default Filters