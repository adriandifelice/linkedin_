import React from 'react';
import '../styles/App.css'

const Results = ({results, number}) => {
 const num = number;


  return ( 
    <>
      {results? results.items.slice(0,num).map(result => {return <div className='result'>
        <h3>{result.title}</h3>
        <p>{result.snippet}</p>
      </div>} ):'No Items'}
      </>
   );
}

 
export default Results;