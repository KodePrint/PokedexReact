import React from 'react'
import '@styles/pagination.css'

const Pagination = (props) => {
    const {page, totalPages, onLeftClick, onRightClick} = props;

    return (
        <div className="pagination-contanier">
            <button className="buttons left"
                onClick={onLeftClick}>
                    <i className="fas fa-angle-left"></i>
            </button>
            <div className="pages">{page} de {totalPages}</div>
            <button className="buttons rigth"
                onClick={onRightClick}>
                    <i className="fas fa-angle-right"></i>
            </button>
        </div>
    );
}

export default Pagination;