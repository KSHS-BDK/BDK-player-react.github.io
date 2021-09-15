import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import SearchInput from '../components/inputs/SearchInput/SearchInput';
import SearchResultTable from '../components/tables/SearchResultTable/SearchResultTable';

import '../styles/Search.css';

function Search(props) {

  const { musicList, aplayer } = props.player;

  const [searchText, setSearchText] = useState('');
  const [resultTableData, setResultTableData] = useState([]);

  useEffect(() => {
    setResultTableData([...musicList]);
  }, [musicList]);

  useEffect(() => {
    if (searchText.length === 0) {
      setResultTableData([...musicList]);
      return;
    }
    const result = musicList.filter(music => {
      return (
        _.includes(music.name.toLowerCase(), searchText.toLowerCase()) ||
        _.includes(music.artist.toLowerCase(), searchText.toLowerCase()) ||
        _.includes(music.album.toLowerCase(), searchText.toLowerCase()) ||
        _.includes(music.tags.join(' '), searchText)
      );
    });
    setResultTableData([...result]);
  }, [searchText, musicList]);

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
          console.log(props);
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

  return (
    <div className='Search container-fluid' >
      <div className='row' >
        <SearchInput onSearchInputChange={onSearchInputChange} />
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
    player: reduxState.player,
  });
}

export default connect(mapStateToProps, {
  
})(Search);