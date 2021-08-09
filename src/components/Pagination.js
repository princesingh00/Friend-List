import React, { useState } from 'react'
import "../assets/css/Pagination.css"

function Pagination({ pagesCount, handlePage, }) {

    const [currentPage, setCurrentPage] = useState(0);

    const handlePageClick = (e, index) => {
        setCurrentPage(index);
        handlePage(index);
    };

    return (
        <div className="pagination">
            {[...Array(pagesCount)].map((page, i) => (
                <div className="pagination__item"
                    onClick={e => handlePageClick(e, i)}>
                    {i + 1}
                </div>
            ))
            }
        </div >)
}

export default Pagination;