import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import SearchInput from '../components/inputs/SearchInput/SearchInput';
import SearchResultTable from '../components/tables/SearchResultTable/SearchResultTable';

import '../styles/Search.css';

function Search(props) {

  const { list } = props.music;
  const { aplayer } = props.player;

  const [searchText, setSearchText] = useState('');
  const [resultTableData, setResultTableData] = useState([]);

  useEffect(() => {
    setResultTableData([...list]);
  }, [list]);

  useEffect(() => {
    if (searchText.length === 0) {
      setResultTableData([...list]);
      return;
    }
    const result = list.filter(music => {
      return (
        _.includes(music.name.toLowerCase(), searchText.toLowerCase()) ||
        _.includes(music.artist.toLowerCase(), searchText.toLowerCase()) ||
        _.includes(music.album.toLowerCase(), searchText.toLowerCase()) ||
        _.includes(music.tags.join(' '), searchText)
      );
    });
    setResultTableData([...result]);
  }, [searchText, list]);

  const onCellPlayClick = useCallback((row) => {
    if (aplayer) {
      const listIndex = _.findIndex(aplayer.list.audios, (audio) => {
        return row.original.name === audio.name;
      })
      if (listIndex < 0) { // not in list
        aplayer.list.clear();
        aplayer.list.add(row.original);
        aplayer.play();
      } else {
        aplayer.list.switch(listIndex);
        aplayer.play();
      }
    }
  }, [aplayer]);

  const onCellAddClick = useCallback((row) => {
    if (aplayer) {
      aplayer.list.add(row.original);
      aplayer.list.show();
    }
  }, [aplayer]);

  const searchResultColumns = useMemo(
    () => [
      {
        Header: '#',
        accessor: 'id',
        Cell: props => <div>{+props.row.id + 1}</div>
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Artist',
        accessor: 'artist',
      },
      {
        Header: 'Album',
        accessor: 'album',
      },
      {
        Header: 'Tags',
        accessor: 'tags',
        Cell: props => {
          return <div>{props.row.original.tags.join(', ')}</div>
        }
      },
      {
        Header: '',
        accessor: 'play',
        width: 40,
        Cell: props => {
          return (
            <button className="btn btn-link" onClick={() => {onCellPlayClick(props.row)}}>
              <i className="bi bi-play-fill"></i>
            </button>
          );
        }
      },
      {
        Header: '',
        accessor: 'action',
        Cell: props => {
          return (
            <button className="btn btn-link" onClick={() => {onCellAddClick(props.row)}}>
              <i className="bi bi-plus"></i>
            </button>
          );
        }
      },
    ],
    [onCellPlayClick, onCellAddClick]
  )

  function onSearchInputChange(e) {
    e.preventDefault();
    setSearchText(e.target.value);
  }

  function onPlayAllButtonClick(e) {
    e.preventDefault();
    aplayer.list.clear();
    aplayer.list.add(resultTableData);
    aplayer.play();
  }

  function onAddAllbuttonClick(e) {
    e.preventDefault();
    aplayer.list.add(resultTableData);
    aplayer.list.show();
  }

  return (
    <div className='Search container-fluid' >
      <div className='row content-top-bar'>
        <SearchInput onSearchInputChange={onSearchInputChange} />
      </div>
      <div className='row pt-2 pb-3 align-items-center' >
        <div className='play-all-button ms-3' onClick={onPlayAllButtonClick}>
          <i className="bi bi-play-fill"></i>
        </div>
        <div className="dropdown col">
          <button className="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButtonSearchTableAction" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="bi bi-three-dots"></i>
          </button>
          <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButtonSearchTableAction">
            <li>
              <button className="dropdown-item" onClick={onPlayAllButtonClick}>
                Play all
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={onAddAllbuttonClick}>
                Add all to queue
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className='result-table' >
        <SearchResultTable 
          columns={searchResultColumns}
          data={resultTableData}
        />
      </div>
    </div>
  );
}

function mapStateToProps(reduxState) {
  return ({
    music: reduxState.music,
    player: reduxState.player,
  });
}

export default connect(mapStateToProps, {
  
})(Search);