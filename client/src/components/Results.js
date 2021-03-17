import React from 'react';
import '../styles/App.css'

const Results = ({results, number}) => {
 const searchItems = results.items;
 const num = number;

 const limitedRes = searchItems.slice(0, number);

  return ( 
    <>
      <h1>Results</h1>
      {limitedRes? limitedRes.map(result => {return <div className='result'>
        <h3>{result.title}</h3>
        <p>{result.snippet}</p>
      </div>} ):'No Items'}
      </>
   );
}

 
export default Results;