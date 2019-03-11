import React from 'react';
import { Table } from 'reactstrap';
import Pagination from 'react-js-pagination';
import PropTypes from 'prop-types';

// Components
import Item from './Item';
import Loading from '../../shared/loading/Loading';

const ListItems = ({
  items, isLoading, handleDelete, handleEdit, perPage, visiblePages, activePage, handlePageChange
}) => {
  const totalItemsCount = items.length;
  const numOfPages = Math.ceil(totalItemsCount / perPage);
  const startOffSet = (activePage - 1) * perPage;
  let startCount = 0;

  const paginatedItems = items.length && items.map((item, index) => {
    if (index >= startOffSet && startCount < perPage) {
      startCount += 1;
      return (
        <Item
          key={item.id}
          item={item}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      );
    }

    return false;
  });

  return (
    <React.Fragment>
      {isLoading
        ? <Loading />
        : (
          <React.Fragment>
            <Table hover responsive size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Key</th>
                  <th>Value</th>
                  <th>Value Type</th>
                </tr>
              </thead>
              <tbody>
                {paginatedItems}
              </tbody>
            </Table>

            {numOfPages > 1
              && (
                <Pagination
                  activePage={activePage}
                  itemsCountPerPage={perPage}
                  totalItemsCount={totalItemsCount}
                  pageRangeDisplayed={visiblePages}
                  onChange={handlePageChange}
                  itemClass="page-item"
                  linkClass="page-link"
                />
              )
            }
          </React.Fragment>
        )
      }
    </React.Fragment>
  );
};

ListItems.propTypes = {
  items: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  perPage: PropTypes.number.isRequired,
  visiblePages: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired
};

export default ListItems;
