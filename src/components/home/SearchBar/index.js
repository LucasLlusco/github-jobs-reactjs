import React from 'react'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SearchBarWrapper, SearchBg } from './styled'

const SearchBar = ({value, changeInput}) => {
  return (
    <SearchBg>
        <SearchBarWrapper>
            <FontAwesomeIcon icon={faBriefcase} />                  
            <input type="text" 
                placeholder='Title, companies, expertise or benefits'
                value={value} 
                onChange={changeInput} 
            />
            <button>Search</button>
        </SearchBarWrapper>
    </SearchBg>
  )
}

export default SearchBar