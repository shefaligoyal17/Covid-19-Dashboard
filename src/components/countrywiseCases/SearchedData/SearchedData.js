import React from 'react';
import styles from './SearchedData.module.css';

const SearchData=(props)=>{
    return(
    <span className={styles.Search}>
        <i className="fa fa-search"></i>
        <input
          className={styles.Input}
          type="search"
          name="name"
          value={props.value}
          onChange={props.changed}
          onKeyDown={props.keypressed}
          placeholder="Search Location"
        />
      </span>);
}

export default SearchData;