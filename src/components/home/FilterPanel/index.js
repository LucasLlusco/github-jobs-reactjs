import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { FilterItem, FilterWrapper, LocationInput } from './styled'

const FilterPanel = ({changeType, value, changeInput, changeLocationRadio}) => {
  return (
    <FilterWrapper>
        <FilterItem>
            <input type="checkbox" name="fullTime" id="fullTime" 
            value={"Full Time"} onChange={changeType}/>
            <label htmlFor="fullTime">Full time</label>
        </FilterItem>
        <p>LOCATION</p>
        <LocationInput>
            <FontAwesomeIcon icon={faBriefcase} />     
            <input name='location' type="text" 
            placeholder='City, state, zip code or country'
            value={value} 
            onChange={changeInput} />             
        </LocationInput>
        <FilterItem>
            <input type="radio" name="radiovalues" id="All" 
            value={"All"} onChange={changeLocationRadio}/>
            <label htmlFor="All">All</label>
        </FilterItem>
        <FilterItem>
            <input type="radio" name="radiovalues" id="London" 
            value={"London"} onChange={changeLocationRadio}/>
            <label htmlFor="London">London</label>
        </FilterItem>
        <FilterItem>
            <input type="radio" name="radiovalues" id="Amsterdam" 
            value={"Amsterdam"} onChange={changeLocationRadio}/>
            <label htmlFor="Amsterdam">Amsterdam</label>
        </FilterItem>
        <FilterItem>
            <input type="radio" name="radiovalues" id="New York" 
            value={"New York"} onChange={changeLocationRadio} />
            <label htmlFor="New York">New York</label>
        </FilterItem>
        <FilterItem>
            <input type="radio" name="radiovalues" id="Berlin" 
            value={"Berlin"} onChange={changeLocationRadio} />
            <label htmlFor="Berlin">Berlin</label>
        </FilterItem>
    </FilterWrapper>
  )
}

export default FilterPanel