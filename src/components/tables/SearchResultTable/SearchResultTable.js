import React from 'react';
import PropTypes from 'prop-types';
import { useTable } from 'react-table';
// import { connect } from 'react-redux';

import './SearchResultTable.css';

function SearchResultTable(props) {

  const { data, columns } = props;

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
  );

  return (
      <table className='table table-borderless' {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
        
      </table>
  );
}

SearchResultTable.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array,
}

SearchResultTable.defaultProps = {
  data: [],
  columns: [],
}

export default SearchResultTable