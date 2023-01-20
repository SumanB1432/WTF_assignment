import React from 'react';
import Button from './reusable/Button';

function Search() {
  return (
    <div>
        <input type='text' placeholder='search your gym here' style={{size:'10%',backgroundColor:'whitesmoke'}}></input>
        <Button children='Search' ></Button>
    </div>
  )
}

export default Search