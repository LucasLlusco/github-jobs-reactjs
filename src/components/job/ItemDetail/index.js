import { faClock, faEarthAmericas, faLeftLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import { ItemImg, ItemLocationTime, ItemType } from '../../home/ItemList/Item/styled'
import { AsideContent, 
    AsideLinkBack, 
    AsideTitle, 
    JobAside, 
    JobCompany, 
    JobDescription, 
    JobInformation, 
    JobPosition, 
    JobWrapper 
} from './styled'

const ItemDetail = ({item}) => {
  return (
    <JobWrapper>
        <JobAside>
            <AsideLinkBack>
                <Link to={"/"}><FontAwesomeIcon icon={faLeftLong}/> Back to search</Link>
            </AsideLinkBack>
            <AsideTitle>How to Apply</AsideTitle>
            <AsideContent dangerouslySetInnerHTML={{__html: item.how_to_apply}}>
            </AsideContent>
        </JobAside>
        <JobInformation>
            <JobPosition>
                <div>
                    <h2>{item.title}</h2> 
                    <ItemType>{item.type}</ItemType>     
                </div>
                <ItemLocationTime>
                    <FontAwesomeIcon icon={faClock}/>
                    <span>{new Date (Date.parse(item.created_at)).toDateString()}</span>
                </ItemLocationTime>                                   
            </JobPosition>
            <JobCompany>
                <ItemImg>
                    <p>not found</p>
                </ItemImg>
                <div>
                    <h3>{item.company}</h3>
                    <ItemLocationTime>
                        <FontAwesomeIcon icon={faEarthAmericas}/>
                        <span>{item.location}</span>
                    </ItemLocationTime>  
                </div>
            </JobCompany>
            <JobDescription dangerouslySetInnerHTML={{__html: item.description}}>                
            </JobDescription>
        </JobInformation>     
    </JobWrapper>
  )
}

export default ItemDetail