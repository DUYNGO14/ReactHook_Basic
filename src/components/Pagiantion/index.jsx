import PropTypes from 'prop-types';
Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func
};

Pagination.defaultProps = {
    onPageChange: null
};

function Pagination(props) {
    const { pagination, onPageChange } = props;
    const { _page, _limit, _totalRows } = pagination;
    const totalPage = Math.ceil(_totalRows / _limit);
    return (
        <div>
            <button
            disabled={pagination._page <= 1}
            onClick={() => onPageChange(_page - 1)}
            >
            Prev
            </button>
            <span>
            {_page} of {totalPage}
            </span>
            <button
            disabled={_page >= totalPage}
            onClick={() => onPageChange(_page + 1)}
            >
            Next
            </button>
        </div>
    );
}

export default Pagination;