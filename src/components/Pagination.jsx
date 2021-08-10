import React, { useState } from 'react'
import { useEffect } from 'react';
import "../assets/css/Pagination.css"

function Pagination({ currentPage, pagesCount, handlePage }) {

    const [currentPagee, setCurrentPagee] = useState(currentPage);

    useEffect(() => {
        setCurrentPagee(currentPage);
    }, [currentPage])

    const handlePageClick = (e, index) => {
        setCurrentPagee(index);
        handlePage(index);
    };

    return (
        <div className="pagination">
            {[...Array(pagesCount)].map((page, i) => (
                <div className={`${currentPagee === i ?
                    'pagination__item active' :
                    'pagination__item'}`}
                    key={i}
                    onClick={e => handlePageClick(e, i)}>
                    {i + 1}
                </div>
            ))
            }
        </div >)
}

export default Pagination;