import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import { ItemCompany, 
  ItemDetails, 
  ItemImg, 
  ItemInfo, 
  ItemLocationTime, 
  ItemLocationTimeWrapper, 
  ItemTitle, 
  ItemType, 
  ListItem 
} from './styled'

const Item = ({item}) => {
  return (
    <Link to={`job/${item.id}`}>
      <ListItem>
        <ItemImg>
          <p>not found</p>
        </ItemImg>
        <ItemInfo>
          <ItemCompany>{item.company}</ItemCompany>
          <ItemTitle>{item.title}</ItemTitle>
          <ItemDetails>
            <ItemType>{item.type}</ItemType>
            <ItemLocationTimeWrapper>
              <ItemLocationTime>
                <FontAwesomeIcon icon={faEarthAmericas}/>
                <span>{item.location}</span>
              </ItemLocationTime>
              <ItemLocationTime>
                <FontAwesomeIcon icon={faClock}/>
                <span>{new Date (Date.parse(item.created_at)).toDateString()}</span>
              </ItemLocationTime>
            </ItemLocationTimeWrapper>
          </ItemDetails>
        </ItemInfo>
      </ListItem>
    </Link>
  )
}

export default Item