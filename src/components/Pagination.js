import React from 'react'
import './Pagination.css'

const Pagination = ({ rowsPerPage, totalRows, paginate, currentPage }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalRows / rowsPerPage); i++) {
        pageNumbers.push(i)
    }

    const nextPage = () => {
        if(currentPage !== pageNumbers.length)
        paginate(currentPage + 1)
    }

    const previousPage = () => {
        if(currentPage >= 2)
        paginate(currentPage - 1)
    }

    return (
        <>
            <div className="paginationWrapper">
                <button onClick={() => previousPage()}>Previous</button>
                    {pageNumbers.map(number => (
                        <li key={number}>
                            <a href="#/" onClick={() => paginate(number)}>
                                {number}
                            </a>
                        </li>
                    ))}
                <button onClick={() => nextPage()}>Next</button>
            </div>
        </>
    )
}

export default Pagination
