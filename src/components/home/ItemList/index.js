import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import Item from './Item/index'
import { ItemListWrapper } from './styled'

const ItemList = ({items}) => {
  const itemsPerPage = 5;
 
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => { 
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);


  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };
  
  return (
    <ItemListWrapper>
        {currentItems.map((element) => (
            <Item key={element.id} item={element}/>
        ))}
        <ReactPaginate 
          previousLabel={"<"} 
          nextLabel={">"} 
          pageCount={pageCount} 
          onPageChange={handlePageClick} 
          containerClassName={"paginationBtns"} 
          previousLinkClassName={"previousBtn"} 
          nextLinkClassName={"nextBtn"} 
          disabledClassName={"paginationDisabled"} 
          breakClassName={"paginationBreak"} 
          activeClassName={"paginationActive"}
        />
    </ItemListWrapper>
  )
}

export default ItemList