import React, {useState} from 'react';
import Results from '../components/Results'
import '../styles/App.css'


// const Api= 'AIzaSyBJkegzsrh7umI7r4oeHmYu-M9rvM381XU';
//const SEID = '1889220a0c6c7bc10';

const Search = () => {
  const [userInput, setUserInput] = useState('');
  const [results, setResults] = useState();


async function handleCheck () {
  console.log('userInput', userInput)
  try {
        await fetch(`http://localhost:3005/`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userInput
          })
        } )
        .then(res => console.log('Response from call',res));
       
      } catch (error) {
        console.log('error')
      }
  }

 


async function handleClick () {
  // try {
  //   await fetch(`https://www.googleapis.com/customsearch/v1?key=${Api}&cx=${SEID}&q=${fullUrl}`)
  //   .then(res => res.json())
  //   .then(data => setResults(data.items))
  // } catch (error) {
  //   console.log('error')
  // }

}
//{url}
  return ( 
    <div className="App">
    <div className="search">
    <h1>Search Linkedin Info</h1>
    <p> 
      <input placeholder="enter user name" onChange={(e)=>setUserInput(e.target.value)}></input>
    </p>
    {/* <button onClick={() => handleClick()}>Search</button> */}
    <button onClick={() => handleCheck()}>checkUrl</button>
    </div>
    <div className="results">
        <Results results={results}/>
    </div>
  </div>
   );
}
 
export default Search;



    
