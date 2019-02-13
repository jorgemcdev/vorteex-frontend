import React from 'react';
import { Table } from 'reactstrap';
import Pagination from 'react-js-pagination';
import PropTypes from 'prop-types';

// Components
import Item from './Item';
import Loading from '../../shared/loading/Loading';

const ListItems = ({
  // Items
  items, isLoading, handleDelete,
  // Pagination
  perPage, visiblePages, activePage, handlePageChange
}) => {
  // pagination
  const totalItemsCount = items.length;
  const startOffSet = (activePage - 1) * perPage;
  let startCount = 0;
  const paginatedItems = items.map((item, index) => {
    if (index >= startOffSet && startCount < perPage) {
      startCount += 1;
      return (
        <Item
          key={item.id}
          item={item}
          handleDelete={handleDelete}
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
            <Table hover bordered responsive size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Codename</th>
                  <th>Description</th>
                  <th>Group</th>
                  <th>Template</th>
                  <th>Destination Rooms</th>
                  <th>Source Rooms</th>
                  <th>{' '}</th>
                </tr>
              </thead>
              <tbody>
                {paginatedItems}
              </tbody>
            </Table>

            <Pagination
              activePage={activePage}
              itemsCountPerPage={perPage}
              totalItemsCount={totalItemsCount}
              pageRangeDisplayed={visiblePages}
              onChange={handlePageChange}
              itemClass="page-item"
              linkClass="page-link"
            />
          </React.Fragment>
        )
    }
    </React.Fragment>
  );
};

ListItems.propTypes = {
  // Items
  items: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  handleDelete: PropTypes.func.isRequired,
  // Pagination
  perPage: PropTypes.number.isRequired,
  visiblePages: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired
};

export default ListItems;
