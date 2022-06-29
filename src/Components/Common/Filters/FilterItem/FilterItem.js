import React from 'react'
import './FilterItem.css'

const FilterItem = ({filter}) => {
  return (
    <div className='filterItem'>
        {filter.icon && filter.icon}
        <div className='filter-name'>{filter.title}</div>
    </div>
  )
}

export default FilterItem