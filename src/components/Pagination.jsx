import React from 'react'
import '@styles/pagination.css'

const Pagination = (props) => {
    const {page, totalPages, onLeftClick, onRightClick} = props;

    return (
        <div className="pagination-contanier">
            <button className="buttons left"
                onClick={onLeftClick}>
                    left
            </button>
            <div className="pages">{page} de {totalPages}</div>
            <button className="buttons rigth"
                onClick={onRightClick}>
                    rigth
            </button>
        </div>
    );
}

export default Pagination;