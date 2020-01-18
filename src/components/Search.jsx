import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { searchRequest } from '../actions';
import '../assets/styles/components/Search.scss';

const Search = ({ isHome, searchRequest }) => {
  const inputStyle = classNames('input', {
    isHome,
  });
  const handleSearch = (event) => {
    searchRequest(event.target.value);
  };
  return (
    <section className='main'>
      <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
      <input onChange={handleSearch} type='text' className={inputStyle} placeholder='Buscar...' />
    </section>
  );
};

const mapDispatchToProps = {
  searchRequest,
};

export default connect(null, mapDispatchToProps)(Search);
