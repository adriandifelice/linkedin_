import React from 'react';
import '../styles/App.css'

const Results = ({results}) => {
console.log('results at results', results)
const num = 3;

let limited = results? results.slice(0,num): results;
// const limitedRes = results.slice(0, num);
// console.log(limited);

  return ( 
    <>
      <h1>Results</h1>
      {results && results.map(result => {return <div className='result'>
        {result.title}
        {result.snippet}
      </div>} )}
      </>
   );
}
 
export default Results;