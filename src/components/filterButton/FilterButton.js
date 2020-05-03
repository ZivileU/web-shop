import React, {useState} from 'react'
import {string} from 'prop-types'
import classnames from 'classnames'
import './FilterButton.scss'

const FilterButton = ({
  filterName,
  setProductFilters,
  colors,
  sizes,
  colorFilters,
  sizeFilters
}) => {
  const [isOn, toggleIsOn] = useState(false)

  const toggleFilter = ({currentFilters, allFilters}) => {
    if (allFilters.includes(filterName)) {
      if (currentFilters.includes(filterName)) {
        return currentFilters.filter(filter => filter !== filterName)
      }
      return [...currentFilters, filterName]
    }
    return [...currentFilters]
  }

  return (
    <button
      className={classnames('filterButton', {on: isOn})}
      onClick={() => {
        setProductFilters({
          colors: toggleFilter({currentFilters: colors, allFilters: colorFilters}),
          sizes: toggleFilter({currentFilters: sizes, allFilters: sizeFilters})
        })
        toggleIsOn(!isOn)}
      }
    >
      {filterName}
    </button>
  )
}

FilterButton.propTypes = {
  filter: string
}

export default FilterButton
